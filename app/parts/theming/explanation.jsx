import React from 'react';
import {Code} from 'components/Code';
import { SecondaryTitle } from 'styledComponents/titles';

export function Explanation () {
  return (
    <div className='content'>
      <SecondaryTitle>Final part: <i>Theming in Styled-Components</i></SecondaryTitle>
      <div className='separator'></div>
      <h3>We have several themes in our app...</h3>
      <Code>
        {`
        import React from 'react';
        import ReactDOM from 'react-dom';
        import styled, {ThemeProvider} from 'styled-components';

        const myTheme = {
          primaryColor: '#ccc',
          secondaryColor: '#fff'
        };

        const Container = styled.div\`
          display: flex;
          border: 1px solid;
          border-color: $\{props => props.theme.primaryColor\};
        \`;

        const App = () => (
          <ThemeProvider theme={myTheme}>
            <Container>
              ...
            </Container>
          </ThemeProvider>
        )

        ReactDOM.render(<App />, document.querySelector('...'));

        `}
      </Code>
      <p>
        The example above is using the <b>ThemeProvider</b> from Styled-Components.
      </p>
      <p>
        This will pass within the props a new prop called theme. This prop will only be received in the styled components
      </p>
      <p>
        It will contain the variables inside the theme passed to the ThemeProvider
      </p>
      <div className='separator'></div>
      <h3>I need to apply different themes in my app...</h3>
      <Code>
        {`
          ...
          const myTheme = {
            primaryColor: '#ccc',
            secondaryColor: '#fff'
          };

          const mySecondaryTheme = {
            primaryColor: 'blue',
            secondaryColor: 'red'
          };

          const App = () => (
            <ThemeProvider theme={myTheme}>
              <Container>
                ...
                <ThemeProvider theme={mySecondaryTheme}>
                  ...
                </ThemeProvider>
              </Container>
            </ThemeProvider>
          );
          ...
        `}
      </Code>
      <p>
        You can use several ThemeProviders inside your hierarchy.
      </p>
      <p>
        The styled components that are descendants of those ThemeProviders will only receive the theme of the closest one
      </p>
    </div>
  );
}
