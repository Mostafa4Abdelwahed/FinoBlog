import { Link } from "react-router-dom";
import { useGetPagesQuery } from "../Redux/ApiCalls/pageSlice";
import Container from "../ui/Container";

const Footer = () => {
  const { data: pages } = useGetPagesQuery();

  return (
    <div className="bg-gray-900 text-white py-5">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-center mx-auto md:mx-0">
          مصنوعة من ❤️ بواسطة مصطفى محمد
          </h1>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {pages?.data?.slice(0, 5).map((page, index) => {
              return (
                <li key={index}>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to={`/page/${page.id}`}
                  >
                    {page?.attributes?.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
