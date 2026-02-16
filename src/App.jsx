// src/App.jsx
import { useState } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <main>
        <h1 className="container">React Homework 6</h1>

        <section>
          <div className="container">
            <h2>Задача 1: Профиль пользователя</h2>
            <UserProfile />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
