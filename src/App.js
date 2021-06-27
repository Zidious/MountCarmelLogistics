import Home from './pages/home';
import React from 'react';
import 'bulma/css/bulma.css';
import ScrollTop from './components/scollTop';
const App = () => {
  return (
    <React.Fragment>
      <ScrollTop />
      <Home />
    </React.Fragment>
  );
};

export default App;
