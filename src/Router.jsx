import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./components/layouts/Base";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
          <Route path="post/:postId" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
