// src/components/UserProfile/index.jsx
import styles from './UserProfile.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { mockData } from './mockData';

const BASE_URL = 'https://randomuser.me/api/0.8';

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const url = `${BASE_URL}`;

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(url);

      if (!data?.results[0]?.user) throw new Error('Некорректные данные');

      console.log(data.results[0]);

      setUser(data.results[0].user);
    } catch (error) {
      console.log('Ошибка при загрузке:', error.message, '\nИспользуются моковые данные');
      const randomIndex = Math.floor(Math.random() * mockData.length);
      setUser(mockData[randomIndex]);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className={styles.card}>
      <h2 style={{ marginTop: 0 }}>User Profile</h2>
      <img
        src={user.picture?.medium}
        alt={`${user.name?.first} ${user.name?.last}`}
        style={{ borderRadius: '100%' }}
      />
      <p>
        {user.name?.first.toUpperCase()} {user.name?.last.toUpperCase()}
      </p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <button onClick={fetchUser}>Load new user</button>
    </div>
  );
}
