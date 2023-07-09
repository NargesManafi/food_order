import '../STYLE/home.css';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <div className="home">
          <h2>Food Order</h2>
          <p>VEGAN FOOD A CLICK</p>
          <button>
            <Link className='link' to={'/menu'}>
              ORDER NOW
            </Link>
          </button>
        </div>
      </div>
    );
  };
  
  export default Home;
  