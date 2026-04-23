import React, { Suspense } from 'react';
import Banner from './Banner';
import Friends from './Friends';

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Banner />

      <Suspense fallback={<Loading />}>
        <Friends />
      </Suspense>
    </div>
  );
};

export default Home;