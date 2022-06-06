import Header from './components/layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { HeaderProvider } from './components/context/HeaderContext';
import './locomotivescroll.min.css';
import { ScrollProvider } from './components/context/ScrollContext';
import AnimatedRoutes from './components/layout/AnimatedRoutes';
import { PageTransitionProvider } from './components/context/PageTransitionContext';
import PageTransition from './components/layout/PageTransition';
function App() {
  return (
    <>
      <HeaderProvider>
        <ScrollProvider>
          <Router>
            <Header />
            <PageTransitionProvider>
              <PageTransition />
              <AnimatedRoutes />
            </PageTransitionProvider>
          </Router>
        </ScrollProvider>
      </HeaderProvider>
    </>
  );
}

export default App;
