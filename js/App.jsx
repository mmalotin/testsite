import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header'
import Main from './Main'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';
import {blueGrey900, tealA400} from 'material-ui/styles/colors';

const primary = blueGrey900;
const accent = fade(tealA400, 0.85);

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: primary,
        accent1Color: accent,
    },
    fontFamily: 'Roboto Slab, serif',
    appBar: {
      textColor: accent,
    },
    tabs: {
      textColor: fade(accent, 0.6),
      selectedTextColor: accent,
    },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Header />
    <Main />
  </MuiThemeProvider>
);

export default App;
