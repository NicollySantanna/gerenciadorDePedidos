import React from "react";
import Input from "../../components/Input/InputSearch.jsx";
import Logo from "../../components/Logo/Logo";
import CardFood from "../../components/CardFood/CardFood.jsx";

const Home = () => {
  return (
    <div>
      <header>
        <Logo />
        <Input />
      </header>

      <main>
        <CardFood/>
      </main>

      <nav></nav>
    </div>
  );
};

export default Home;
