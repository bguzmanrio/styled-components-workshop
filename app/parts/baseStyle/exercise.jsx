import React from 'react';
import { SecondaryTitle } from 'styledComponents/titles';

export function Exercise () {
  return (
    <div className='content'>
      <SecondaryTitle>Part 1: <i>Get your hands to work! </i></SecondaryTitle>
      <div className='separator'></div>
      <div>
        <p>
          What we are going to do to begin is to migrate the HTML components and CSS classes to some new styled-component
        </p>
        <p>
          In order to achieve that, you will have to overcome the CSS cascading inheritance and use the composition of React components
        </p>
      </div>
    </div>
  );
}
