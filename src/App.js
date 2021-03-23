
import './App.css';
import ProfilPhoto from './components/profile/ProfilPhoto';
import MyAddress from './components/profile/Address';
import FullName from './components/profile/FullName';

function App() {
  return (
    <div className="App">
     <FullName/>
      <ProfilPhoto />
      <MyAddress/>
      

    </div>
  );
}

export default App;
