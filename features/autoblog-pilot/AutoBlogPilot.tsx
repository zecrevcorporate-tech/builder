import React, { useState, useCallback } from 'react';
import { AutoBlogPilotForm } from './AutoBlogPilotForm';
import { AutoBlogPilotResult } from './AutoBlogPilotResult';
import { generateBlogCalendar } from '../../services/geminiService';
import type { BlogPost } from '../../types';

export const AutoBlogPilot: React.FC = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = useCallback(async (topic: string) => {
        setIsLoading(true);
        setError(null);
        setBlogPosts([]);
        try {
            const result = await generateBlogCalendar(topic);
            setBlogPosts(result);
        } catch (e) {
            console.error(e);
            setError('Failed to generate the blog calendar. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div className="max-w-4xl mx-auto">
            <AutoBlogPilotForm onGenerate={handleGenerate} isLoading={isLoading} />
            <div className="mt-8">
                <AutoBlogPilotResult blogPosts={blogPosts} isLoading={isLoading} error={error} />
            </div>
        </div>
    );
};