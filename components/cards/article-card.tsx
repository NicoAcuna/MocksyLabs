

import Link from 'next/link'
import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { Colors } from '../../constants/colors'
import { Article } from '../../constants/types'

type Props = {
    article: Article
}

function ArticleCard({ article }: Props) {


  return (
    <div className=" ">

        <img 
        className=""
        src={article.image.src}
        />
        <div>
        <p className='font-semibold text-[18px] my-2'>{article.title}</p>
        <p className="line-clamp-2">{article.text}</p>
        
        <Link href={`/articles/${article.slug}`}>
            <div className='flex items-center my-8 cursor-pointer group'>
            <p className='underline text-link-base mr-4 font-bold'>Find out more</p>
            <ArrowIcon 
            alignment='right'
            color={Colors.LINK_BASE}
            className='transition-all group-hover:translate-x-2 duration-300' 
            />
            </div>
        </Link>
      </div>
    </div>
  )
}


export default ArticleCard