import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import IndexPage from "./pages/Indexpage";
import LoginPage from "./pages/Loginpage";
import RegisterPage from "./pages/Registerpage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/Createpost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost/>}/>
          <Route path="/post/:id" element={<PostPage/>}/>
          <Route path="/edit/:id" element={<EditPost/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
