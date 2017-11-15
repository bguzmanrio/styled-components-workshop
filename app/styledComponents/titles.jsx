import styled from 'styled-components';

export const MainTitle = styled.h1`
  margin-top: 0;
  background: linear-gradient(20deg, #db7093, #daa357);
  padding: 16px;
  color: white;

  @media (max-width: 715px) {
    text-align: center;
  }
`;

export const TitleContent = styled.span`
  @media (max-width: 420px) {
    display: none;
  }
`;

export const SecondaryTitle = styled.h2`
  margin: 0;
`;
