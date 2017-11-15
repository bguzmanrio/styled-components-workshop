import styled, {css} from 'styled-components';
import {activateTab, activateSecondaryTab, borderColor} from './animations';

export const StyledTabsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledTabs = styled.ul`
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  min-width: 120px;

  @media (max-width: 715px) {
    display: flex;
  }
`;

const activate = css`
  animation-name: ${props => props.isSecondary ? activateSecondaryTab : activateTab};
  animation-duration: .3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-play-state: running;
`;

const hover = css`
  animation-name: ${borderColor};
  animation-duration: .3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-play-state: running;
`

export const StyledTab = styled.li`
  flex-grow: 1;
  padding: 8px 4px;
  border: 1px solid #E3E3E3;
  list-style: none;


  ${props => props.active ? activate : ''};

  &:hover {
    cursor: pointer;
    ${hover};
  }
`;
