import { ImageLinkView, NavIconCard, NavLink, NavTabData } from '../types'
import WhyMosafe from '../../assets/icons/WhyMosafe'
import AboutUs from '../../assets/icons/AboutUs'
import FeatureImage from '../../assets/images/nav-features-image-desktop.png'
import Blog from '../../assets/icons/Blog'
import UserGuide from '../../assets/icons/UserGuide'
import FAQs from '../../assets/icons/FAQs'
import Protect from '../../assets/icons/Protect'
import Engage from '../../assets/icons/Engage'
import Predict from '../../assets/icons/Predict'
import Assess from '../../assets/icons/Assess'
import Hardhat from '../../assets/icons/Hardhat'
import DocumentManagement from '../../assets/icons/DocumentManagement'
import RealTimeAnalytics from '../../assets/icons/RealTimeAnalytics'
import Automation from '../../assets/icons/Automation'

export const pricingLink = '/pricing'

export const companyTabIcons: NavIconCard[] = [
	{
		icon: <WhyMosafe />,
		title: 'Why Mosafe',
		desc: 'Learn how Mosafe can take your safety management to a new level',
		link: '/why-mosafe',
	},
	{
		icon: <AboutUs />,
		title: 'About Us',
		desc:
			'Find out what we stand for and the team behind the product',
		link: '/about-us',
	},
]

export const companyTabImageData: ImageLinkView = {
	src: FeatureImage.src,
	title: 'Careers',
	description: 'Join us on our mission to empower teams to take charge of their safety',
	link: '/careers',
}

export const discoverTabHelpCentreIcons: NavIconCard[] = [
	{
		icon: <UserGuide />,
		title: 'User Guides',
		desc: 'Learn how to set up Mosafe for your needs',
		link: '/help-centre',
	},
	{
		icon: <FAQs />,
		title: 'FAQs',
		desc: 'Find answers to our most frequent questions',
		link: '/help-centre',
	},
]

export const discoverTabLearnIcons: NavIconCard[] = [
	{
		icon: <Blog />,
		title: 'Blog',
		desc: 'The latest updates on all things product and industry',
		link: '/blogs',
	},
]

export const discoverTabImageData: ImageLinkView = {
	src: FeatureImage.src,
	title: 'Customer Stories',
	description: 'Discover how businesses like yours use Mosafe to protect and engage their workers',
	link: '/customer-stories',
}

export const solutionsTabIcons: NavIconCard[] = [
	{
		icon: <Protect />,
		title: 'Protect',
		desc: 'Take control of your safety management',
		link: '/use-cases/protect',
	},
	{
		icon: <Engage />,
		title: 'Engage',
		desc: 'Onboard, activate and re-engage daily',
		link: '/use-cases/engage',
	},
	{
		icon: <Predict />,
		title: 'Predict',
		desc: 'Analyse and forecast your data-driven workspace',
		link: '/use-cases/predict',
	},
	{
		icon: <Assess />,
		title: 'Assess',
		desc: 'Real-time insights and analytics to empower decisions',
		link: '/use-cases/assess',
	},
]

export const solutionsTabMosafeForLinks: NavLink[] = [
	{
		item: 'Drivers',
		isComingSoon: false,
		link: '/mosafe-for/delivery-drivers',
	},
	{
		item: 'Managers',
		isComingSoon: false,
		link: '/mosafe-for/managers',
	},
	{
		item: 'Business Owners',
		isComingSoon: false,
		link: '/mosafe-for/business-owners',
	},
]

export const solutionsTabIndustriesLinks: NavLink[] = [
	{
		item: 'Transport',
		isComingSoon: false,
		link: '/industries/transport',
	},
	{
		item: 'Agriculture',
		isComingSoon: true,
		link: '/industries/agriculture',
	},
	{
		item: 'Warehousing',
		isComingSoon: true,
		link: '/industries/warehousing',
	},
	{
		item: 'Construction',
		isComingSoon: true,
		link: '/industries/construction',
	},
]

export const solutionsTabTeamSizeLinks: NavLink[] = [
	{
		item: 'Enterprise',
		isComingSoon: false,
		link: '/business-type?teamSize=0',
	},
	{
		item: 'SME',
		isComingSoon: false,
		link: '/business-type?teamSize=1',
	},
	{
		item: 'Individual',
		isComingSoon: false,
		link: '/business-type?teamSize=2',
	},
]

export const featuresTabIcons: NavIconCard[] = [
	{
		icon: <Hardhat />,
		title: 'Safety Training',
		desc: 'Send, record, manage',
		link: '/feature-groups/safety-training',
	},
	{
		icon: <Automation />,
		title: "Automation",
		desc: "Schedule, set and forget",
		link: "/feature-groups/automation",
	 },
	 {
		icon: <RealTimeAnalytics />,
		title: 'Real-Time Insights',
		desc: 'Risk, management, compliance',
		link: '/feature-groups/real-time-insights',
	},
	{
		icon: <DocumentManagement />,
		title: 'Document Management',
		desc: 'Upload, check, validate',
		link: '/feature-groups/document-management',
	}, 
]

export const featuresTabImageData: ImageLinkView = {
	src: FeatureImage.src,
	title: 'Product Overview',
	description:
		'Get an overview of the Mosafe platform and learn how we’re taking safety somewhere new.',
	link: 'product-overview',
}

export const featuresTabTopFeaturesLinks: NavLink[] = [
	{
		item: 'Vehicle Inspections',
		isComingSoon: false,
		link: '/features/vehicle-inspections',
	},
	{
		item: 'Live Monitoring',
		isComingSoon: false,
		link: '/features/live-monitoring',
	},
	{
		item: 'Digital Inductions',
		isComingSoon: false,
		link: '/features/digital-inductions',
	},
	{
		item: 'Team Management',
		isComingSoon: false,
		link: '/features/team-management',
	},
	{
		item: 'Mobile-first Training',
		isComingSoon: false,
		link: '/features/mobile-app-training',
	},
]
