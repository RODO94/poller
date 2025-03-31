import Header from "./components/page/Header/Header";
import Hero from "./components/page/Hero/Hero";
import { Toaster } from "./components/ui/sonner";
import Chat from "./components/page/ChatWindow/ChatWindow";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Chat />
      <Toaster />
    </>
  );
}

export default App;
