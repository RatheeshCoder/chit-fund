import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '../../../data/data';

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
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{ minHeight: '500px', backgroundImage: `url('${blog.image}')` }}
        title={blog.title}
      ></div>
      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">{blog.title_content}</h1>
            <p className="text-gray-700 text-xs mt-2">
             
              <a
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                {blog.category}
              </a>
            </p>

            <p className="text-base leading-8 my-5">{blog.heading_content}</p>
            <p className="text-base leading-8 my-5">{blog.content1}</p>
            <p className="text-base leading-8 my-5">{blog.content2}</p>
            <p className="text-base leading-8 my-5">{blog.content3}</p>
            <p className="text-base leading-8 my-5">{blog.content4}</p>
            <p className="text-base leading-8 my-5">{blog.content5}</p>
            <p className="text-base leading-8 my-5">{blog.content6}</p>
            <p className="text-base leading-8 my-5">{blog.content7}</p>
            <p className="text-base leading-8 my-5">{blog.content8}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
