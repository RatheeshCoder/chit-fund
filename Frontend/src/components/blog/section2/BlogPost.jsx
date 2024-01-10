import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../../../data/data";
import { Helmet } from 'react-helmet';

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (blogData[id]) {
          setBlog(blogData[id]);
        } else {
          console.error(`Blog post with ID ${id} not found.`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  return (
    <>
     <Helmet>
        <title>Vanmoh | Single Blog</title>
      </Helmet>
    <div className="relative max-w-screen-xl p-5 mx-auto sm:p-10 md:p-16">
      <div
        className="overflow-hidden text-center bg-center bg-cover"
        style={{ minHeight: "500px", backgroundImage: `url('${blog.image}')` }}
        title={blog.title}
      ></div>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col justify-between mt-3 leading-normal bg-white rounded-b lg:rounded-b-none lg:rounded-r">
          <div className="relative top-0 p-5 -mt-32 bg-white sm:p-10">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              {blog.title_content}
            </h1>
            <p className="mt-2 text-xs text-gray-700">
              <a
                href="#"
                className="text-xs font-medium text-indigo-600 transition duration-500 ease-in-out hover:text-gray-900"
              >
                {blog.category}
              </a>
            </p>

            <p className="my-5 text-base leading-8">{blog.heading_content}</p>
            <p className="my-5 text-base leading-8">{blog.content1}</p>
            <p className="my-5 text-base leading-8">{blog.content2}</p>
            <p className="my-5 text-base leading-8">{blog.content3}</p>
            <p className="my-5 text-base leading-8">{blog.content4}</p>
            <p className="my-5 text-base leading-8">{blog.content5}</p>
            <p className="my-5 text-base leading-8">{blog.content6}</p>
            <p className="my-5 text-base leading-8">{blog.content7}</p>
            <p className="my-5 text-base leading-8">{blog.content8}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogPost;
