import type { NextPage } from 'next';
import Testimonials from '../components/testimonials';
import { mosafeForData } from '../constants/data/mosafe-fors';
import { testimonialsData } from '../constants/data/testimonials';
import { featuresData } from '../constants/data/features';
import HeroBanner from '../components/hero-banner';
import FeaturesList from '../components/lists/features-list';
import TrustedCompanies from '../components/trusted-companies';
import { useBreakpoint } from '../util/use-breakpoint';
import DownloadNow from '../components/download-now/download-now';
import MosafeFor from '../components/lists/mosafe-fors-homepage-list';
import WhyMosafe from '../components/why-mosafe';
import CTA from '../components/cta';

const Home: NextPage = () => {
	const breakpoint = useBreakpoint();

	return (
		<main id='Homepage'>
			<section id='Title' className='mosafe-section sm:py-[20px]'>
				<p className='font-black text-center mb-4 text-[38px] sm:w-1/2 sm:mx-auto'>
					The <span className='underline decoration-purple-base'>Health and Safety App</span> Designed for Humans
				</p>
			</section>

			{/* Aquí agregamos tu animación */}

			<HeroBanner />
			<TrustedCompanies />
			<MosafeFor mosafeFors={mosafeForData} />
			<DownloadNow />
			<WhyMosafe />
			<FeaturesList features={featuresData} />
			<Testimonials testimonials={testimonialsData} />
			<CTA />
		</main>
	);
};

export default Home;
