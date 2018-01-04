import {keyframes} from 'styled-components';

export const activateTab = props => keyframes`
  from {
    background-color: white;
    color: white;
  }

  to {
    background-color: ${props.theme.primaryColor};
    color: white;
  }
`;

export const activateSecondaryTab = props => keyframes`
  from {
    background-color: white;
    color: white;
  }

  to {
    background-color: ${props.theme.secondaryColor};
    color: white;
  }
`;

export const borderColor = props => keyframes`
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
    background-color: ${props.theme.secondaryColor};
    color: white;
    border-color: #3E3E3E;
  }
`;
