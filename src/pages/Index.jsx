import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircleIcon, SendIcon } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const fetchLatestPosts = async () => {
  // This is a mock fetch, replace with actual API call
  return [
    { id: 1, title: 'Latest Post 1', content: 'This is the latest post content. It provides valuable insights into our recent activities and future plans. Join us in our mission to create positive change!', date: '2024-03-17' },
    { id: 2, title: 'Latest Post 2', content: 'In this post, we discuss the importance of youth involvement in shaping our society. Learn about upcoming events and how you can contribute to our cause.', date: '2024-03-18' },
  ];
};

const Index = () => {
  const { data: latestPosts, isLoading, error } = useQuery({
    queryKey: ['latestPosts'],
    queryFn: fetchLatestPosts,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <div className="text-center max-w-3xl px-4 mb-12">
        <h1 className="text-5xl font-bold mb-6 text-blue-800">Pergerakan Muda Merdeka</h1>
        <p className="text-xl text-gray-700 mb-8">
          Join us in our mission to create a fair, just, and prosperous society for all. 
          Together, we can make a difference!
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-700">Get Involved!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Join our chat groups to stay updated and participate in discussions:
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-green-500 hover:bg-green-600 text-white" onClick={() => window.open('https://chat.whatsapp.com/invite/example', '_blank')}>
              <MessageCircleIcon className="mr-2 h-4 w-4" /> Join WhatsApp Group
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={() => window.open('https://t.me/example', '_blank')}>
              <SendIcon className="mr-2 h-4 w-4" /> Join Telegram Group
            </Button>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Latest Blog Posts</h2>
        {isLoading ? (
          <p>Loading latest posts...</p>
        ) : error ? (
          <p>Error loading posts: {error.message}</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <Card key={post.id} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <p className="mb-4 text-gray-700 flex-grow">{post.content.substring(0, 100)}...</p>
                  <Link to={`/blog/${post.id}`} className="mt-auto">
                    <Button variant="outline" className="w-full">Read More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
