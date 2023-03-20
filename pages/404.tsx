import { useMediaQuery } from "react-responsive";

export default function Custom404() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  if (!isTabletOrMobile) {
    return (
      <article className=" scrollbar bg4040  text-left ">
        <div className="md:flex md:mr-0 ">
          <div className="md:flex items-center  text0 ">
            <h1 className="pl-3 block w-full py-2 text-right text-6xl font-bold text-transparent bg-clip-text leading-12 bg-gradient-to-r from-red-400 to-purple-500 lg:inline">
              404 <br /> Page not found
            </h1>
          </div>
        </div>
      </article>
    );
  } else {
    return (
      <article className=" scrollbar bg4040mob  relative ">
        <h1
          className=" text-center  absolute bottom-0 
            text-6xl font-bold text-transparent bg-clip-text leading-12 bg-gradient-to-r from-red-400 to-purple-500 lg:inline"
        >
          404 <br /> Page not found
        </h1>
      </article>
    );
  }
}
