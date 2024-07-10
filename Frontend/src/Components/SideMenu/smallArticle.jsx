import { GoClock } from "react-icons/go";
import { Link } from "react-router-dom";

const smallArticle = ({article, id}) => {
  const date = new Date(article.createdAt).toLocaleDateString("en-eg")
  return (
    <Link to={`/articles/${id}`} className="flex gap-3.5">
      <img loading="lazy"
        src={`${import.meta.env.VITE_SERVER_URL}${article?.thumbnail?.data?.attributes?.url}`}
        width={100}
        alt="Thumbnail"
      />
      <div className="content">
        <h1 className="font-bold">{article?.title}</h1>
        <span className="flex items-center gap-1">
          <GoClock className="text-main" />
          {date}
        </span>
      </div>
    </Link>
  );
};

export default smallArticle;
