import axios from "axios";
import React from "react";

type PostIdType = Promise<{ postId: string }>;

interface BlogPostParams {
  params: PostIdType;
}

const getBlogPost = async (postId: string) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${postId}`
  );
  return response.data;
};

const BlogPostPage = async ({ params }: BlogPostParams) => {
  const { postId } = await params; // No await needed for params
  const { title, completed } = await getBlogPost(postId);

  return (
    <section className="bg-black h-screen w-screen flex justify-center items-center">
      <div className="bg-white p-12 shadow-lg rounded-lg">
        <h1 className="text-center font-extrabold text-2xl mb-2">
          blog-{postId}
        </h1>
        <h2 className="text-center font-bold text-xl">{title}</h2>
        <p
          className={`p-2 w-full text-white bg-black text-center rounded-md mt-3 ${
            completed ? "bg-green-400" : "bg-red-400"
          }`}
        >
          {completed ? "Done" : "Not Done"}
        </p>
      </div>
    </section>
  );
};

export default BlogPostPage;
