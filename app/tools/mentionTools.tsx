import { mentionToolConfig } from './mentionToolConfig';
// @mentionFunctions 
import { streamChatCompletion } from './mentionFunctions/streamChatCompletion';
import { portKeyAIGateway } from './mentionFunctions/portKeyAIGateway';
import { portKeyAIGatewayTogetherAI } from './mentionFunctions/portKeyAIGatewayTogetherAI';
import { falAiStableDiffusion3Medium } from './mentionFunctions/falAiStableDiffusion3Medium';

type MentionFunctions = {
    [key: string]: (mentionTool: string, userMessage: string, streamable: any) => Promise<string | undefined>;
};

export const mentionFunctions: MentionFunctions = {
    streamChatCompletion,
    portKeyAIGateway,
    portKeyAIGatewayTogetherAI,
    falAiStableDiffusion3Medium
};

export async function lookupTool(mentionTool: string, userMessage: string, streamable: any, file?: string) {
    const toolInfo = mentionToolConfig.mentionTools.find(tool => tool.id === mentionTool);
    if (toolInfo) {
        if (file) {
            const decodedFile = await Buffer.from(file, 'base64').toString('utf-8').replace(/^data:image\/\w+;base64,/, '');
            await mentionFunctions[toolInfo.functionName](mentionTool, userMessage + "File Content: " + decodedFile, streamable);
        } else {
            await mentionFunctions[toolInfo.functionName](mentionTool, userMessage, streamable);
        }
        return;
    }
}