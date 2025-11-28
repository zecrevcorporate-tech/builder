import React from 'react';
import type { BlogPost } from '../../types';
import { ExclamationIcon } from '../../components/icons/ExclamationIcon';
import { AccordionItem } from '../../components/AccordionItem';

interface AutoBlogPilotResultProps {
    blogPosts: BlogPost[];
    isLoading: boolean;
    error: string | null;
}

export const AutoBlogPilotResult: React.FC<AutoBlogPilotResultProps> = ({ blogPosts, isLoading, error }) => {
    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="space-y-4 animate-pulse">
                    {[...Array(7)].map((_, i) => (
                        <div key={i} className="bg-gray-200 h-14 rounded-lg"></div>
                    ))}
                </div>
            );
        }

        if (error) {
            return (
                <div className="flex flex-col items-center justify-center text-center bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                    <ExclamationIcon className="w-12 h-12 text-red-500 mb-4" />
                    <h3 className="text-xl font-bold text-red-800">An Error Occurred</h3>
                    <p className="text-red-700 mt-2">{error}</p>
                </div>
            );
        }

        if (blogPosts.length > 0) {
            return (
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Your 7-Day Content Plan</h3>
                    <div className="space-y-3">
                        {blogPosts.sort((a, b) => a.day - b.day).map(post => (
                            <AccordionItem key={post.day} title={`Day ${post.day}: ${post.title}`}>
                                <div className="p-4 bg-gray-50 rounded-b-lg">
                                    <h4 className="font-semibold text-gray-700">Introduction:</h4>
                                    <p className="text-gray-600 mb-3 text-sm">{post.outline.introduction}</p>

                                    <h4 className="font-semibold text-gray-700">Main Points:</h4>
                                    <ul className="list-disc list-inside text-gray-600 mb-3 space-y-1 text-sm">
                                        {post.outline.mainPoints.map((point, index) => (
                                            <li key={index}>{point}</li>
                                        ))}
                                    </ul>

                                    <h4 className="font-semibold text-gray-700">Conclusion:</h4>
                                    <p className="text-gray-600 text-sm">{post.outline.conclusion}</p>
                                </div>
                            </AccordionItem>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <div className="flex flex-col items-center justify-center text-center bg-brand-light/20 border-2 border-dashed border-brand-light p-10 rounded-2xl h-full">
                <svg className="w-16 h-16 text-brand-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-bold text-brand-dark">Your content calendar will appear here</h3>
                <p className="text-brand-secondary mt-2 max-w-sm">
                    Enter a topic above to generate a full week of blog ideas and outlines.
                </p>
            </div>
        );
    };

    return <div className="h-full">{renderContent()}</div>;
};
