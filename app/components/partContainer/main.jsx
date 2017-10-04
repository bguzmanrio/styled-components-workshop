import React from 'react';
import { Tabs } from 'components/Tabs';

export function PartContainer ({Explanation, Exercise}) {
  return (
    <div className='part-container'>
      <Tabs isSecondary={true} tabs={[{
        title: 'What is new?',
        content: <Explanation />
      }, {
        title: 'What to do?',
        content: <Exercise />
      }]} />
    </div>
  )
}
