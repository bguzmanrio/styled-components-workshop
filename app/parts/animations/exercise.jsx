import React from 'react';
import { SecondaryTitle } from 'styledComponents/titles';

export function Exercise () {
  return (
    <div className='content'>
      <SecondaryTitle>Part 3: <i>Get your hands to work! </i></SecondaryTitle>
      <div>
        <p>
          What you have to do is to change the hover effects to cool animations using the keyframes interface from styled-components
        </p>
        <p>
          In order to achieve that, you will have to overcome the CSS cascading inheritance and use the composition of React components
        </p>
      </div>
    </div>
  );
}
