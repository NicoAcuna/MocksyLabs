import { TeamSize } from "../types";
import EnterpriseTeamIcon from "../../assets/icons/EnterpriseTeamIcon";
import SmeTeamIcon from "../../assets/icons/SmeTeamIcon";
import IndividualTeamIcon from "../../assets/icons/IndividualTeamIcon";
import FeatureSectionImage1 from '../../assets/images/feature-section-1.png'


export const teamSizeData: Array<TeamSize> = [
    {
        name: "Contractor",
        title: "Simplify collecting your daily safety docs",
        text: "Get on the road without all the paperwork. Manage your daily activities including vehicle inspections and fatigue hours digitally using our mobile app that stores records for 7 years.",
        icon: <EnterpriseTeamIcon />,
        image: FeatureSectionImage1,
        slug: '/business-type?teamSize=0'
    },
    {
        name: "SME",
        title: "Understand how your business meets compliance requirements",
        text: "Connect with your employees anywhere with simple and industry standard training templates including manual handling and load restraint courses in line with code of practice so your workers are on road safer.",
        icon: <SmeTeamIcon />,
        image: FeatureSectionImage1,
        slug: '/business-type?teamSize=1'
    },
    {
        name: "Enterprise",
        title: "Automate manual processes and management systems",
        text: "Easily identify areas of improvement across your business through supervision and real-time insight monitoring to ensure safe practices are followed to increase efficiency and decrease downtime.",
        icon: <IndividualTeamIcon />,
        image: FeatureSectionImage1,
        slug: '/business-type?teamSize=2'
    }
]