import Header from './components/layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { HeaderProvider } from './components/context/HeaderContext';
import './locomotivescroll.min.css';
import { ScrollProvider } from './components/context/ScrollContext';
import AnimatedRoutes from './components/layout/AnimatedRoutes';
import { PageTransitionProvider } from './components/context/PageTransitionContext';
import PageTransition from './components/layout/PageTransition';
import { SessionProvider } from './components/context/SessionContext';
function App() {
  return (
    <Router>
      <SessionProvider>
        <HeaderProvider>
          <ScrollProvider>
            {/* <Router> */}
            <Header />
            <PageTransitionProvider>
              <PageTransition />
              <AnimatedRoutes />
            </PageTransitionProvider>
            {/* </Router> */}
          </ScrollProvider>
        </HeaderProvider>
      </SessionProvider>
    </Router>
  );
}

export default App;
