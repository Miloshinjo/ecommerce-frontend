import React from "react";
import {useParams} from "react-router-dom";

import categories from "../__data__/categories";

function Product() {
    const {slug} = useParams();

    const product = categories.flatMap(c => c.products).find(p => {
        return p.slug === slug;
    });

    return (<div><h1>Product {product.name}</h1></div>);
}

export default Product;
