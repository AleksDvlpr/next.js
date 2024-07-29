import Link from 'next/link';
import HOST from '@/app/constants';

async function fetchUsers() {
  const res = await fetch(`${HOST}/api/users`, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function Home() {
  const users = await fetchUsers();

  return (
    <div>
      <h1>List users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
