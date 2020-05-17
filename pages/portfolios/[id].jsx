import React from 'react';
import { useRouter } from 'next/router';

const PortfolioDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>PortfolioDetail Page ID: {id}</h1>
    </div>
  );
};

export default PortfolioDetail;
