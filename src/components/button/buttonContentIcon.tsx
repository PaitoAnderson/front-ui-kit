import React, {FC} from 'react';
import styled, {css} from 'styled-components';

import {renderFirstIconOnly} from '../../helpers/renderHelpers';

/*
 * Props.
 */

interface ButtonContentIconProps {
  /** Position of the icon. If you want an icon in the center, use ButtonContent and Icon. */
  position?: 'left' | 'right';
  /** Icon to render, will only render the first Icon passed in. */
  children: React.ReactNode;
}

/*
 * Style.
 */

interface StyledContentIconDivProps {
  $position: 'left' | 'right';
}

const StyledContentIconDiv = styled.div<StyledContentIconDivProps>`
  ${p => {
    if (p.$position === 'left')
      return css`
        grid-area: left-content;
        margin-right: 8px;
      `;
    return css`
      grid-area: right-content;
      margin-left: 8px;
    `;
  }}
  
`;

/*
 * Component.
 */

export const ButtonContentIcon: FC<ButtonContentIconProps> = ({children, position = 'left'}) => (
  <StyledContentIconDiv $position={position}>{renderFirstIconOnly(children)}</StyledContentIconDiv>
);
