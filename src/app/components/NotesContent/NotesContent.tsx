"use client";

import styles from "./styles.module.css";
import { useState } from "react";
import Note from "./Note";
import Container from "../Container/Container";
import Image from "next/image";
import Modal from "../Modal/Modal";
import FormSection from "../Forms/FormSection/FormSection";

const NotesContent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);

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
              value: "",
              onChange: () => {},
            },
          ]}
          textArea={{
            placeholder: "Description",
            value: "",
            onChange: () => {},
          }}
          button="Add Note"
          message=""
          success={success}
          onButtonClick={() => {}}
        />
      </Modal>
    </Container>
  );
};

export default NotesContent;
