import { NextPage } from "next";
import { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";

const Email: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const finalSendEmail = async () => {
    setLoading(true);
    const data = {
      email: email,
      message: message,
      name: name,
    };
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    await res.json();

    setError("");
    setEmail("");
    setMessage("");
    setName("");
    setLoading(false);
    setDone(true);
  };

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Contact me</title>
        <meta
          name="description"
          content={`Contact me for any discussions on cool ideas or projects or gaming. `}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Contact me"} />
        <meta
          name="description"
          content={`Contact me for any discussions on cool ideas or projects or gaming. `}
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
        <div className="h-full w-full mx-auto">
          <section className="shadow-xl items-center justify-center rounded-md mx-auto">
            <div className="max-w-6xl mx-auto pt-10 pb-10 ">
              <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-6 mr-2 mt-8   sm:rounded-lg">
                    <h1 className="text-4xl sm:text-5xl mx-auto text-gray-200 dark:text-white font-extrabold tracking-tight">
                      Get in touch
                    </h1>
                    <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                      Fill in the form to start a conversation
                    </p>
                    <p className="text-normal text-md font-normal text-gray-400 dark:text-gray-400 mt-2">
                      You can contact me with any questions, suggestions or just
                      to say hi. I am always open to new ideas and
                      collaborations. It can be anything like collaborating on
                      good projects or startups or freelancing or gaming or
                      anything else.
                    </p>
                    <p className=" text-sm  text-red-600 dark:text-gray-400 mt-2">
                      {error}
                    </p>
                  </div>

                  {!done ? (
                    <form className="p-6  flex flex-col justify-center">
                      <div className="flex flex-col">
                        <label htmlFor="name" className="hidden">
                          Name
                        </label>
                        <input
                          type="name"
                          name="name"
                          id="name"
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Full Name"
                          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col mt-2">
                        <label htmlFor="email" className="hidden">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col mt-2">
                        <label htmlFor="tel" className="hidden">
                          Message
                        </label>
                        <textarea
                          name="details"
                          value={message}
                          id="details"
                          placeholder="Message"
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                        ></textarea>
                      </div>

                      {!loading ? (
                        <button
                          type="button"
                          onClick={() => {
                            if (email === "") {
                              setError("Please enter your email.");
                            } else if (message === "") {
                              setError("Please enter your message.");
                            } else if (name === "") {
                              setError("Please enter your name.");
                            } else {
                              setError("");
                              setEmail("");
                              setMessage("");
                              setName("");
                              finalSendEmail();
                            }
                          }}
                          className="md:w-32  bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                        >
                          Submit
                        </button>
                      ) : (
                        <div
                          className="spinner-border flex pt-4 text-indigo-500"
                          role="status"
                        >
                          <img
                            src="https://img.icons8.com/ios/50/ffffff/loading-circle.gif"
                            className="rounded-full flex"
                            width="30"
                            height="30"
                          />
                          <span className="flex-auto text-white pl-2 font-medium pt-1">
                            Loading...{" "}
                          </span>
                        </div>
                      )}
                    </form>
                  ) : (
                    <div className=" flex  w-4/3 items-center justify-center">
                      <div className="text-center justify-center text-gray-300 font-medium text-sm">
                        <div className=" text-left text-lg pb-3">
                          Thank you for your message. <br /> Will get back to
                          you as soon as possible.
                        </div>
                        <div className=" text-left pb-3">
                          <img
                            src="https://c.tenor.com/mCiM7CmGGI4AAAAC/naruto.gif"
                            width="75%"
                            height="100"
                            className="text-center rounded-lg "
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>{" "}
          </section>
        </div>
      ) : (
        <div className="h-full w-full pb-20  ">
          <section className="shadow-xl items-center justify-center rounded-md">
            <div className=" ">
              <div className="overflow-hidden">
                <div className="p-3 ">
                  <h1 className="text-4xl  text-gray-200 dark:text-white font-extrabold tracking-tight">
                    Get in touch
                  </h1>
                  <p className="text-normal text-lg font-medium text-gray-600 dark:text-gray-400 mt-2">
                    Fill in the form to start a conversation
                  </p>
                  <p className="text-normal text-md font-normal text-gray-400 dark:text-gray-400 mt-2">
                    You can contact me with any questions, suggestions or just
                    to say hi. I am always open to new ideas and collaborations.
                    It can be anything like collaborating on good projects or
                    startups or freelancing or gaming or anything else.
                  </p>
                  <p className=" text-sm  text-red-600 dark:text-gray-400 mt-2">
                    {error}
                  </p>
                </div>

                {!done ? (
                  <form className="p-3 pb-20 justify-center">
                    <div className="">
                      <label htmlFor="name" className="hidden">
                        Name
                      </label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full mt-2 py-3 px-3 rounded-lg
                         bg-white  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                      />
                    </div>

                    <div className=" mt-2">
                      <label htmlFor="email" className="hidden">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                      />
                    </div>

                    <div className=" mt-2">
                      <label htmlFor="tel" className="hidden">
                        Message
                      </label>
                      <textarea
                        name="details"
                        value={message}
                        id="details"
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                      ></textarea>
                    </div>

                    {!loading ? (
                      <button
                        type="button"
                        onClick={() => {
                          if (email === "") {
                            setError("Please enter your email.");
                          } else if (message === "") {
                            setError("Please enter your message.");
                          } else if (name === "") {
                            setError("Please enter your name.");
                          } else {
                            setError("");
                            setEmail("");
                            setMessage("");
                            setName("");
                            finalSendEmail();
                          }
                        }}
                        className="md:w-32 mb-20  bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3
                         hover:bg-indigo-500 transition ease-in-out duration-300"
                      >
                        Submit
                      </button>
                    ) : (
                      <div
                        className="spinner-border flex pt-4 mb-20 text-indigo-500"
                        role="status"
                      >
                        <img
                          src="https://img.icons8.com/ios/50/ffffff/loading-circle.gif"
                          className="rounded-full flex"
                          width="30"
                          height="30"
                        />
                        <span className="flex-auto text-white pl-2 font-medium pt-1">
                          Loading...{" "}
                        </span>
                      </div>
                    )}
                  </form>
                ) : (
                  <div className=" flex p-2 pt-5  pb-20 w-full items-center justify-center">
                    <div className="text-center justify-center text-gray-300 font-medium text-sm">
                      <div className=" text-left text-lg pb-3">
                        Thank you for your message. <br /> Will get back to you
                        as soon as possible.
                      </div>
                      <div className=" text-left pb-3">
                        <img
                          src="https://c.tenor.com/mCiM7CmGGI4AAAAC/naruto.gif"
                          width="100%"
                          height="100"
                          className="text-center rounded-lg "
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>{" "}
          </section>
        </div>
      )}
    </Scrollbars>
  );
};

export default Email;
