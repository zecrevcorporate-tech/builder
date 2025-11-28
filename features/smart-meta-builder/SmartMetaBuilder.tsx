
import React, { useState, useCallback } from 'react';
import { MetaForm } from '../../components/MetaForm';
import { MetaResult } from '../../components/MetaResult';
import { generateMetaData } from '../../services/geminiService';
import type { MetaData, Tone } from '../../types';

export const SmartMetaBuilder: React.FC = () => {
    const [metaData, setMetaData] = useState<MetaData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = useCallback(async (topic: string, tone: Tone, personality: string) => {
        setIsLoading(true);
        setError(null);
        setMetaData(null);
        try {
            const result = await generateMetaData(topic, tone, personality);
            setMetaData(result);
        } catch (e) {
            console.error(e);
            setError('Failed to generate meta data. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
                <MetaForm onGenerate={handleGenerate} isLoading={isLoading} />
            </div>
            <div className="lg:col-span-3">
                <MetaResult metaData={metaData} isLoading={isLoading} error={error} />
            </div>
        </div>
    );
};
