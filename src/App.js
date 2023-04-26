import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomeView from './pages/HomeView/HomeView';
import WorksView from './pages/WorksView/WorksView';
import ContactsView from './pages/ContactsView/ContactsView';
import NotFoundView from './pages/NotFoundView';

export default function App() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeView />} exact></Route>
          <Route path="/works" element={<WorksView />}></Route>
          <Route path="/contacts" element={<ContactsView />}></Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Routes>
      </div>
    </div>
  );
}
