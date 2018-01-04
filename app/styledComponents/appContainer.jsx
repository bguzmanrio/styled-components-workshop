import styled from 'styled-components';
import { BREAK_POINTS } from '../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${BREAK_POINTS.tablet}) {
    flex-direction: row;
  }
`;
