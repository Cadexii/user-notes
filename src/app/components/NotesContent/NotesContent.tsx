import styles from "./styles.module.css";
import Note from "./Note";
import Container from "../Container/Container";
import Image from "next/image";

const NotesContent = () => {
  return (
    <Container>
      <div className={styles.notesContent}>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <div className={styles.addNote}>
          <Image src="add_circle.svg" alt="Add Note" width={100} height={100} />
          <h2>Add Note</h2>
        </div>
      </div>
    </Container>
  );
};

export default NotesContent;
