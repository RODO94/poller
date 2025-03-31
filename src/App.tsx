import Header from "./components/page/Header/Header";
import Hero from "./components/page/Hero/Hero";
import { Toaster } from "./components/ui/sonner";
import Chat from "./components/page/ChatWindow/ChatWindow";
import MessageInput from "./components/page/MessageInput/MessageInput";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Chat />
      <MessageInput />
      <Toaster />
    </>
  );
}

export default App;
