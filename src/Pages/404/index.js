import styles from "./styles.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h3 content="404" className={styles.title}>
        404
      </h3>

      <p content="Page Not Found" className={styles.info}>
        Page Not Found
      </p>
    </div>
  );
};

export default NotFound;
