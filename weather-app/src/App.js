import { WeatherProvider } from "./context/weatherContext";
import './App.css';
import Today from "./components/Today/Today";
import Header from "./components/Header/header";
import Search from "./components/Search/search";

function App() {
  return (
    <WeatherProvider>
      <Header />
      <Search />
      <Today />
    </WeatherProvider>
  );
}

export default App;
