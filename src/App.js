import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./pages/catalog";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page-content">
        <Catalog />
      </div>

      <Footer />
    </div>
  );
}

export default App;

//  ** create a footer.jsx file on components folder, create the footer cmp (the function that returns and exports), on app.js import and render the footer
