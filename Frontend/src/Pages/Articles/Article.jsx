import { useEffect } from "react";
import { GoClock } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { TiHomeOutline } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import { useGetSingleArticleQuery } from "../../Redux/ApiCalls/articleSlice";
import Error from "../../Components/Error";
import SkeletonPage from "../../Components/Skeletons/SkeletonPage";

const Article = () => {
  const params = useParams();
  const { id } = params;
  const { data, isLoading, isError } = useGetSingleArticleQuery(id);
  const date = new Date(data?.data?.attributes?.createdAt).toLocaleDateString(
    "en-eg"
  );
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (isLoading) {
    return (
      <SkeletonPage />
    );
  }
  if (isError) {
    return (
      <Error />
    );
  }
  return (
    <div className="bg-white rounded p-7">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-sm text-gray-600">
          <li>
            <Link to="/" className="block transition hover:text-gray-700">
              <span className="sr-only"> Home </span>
              <TiHomeOutline />
            </Link>
          </li>

          <li className="rtl:rotate-180">
            <IoIosArrowForward />
          </li>

          <li>
            <Link
              to="/articles"
              className="block transition hover:text-gray-700"
            >
              Articles
            </Link>
          </li>

          <li className="rtl:rotate-180">
            <IoIosArrowForward />
          </li>

          <li>
            <a className="block transition hover:text-gray-700">
              {data?.data?.attributes?.title}
            </a>
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mt-5">
        {data?.data?.attributes?.title}
      </h1>
      <div className="flex gap-4 mt-7 border-b-2 pb-3">
        <span className="flex items-center gap-2">
          <GoClock className="text-main" />
          {date}
        </span>
        <span className="flex items-center gap-2">
          <GoClock className="text-main" />
          {data?.data?.attributes.category?.data?.attributes?.name}
        </span>
      </div>
      <div className="content pt-5">
        <img
          className="mx-auto"
          src={`${import.meta.env.VITE_SERVER_URL}${
            data?.data?.attributes?.thumbnail?.data?.attributes?.url
          }`}
          alt="Thumbnail"
        />
        <p className="mt-7">{data?.data?.attributes?.content}</p>
      </div>
    </div>
  );
};

export default Article;
