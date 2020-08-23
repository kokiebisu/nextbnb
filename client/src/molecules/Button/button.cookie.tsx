import React from 'react';
import styled from 'styled-components';
import { Button, Text } from 'atoms';
import { colors, sizes } from 'styles';
import { CustomProps } from 'molecules/Button';
import theme from 'styled-theming';
import { darken } from 'polished';

const primary = theme('mode', {
  light: darken(0.25, colors.gray),
});

const Wrapper = styled(Button)`
  padding: 14px 20px;
  font-size: 16px;
  letter-spacing: 1.1;
  font-weight: 300;
  white-space: nowrap;
  min-width: none;
  margin-top: 25px;

  &.inverse {
    border: 1px solid ${primary};
    background-color: transparent;
  }
  &.normal {
    color: ${colors.white};
    background-color: ${primary};
  }
  @media ${sizes.lg} {
    min-width: 125px;
    width: 100%;
    margin-top: initial;
  }
`;

export default ({ inverse, name, ...props }: CustomProps) => {
  return (
    <Wrapper className={inverse ? 'inverse' : 'normal'} {...props}>
      <Text>{name}</Text>
    </Wrapper>
  );
};
