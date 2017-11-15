import {keyframes} from 'styled-components';

export const activateTab = keyframes`
  from {
    background-color: white;
    color: black;
  }

  to {
    background-color: #db7093;
    color: white;
  }
`;

export const activateSecondaryTab = keyframes`
  from {
    background-color: white;
    color: black;
  }

  to {
    background-color: #daa357;
    color: white;
  }
`;

export const borderColor = keyframes`
  from {
    background-color: white;
    border-color: #E3E3E3;
  }

  30% {
    border-color: #ACACAC;
  }

  60% {
    border-color: #757575;
  }

  to {
    background-color: #daa357;
    border-color: #3E3E3E;
  }
`;
