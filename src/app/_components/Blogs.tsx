import React from "react";
import BlogItem from "./BlogItem";
const axios = require("axios");

interface Blog {
  id: number;
  title: string;
  author: string;
  content: string;
}

export default async function Blogs() {
  const url: string = "http://localhost:8080/blogs";
  const res = await axios(url);
  const blogs: Blog[] = res.data;

  return (
    <div className="flex flex-row">
      {blogs.map((blog: Blog) => (
        <BlogItem
          key={blog.id}
          id={blog.id}
          title={blog.title}
          author={blog.author}
          content={blog.content}
        />
      ))}
    </div>
  );
}
