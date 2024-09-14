import Navigation from './Navigation.tsx';
import Shieldql from './Shieldql.tsx';
import Redirect from './Redirect.tsx';
import Team from './Team.tsx';
import Description from './Description.tsx';
import Features from './Features.tsx';

import '../styles/main.scss';

import '../styles/app.scss';

const App = () => {
  return (
    <div className='grid-container'>
      <Navigation />
      <Shieldql />
      <Description />
      <Redirect />
      <Team />
      <Features />
    </div>
  );
};

export default App;
