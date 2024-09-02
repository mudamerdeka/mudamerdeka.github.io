import React from 'react';

const CMS = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="/admin/index.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Decap CMS"
      />
    </div>
  );
};

export default CMS;