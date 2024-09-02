import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PendidikanPolitik = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-800">Pendidikan Politik</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            Program Pendidikan Politik kami bertujuan untuk memberdayakan pemuda dengan pengetahuan dan keterampilan yang diperlukan untuk berpartisipasi aktif dalam proses demokrasi.
          </p>
          <h3 className="text-xl font-semibold mb-2">Fitur Utama:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Seminar dan workshop tentang sistem politik Indonesia</li>
            <li>Simulasi pemilu dan proses legislatif</li>
            <li>Diskusi panel dengan tokoh politik dan aktivis</li>
            <li>Program magang di lembaga pemerintah dan organisasi politik</li>
          </ul>
          <p>
            Melalui program ini, kami berharap dapat menciptakan generasi pemimpin masa depan yang memahami tanggung jawab mereka sebagai warga negara dan mampu berkontribusi positif dalam pembangunan bangsa.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PendidikanPolitik;