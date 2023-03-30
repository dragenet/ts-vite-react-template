import { ReactComponent as ReactLogo } from '~/assets/react.svg';
import { useGetTimeByTimeZoneQuery } from '~/store/apis/timeApi';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { increment, selectCount } from '~/store/slices/counter';

import { BackgroundWrapper, StyledButton, StyledClock, StyledH1, StyledSpan } from './parts';

export const HomePageTemplate = () => {
  const counterState = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const { data, isSuccess } = useGetTimeByTimeZoneQuery('UTC');

  const handleIncrementClick = () => {
    dispatch(increment());
  };

  return (
    <BackgroundWrapper>
      <ReactLogo />
      <StyledH1>Hello!</StyledH1>
      <StyledSpan>{counterState}</StyledSpan>
      <StyledButton onClick={handleIncrementClick}>Increment</StyledButton>
      {isSuccess && <StyledClock>{data}</StyledClock>}
    </BackgroundWrapper>
  );
};
