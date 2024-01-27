import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TasksList from "./components/TasksList";
import TasksContextProvider from "./contexts/TasksContext";

function App() {
  return (
    <TasksContextProvider>
      <Navbar />
      <Banner />
      <TasksList />
      <Footer />
    </TasksContextProvider>
  );
}

export default App;
