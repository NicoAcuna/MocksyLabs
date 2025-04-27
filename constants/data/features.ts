import FeatureSectionImage1 from '../../assets/images/feature-section-1.png'
import FeatureSectionImage2 from '../../assets/images/feature-section-2.png'
import FeatureCardImage1 from '../../assets/images/feature-card-1.png'
import FeatureImage1 from '../../assets/images/feature-1.png'
import { Feature } from '../types'
import { useCaseData } from './use-cases'

export const featuresData: Array<Feature> = [
	{
		title: 'Get on the road easier, faster, safer',
		name: 'Vehicle Inspections',
		text: 'Save time with our digital industry-standard checklist so drivers can report issues instantly, and get on the road safer and faster.',
		cardImage: FeatureCardImage1,
		image: FeatureImage1,
		sections: [
			{
				title: 'Schedule inspections in minutes',
				text: 'Maximise your drivers’ time on the road with Mosafe’s Vehicle Check card. With simple interior and exterior digital checklists available on the mobile app, simplify your employees’ daily work routine and deliver content when they need it. ',
				image: FeatureSectionImage1,
			},
			{
				title: 'Set and select your vehicles',
				text: 'Add your everyday vehicle into the system one time, and they’re ready for you to begin your inspection any time. Drivers tap to choose their daily ride, so they finish manual tasks faster.',
				image: FeatureSectionImage2,
			},
			{
				title: 'Report issues before they cost you',
				text: 'Flag any issues to your manager when you submit your inspection online. Mosafe’s system will issue an instant alert so you can prioritise what is most important for your business.',
				image: FeatureSectionImage1,
			},
		],
		sections2: [
			{
				title: 'Report issues before they cost you',
				text: 'Flag any issues to your manager when you submit your inspection online. Your workplace will get an instant alert so a flat tyre will never ruin your day again.',
				image: FeatureSectionImage1,
			},
			
		],
		useCases: useCaseData,
		slug: '/features/vehicle-inspections',
		attributes: ['Paperless vehicle inspection system', 'Industry standard checklist', 'Real-time vehicle maintenance and inspection dashboard'],
	},
	{
		title: 'Gain actionable insights with real-time data',
		name: 'Live Monitoring',
		text: 'Identify problem areas, gaps and trends in your workplace using safety analytics to improve productivity and decrease risks.',
		image: FeatureImage1,
		cardImage: FeatureCardImage1,
		sections: [
			{
				title: 'Customise dashboards for your teams',
				text: 'Create customised dashboards to view the metrics that matter most to your business. Choose from a variety of widgets, including charts, graphs, and tables, to get the insights you need at a glance.',
				image: FeatureSectionImage1,
			},
			{
				title: 'Increase productivity with advanced reporting',
				text: 'Our analytics tool provides advanced reporting and data analysis capabilities, allowing you to drill down into specific areas of your business to gain deeper insights identify trends, and compare performance across teams and tasks.',
				image: FeatureSectionImage2,
			},
			{
				title: 'View real-time data every day',
				text: 'Stay informed with real-time data and alerts. Receive instant notifications when critical metrics are outside of expected ranges or when tasks are not being completed on time.',
				image: FeatureImage1,
			},
		],
		sections2: [
			
		],
		useCases: useCaseData,
		slug: '/features/live-monitoring',
		attributes: ['Track team performance', 'Improve productivity', 'Identify problem areas', 'Measure key performance indicators'],
	},
	{
		title: 'Centralise your business locations',
		name: 'Site Locations',
		text: 'Streamline your location management using a central directory to verify site locations, and improve shift tracking.',
		image: FeatureImage1,
		cardImage: FeatureCardImage1,
		sections: [
			{
				title: 'Central location directory for your work sites',
				text: 'Easily view and manage all of your business locations in one centralised directory. Quickly find the information you need and keep everything up-to-date in real-time.',
				image: FeatureSectionImage1,
			},
			{
				title: 'Verify employee shift work locations',
				text: 'Manage your locations to increase the accuracy of employee’s shift work and to get real-time insights so you know who clocked in and out, when and where.',
				image: FeatureSectionImage2,
			},
			{
				title: 'Unlock enhanced platform-wide features',
				text: 'Add your business locations to enable additional features when building content cards, scheduling shifts and creating digital checklists.',
				image: FeatureImage1,
			},
		],
		sections2: [
			
		],
		useCases: useCaseData,
		slug: '/features/site-locations',
		attributes: ['Visible across your workspace', 'Central address directory', 'Verify location validity'],
	},
	{
		title: 'Store and access your personal data securely',
		name: 'Personal Record Keeping',
		text: 'Upload and manage documents easily while tracking validity and expiry dates in the Document Vault.',
		image: FeatureImage1,
		cardImage: FeatureCardImage1,
		isComingSoon: false,
		sections: [
			{
				title: 'Licence and document uploads made simple',
				text: 'Take charge of your personal data. One-time simple uploads puts the control in your hands, and our secure document storage handles the rest.',
				image: FeatureSectionImage1,
			},
			{
				title: 'Stay on track with expiry reminders',
				text: 'Track the validity of documents to flag upcoming expiry dates on your licences and certifications. Our self-managed upload system allows you to update your information whenever you need to.',
				image: FeatureSectionImage2,
			},
			{
				title: 'Keep your data safe and secure',
				text: 'We take your personal data seriously, which is why we use enterprise-level security standards to keep it safe. With long-term storage for up to 7 years, you can trust Mosafe to keep your sensitive information secure.',
				image: FeatureImage1,
			},
		],
		sections2: [
			
		],
		useCases: useCaseData,
		slug: '/features/personal-record-keeping',
		attributes: ['Long term document storage', 'Secure online personal records', 'Validity and expiry tracking'],
	},
	{
		title: 'Employee management at a glance',
		name: 'User Management',
		text: 'Easily manage your employees and their documents in one place. Forget spreadsheets and paper registers with our digital system.',
		image: FeatureImage1,
		cardImage: FeatureCardImage1,
		isComingSoon: false,
		sections: [
			{
				title: 'Easily keep track of your employees on the go',
				text: 'View and manage all your employees, where documents are easy to find and action. Mosafe has powerful actions better than any spreadsheet, so you can stop chasing paper and focus on the things that matter.',
				image: FeatureSectionImage1,
			},
			{
				title: 'Maintain a compliant workforce',
				text: 'Ensure documents are up-to-date and valid with expiry tracking to keep your business compliant. When it comes to record keeping, we’ve got you covered.',
				image: FeatureSectionImage2,
			},
			{
				title: 'Eliminate the guesswork and fill the gaps',
				text: 'Enable self-managed licence and document uploads to empower your employees to take ownership of their personal information and to keep their details up to date.',
				image: FeatureImage1,
			},
		],
		sections2: [
			
		],
		useCases: useCaseData,
		slug: '/features/user-management',
		attributes: ['View employee documents', 'Compliance friendly system', 'Manage roles and permissions'],
	},
	{
		title: 'Organise your workforce to maximise efficiency',
		name: 'Team Management',
		text: 'Compare performance and manage safety across teams with ease. Create custom groups to manage your business’ teams.',
		image: FeatureImage1,
		cardImage: FeatureCardImage1,
		isComingSoon: false,
		sections: [
			{
				title: 'A better way to manage your teams',
				text: 'Save time by adding your employees into all their relevant teams and locations. Create custom groups of employees and managers to organise your workforce.',
				image: FeatureSectionImage1,
			},
			{
				title: 'Action team tasks all at once',
				text: 'Batch mundane tasks so you can organise your employees. Set up user groups to make the most of automations so Mosafe can handle the busywork for you.',
				image: FeatureSectionImage2,
			},
			{
				title: 'Insights that inform your decisions',
				text: 'Compare performance and manage safety throughout your teams. Instantly pull powerful reports to make decisions across your business and boost productivity.',
				image: FeatureImage1,
			},
		],
		sections2: [
			
		],
		useCases: useCaseData,
		slug: '/features/team-management',
		attributes: ['Organise employees into teams', 'Automate team safety tasks', 'Set and forget system'],
	},
	{
		title: 'Revolutionise your employee training ',
		name: 'Mobile-first Training',
		text: 'Empower your team with engaging video modules and interactive quizzes that are tailored to your business needs. ',
		image: FeatureImage1,
		cardImage: FeatureCardImage1,
		isComingSoon: false,
		sections: [
			{
				title: 'Engaging modules and interactive learning',
				text: 'Empower your team with Mosafes mobile-first training modules and micro-learning courses. Increase knowledge retention with bite-sized content that’s tailored to your business needs.',
				image: FeatureSectionImage1,
			},
			{
				title: 'Training registers and routines covered',
				text: 'Automate your training schedule for new employees to save time and streamline the onboarding process. Keep track of training progress with automated record-keeping, and ensure compliance with easy-to-use reporting tools. ',
				image: FeatureSectionImage2,
			},
			{
				title: 'Accessible training anywhere, anytime',
				text: 'Send your training to employees on the go. Drivers can access training modules and quizzes anywhere, anytime, and from any device to get up to speed on the latest information.',
				image: FeatureImage1,
			},
		],
		sections2: [
			
		],
		useCases: useCaseData,
		slug: '/features/mobile-app-training',
		attributes: ['Easy pre-made training modules', 'Interactive quizzes for knowledge retention', 'Automated training schedules for new hires', 'Digital training registers'],
	},
	{
		title: 'Streamline employee onboarding and site inductions',
		name: 'Digital Inductions',
		text: 'Improve compliance and save time by easily managing new hire information and tracking their progress.',
		image: FeatureImage1,
		cardImage: FeatureCardImage1,
		isComingSoon: false,
		sections: [
			{
				title: 'Automate onboarding new hires',
				text: 'Drivers can easily add their licences, insurances and emergency contacts, and sign policies and contracts all in the mobile app. Their information is saved to their Mosafe profile to fast track their onboarding.',
				image: FeatureSectionImage1,
			},
			{
				title: 'Track employee compliance',
				text: 'Monitor your new hire’s onboarding progress to ensure they complete all necessary tasks before starting work. Our system automatically provides notifications to remind new hires of outstanding tasks.',
				image: FeatureSectionImage2,
			},
			{
				title: 'Create tailored inductions in minutes',
				text: 'Customise pre-made induction templates to tailor the induction process to your business needs to get new hires up to speed about your policies and procedures on site.',
				image: FeatureImage1,
			},
		],
		sections2: [
			
		],
		useCases: useCaseData,
		slug: '/features/digital-inductions',
		attributes: ['Accelerate new hire onboarding', 'Utilise pre-made onboarding templates', 'Efficient record-keeping of employee information', 'Simplify policy and contract signing process'],
	},
]
