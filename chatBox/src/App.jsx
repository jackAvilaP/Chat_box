// https://www.figma.com/file/RkPV21ng8Npkh2MJdTPoat/Direct-messaging-app-(Community)?node-id=0%3A1&t=Qw3OXh8Qn1tU2uz5-0

import MainList from "./components/List/MainList";
import Chat from "./components/mainChat/Chat";
import NavBar from "./components/Nav/NavBar";

function App() {
  return (
    <div className="root">
      {/* NavBar left */}
      <NavBar />

      {/* Section list chats, search and people */}
      <MainList />

      {/* chat personal */}
      <Chat />
    </div>
  );
}

export default App;
