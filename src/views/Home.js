import React from "react";

import { Link } from "react-router-dom";

import categories from "../__data__/categories";

function Home() {
  return (
    <div>
      <h1>Home</h1>

      {categories.map(({ id, name, slug }) => {
        return (
          <Link key={id} to={`/category/${slug}`}>
            {name}
            <br />
          </Link>
        );
      })}
    </div>
  );
}

export default Home;
