import React from 'react';
import {Code} from 'components/Code';
import { SecondaryTitle } from 'styledComponents/titles';
import { Separator } from 'styledComponents/separator';

export function Explanation () {
  return (
    <div className='content'>
      <SecondaryTitle>Part 1: <i>The base of Styled-Components</i></SecondaryTitle>
      <Separator />
      <h3>What is a styled-component?</h3>
      <Code>
        {`
        import styled from 'styled-components';

        const Container = styled.div\`
          display: flex;
          border: 1px solid red;
        \`;

        export const RedContainer = styled(Container)\`
          background-color: red;
        \`;

        export const GreenContainer = Container.extend\`
          background-color: green;
        \`;

        export const GreenContainer = Container.extend\`
          background-color: green;
        \`;
        `}
      </Code>
      <p>
        Each styled component is just a React dumb component that will act as a customization layer.
      </p>
      <p>
        The upside of this is that the HTML element will be tighted to it's style
      </p>
      <p>
        It supports almost any CSS property, as well as class inheritance as seen in the example above.
      </p>
      <p>
        The first one <b>styled(Container)</b> is using the styled factory which will create a new styled component.
        The second one <b>Container.extend</b> will create a new stylesheet without generating two components.
      </p>
      <p>
        It is possible to use the first option to wrap a non styled-component with a styled-component definition.
      </p>
      <p>
        Extra! It also adds vendor prefixes!
      </p>
      <Separator />
      <h3>Can I reuse the styles for a different HTML tag?</h3>
      <Code>
        {`
        import styled from 'styled-components';

        const Container = styled.div\`
          display: flex;
          border: 1px solid red;
        \`;

        const InlineContainer = Container.withComponent('span');
        `}
      </Code>
      <p>
        If you use the <b>.withComponent()</b> method, it will create a new component using the HTML tag you have passed as parameter
      </p>
      <Separator />
      <h3>I need to apply a style to every element on my app...</h3>
      <Code>
        {
          `
            import {injectGlobal} from 'styled-components';

            injectGlobal\`

                * {
                  font-family: Ubuntu;
                }

                body, html {
                  margin: 0;
                  witdth: 100%;
                  font-size: 14px;
                }

            \`
          `
        }
      </Code>
      <p><b>injectGlobal</b> is what you need!</p>
      <Separator />
      <h3>What about media queries?</h3>
      <Code>
        {
          `
          import styled from 'styled-components';

          const Container = styled.div\`
            display: flex;
            border: 1px solid red;

            @media (max-width: 600px) {
              flex-direction: column;
            }
          \`;
          `
        }
      </Code>
      <p>Media queries are just css, so it is transparent!</p>
      <Separator />
      <p>
        So, after this briefing, you must be prepared to start with the first exercise. GL
      </p>
    </div>
  );
}
