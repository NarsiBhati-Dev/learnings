import React from "react";
import Sidebar from "./components/sidebar";
import AboutCard from "./components/about-card";
import CalCard from "./components/cal-card";
import OptionCard from "./components/option-card";

const App = () => {
  return (
    <main className="flex">
      <Sidebar />

      <section className="bg-white w-full h-screen">
        <div className="h-56 bg-black md:block hidden"></div>
        <div className="grid grid-cols-12 gap-2">
          <AboutCard />
          <CalCard />
          <OptionCard />
        </div>
      </section>
    </main>
  );
};

export default App;
