import { ReactComponent as ReactLogo } from '~/assets/react.svg';
import { useGetTimeQuery } from '~/store/apis/timeApi/timeApi';
import { useAppDispatch } from '~/store/hooks/useAppDispatch';
import { useAppSelector } from '~/store/hooks/useAppSelector';
import { increment, selectCount } from '~/store/slices/counter';

import { BackgroundWrapper, StyledButton, StyledClock, StyledH1, StyledSpan } from './parts';

export const HomePageTemplate = () => {
  const counterState = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const { data, isSuccess } = useGetTimeQuery(null);

  const handleIncrementClick = () => {
    dispatch(increment());
  };

  return (
    <BackgroundWrapper>
      <ReactLogo />
      <StyledH1>Hello!</StyledH1>
      <StyledSpan>{counterState}</StyledSpan>
      <StyledButton onClick={handleIncrementClick}>Increment</StyledButton>
      {isSuccess && <StyledClock>{data.timezone}</StyledClock>}
    </BackgroundWrapper>
  );
};
