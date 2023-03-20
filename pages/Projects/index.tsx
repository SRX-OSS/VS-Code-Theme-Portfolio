import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars";
import Image from "next/legacy/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { projectsdata } from "../../Components/JSON/projectsdata";
import Head from "next/head";

const Projects: NextPage = (props: any) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content={`Visual Studio Code style Developer Portfolio.`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Projects - College | Side"} />
        <meta
          name="description"
          content={`Visual Studio Code style Developer Portfolio.`}
        />
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
      <div className=" mt-2 w-full p-2 ml-1 text-left">
        <h2 className="lg:text-5xl pl-5 pb-2 font-bold leading-tight text-indigo-500 text-3xl ">
          Projects
        </h2>
        <p className=" font-medium pl-5 pb-2 text-gray-400 text-md pt-1 w-4/5 ">
          College and Side Projects for practice.
        </p>
        {!isTabletOrMobile ? (
          <div className="w-full mt-3 mb-5 pb-5 grid grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
            {props?.projects?.map((obj: any, index: number) => (
              <div className="mb-4 p-3">
                <div className="w-full rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                  <Link href={`/Projects/${index + 1}`}>
                    <div>
                      <div className="pr-3 pl-3">
                        <Image
                          className="rounded-xl"
                          src={index === 0 ? "/ayethumb.jpg" : obj.banner}
                          alt="Ayedot - Short Blogging Platform logo"
                          width="500"
                          height="270"
                        />
                      </div>
                      <div className="flex justify-between pr-3 pt-2 pl-3 pb-2">
                        <div className="flex items-center space-x-4">
                          <Image
                            className="h-10 w-10 rounded-full"
                            src={obj.logo}
                            alt="Ayedot - Short Blogging Platform logo"
                            width="35"
                            height="35"
                          />
                          <h1 className="text-lg text-gray-100 font-bold">
                            {obj.name}
                            <p className=" font-medium text-gray-400 text-sm pt-1 w-4/5 ">
                              {obj.title}
                            </p>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full mt-3 pb-60 grid grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
            {props?.projects?.map((obj: any, index: number) => (
              <div className="mb-5 " key={index + 125}>
                <div className="w-full rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                  <Link href={`/Projects/${index + 1}`}>
                    <div>
                      <div className="">
                        <Image
                          className="rounded-xl"
                          src={index === 0 ? "/ayethumb.jpg" : obj.banner}
                          alt="Ayedot - Short Blogging Platform logo"
                          width="500"
                          height="270"
                        />
                      </div>
                      <div className="flex justify-between pr-3 pt-1 pl-3 pb-2">
                        <div className="flex items-center space-x-4">
                          <Image
                            className="h-10 w-10 rounded-full"
                            src={obj.logo}
                            alt="Ayedot - Short Blogging Platform logo"
                            width="45"
                            height="45"
                          />
                          <h1 className="text-lg text-gray-100 font-bold">
                            {obj.name}
                            <p className=" font-medium text-gray-400 text-sm pt-1  ">
                              {obj.title}
                            </p>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Scrollbars>
  );
};

export function getStaticProps() {
  const projects = projectsdata();
  return {
    props: {
      projects: projects,
    },
  };
}

export default Projects;
