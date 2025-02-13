import Container from "./components/Container/Container";
import NotesContent from "./components/NotesContent/NotesContent";

export default function Home() {
  return (
    <div className="user-notes">
      <Container>
        <NotesContent />
      </Container>
    </div>
  );
}
