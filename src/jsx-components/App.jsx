import Navbar from './Navbar';
import Search from './Search';
import '../stylesheets/index.css';
import { SkeletonTheme } from 'react-loading-skeleton';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <SkeletonTheme baseColor= "#E8E9EB" highlightColor='#dfdddd'>
        <div className='main-container'>
          <div className='container-content'>
            <h1 className='title'>Find your meal for tonight!</h1>
            <Search />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default App;
