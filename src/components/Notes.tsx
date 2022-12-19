import Note from "./Note";
import {NoteInterface} from "./Note";

interface NotesProps {
  notes: NoteInterface[];
}

const Notes: React.FC<NotesProps> = ({ notes }) => {
  return (
    <div className="notes-grid">
      {notes.map((e, i) => (
        <Note key={i} note={e} />
      ))}
    </div>
  );
};

export default Notes;
