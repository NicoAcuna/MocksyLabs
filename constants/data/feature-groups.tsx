import { FeatureGroup } from '../types'
import FeatureGroupImage1 from '../../assets/images/feature-group-1.png'
import { featuresData } from './features'
import TruckIcon from '../../assets/icons/TruckIcon'
import ShareIcon from '../../assets/icons/ShareIcon'
import PhoneIcon from '../../assets/icons/PhoneIcon'
import CloudIcon from '../../assets/icons/CloudIcon'

export const featureGroupsData: Array<FeatureGroup> = [
	{
		name: 'Safety Training',
		title: 'The mobile safety platform built for compliance and training',
		text: 'aa',
		attributes: ['Ready-made training courses', 'Knowledge base for your business', 'Digital safety training solution', 'Mobile-first delivery'],
		image: FeatureGroupImage1,
		features: featuresData,
		benefits: [
			{
				title: 'Customise industry standard templates',
				text:
					'Save time with our pre-built digital templates and easily customise using the content editor.',
				icon: <ShareIcon />,
			},
			{
				title: 'Mobile-friendly design',
				text:
					'Employees can complete cards on the go with digital forms and online training courses delivered to their smartphones.  ',
				icon: <TruckIcon color='#A857FC' />,
			},
			{
				title: 'Stay a step ahead',
				text:
					'Safety cards come with live notifications and record tracking so you know who’s seen it, updated and completed it, or not.',
				icon: <PhoneIcon />,
			},
			{
				title: 'Forget about compliance',
				text:
					'Set up automations that monitor form progress and completion rates so your business exceeds safety requirements.',
				icon: <CloudIcon />,
			},
		],
		icon: <TruckIcon />,
		description:
			'Delight employees with interactive content on the daily with safety cards. Safety cards deliver training content, contracts, checklists, toolbox talks and more to your teams, all digital and easy to access.',
		slug: '/feature-groups/safety-training',
		statLine: '20+',
		statDescription: 'new digital checklists and training templates free to use every month',
	},
	{
		name: 'Automation',
		title: 'Organise your business processes with streamlined automations',
		text: 'aa',
		attributes: ['Save time on manual tasks', 'Fully customisable to your business', 'Set up within minutes'],
		image: FeatureGroupImage1,
		features: featuresData,
		benefits: [
			{
				title: 'Simple, easy set up',
				text:
					'Create custom rules and routines for regular activities such as vehicle inspections and risk assessments.',
				icon: <ShareIcon />,
			},
			{
				title: 'Automate manual tasks',
				text:
					'Save hours of precious employee time so they can dedicate work to what really matters.',
				icon: <TruckIcon color='#A857FC' />,
			},
			{
				title: 'Reduce repetitive admin tasks',
				text:
					'Connect everyone involved in your daily operations as part of the Mosafe system to boost productivity.',
				icon: <PhoneIcon />,
			},
			{
				title: 'Utilise your business data',
				text:
					'Automate your timely data workflow and processing so you can easily see where your business stands.',
				icon: <CloudIcon />,
			},
		],
		icon: <TruckIcon />,
		description:
			'Build a reliable, error-free system that handles mundane tasks and busywork so that your teams stay on track and are more confident in their daily safety activities.',
		slug: '/feature-groups/automation',
		statLine: '2+',
		statDescription: 'hours saved per day by admins',
	},
	{
		name: 'Real-time Insights',
		title: 'Optimise your operations with business insights',
		text: 'aa',
		attributes: ['Identify leading risk indicators', 'Spot patterns in daily activities', 'Harness predictive analytics','Make data-driven decisions'],
		image: FeatureGroupImage1,
		features: featuresData,
		benefits: [
			{
				title: 'Accessible everywhere, at any time',
				text:
					'Cloud-powered analytics that boost your productivity where you can visualise a big picture view of your operations.',
				icon: <ShareIcon />,
			},
			{
				title: 'Visualise risk indicators',
				text:
					'Live dashboards and monitoring allow you to keep track of key events and activities happening across your teams.',
				icon: <TruckIcon color='#A857FC' />,
			},
			{
				title: 'Connect departments and teams',
				text:
					'Engage all your staff, from admins to frontline workers, with a safety management solution that analyses operations across your employees.',
				icon: <PhoneIcon />,
			},
			{
				title: 'Predictive analytics solution',
				text:
					'Make the best use of your data with predictive analytics and improve your safety culture with timely corrective actions.',
				icon: <CloudIcon />,
			},
		],
		icon: <TruckIcon />,
		description:
			'Get ahead with data analytics and business insights that can power your decisions and help you visualise patterns in your business operations on a big picture scale.',
		slug: '/feature-groups/real-time-insights',
		statLine: '60%',
		statDescription: 'increased efficiency for your business',
	},
	{
		name: 'Document Management',
		title: 'See and manage your documents all in one place',
		text: 'aa',
		attributes: ['Secure cloud storage', 'Centralised employee documentation', 'Knowledge base for your business'],
		image: FeatureGroupImage1,
		features: featuresData,
		benefits: [
			{
				title: 'Simple compliance framework',
				text:
					'Stay on track with detailed employee activity logs and digital records to fill the gaps ahead of time.',
				icon: <ShareIcon />,
			},
			{
				title: 'Custom access management',
				text:
					'Manage permissions to members and grant access to those who need to view documents in your workspace.',
				icon: <TruckIcon color='#A857FC' />,
			},
			{
				title: 'Protective data security',
				text:
					'Your business information is safe and secure in the system with our enterprise-level security practices.',
				icon: <PhoneIcon />,
			},
			{
				title: 'Long term storage',
				text:
					'Access your stored documents instantly with cloud storage at any time.',
				icon: <CloudIcon />,
			},
		],
		icon: <TruckIcon />,
		description:
			'It’s time for your business to save time on paperwork. Mosafe stores digital records and documents, allowing employees to manage their personal information and lets you spend your time on meaningful tasks.',
		slug: '/feature-groups/document-management',
		statLine: '10+',
		statDescription: 'personal and business document types supported',
	},
]
