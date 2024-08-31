import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fetchLatestPosts = async () => {
  const response = await fetch('https://blog.mudamerdeka.or.id/wp-json/wp/v2/posts?per_page=3');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const BlogSection = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['latestPosts'],
    queryFn: fetchLatestPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching blog posts</div>;

  return (
    <div className="mt-12 mb-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title.rendered}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{new Date(post.date).toLocaleDateString()}</p>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} className="mb-4" />
              <Button onClick={() => window.open(post.link, '_blank')}>Read More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;