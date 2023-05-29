import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../../fakeAPI';

export default function ProductDetails() {
  const { id } = useParams();
  // const params = useParams();
  const product = getProductByID(id);

  // console.log(params);
  return (
    <main>
      <img
        src="https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1638557435572-UYISRNGX323H0CMYA0XM/iPhone+13.png?format=1000w"
        width="300px"
        heihgt="400px"
        alt="iphone"
      />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sunt excepturi nesciunt iusto dignissimos
          assumenda ab quae cupiditate a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis atque fuga
          dolore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit suscipit quisquam incidunt commodi
          fugiat aliquam praesentium ipsum quos unde voluptatum?
        </p>
      </div>

      <ul>
        <li>
          <Link to="about">About product</Link>
        </li>
      </ul>

      <Outlet />
    </main>
  );
}
