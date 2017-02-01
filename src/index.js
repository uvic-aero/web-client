import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { Router } from 'react-router';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';
import routes from './routes';

injectTapEventPlugin();

const theme = darkBaseTheme;

theme.palette.primary1Color = '#333a41';
theme.palette.primary2Color = 'rgb(40, 46, 51)';
theme.palette.accent1Color = '#eba91b';
theme.palette.accent2Color = '#eba91b';
theme.palette.accent3Color = '#eba91b';
theme.palette.alternateTextColor = '#eba91b';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <Router history={syncHistoryWithStore(browserHistory, store)} routes={routes} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);