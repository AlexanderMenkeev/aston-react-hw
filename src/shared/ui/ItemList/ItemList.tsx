import styles from './ItemList.module.css';

interface IWithId {
  id: number;
}

interface IListProps<T extends IWithId> {
  items: T[];
  component: React.ComponentType<{ item: T }>;
  variant?: 'list' | 'grid';
}

function ItemList<T extends IWithId>({ items, component: ItemComponent, variant = 'list' }: IListProps<T>) {
  const className = variant === 'list' ? styles.itemList : styles.itemGrid;

  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item.id}>
          <ItemComponent item={item} />
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
