import React from 'react';
import {Link} from 'styledComponents/link';
import { Separator } from 'styledComponents/separator';

export function Introduction () {
  return (
    <div className='content'>
      <p>This kata is divided in four parts.</p>
      <p>Each part will have an explanation and an exercise</p>
      <p>We will go through the explanation together and then you will have 30 minutes to resolve the exercise</p>
      <p>Each exercise is based on the result of the previous exercise, so we have to build a solid base</p>
      <p>Good luck!</p>
      <Separator />
      <p>Some useful resources:</p>
      <Link href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/'>Guide to flexbox</Link>
      <Link href='https://www.styled-components.com/docs/basics'>Styled-Components docs</Link>
    </div>
  );
}
