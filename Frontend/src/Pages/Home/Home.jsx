import { FaArrowRight } from "react-icons/fa";
import Articles from "./Articles";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className="bg-white rounded py-3 px-3.5 flex justify-between">
        <h1 className="uppercase text-lg font-bold">latest articles</h1>
        <Link
          className="bg-main text-white uppercase rounded text-xs font-bold px-2.5 flex items-center gap-1 hover:gap-2.5 hover:bg-gray-100 hover:text-black transition-all"
          to="/articles"
        >
          show more
          <FaArrowRight />
        </Link>
      </div>
      <Articles />
    </Fragment>
  );
};

export default Home;
