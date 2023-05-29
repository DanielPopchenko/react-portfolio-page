import React from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../fakeAPI';

import { CardWrapper } from './Product.styled';
import { Container } from './Product.styled';

export default function ProductsList() {
  const products = getProducts();
  return (
    <main>
      <Container>
        {products.map((product) => (
          <CardWrapper key={product.id}>
            <Link to={`${product.id}`}>
              <img
                width="300px"
                height="100%"
                src="https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651"
                alt="products"
              />
            </Link>
          </CardWrapper>
        ))}
      </Container>
    </main>
  );
}
