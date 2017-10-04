import React from 'react';
import {Code} from 'components/Code';

export function Explanation () {
  return (
    <div className='content'>
      <h2>Part 3: <i>Animating out styled components!</i></h2>
      <div className='separator'></div>
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
