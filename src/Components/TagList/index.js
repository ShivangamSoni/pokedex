import styles from "./styles.module.css";

import Tag from "../Tag";

const TagList = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map((text, idx) => (
        <Tag key={idx + text}>{text}</Tag>
      ))}
    </ul>
  );
};

export default TagList;
