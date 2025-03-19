"use client";

import styles from "./Modal.module.css";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.background} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          <Image src="close.svg" alt="Close" width={30} height={30} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
