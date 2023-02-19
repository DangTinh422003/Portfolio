import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import NotFoundPage from '../pages/NotFoundPage';

// public routes
const publicRoutes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/contact',
    component: ContactPage,
  },
  {
    path: '/portfolio',
    component: PortfolioPage,
  },
];

// private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
