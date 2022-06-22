import styles from "./styles.module.css";

const NotFound = () => {
  return (
    <main className={`${styles.container} set-width`}>
      <h3 content="404" className={styles.title}>
        404
      </h3>

      <p content="Page Not Found" className={styles.info}>
        Page Not Found
      </p>
    </main>
  );
};

export default NotFound;
