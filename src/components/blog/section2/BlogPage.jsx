import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../../../data/data';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const BlogPage = () => {
  return (
    <section className='blog-main'>
      <div className='blog-list'>
        {Object.keys(blogData).map((id) => {
          const blog = blogData[id];
          return (
            <Card key={id} className="blog-card">
              {/* Wrap the entire Card with Link */}
              <Link to={`/blog/${id}`}>
                {/* Make the CardMedia (image) clickable */}
                <CardMedia
                  component="img"
                  height="200"
                  image={blog.image}
                  alt={blog.title}
                  className="clickable-image"
                />
                {/* Center text over the image */}
                <CardContent className="overlay-text">
                  <Typography variant="h5">{blog.title}</Typography>
                </CardContent>
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default BlogPage;
