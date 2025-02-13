import React from "react";
import BlogItem from "./BlogItem";

interface Blog {
  id: number;
  title: string;
  author: string;
  content: string;
}

export default async function Blogs() {
  // const url: string = "http://localhost:8080/blogs";
  const url: string = "http://localhost:3000/api/blogs";
  const res = await fetch(url);
  const blogs: Blog[] = await res.json();

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
