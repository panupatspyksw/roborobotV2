import { Routes, Route, useLocation } from 'react-router-dom';
import About from '../../pages/About';
import Home from '../../pages/Home';
import Courses from '../../pages/Courses';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import CheckOut from '../../pages/CheckOut';
import Payment from '../../pages/Payment';
import MyCourses from '../../pages/MyCourses';

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
        <Route path='/courses' element={<Courses />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
        <Route path='/mycourses' element={<MyCourses />}></Route>

        <Route path='/notfound' element={<NotFound />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
