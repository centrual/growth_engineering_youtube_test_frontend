import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as BRouter, Route, Switch } from 'react-router-dom';
import Error404Page from './components/pages/error404Page/error404Page';
import Error500Page from './components/pages/error500Page/error500Page';
import PlaylistPage from './components/pages/playlistPage/playlistPage';

function App(): JSX.Element {
  return (
    <>
      <BRouter forceRefresh>
        <Switch>
          <Route exact path="/">
            <PlaylistPage />
          </Route>
          <Route path="/500">
            <Error500Page />
          </Route>
          <Route path="*">
            <Error404Page />
          </Route>
        </Switch>
      </BRouter>
      <ToastContainer />
    </>
  );
}

export default App;
