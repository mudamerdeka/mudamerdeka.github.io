import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchBlogPost = async (id) => {
  // This is a mock fetch, replace with actual API call
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the first post content...', date: '2024-03-15' },
    { id: 2, title: 'Second Post', content: 'This is the second post content...', date: '2024-03-16' },
  ];
  return posts.find(post => post.id === parseInt(id));
};

const BlogPost = () => {
  const { id } = useParams();
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blogPost', id],
    queryFn: () => fetchBlogPost(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-2">{post.date}</p>
          <p>{post.content}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPost;