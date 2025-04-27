import React, { useState } from 'react'
import { blogCategoriesData } from '../../constants/data/blog-categories'
import { blogsData } from '../../constants/data/blogs'
import { Blog, BlogCategory } from '../../constants/types'
import BlogCard from '../cards/blog-card'

type Props = {
	blogs: Array<Blog>
}

function BlogList({ blogs }: Props) {
	function renderBlogCards() {
		return blogs.map((blog, index) => <BlogCard blog={blog} key={index} />)
	}

	return <div className='card-list w-full sm:gap-8 sm:justify-evenly'>{renderBlogCards()}</div>
}

export default BlogList
