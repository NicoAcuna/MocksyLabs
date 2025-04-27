import React from 'react'
import HelpCentreImage2 from '../../assets/images/help-centre-2.png'
import ArticleLinkList from '../../components/lists/article-link-list'
import { articleCategoriesData } from '../../constants/data/article-categories'


function UserGuides() {

    function renderArticleLists() {
        return articleCategoriesData.map((articleCategory, index) => <ArticleLinkList key={index} category={articleCategory} />)
    }

    return (
        <div className="mb-16 mt-12 md:mt-0">
            <div className="sm:flex md:grid md:grid-cols-3 mb-20">
                <div className="md:col-span-1">
                    <p className="text-purple-base font-bold text-[18px]">User Guides</p>
                    <h3 className="font-extrabold text-[32px] mb-4 max-w-[280px]"> Get Mosafe up and running in no time!</h3>
                </div>
                <img
                    className="rounded-2xl md:col-span-2 h-[300px] object-cover"
                    src={HelpCentreImage2.src}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {renderArticleLists()}
            </div>
            
        </div>
    )
}

export default UserGuides