import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "./../Redux/ApiCalls/categorySlice";
import { useState } from "react";

const Navbar = () => {
  const { data: links } = useGetCategoriesQuery();
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-main relative">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link to="/" className="block text-white">
              <span className="flex items-center gap-2">
              <svg
                  id="logo-86"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="ccustom"
                    // fill-rule="evenodd"
                    // clip-rule="evenodd"
                    d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z"
                    fill="#fff"
                  ></path>
                  <path
                    className="ccustom"
                    // fill-rule="evenodd"
                    // clip-rule="evenodd"
                    d="M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z"
                    fill="#fff"
                  ></path>
                </svg>
                <span className="text-2xl">مدونة فينو</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {links?.data?.slice(0, 5).map((category, index) => {
                  return (
                    <li key={index}>
                      <Link
                        className="text-white transition hover:text-white/75"
                        to={`/category/${category.id}`}
                      >
                        {category.attributes.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {
          isOpen && <div className="block md:hidden absolute p-4 z-[51] left-0 right-0 bg-white shadow-lg top-full">
              <div className="grid grid-cols-2 gap-3">
                {links?.data?.slice(0, 5).map((category, index) => {
                  return (
                      <Link key={index}
                        className="transition bg-main rounded p-2.5 text-white hover:scale-105"
                        to={`/category/${category.id}`}
                      >
                        {category.attributes.name}
                      </Link>
                  );
                })}
              </div>
          </div>
          }


          <div className="block md:hidden">
            <button onClick={()=>{setIsOpen((prev)=> !prev)}} className="rounded bg-gray-100 p-2 text-gray-500 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
