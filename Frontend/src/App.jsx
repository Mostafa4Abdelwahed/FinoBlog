import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home/Home";
import ArticleDetails from "./Pages/Articles/Article";
import CategoryDetails from "./Pages/Category/Category"
import Articles from "./Pages/Articles/Articles";
import Error from "./Components/Error";
import Page from "./Pages/Page/Page";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
          <Route path="/category/:id" element={<CategoryDetails />} />
          <Route path="/page/:id" element={<Page />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
  );
}

export default App;
