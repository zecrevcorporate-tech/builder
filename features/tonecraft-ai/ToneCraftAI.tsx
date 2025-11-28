import React, { useState, useCallback } from 'react';
import { ToneCraftForm } from './ToneCraftForm';
import { ToneCraftResult } from './ToneCraftResult';
import { rewriteWithTone } from '../../services/geminiService';
import type { Tone } from '../../types';

export const ToneCraftAI: React.FC = () => {
    const [rewrittenText, setRewrittenText] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleRewrite = useCallback(async (originalText: string, tone: Tone) => {
        setIsLoading(true);
        setError(null);
        setRewrittenText('');
        try {
            const result = await rewriteWithTone(originalText, tone);
            setRewrittenText(result);
        } catch (e) {
            console.error(e);
            setError('Failed to rewrite the text. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:col-span-1">
                <ToneCraftForm onRewrite={handleRewrite} isLoading={isLoading} />
            </div>
            <div className="lg:col-span-1">
                <ToneCraftResult rewrittenText={rewrittenText} isLoading={isLoading} error={error} />
            </div>
        </div>
    );
};