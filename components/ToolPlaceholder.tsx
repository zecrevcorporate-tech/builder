import React from 'react';
import type { Tool } from '../data/tools';
import { SparklesIcon } from './icons/SparklesIcon';

interface ToolPlaceholderProps {
    tool: Tool;
}

export const ToolPlaceholder: React.FC<ToolPlaceholderProps> = ({ tool }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center bg-white/50 border-2 border-dashed border-brand-light p-10 rounded-2xl h-full shadow-inner mt-8">
            <div className="bg-brand-primary text-white rounded-full p-4 mb-6 shadow-lg">
                <SparklesIcon className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-brand-dark mb-2">Activating {tool.name}...</h2>
            <p className="text-gray-600 max-w-2xl mb-8">{tool.description}</p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg shadow-sm">
                <p className="text-yellow-800 font-medium text-sm">This tool is under active development. Full functionality is coming soon!</p>
            </div>
        </div>
    );
};