import React from "react";

import ItemList from "../../components/ItemList/ItemList";

const Home: React.FC = () => {
  return (
    <div>
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
