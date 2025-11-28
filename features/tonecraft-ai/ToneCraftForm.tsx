import React, { useState } from 'react';
import { AVAILABLE_TONES } from '../../constants';
import { Tone } from '../../types';
import { SparklesIcon } from '../../components/icons/SparklesIcon';
import { LoadingSpinner } from '../../components/LoadingSpinner';

interface ToneCraftFormProps {
    onRewrite: (originalText: string, tone: Tone) => void;
    isLoading: boolean;
}

export const ToneCraftForm: React.FC<ToneCraftFormProps> = ({ onRewrite, isLoading }) => {
    const [originalText, setOriginalText] = useState('');
    const [tone, setTone] = useState<Tone>(Tone.Professional);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (originalText.trim()) {
            onRewrite(originalText, tone);
        }
    };

    const isFormIncomplete = !originalText.trim();

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 h-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">ToneCraft AI</h2>
            <p className="text-gray-500 mb-6">Enter your text and choose a new tone to rewrite it instantly.</p>
            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-[calc(100%-4rem)]">
                <div className="flex-grow flex flex-col">
                    <label htmlFor="originalText" className="block text-sm font-medium text-gray-700 mb-2">
                        Original Text
                    </label>
                    <textarea
                        id="originalText"
                        value={originalText}
                        onChange={(e) => setOriginalText(e.target.value)}
                        placeholder="Paste your content here..."
                        rows={10}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-accent focus:border-brand-accent transition flex-grow"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-2">
                        Select a New Tone
                    </label>
                    <select
                        id="tone"
                        value={tone}
                        onChange={(e) => setTone(e.target.value as Tone)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-brand-accent focus:border-brand-accent transition"
                    >
                        {AVAILABLE_TONES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    disabled={isLoading || isFormIncomplete}
                    className="w-full flex items-center justify-center bg-brand-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        <>
                            <SparklesIcon className="w-5 h-5 mr-2" />
                            Rewrite
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};