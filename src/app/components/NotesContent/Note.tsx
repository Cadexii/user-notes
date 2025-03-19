import styles from "./styles.module.css";

type NoteProps = {
  title: string;
  description: string;
};

const Note: React.FC<NoteProps> = ({ title, description }) => {
  return (
    <div className={styles.note}>
      <div className={styles.noteTitle}>
        <h2>{title}</h2>
      </div>
      <div className={styles.noteDescription}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Note;
