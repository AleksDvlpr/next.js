'use client';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from '../lib/store/features/counterSlice';
import { increment } from '../lib/store/features/counterSlice';
import { StyledButton } from '@/app/client/styles';

export default function Div({ back }) {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <>
      <div>{count}</div>
      <StyledButton onClick={() => dispatch(increment())}>
        Increment
      </StyledButton>
    </>
  );
}
