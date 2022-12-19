import Note from "./Note";
import {NoteInterface} from "./Note";

interface NotesProps {
  notes: NoteInterface[];
  selectNote(id: string): void;
  deleteNote(id: string): void;
}

const Notes: React.FC<NotesProps> = ({ notes, selectNote, deleteNote }) => {
  return (
    <div className="notes-grid w-full">
      {notes.map((e, i) => (
        <Note key={i} note={e} selectNote={selectNote} deleteNote={deleteNote}/>
      ))}
    </div>
  );
};

export default Notes;
