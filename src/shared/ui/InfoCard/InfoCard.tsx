import React from 'react';
import styles from './InfoCard.module.css';

export interface IInfoItem {
  label: string;
  value: React.ReactNode;
}

interface IInfoCardProps {
  title: string;
  items: IInfoItem[];
}

function InfoCard({ title, items }: IInfoCardProps) {
  return (
    <section className={styles.card}>
      <h3 className={styles.title}>{title}</h3>

      {items.map((item) => (
        <div key={item.label} className={styles.infoGroup}>
          <span className={styles.label}>{item.label}</span>
          <div className={styles.value}>{item.value}</div>
        </div>
      ))}
    </section>
  );
}

export default InfoCard;
