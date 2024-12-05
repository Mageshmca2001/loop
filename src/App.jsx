import React, { useState, useEffect } from "react";
import LoadingPage from "./components/LoadingPage";
import MainPage from "./components/MainPage";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {isLoading ? <LoadingPage /> : <MainPage />}
    </>
  );
};

export default App;
