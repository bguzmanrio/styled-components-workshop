import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import 'styledComponents/global';
import { MainTitle, TitleContent } from 'styledComponents/titles';
import { MainImage } from 'styledComponents/mainImage';
import { Container } from 'styledComponents/appContainer';
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

class App extends React.Component {
  state = {
    theme: 'BaseTheme'
  };

  handleThemeChange = ({target}) => {
    this.setState({
      theme: target.value
    });
  };

  render () {
    return (
      <ThemeProvider theme={themes[this.state.theme]}>
        <div>
          <MainTitle>
            <MainImage src='https://www.styled-components.com/static/logo.png'/>
            <TitleContent>Styled components Kata</TitleContent>
            <select value={this.state.theme} onChange={this.handleThemeChange} >
              {Object.keys(themes).map(theme => (
                <option key={theme} value={theme}>{theme}</option>
              ))}
            </select>
          </MainTitle>
          <Container>
            <Tabs tabs={tabsConfig}/>
          </Container>
        </div>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#demo'));
