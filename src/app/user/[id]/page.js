import { notFound } from 'next/navigation';
import BackButton from '@/app/client/BackButton';
import HOST from '@/app/constants';
import styles from '@/app/styles.module.css';

async function fetchUser(id) {
  const res = await fetch(`${HOST}/api/users`);
  const users = await res.json();
  return users.find((user) => user.id === +id);
}

export default async function User({ params }) {
  const user = await fetchUser(params.id);

  if (!user) {
    notFound();
  }

  return (
    <div>
      <h1 className={styles.title}>User data</h1>
      <h1>Пользователь: {user?.name}</h1>
      <p>Email: {user?.email}</p>
      <br />
      <BackButton />
    </div>
  );
}
