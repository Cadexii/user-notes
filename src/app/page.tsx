import LoginForm from "./components/Forms/FormComponents/LoginForm";
import NotesContent from "./components/NotesContent/NotesContent";

export default function Home() {
  return (
    <div className="user-notes">
      {/* <NotesContent /> */}
      <LoginForm />
    </div>
  );
}
