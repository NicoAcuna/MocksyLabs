import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import ChevronIcon from "../../assets/icons/ChevronIcon";
import Facebook from "../../assets/icons/Facebook";
import Instagram from "../../assets/icons/Instagram";
import LinkedIn from "../../assets/icons/LinkedIn";
import Twitter from "../../assets/icons/Twitter";
import Button from "../../components/core/button";
import CTA from "../../components/cta";
import BlogList from "../../components/lists/blog-list";
import { blogsData } from "../../constants/data/blogs";
import { Blog } from "../../constants/types";

function Blog() {
  const [blog, setBlog] = useState<Blog>();
  const router = useRouter();

  const { slug } = router.query;

  useEffect(() => {
    if (slug === undefined) return;
    const blog = blogsData.find((blog) => blog.slug === "blogs/" + slug);

    if (blog) {
      setBlog(blog);
    } else {
      router.push("/blogs");
    }
  }, [slug]);

  function renderChapters() {
    return blog?.chapters.map((chapter, index) => (
      <section id={chapter.cssId} key={index} className=" mb-6">
        <h3 className="font-bold text-[24px] mb-4">{chapter.title}</h3>
        {chapter.content}
      </section>
    ));
  }

  if (!blog) return <section>Loading...</section>;

  return (
    <main className="mt-10">
      <Head>
        <title>{blog.title}</title>
        <meta
          name="description"
          content="Stay up-to-date with the latest workplace health and safety news, tips, and trends on the Mosafe blog. Discover how our safety and compliance software can protect your business and employees."
        ></meta>
        <meta name="keywords" content="Safety tips, Transport safety, Industry news, Workplace Health and Safety news" />
      </Head>
      <section className="flex flex-col justify-center mosafe-section py-0 pt-6 sm:pt-14">
        <section className="flex items-center mb-4 cursor-pointer">
          <section
            onClick={() => router.push("/blogs")}
            className="bg-purple-light p-[0.75rem] rounded-md flex justify-center items-center mr-4"
          >
            <ChevronIcon />
          </section>
          <span className="text-[18px] font-bold">Back to blogs</span>
        </section>
        <section className="flex sm:flex-row flex-col mditems-center justify-between mb-10">
          <h1 className="font-extrabold text-[38px] leading-10 mb-6 sm:mb-0">
            {blog.name}
          </h1>
          <p>{blog.title}</p>
        </section>
      </section>

      <section className="mosafe-section pt-0">
        <img
          className="rounded-2xl mb-10 object-cover h-[350px] sm:h-auto"
          src={blog.image.src}
        />
      </section>

      <section className="sm:grid sm:grid-cols-5 mosafe-section py-0">
        <section className=" mb-4">
          <p className="font-bold mb-2">Share on:</p>
          <section className="grid md:grid-cols-[80px_80px] grid-cols-[repeat(4,50px)]">
            <LinkedIn />
            <Instagram />
            <Facebook />
            <Twitter />
          </section>
        </section>

        <section className="col-span-3">
          <h3 className="mb-6 text-[30px] font-bold hidden md:visible">
            {blog.name}
          </h3>

          <section className="flex items-center mb-8">
            <img className="mr-4" src={blog.author.avatar.src} />
            <section className="text-[14px]">
              <p>
                Last updated on{" "}
                <span className="font-bold">
                  {blog.updatedAt.toDateString()}
                </span>
              </p>
              <p>by {`${blog.author.firstName} ${blog.author.lastName}`}</p>
            </section>
          </section>

          <p className="mb-8">{blog.text}</p>

          {renderChapters()}

          <section className=" flex flex-col justify-center items-center border-t-[2px] py-6 border-t-purple-light mb-8">
            <p className="font-bold mb-4">How helpful was this blog article?</p>
            <section className="flex gap-x-6 text-[40px]">
              <p>😕</p>
              <p>😇</p>
              <p>😍</p>
            </section>
          </section>
          <section className="flex flex-col-reverse md:flex-col">
            <section className="flex justify-between md:items-center mb-8 md:flex-row flex-col">
              <h3 className="md:text-[30px] text-[24px] mb-4 md:mb-0 font-bold">
                Fancy another read?
              </h3>
              <Button
                onClick={() => router.push("/blogs")}
                text="View all blog articles"
                className="btn-variant-white"
                icon={<ArrowIcon alignment="right" />}
              />
            </section>
            <BlogList blogs={blogsData.slice(0, 3)} />
          </section>
          {/* <section className="bg-purple-light rounded-xl flex flex-col items-center py-8 px-4">
            <p className="font-bold text-[24px] mb-6 text-center">
              Subscribe for more content
            </p>

            <section className="border-[1.5px] w-full bg-white border-grey-light rounded-lg px-2 py-[4px] flex justify-between items-center md:w-2/3">
              <input
                placeholder="Email address"
                className="w-full outline-none"
              />
              <Button
                text="Subscribe"
                className="btn-variant-white rounded-full px-2 py-1"
                onClick={() => null}
              />
            </section>
          </section> */}
        </section>
      </section>

      <CTA />
    </main>
  );
}

export default Blog;
