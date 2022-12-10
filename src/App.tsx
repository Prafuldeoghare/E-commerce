import { useState } from "react";
import { Provider } from "react-redux";
import PrimaryHeader from "./Components/Headers/PrimaryHeader";
import SecondaryHeader from "./Components/Headers/SecondaryHeader";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import { store } from "./Store/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-auto">
        <div className="">
          <header>
            <PrimaryHeader />
            <SecondaryHeader />
          </header>
        </div>
        <main className="pt-5">
          <Home />
        </main>
      </div>
    </Provider>
  );
}

export default App;
