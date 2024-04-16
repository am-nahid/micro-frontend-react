import './App.css';
import FirstComp from 'federation_provider/app'
import SecondComp from 'federation_provider_2/app'
import style from './mainApp.module.css'

const App = () => {
  return (
    <div>
      <nav className={style.navBar}>
        <div className='home'>Home</div>
        <div className={style.navRight}>
          <div>Menu</div>
          <div>About</div>
        </div>
      </nav>
      <div className={style.bodyCntr}>
          <div  className={style.card}>
            <FirstComp/>
          </div>
          <div  className={style.card}>
            <SecondComp/>
          </div>
      </div>
     
    </div>
  );
};

export default App;
