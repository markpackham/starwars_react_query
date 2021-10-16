import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Planets />
        <People />
      </div>
    </div>
  );
}

export default App;
