import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../api/usersApi';
import styles from './UserDetails.module.css';
import type { IInfoItem } from '../../../../shared/ui/InfoCard/InfoCard';
import InfoCard from '../../../../shared/ui/InfoCard/InfoCard';

function UserDetails() {
  const { id } = useParams();
  const { data: user, isLoading, error } = useGetUserQuery(Number(id));

  if (isLoading) return <div>Loading...</div>;
  if (error || !user) return <div>Error</div>;

  const sections: { title: string; items: IInfoItem[] }[] = [
    {
      title: 'Личные данные',
      items: [
        { label: 'Email', value: user.email },
        { label: 'Телефон', value: user.phone },
        { label: 'Сайт', value: user.website },
      ],
    },
    {
      title: 'Адрес проживания',
      items: [
        { label: 'Город', value: user.address.city },
        { label: 'Улица', value: `${user.address.street}, ${user.address.suite}` },
        { label: 'Индекс', value: user.address.zipcode },
      ],
    },
    {
      title: 'Компания',
      items: [
        { label: 'Название', value: user.company.name },
        { label: 'Слоган', value: user.company.catchPhrase },
        { label: 'Сфера', value: user.company.bs },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>
        {user.name} <small>@{user.username}</small>
      </h1>
      <div className={styles.grid}>
        {sections.map((section) => (
          <InfoCard key={section.title} title={section.title} items={section.items} />
        ))}
      </div>
    </div>
  );
}

export default UserDetails;
