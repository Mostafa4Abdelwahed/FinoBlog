import { GoClock } from "react-icons/go";
import { Link } from "react-router-dom";

const Article = ({article, id}) => {
  const date = new Date(article?.createdAt).toLocaleDateString("en-eg");
  return (
    <Link to={`/articles/${id}`} className="bg-white rounded relative">
      <div className="absolute left-3.5 top-3.5 font-bold uppercase bg-main p-2 text-white text-xs z-50 rounded px-3.5">{article?.category?.data?.attributes?.name}</div>
      <div className="thumbnail w-full h-auto md:h-[220px] rounded-t overflow-hidden">
        <img loading="lazy"
          className="rounded-t h-full w-full hover:scale-125 object-cover transition-all"
          src={article?.thumbnail?.data?.attributes?.url}
          alt="Thumbnail"
        />
      </div>

      <div className="content px-5 pt-3">
        <h1 to="/" className="font-bold text-xl mt-2 hover:text-main transition-all">
        {article?.title}
        </h1>
        <p className="my-5 font-light line-clamp-2">
        {article?.description}
        </p>
      </div>

      <div className="details px-5 flex items-center gap-2.5 pb-4 text-gray-400">
          <GoClock className="text-main" />
          {date}
      </div>
    </Link>
  );
};

export default Article;
