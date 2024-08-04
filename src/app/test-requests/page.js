import RequestButtons from '@/app/client/RequestButtons';
import styles from '@/app/styles.module.css';

export default async function Home() {
  return (
    <div>
      <h1 className={styles.title}>Testing request methods</h1>
      <RequestButtons />
    </div>
  );
}
