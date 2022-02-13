import { Fragment } from 'react';
import { Routing } from 'router';
import { GlobalStyle } from 'styles/global';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <div>
        <Routing />
      </div>
    </Fragment>
  );
};
export default App;
