import { useRouter } from "next/router";
import { projectsdata } from "../../Components/JSON/projectsdata";
import ProjectDetails from "../../Components/ProjectDetails";
import Head from "next/head";

const Projectdetails = (props: any) => {
  const router: any = useRouter();
  const projectDetails = props.projects[parseInt(router.query.projectname) - 1];
  const altt = projectDetails?.name + " - " + projectDetails?.title;
  return (
    <>
      <Head>
        <title>Project's Detail </title>
        <meta name="description" content={`Details of Projects developed.`} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Project's Detail "} />
        <meta name="description" content={`Details of Projects developed.`} />
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
      <ProjectDetails projectDetails={projectDetails} altt={altt} />
    </>
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { projectname: "1" } },
      { params: { projectname: "2" } },
      { params: { projectname: "3" } },
      { params: { projectname: "4" } },
      { params: { projectname: "5" } },
      { params: { projectname: "6" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export default Projectdetails;
