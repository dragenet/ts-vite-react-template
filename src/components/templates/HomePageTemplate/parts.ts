import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;
export const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const StyledClock = styled.span`
  position: fixed;
  top: 1em;
  right: 1em;
`;
