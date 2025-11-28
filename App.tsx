import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Dashboard } from './components/Dashboard';
import { SmartMetaBuilder } from './features/smart-meta-builder/SmartMetaBuilder';
import { ToneCraftAI } from './features/tonecraft-ai/ToneCraftAI';
import { AutoBlogPilot } from './features/autoblog-pilot/AutoBlogPilot';
import { TOOL_CATEGORIES } from './data/tools';
import type { Tool } from './data/tools';
import { ToolPlaceholder } from './components/ToolPlaceholder';

const App: React.FC = () => {
    const [activeToolId, setActiveToolId] = useState<string>('dashboard');

    const activeTool: Tool | undefined = TOOL_CATEGORIES.flatMap(c => c.tools).find(t => t.id === activeToolId);

    const renderActiveTool = () => {
        switch (activeToolId) {
            case 'dashboard':
                return <Dashboard onLaunchTool={setActiveToolId} />;
            case 'smartmeta-builder':
                return <SmartMetaBuilder />;
            case 'tonecraft-ai':
                return <ToneCraftAI />;
            case 'autoblog-pilot':
                return <AutoBlogPilot />;
            default:
                if (activeTool) {
                    return <ToolPlaceholder tool={activeTool} />;
                }
                // Fallback to dashboard if tool not found
                return <Dashboard onLaunchTool={setActiveToolId} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-transparent font-sans text-gray-800">
            <Header
                isDashboard={activeToolId === 'dashboard'}
                toolName={activeTool?.name}
                onNavigateHome={() => setActiveToolId('dashboard')}
            />
            <main className="flex-grow container mx-auto p-4 md:p-8">
                {renderActiveTool()}
            </main>
            <Footer />
        </div>
    );
};

export default App;