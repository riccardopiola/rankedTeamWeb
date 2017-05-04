import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

/*
  Import Components
*/
import AppContainer from './containers/AppContainer';
import HomeContainer from './containers/HomeContainer';
import SummonerContainer from './containers/SummonerContainer';

/* Import our data store */
import store, { history } from './store';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer>
        <Switch>
          <Route path="/" component={HomeContainer} />
          <Route path="/summoner/:summonerName" component={SummonerContainer}/>
        </Switch>
      </AppContainer>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
