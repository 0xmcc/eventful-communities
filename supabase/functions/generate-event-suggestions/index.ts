import OpenAI from "openai";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { field, currentName, currentDescription } = await req.json();
    
    const openai = new OpenAI({
      apiKey: Deno.env.get('OPENAI_API_KEY'),
    });

    let prompt = "";
    if (field === 'name') {
      prompt = `Generate a creative and engaging event name${currentName ? ` similar to but different from: "${currentName}"` : ''}.${
        currentDescription ? ` The event description is: "${currentDescription}"` : ''
      } Keep it concise and memorable.`;
    } else {
      prompt = `Generate an engaging event description${currentDescription ? ` that improves upon: "${currentDescription}"` : ''}.${
        currentName ? ` The event name is: "${currentName}"` : ''
      } Keep it informative and compelling, focusing on what makes the event special.`;
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that generates creative and professional event content."
        },
        {
          role: "user",
          content: prompt
        }
      ]
    });

    const suggestion = completion.choices[0].message.content;

    return new Response(
      JSON.stringify({ suggestion }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});