
export enum Tone {
    Formal = 'Formal',
    Casual = 'Casual',
    Funny = 'Funny',
    Professional = 'Professional',
    Sales = 'Sales-oriented',
    Inspirational = 'Inspirational',
    Technical = 'Technical',
    Witty = 'Witty',
    Empathetic = 'Empathetic',
    Authoritative = 'Authoritative',
}

export interface MetaData {
    title: string;
    description: string;
}

export interface BlogPostOutline {
    introduction: string;
    mainPoints: string[];
    conclusion: string;
}

export interface BlogPost {
    day: number;
    title: string;
    outline: BlogPostOutline;
}