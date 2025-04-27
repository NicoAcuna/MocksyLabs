import Link from 'next/link'
import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { Colors } from '../../constants/colors'
import { Blog } from '../../constants/types'

type Props = {
	blog: Blog
}

function BlogCard({ blog }: Props) {
	return (
		<Link href={blog.slug}>
			<div className=' sm:max-w-[235px] max-w-[350px] mx-auto sm:mx-0 group cursor-pointer'>
				<section className='relative'>
					<img className='sm:max-w-[235px] mb-4 group-hover:opacity-60 transition-all duration-500 relative' src={blog.image.src} />
					<div className='w-10 h-10 rounded-[50%] bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all group-hover:opacity-100 duration-500 flex justify-center items-center'>
						<ArrowIcon color='#FFF' className='rotate-180' />
					</div>
				</section>
				<div>
					<p className='font-semibold text-[18px] my-2'>{blog.name}</p>
					<p className='line-clamp-2'>{blog.text}</p>
					<Link href={blog.slug}>
						<div className='flex items-center my-8 cursor-pointer group'>
							<p className='underline text-link-base mr-4 font-bold'>Find out more</p>
							<ArrowIcon alignment='right' color={Colors.LINK_BASE} className='transition-all group-hover:translate-x-2 duration-300' />
						</div>
					</Link>
				</div>
			</div>
		</Link>
	)
}

export default BlogCard
