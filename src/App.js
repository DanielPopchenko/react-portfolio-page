import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomeView from './pages/HomeView/HomeView';
import WorksView from './pages/WorksView/WorksView';
import ContactsView from './pages/ContactsView/ContactsView';
import NotFoundView from './pages/NotFoundView';
import Products from './pages/Products/Products';
import ProductDetails from './pages/Products/ProductDetails';
import AboutProduct from './pages/Products/AboutProduct';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* ! Атрибут index - чтобы компонент HomeView рендерить на тот же маршрут что и родителя ! */}
          <Route index element={<HomeView />}></Route>
          <Route path="works" element={<WorksView />}></Route>
          <Route path="contacts" element={<ContactsView />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="products/:id" element={<ProductDetails />}>
            <Route path="about" element={<AboutProduct />}></Route>
          </Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
