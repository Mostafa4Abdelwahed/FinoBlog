import { FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../Redux/ApiCalls/categorySlice";
import SkeletonCategory from "../Skeletons/SkeletonCategory";

const Categories = () => {
  const { data, isLoading } = useGetCategoriesQuery();

  return (
    <div className="bg-white p-5 rounded">
      <h1 className="uppercase font-bold text-xl mb-5">التصنيفات</h1>
      <div className="flex flex-col gap-5">
        {
          isLoading && <div className="flex flex-col gap-5">
          <SkeletonCategory />
          <SkeletonCategory />
          <SkeletonCategory />
          <SkeletonCategory />
          <SkeletonCategory />
        </div>
        }
        {data?.data?.slice(0, 5).map((category, index) => {
          return (
            <Link
              key={index}
              to={`category/${category.id}`}
              className="flex hover:text-main justify-between border-b-2 pb-3.5"
            >
              <div className="uppercase font-bold flex items-center gap-1.5 transition-all">
                <FaFolderOpen />
                {category?.attributes?.name}
              </div>
              <span className="bg-main text-white  rounded text-xs flex items-center px-2 uppercase font-bold">
                {category?.attributes?.articles?.data?.length || 0} مقال
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
