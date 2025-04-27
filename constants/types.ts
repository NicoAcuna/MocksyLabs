import { StaticImageData } from 'next/image'
import { ReactElement, ReactNode } from 'react'

export interface PageResourceBaseProps {
	slug: string
	name: string
}
export interface IconBaseProps {
	onClick?: () => void
	href?: string
	className?: string
	color?: string
}

export type Testimonial = {
	text: string
	starRating: number
	customerName: string
	customerOccupation: string
	customerCompany: string
	companyImage: StaticImageData
	image: StaticImageData
}

export type JobListingCategory = 'Engineering' | 'Design' | 'Management'

export interface CustomerStory extends PageResourceBaseProps {
	title: string
	text: string
	image: StaticImageData
	cardImage: StaticImageData
	sections: Array<CustomerStorySection>
	companyDetails: CompanyDetails
	pageTitle: string
}

export type CompanyDetails = {
	text: string
	url: string
	location: string
	industry: string
	featuresUsed: Array<FeatureLink>
}

export type FeatureLink = {
	text: string
	slug: string
}

export type CustomerStorySection = {
	title: string
	content: JSX.Element
}

export type JobListing = {
	name: string
	slug: string
	title: string
	category: JobListingCategory
	location: string
	image: StaticImageData
	text: string
	cardImage: StaticImageData
	sections: Array<JobListingSection>
}

export type JobListingSection = {
	title: string
	content: JSX.Element
}

export interface Industry extends PageResourceBaseProps {
	title: string
	text: string
	image: StaticImageData
	cardImage: StaticImageData
	sections: Array<Section>
	attributes: Array<string>
	isComingSoon?: boolean
	videoTitle: string
	videoText: string
	video: any
}

export interface TeamSize extends PageResourceBaseProps {
	title: string
	text: string
	icon: JSX.Element
	image: StaticImageData
}

export interface Feature extends PageResourceBaseProps {
	title: string
	text: string
	image: StaticImageData
	cardImage: StaticImageData
	isComingSoon?: boolean
	sections: Array<Section>
	sections2: Array<Section>
	attributes: Array<string>
	useCases: Array<UseCase>
}

export type ImageLinkView = {
	src: string
	description: string
	title: string
	link: string
}

export type NavTabData = {
	iconCards: NavIconCard[]
	imageDetails?: ImageLinkView
}

export type NavLink = {
	item: string
	isComingSoon: boolean
	link: string
}

export interface FeatureGroup extends PageResourceBaseProps {
	title: string
	text: string
	attributes: Array<string>
	benefits: Array<Benefit>
	image: StaticImageData
	features: Array<Feature>
	icon?: JSX.Element
	description?: string
	statLine: string
	statDescription: string
}

export type Advantage = {
	title?: string
	text?: string
	item?: JSX.Element
	backgroundColor: string
}

export interface BusinessType extends PageResourceBaseProps {
	title: string
	text: string
	attributes: Array<string>
	benefits: Array<Benefit>
	image: StaticImageData
	featureTitle: string;
	featureDescription: string;
	features: Array<Feature>
	useCases: Array<Feature>
	icon?: JSX.Element
	description?: string
	statLine: string
	statDescription: string
	section: Section
}

export type PricingPlan = {
	name: string
	price: string
	isComingSoon?: boolean
	link: string
	subText: string
	attributes: string[]
}

export type PlanFeature = {
	title: string
	features: PlanSubFeature[]
}

export type PlanSubFeature = {
	name: string
	mouseOverText: string
	plans: {
		individual: boolean
		business: boolean
		enterprise: boolean
	}
}

export type Benefit = {
	title: string
	text: string
	icon: JSX.Element
}

export type ArticleCategory = 'Getting Started' | 'Mobile App' | 'Admin App'

export interface Article extends PageResourceBaseProps {
	category: ArticleCategory
	image: StaticImageData
	author: ArticleAuthor
	title: string
	text: string
	updatedAt: Date
	chapters: Array<ArticleChapter>
}

export type BlogCategory = 'All' | 'Product Notes' | 'Mosafe HQ' | 'Industry Trends' | 'Safety Spotlight'
export interface Blog extends PageResourceBaseProps {
	category: BlogCategory
	image: StaticImageData
	author: ArticleAuthor
	title: string
	text: string
	updatedAt: Date
	chapters: Array<ArticleChapter>
}

export type ArticleAuthor = {
	firstName: string
	lastName: string
	avatar: StaticImageData
}

export type ArticleChapter = {
	cssId: string
	title: string
	content: JSX.Element
	image?: StaticImageData
}

export type FAQ = {
	question: string
	answer: string
}

export type Journey = {
	title: string
	section: Section
	image: StaticImageData
}

export interface UseCase extends PageResourceBaseProps {
	name: string
	title: string
	attributes: string[]
	applyToText: string
	applyToImage1: StaticImageData
	applyToImage2: StaticImageData
	howTitle: string
	howText: string
	sections: Section[]
	journies: Journey[]
	advantages: Advantage[]
	solutionLink: string
	text: string
	image: StaticImageData
	slug: string
}

export type Section = {
	title: string
	text: string
	link?: string
	image: StaticImageData
	attributes?: Array<string>
}

export type Mission = {
	index: string
	image: StaticImageData
	title: string
	text: string
	link: string
	linkText: string
}

export type Founder = {
	name: string
	image: StaticImageData
	text: string
}

export type HomeAnimationCheck = {
	opacityStart: number
	opacityEnd: number
	floatStart: number
	floatEnd: number
	floatYMin: number
	floatYMax: number
	floatXMin: number
	floatXMax: number
	hideStart: number
	hideEnd: number
	scaleStart: number
	scaleEnd: number
	completedLeft: number
	completedTop: number
}

export type Link = {
	text: string
	slug: string
}

export type NavIconCard = {
	icon: JSX.Element
	title: string
	desc: string
	link: string
}

export type DownloadStep = {
	icon: JSX.Element
	title: string
	desc: JSX.Element
}

export interface MosafeFor extends PageResourceBaseProps {
	image: StaticImageData
	name: string
	title: string
	text: string
	icon: JSX.Element
	link?: string
	slug: string
	sections1: Section[]
	sections2?: Section[]
}

export type ProductBenefit = {
	image: StaticImageData
	title: string
	text: string
	link?: string
}
