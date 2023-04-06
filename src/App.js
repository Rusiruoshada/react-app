import './index.css';
import Home from './components/home'


function App() {

  return (
    <div className="App">
      <h1>My Todos</h1>
      {/* <Navbar /> */}
      <div className="content">
        <Home titile="Learn react"/>
        <Home titile="Master React"/>
        <Home titile="Explore the world"/>
      </div>
    </div>
  )
}

export default App;
