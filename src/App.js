import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">

     {/* <h1>App Component</h1> */}

     {/* 
         -> Yahan User hamara aik component ha jisko ham 'App' component se data pass kar rahay hain 
         -> 'User' component pe ham props ke throw is data ko receive karian gay or show kar dain gay
         -> without redux props ke throw esay data travel karta 
     */}

     <User data = {{name : 'Fardeel azhar', age : '21', title : "Android Engineer"}}/>

     
    </div>
  );
}

export default App;
