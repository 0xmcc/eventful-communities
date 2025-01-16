import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface EmailAuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailAuthDialog({ isOpen, onClose }: EmailAuthDialogProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const { signInWithEmail, signUp, isLoading, error } = useAuth();

  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setPassword('');
      setIsSignUp(false);
    }
  }, [isOpen]);

  const createProfile = async (userId: string) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .insert({
          user_id: userId,
          username: email // Use email as initial username
        });
      
      if (error) throw error;
    } catch (error: any) {
      console.error('Error creating profile:', error);
      toast.error('Failed to create profile');
    }
  };

  const handleSubmit = async () => {
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    const result = isSignUp 
      ? await signUp(email, password)
      : await signInWithEmail(email, password);
    
    if (result.success) {
      if (isSignUp) {
        // Create profile after successful signup
        await createProfile(result.data.user.id);
        toast.success('Account created successfully!');
        onClose();
        navigate('/onboarding');
      } else {
        const { data: profile } = await supabase
          .from('profiles')
          .select()
          .eq('user_id', result.data.user.id)
          .maybeSingle();

        toast.success('Signed in successfully!');
        onClose();
        
        // If no profile exists or profile is incomplete, redirect to onboarding
        if (!profile || !profile.full_name) {
          navigate('/onboarding');
        } else {
          navigate('/events');
        }
      }
    } else {
      toast.error(result.error || 'Authentication failed');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isSignUp ? 'Sign up with Email' : 'Sign in with Email'}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button 
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Sign In')}
          </Button>
          <Button
            variant="ghost"
            onClick={() => setIsSignUp(!isSignUp)}
            className="w-full"
          >
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </Button>
          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}