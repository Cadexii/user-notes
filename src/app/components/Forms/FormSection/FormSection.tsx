import styles from "./FormSection.module.css";

type FormSectionProps = {
  title?: string;
  inputs: {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }[];
  textArea?: string;
  button: string;
  link?: {
    title: string;
    href: string;
  };
  message: string;
  success?: boolean;
  onButtonClick: (e: React.FormEvent) => void;
};

const FormSection: React.FC<FormSectionProps> = ({
  title,
  inputs,
  textArea,
  button,
  link,
  message,
  success,
  onButtonClick,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <form className={styles.inputContainer}>
          {inputs.map((input, index) => (
            <input
              key={index}
              className={styles.input}
              type={input.type}
              placeholder={input.placeholder}
              value={input.value}
              onChange={input.onChange}
            />
          ))}
          {textArea && (
            <textarea
              className={styles.descriptionInput}
              placeholder={textArea}
            />
          )}
        </form>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={onButtonClick}>
            {button}
          </button>
        </div>
        {message && (
          <div
            className={
              success ? styles.messageBoxSuccess : styles.messageBoxError
            }
          >
            <p>{message}</p>
          </div>
        )}
        {link && (
          <div>
            <a href={link.href} className={styles.link}>
              {link.title}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormSection;
