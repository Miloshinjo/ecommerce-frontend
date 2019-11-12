import React from "react";
import { useParams, Link } from "react-router-dom";

import categories from "../__data__/categories";

function Category() {
  const { slug } = useParams();

  const { products, name } = categories.find(category => {
    return category.slug === slug;
  });

  return (
    <div>
      <h1>Category {name}</h1>
      {products.map(({ id, name, slug }) => {
        return (
          <Link key={id} to={`/products/${slug}`}>
            {name}
            <br />
          </Link>
        );
      })}
    </div>
  );
}

export default Category;
