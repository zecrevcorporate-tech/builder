import { GoogleGenAI, Type } from "@google/genai";
import type { MetaData, Tone, BlogPost } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const metaDataResponseSchema = {
    type: Type.OBJECT,
    properties: {
        title: {
            type: Type.STRING,
            description: "An SEO-optimized meta title, under 60 characters."
        },
        description: {
            type: Type.STRING,
            description: "An SEO-optimized meta description, under 160 characters."
        }
    },
    required: ["title", "description"]
};

export const generateMetaData = async (topic: string, tone: Tone, personality: string): Promise<MetaData> => {
    const prompt = `
        Act as a world-class SEO expert and copywriter.
        Your task is to generate an SEO-optimized meta title and meta description for a webpage.

        **Instructions:**
        1.  **Meta Title:** Must be compelling, relevant, and under 60 characters.
        2.  **Meta Description:** Must be engaging, provide a clear summary, include a call-to-action (if appropriate), and be under 160 characters.
        3.  The tone of the copy must be **${tone}**.
        4.  The brand personality to embody is: **${personality}**.
        5.  The content is about: **${topic}**.

        Generate the meta title and description based on these inputs.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: metaDataResponseSchema,
                temperature: 0.7,
            },
        });
        
        const jsonText = response.text.trim();
        const parsedData = JSON.parse(jsonText) as MetaData;

        if (!parsedData.title || !parsedData.description) {
            throw new Error("Invalid response format from API.");
        }

        return parsedData;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Could not generate meta data from Gemini API.");
    }
};

export const rewriteWithTone = async (originalText: string, tone: Tone): Promise<string> => {
    const prompt = `
        Act as an expert copy editor.
        Your task is to rewrite the following text to match a specific tone, while preserving the core message and meaning.

        **Tone to adopt:** ${tone}

        **Original Text:**
        """
        ${originalText}
        """

        **Instructions:**
        - Rewrite the text clearly and concisely in the requested tone.
        - Do not add any extra commentary, explanations, or introductions.
        - Only provide the rewritten text as the output.

        **Rewritten Text:**
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                temperature: 0.7,
            },
        });
        
        const rewrittenText = response.text.trim();

        if (!rewrittenText) {
            throw new Error("API returned an empty response.");
        }

        return rewrittenText;

    } catch (error) {
        console.error("Error calling Gemini API for tone rewrite:", error);
        throw new Error("Could not rewrite text using Gemini API.");
    }
};

const blogCalendarResponseSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            day: { type: Type.INTEGER, description: "The day number (1-7)." },
            title: { type: Type.STRING, description: "A catchy, SEO-friendly blog post title." },
            outline: {
                type: Type.OBJECT,
                properties: {
                    introduction: { type: Type.STRING, description: "A brief introduction to the blog post." },
                    mainPoints: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING },
                        description: "An array of 3-5 main talking points or sections for the blog post."
                    },
                    conclusion: { type: Type.STRING, description: "A concluding summary for the blog post." }
                },
                required: ["introduction", "mainPoints", "conclusion"]
            }
        },
        required: ["day", "title", "outline"]
    }
};

export const generateBlogCalendar = async (topic: string): Promise<BlogPost[]> => {
    const prompt = `
        Act as a professional content strategist and blogger.
        Your task is to create a 7-day blog post calendar based on a central topic or audience interest.
        For each day, provide a compelling, SEO-friendly title and a structured outline.

        **Topic / Audience Interest:** ${topic}

        **Instructions:**
        - Generate a plan for 7 days.
        - Each day must have a unique and engaging title.
        - Each day's outline must include a short introduction, 3 to 5 main talking points, and a conclusion.
        - The entire output must be a JSON array of 7 blog post objects.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: blogCalendarResponseSchema,
                temperature: 0.8,
            },
        });
        
        const jsonText = response.text.trim();
        const parsedData = JSON.parse(jsonText) as BlogPost[];

        if (!Array.isArray(parsedData) || parsedData.length === 0) {
            throw new Error("Invalid response format from API.");
        }

        return parsedData;

    } catch (error) {
        console.error("Error calling Gemini API for blog calendar:", error);
        throw new Error("Could not generate blog calendar from Gemini API.");
    }
};