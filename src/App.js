import logo from './logo.svg';
import './App.css';

import Product from './components/Products';
import items from "./components/Apijsondata";
import Todoitem from "./TodoItems"
function App() {
const todoitems=items.map(it=><Todoitem key={it.id} items={it}/>)
return(
    <div className="App">
      <li keys={todoitems.toString()}>
      {todoitems}
      </li>
    </div>
  );
}
export default App;
