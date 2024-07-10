import { useEffect, useState } from "react";
import Pagination from "./../../Components/Pagination";
import { FaArrowRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Article from "./../../Components/Article";
import { useGetSingleCategoryQuery } from "../../Redux/ApiCalls/categorySlice";
import { useGetArticlesQuery } from "./../../Redux/ApiCalls/articleSlice"
import Error from "../../Components/Error";
import SkeletonArticle from "../../Components/Skeletons/SkeletonArticleCard"

const Category = () => {
  const params = useParams();
  const { id } = params;
  const [page, setPage] = useState(1)
  const { data, isError, isLoading } = useGetSingleCategoryQuery(id);
  const { data: articles } = useGetArticlesQuery(page);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
      <SkeletonArticle />
      <SkeletonArticle />
      <SkeletonArticle />
      <SkeletonArticle />
    </div>
    );
  }
  if (isError) {
    return <Error />;
  }
  return (
    <div>
      <div className="bg-white rounded py-5 px-4 flex justify-between">
        <h1 className="uppercase font-bold">
          {`Showing Posts With The Category "${data?.data?.attributes?.name}"`}
        </h1>
        <Link
          className="bg-main text-white uppercase rounded text-xs font-bold px-2.5 flex items-center gap-1 hover:gap-2.5 hover:bg-gray-100 hover:text-black transition-all"
          to="/articles"
        >
          Show all
          <FaArrowRight />
        </Link>
      </div>

      {
      }



      {data?.data?.attributes?.articles?.data?.length <= 0 ? 
        (<h1 className="text-center text-4xl font-bold mt-7">{`No Articles In "${data?.data?.attributes?.name}"`}</h1>) :
      <div className="articles">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {articles?.data
          ?.filter(
            (article) =>
              article.attributes?.category?.data?.attributes?.name ===
              data?.data?.attributes?.name
          )
          .map((article, index) => {
            return <Article article={article.attributes} key={index} />;
          })}
      </div>
        <Pagination page={setPage} totalPages={articles?.meta?.pagination?.pageCount} />
      </div>
      }

    </div>
  );
};

export default Category;
