const SkeletonCategory = () => {
  return (
    <div className="bg-gray-200 p-3 animate-pulse flex justify-between">
      <div className="flex gap-2.5">
        <div className="bg-white w-5 h-5 rounded animate-pulse" />
        <div className="bg-white w-16 h-5 rounded animate-pulse" />
      </div>
      <div className="bg-white w-16 h-5 rounded animate-pulse" />
    </div>
  );
};

export default SkeletonCategory;
