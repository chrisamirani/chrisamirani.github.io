import "./App.css";
import Spacer from "./components/Spacer";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Philosophy from "./components/philosophy/Philosophy";
import Projects from "./components/projects/Projects";
import Toolbar from "./components/toolbar/Toolbar";
import Nav from "./components/top-nav/Nav";

function App() {
  return (
    <div className='App'>
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Philosophy />
      <Spacer height={200} />
      <Toolbar />
      <p style={{ textAlign: "center", marginBottom: 0 }}>Made with ❤️ By MC</p>
    </div>
  );
}

export default App;
