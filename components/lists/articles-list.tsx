

import React from 'react'
import { Article } from '../../constants/types'
import ArticleCard from '../cards/article-card'

type Props = {
    articles: Array<Article>
}

function ArticlesList({ articles }: Props) {

    function renderArticleCards(){
        return articles.map((article, index) => (
            <ArticleCard 
            article={article}
            key={index}
            />
        ))
    }


    return (
        <div className="flex flex-col sm:flex-row sm:justify-between gap-x-10">
            { renderArticleCards() }

        </div>
    )
}

export default ArticlesList