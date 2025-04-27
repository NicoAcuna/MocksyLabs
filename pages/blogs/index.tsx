import Button from '../../components/core/button'
import React, { useState } from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import BlogList from '../../components/lists/blog-list'
import BlogImage from '../../assets/images/blog.png'
import { blogCategoriesData } from '../../constants/data/blog-categories'
import { BlogCategory } from '../../constants/types'
import { blogsData } from '../../constants/data/blogs'
import Head from 'next/head'
import CTA from '../../components/cta'

function Blogs() {
	const [currentCategory, setCurrentCategory] = useState<BlogCategory>('All')

	function renderCategoryButtons() {
		return blogCategoriesData.map((category, index) => (
			<section onClick={() => setCurrentCategory(category)} key={index} className='text-center'>
				<p
					className={`font-bold cursor-pointer hover:text-black transition-all duration-500 ${
						category === currentCategory ? 'text-black' : ' text-grey-base'
					}`}>
					{category}
				</p>
			</section>
		))
	}

	function getBlogs() {
		return blogsData.filter((blog) => currentCategory === 'All' || currentCategory === blog.category)
	}

	return (
		<main>
			<Head>
				<title>Blogs</title>
				<meta name='description' content="Stay informed on workplace health and safety, compliance, and industry news with Mosafe's blog. Discover practical tips and expert insights to improve safety culture and protect your business."></meta>
				<meta name='keywords' content='Workplace Health and Safety, Safety Management System, Safety tips' />
			</Head>
			<section className='mosafe-section flex flex-col'>
				<p className='text-purple-base font-bold mb-8'>Discover</p>
				<section className='grid grid-cols-1 md:grid-cols-2 items-start mb-14'>
					<section>
						<h1 className='text-[38px] font-extrabold leading-10 mb-4'>Blog</h1>
						<section>
							<p className='text-[24px] mb-10'>Learn about the latest industry trends, what&apos;s new on the platform and the latest updates at Mosafe. </p>
						</section>
					</section>
					{/* <section className='border-[1.5px] border-grey-light rounded-lg px-2 py-[5px] flex justify-between items-center max-h-fit mb-16'>
						<input placeholder='Enter your email address' className='w-full outline-none' />
						<Button text='Subscribe' className='btn-variant-white rounded-full px-2' onClick={() => null} />
					</section> */}
				</section>

				<section className='mb-16 md:flex md:h-[350px]'>
					<section className='border-2 rounded-xl md:justify-center items-center flex flex-col '>
						<section className='md:w-2/3 pt-8 pb-14 md:py-0 px-6'>
							<h3 className='mb-8 md:text-left md:w-1/2 text-[30px] font-bold'>What is a digital safety management system?</h3>
							<Button text='Find out more' className='py-2' icon={<ArrowIcon alignment='right' />} onClick={() => null} />
						</section>
					</section>
					<img className=' mt-[-1.5rem] md:mt-0 md:ml-[-1.5rem] rounded-xl object-cover md:w-1/2' src={BlogImage.src} />
				</section>
			</section>

			<section className='bg-purple-light rounded-t-3xl flex flex-col items-center mb-8'>
				<section className='mosafe-section w-full'>
					<section className='md:flex md:justify-evenly grid grid-cols-2 gap-y-4 flex-wrap md:w-[60%] py-6 md:mx-auto md:mb-12'>
						{renderCategoryButtons()}
					</section>
					<BlogList blogs={getBlogs()} />
				</section>
			</section>

			<CTA />
		</main>
	)
}

export default Blogs
