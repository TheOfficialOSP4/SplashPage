import Navigation from './Navigation.tsx';
import Shieldql from './Shieldql.tsx';
import Redirect from './Redirect.tsx';
import Team from './Team.tsx';
import Features from './Features.tsx';

import '../styles/app.scss';
import '../styles/main.scss';
import '../styles/description.scss';

const App = () => {
  return (
    <div className='grid-container'>
      <Navigation />
      <Shieldql />
      <div className='description'>
        <p>Secure your GraphQL APIs with ShieldQL.</p>
      </div>
      <Redirect />
      <Team />
      <Features />
    </div>
  );
};

export default App;
