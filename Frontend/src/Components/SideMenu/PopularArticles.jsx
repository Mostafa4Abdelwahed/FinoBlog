import { useGetArticlesQuery } from "../../Redux/ApiCalls/articleSlice";
import SkeletonSmallArticle from "../Skeletons/SkeletonSmallArticle";
import SmallArticle from "./smallArticle";

const PopularArticles = () => {
  const { data: articles, isLoading } = useGetArticlesQuery(1);
  return (
    <div className="bg-white p-5 rounded">
      <h1 className="uppercase font-bold text-xl mb-5">most popular</h1>
      {
        isLoading && <div className="flex flex-col gap-5">
          <SkeletonSmallArticle />
          <SkeletonSmallArticle />
          <SkeletonSmallArticle />
          <SkeletonSmallArticle />
        </div>
      }
      <div className="list flex flex-col gap-5">
        {
          articles?.data?.slice(0, 4).map((article, index)=>{
            return(
              <SmallArticle article={article.attributes} id={article?.id} key={index} />
            )
          })
        }
      </div>
    </div>
  );
};

export default PopularArticles;
