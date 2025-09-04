import { ToastContainer } from "react-toastify";
import Modal from "./components/Modal";
import { ModalProvider } from "./context/ModalContext";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Router/>
        <Modal />
      </ModalProvider>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
