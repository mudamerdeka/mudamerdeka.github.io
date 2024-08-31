import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircleIcon, SendIcon } from 'lucide-react';
import BlogSection from '@/components/BlogSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <div className="text-center max-w-3xl px-4">
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
      <BlogSection />
    </div>
  );
};

export default Index;
