import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/legacy/image";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";

const MyWork: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <div>
        <Head>
          <title>Professional Experience</title>
          <meta name="description" content={`Professional Experience`} />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content={"Professional Experience"} />
          <meta name="description" content={`Professional Experience`} />
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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="twitter:widgets:csp" content="on" />
        </Head>
        {!isTabletOrMobile ? (
          <div className="p-3  pl-5 pb-60 text-center ">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block lg:text-5xl  font-bold leading-tight text-3xl text-white">
                Work
              </span>
              <span className="block pt-3 text-indigo-500 text-2xl">
                Industry Experience
              </span>
            </h2>
            <div className="pt-3 w-full timeline">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "linear-gradient(to right, #4A00E0, #8E2DE2)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #4A00E0",
                  }}
                  date="Aug 2021 - present"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"/velotio.jpg"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      alt="velotio"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Software Development Engineer I
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Your Company, IN
                  </h4>
                  <div className="text-left">
                    <p>• Work experience Points</p>
                    <p>
                      • Tech Stack: JavaScript, TypeScript, React, Node.js,
                      Redux, SASS, LESS, Bootstrap, Jest, HTML5, CSS3
                    </p>
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "linear-gradient(to right, #4A00E0, #8E2DE2)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #4A00E0",
                  }}
                  date="Dec 2020 - Aug 2021"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"/hha.png"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      alt="velotio"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Software Development Engineer I
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Your Company 2, IN
                  </h4>
                  <div className="text-left">
                    <p>• Work experience Points</p>
                    <p>
                      • Tech Stack: JavaScript, TypeScript, React, Node.js,
                      Redux, SASS, LESS, Bootstrap, Jest, HTML5, CSS3
                    </p>
                  </div>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        ) : (
          <div className=" pt-5 text-center ">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block lg:text-5xl  font-bold leading-tight text-3xl text-white">
                Work
              </span>
              <span className="block pt-3 text-indigo-500 text-2xl">
                Industry Experience
              </span>
            </h2>
            <div className="pt-3 h-full pb-60 w-full">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "linear-gradient(to right, #4A00E0, #8E2DE2)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #4A00E0",
                  }}
                  date="Aug 2021 - present"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"/velotio.jpg"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      alt="velotio"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Software Development Engineer I
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Your Company, IN
                  </h4>
                  <div className="text-left">
                    <p>• Work experience Points</p>
                    <p>
                      • Tech Stack: JavaScript, TypeScript, React, Node.js,
                      Redux, SASS, LESS, Bootstrap, Jest, HTML5, CSS3
                    </p>
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "linear-gradient(to right, #4A00E0, #8E2DE2)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #4A00E0",
                  }}
                  date="Dec 2020 - Aug 2021"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"/hha.png"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      alt="velotio"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Software Development Engineer I
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Your Company 2, IN
                  </h4>
                  <div className="text-left">
                    <p>• Work experience Points</p>
                    <p>
                      • Tech Stack: JavaScript, TypeScript, React, Node.js,
                      Redux, SASS, LESS, Bootstrap, Jest, HTML5, CSS3
                    </p>
                  </div>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        )}
      </div>
    </Scrollbars>
  );
};

export default MyWork;
