import React from "react";
import { useEffect, useRef, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { animedata } from "../Components/JSON/animedata";
import { useMediaQuery } from "react-responsive";
import { AlarmType } from "aws-sdk/clients/cloudwatch";

const AnimeComponent: React.FC = () => {
  const [play, setPlay] = useState<any>(true);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

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
      {!isTabletOrMobile ? (
        <article className="ml-3 mt-3 scrollbar pb-20 w-100  bg-appanime text-left ">
          <div className="  flex flex-row rounded-xl overflow-hidden shadow-lg">
            <div className="animeplayer pr-3 pt-5">
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
            <section className="w-full m-20 p-4 bg-gray-700 backdrop-filter backdrop-blur-md bg-opacity-20 rounded-lg sahdow-lg">
              <div className=" pb-5">
                <h1 className="font-bold text-3xl md:text-3xl lg:text-5xl font-heading text-white">
                  Anime
                </h1>
                <audio autoPlay loop ref={player}>
                  <source src="/NARUTORING.mp3" type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
                <h2 className="text-lg mt-3  font-medium  text-gray-100">
                  Watching Anime is also one of the things that I like to do in
                  my spare time.
                </h2>
              </div>
              <div className="grid grid-cols-1 grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-6">
                {animedata()?.map((anime) => (
                  <div
                    key={anime.title}
                    className="w-full  bg-red-900 backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
                  >
                    <div className="mb-8">
                      <img
                        className="object-center object-cover rounded-full h-36 w-36"
                        src={anime.img}
                        alt="naruto"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xl text-white font-bold mb-2">
                        {anime.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      ) : (
        <article className="scrollbar pb-40 w-100  bg-appanimemob text-left ">
          <div className="  flex flex-row rounded-xl overflow-hidden shadow-lg">
            <div className="animeplayer pr-3 pt-5">
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
            <section className="w-full m-4 p-3 mt-40 bg-gray-700 backdrop-filter backdrop-blur-md bg-opacity-20 rounded-lg sahdow-lg">
              <div className=" pb-5">
                <h1 className="font-bold text-3xl md:text-3xl lg:text-5xl font-heading text-white">
                  Anime
                </h1>
                <audio autoPlay loop ref={player}>
                  <source src="/NARUTORING.mp3" type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
                <h2 className="text-lg mt-3  font-medium  text-gray-100">
                  Watching Anime is also one of the things that I like to do in
                  my spare time.
                </h2>
              </div>
              <div className="grid grid-cols-1 grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-6">
                {animedata()?.map((anime) => (
                  <div
                    key={anime.title}
                    className="w-full  bg-red-900 backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
                  >
                    <div className="mb-8">
                      <img
                        className="object-center object-cover rounded-full h-36 w-36"
                        src={anime.img}
                        alt="naruto"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xl text-white font-bold mb-2">
                        {anime.title}
                      </p>
                      <p className="text-base text-gray-100 font-normal">
                        {anime.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      )}
    </Scrollbars>
  );
};

export default AnimeComponent;
