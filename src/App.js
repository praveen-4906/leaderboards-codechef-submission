import logo from './logo.svg';
import './App.css';
import TopBar from './Modules/TopBar';
import SwitchBar from './Modules/SwitchBar';
import TheMain from './Modules/TheMain';

function App() {
  return (
    <div className='bg-[#e7f0fe] min-h-[100vh]'>
      <TopBar />
      <SwitchBar />
      <TheMain/>
    </div>
  );
}

export default App;
