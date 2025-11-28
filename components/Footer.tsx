import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white mt-8 py-6 border-t">
            <div className="container mx-auto px-4 md:px-8 text-center text-gray-500 text-sm">
                <p className="font-bold text-gray-600 mb-2">ZECREV Digital Marketing Tool Suite</p>
                <p>&copy; {new Date().getFullYear()} ZECREV. All Rights Reserved. Powered by Gemini.</p>
                <div className="flex justify-center space-x-4 mt-3 text-xs">
                    <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
                    <span className="text-gray-300">&bull;</span>
                    <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};