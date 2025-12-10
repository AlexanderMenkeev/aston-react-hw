import styles from './Modal.module.css';

const ModalBody = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.body}>{children}</div>;
};

export default ModalBody;
