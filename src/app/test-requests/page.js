import RequestButtons from '@/app/client/RequestButtons';

export default async function Home() {
  return (
    <div>
      <h1>Тестирование запросов к бекенду</h1>
      <RequestButtons />
    </div>
  );
}
