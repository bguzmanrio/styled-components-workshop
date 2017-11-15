import React from 'react';
import { SecondaryTitle } from 'styledComponents/titles';

export function Exercise () {
  return (
    <div className='content'>
      <SecondaryTitle>Part 2: <i>Get your hands to work! </i></SecondaryTitle>
      <div className='separator'></div>
      <div>
        <p>
          Now you must have several elements using different styles based on the state or the role...
        </p>
        <p>
          Turn those role into interpolated props in your styled components!
        </p>
      </div>
    </div>
  );
}
