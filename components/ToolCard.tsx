import React from 'react';
import type { Tool } from '../data/tools';
import { SparklesIcon } from './icons/SparklesIcon';

interface ToolCardProps {
    tool: Tool;
    onLaunchTool: (toolId: string) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onLaunchTool }) => {
    const isAvailable = tool.status === 'available';

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.name}</h3>
            <p className="text-gray-600 flex-grow mb-4">{tool.description}</p>
            <button
                onClick={() => onLaunchTool(tool.id)}
                className="w-full mt-auto flex items-center justify-center bg-gradient-to-r from-brand-secondary to-brand-primary text-white font-bold py-2 px-4 rounded-lg hover:shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-all duration-300"
            >
                <SparklesIcon className="w-5 h-5 mr-2" />
                Launch Tool
            </button>
        </div>
    );
};