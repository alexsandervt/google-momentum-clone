import Time from "./components/Time";
import DateToday from "./components/Date";
import Quote from "./components/Quote";
import { Weather } from "./components/Weather";

const App = () => {
  return (
    <div>
      <h2>Olá</h2>
      <Weather />
      <Time />
      <DateToday />
      <Quote />
    </div>
  );
};
export default App;
