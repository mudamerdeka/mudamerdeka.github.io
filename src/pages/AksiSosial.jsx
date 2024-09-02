import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AksiSosial = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-800">Aksi Sosial</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            Inisiatif Aksi Sosial kami berfokus pada pemberdayaan masyarakat melalui berbagai program yang dirancang untuk mengatasi masalah sosial dan meningkatkan kualitas hidup.
          </p>
          <h3 className="text-xl font-semibold mb-2">Program Utama:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Kampanye kebersihan lingkungan dan pengelolaan sampah</li>
            <li>Program literasi dan pendidikan untuk daerah terpencil</li>
            <li>Bantuan kemanusiaan untuk korban bencana alam</li>
            <li>Pemberdayaan ekonomi masyarakat melalui pelatihan kewirausahaan</li>
          </ul>
          <p>
            Melalui aksi sosial ini, kami bertujuan untuk membangun masyarakat yang lebih peduli, inklusif, dan berkelanjutan, di mana setiap individu memiliki kesempatan untuk berkembang dan berkontribusi.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AksiSosial;