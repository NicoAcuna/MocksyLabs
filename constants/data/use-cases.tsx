import { UseCase } from "../types";
import FeatureCardImage1 from '../../assets/images/feature-card-1.png'
import Button from "../../components/core/button"
import Profile from "../../assets/icons/Profile"
import Link from "next/link";

export const useCaseData: Array<UseCase> =  [
    {
        name: "Protect",
        title: 'Effortless compliance with digital record keeping',
        applyToText: 'Mosafe empowers your teams to take control of their safety. With an emphasis on intuitive, interactive experiences.',
        applyToImage1: FeatureCardImage1,
        applyToImage2: FeatureCardImage1,
        howTitle: 'Remove this section?',
        howText: 'They know those things. John Kerry knows this. Today, America has a dual responsibility.',
        sections: [
            {
                title: "Protect everyone in the Chain of Responsibility",
                text: "Tick the boxes of safety management. Stay compliant in the chain of responsibility, so you can focus on the tasks that matter.",
                image: FeatureCardImage1,
                link: "/industries/transport"
            },
            {
                title: "Manage your safety activities with one tool",
                text: "Mosafe protects your business by automatically recording your compliance for you. Give your teams increased visibility of safety activity across your business with real-time records and analytics.",
                image: FeatureCardImage1,
                link: "/use-cases/monitor"
            },
            {
                title: "Keep workplace training, data and documents safe",
                text: "Protect your employee records and workplace documents digitally. Mosafe is built to keep your information confidential and secure, with cloud storage for easy access.",
                image: FeatureCardImage1,
                link: "/features/user-management"
            },
        ],
        journies: [
            {
                title: 'REAL-TIME MONITORING',
                section: {
                        title: "Track progress and KPIs live",
                        text: "Continuously monitor your worker's activities to prevent incidents before they occur.",
                        image: FeatureCardImage1,
                        link: "aa"
                },  
                image: FeatureCardImage1
            },
            {
                title: 'INCIDENT REPORTING',
                section: {
                        title: "Report incidents instantly",
                        text: "Everyone in the chain of responsibility is enabled to report hazards, incidents and near-misses instantly.",
                        image: FeatureCardImage1,
                        link: "/features/live-monitoring"
                },
                image: FeatureCardImage1
            },
            {
                title: 'COMPLIANCE MANAGEMENT',
                section: {
                        title: "Stay compliant and minimise risk",
                        text: " Mosafe helps businesses stay compliant with safety regulations by tracking compliance tasks and providing real-time alerts for any compliance issues.",
                        image: FeatureCardImage1,
                        link: "/feature-groups/document-management"
                },
                image: FeatureCardImage1
            },
            {
                title: 'SAFETY ANALYTICS',
                section: {
                        title: "Analyse your safety data",
                        text: "Mosafe's advanced safety analytics tools help businesses identify trends and patterns in safety incidents and near-misses, allowing them to take proactive measures to prevent accidents.",
                        image: FeatureCardImage1,
                        link: "/use-cases/assess"
                },
                image: FeatureCardImage1
            },
        ],
        advantages: [
            {
                title: '92%',
                text: 'of businesses say Mosafe has improved their onboarding and training processes by digitising their content.',
                backgroundColor: 'white'
            },
            {
                text: 'Protect your businesses from risks and liabilities, allowing you to focus on their core operations with peace of mind.',
                item: (
                    <Link
                        href='/product-overview'
                    >
                        <Button text='Find out more' onClick={() => null} className='btn-variant-white'/>
                    </Link>
                ),
                backgroundColor: 'purple-light'
            },
            {
                item: <Profile/>,
                backgroundColor: 'white'
            },
            {
                text: 'Digital safety management system helps businesses improve their safety culture, reduce risks, and save time and money.',
                backgroundColor: 'purple-light'
            }
        ],
        solutionLink: '/',
        attributes: [
            'Cloud-based records',
            'Accessible anywhere',
            'Streamlined audit processes',
            'Secure data storage'
        ],
        text: "Proactively identify and manage risks, implement effective controls and procedures to reduce the likelihood of incidents and injuries and minimise downtime.",
        image: FeatureCardImage1,
        slug: "/use-cases/protect",
    },
    {
        name: "Train",
        title: 'The mobile learning platform for frontline training',
        applyToText: 'Mosafe empowers your teams to take control of their safety. With an emphasis on intuitive, interactive experiences.',
        applyToImage1: FeatureCardImage1,
        applyToImage2: FeatureCardImage1,
        howTitle: 'How does Mosafe protect your drivers?',
        howText: 'They know those things. John Kerry knows this. Today, America has a dual responsibility.',
        sections: [
            {
                title: "Create branded training in minutes",
                text: "Train your employees directly on their smartphones with your own custom video, image, text and audio content. Deliver best in class training without any coding or graphic design skills required.",
                image: FeatureCardImage1,
                link: "/features/mobile-app-training"
            },
            {
                title: "Select and customise courses from an editable library",
                text: "Deliver the best material to your team with Mosafe’s comprehensive course library with 100+ ready-made industry content so you can deliver training to your teams in minutes, not months.",
                image: FeatureCardImage1,
                link: "/feature-groups/safety-cards"
            },
            {
                title: "Automatically deliver information on time",
                text: "Schedule and publish training and content on time to fast-track safety training completion. With interactive and engaging digital learning content, your team can complete their safety training anywhere, anytime.",
                image: FeatureCardImage1,
                link: "/feature-group/automations"
            },
        ],
        journies: [
            {
                title: 'CREATOR TOOL',
                section: {
                        title: "Select and create content",
                        text: "Create your content from scratch to build a custom, branded library of content that you can update, edit and reuse when you need it.",
                        image: FeatureCardImage1,
                        link: "/feature-groups/safety-cards"
                },
                image: FeatureCardImage1
            },
            {
                title: 'CUSTOMISE YOUR TRAINING',
                section: {
                        title: "Configure and customise training",
                        text: "Choose from Mosafe’s library where each lesson is designed to deliver engaging and effective learning to your team in only minutes.",
                        image: FeatureCardImage1,
                        link: "/features/vehicle-inspections"
                },
                image: FeatureCardImage1
            },
            {
                title: 'AUTOMATE YOUR SCHEDULE',
                section: {
                        title: "Automate your schedule",
                        text: "Make distributing content easy. Deliver training at any time, so frontline workers complete training in just a few minutes a day.",
                        image: FeatureCardImage1,
                        link: "/feature-groups/automation"
                },
                image: FeatureCardImage1
            },
            {
                title: 'MOBILE DELIVERY',
                section: {
                        title: "Mobile delivery",
                        text: "Don’t just deliver training online, make it mobile. With minimal effect on phone battery and data plan, less tech-savvy employees find Mosafe the best solution to complete training on their schedule.",
                        image: FeatureCardImage1,
                        link: "/features/mobile-app-training"
                },
                image: FeatureCardImage1
            },
            {
                title: 'MONITOR RESULTS',
                section: {
                        title: "Monitor results",
                        text: "Watch completion rates soar with analytics. Boost your workplace learning and retention rate with mobile safety training.",
                        image: FeatureCardImage1,
                        link: "/feature-group/real-time-insights"
                },
                image: FeatureCardImage1
            }
        ],
        advantages: [
            {
                title: '92%',
                text: 'of businesses say Mosafe has improved their onboarding and training processes by digitising their content.',
                backgroundColor: 'white'
            },
            {
                text: 'Protect your businesses from risks and liabilities, allowing you to focus on their core operations with peace of mind.',
                item: (
                    <Link
                        href='/product-overview'
                    >
                        <Button text='Find out more' onClick={() => null} className='btn-variant-white'/>
                    </Link>
                ),
                backgroundColor: 'purple-light'
            },
            {
                item: <Profile/>,
                backgroundColor: 'white'
            },
            {
                text: 'Digital safety management system helps businesses improve their safety culture, reduce risks, and save time and money.',
                backgroundColor: 'purple-light'
            }
        ],
        solutionLink: '/',
        attributes: [
            'Pre-made industry relevant templates',
            'Custom learning courses',
            'Mobile-first design and delivery',
            'Safety training records and monitoring'
        ],
        text: "Use a centralised platform to create, distribute, and track training materials, ensuring that all employees have access to the latest safety information.",
        image: FeatureCardImage1,
        slug: "/use-cases/train",
    },
    {
        name: "Monitor",
        title: 'Assess your team’s performance and engagement progress at a glance',
        applyToText: 'Mosafe empowers your teams to take control of their safety. With an emphasis on intuitive, interactive experiences.',
        applyToImage1: FeatureCardImage1,
        applyToImage2: FeatureCardImage1,
        howTitle: 'How does Mosafe protect your drivers?',
        howText: 'They know those things. John Kerry knows this. Today, America has a dual responsibility.',
        sections: [
            {
                title: "Ensure and monitor the safety of your transport activities",
                text: "Monitor your safety as it happens. With in-built reporting and analytics to boost performance and safety across your team and make you compliant by default.",
                image: FeatureCardImage1,
                link: "/features/user-management"
            },
            {
                title: "Go deeper with your safety data",
                text: "View records and data displayed as actionable reports so you can put your data to work and spot trends and patterns before they happen. Reduce the risk of accidents and incidents by staying ahead of the curve and on top of the chain of responsibility requirements.",
                image: FeatureCardImage1,
                link: "/features/live-monitoring"
            },
            {
                title: "Generate actionable reports to track progress and efficiencies",
                text: "Monitor your engagement and performance metrics on the go. Re-engage your team members with a click of a button to continuously promote safety across your whole team and steer accountability with your employees.",
                image: FeatureCardImage1,
                link: "/use-cases/assess"
            }
        ],
        journies: [
            {
                title: 'CREATOR TOOL',
                section: {
                        title: "Create and distribute content",
                        text: "Deliver customised content with our creator tool, and select from a wide range of ready-made content from Mosafe’s Library to give to your employees.",
                        image: FeatureCardImage1,
                        link: "/feature-groups/safety-cards"
                },
                image: FeatureCardImage1
            },
            {
                title: 'CAPTURE AND REVIEW',
                section: {
                        title: "Monitor progress and improvement",
                        text: "View employee insights and progress across all delivered training with in-built reporting tools to oversee performance in one place.",
                        image: FeatureCardImage1,
                        link: "/features/live-monitoring"
                },
                image: FeatureCardImage1
            },
            {
                title: 'REMINDERS AND NOTIFICATIONS',
                section: {
                        title: "Take action with reminders",
                        text: "Target inactive employees with tasks and reminders, and understand how your team is learning and applying safety training in the workplace to stay compliant.",
                        image: FeatureCardImage1,
                        link: "/features/team-management"
                },
                image: FeatureCardImage1
            }
        ],
        advantages: [
            {
                title: '92%',
                text: 'of businesses say Mosafe has improved their onboarding and training processes by digitising their content.',
                backgroundColor: 'white'
            },
            {
                text: 'Protect your businesses from risks and liabilities, allowing you to focus on their core operations with peace of mind.',
                item: (
                    <Link
                        href='/product-overview'
                    >
                        <Button text='Find out more' onClick={() => null} className='btn-variant-white'/>
                    </Link>
                ),
                backgroundColor: 'purple-light'
            },
            {
                item: <Profile/>,
                backgroundColor: 'white'
            },
            {
                text: 'Digital safety management system helps businesses improve their safety culture, reduce risks, and save time and money.',
                backgroundColor: 'purple-light'
            }
        ],
        solutionLink: '/',
        attributes: [
            'Live monitoring of teams on site',
            'Generate out-of-the-box reports',
            'Digitise your operations',
            'Oversight across employees'
        ],
        text: "Track employee training progress, monitor safety compliance, and maintain accurate records of safety incidents and near-misses in real-time.",
        image: FeatureCardImage1,
        slug: "/use-cases/monitor",
    },
    {
        name: "Assess",
        title: 'Gain insight into your workforce’s daily safety journey',
        applyToText: 'Mosafe empowers your teams to take control of their safety. With an emphasis on intuitive, interactive experiences.',
        applyToImage1: FeatureCardImage1,
        applyToImage2: FeatureCardImage1,
        howTitle: 'How does Mosafe protect your drivers?',
        howText: 'They know those things. John Kerry knows this. Today, America has a dual responsibility.',
        sections: [
            {
                title: "Unlock visibility into your frontline workers",
                text: "Analyse your employees’ daily safety activity and unlock actionable insights into your company’s data-driven safety practices.",
                image: FeatureCardImage1,
                link: "/feature-group/real-time-insights"
            },
            {
                title: "Use team data to make better decisions",
                text: "Assess and track your team’s knowledge at each step of the training process so you can be sure your teams are doing tasks correctly. Simplify record keeping processes to connect the dots between learning and action.",
                image: FeatureCardImage1,
                link: "/features/team-management"
            },
            {
                title: "Empower your teams with live insights",
                text: "Enable your teams to view insights and accelerate hazard and risk assessments so that your employees can take corrective action swiftly while keeping the whole team informed.",
                image: FeatureCardImage1,
                link: "/features/live-monitoring"
            }
        ],
        journies: [
            {
                title: 'CARD RESULTS AND USER RESPONSES',
                section: {
                        title: "Explore data with trends",
                        text: "Manage data and records with Mosafe’s Results Hub, where we visualise your business data and allow you to make decisions on the information right in front of you.",
                        image: FeatureCardImage1,
                        link: "/features/live-monitoring"
                },
                image: FeatureCardImage1
            },
            {
                title: 'REPORTS AND CHARTS',
                section: {
                        title: "Identify patterns in your business",
                        text: "Visual data allows you to see progress across your employees, target inactive users and explore safety patterns across your business.",
                        image: FeatureCardImage1,
                        link: "features/live-monitoring"
                },
                image: FeatureCardImage1
            },
            {
                title: 'DASHBOARD ANALYTICS',
                section: {
                        title: "Monitor problems as they occur",
                        text: "Optimise your actionable reports with our simple user interface that allows you to monitor problems as they occur, so you’re always ahead of the game.",
                        image: FeatureCardImage1,
                        link: "/use-cases/monitor"
                },
                image: FeatureCardImage1
            },
            {
                title: 'COMPLIANCE STANDARDS',
                section: {
                        title: "Fit to compliance standards",
                        text: "Mosafe’s interactive dashboards allow you to analyse, assess and predict key safety trends and to use your data to improve your safety. ",
                        image: FeatureCardImage1,
                        link: "/features/real-time-insights"
                },
                image: FeatureCardImage1
            }
        ],
        advantages: [
            {
                title: '92%',
                text: 'of businesses say Mosafe has improved their onboarding and training processes by digitising their content.',
                backgroundColor: 'white'
            },
            {
                text: 'Protect your businesses from risks and liabilities, allowing you to focus on their core operations with peace of mind.',
                item: (
                    <Link
                        href='/product-overview'
                    >
                        <Button text='Find out more' onClick={() => null} className='btn-variant-white'/>
                    </Link>
                ),
                backgroundColor: 'purple-light'
            },
            {
                item: <Profile/>,
                backgroundColor: 'white'
            },
            {
                text: 'Digital safety management system helps businesses improve their safety culture, reduce risks, and save time and money.',
                backgroundColor: 'purple-light'
            }
        ],
        solutionLink: '/',
        attributes: [
            'Make data-driven decision',
            'Visualise safety behaviours',
            'Simple, interactive interface',
            'Compliant by default'
        ],
        text: "Identify trends, patterns, and areas for improvement, allowing you to make more informed decisions and take action to prevent incidents before they occur.",
        image: FeatureCardImage1,
        slug: "/use-cases/assess"
    }
]