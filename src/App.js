import "./App.css";
import DashboardDisplay from "./reducer/Reducer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Preqin Data Arena</h1>
      <section style={{marginTop: 40}}>
        <DashboardDisplay />
      </section>
    </div>
  );
}

export default App;
