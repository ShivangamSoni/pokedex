import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className="set-width">
        Copyright &copy; {new Date().getFullYear()} &nbsp;
        <a
          href="https://github.com/ShivangamSoni/"
          target="_blank"
          rel="noreferrer"
        >
          Shivangam Soni
        </a>
      </p>
    </footer>
  );
};

export default Footer;
