
const SkeletonPage = () => {
  return (
    <div className="bg-white w-full rounded p-5 my-5">
        <div className="bg-gray-200 animate-pulse w-96 rounded h-5" />
        <div className="bg-gray-200 animate-pulse w-full rounded h-10 mt-7" />
        <div className="bg-gray-200 animate-pulse w-52 rounded h-5 mt-7" />
        <div className="bg-gray-200 animate-pulse w-full rounded h-px mt-7" />
        <div className="bg-gray-200 animate-pulse w-full rounded h-72 mt-7" />
        <div className="bg-gray-200 animate-pulse w-full rounded h-72 mt-7" />
    </div>
  )
}

export default SkeletonPage