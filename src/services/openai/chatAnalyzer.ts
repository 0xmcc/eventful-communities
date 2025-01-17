
// import { isStyleRequest } from './features/styles/analyzer';
// import { getChatResponse } from './chatResponse';


// export interface ChatAnalysis {
//   hasStyleRequest: boolean;
//   suggestedStyles?: string;  // CSS description if it's a style request
//   response: string;          // General response to show user
//   stylePrompt?: string;     // The original message if it's a style request
// } 
// export const analyzeChatMessage = async (
//   message: string,
// ): Promise<ChatAnalysis> => {
//   console.log('🚀 Starting chat analysis:', message);
//   try {
//     const hasStyleRequest = await isStyleRequest(message);
//     console.log('📝 Style analysis complete:', hasStyleRequest);

//     if (hasStyleRequest) {
//       // Get chat response
//       const chatResponse = await getChatResponse(message, true);
      
//       // Return routing information only
//       return {
//         hasStyleRequest: true,
//         stylePrompt: message,
//         response: chatResponse
//       };
//     }

//     const response = await getChatResponse(message, false);
//     return {
//       hasStyleRequest: false,
//       response
//     };

//   } catch (error) {
//     console.error('❌ Chat analysis error:', error);
//     return {
//       hasStyleRequest: false,
//       response: "🤔 Hmm, I got a bit tangled up there. Let's talk about styling - that's my favorite topic!"
//     };
//   }
// }; 