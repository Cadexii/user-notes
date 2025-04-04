import styles from "./styles.module.css";

type NoteProps = {
  title: string;
  description: string;
  isModalNote?: boolean;
  onClick?: () => void;
};

const Note: React.FC<NoteProps> = ({
  title,
  description,
  isModalNote,
  onClick,
}) => {
  return (
    <div
      className={`${styles.note} ${isModalNote && styles.modalNote}`}
      onClick={onClick}
    >
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
