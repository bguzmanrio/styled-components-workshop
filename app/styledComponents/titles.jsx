import styled from 'styled-components';
import { BREAK_POINTS, SEPARATIONS } from '../constants';

export const MainTitle = styled.h1`
  margin-top: 0;
  background: ${props => props.theme.gradient};
  padding: ${SEPARATIONS.double};
  color: white;
  text-align: center;

  @media (min-width: ${BREAK_POINTS.tablet}) {
    text-align: left;
  }
`;

export const TitleContent = styled.span`
  display: none;

  @media (min-width: ${BREAK_POINTS.mobile}) {
    display: inline-block;
  }
`;

export const SecondaryTitle = styled.h2`
  margin: 0;
`;
