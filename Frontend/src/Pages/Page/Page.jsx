import { GoClock } from "react-icons/go"
import { IoIosArrowForward } from "react-icons/io"
import { TiHomeOutline } from "react-icons/ti"
import { Link, useParams } from "react-router-dom"
import { useGetSinglePageQuery } from "../../Redux/ApiCalls/pageSlice"
import { useEffect } from "react"

const Page = () => {
    const params = useParams();
    const {id}= params;
    const { data } = useGetSinglePageQuery(id);
    const date = new Date(data?.data?.attributes?.createdAt).toLocaleDateString("en-eg");

    useEffect(() => {
      window.scroll(0, 0);
    }, []);
  return (
    <div className="bg-white rounded p-7">
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-gray-600">
        <li>
          <Link to="/" className="block transition hover:text-gray-700">
            <span className="sr-only"> الرئيسية </span>
            <TiHomeOutline />
          </Link>
        </li>

        <li className="rtl:rotate-180">
          <IoIosArrowForward />
        </li>

        <li>
          <p
            to="/articles"
            className="block transition hover:text-gray-700"
          >
            الصفحات
          </p>
        </li>

        <li className="rtl:rotate-180">
          <IoIosArrowForward />
        </li>

        <li>
          <a className="block transition hover:text-gray-700 line-clamp-1">
            <p className="line-clamp-1">
            {data?.data?.attributes?.title}
            </p>
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
    </div>
    <div className="content pt-5">
      <p className="mt-7">{data?.data?.attributes?.content}</p>
    </div>
  </div>

  )
}

export default Page