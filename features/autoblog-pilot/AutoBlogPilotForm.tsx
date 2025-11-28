import React, { useState } from 'react';
import { SparklesIcon } from '../../components/icons/SparklesIcon';
import { LoadingSpinner } from '../../components/LoadingSpinner';

interface AutoBlogPilotFormProps {
    onGenerate: (topic: string) => void;
    isLoading: boolean;
}

export const AutoBlogPilotForm: React.FC<AutoBlogPilotFormProps> = ({ onGenerate, isLoading }) => {
    const [topic, setTopic] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (topic.trim()) {
            onGenerate(topic);
        }
    };

    const isFormIncomplete = !topic.trim();

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">AutoBlog Pilot</h2>
            <p className="text-gray-500 mb-6">Enter a topic to generate a 7-day blog content calendar with outlines.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                        Main Topic or Audience Interest
                    </label>
                    <input
                        id="topic"
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., 'Beginner tips for landscape photography'"
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
                            Generate Calendar
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};