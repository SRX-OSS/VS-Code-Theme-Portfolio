import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars";
import { useMediaQuery } from "react-responsive";
import { blogsdata } from "../Components/JSON/BlogsData";
import Head from "next/head";

const Blogs: NextPage = (props: any) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Blogs </title>
        <meta name="description" content={`Blogs`} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Blogs"} />
        <meta name="description" content={`Blogs`} />
        <link rel="canonical" href={"https://www.rajsavaliya.com"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://www.rajsavaliya.com"} />
        <meta property="og:site_name" content="Your Name" />
        <meta property="og:image" content="/mainthumbnail.PNG" />
        <meta property="og:image:width" content="1040" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:widgets:csp" content="on" />
      </Head>
      {!isTabletOrMobile ? (
        <article className="pl-7  pb-40 mb-16 pt-6 scrollbar text-left ">
          <div className="md:flex md:mr-0 ">
            <div className="md:flex items-cente text0 ">
              <h1 className="lg:text-5xl text-indigo-500 font-bold leading-tight text-3xl">
                Blogs
              </h1>
            </div>
          </div>
          <div className="pt-3 text-gray-300 font-medium dark:text-gray-400">
            Blogs Written by me, Collaborated Blogs and some of my favorite and
            interesting blogs written by others.
          </div>
          <section className="pr-5  mt-7 mb-12">
            <article>
              <section className="mt-6 grid grid-cols-1s xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1  gap-x-6 gap-y-8">
                {props?.blogs?.map((blog: any) => (
                  <a
                    key={blog.title}
                    href={blog.link}
                    className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="relative w-full ">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-center object-cover"
                        style={{ height: "12vw" }}
                      />
                    </div>
                    <div className="px-3 py-4">
                      <h3 className="text-sm text-gray-500 pb-2">
                        <span className="bg-gray-900 py-1 px-2 text-white rounded-lg">
                          <span className="absolute inset-0"></span>
                          {blog.tag}
                        </span>
                      </h3>
                      <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                        {blog.title}
                      </p>
                    </div>
                  </a>
                ))}
              </section>
            </article>
          </section>
        </article>
      ) : (
        <article className=" p-2 pl-3  pb-40  scrollbar text-left ">
          <div className=" items-cente text0 ">
            <h1 className="lg:text-5xl text-indigo-500 font-bold leading-tight text-3xl">
              Blogs
            </h1>
          </div>
          <div className="pt-3 text-gray-300 font-medium text-sm dark:text-gray-400">
            Blogs Written by me, Collaborated Blogs and some of my favorite and
            interesting blogs written by others.
          </div>
          <section className=" mt-2 mb-12">
            <article>
              <section className="mt-6 grid grid-1">
                {props?.blogs?.map((blog: any) => (
                  <a
                    key={blog.title}
                    href={blog.link}
                    className="bg-white mb-5   rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className=" w-full">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="object-center object-cover"
                        width="100%"
                        style={{ height: "35vw" }}
                      />
                    </div>
                    <div className="px-3 py-4">
                      <h3 className="text-sm text-gray-500 pb-2">
                        <span className="bg-gray-900 py-1 px-2 text-white rounded-lg">
                          <span className="absolute inset-0"></span>
                          {blog.tag}
                        </span>
                      </h3>
                      <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                        {blog.title}
                      </p>
                    </div>
                  </a>
                ))}
              </section>
            </article>
          </section>
        </article>
      )}
    </Scrollbars>
  );
};

export function getStaticProps() {
  const blogs = blogsdata();
  return {
    props: {
      blogs: blogs,
    },
  };
}

export default Blogs;
