// Services Page JavaScript
class ServicesPage {
  constructor() {
    this.services = [
      {
        id: 'sem-ppc',
        title: 'Search Engine Marketing (SEM / PPC)',
        shortDesc: 'Pay-per-click advertising campaigns that drive targeted traffic and maximize your ROI across search engines.',
        detailedDesc: 'Maximize your online visibility and drive qualified traffic with our expert SEM and PPC campaigns. We create targeted advertising strategies that deliver measurable results.',
        features: [
          'Google Ads campaign management',
          'Keyword research and optimization',
          'Ad copy creation and testing',
          'Landing page optimization',
          'Conversion tracking setup',
          'A/B testing and performance analysis',
          'Budget optimization and ROI tracking'
        ],
        technologies: ['Google Ads', 'Google Analytics', 'Microsoft Advertising', 'Facebook Ads Manager', 'LinkedIn Campaign Manager'],
        process: [
          'Keyword research and strategy development',
          'Campaign setup and configuration',
          'Ad creation and testing',
          'Performance monitoring and optimization',
          'Reporting and analysis',
          'Continuous improvement and scaling'
        ]
      },
      {
        id: 'seo',
        title: 'Search Engine Optimization (SEO)',
        shortDesc: 'Improve your website\'s visibility and ranking on search engines through strategic optimization techniques.',
        detailedDesc: 'Boost your organic search rankings and drive sustainable traffic with our comprehensive SEO services. We use data-driven strategies to improve your website\'s visibility.',
        features: [
          'On-page SEO optimization',
          'Technical SEO audits',
          'Content optimization and creation',
          'Link building strategies',
          'Local SEO optimization',
          'Mobile SEO improvements',
          'SEO reporting and analytics'
        ],
        technologies: ['Google Search Console', 'SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog', 'Google Analytics'],
        process: [
          'SEO audit and analysis',
          'Keyword research and strategy',
          'On-page optimization implementation',
          'Content creation and optimization',
          'Technical SEO fixes',
          'Link building and outreach',
          'Monitoring and reporting'
        ]
      },
      {
        id: 'smo-smm',
        title: 'Social Media Optimization & Marketing (SMO / SMM)',
        shortDesc: 'Build brand awareness and engage with your audience across all major social media platforms.',
        detailedDesc: 'Grow your social media presence and engage with your target audience effectively. Our SMO and SMM strategies help you build brand loyalty and drive conversions.',
        features: [
          'Social media strategy development',
          'Content creation and curation',
          'Community management',
          'Social media advertising',
          'Influencer marketing',
          'Social media analytics',
          'Crisis management and monitoring'
        ],
        technologies: ['Facebook Business Manager', 'Instagram Business', 'Twitter Ads', 'LinkedIn Campaign Manager', 'Hootsuite', 'Buffer', 'Sprout Social'],
        process: [
          'Social media audit and strategy',
          'Content calendar creation',
          'Profile optimization and branding',
          'Content creation and scheduling',
          'Community engagement and management',
          'Paid social advertising',
          'Performance analysis and reporting'
        ]
      },
      {
        id: 'web-development',
        title: 'Web Development',
        shortDesc: 'Custom website development, responsive design, and modern web applications built with cutting-edge technologies.',
        detailedDesc: 'Transform your online presence with our comprehensive web development services. We create custom websites and web applications that are not only visually stunning but also highly functional and user-friendly.',
        features: [
          'Custom website development using modern frameworks',
          'Responsive design for all devices',
          'E-commerce platform development',
          'Content Management System (CMS) integration',
          'API development and integration',
          'Performance optimization and SEO',
          'Maintenance and support services'
        ],
        technologies: ['React', 'Vue.js', 'Node.js', 'PHP', 'Python', 'HTML5', 'CSS3', 'JavaScript'],
        process: [
          'Discovery and planning',
          'Design and prototyping',
          'Development and coding',
          'Testing and quality assurance',
          'Deployment and launch',
          'Post-launch support'
        ]
      },
      {
        id: 'mobile-app',
        title: 'Mobile App Development',
        shortDesc: 'Native and cross-platform mobile applications for iOS and Android with intuitive user experiences.',
        detailedDesc: 'Reach your customers wherever they are with our mobile app development services. We create native and cross-platform applications that deliver exceptional user experiences.',
        features: [
          'Native iOS and Android development',
          'Cross-platform app development',
          'UI/UX design for mobile',
          'App store optimization',
          'Push notifications integration',
          'In-app purchase implementation',
          'Analytics and tracking'
        ],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Cordova'],
        process: [
          'Market research and analysis',
          'UI/UX design and prototyping',
          'Native or cross-platform development',
          'Backend API development',
          'Testing on multiple devices',
          'App store submission and launch'
        ]
      },
      {
        id: 'ui-ux-design',
        title: 'UI/UX Design',
        shortDesc: 'User-centered design solutions with beautiful interfaces and exceptional user experiences.',
        detailedDesc: 'Create memorable user experiences with our UI/UX design services. We focus on understanding user behavior and designing interfaces that are both beautiful and functional.',
        features: [
          'User research and analysis',
          'Wireframing and prototyping',
          'Visual design and branding',
          'Interaction design',
          'Usability testing',
          'Design system creation',
          'Accessibility compliance'
        ],
        technologies: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Principle', 'Framer'],
        process: [
          'User research and discovery',
          'Information architecture',
          'Wireframing and low-fidelity prototyping',
          'High-fidelity design and prototyping',
          'Usability testing and iteration',
          'Design handoff and documentation'
        ]
      },
      {
        id: 'ppc-google-ads',
        title: 'Pay-Per-Click (PPC) Campaigns & Google Ads',
        shortDesc: 'Strategic PPC campaigns and Google Ads management to drive qualified traffic and conversions.',
        detailedDesc: 'Maximize your advertising ROI with our PPC campaign management and Google Ads expertise. We create targeted campaigns that drive qualified traffic and increase conversions.',
        features: [
          'Google Ads management',
          'Campaign optimization',
          'Keyword targeting',
          'Ad copy creation',
          'Landing page optimization',
          'Conversion tracking',
          'Performance reporting'
        ],
        technologies: ['Google Ads', 'Google Analytics', 'Google Tag Manager', 'SEMrush', 'Ahrefs', 'Optimizely'],
        process: [
          'Campaign strategy',
          'Account setup',
          'Ad creation',
          'Bid management',
          'Performance monitoring',
          'Optimization',
          'Reporting'
        ]
      },
      {
        id: 'ai-calling-agent',
        title: 'AI Calling Agent Solutions',
        shortDesc: 'Intelligent AI-powered calling solutions for automated customer engagement and lead generation.',
        detailedDesc: 'Automate your customer outreach with our AI calling agent solutions. Our advanced AI technology enables personalized, intelligent conversations that engage customers and generate leads effectively.',
        features: [
          'Automated outbound calling',
          'AI-powered conversation',
          'Lead qualification',
          'Appointment scheduling',
          'Follow-up automation',
          'Performance analytics',
          'CRM integration'
        ],
        technologies: ['AI/ML', 'Natural Language Processing', 'Voice Synthesis', 'CRM APIs', 'Twilio', 'Google Dialogflow'],
        process: [
          'Requirements analysis',
          'AI model training',
          'Integration setup',
          'Testing and optimization',
          'Deployment',
          'Monitoring and improvement'
        ]
      },
      {
        id: 'ai-chatbots',
        title: 'AI Chatbots (WhatsApp, Telegram, Website)',
        shortDesc: 'Intelligent chatbot solutions for WhatsApp, Telegram, and websites to enhance customer interactions.',
        detailedDesc: 'Enhance customer engagement with our AI-powered chatbots. Available on WhatsApp, Telegram, and your website, our chatbots provide instant responses and personalized interactions.',
        features: [
          'Multi-platform support',
          'Natural language processing',
          'Automated responses',
          'Lead capture',
          'Customer support',
          'Analytics and reporting',
          'Custom integrations'
        ],
        technologies: ['Dialogflow', 'Rasa', 'Microsoft Bot Framework', 'WhatsApp Business API', 'Telegram Bot API', 'Node.js', 'Python'],
        process: [
          'Platform selection',
          'Chatbot design',
          'AI training',
          'Integration',
          'Testing',
          'Deployment and monitoring'
        ]
      },
      {
        id: 'email-marketing',
        title: 'Email Marketing & Automation',
        shortDesc: 'Strategic email campaigns and automation to nurture leads and drive customer engagement.',
        detailedDesc: 'Drive customer engagement and conversions with our email marketing and automation services. We create targeted campaigns and automated workflows that nurture leads and build customer relationships.',
        features: [
          'Email campaign design',
          'Automation workflows',
          'List segmentation',
          'A/B testing',
          'Performance tracking',
          'CRM integration',
          'Compliance management'
        ],
        technologies: ['Mailchimp', 'SendGrid', 'HubSpot', 'ActiveCampaign', 'Klaviyo', 'Google Analytics'],
        process: [
          'Strategy development',
          'List building',
          'Campaign creation',
          'Automation setup',
          'Testing and optimization',
          'Performance analysis'
        ]
      },
      {
        id: 'content-marketing',
        title: 'Content Marketing',
        shortDesc: 'Create valuable, engaging content that attracts and retains your target audience.',
        detailedDesc: 'Establish thought leadership and attract your target audience with our content marketing services. We create high-quality, engaging content that drives traffic and builds brand authority.',
        features: [
          'Content strategy development',
          'Blog writing',
          'Social media content',
          'Video content creation',
          'SEO-optimized content',
          'Content distribution',
          'Performance analysis'
        ],
        technologies: ['WordPress', 'Medium', 'YouTube', 'Canva', 'Adobe Creative Suite', 'Google Analytics', 'SEMrush'],
        process: [
          'Audience research',
          'Content strategy',
          'Content creation',
          'Distribution planning',
          'Publishing',
          'Performance monitoring'
        ]
      },
      {
        id: 'graphics-brand-identity',
        title: 'Graphics & Brand Identity Designing',
        shortDesc: 'Professional graphic design and brand identity solutions to create a memorable visual presence.',
        detailedDesc: 'Establish a strong visual identity with our comprehensive graphic design and branding services. We create cohesive brand experiences that resonate with your target audience and build brand recognition.',
        features: [
          'Logo design and branding',
          'Brand identity development',
          'Print design (brochures, flyers)',
          'Digital graphics and assets',
          'Packaging design',
          'Brand guidelines creation',
          'Brand consistency maintenance'
        ],
        technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma', 'Sketch', 'Canva'],
        process: [
          'Brand discovery and research',
          'Concept development',
          'Design creation and iteration',
          'Client feedback and revisions',
          'Final delivery and implementation',
          'Brand asset organization'
        ]
      },

      {
        id: 'video-marketing',
        title: 'Video Marketing',
        shortDesc: 'Engaging video content creation and marketing strategies to captivate your audience and drive engagement.',
        detailedDesc: 'Tell your story through compelling video content with our video marketing services. From promotional videos to social media content, we create videos that engage viewers and drive results.',
        features: [
          'Video production and editing',
          'Motion graphics and animation',
          'Social media video content',
          'Promotional and advertising videos',
          'Product demonstration videos',
          'Video SEO optimization',
          'Multi-platform distribution'
        ],
        technologies: ['Adobe Premiere Pro', 'Adobe After Effects', 'Final Cut Pro', 'DaVinci Resolve', 'Cinema 4D', 'YouTube Studio'],
        process: [
          'Concept and script development',
          'Pre-production planning',
          'Video shooting and production',
          'Post-production editing',
          'Sound design and mixing',
          'Distribution and optimization'
        ]
      },
      {
        id: 'creative-ad-production',
        title: 'Creative Ad Production',
        shortDesc: 'Innovative advertising campaigns and creative production to capture attention and drive conversions.',
        detailedDesc: 'Create impactful advertising campaigns with our creative ad production services. We develop innovative concepts and produce high-quality ads that cut through the noise and deliver measurable results.',
        features: [
          'Advertising campaign strategy',
          'Creative concept development',
          'TV and radio ad production',
          'Digital ad creation',
          'Print advertising design',
          'Outdoor advertising',
          'Campaign performance tracking'
        ],
        technologies: ['Adobe Creative Suite', 'Final Cut Pro', 'Pro Tools', 'Google Ads', 'Facebook Ad Manager', 'Analytics tools'],
        process: [
          'Market research and analysis',
          'Creative strategy development',
          'Concept creation and testing',
          'Production and execution',
          'Media planning and buying',
          'Performance monitoring and optimization'
        ]
      },
      {
        id: 'orm',
        title: 'Online Reputation Management (ORM)',
        shortDesc: 'Comprehensive online reputation management to protect and enhance your brand\'s digital presence.',
        detailedDesc: 'Protect and enhance your brand\'s online reputation with our comprehensive ORM services. We monitor, manage, and improve how your business is perceived across digital channels.',
        features: [
          'Online reputation monitoring',
          'Review management and response',
          'Crisis management',
          'Content suppression',
          'Brand advocacy building',
          'Social media reputation',
          'SEO reputation repair'
        ],
        technologies: ['Google Alerts', 'Brandwatch', 'Mention', 'ReviewTrackers', 'Podium', 'BirdEye', 'SEMrush'],
        process: [
          'Reputation audit and analysis',
          'Monitoring setup',
          'Response strategy development',
          'Content creation and management',
          'Crisis response planning',
          'Ongoing monitoring and reporting'
        ]
      },
      {
        id: 'crm-integration',
        title: 'CRM Integration',
        shortDesc: 'Seamless CRM system integration and customization to streamline customer relationship management.',
        detailedDesc: 'Optimize your customer relationship management with our CRM integration services. We integrate and customize CRM systems to streamline your sales, marketing, and customer service processes.',
        features: [
          'CRM system selection and setup',
          'Third-party integrations',
          'Data migration and cleanup',
          'Custom workflow automation',
          'User training and adoption',
          'Performance monitoring',
          'Ongoing support and maintenance'
        ],
        technologies: ['Salesforce', 'HubSpot', 'Zoho CRM', 'Microsoft Dynamics', 'Pipedrive', 'Zapier', 'API integrations'],
        process: [
          'Requirements analysis',
          'CRM platform selection',
          'System configuration',
          'Data integration and migration',
          'Testing and validation',
          'Training and deployment',
          'Post-implementation support'
        ]
      },
      {
        id: 'marketing-analytics',
        title: 'Marketing Analytics & Reporting',
        shortDesc: 'Data-driven marketing insights and comprehensive reporting to optimize campaign performance.',
        detailedDesc: 'Make data-driven decisions with our marketing analytics and reporting services. We provide comprehensive insights and actionable reports to optimize your marketing campaigns and maximize ROI.',
        features: [
          'Marketing performance analysis',
          'Custom dashboard creation',
          'ROI and attribution modeling',
          'Competitive analysis',
          'Trend identification',
          'Predictive analytics',
          'Executive reporting'
        ],
        technologies: ['Google Analytics', 'Adobe Analytics', 'Tableau', 'Power BI', 'SEMrush', 'Ahrefs', 'Hotjar'],
        process: [
          'Analytics audit and setup',
          'KPI definition and tracking',
          'Data collection and integration',
          'Analysis and insights generation',
          'Dashboard and report creation',
          'Regular reporting and optimization'
        ]
      },

      {
        id: 'performance-marketing',
        title: 'Performance Marketing',
        shortDesc: 'Data-driven performance marketing strategies to achieve measurable results and optimize campaign efficiency.',
        detailedDesc: 'Drive measurable results with our performance marketing strategies. We focus on data-driven approaches to optimize campaigns and maximize ROI across all marketing channels.',
        features: [
          'Performance campaign strategy',
          'Multi-channel attribution modeling',
          'Conversion rate optimization',
          'A/B testing and experimentation',
          'Performance analytics and reporting',
          'Budget optimization',
          'Real-time campaign monitoring'
        ],
        technologies: ['Google Analytics', 'Adobe Analytics', 'Mixpanel', 'Optimizely', 'VWO', 'Hotjar', 'Google Tag Manager'],
        process: [
          'Performance audit and analysis',
          'Strategy development and planning',
          'Campaign setup and implementation',
          'Performance monitoring and optimization',
          'A/B testing and iteration',
          'Reporting and insights delivery'
        ]
      },
      {
        id: 'brand-strategy',
        title: 'Brand Strategy & Positioning',
        shortDesc: 'Comprehensive brand strategy development to establish strong positioning and market differentiation.',
        detailedDesc: 'Build a strong brand identity that resonates with your target audience. Our brand strategy services help you establish clear positioning and create meaningful connections with customers.',
        features: [
          'Brand audit and analysis',
          'Target audience research',
          'Competitive positioning analysis',
          'Brand identity development',
          'Brand messaging and storytelling',
          'Brand guidelines creation',
          'Brand implementation support'
        ],
        technologies: ['Brandwatch', 'Crimson Hexagon', 'SurveyMonkey', 'Typeform', 'Canva', 'Adobe Creative Suite'],
        process: [
          'Brand discovery and research',
          'Brand strategy development',
          'Brand identity design',
          'Brand messaging creation',
          'Brand guidelines documentation',
          'Implementation and rollout',
          'Brand monitoring and evolution'
        ]
      },
      {
        id: 'market-research',
        title: 'Market Research & Competitor Analysis',
        shortDesc: 'In-depth market research and competitor analysis to inform strategic business decisions and identify opportunities.',
        detailedDesc: 'Make informed business decisions with comprehensive market research and competitor analysis. We provide actionable insights to help you understand market trends and competitive landscape.',
        features: [
          'Market size and trend analysis',
          'Consumer behavior research',
          'Competitor analysis and benchmarking',
          'SWOT analysis',
          'Customer segmentation',
          'Industry reports and insights',
          'Strategic recommendations'
        ],
        technologies: ['SurveyMonkey', 'Qualtrics', 'Tableau', 'Google Analytics', 'SEMrush', 'Ahrefs', 'Statista'],
        process: [
          'Research objectives definition',
          'Data collection and methodology',
          'Market analysis and insights',
          'Competitor benchmarking',
          'Findings synthesis and reporting',
          'Strategic recommendations',
          'Implementation guidance'
        ]
      },
      {
        id: 'conversion-rate-optimization',
        title: 'Conversion Rate Optimization (CRO)',
        shortDesc: 'Data-driven CRO strategies to improve website conversions and maximize business results.',
        detailedDesc: 'Optimize your website\'s conversion rate with our comprehensive CRO services. We use data-driven strategies and A/B testing to improve user experience and increase conversions.',
        features: [
          'Conversion funnel analysis',
          'A/B testing and experimentation',
          'User experience optimization',
          'Landing page optimization',
          'Call-to-action optimization',
          'Form optimization',
          'Performance tracking and reporting'
        ],
        technologies: ['Google Analytics', 'Hotjar', 'Optimizely', 'VWO', 'Google Optimize', 'Crazy Egg', 'Mouseflow'],
        process: [
          'Conversion audit and analysis',
          'Hypothesis development',
          'A/B testing setup',
          'Implementation and monitoring',
          'Results analysis and iteration',
          'Continuous optimization'
        ]
      },
      {
        id: 'website-traffic-growth',
        title: 'Website Traffic Growth Strategies',
        shortDesc: 'Comprehensive strategies to increase website traffic and improve online visibility.',
        detailedDesc: 'Grow your website traffic with our comprehensive strategies. We combine SEO, content marketing, and paid advertising to drive sustainable traffic growth.',
        features: [
          'Traffic analysis and benchmarking',
          'SEO optimization',
          'Content marketing strategies',
          'Paid advertising campaigns',
          'Social media marketing',
          'Link building and outreach',
          'Performance monitoring'
        ],
        technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Search Console', 'Facebook Ads Manager', 'LinkedIn Campaign Manager'],
        process: [
          'Traffic audit and analysis',
          'Strategy development',
          'Channel optimization',
          'Content creation and distribution',
          'Campaign execution',
          'Performance monitoring and scaling'
        ]
      },
      {
        id: 'lead-nurturing',
        title: 'Lead Nurturing Campaigns',
        shortDesc: 'Strategic lead nurturing campaigns to convert prospects into loyal customers.',
        detailedDesc: 'Nurture your leads through the sales funnel with our strategic lead nurturing campaigns. We create personalized experiences that guide prospects toward conversion.',
        features: [
          'Lead scoring and segmentation',
          'Email nurturing sequences',
          'Content personalization',
          'Multi-channel nurturing',
          'Lead qualification',
          'CRM integration',
          'Performance tracking'
        ],
        technologies: ['HubSpot', 'Marketo', 'Pardot', 'ActiveCampaign', 'Drip', 'Mailchimp', 'Salesforce'],
        process: [
          'Lead analysis and segmentation',
          'Nurturing strategy development',
          'Content creation',
          'Automation setup',
          'Campaign execution',
          'Performance analysis and optimization'
        ]
      },
      {
        id: 'bulk-lead-generation',
        title: 'Bulk Lead Generation Services',
        shortDesc: 'High-volume lead generation services to fuel your sales pipeline with qualified prospects.',
        detailedDesc: 'Scale your business with our bulk lead generation services. We use multiple channels and strategies to generate high-quality leads at scale.',
        features: [
          'Multi-channel lead generation',
          'Lead qualification and scoring',
          'Database building',
          'Cold outreach campaigns',
          'Social selling',
          'Lead nurturing integration',
          'Quality assurance and validation'
        ],
        technologies: ['LinkedIn Sales Navigator', 'ZoomInfo', 'Hunter.io', 'Apollo.io', 'HubSpot', 'Pipedrive', 'Zapier'],
        process: [
          'Target audience research',
          'Lead generation strategy',
          'Channel selection and setup',
          'Campaign execution',
          'Lead qualification and validation',
          'Database delivery',
          'Ongoing lead flow management'
        ]
      },
      {
        id: 'marketing-automation',
        title: 'Marketing Automation Solutions',
        shortDesc: 'Advanced marketing automation solutions to streamline and optimize marketing workflows.',
        detailedDesc: 'Automate your marketing processes with our comprehensive marketing automation solutions. Streamline workflows, personalize communications, and scale your marketing efforts.',
        features: [
          'Email automation workflows',
          'Lead scoring and nurturing',
          'CRM integration',
          'Dynamic content personalization',
          'Behavioral triggers',
          'Multi-channel automation',
          'Analytics and reporting'
        ],
        technologies: ['HubSpot', 'Marketo', 'Pardot', 'ActiveCampaign', 'Drip', 'Mailchimp', 'Zapier'],
        process: [
          'Automation audit and strategy',
          'Platform selection and setup',
          'Workflow design and implementation',
          'Integration setup',
          'Testing and optimization',
          'Training and handover',
          'Ongoing management and support'
        ]
      },
      {
        id: 'customer-retargeting',
        title: 'Customer Retargeting Campaigns',
        shortDesc: 'Strategic retargeting campaigns to re-engage previous visitors and convert them into customers.',
        detailedDesc: 'Re-engage your website visitors with our strategic retargeting campaigns. We use display advertising and email marketing to bring back lost prospects and increase conversions.',
        features: [
          'Display retargeting campaigns',
          'Email retargeting sequences',
          'Dynamic creative optimization',
          'Cross-device retargeting',
          'Lookalike audience targeting',
          'Conversion tracking',
          'Performance optimization'
        ],
        technologies: ['Google Ads', 'Facebook Ads Manager', 'LinkedIn Campaign Manager', 'The Trade Desk', 'Criteo', 'Google Analytics'],
        process: [
          'Audience analysis and segmentation',
          'Retargeting strategy development',
          'Creative development',
          'Campaign setup and launch',
          'Performance monitoring',
          'A/B testing and optimization',
          'Reporting and insights'
        ]
      },
      {
        id: 'app-marketing-aso',
        title: 'App Marketing (ASO)',
        shortDesc: 'App Store Optimization services to increase app visibility and downloads.',
        detailedDesc: 'Optimize your mobile app\'s visibility in app stores with our comprehensive ASO services. We improve rankings, increase downloads, and boost user acquisition.',
        features: [
          'Keyword research and optimization',
          'App store listing optimization',
          'Icon and screenshot optimization',
          'Review management',
          'User acquisition campaigns',
          'Performance tracking',
          'Competitive analysis'
        ],
        technologies: ['App Annie', 'Sensor Tower', 'Mobile Action', 'AppFollow', 'SplitMetrics', 'StoreMaven', 'App Radar'],
        process: [
          'ASO audit and analysis',
          'Keyword research',
          'App store optimization',
          'Creative asset optimization',
          'Campaign execution',
          'Performance monitoring',
          'Continuous optimization'
        ]
      },
      {
        id: 'ecommerce-marketing',
        title: 'E-commerce Marketing',
        shortDesc: 'Comprehensive e-commerce marketing strategies to boost online sales and customer engagement.',
        detailedDesc: 'Drive e-commerce success with our comprehensive marketing strategies. We optimize product listings, run targeted campaigns, and improve conversion rates to maximize online sales.',
        features: [
          'Product listing optimization',
          'E-commerce SEO',
          'Shopping ads campaigns',
          'Email marketing for e-commerce',
          'Abandoned cart recovery',
          'Customer retention strategies',
          'Performance analytics'
        ],
        technologies: ['Google Shopping', 'Facebook Dynamic Ads', 'Klaviyo', 'Omnisend', 'Google Analytics', 'SEMrush', 'Hotjar'],
        process: [
          'E-commerce audit and analysis',
          'Strategy development',
          'Platform optimization',
          'Campaign setup and execution',
          'Conversion optimization',
          'Customer retention programs',
          'Performance monitoring and scaling'
        ]
      },
      {
        id: 'local-business-marketing',
        title: 'Local Business Marketing',
        shortDesc: 'Localized marketing strategies to help businesses dominate their local markets.',
        detailedDesc: 'Dominate your local market with our comprehensive local business marketing strategies. We combine local SEO, Google My Business optimization, and community engagement to drive local customers.',
        features: [
          'Local SEO optimization',
          'Google My Business management',
          'Local content marketing',
          'Community engagement',
          'Local advertising campaigns',
          'Review management',
          'Local partnership development'
        ],
        technologies: ['Google My Business', 'Yelp', 'Bing Places', 'Facebook Local', 'Nextdoor', 'Local search tools', 'Review platforms'],
        process: [
          'Local market analysis',
          'Local SEO strategy',
          'Profile optimization',
          'Content creation and distribution',
          'Community engagement',
          'Performance monitoring',
          'Local reputation management'
        ]
      },
      {
        id: 'ai-powered-marketing',
        title: 'AI-Powered Marketing Solutions',
        shortDesc: 'Intelligent AI-driven marketing strategies to optimize campaigns and maximize ROI.',
        detailedDesc: 'Leverage the power of AI to optimize your marketing campaigns. Our AI-powered solutions provide predictive analytics, automated optimization, and personalized marketing at scale.',
        features: [
          'AI-powered predictive analytics',
          'Automated campaign optimization',
          'Personalized content generation',
          'Customer behavior prediction',
          'Dynamic pricing optimization',
          'Chatbot and voice bot integration',
          'Performance forecasting'
        ],
        technologies: ['Google Analytics 4', 'Adobe Sensei', 'HubSpot AI', 'Salesforce Einstein', 'Marketo AI', 'Custom AI/ML models'],
        process: [
          'AI readiness assessment',
          'Data integration and preparation',
          'AI model selection and training',
          'Implementation and integration',
          'Testing and validation',
          'Monitoring and optimization',
          'Scalability planning'
        ]
      },
      {
        id: 'chatbot-marketing-automation',
        title: 'Chatbot Marketing Automation',
        shortDesc: 'Intelligent chatbot systems for automated marketing interactions and lead generation.',
        detailedDesc: 'Automate your marketing interactions with intelligent chatbot systems. Our chatbots engage visitors, qualify leads, and nurture prospects across multiple channels.',
        features: [
          'Multi-platform chatbot deployment',
          'Lead qualification automation',
          'Personalized conversation flows',
          'CRM integration',
          'Analytics and reporting',
          'A/B testing capabilities',
          'Scalability and performance optimization'
        ],
        technologies: ['Dialogflow', 'Rasa', 'Microsoft Bot Framework', 'Amazon Lex', 'IBM Watson', 'Custom NLP models'],
        process: [
          'Requirements analysis',
          'Platform selection',
          'Chatbot design and development',
          'Integration setup',
          'Testing and training',
          'Deployment and monitoring',
          'Continuous improvement'
        ]
      },
      {
        id: 'whatsapp-business-api',
        title: 'WhatsApp Business API Integration',
        shortDesc: 'Seamless WhatsApp Business API integration for enhanced customer communication and marketing.',
        detailedDesc: 'Integrate WhatsApp Business API to enhance customer communication and marketing efforts. Send automated messages, process orders, and provide personalized customer support.',
        features: [
          'WhatsApp Business API setup',
          'Automated messaging workflows',
          'Order processing integration',
          'Customer support automation',
          'Marketing campaign automation',
          'Analytics and reporting',
          'Compliance management'
        ],
        technologies: ['WhatsApp Business API', '360Dialog', 'Twilio', 'MessageBird', 'Infobip', 'Custom integration frameworks'],
        process: [
          'Business requirements analysis',
          'API provider selection',
          'Integration development',
          'Workflow automation setup',
          'Testing and validation',
          'Compliance setup',
          'Deployment and training'
        ]
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        shortDesc: 'Strategic marketing campaigns that drive traffic, engagement, and conversions across all digital channels.',
        detailedDesc: 'Grow your online presence with our comprehensive digital marketing services. We create data-driven strategies that drive traffic, increase engagement, and boost conversions across all digital channels.',
        features: [
          'Digital strategy development',
          'Multi-channel campaign management',
          'Content marketing',
          'Social media marketing',
          'Email marketing',
          'PPC advertising',
          'Analytics and reporting'
        ],
        technologies: ['Google Analytics', 'Facebook Ads Manager', 'Google Ads', 'Mailchimp', 'SEMrush', 'Ahrefs'],
        process: [
          'Strategy development',
          'Channel selection',
          'Campaign creation',
          'Content production',
          'Performance monitoring',
          'Optimization and scaling'
        ]
      },
      {
        id: 'analytics-seo',
        title: 'Analytics & SEO',
        shortDesc: 'Data-driven insights and search engine optimization strategies to maximize your online visibility.',
        detailedDesc: 'Make data-driven decisions and improve your search rankings with our analytics and SEO services. We provide comprehensive insights and implement proven optimization strategies.',
        features: [
          'Website analytics setup',
          'SEO audits and optimization',
          'Keyword research',
          'Performance tracking',
          'Competitor analysis',
          'Reporting and insights',
          'Continuous optimization'
        ],
        technologies: ['Google Analytics', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'Tableau'],
        process: [
          'Analytics audit',
          'SEO analysis',
          'Strategy development',
          'Implementation',
          'Monitoring and reporting',
          'Ongoing optimization'
        ]
      },
      {
        id: 'cloud-solutions',
        title: 'Cloud Solutions',
        shortDesc: 'Scalable cloud infrastructure and migration services to optimize your business operations.',
        detailedDesc: 'Transform your business with scalable cloud solutions. We help you migrate to the cloud, optimize infrastructure, and leverage cloud technologies for better performance and cost efficiency.',
        features: [
          'Cloud migration services',
          'Infrastructure optimization',
          'Cloud security',
          'Scalability planning',
          'Cost optimization',
          'Disaster recovery',
          '24/7 monitoring'
        ],
        technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
        process: [
          'Assessment and planning',
          'Migration strategy',
          'Infrastructure setup',
          'Data migration',
          'Testing and validation',
          'Go-live and support'
        ]
      },
      {
        id: 'cybersecurity',
        title: 'Cybersecurity',
        shortDesc: 'Comprehensive security solutions to protect your digital assets and ensure business continuity.',
        detailedDesc: 'Protect your business from cyber threats with our comprehensive cybersecurity solutions. We implement advanced security measures to safeguard your data and ensure business continuity.',
        features: [
          'Security assessments',
          'Threat detection and response',
          'Data encryption',
          'Access control',
          'Security training',
          'Compliance management',
          'Incident response'
        ],
        technologies: ['Firewalls', 'SIEM systems', 'Endpoint protection', 'Encryption tools', 'Multi-factor authentication', 'Security monitoring tools'],
        process: [
          'Security assessment',
          'Risk analysis',
          'Security strategy development',
          'Implementation',
          'Testing and validation',
          'Monitoring and maintenance'
        ]
      }
    ];

    this.currentService = null;
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Bind click events to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card) => {
      card.addEventListener('click', () => {
        // Get service title from the card's h3 element
        const serviceTitle = card.querySelector('h3').textContent.trim();
        // Find the matching service in the services array
        const service = this.services.find(s => s.title === serviceTitle);
        if (service) {
          this.showServiceDetails(service);
        }
      });
    });

    // Bind load more button event
    const loadMoreBtn = document.getElementById('loadMoreServicesBtn');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        this.loadMoreServices();
      });
    }

    // Close modal when clicking outside or on close button
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('service-modal-overlay')) {
        this.closeServiceModal();
      }
    });
  }

  showServiceDetails(service) {
    this.currentService = service;

    // Create modal HTML
    const modalHTML = `
      <div class="service-modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px;">
        <div class="service-modal" style="background: white; border-radius: 16px; max-width: 600px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
          <button class="service-modal-close" style="position: absolute; top: 20px; right: 20px; background: none; border: none; font-size: 24px; cursor: pointer; z-index: 1001; color: #6b7280;">✕</button>

          <div class="service-modal-header" style="padding: 40px 40px 20px; border-bottom: 1px solid #e5e7eb;">
            <div style="margin-bottom: 20px;">
              <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0; color: #1f2937;">${service.title}</h2>
              <p style="font-size: 1.1rem; color: #6b7280; margin: 8px 0 0; line-height: 1.5;">${service.shortDesc}</p>
            </div>
          </div>

          <div class="service-modal-body" style="padding: 40px;">
            <div class="service-description" style="margin-bottom: 40px;">
              <h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 16px; color: #1f2937;">About This Service</h3>
              <p style="font-size: 1rem; line-height: 1.6; color: #4b5563;">${service.detailedDesc}</p>
            </div>

            <div class="service-features" style="margin-bottom: 40px;">
              <h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 20px; color: #1f2937;">What We Offer</h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
                ${service.features.map(feature => `
                  <div style="display: flex; align-items: flex-start; gap: 12px; padding: 16px; background: #f8fafc; border-radius: 8px;">
                    <span style="color: #10b981; font-size: 1.2rem; margin-top: 2px;">✓</span>
                    <span style="font-size: 0.95rem; line-height: 1.5; color: #374151;">${feature}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="service-technologies" style="margin-bottom: 40px;">
              <h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 20px; color: #1f2937;">Technologies We Use</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                ${service.technologies.map(tech => `
                  <span style="background: #e0f2fe; color: #0369a1; padding: 8px 16px; border-radius: 20px; font-size: 0.9rem; font-weight: 500;">${tech}</span>
                `).join('')}
              </div>
            </div>

            <div class="service-process" style="margin-bottom: 40px;">
              <h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 20px; color: #1f2937;">Our Process</h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                ${service.process.map((step, index) => `
                  <div style="display: flex; align-items: flex-start; gap: 12px; padding: 16px; background: #f0f9ff; border-radius: 8px; border-left: 4px solid #0ea5e9;">
                    <span style="background: #0ea5e9; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 600; flex-shrink: 0;">${index + 1}</span>
                    <span style="font-size: 0.95rem; line-height: 1.5; color: #374151;">${step}</span>
                  </div>
                `).join('')}
              </div>
            </div>

          </div>
        </div>
      </div>
    `;

    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Bind close event
    const closeBtn = document.querySelector('.service-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeServiceModal());
    }

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeServiceModal() {
    const modal = document.querySelector('.service-modal-overlay');
    if (modal) {
      modal.remove();
      document.body.style.overflow = '';
    }
    this.currentService = null;
  }

  loadMoreServices() {
    // Show hidden service cards
    const hiddenCards = document.querySelectorAll('.service-card.hidden-service');
    hiddenCards.forEach((card, index) => {
      if (index < 12) { // Show 12 more cards at a time
        card.style.display = 'block';
        card.classList.remove('hidden-service');
      }
    });

    // Hide the load more button if no more cards to show
    const remainingHiddenCards = document.querySelectorAll('.service-card.hidden-service');
    if (remainingHiddenCards.length === 0) {
      const loadMoreBtn = document.getElementById('loadMoreServicesBtn');
      if (loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
      }
    }
  }
}

// Initialize services page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Only initialize if we're on the services page
  if (window.location.pathname.includes('services.html') || document.querySelector('.services-grid')) {
    new ServicesPage();
  }
});
