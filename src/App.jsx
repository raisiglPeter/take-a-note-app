import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

// src/App.jsx
function App() {
  return (
    <div className="flex flex-col justify-between w-full h-screen overflow-hidden">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
