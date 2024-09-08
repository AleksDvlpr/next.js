import { notFound } from 'next/navigation';
import { useTranslation } from '@/app/i18n';
import BackButton from '@/app/client/BackButton';
import HOST from '@/app/[lng]/constants';
import styles from '@/app/[lng]/styles.module.css';

async function fetchUser(id) {
  const res = await fetch(`${HOST}/api/users`);
  const users = await res.json();
  return users.find((user) => user.id === +id);
}

export default async function User({ params: { id, lng } }) {
  const { t } = await useTranslation(lng);
  const user = await fetchUser(id);

  if (!user) {
    notFound();
  }

  return (
    <div>
      <h1 className={styles.title}>{t('userData')}</h1>
      <h1>
        {t('user')}: {user?.name}
      </h1>
      <p>Email: {user?.email}</p>
      <br />
      <BackButton back={t('back')} />
    </div>
  );
}
