import Categories from "../Components/SideMenu/Categories";
import PopularArticles from "../Components/SideMenu/PopularArticles";
import SocialMedia from "../Components/SideMenu/SocialMedia";

const SideMenu = () => {
  return (
    <div className="w-full md:w-4/12 py-2 pb-10 flex flex-col gap-7">
      <SocialMedia />
      <Categories />
      <PopularArticles />
    </div>
  );
};

export default SideMenu;
