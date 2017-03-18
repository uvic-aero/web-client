import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { Router } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';
import routes from './routes';
import network from './network';

injectTapEventPlugin();

const theme = lightBaseTheme;

theme.palette.primary1Color = '#212121';
theme.palette.primary2Color = '#424242';
theme.palette.accent1Color = '#332d39';
theme.palette.accent2Color = '#009688';
theme.palette.accent3Color = '#00796B';
theme.palette.alternateTextColor = '#EEEEEE';
theme.palette.textColor = "#BDBDBD";

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <Router history={syncHistoryWithStore(browserHistory, store)} routes={routes} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);