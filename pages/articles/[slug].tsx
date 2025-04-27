import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { createRef, LegacyRef, useEffect, useState } from "react";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import ChevronIcon from "../../assets/icons/ChevronIcon";
import Facebook from "../../assets/icons/Facebook";
import Instagram from "../../assets/icons/Instagram";
import LinkedIn from "../../assets/icons/LinkedIn";
import TriangleArrowIcon from "../../assets/icons/TriangleArrowIcon";
import Twitter from "../../assets/icons/Twitter";
import AskOurTeam from "../../components/ask-our-team";
import CTA from "../../components/cta";
import ArticlesList from "../../components/lists/articles-list";
import { Colors } from "../../constants/colors";
import { articlesData } from "../../constants/data/articles";
import { Article } from "../../constants/types";

function Article() {
  const [article, setArticle] = useState<Article>();
  const [currentChapterId, setCurrentChapterId] = useState<string>();
  const router = useRouter();

  const { slug } = router.query;

  useEffect(() => {
    if (slug === undefined) return;
    const article = articlesData.find((article) => article.slug === slug);

    if (article) {
      setArticle(article);
    } else {
      router.push("/articles");
    }
  }, [slug]);

  function renderChapterButtons() {
    return article?.chapters.map((chapter, index) => {
      const isSelected = currentChapterId
        ? currentChapterId === chapter.cssId
        : index === 0;

      return (
        <section
          className={`border-b-[1.5px] border-purple-light py-[0px]`}
          key={index}
          onClick={() => setCurrentChapterId(chapter.cssId)}
        >
          <a
            className={`flex transition-all duration-150 hover:bg-purple-light cursor-pointer items-center
                    py-4 px-4 rounded-md my-6  ${
                      isSelected ? "bg-purple-light" : "bg-white"
                    }`}
            href={`#${chapter.cssId}`}
            key={index}
          >
            <span className="text-[18px] font-bold mr-4">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p>{chapter.title}</p>
          </a>
        </section>
      );
    });
  }

  function renderChapters() {
    return article?.chapters.map((chapter, index) => (
      <section id={chapter.cssId} key={index} className=" mb-6">
        <h3 className="font-bold text-[24px] mb-4">{chapter.title}</h3>
        {chapter.content}
      </section>
    ));
  }

  if (!article) return <section>Loading...</section>;

  return (
    <main>
      <Head>
        <title>{article.name}</title>
        <meta
          name="description"
          content="Looking to get started with Mosafe's safety and compliance platform? Check out our Help Centre for expert guidance on using our software to keep your workplace safe and compliant. From getting started to using our platform to its full potential, we've got you covered."
        ></meta>
        <meta name="keywords" content="Mosafe Help Center, WHS system implementation, Troubleshooting guide, Mosafe User Manual" />
      </Head>
      <section className="grid grid-cols-1 sm:grid-cols-4 mt-10 mosafe-section">
        <section className="mr-7 md:sticky md:top-0 h-min">
          <section className="flex items-center mb-10 cursor-pointer">
            <section
              onClick={() => router.push("/help-centre")}
              className="bg-purple-light p-[0.75rem] rounded-md flex justify-center items-center mr-4"
            >
              <ChevronIcon />
            </section>
            <span className="text-[18px] font-bold">Back to guides</span>
          </section>
          <h1 className="font-extrabold text-[38px]">{article.title}</h1>
          <section className="hidden sm:block">
            {renderChapterButtons()}
          </section>
          <section className="hidden sm:block">
            <p className="font-bold mt-10 mb-2">Share on:</p>
            <section className="flex gap-4 mb-[1rem]">
              <LinkedIn />
              <Instagram />
              <Facebook />
              <Twitter />
            </section>
          </section>
        </section>

        <section className=" col-span-3 sm:ml-7">
          <img src={article.image.src} />
          <h1 className=" hidden sm:inline-block text-[30px] font-bold mt-10 mb-4">
            {article.title}
          </h1>

          <section className="flex items-center mb-8">
            <img className="mr-4" src={article.author.avatar.src} />
            <section className="text-[14px]">
              <p>
                Last updated on{" "}
                <span className="font-bold">
                  {article.updatedAt.toDateString()}
                </span>
              </p>
              <p>
                by {`${article.author.firstName} ${article.author.lastName}`}
              </p>
            </section>
          </section>
          <p className="mb-6">{article.text}</p>

          {renderChapters()}

          <section className=" flex flex-col justify-center items-center border-t-[2px] py-6 border-t-purple-light">
            <p className="font-bold mb-4">
              How helpful was this guide article?
            </p>
            <section className="flex gap-x-6 text-[40px]">
              <p>😕</p>
              <p>😇</p>
              <p>😍</p>
            </section>
          </section>

          <ArticlesList articles={articlesData.slice(0, 3)} />

          <AskOurTeam />
        </section>
      </section>
      <CTA color="#FFF" />
    </main>
  );
}

export default Article;
