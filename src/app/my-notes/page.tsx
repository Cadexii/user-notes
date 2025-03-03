import NotesContent from "../components/NotesContent/NotesContent";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const MyNotes = () => {
  return (
    <ProtectedRoute>
      <NotesContent />
    </ProtectedRoute>
  );
};

export default MyNotes;
