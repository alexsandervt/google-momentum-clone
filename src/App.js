import { Weather } from "./components/Weather";
import Time from "./components/Time";
import DateToday from "./components/Date/";
import Quote from "./components/Quotes";

const App = () => {
  return (
    <div>
      <Weather />
      <Time />
      <DateToday />
      <Quote />
    </div>
  );
};
export default App;
