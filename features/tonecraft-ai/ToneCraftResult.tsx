import React, { useState, useEffect } from 'react';
import { ClipboardIcon } from '../../components/icons/ClipboardIcon';
import { CheckIcon } from '../../components/icons/CheckIcon';
import { ExclamationIcon } from '../../components/icons/ExclamationIcon';

interface ToneCraftResultProps {
    rewrittenText: string;
    isLoading: boolean;
    error: string | null;
}

export const ToneCraftResult: React.FC<ToneCraftResultProps> = ({ rewrittenText, isLoading, error }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (rewrittenText) {
            navigator.clipboard.writeText(rewrittenText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    useEffect(() => {
        setCopied(false);
    }, [rewrittenText]);

    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="space-y-4 animate-pulse">
                    <div className="bg-gray-200 h-6 w-3/4 rounded"></div>
                    <div className="bg-gray-200 h-4 w-full rounded"></div>
                    <div className="bg-gray-200 h-4 w-full rounded"></div>
                    <div className="bg-gray-200 h-4 w-5/6 rounded"></div>
                </div>
            );
        }

        if (error) {
            return (
                <div className="flex flex-col items-center justify-center text-center bg-red-50 border-l-4 border-red-500 p-6 rounded-lg h-full">
                    <ExclamationIcon className="w-12 h-12 text-red-500 mb-4" />
                    <h3 className="text-xl font-bold text-red-800">An Error Occurred</h3>
                    <p className="text-red-700 mt-2">{error}</p>
                </div>
            );
        }

        if (rewrittenText) {
            return (
                <>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Rewritten Text</h3>
                        <button
                            onClick={handleCopy}
                            className="p-2 rounded-full hover:bg-gray-100 transition text-gray-500 hover:text-brand-primary"
                            aria-label="Copy rewritten text"
                        >
                            {copied ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                        </button>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap text-gray-700 h-full overflow-y-auto">
                        {rewrittenText}
                    </div>
                </>
            );
        }

        return (
            <div className="flex flex-col items-center justify-center text-center bg-brand-light/20 border-2 border-dashed border-brand-light p-10 rounded-2xl h-full">
                <svg className="w-16 h-16 text-brand-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <h3 className="text-xl font-bold text-brand-dark">Your rewritten text will appear here</h3>
                <p className="text-brand-secondary mt-2 max-w-sm">
                    Enter some text, select a tone, and let the AI work its magic.
                </p>
            </div>
        );
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-inner border border-gray-200 h-full flex flex-col">
            {renderContent()}
        </div>
    );
};