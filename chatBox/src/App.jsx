// https://www.figma.com/file/RkPV21ng8Npkh2MJdTPoat/Direct-messaging-app-(Community)?node-id=0%3A1&t=Qw3OXh8Qn1tU2uz5-0

import MainList from "./components/List/MainList";
import Chat from "./components/mainChat/Chat";
import NavBar from "./components/Nav/NavBar";

//import socket.io-client
import io from 'socket.io-client';

//object return socket
const socket = io('http://localhost:4000')


function App() {
  return (
    <div className="root">
      {/* NavBar left */}
      <section>
        <NavBar />
      </section>

      {/* Section list chats, search and people */}
      <section className="ml-9">
        <MainList />
      </section>

      {/* chat personal */}
      <section>
        <Chat />
      </section>
    </div>
  );
}

export default App;
