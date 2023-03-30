import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.darkGrey};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledH1 = styled.h1`
    color: ${({ theme }) => theme.colors.white}}
`;
