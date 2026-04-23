import React from 'react';
import MainLayout from './MainLayout';
import Banner from './Banner';
import Friends from './Friends';

const Home = () => {
    return (
        <div>
          <Banner/>
          <Friends/>
        </div>
    );
};

export default Home;