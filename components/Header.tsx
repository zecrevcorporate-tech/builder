import React from 'react';
import { LogoIcon } from './icons/LogoIcon';

interface HeaderProps {
    isDashboard: boolean;
    toolName?: string;
    onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDashboard, toolName, onNavigateHome }) => {
    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10 border-b border-gray-200">
            <div className="container mx-auto px-4 md:px-8 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <LogoIcon className="w-10 h-10 mr-3 text-brand-primary" />
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-brand-primary">
                                {isDashboard ? 'ZECREV Digital Marketing Tool Suite' : toolName || 'Digital Tool'}
                            </h1>
                            <p className="text-gray-500 text-sm md:text-base hidden sm:block">
                                {isDashboard ? 'Your all-in-one toolkit for digital excellence.' : 'Part of the ZECREV Suite'}
                            </p>
                        </div>
                    </div>
                     {!isDashboard && (
                        <button
                            onClick={onNavigateHome}
                            className="flex items-center text-sm font-medium text-brand-primary hover:text-brand-dark transition-colors bg-brand-light/50 hover:bg-brand-light/80 px-4 py-2 rounded-lg shadow-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Dashboard
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};