import { NextPage } from "next";
import React, { useEffect } from "react";
import { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";

const Gaming: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });
  const [play, setPlay] = useState<any>(true);

  const player: any = React.createRef();

  useEffect(() => {
    if (player.current) {
      player.current.play();
    }
  }, []);

  const managePlayer = (play: any) => {
    if (player.current) {
      if (play) {
        player.current.play();
      } else {
        player.current.pause();
      }
    }
    setPlay(play);
  };

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Gaming </title>
        <meta
          name="description"
          content={` Playing Games is one of the activities i like to do in my
                    spare time`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Gaming"} />
        <meta
          name="description"
          content={` Playing Games is one of the activities i like to do in my
                    spare time`}
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
      {!isTabletOrMobile ? (
        <article className="ml-3 pb-40 scrollbar text-left bg-app bg-center bg-no-repeat bg-cover ">
          <section className="pr-5  pt-10">
            <div className="animeplayer pr-3 pt-3">
              {play ? (
                <img
                  src="https://img.icons8.com/flat-round/64/000000/pause--v1.png"
                  width="40"
                  height="40"
                  className=" cursor-pointer"
                  onClick={() => managePlayer(false)}
                />
              ) : (
                <img
                  src="https://img.icons8.com/flat-round/64/000000/play--v1.png"
                  width="40"
                  height="40"
                  className=" cursor-pointer"
                  onClick={() => managePlayer(true)}
                />
              )}
            </div>
            <audio autoPlay loop ref={player}>
              <source src="/valorantring.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <div className="flex flex-row justify-center items-center rounded-lg ">
              <main className="flex flex-col lg:flex-row  backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
                <div className="flex-1 p-4 lg:p-6">
                  <div className="text-lg text-white mb-4 flex items-center">
                    <div className="md:flex items-cente text0 ">
                      <h1 className="lg:text-5xl text-indigo-100 font-bold leading-tight text-3xl">
                        Gaming
                      </h1>
                    </div>
                  </div>
                  <div className="pb-4 text-gray-200 font-small dark:text-gray-400">
                    {" "}
                    Playing Games is one of the activities i like to do in my
                    spare time. At present, I play below listed games in my
                    spare time. You can reach out to me if you want to play as a
                    team.
                  </div>{" "}
                  <div className="grid  gap-4 grid-cols-1s xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <img
                          src="https://64.media.tumblr.com/8ba7ad1ceb0b13c21a97e1644797883f/530ffdf8632abbf3-3f/s500x750/9119bdb64f35ea668304704dd5027cb6292180e7.gifv"
                          width="100%"
                          className="rounded-lg h-50"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Valorant
                      </div>
                      <div className="text-white font-normal">
                        Valorant is a free-to-play first-person hero shooter
                        developed and published by Riot Games.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <img
                          src="https://i.pinimg.com/originals/0d/92/28/0d9228d6eb69ab0c57d53fee1d5a4879.gif"
                          width="100%"
                          className="rounded-lg h-50"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Genshin Impact
                      </div>
                      <div className="text-white font-normal">
                        Genshin Impact is an action role-playing game
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <img
                          src="https://media4.giphy.com/media/VgvLyXeQ35gGhzmcVG/giphy-downsized-large.gif"
                          width="100%"
                          className="rounded-lg h-50"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Forza Horizon 5
                      </div>
                      <div className="text-white font-normal">
                        Forza Horizon 5 is a racing video game developed by
                        Playground Games.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <img
                          src="https://64.media.tumblr.com/e5c073740257c795f8f1519178ddca3c/4df32908d32a5a41-f0/s540x810/91e1ba687932228b6138d29ef917e1cb259be7a7.gifv"
                          width="100%"
                          className="rounded-lg h-50"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Pokemon Unite
                      </div>
                      <div className="text-white font-normal">
                        Pokémon Unite is a free-to-play, multiplayer online
                        battle arena video game.
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </section>
        </article>
      ) : (
        <article className="scrollbar pb-40 text-left bg-app bg-center bg-no-repeat bg-cover ">
          <section className="  pt-10">
            <div className="animeplayer pr-3 pt-3">
              {play ? (
                <img
                  src="https://img.icons8.com/flat-round/64/000000/pause--v1.png"
                  width="40"
                  height="40"
                  className=" cursor-pointer"
                  onClick={() => managePlayer(false)}
                />
              ) : (
                <img
                  src="https://img.icons8.com/flat-round/64/000000/play--v1.png"
                  width="40"
                  height="40"
                  className=" cursor-pointer"
                  onClick={() => managePlayer(true)}
                />
              )}
            </div>
            <audio autoPlay loop ref={player}>
              <source src="/valorantring.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <div className="flex flex-row justify-center items-center rounded-lg ">
              <main className="flex flex-col lg:flex-row  backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl mr-1 ml-1 mt-5 overflow-hidden w-full ">
                <div className="flex-1 p-3">
                  <div className="text-lg text-white mb-4 flex items-center">
                    <div className="md:flex items-cente text0 ">
                      <h1 className="lg:text-5xl text-indigo-100 font-bold leading-tight text-3xl">
                        Gaming
                      </h1>
                    </div>
                  </div>
                  <div className="pb-4 text-gray-200 font-small dark:text-gray-400">
                    {" "}
                    Playing Games is one of the activities i like to do in my
                    spare time. At present, I play below listed games in my
                    spare time. You can reach out to me if you want to play as a
                    team.
                  </div>{" "}
                  <div className="grid  gap-4 grid-cols-1s xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <img
                          src="https://preview.redd.it/pfts18ct1vi61.jpg?width=4096&format=pjpg&auto=webp&s=91151c92c90e3641eb43bb6f5dba3e795ef8f397"
                          width="100%"
                          className="rounded-lg h-50"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Valorant
                      </div>
                      <div className="text-white font-normal">
                        Valorant is a free-to-play first-person hero shooter
                        developed and published by Riot Games.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <img
                          src="https://sensortower-itunes.s3.amazonaws.com/blog/2020/10/genshin-impact-first-week-revenue-header.jpg"
                          width="100%"
                          className="rounded-lg h-50"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Genshin Impact
                      </div>
                      <div className="text-white font-normal">
                        Genshin Impact is an action role-playing game
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <img
                          src="https://media4.giphy.com/media/VgvLyXeQ35gGhzmcVG/giphy-downsized-large.gif"
                          width="100%"
                          className="rounded-lg h-50"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Forza Horizon 5
                      </div>
                      <div className="text-white font-normal">
                        Forza Horizon 5 is a racing video game developed by
                        Playground Games.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <img
                          src="https://pbs.twimg.com/media/E6tR0L9VUAIKt9R.jpg:large"
                          width="100%"
                          className="rounded-lg h-50"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Pokemon Unite
                      </div>
                      <div className="text-white font-normal">
                        Pokémon Unite is a free-to-play, multiplayer online
                        battle arena video game.
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </section>
        </article>
      )}
    </Scrollbars>
  );
};

export default Gaming;
