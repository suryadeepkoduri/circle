import { BackgroundBeams } from "./components/ui/background-beams";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Welcome to Circle
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto md:text-lg my-2 text-sm text-center relative z-10">
            You’ve arrived a little early — we’re still building something
            great. Come back soon!
          </p>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}

export default App;
