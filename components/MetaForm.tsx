
import React, { useState } from 'react';
import { AVAILABLE_TONES } from '../constants';
import { Tone } from '../types';
import { SparklesIcon } from './icons/SparklesIcon';
import { LoadingSpinner } from './LoadingSpinner';

interface MetaFormProps {
    onGenerate: (topic: string, tone: Tone, personality: string) => void;
    isLoading: boolean;
}

export const MetaForm: React.FC<MetaFormProps> = ({ onGenerate, isLoading }) => {
    const [topic, setTopic] = useState('');
    const [tone, setTone] = useState<Tone>(Tone.Professional);
    const [personality, setPersonality] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (topic.trim() && personality.trim()) {
            onGenerate(topic, tone, personality);
        }
    };

    const isFormIncomplete = !topic.trim() || !personality.trim();

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 h-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">SmartMeta Builder</h2>
            <p className="text-gray-500 mb-6">Fill in the details below to generate your SEO meta tags.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                        URL, Topic, or Keywords
                    </label>
                    <input
                        id="topic"
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., 'Best coffee grinders for home'"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-accent focus:border-brand-accent transition"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-2">
                        Select a Tone
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
                <div>
                    <label htmlFor="personality" className="block text-sm font-medium text-gray-700 mb-2">
                        Brand Personality
                    </label>
                    <textarea
                        id="personality"
                        value={personality}
                        onChange={(e) => setPersonality(e.target.value)}
                        placeholder="e.g., 'Friendly, approachable, and expert in all things coffee.'"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-accent focus:border-brand-accent transition"
                        required
                    />
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
                            Generate
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};
