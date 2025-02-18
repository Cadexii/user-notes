import styles from "./styles.module.css";

const Note = () => {
  return (
    <div className={styles.note}>
      <div className={styles.noteTitle}>
        <h2>note</h2>
      </div>
      <div className={styles.noteDescription}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Note;
