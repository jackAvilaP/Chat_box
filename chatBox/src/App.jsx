
import './App.css'
import MainList from './components/List/MainList'
import NavBar from './components/Nav/NavBar'

// https://www.figma.com/file/RkPV21ng8Npkh2MJdTPoat/Direct-messaging-app-(Community)?node-id=0%3A1&t=Qw3OXh8Qn1tU2uz5-0

function App() {
  return (
    <div className='flex flex-row'>
      {/* NavBar left */}
      <section className='w-screen'>
        <NavBar />
      </section>

      {/* Section list chats, search and people */}
      <section>
        <MainList />
      </section>

      {/* chat personal */}
      <section>

      </section>
    </div>
  )
}

export default App
