import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [index, setIndex] = useState(0);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });
  const router = useRouter();

  const recentLinks = useMemo(() => {
    if (typeof window !== "undefined") {
      let recentLinksVals: any = localStorage.getItem("history");
      recentLinksVals = recentLinksVals ? JSON.parse(recentLinksVals) : [];
      return recentLinksVals;
    }
    return [];
  }, [router.pathname]);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <Head>
        <title>Your Name | Software Development Engineer</title>
        <meta
          name="description"
          content={`VS code style developer portfolio`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content={
            "Your Name - Software Development Engineer &amp; Product Developer"
          }
        />
        <meta
          name="description"
          content={`VS code style developer portfolio`}
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
      <main className="w-full  containerCenterImage">
        <div className="container vscodecontainer mx-auto max-w-5xl w-full p-6 mb:p-12">
          <div className="flex flex-col mt-1 md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0 ">
              <div className="p-2">
                <h2 className="text-5xl font-sans	 mb-2 ">Your Name</h2>
                <h3 className="text-2xl font-sans	 text-gray-500 pt-1 mb-2">
                  Software Development Engineer
                </h3>

                <p className="text-xl text-gray-300 pt-5 mb-4">Start</p>
                <Link passHref href="/Skills">
                  <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                    Skills {"..."}
                  </p>
                </Link>
                <Link passHref href="/Projects">
                  <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                      />
                    </svg>
                    Projects {"..."}
                  </p>
                </Link>
                <Link passHref href="/Email">
                  <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                    Get in Touch {"..."}
                  </p>
                </Link>
                <Link passHref href="/Hobbies">
                  <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                      />
                    </svg>
                    Hobbies {"..."}
                  </p>
                </Link>

                <p className="text-xl text-gray-300 pt-6 mb-2 ">Recent</p>
                {recentLinks?.length < 1 ? (
                  <p className="text-sm font-sans pt-1	 text-gray-500">
                    No recent activity!
                  </p>
                ) : (
                  <div className="pt-1">
                    {recentLinks?.map((item: any, index: number) => (
                      <Link passHref href={item} key={`link-recent-${index}`}>
                        <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center">
                          {item?.slice(1)}{" "}
                          <p className="text-gray-300 pl-2 text-sm ">
                            E:/RajSavaliya{item}
                          </p>
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className=" flex-1">
              <div
                className="p-2 "
                style={{ paddingTop: isTabletOrMobile ? "5%" : "22%" }}
              >
                <p className="text-xl text-gray-300 pt-6 mb-1 ">About</p>
                <div className="pt-1">
                  <Link
                    passHref
                    target="_blank"
                    href="https://www.linkedin.com/in/savaliya-raj"
                  >
                    <div
                      className="cursor-pointer w-full flex justify-start items-center pl-2 pr-2 p-1 
                        rounded-sm gap-2 border-b  border-blue-500 "
                      style={{
                        backgroundColor: "#262626",
                        borderBottomWidth: "0.3rem",
                      }}
                    >
                      <img src="https://img.icons8.com/fluency/30/null/linkedin-circled.png" />
                      <p className="text-gray-200 text-sm  font-sans flex justify-start items-center">
                        LinkedIn Profile
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="mt-4">
                  <Link passHref target="_blank" href="https://github.com/SRX9">
                    <div
                      className="cursor-pointer w-full flex justify-start items-center pl-2 pr-2 p-1 
                        rounded-sm gap-2 border-b  border-blue-500 "
                      style={{
                        backgroundColor: "#262626",
                        borderBottomWidth: "0.3rem",
                      }}
                    >
                      <img src="https://img.icons8.com/3d-fluency/28/null/github.png" />{" "}
                      <p className="text-gray-200 text-sm  font-sans flex justify-start items-center">
                        Github Page
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="mt-4">
                  <Link
                    passHref
                    target="_blank"
                    href="https://twitter.com/s_r_x_9"
                  >
                    <div
                      className="cursor-pointer w-full flex justify-start items-center pl-2 pr-2 p-1 
                        rounded-sm gap-2 border-b  border-blue-500 "
                      style={{
                        backgroundColor: "#262626",
                        borderBottomWidth: "0.3rem",
                      }}
                    >
                      <img src="https://img.icons8.com/color/28/null/twitter--v1.png" />{" "}
                      <p className="text-gray-200 text-sm  font-sans flex justify-start items-center">
                        Twitter Handle
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="mt-4">
                  <div
                    className="w-full flex justify-start items-center pl-2 pr-2 p-1 
                        rounded-sm gap-2 border-b  border-blue-500 "
                    style={{
                      backgroundColor: "#262626",
                      borderBottomWidth: "0.3rem",
                    }}
                  >
                    <img src="https://img.icons8.com/color/28/null/javascript--v1.png" />{" "}
                    <p className="text-gray-200 text-sm  font-sans flex justify-start items-center">
                      Full Stack Engineer
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div
                    className="w-full flex justify-start items-center pl-2 pr-2 p-1 
                        rounded-sm gap-2 border-b  border-blue-500 "
                    style={{
                      backgroundColor: "#262626",
                      borderBottomWidth: "0.3rem",
                    }}
                  >
                    <img
                      src="https://img.icons8.com/ios-filled/20/ffffff/learn-more.png"
                      className="ml-1 mr-1"
                    />{" "}
                    <p className="text-gray-200 text-sm  font-sans flex justify-start items-center">
                      Constant Learner
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div
                    className="w-full flex justify-start items-center pl-2 pr-2 p-1 
                        rounded-sm gap-2 border-b  border-blue-500 "
                    style={{
                      backgroundColor: "#262626",
                      borderBottomWidth: "0.3rem",
                    }}
                  >
                    <img src="https://img.icons8.com/external-victoruler-flat-victoruler/26/null/external-farming-farming-victoruler-flat-victoruler.png" />
                    <p className="text-gray-200 text-sm  font-sans flex justify-start items-center">
                      Retirement Plan Farming
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
