interface IWithId {
  id: number;
}

interface IListProps<T extends IWithId> {
  items: T[];
  component: React.ComponentType<{ item: T }>;
}

function ItemList<T extends IWithId>(props: IListProps<T>) {
  const { items, component: ItemComponent } = props;
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ItemComponent item={item} />
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
