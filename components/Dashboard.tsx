import React from 'react';
import { TOOL_CATEGORIES } from '../data/tools';
import { ToolCard } from './ToolCard';
import { CategoryIcon } from './icons/CategoryIcons';

interface DashboardProps {
    onLaunchTool: (toolId: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onLaunchTool }) => {
    return (
        <div className="space-y-12">
            {TOOL_CATEGORIES.map(category => (
                <section key={category.name}>
                    <div className="flex items-center mb-6 pb-2 border-b-2 border-brand-light">
                        <CategoryIcon icon={category.icon} className="w-8 h-8 mr-4 text-brand-primary" />
                        <h2 className="text-3xl font-bold text-gray-800">{category.name}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.tools.map(tool => (
                            <ToolCard key={tool.id} tool={tool} onLaunchTool={onLaunchTool} />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};