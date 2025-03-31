import Header from "./components/page/Headers/Headers";
import Hero from "./components/page/Hero/Hero";
import { Toaster } from "./components/ui/sonner";
import Chat from "./components/page/Chat/Chat";

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
