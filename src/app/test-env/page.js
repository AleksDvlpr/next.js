import HOST from '@/app/constants';

export default async function TestEnv({ params }) {
  return <div>{HOST}</div>;
}
