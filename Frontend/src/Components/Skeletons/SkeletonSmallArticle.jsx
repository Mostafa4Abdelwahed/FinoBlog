const SkeletonSmallArticle = () => {
  return (
    <div className="bg-gray-200 p-2 flex gap-3.5 animate-pulse">
      <div className="bg-white w-24 h-20 animate-pulse" />
      <div className="flex flex-col gap-3">
        <div className="bg-white w-60 h-12 animate-pulse" />
        <div className="bg-white w-60 h-5 animate-pulse" />
      </div>
    </div>
  );
};

export default SkeletonSmallArticle;
