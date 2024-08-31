import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const fetchBlogPosts = async () => {
  // This is a mock fetch, replace with actual API call
  return [
    { id: 1, title: 'Postingan Pertama', content: 'Ini adalah konten postingan pertama...', date: '2024-03-15' },
    { id: 2, title: 'Postingan Kedua', content: 'Ini adalah konten postingan kedua...', date: '2024-03-16' },
  ];
};

const BlogPosts = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
  });

  if (isLoading) return <div>Memuat...</div>;
  if (error) return <div>Terjadi kesalahan: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Postingan Blog</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p className="mb-4">{post.content.substring(0, 100)}...</p>
              <Link to={`/blog/${post.id}`}>
                <Button>Baca Selengkapnya</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
