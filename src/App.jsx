import Header from "@/layout/Header";
import Main from "@/layout/Main";
import Footer from "@/layout/Footer";
import SidebarDrawer from "@/components/SidebarDrawer";

import dummy_data from "@/data/dummy-data.json";

function App() {
  return (
    <SidebarDrawer data={dummy_data}>
      <Header />
      <Main data={dummy_data} />
      <Footer />
    </SidebarDrawer>
  );
}

export default App;
