import { redirect } from 'next/navigation';

export default async function User({ params }) {
  const { id } = params;

  if (!id) {
    redirect('/');
  }
}
