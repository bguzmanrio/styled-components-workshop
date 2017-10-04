import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from 'components/Tabs';
import { PartContainer } from 'components/partContainer';
import { Introduction } from './parts/introduction/introduction';
import { Explanation as Part1Explanation } from './parts/baseStyle/explanation';
import { Exercise as Part1Exercise } from './parts/baseStyle/exercise';
import { Explanation as Part2Explanation } from './parts/propStyles/explanation';
import { Exercise as Part2Exercise } from './parts/propStyles/exercise';
import { Explanation as Part3Explanation } from './parts/animations/explanation';
import { Exercise as Part3Exercise } from './parts/animations/exercise';
import { Explanation as Part4Explanation } from './parts/theming/explanation';
import { Exercise as Part4Exercise } from './parts/theming/exercise';
import { themes } from './themes';

const tabsConfig = [{
  title: 'Introduction',
  content: <Introduction />
},{
  title: 'Part 1',
  content: <PartContainer Explanation={Part1Explanation} Exercise={Part1Exercise} />
},{
  title: 'Part 2',
  content: <PartContainer Explanation={Part2Explanation} Exercise={Part2Exercise} />
},{
  title: 'Part 3',
  content: <PartContainer Explanation={Part3Explanation} Exercise={Part3Exercise} />
},{
  title: 'Part 4',
  content: <PartContainer Explanation={Part4Explanation} Exercise={Part4Exercise} />
}];

function App () {
  return (
    <div>
      <h1>
        <img src='https://www.styled-components.com/static/logo.png'/>
        <span>Styled components Kata</span>
      </h1>
      <div className='app-container'>
        <Tabs tabs={tabsConfig}/>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#demo'));
