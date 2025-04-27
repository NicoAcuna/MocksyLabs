import { Industry } from "../types";
import CardImage1 from '../../assets/images/feature-card-1.png'
import IndustryImage1 from '../../assets/images/industry-1.png'
import FeatureSectionImage1 from '../../assets/images/feature-section-1.png'
import FeatureSectionImage2 from '../../assets/images/feature-section-2.png'
import FeatureImage1 from '../../assets/images/feature-1.png'


export const industriesData: Industry[] = [
    {
        name: "Transport",
        text: "Aa comprehensive safety management platform for the transport industry to ensure compliance and reduce risk.",
        title: "All-in-one compliance and safety management solution",
        cardImage: CardImage1,
        image: IndustryImage1,
        slug: "/industries/transport",
        sections: [
            {
                title: "Organise people and documents online",
                text: "Cut the paperwork and eliminate hours of manual record keeping. Mosafe’s digital data storage and live monitoring system saves time.",
                image: FeatureSectionImage1,
                link: "/features/user-management"
            },
            {
                title: "Monitor a real-time view of your operations",
                text: "Get the visibility you need to run your business better. Mosafe is a compliance management software that excels in providing your business data and analytics that you can harness to transform your business.",
                image: FeatureSectionImage2,
                link: "/features/live-monitoring"
            },
            {
                title: "Ensure everyone in the Chain of Responsibility is safe",
                text: "Promote a safety culture within your organisation. Make it easy for your team to stay safe with a safety management system that documents driver activity, incidents and risk assessments to streamline compliance practices.",
                image: FeatureImage1,
                link: "/use-cases/protect"
            }
        ],
        videoTitle: "The easiest way to manage people and safety compliance",
        videoText: "Mosafe gives transport and logistics businesses everything they need to manage people, documents and records so that safety always takes the front seat.",
        video: null,
        attributes: ["Digital cloud-based safety software", "Ready made checklists and training templates", "Scalable as your business grows","Set up in minutes"]
    },
    // {
    //     name: "Agriculture",
    //     text: "Increase your efficiency managing your workplace health and safety risks with a digital safety management tool.",
    //     title: "Ensure your agriculture stays safe on the job",
    //     cardImage: CardImage1,
    //     image: IndustryImage1,
    //     slug: "/industries/agriculture",
    //     isComingSoon: true,
    //     sections: [],
    //     videoTitle: "See Mosafe’s solutions for the transport industry",
    //     videoText: "Mosafe's digital safety software",
    //     video: null,
    //     attributes: ["100% cloud-based", "Secure data records", "Live data insights"]
        
    // },
    // {
    //     name: "Warehousing",
    //     text: "Reduce incidents and injuries by providing real-time visibility into safety practices and hazards.",
    //     title: "Ensure your warehousing stays safe on the job",
    //     cardImage: CardImage1,
    //     image: IndustryImage1,
    //     slug: "/industries/warehousing",
    //     isComingSoon: true,
    //     sections: [],
    //     videoTitle: "See Mosafe’s solutions for the transport industry",
    //     videoText: "Mosafe's digital safety software",
    //     video: null,
    //     attributes: ["100% cloud-based", "Secure data records", "Live data insights"]
    // },
    // {
    //     name: "Mining",
    //     text: "Equip your workforce with a comprehensive platform to easily manage your safety training programs.",
    //     title: "Ensure your coal stays safe on the job",
    //     cardImage: CardImage1,
    //     image: IndustryImage1,
    //     slug: "/industries/mining",
    //     isComingSoon: true,
    //     sections: [],
    //     videoTitle: "See Mosafe’s solutions for the transport industry",
    //     videoText: "Mosafe's digital safety software",
    //     video: null,
    //     attributes: ["100% cloud-based", "Secure data records", "Live data insights"]
    // }
]