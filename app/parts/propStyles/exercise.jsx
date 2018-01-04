import React from 'react';
import { SecondaryTitle } from 'styledComponents/titles';
import { Separator } from 'styledComponents/separator';

export function Exercise () {
  return (
    <div className='content'>
      <SecondaryTitle>Part 2: <i>Get your hands to work! </i></SecondaryTitle>
      <Separator />
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
