
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import config from './config';

import Footer from './components/Footer';
import Nav from './components/Nav';
import Routes from './components/Routes';

const oktaAuth = new OktaAuth(config.oidc);
function App() {
  const navigate = useNavigate();
  const restoreOriginalUri = (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
    </Security>
  );
}

export default App;