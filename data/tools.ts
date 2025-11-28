export interface Tool {
  name: string;
  description: string;
  id: string;
  status: 'available' | 'coming-soon';
}

export interface ToolCategory {
  name: string;
  icon: string;
  tools: Tool[];
}

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    name: 'SEO & Keyword Tools',
    icon: 'seo',
    tools: [
      { id: 'rankpulse-ai', name: 'RankPulse AI', description: 'Tracks live keyword ranking fluctuations and predicts next-day ranking shifts using AI.', status: 'available' },
      { id: 'smartmeta-builder', name: 'SmartMeta Builder', description: 'Auto-generates SEO meta titles and descriptions based on tone and brand personality.', status: 'available' },
      { id: 'topicwave-finder', name: 'TopicWave Finder', description: 'Identifies trending micro-niches and keyword clusters before they peak.', status: 'available' },
      { id: 'linkgrow-360', name: 'LinkGrow 360', description: 'Builds backlink opportunities by matching complementary websites and blog networks.', status: 'available' },
      { id: 'serp-vision', name: 'SERP Vision', description: 'Visual 3D dashboard of keyword positions, click shares, and competitor overlap.', status: 'available' },
    ],
  },
  {
    name: 'Content Marketing Tools',
    icon: 'content',
    tools: [
      { id: 'autoblog-pilot', name: 'AutoBlog Pilot', description: 'Creates weekly blog calendars and outlines based on audience interest.', status: 'available' },
      { id: 'tonecraft-ai', name: 'ToneCraft AI', description: 'Adjusts your writing tone to match target customer emotion (formal, funny, sales, etc.).', status: 'available' },
      { id: 'contentheat-map', name: 'ContentHeat Map', description: 'Analyzes which paragraphs of your content users engage with most.', status: 'available' },
      { id: 'copybooster-plus', name: 'CopyBooster+', description: 'Tests multiple ad copy versions automatically and selects the highest-performing one.', status: 'available' },
      { id: 'viraltrend-finder', name: 'ViralTrend Finder', description: 'Detects rising content patterns on social media before they go viral.', status: 'available' },
    ],
  },
  {
    name: 'Social Media Management Tools',
    icon: 'social',
    tools: [
      { id: 'postflow-scheduler', name: 'PostFlow Scheduler', description: 'Smart posting tool that adjusts time based on audience engagement history.', status: 'available' },
      { id: 'hashrank-studio', name: 'HashRank Studio', description: 'Ranks and recommends hashtags by engagement score, not just popularity.', status: 'available' },
      { id: 'socialvoice', name: 'SocialVoice', description: 'Converts posts into audio clips for voice-based platforms (Reels, Shorts, podcasts).', status: 'available' },
      { id: 'reelsync', name: 'ReelSync', description: 'AI matches trending background music with your brand video tone.', status: 'available' },
      { id: 'engagemeter', name: 'EngageMeter', description: 'Tracks which comments or replies lead to conversions and follower growth.', status: 'available' },
    ],
  },
  {
    name: 'Advertising & PPC Tools',
    icon: 'ads',
    tools: [
      { id: 'admind-planner', name: 'AdMind Planner', description: 'Suggests ad budget splits based on real-time conversion data.', status: 'available' },
      { id: 'clicksmart-optimizer', name: 'ClickSmart Optimizer', description: 'Detects wasted clicks in Google Ads and reallocates to high-performing ones.', status: 'available' },
      { id: 'adcreative-builder', name: 'AdCreative Builder', description: 'Generates visual ad sets in multiple formats (Instagram, Meta, YouTube).', status: 'available' },
      { id: 'bidsense-ai', name: 'BidSense AI', description: 'Predicts ideal CPC bids per time slot using historical performance.', status: 'available' },
      { id: 'campaign-pulse', name: 'Campaign Pulse', description: 'One-screen view of multi-platform ads (Google, Meta, X, LinkedIn).', status: 'available' },
    ],
  },
  {
    name: 'Analytics & Reporting Tools',
    icon: 'analytics',
    tools: [
      { id: 'zecreport', name: 'ZecReport', description: 'Auto-generates visual marketing reports with insights and graphs.', status: 'available' },
      { id: 'kpi-monitor-pro', name: 'KPI Monitor Pro', description: 'Real-time performance dashboard across all channels.', status: 'available' },
      { id: 'customerpath', name: 'CustomerPath', description: 'Tracks how users move from ad → site → sale → loyalty stage.', status: 'available' },
      { id: 'roi-predictor', name: 'ROI Predictor', description: 'Predicts future ad returns using AI modeling.', status: 'available' },
      { id: 'trafficsplit', name: 'TrafficSplit', description: 'Shows which traffic sources are profitable (SEO, ads, social, referral).', status: 'available' },
    ],
  },
  {
    name: 'Automation & CRM Tools',
    icon: 'automation',
    tools: [
      { id: 'autoengage-crm', name: 'AutoEngage CRM', description: 'Centralized lead database with follow-up automation.', status: 'available' },
      { id: 'smartfunnel-builder', name: 'SmartFunnel Builder', description: 'Drag-drop funnel creation with conversion testing.', status: 'available' },
      { id: 'emailhero', name: 'EmailHero', description: 'AI-personalized email sender (subject + timing optimizer).', status: 'available' },
      { id: 'leadsync-ai', name: 'LeadSync AI', description: 'Tracks and updates every lead’s intent level automatically.', status: 'available' },
      { id: 'chatflow-plus', name: 'ChatFlow+', description: 'Custom chatbot builder that learns brand tone and FAQ patterns.', status: 'available' },
      { id: 'autonurture-loop', name: 'AutoNurture Loop', description: 'AI handles follow-ups, reminders, and retargeting in smart intervals.', status: 'available' },
      { id: 'lead-emotion-score', name: 'Lead Emotion Score', description: 'Scores leads based on message tone, timing, and sentiment.', status: 'available' },
      { id: 'smartmail-composer', name: 'SmartMail Composer', description: 'Writes and schedules emails using live topic trends.', status: 'available' },
      { id: 'conversion-funnel-mapper', name: 'Conversion Funnel Mapper', description: 'Visual drag-drop funnel builder with real-time performance testing.', status: 'available' },
      { id: 'voice-crm', name: 'Voice CRM', description: 'Manage leads and campaigns through voice commands (“Show today’s leads”, “Pause campaign 3”).', status: 'available' },
    ],
  },
  {
    name: 'Branding & Creative Tools',
    icon: 'branding',
    tools: [
      { id: 'logotune', name: 'LogoTune', description: 'Smart color + font selection based on audience psychology.', status: 'available' },
      { id: 'admood-studio', name: 'AdMood Studio', description: 'Creates emotion-driven visuals matching campaign mood.', status: 'available' },
      { id: 'voicetag-maker', name: 'VoiceTag Maker', description: 'Builds audio branding snippets (like sonic logos).', status: 'available' },
      { id: 'brandsync-suite', name: 'BrandSync Suite', description: 'Ensures uniform logo, tone, and color use across all content.', status: 'available' },
      { id: 'videostorycraft', name: 'VideoStoryCraft', description: 'Auto-storyboarding tool for short-form ad creation.', status: 'available' },
    ],
  },
  {
    name: 'AI-Driven Intelligence Layer',
    icon: 'ai',
    tools: [
      { id: 'neuro-target-ai', name: 'Neuro-Target AI', description: 'Analyzes user behavior, emotions, and attention time to create emotion-based ads automatically.', status: 'available' },
      { id: 'predictive-campaign-brain', name: 'Predictive Campaign Brain', description: 'Learns from past data and auto-builds your next campaign before launch.', status: 'available' },
      { id: 'adaptive-seo-core', name: 'Adaptive SEO Core', description: 'Adjusts your keyword targeting daily based on live SERP changes and traffic shifts.', status: 'available' },
      { id: 'smarttone-dna', name: 'SmartTone DNA', description: 'Detects your brand’s emotional tone and keeps it consistent across posts, videos, and emails.', status: 'available' },
      { id: 'zecai-persona-clone', name: 'ZecAI Persona Clone', description: 'Builds full 3D digital customer personas with AI chat testing.', status: 'available' },
    ],
  },
  {
    name: 'Universal Marketing Hub',
    icon: 'hub',
    tools: [
      { id: 'one-click-integration-engine', name: 'One-Click Integration Engine', description: 'Connects every platform (Google, Meta, X, YouTube, LinkedIn) in seconds.', status: 'available' },
      { id: 'cross-platform-post-translator', name: 'Cross-Platform Post Translator', description: 'Converts one post into optimized formats for each platform automatically.', status: 'available' },
      { id: 'multi-voice-studio', name: 'Multi-Voice Studio', description: 'Re-voices your ad in different accents/languages instantly for local reach.', status: 'available' },
      { id: 'trend-radar', name: 'Trend Radar', description: 'Tracks and ranks social and keyword trends by location, audience, and mood.', status: 'available' },
      { id: 'smart-exporter', name: 'Smart Exporter', description: 'Creates ready-to-send ad packages (images + caption + hashtags + CTA) for any channel.', status: 'available' },
    ],
  },
  {
    name: 'Creative & Content Automation',
    icon: 'creative',
    tools: [
      { id: 'auto-vision-builder', name: 'Auto-Vision Builder', description: 'Generates ad visuals from text prompts (AI design engine).', status: 'available' },
      { id: 'storyflow-generator', name: 'StoryFlow Generator', description: 'Turns a product description into a short story script + video storyboard.', status: 'available' },
      { id: 'moodframe-selector', name: 'MoodFrame Selector', description: 'Recommends color palettes and music moods matching campaign tone.', status: 'available' },
      { id: 'dynamic-post-composer', name: 'Dynamic Post Composer', description: 'Auto-creates 10 post versions and tests which one performs best.', status: 'available' },
      { id: 'real-time-hashtag-mixer', name: 'Real-Time Hashtag Mixer', description: 'Generates trending + branded hashtag combos for reach balance.', status: 'available' },
    ],
  },
  {
    name: 'Deep Analytics & Smart Insights',
    icon: 'insights',
    tools: [
      { id: 'conversion-dna-tracker', name: 'Conversion DNA Tracker', description: 'Shows exactly why each customer converted (emotion, channel, time).', status: 'available' },
      { id: 'revenue-pulse-board', name: 'Revenue Pulse Board', description: 'Real-time revenue graph linked to campaign engagement metrics.', status: 'available' },
      { id: 'zecpredict-insight', name: 'ZecPredict Insight', description: 'Predicts campaign performance before it runs (accuracy % score).', status: 'available' },
      { id: 'behavior-lens', name: 'Behavior Lens', description: 'Heatmap + scroll + eye-focus tracking across landing pages.', status: 'available' },
      { id: 'kpi-alert-bot', name: 'KPI Alert Bot', description: 'Notifies when any KPI (CTR, CPA, engagement rate) drops below target.', status: 'available' },
    ],
  },
  {
    name: 'Privacy & Smart Data Layer',
    icon: 'privacy',
    tools: [
      { id: 'zero-cookie-tracking-engine', name: 'Zero-Cookie Tracking Engine', description: 'Tracks engagement using AI patterns (no cookies).', status: 'available' },
      { id: 'encrypted-ad-delivery', name: 'Encrypted Ad Delivery', description: 'Protects your creative content and audience data.', status: 'available' },
      { id: 'ai-based-fraud-guard', name: 'AI-Based Fraud Guard', description: 'Detects fake clicks, bots, or spam traffic in real time.', status: 'available' },
      { id: 'user-consent-manager', name: 'User Consent Manager', description: 'Auto-handles GDPR and Indian data law compliance.', status: 'available' },
      { id: 'data-value-score', name: 'Data Value Score', description: 'Shows the financial value of your marketing data assets.', status: 'available' },
    ],
  },
  {
    name: 'Future Expansion (2026-2030 Ready)',
    icon: 'future',
    tools: [
      { id: 'ar-ad-builder', name: 'AR Ad Builder', description: 'Create augmented-reality product ads users can view through mobile cameras.', status: 'available' },
      { id: 'voice-search-optimizer', name: 'Voice Search Optimizer', description: 'Prepares all content for AI voice assistants (Gemini, Alexa, ChatGPT).', status: 'available' },
      { id: 'neuro-ad-test-lab', name: 'Neuro-Ad Test Lab', description: 'Uses eye-tracking AI to test ad appeal before publishing.', status: 'available' },
      { id: 'holoanalytics-view', name: 'HoloAnalytics View', description: '3D dashboard for campaign data using AR/VR visualization.', status: 'available' },
      { id: 'ecoad-planner', name: 'EcoAd Planner', description: 'Measures and offsets the environmental footprint of digital campaigns.', status: 'available' },
    ],
  },
];