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
    <section className='single-blog'>
      <div className='cta-blog-img'>
      <img src={blog.image} alt={blog.title} />
      </div>


     <div className='cta-blog-content'>  

          <div className='cta-story-of-week'>
            <h1>Story of the Week</h1>
          </div>
          
          <div className='cta-blog-title'>
            <h3>{blog.title_content}</h3>
          </div>
          
          <div className='cta-main-content'>
              <p>{blog.heading_content}</p>
              <p>{blog.content1}</p>
              <p>{blog.content2}</p>
              <p>{blog.content3}</p>
              <p>{blog.content4}</p>
              <p>{blog.content5}</p>
              <p>{blog.content6}</p>
              <p>{blog.content7}</p>
          </div>
          

      </div>
    </section>
  );
};

export default BlogPost;
