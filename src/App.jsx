import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TasksList from "./components/TasksList";
import TasksContextProvider from "./contexts/TasksContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <TasksContextProvider>
      <ToastContainer />
      <Navbar />
      <Banner />
      <TasksList />
      <Footer />
    </TasksContextProvider>
  );
}

export default App;
