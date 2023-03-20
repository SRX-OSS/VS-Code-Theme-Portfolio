// Replace below project details with your project details. Add all your projects details here as per below object structure, and it will populate it in projects sections.
export const projectsdata = () => [
  {
    title: "Project Title",
    name: "Project Name",
    banner: "/xporthumb.png",
    skills: [
      "JavaScript",
      "Node.js",
      "React.js",
      "Express",
      "MongoDB",
      "Bootsrap",
      "CSS3",
    ],
    description: `An Online Service to easily Share large or small files of any format, with anyone around the world. `,
    //(Optional) Live link of your project, if hosted
    link: null,
    github: "https://github.com/SRX9/Xport---OOSE-Project",
    // Logo Image of your project
    logo: "/xportlogo.jpg",
    features: [
      "Upload and share any file of size upto 1GB of any format like text file, images, videos, application, pdf, excel, ppt and more.",
      "Other important sections like User Profile, Tracking of number of files shared, amount of data transported, authentication and more.",
    ],
    // Screenshots of your project
    snapshots: [
      "/xport/Send1-min.png",
      "/xport/send2-min.png",
      "/xport/send3-min.png",
      "/xport/Recieve-min.png",
      "/xport/User profile-min.png",
      "/xport/login-min.png",
      "/xport/register-min.png",
      "/xport/edit account-min.png",
      "/xport/delete-min.png",
    ],
    height: 1900,
    others: [
      {
        link: "/Projects/5",
        thumbnail: "/shortthumb.jpg",
        logo: "/shortlogo.jpg",
        title: "Shortlit - Resume Shortlisting Service",
        description: `Resume Shortlisting Service to find the best fit for
                          the job.`,
      },
      {
        link: "/Projects/4",
        thumbnail: "/firflowthumb.jpg",
        logo: "/firelogo.jpg",
        title: "fireflow - Anonymous Chat Rooms ",
        description: `Instant messaging webapp to chat with people in
                          groups.`,
      },
    ],
  },
];
