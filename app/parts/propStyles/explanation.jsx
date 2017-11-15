import React from 'react';
import {Code} from 'components/Code';
import { SecondaryTitle } from 'styledComponents/titles';

export function Explanation () {
  return (
    <div className='content'>
      <SecondaryTitle>Part 2: <i>Interpolating props in our styled-components</i></SecondaryTitle>
      <div className='separator'></div>
      <h3>How to use props in our component</h3>
      <Code>
        {`
        import styled from 'styled-components';

        const Button = styled.button\`
          display: flex;
          border: 1px solid #007bff;
          border-radius: 3px;
          cursor: pointer;
          background-color: $\{props => props.secondary ? 'white' : '#007bff'\};
          color: $\{props => props.secondary ? '#007bff' : 'white'\};
        \`;

        const MyComponent = () => (
          <div>
            <Button>Primary Button!</Button>
            <Button secondary>Primary Button!</Button>
          </div>
        )
        `}
      </Code>
      <p>
        You can interpolate props inside your styled component. This way you can go beyond!
      </p>
      <p><b>THIS IS WHY IT IS CALLED CSS IN JS, or JSS</b></p>
      <div className='separator'></div>
    </div>
  );
}
