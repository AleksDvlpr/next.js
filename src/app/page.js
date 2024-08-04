import Link from 'next/link';
import HOST from '@/app/constants';
import styles from './styles.module.css';

/* Управление state-management
 * Ранее для управления state-management использовали getInitialProps, но сейчас этот метод считается depricated.
 * Вместо него стали использовать getServerSideProps и getStaticProps. Но с 13-й версии Next.js вместо них используется
 * метод fetch в серверных компонентах.
 * Можно получить данные в серверном компоненте с помощью fetch, затем заполнить state и вывести его в jsx или передать в клиентские компоненты.
 * */
async function fetchUsers() {
  const res = await fetch(`${HOST}/api/users`, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function Home() {
  const users = await fetchUsers();

  return (
    <>
      <h1 className={styles.title}>List users</h1>
      <ul>
        {users.map((user) => (
          <li className={styles.listItem} key={user.id}>
            {user.id}. <Link href={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
