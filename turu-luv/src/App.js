
import './App.css';
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";

function App() {
  return (
    // BEM class naming concention
    <div className="app">
      <Header/>
      <TinderCards/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
