"use client";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import Note from "./Note";
import Container from "../Container/Container";
import Image from "next/image";
import Modal from "../Modal/Modal";
import FormSection from "../Forms/FormSection/FormSection";
import { onAuthStateChanged, User } from "@firebase/auth";
import { auth, db } from "@/app/utils/firebaseConfig";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";

type NoteProps = {
  id: string;
  title: string;
  description: string;
};

const NotesContent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        fetchNotes(user.uid);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!modalOpen) {
      setMessage("");
      setSuccess(false);
    }
  }, [modalOpen]);

  const fetchNotes = async (uid: string) => {
    const q = query(collection(db, `users/${uid}/notes`));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setNotes(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
        }))
      );
    });

    return unsubscribe;
  };

  const addNote = async () => {
    if (!user) return null;

    try {
      await addDoc(collection(db, `users/${user.uid}/notes`), {
        title,
        description,
      });
      setTitle("");
      setDescription("");
      setSuccess(true);
      setMessage("Note added successfully!");
    } catch {
      setSuccess(false);
      setMessage("Error adding note");
    }
  };

  return (
    <Container>
      <div className={styles.notesContent}>
        {notes.map((note) => (
          <Note
            key={note.id}
            title={note.title}
            description={note.description}
          />
        ))}
        <div className={styles.addNote} onClick={() => setModalOpen(true)}>
          <Image src="add_circle.svg" alt="Add Note" width={100} height={100} />
          <h2>Add Note</h2>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <FormSection
          title="Add Note"
          inputs={[
            {
              type: "text",
              placeholder: "Title",
              value: title,
              onChange: (e) => {
                setTitle(e.target.value);
              },
            },
          ]}
          textArea={{
            placeholder: "Description",
            value: description,
            onChange: (e) => {
              setDescription(e.target.value);
            },
          }}
          button="Add Note"
          message={message}
          success={success}
          onButtonClick={addNote}
        />
      </Modal>
    </Container>
  );
};

export default NotesContent;
