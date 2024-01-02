
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
 
  return (
    <main className='flex'>
      <Sidebar />
      <div className= 'flex flex-col flex-1 relative'>
        <Navbar />
      </div>
    </main>
  )
}

export default App
