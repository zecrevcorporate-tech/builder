
import React, { useState, useEffect } from 'react';
import type { MetaData } from '../types';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { CheckIcon } from './icons/CheckIcon';
import { ExclamationIcon } from './icons/ExclamationIcon';

interface MetaResultProps {
    metaData: MetaData | null;
    isLoading: boolean;
    error: string | null;
}

const ResultCard: React.FC<{ title: string; content: string; charLimit: number }> = ({ title, content, charLimit }) => {
    const [copied, setCopied] = useState(false);
    const charCount = content.length;
    const isOverLimit = charCount > charLimit;

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
        setCopied(false);
    }, [content]);

    return (
        <div className="bg-white p-5 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <button
                    onClick={handleCopy}
                    className="p-2 rounded-full hover:bg-gray-100 transition text-gray-500 hover:text-brand-primary"
                    aria-label={`Copy ${title}`}
                >
                    {copied ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                </button>
            </div>
            <p className="text-gray-600 bg-gray-50 p-4 rounded-lg whitespace-pre-wrap">{content}</p>
            <div className={`text-sm mt-2 text-right ${isOverLimit ? 'text-red-500 font-bold' : 'text-gray-500'}`}>
                {charCount} / {charLimit} characters
            </div>
        </div>
    );
};


export const MetaResult: React.FC<MetaResultProps> = ({ metaData, isLoading, error }) => {
    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="space-y-6 animate-pulse">
                    <div className="bg-gray-200 h-28 rounded-xl"></div>
                    <div className="bg-gray-200 h-40 rounded-xl"></div>
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

        if (metaData) {
            return (
                <div className="space-y-6">
                    <ResultCard title="Generated Meta Title" content={metaData.title} charLimit={60} />
                    <ResultCard title="Generated Meta Description" content={metaData.description} charLimit={160} />
                </div>
            );
        }

        return (
            <div className="flex flex-col items-center justify-center text-center bg-brand-light/20 border-2 border-dashed border-brand-light p-10 rounded-2xl h-full">
                <svg className="w-16 h-16 text-brand-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-xl font-bold text-brand-dark">Your results will appear here</h3>
                <p className="text-brand-secondary mt-2 max-w-sm">
                    Enter your details on the left and let our AI craft the perfect meta tags for your content.
                </p>
            </div>
        );
    };

    return (
        <div className="bg-gray-100 p-6 rounded-2xl shadow-inner h-full">
            {renderContent()}
        </div>
    );
};
