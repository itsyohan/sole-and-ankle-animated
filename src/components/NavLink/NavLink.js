import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  transition: transform 300ms, color 200ms;
  display: inline-block;
`

const TopText = styled(Text)`
  ${Wrapper}:hover & {
    transform: translateY(-100%);
  }
`

const BottomText = styled(Text)`
  font-weight: 800;
  transform: translateY(100%);
  position: absolute;
  top: 0;
  left: 0;

  ${Wrapper}:hover & {
    transform: translateY(0%);
  }
`

export const NavLink = ({children, ...rest}) => {
  return (
    <Wrapper {...rest}>
      <TopText>{children}</TopText>
      <BottomText>{children}</BottomText>
    </Wrapper>
  )
}
