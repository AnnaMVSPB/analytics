import Competitors from "../Competitors/Competitors";
import Filters from "../Filters/Filters";
import ProjectTabs from "../ProjectTabs/ProjectTabs";
import TopBar from "../TopBar/TopBar";
import styles from "./app.module.css"

function App() {
  return (
    <div className="App">
     <TopBar/>
     <ProjectTabs/>
     <Filters/>
     <Competitors/>
    </div>
  );
}

export default App;
