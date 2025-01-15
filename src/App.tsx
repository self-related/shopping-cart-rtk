import { Outlet } from 'react-router';
import './App.css'

function App() {
  return (
    <>
      <nav>Navbar</nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App
