import { Scrollbars } from "react-custom-scrollbars";
import Image from "next/legacy/image";
import { useMediaQuery } from "react-responsive";
import Zoom from "react-medium-image-zoom";

const ProjectDetails: React.FC<any> = ({ projectDetails, altt }: any) => {
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  return !isTabletOrMobile ? (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <div>
        <div
          style={{
            position: "relative",
            width: "100%",
            borderRadius: "1em",
            height: "50vh",
            backgroundImage: `url(${projectDetails.banner})`,
            paddingBottom: "35%",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="  pb-6 maincontainerprofileprojects w-full">
          <div className="mx-auto boxprojectdetails shadow-lg sm:px-6 lg:px-8">
            <div className="overflow-hidden  shadow-xl dark:bg-gray-800 rounded-xl sm:rounded-lg">
              <div>
                <div className="p-6 bg-gray-900  dark:bg-gray-800 sm:px-20">
                  <Image
                    className="h-10 w-10 inline-block rounded-lg"
                    src={projectDetails.logo}
                    alt={altt}
                    width="85"
                    height="85"
                  />
                  {projectDetails.github && (
                    <div
                      className="float-right inline-block"
                      style={{ marginRight: "-55px" }}
                    >
                      <a
                        href={projectDetails.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="h-14 w-14 border-2 border-blue-400 rounded-full"
                          src="https://img.icons8.com/fluency/144/000000/github.png"
                          alt="Github"
                          width={45}
                          height={45}
                        />
                      </a>
                    </div>
                  )}
                  {projectDetails.link && (
                    <div
                      className="float-right butto pr-4 inline-block pt-3 text-xl font-bold text-blue-400"
                      style={{ marginRight: "-55px" }}
                    >
                      <a
                        href="https://ayedot.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {projectDetails.link}
                      </a>
                    </div>
                  )}
                  <div className="mt-5 text-2xl dark:text-gray-200">
                    <span className="font-bold">{projectDetails.name}</span> -{" "}
                    {projectDetails.title}
                  </div>
                  <div className="mt-6 text-gray-400 text-md dark:text-gray-400">
                    {projectDetails.description}
                  </div>
                  <div className="mt-6 text-gray-400 font-semibold text-md dark:text-gray-400">
                    Key Features
                  </div>
                  <ul className="mt-2 text-gray-400 list-disc  text-md dark:text-gray-400">
                    {projectDetails?.features.map((feature: string) => (
                      <li key={feature + `${isTabletOrMobile && "sadasd"}`}>
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 text-gray-400 font-semibold text-md dark:text-gray-400">
                    Technologies Used
                  </div>
                  <div className="pt-1">
                    {projectDetails?.skills.map((skill: string) => (
                      <div
                        key={skill + `${isTabletOrMobile && "sadasd"}`}
                        className="text-xs inline-flex mt-2 items-center font-bold leading-sm  p-1 pl-2 pr-2 mr-2 bg-blue-100 text-gray-700 rounded-full"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" pl-5 pr-5 mt-3 ml-5 mr-5 mb-3">
            <div className="mt-6 pb-2 text-gray-400 font-semibold text-2xl dark:text-gray-400">
              Snapshots
            </div>
            <div className="w-full mt-2 mb-5 pb-5 grid grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 ">
              {projectDetails?.snapshots.map((shot: string, index: any) => (
                <div
                  className="mr-3 mb-3"
                  key={altt + `${isTabletOrMobile && "scren"} ${index}`}
                >
                  <Zoom zoomMargin={100}>
                    <Image
                      className="text-center rounded-xl "
                      src={shot}
                      alt={altt}
                      width="3000"
                      height={projectDetails.height}
                      objectPosition="center"
                    />
                  </Zoom>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-3xl pl-3 pt-2 pb-1 text-indigo-500 font-semibold tracking-wide uppercase">
            Other Projects
          </h2>
          <p className=" font-medium pl-3 pb-2 text-gray-400 text-sm pt-1 w-4/5 ">
            Based to the current project you are watching.
          </p>
          <div className="w-full mt-5 mb-5 pb-5  grid grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
            {projectDetails?.others.map((project: any) => (
              <div
                key={project.thumbnail + `${isTabletOrMobile && "aa"}`}
                className="mb-4 p-3"
              >
                <div className="w-full rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                  <a href={project.link}>
                    <div>
                      <div className="pr-3 pl-3">
                        <Image
                          className="rounded-xl"
                          src={project.thumbnail}
                          alt={project.title}
                          width="500"
                          height="270"
                        />
                      </div>
                      <div className="flex justify-between pr-3 pt-2 pl-3 pb-2">
                        <div className="flex items-center space-x-4">
                          <Image
                            className="h-10 w-10 rounded-full"
                            src={project.logo}
                            alt={project.title}
                            width="55"
                            height="55"
                          />
                          <h1 className="text-lg text-gray-100 font-bold">
                            {project.title}
                            <p className=" font-medium text-gray-400 text-sm pt-1 w-4/5 ">
                              {project.description}
                            </p>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
    </Scrollbars>
  ) : (
    <div className=" pb-40 mb-40  w-full">
      <div
        style={{
          position: "relative",
          width: "100%",
          borderRadius: "1em",
          height: "50vh",
          backgroundImage: `url(${projectDetails.banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className=" ml-2 mr-2 mt-2 shadow-lg ">
        <div className="overflow-hidden  shadow-xl dark:bg-gray-800 rounded-xl sm:rounded-lg">
          <div>
            <div className="p-3 bg-gray-900  dark:bg-gray-800 sm:px-20">
              <Image
                className="h-10 w-10 inline-block rounded-lg"
                src={projectDetails.logo}
                alt={altt}
                width="65"
                height="65"
              />
              {projectDetails.github && (
                <div className="float-right mt-1 inline-block">
                  <a
                    href={projectDetails.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="h-7 w-7 border-2 border-blue-400 rounded-full"
                      src="https://img.icons8.com/fluency/144/000000/github.png"
                      alt="Github"
                      height={45}
                      width={45}
                    />
                  </a>
                </div>
              )}
              {projectDetails.link && (
                <div className="float-right butto pr-4 inline-block pt-3 text-md font-bold text-blue-400">
                  <a href="https://ayedot.com" target="_blank" rel="noreferrer">
                    {projectDetails.link}
                  </a>
                </div>
              )}
              <div className="mt-5 text-xl dark:text-gray-200">
                <span className="font-bold">{projectDetails.name}</span> -{" "}
                {projectDetails.title}
              </div>
              <div className="mt-6 text-gray-400 text-sm font-medium dark:text-gray-400">
                {projectDetails.description}
              </div>
              <div className="mt-6 text-gray-400 font-semibold text-md dark:text-gray-400">
                Key Features
              </div>
              <ul className="mt-2 text-gray-400 list-disc  text-sm dark:text-gray-400">
                {projectDetails?.features.map((feature: string) => (
                  <li
                    className="pb-2"
                    key={feature + `${isTabletOrMobile && "moba"}`}
                  >
                    • {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-gray-400 font-semibold text-md dark:text-gray-400">
                Technologies Used
              </div>
              <div className="pt-1">
                {projectDetails?.skills.map((skill: string) => (
                  <div
                    key={skill + `${isTabletOrMobile && "moba"}`}
                    className="text-xs inline-flex mt-2 items-center font-bold leading-sm  p-1 pl-2 pr-2 mr-2 bg-blue-100 text-gray-700 rounded-full"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  mt-3 pl-2 pr-2  mb-36 pb-20">
        <div className="mt-6 pb-2 text-gray-400 font-semibold text-xl dark:text-gray-400">
          Snapshots
        </div>
        <div className="w-full mt-2 mb-5 pb-5 grid grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 ">
          {projectDetails.snapshots.map((shot: string) => (
            <div
              key={shot + `${isTabletOrMobile && "moba"}`}
              className="mr-3 mb-3"
            >
              <Zoom zoomMargin={100}>
                <Image
                  className="text-center rounded-xl "
                  src={shot}
                  alt={altt}
                  width="3000"
                  height={projectDetails.height}
                  objectPosition="center"
                />
              </Zoom>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
