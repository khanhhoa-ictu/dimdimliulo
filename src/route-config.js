import React from 'react';

import NotfoundPage from './Page/NotfoundPage';
import HomePage from './Page/HomePage';
import AboutPage from './Page/AboutPage';
import BlogPage from './Page/BlogPage';
import CvPage from './Page/CvPage';


const routes = [
    { 
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    { 
        path: '/about',
        exact: true,
        main: () => <AboutPage />
    },
    { 
        path: '/blog',
        exact: true,
        main: () => <BlogPage />
    },
    { 
        path: '/cv',
        exact: true,
        main: () => <CvPage  />
    },
    { 
        path: '',
        exact: true,
        main: () => <NotfoundPage />
    },
];

export default routes;