import {injectGlobal} from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:300');

  * {
    font-family: 'Ubuntu', sans-serif;
  }

  html, body {
    margin: 0;
    max-width: 100%;
  }
`;
