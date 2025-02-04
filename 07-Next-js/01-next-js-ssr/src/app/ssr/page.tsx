import React from "react";
import axios from "axios";
import Todo from "@/components/todo";

const getBlogs = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
};

interface BlogProp {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const SSRPage = async () => {
  const blogs: BlogProp[] = await getBlogs();
  return (
    <section className="h-screen w-screen flex  flex-col justify-center items-center mb-8 p-8">
      <h1 className="font-extrabold text-center m-2">BLOG</h1>
      {blogs.map((blog: BlogProp) => (
        <Todo title={blog.title} key={blog.id} />
      ))}
    </section>
  );
};

export default SSRPage;
