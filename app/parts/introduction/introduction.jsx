import React from 'react';

export function Introduction () {
  return (
    <div className='content'>
      <p>This kata is divided in four parts.</p>
      <p>Each part will have an explanation and an exercise</p>
      <p>We will go through the explanation together and then you will have 30 minutes to resolve the exercise</p>
      <p>Each exercise is based on the result of the previous exercise, so we have to build a solid base</p>
      <p>Good luck!</p>
      <div className='separator'></div>
      <p>Some useful resources:</p>
      <a href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/'>Guide to flexbox</a>
      <a href='https://www.styled-components.com/docs/basics'>Styled-Components docs</a>
    </div>
  );
}
