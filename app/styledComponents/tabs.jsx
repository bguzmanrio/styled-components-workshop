import styled, {css} from 'styled-components';
import {activateTab, activateSecondaryTab, borderColor} from './animations';
import { BREAK_POINTS, SEPARATIONS } from '../constants';

export const StyledTabsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${BREAK_POINTS.tablet}) {
    flex-direction: row;
  }
`;

export const StyledTabs = styled.ul`
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  min-width: 120px;
  padding-left: 0;

  @media (min-width: ${BREAK_POINTS.tablet}) {
    display: block;
  }
`;

const activate = css`
  animation-name: ${props => props.isSecondary ? activateSecondaryTab : activateTab};
  animation-duration: .3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-play-state: running;
`;

const hover = theme => css`
  animation-name: ${borderColor};
  animation-duration: .3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-play-state: running;
`

export const StyledTab = styled.li`
  flex-grow: 1;
  padding: ${SEPARATIONS.base} ${SEPARATIONS.middle};
  border: 1px solid #E3E3E3;
  list-style: none;


  ${props => props.active ? activate : ''};

  &:hover {
    cursor: pointer;
    ${props => hover(props.theme)}
  }
`;
