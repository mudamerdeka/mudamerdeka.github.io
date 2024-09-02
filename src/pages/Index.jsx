import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircleIcon, SendIcon } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const fetchLatestPosts = async () => {
  // This is a mock fetch, replace with actual API call
  return [
    { id: 1, title: 'Postingan Terbaru 1', content: 'Ini adalah konten postingan terbaru. Memberikan wawasan berharga tentang aktivitas terkini dan rencana masa depan kami. Bergabunglah dalam misi kami untuk menciptakan perubahan positif!', date: '2024-03-17' },
    { id: 2, title: 'Postingan Terbaru 2', content: 'Dalam postingan ini, kami membahas pentingnya keterlibatan pemuda dalam membentuk masyarakat kita. Pelajari tentang acara mendatang dan bagaimana Anda dapat berkontribusi pada tujuan kami.', date: '2024-03-18' },
  ];
};

const features = [
  { id: 1, title: 'Pendidikan Politik', description: 'Program pendidikan politik untuk pemuda', link: '/fitur/pendidikan-politik' },
  { id: 2, title: 'Aksi Sosial', description: 'Inisiatif aksi sosial untuk masyarakat', link: '/fitur/aksi-sosial' },
  { id: 3, title: 'Advokasi Kebijakan', description: 'Program advokasi kebijakan publik', link: '/fitur/advokasi-kebijakan' },
];

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
          Bergabunglah dengan kami dalam misi menciptakan masyarakat yang adil, setara, dan sejahtera untuk semua. 
          Bersama, kita bisa membuat perubahan!
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-700">Mari Terlibat!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Bergabunglah dengan grup chat kami untuk tetap mendapatkan informasi terbaru dan berpartisipasi dalam diskusi:
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-green-500 hover:bg-green-600 text-white" onClick={() => window.open('https://chat.whatsapp.com/invite/example', '_blank')}>
              <MessageCircleIcon className="mr-2 h-4 w-4" /> Gabung Grup WhatsApp
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={() => window.open('https://t.me/example', '_blank')}>
              <SendIcon className="mr-2 h-4 w-4" /> Gabung Grup Telegram
            </Button>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-4xl px-4 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Fitur Utama Kami</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Link to={feature.link} key={feature.id}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Postingan Blog Terbaru</h2>
        {isLoading ? (
          <p>Memuat postingan terbaru...</p>
        ) : error ? (
          <p>Terjadi kesalahan saat memuat postingan: {error.message}</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {latestPosts.map((post) => (
              <Card key={post.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <p className="mb-4 text-gray-700">{post.content.substring(0, 150)}...</p>
                  <Link to={`/blog/${post.id}`} className="mt-auto">
                    <Button variant="outline" className="w-full">Baca Selengkapnya</Button>
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