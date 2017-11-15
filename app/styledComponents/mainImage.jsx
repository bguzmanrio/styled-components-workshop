import styled from 'styled-components';

export const MainImage = styled.img`
  max-height: 1em;
  vertical-align: text-top;
  margin-right: 8px;

  @media (max-width: 420px) {
    width: 150px;
    max-height: 150px;
  }
`;
