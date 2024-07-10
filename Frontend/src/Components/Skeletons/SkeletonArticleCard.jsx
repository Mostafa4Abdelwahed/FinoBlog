const SkeletonArticleCard = () => {
  return (
    <div className="bg-white border-white border-2 rounded w-full animate-pulse">
      <div className="rounded-t w-full h-44 bg-gray-200 animate-pulse" />
      <div className="content py-2 px-3">
        <div className="w-full h-7 bg-gray-200 mt-3 animate-pulse" />
        <div className="w-full h-24 bg-gray-200 mt-3 animate-pulse" />
        <div className="flex gap-5">
        <div className="w-full h-4 bg-gray-200 mt-3 animate-pulse" />
        <div className="w-full h-4 bg-gray-200 mt-3 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonArticleCard;
