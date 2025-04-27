import { BusinessType } from "../types"
import FeatureGroupImage1 from '../../assets/images/feature-group-1.png'
import { featuresData } from "./features"
import TruckIcon from "../../assets/icons/TruckIcon"
import * as Benefits from "./benefits"


export const businessTypesData: Array<BusinessType> = [
    {
        name: "Enterprise",
        title: "Connect your teams and scale your operations",
        text: "aa",
        attributes: ["Scalable and customisable", "Secure data records", "Live data insights"],
        image: FeatureGroupImage1,
        featureTitle: 'Improve your safety culture with trusted processes',
        featureDescription: "With Mosafe Enterprise, your organisation has access to Mosafe's full suite of safety management and reporting features. Implement advanced analytics tools, and custom safety content creation.",
        features: featuresData,
        useCases: featuresData,
        benefits: Benefits.enterpriseBenefitsData,
        icon: <TruckIcon/>,
        description: 'Mosafe empowers your teams to take control of their safety. With an emphasis on intuitive, interactive experiences.',
        slug: 'enterprise-solution',
        statLine: '4+',
        statDescription: 'Management features',
        section: {
            title: "Empower your workforce with a unified system",
            text: "Connect teams across locations and departments to integrate resources, cut down processes and enable productivity across the business.",
            image: FeatureGroupImage1,
            link: "/pricing"
        }
    },
    {
        name: "SME",
        title: "Run your entire business on one safety system",
        text: "aa",
        attributes: ["Frictionless set up", "Integrate workplace processes", "Increase speed and efficiency"],
        image: FeatureGroupImage1,
        featureTitle: 'Efficient Safety Management for Small Teams',
        featureDescription: "Small businesses and teams can benefit from Mosafes easy-to-use safety management tools with Mosafe's range of features to track and report incidents, access real-time data, and collaborate seamlessly.",
        features: featuresData,
        useCases: featuresData,
        benefits: Benefits.smeBenefits,
        icon: <TruckIcon/>,
        description: 'Mosafe empowers your teams to take control of their safety. With an emphasis on intuitive, interactive experiences.',
        slug: 'real-time-insights',
        statLine: '5+',
        statDescription: 'Insights',
        section: {
            title: "Easy set up and adoption",
            text: "Get started in minutes with our guided workspace set up. Our Mosafe app allows you to create custom onboarding, training and reporting with automated and reusable routines for your employees so you can focus on work that matters most.",
            image: FeatureGroupImage1,
            link: "/pricing"
        }
    },
    {
        name: "Individual",
        title: "Stay on top of your compliance and cover your bases",
        text: "aa",
        attributes: ["Record all your daily work", "Accessible anywhere", "Store key documents"],
        image: FeatureGroupImage1,
        featureTitle: 'Stay Safe on the Road with Mosafe',
        featureDescription: "Sign up for Mosafe as an individual driver and enjoy peace of mind while on the road. With Mosafe's powerful safety management tools, you can track and manage all aspects of your work day, from fatigue tracking to vehicle inspections.",
        features: featuresData,
        useCases: featuresData,
        benefits: Benefits.individualBenefits,
        icon: <TruckIcon/>,
        description: 'Mosafe empowers your teams to take control of their safety. With an emphasis on intuitive, interactive experiences.',
        slug: 'document-management',
        statLine: '6+',
        statDescription: 'Documents',
        section: {
            title: "Keep your personal information handy where you work",
            text: "Wherever and whenever, you can stay connected with your teams using Mosafe.",
            image: FeatureGroupImage1,
            link: "/pricing"
        }
    }
]