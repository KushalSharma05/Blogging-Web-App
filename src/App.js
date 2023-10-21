
import './App.css';
// import Post from "./Post";
// import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from './Components/IndexPage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './Components/CreatePost';
import PostPage from './Components/PostPage';
import EditPost from './Components/EditPost';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
