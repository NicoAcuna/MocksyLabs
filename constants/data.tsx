import { DownloadStep, HomeAnimationCheck } from './types'
import Download from '../assets/icons/Download'
import Profile from '../assets/icons/Profile'
import RecordingYourDay from '../assets/icons/RecordingYourDay'
import LiveInsights from '../assets/icons/LiveInsights'

// start and end variables play with timing, they are scroll points for the animation to start and end
// min and max variables play with location of the animation
export const homeCheckDesktopAnimationPoints: HomeAnimationCheck = {
	opacityStart: 30,
	opacityEnd: 150,

	floatStart: 250,
	floatEnd: 500,
	floatYMin: 20,
	floatYMax: 50,
	floatXMin: 15,
	floatXMax: 60,

	hideStart: 700,
	hideEnd: 900,

	scaleStart: 700,
	scaleEnd: 900,

	completedLeft: 5,
	completedTop: 70,
}

export const homeCheckMobileAnimationPoints: HomeAnimationCheck = {
	opacityStart: 130,
	opacityEnd: 220,

	floatStart: 400,
	floatEnd: 560,
	floatYMin: 10,
	floatYMax: 50,
	floatXMin: 0,
	floatXMax: 30,

	hideStart: 750,
	hideEnd: 850,

	scaleStart: 650,
	scaleEnd: 800,

	completedLeft: 30,
	completedTop: 80,
}

export const DownloadStepList: DownloadStep[] = [
	{
		icon: <Download className='text-purple-base' />,
		title: 'Download the app',
		desc: (
			<div>
				Download the Mosafe app for your device on{' '}
				<a className='text-link-base cursor-pointer' href=''>
					iOS
				</a>{' '}
				or{' '}
				<a className='text-link-base cursor-pointer' href=''>
					Android.
				</a>{' '}
			</div>
		),
	},
	{
		icon: <Profile />,
		title: 'Sign up for a free account',
		desc: <div>Create a Mosafe account with no credit card required.</div>,
	},
	{
		icon: <RecordingYourDay />,
		title: 'Set up your profile',
		desc: <div>Add your basic personal and business details in just a few minutes.</div>,
	},
	{
		icon: <LiveInsights />,
		title: 'Start your daily safety journey with Mosafe',
		desc: <div>Use our mobile safety platform built for compliance, record keeping and safety today.</div>,
	},
]
