import ItemCard from "./component/item_card";
import MyAppBar from "./component/app_bar";

import { BarIce } from "./data/ice_data";

import './App.css';


function App() {
  return (
    <div className="App">
      
      <MyAppBar />

      <div>

        <ItemCard {...BarIce}/>

      </div>

    </div>
  );
}

export default App;
