import { Routes, Route, useLocation } from 'react-router-dom';
import About from '../../pages/About';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import { AnimatePresence } from 'framer-motion';
import { ScrollToTop } from '../context/ScrollContext';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/notfound' element={<NotFound />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
