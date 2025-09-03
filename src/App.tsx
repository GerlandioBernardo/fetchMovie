import { ToastContainer } from "react-toastify";
import Modal from "./components/Modal";
import { ModalProvider } from "./context/ModalContext";
import Home from "./pages/home/Home";
import "react-toastify/dist/ReactToastify.css";
 
function App() {
  return(
    <div className="min-h-screen bg-black">
      <ModalProvider>
          <Home/>
          <Modal/>
      </ModalProvider>
      <ToastContainer/>
    </div>
  )
}

export default App
