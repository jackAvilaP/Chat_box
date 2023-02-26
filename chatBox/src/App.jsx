import MainList from "./components/List/MainList";
import Chat from "./components/mainChat/Chat";
import NavBar from "./components/Nav/NavBar";

// https://www.figma.com/file/RkPV21ng8Npkh2MJdTPoat/Direct-messaging-app-(Community)?node-id=0%3A1&t=Qw3OXh8Qn1tU2uz5-0

function App() {
  return (
    <div className="root">
      {/* NavBar left */}
      <section>
        <NavBar />
      </section>

      {/* Section list chats, search and people */}
      <section  className="ml-9">
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
