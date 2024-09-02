import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdvokasiKebijakan = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-800">Advokasi Kebijakan</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            Program Advokasi Kebijakan kami bertujuan untuk memengaruhi kebijakan publik demi kepentingan masyarakat luas, terutama kaum muda dan kelompok marjinal.
          </p>
          <h3 className="text-xl font-semibold mb-2">Fokus Utama:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Penelitian dan analisis kebijakan publik</li>
            <li>Kampanye advokasi untuk isu-isu sosial dan politik penting</li>
            <li>Lobi dan dialog dengan pembuat kebijakan</li>
            <li>Pelatihan advokasi untuk aktivis muda</li>
          </ul>
          <p>
            Melalui advokasi kebijakan, kami berupaya untuk memastikan bahwa suara dan kepentingan kaum muda serta kelompok marjinal didengar dan dipertimbangkan dalam proses pengambilan keputusan publik.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvokasiKebijakan;