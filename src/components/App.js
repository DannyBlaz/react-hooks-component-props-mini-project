import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./Articlelist"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About about={blogData.about} img={blogData.image} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
