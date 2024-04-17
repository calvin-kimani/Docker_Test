import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Web from '/src/Routes/Web';

function App() {
  return (
    <>
      <BrowserRouter>
        <Web />
      </BrowserRouter>
    </>
  )
}

export default App
