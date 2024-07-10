import { Fragment, useEffect, useState } from "react";
import Article from "./../../Components/Article"
import Pagination from "./../../Components/Pagination"
import { useGetArticlesQuery } from "../../Redux/ApiCalls/articleSlice";
import Error from "../../Components/Error";
import SkeletonArticle from "../../Components/Skeletons/SkeletonArticleCard"


const Articles = () => {
  const [page, setPage] = useState(1);
  const { data: articles, isLoading, isError } = useGetArticlesQuery(page);

  useEffect(()=>{
    window.scroll(0, 0)
  },[])


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
  if(isError){
    return(
      <Error />
    )
  }
  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-5">
      {articles?.data.map((article, index) => {
          return (
            <Article
              article={article?.attributes}
              id={article?.id}
              key={index}
            />
          );
        })}
      </div>
      <Pagination page={setPage} totalPages={articles?.meta?.pagination?.pageCount} />
    </Fragment>
  );
};

export default Articles;
