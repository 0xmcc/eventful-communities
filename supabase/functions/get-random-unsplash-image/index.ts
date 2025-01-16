import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const response = await fetch(
      'https://api.unsplash.com/photos/random?query=event&orientation=landscape',
      {
        headers: {
          Authorization: `Client-ID ${Deno.env.get('UNSPLASH_ACCESS_KEY')}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch from Unsplash')
    }

    const data = await response.json()
    
    return new Response(
      JSON.stringify({ 
        data: { 
          publicUrl: data.urls.regular 
        } 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})