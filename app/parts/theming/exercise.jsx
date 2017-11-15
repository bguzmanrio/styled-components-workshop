import React from 'react';
import { SecondaryTitle } from 'styledComponents/titles';

export function Exercise () {
  return (
    <div className='content'>
      <SecondaryTitle>Final Part: <i>Get your hands to work! </i></SecondaryTitle>
      <div className='separator'></div>
      <div>
        <p>You made it to the end! Now you will have to apply everything you have learnt in the way</p>
        <p>What I want you to do now is to add a theme selector for this app. You can find the themes in the folder named themes</p>
        <p>I suggest you to use a simple select and play with the state... Good luck!</p>
      </div>
    </div>
  );
}
