import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchBlogPost = async (id) => {
  // This is a mock fetch, replace with actual API call
  const posts = [
    { id: 1, title: 'Postingan Pertama', content: 'Ini adalah konten postingan pertama...', date: '2024-03-15' },
    { id: 2, title: 'Postingan Kedua', content: 'Ini adalah konten postingan kedua...', date: '2024-03-16' },
  ];
  return posts.find(post => post.id === parseInt(id));
};

const BlogPost = () => {
  const { id } = useParams();
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blogPost', id],
    queryFn: () => fetchBlogPost(id),
  });

  if (isLoading) return <div>Memuat...</div>;
  if (error) return <div>Terjadi kesalahan: {error.message}</div>;
  if (!post) return <div>Postingan tidak ditemukan</div>;

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
