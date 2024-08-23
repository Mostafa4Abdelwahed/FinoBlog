import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center">
      <img
        className="w-[250px] mx-auto"
        draggable="false"
        src="https://cdn-icons-png.flaticon.com/512/7068/7068033.png"
        alt="Error"
      />
      <h1 className="text-center text-3xl font-bold mt-5">
      حدث خطأ، يرجى المحاولة مرة أخرى
      </h1>
      <Link
        to="/"
        className="bg-main w-40 text-center text-white px-5 py-3 mx-auto rounded mt-5"
      >
        الصفحة الرئيسية
      </Link>
    </div>
  );
};

export default Error;
