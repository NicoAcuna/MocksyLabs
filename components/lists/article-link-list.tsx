import Link from "next/link";
import React, { useState } from "react";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { Colors } from "../../constants/colors";
import { articlesData } from "../../constants/data/articles";
import { ArticleCategory } from "../../constants/types";

type Props = {
  category: ArticleCategory;
};

function ArticleLinkList({ category }: Props) {
  const [isShowingMore, setIsShowingMore] = useState(false);

  const articles = articlesData.filter(
    (article) => article.category === category
  );

  function renderArticleLinks() {
    const shownArticles = isShowingMore ? articles : articles.slice(0, 6);
    const content = shownArticles.map((article, index) => {
      return (
        <Link href={`/articles/${article.slug}`} key={index}>
          <div className="flex items-center my-8 cursor-pointer group">
            <p className="underline mr-4 font-bold">{article.title}</p>
            <ArrowIcon
              alignment="right"
              className="transition-all group-hover:translate-x-2 duration-300"
            />
          </div>
        </Link>
      );
    });
    if (articles.length <= 6) return content;
    content.push(
      <div
        onClick={() => setIsShowingMore(!isShowingMore)}
        className=" text-link-base font-bold cursor-pointer "
      >
        {isShowingMore ? "Show less" : "Show more"}
      </div>
    );
    return content;
  }

  return (
    <div>
      <p className="text-[20px] text-purple-base font-bold mt-6">{category}</p>
      {renderArticleLinks()}
    </div>
  );
}

export default ArticleLinkList;
