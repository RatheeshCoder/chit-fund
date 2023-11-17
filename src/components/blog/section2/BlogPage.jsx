import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../../../data/data';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const BlogPage = () => {
  return (
    <section className='blog-main'>
    <div className='blog-list' >
      {Object.keys(blogData).map((id) => {
        const blog = blogData[id];
        return (
          <Card key={id} className="blog-card">
            <CardMedia
              component="img"
              height="200"
              image={blog.image}
              alt={blog.title}
            />
            <CardContent>
              <Typography variant="h5">{blog.title}</Typography>
              <Link to={`/blog/${id}`}>
                <Button variant="contained" color="primary">
                  Read More
                </Button>
              </Link>
            </CardContent>
          </Card>
        );
      })}
    </div>
    </section>
  );
};

export default BlogPage;
