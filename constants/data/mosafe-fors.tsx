import TruckIcon from '../../assets/icons/TruckIcon';
import MosafeForImage1 from '../../assets/images/mosafe-for-1.png'
import MosafeForImage2 from '../../assets/images/mosafe-for-2.png'
import MosafeForImage3 from '../../assets/images/mosafe-for-3.png'
import { MosafeFor } from "../types";

export const mosafeForData: Array<MosafeFor> = [
    {
        image: MosafeForImage1,
        icon: <TruckIcon />,
        name: "Drivers",
        title: "The ultimate safety companion for drivers",
        text: "Simplify work record management with the intuitive and easy-to-use app.",
        slug: '/mosafe-for/delivery-drivers',
        sections1: [
            {
                title: "Seamless part of your everyday work routine",
                text: "Mosafe is a digital system that helps you stay compliant and fit to work with industry standard safety forms and systems so you can get on the road without all the paperwork.",
                image: MosafeForImage1,
                link: "/features/vehicle-inspections"
            },
            {
                title: "Data entry made easy",
                text: "Record, manage and share your safety docs and activity all in one app.",
                image: MosafeForImage1,
                link: "/features/personal-record-keeping",
                attributes: [
                    'Track time worked',
                    'Guided vehicle inspections',
                    'Digital record keeping',
                    'Licence and certification expiry tracking'
                ]
            },
        ],
        sections2: [
            {
                title: "Raise your game with our mobile safety app",
                text: "Stay on track with your compliance with a single app, tackle everyday tasks with one tool which is easy to use and simple to learn.",
                image: MosafeForImage1,
                link: "/download"
            },
        ],
    },
    {
        image: MosafeForImage2,
        icon: <TruckIcon />,
        name: "Managers",
        title: "Daily safety management made easy",
        text: "Get real-time updates and stay connected with your team all day.",
        slug: '/mosafe-for/managers',
        sections1: [
            {
                title: "Simplify your team's training requirements",
                text: "Train your employees with pre-made templates and digital checklists so they can complete work and stay safe on the go. Keep your team engaged with safety to prevent unexpected issues.",
                image: MosafeForImage1,
                link: "/use-cases/train"
            },
            {
                title: "View digital team records all in one place",
                text: "Filing cabinets no more, all employee records and activity is captured and stored on our system automatically.",
                image: MosafeForImage1,
                link: "/features/user-management",
                attributes: [
                    'Digital recording keeping',
                    'Automatic register of safety activity',
                    'Cloud storage for access anywhere',
                    'Built for frontline teams and managers'
                ]
            },
        ],
        sections2: [
            {
                title: "Monitor employee safety and compliance at a glance",
                text: "Identify bottlenecks and gaps in compliance, delegate tasks and see issues across your teams from anywhere with our team management system.",
                image: MosafeForImage1,
                link: "/use-cases/monitor"
            },
        ],
    },
    {
        image: MosafeForImage3,
        icon: <TruckIcon />,
        name: "Business Owners",
        title: "Simplify compliance, streamline reporting and empower your teams",
        text: "Centralise your business' safety management in one software solution.",
        slug: '/mosafe-for/business-owners',
        sections1: [
            {
                title: "Power up your company with increased efficiencies",
                text: "Easily know where your teams stand at a glance with business analytics to make your daily tasks easier and help operations run smoother.",
                image: MosafeForImage1,
                link: "/feature-groups/real-time-insights"
            },
            {
                title: "Manage everything in one place",
                text: "Monitor your employees with a safety management system that gives you control over your processes and scales as your transport business grows.",
                image: MosafeForImage1,
                link: "/use-cases/protect",
                attributes: [
                    'Simplify daily business operations',
                    'Streamline employee communication',
                    'Access anywhere, anytime',
                    'Designed for frontline teams'
                ]
            },
        ],
        sections2: [
            {
                title: "How do I invite my teams?",
                text: "Getting your teams onboard requires sending an invitation, that’s it! It’s so visual and easy to use, your team will be on the system in minutes.",
                image: MosafeForImage1,
                link: "/help-centre"
            },
        ],
    }
]