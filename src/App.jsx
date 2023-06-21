import { Routes, NavLink, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage";
import PostList from "./pages/postList";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import SinglePost from "./pages/SinglePost";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import CreatePost from "./pages/CreatePost";
import DeletePost from "./pages/deletePost";
import EditPost from "./pages/EditPost";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage />} />
          <Route path="posts" element={<PostList />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="posts/:id" element={<SinglePost/>} />
          <Route path="posts/:id/:delete" element={<DeletePost/>} />
          <Route path="posts/:id/edit" element={<EditPost/>} />

          <Route path="login" element={<LoginPage/>}/>
          <Route path="profile" element={<ProfilePage/>}/>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
