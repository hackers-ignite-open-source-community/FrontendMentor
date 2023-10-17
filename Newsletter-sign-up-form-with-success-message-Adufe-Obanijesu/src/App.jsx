import { useState } from "react";

// components
import Subscribe from "./components/Subscribe";
import SuccessMessage from "./components/SuccessMessage";

function App() {
  // subscribed state
  const [isSubscribed, setIsSubscribed] = useState(false);

  const subscribe = () => {
    setIsSubscribed(true);
  };

  return (
    <main className="h-screen w-screen flex items-center justify-center">
      {!isSubscribed ? (
        <Subscribe subscribe={subscribe} />
      ) : (
        <SuccessMessage setIsSubscribed={setIsSubscribed} />
      )}
    </main>
  );
}

export default App;
