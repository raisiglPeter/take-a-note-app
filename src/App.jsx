import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

import dummy_data from "../src/data/dummy-data.json";

function App() {
  return (
    <div className="flex flex-col justify-between w-full h-screen overflow-hidden">
      <Header />
      <Main data={dummy_data} />
      <Footer />
    </div>
  );
}

export default App;
