// LeftNav and RightNav in here
import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';
import '../styles/navigation.scss';

// creates the top navigation bar containing left and right nav
const Navigation = () => {
  return (
    <div className='navigation'>
      <LeftNavigation />
      <RightNavigation />
    </div>
  );
};

export default Navigation;
