import '../styles/thirdFeature.scss';
import safe from '../assets/safe.png';
import check_code from '../assets/check_code.png';

const ThirdFeature = () => {
  return (
    <div className='third-feature'>
      <div className='list'>
        <ul>
          <li>
            ShieldQL gives you the tools to sanitize incoming GraphQL queries to
            prevent potential malicious operations and protect your backend from
            excessively deep and excessively long queries used in
            denial-of-service attacks.
          </li>
        </ul>
      </div>
      <div className='images'>
        <img src={check_code} alt='check_code image' />
        <img src={safe} alt='safe image' />
      </div>
    </div>
  );
};

export default ThirdFeature;
