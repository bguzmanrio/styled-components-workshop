import styled from 'styled-components';
import { BREAK_POINTS, SEPARATIONS } from '../constants';

export const MainImage = styled.img`
  vertical-align: text-top;
  margin-right: ${SEPARATIONS.base};
  width: 150px;
  max-height: 150px;

  @media (min-width: ${BREAK_POINTS.mobile}) {
    max-height: 1em;
    width: auto;
  }
`;
