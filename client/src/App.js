import { Route, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home'; // import el index
import Nav from './components/Nav';
import Form from './components/Form';
import Detail from './components/Detail';
import Footer from './components/Footer';
// import notFound from './components/404';

function App() {
  const { pathname } = useLocation();

  return pathname === '/' ? (
    <Route path="/">
      <LandingPage />
    </Route>
  ) : (
    <>
      <Nav />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path="/dog/:id">
        <Detail />
      </Route>
      {/* <Route path="*">
        <notFound />
      </Route> */}
      <Footer />
    </>
  );
}

export default App;
