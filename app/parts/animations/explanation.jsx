import React from 'react';
import {Code} from 'components/Code';
import { SecondaryTitle } from 'styledComponents/titles';
import { Separator } from 'styledComponents/separator';

export function Explanation () {
  return (
    <div className='content'>
      <SecondaryTitle>Part 3: <i>Animating out styled components!</i></SecondaryTitle>
      <Separator />
      <Code>
        {`
        import styled, {keyframes} from 'styled-components';

        const enlarge = keyframes\`
        	from {
            transform: scaleX(1) scaleY(1);
        	}

          50% {
            transform: scaleX(1.5) scaleY(1.5);
          }

        	to {
        		transform: scaleX(1) scaleY(1);
        	}
        \`;

        const Container = styled.div\`
          animation: $\{enlarge\} 2s linear;
          border: 1px solid red;
        \`;
        `}
      </Code>
      <p>Styled components provides you with a <b>keyframes</b> method, which allows you to create named animations to apply to your components</p>

    </div>
  );
}
