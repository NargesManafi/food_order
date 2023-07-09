import '../STYLE/menu.css';

import Card from './Card'
import {data} from '../main';

const Menu = () => {
    return (
      <div>
        <div className="menu">
          <h2>Our Menu</h2>
          <div className="card">
            {data.map((item) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Card link={item?.imageLink} header={item?.header} price={item?.price} id={item?.id}/>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  export default Menu;
  