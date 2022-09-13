import './App.css';
import { StockChanger } from './components/stock-changer';
import { StockDisplay } from './components/stock-display';
import { AppState } from './state/app.state';

function App() {

  const state: AppState = {
    stockValue: 0,
  }

  return (
    <div className="App">
      <header className="App-header">
        <StockChanger appState={state} ></StockChanger>
        <StockDisplay appState={state} ></StockDisplay>
      </header>
    </div>
  );
}

export default App;
