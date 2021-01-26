import React from "react";

import "./styles.scss";

import ItemList from "../../components/ItemList/ItemList";

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Supermarket list</h1>
      </header>
      <main className="home-main">
        <ItemList />
      </main>
    </div>
  );
};

export default Home;
