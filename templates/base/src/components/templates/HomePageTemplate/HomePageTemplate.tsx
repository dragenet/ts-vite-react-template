import { ReactComponent as ReactLogo } from '~/assets/react.svg';

import { BackgroundWrapper, StyledH1 } from './parts';

export const HomePageTemplate = () => {
  return (
    <BackgroundWrapper>
      <ReactLogo />
      <StyledH1>Hello!</StyledH1>
    </BackgroundWrapper>
  );
};
