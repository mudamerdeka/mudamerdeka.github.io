import React, { useEffect } from 'react';

const CMS = () => {
  useEffect(() => {
    // Redirect to the Decap CMS admin page
    window.location.href = '/admin/index.html';
  }, []);

  return (
    <div>Redirecting to CMS...</div>
  );
};

export default CMS;