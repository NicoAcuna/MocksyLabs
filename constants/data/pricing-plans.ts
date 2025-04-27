import { PlanFeature, PricingPlan } from "../types"

export const planFeaturesData: Array<PlanFeature> = [
    {
        title: 'Safety management system',
        features: [
            {
                name: 'Risk mitigation',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: true,
                    business: true,
                    enterprise: true
                }
            },
            {
                name: 'Hazard reporting',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: false,
                    business: true,
                    enterprise: true
                }
            },
            {
                name: 'Incident reporting',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: true,
                    business: true,
                    enterprise: true
                }
            },
            {
                name: 'Training',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: false,
                    business: false,
                    enterprise: true
                }
            },
            {
                name: 'Live monitoring',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: true,
                    business: true,
                    enterprise: true
                }
            },
            {
                name: 'SWMS',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: false,
                    business: true,
                    enterprise: true
                }
            },
        ],
    },
    {
        title: 'Real-time analytics',
        features: [
            {
                name: 'Analytics',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: true,
                    business: true,
                    enterprise: true
                }
            },
            {
                name: 'Custom reports',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: false,
                    business: true,
                    enterprise: true
                }
            },
            {
                name: 'Fleet supervision',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: true,
                    business: true,
                    enterprise: true
                }
            },
            {
                name: 'Site activity',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: false,
                    business: false,
                    enterprise: true
                }
            },
            {
                name: 'Fatigue management',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: true,
                    business: true,
                    enterprise: true
                }
            },
        ],
    },
    {
        title: 'Document management',
        features: [
            {
                name: 'Document vault',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: true,
                    business: true,
                    enterprise: true
                }
            },
            {
                name: 'User management',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: false,
                    business: true,
                    enterprise: true
                }
            },
            {
                name: 'Tasks',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: true,
                    business: true,
                    enterprise: true
                }
            },
            {
                name: 'Workspace configuration',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: false,
                    business: false,
                    enterprise: true
                }
            },
            {
                name: 'EWDS',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: true,
                    business: true,
                    enterprise: true
                }
            },
            {
                name: 'Vehicle Standards',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: true,
                    business: true,
                    enterprise: true
                }
            },
        ],
    },
    {
        title: 'Automation',
        features: [
            {
                name: 'Rules',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: true,
                    business: true,
                    enterprise: true
                }
            },
            {
                name: 'Inductions',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: false,
                    business: true,
                    enterprise: true
                }
            },
            {
                name: 'Content builder',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: true,
                    business: true,
                    enterprise: true
                }
            },
            {
                name: 'Instant alerts',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: false,
                    business: false,
                    enterprise: true
                }
            },
            {
                name: 'Safety cards',
                mouseOverText: 'What is risk mitigation?',
                plans: {
                    individual: true,
                    business: true,
                    enterprise: true
                }
            },
        ],
    },
]

export const pricingPlansData: Array<PricingPlan> = [
    {
        name: 'Individual Plan',
        price: 'FREE',
        link: '/pricing',
        subText: 'Ideal for individuals',
        attributes: ['Live data insights', 'Risk mitigation', 'Custom reports'],
    },
    {
        name: 'Business Plan',
        price: 'TBD',
        link: '/pricing',
        isComingSoon: true,
        subText: 'SME teams up to 24 users',
        attributes: ['Live data insights', 'Risk mitigation', 'Custom reports'],
    },
    {
        name: 'Enterprise Plan',
        price: 'TBD',
        link: '/pricing',
        isComingSoon: true,
        subText: 'Large teams of 24+ users',
        attributes: ['Live data insights', 'Risk mitigation', 'Custom reports'],
    },
]