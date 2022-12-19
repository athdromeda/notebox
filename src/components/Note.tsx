import { useState } from "react";
import { Delete, Edit } from "react-feather";

export interface NoteInterface {
  title: string;
  body: string;
  id: string;
}

interface NoteProps {
  note: NoteInterface;
  selectNote(id: string): void;
  deleteNote(id: string): void;
}

const Note: React.FC<NoteProps> = ({ note, selectNote, deleteNote }) => {
  const [isHover, setHover] = useState(false);

  return (
    <div
      className="bg-indigo-500 p-3 rounded-md h-48 flex flex-col justify-between gap-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div>
        <p className="font-bold text-xl">{note.title}</p>
        <p>{note.body}</p>
      </div>
      {isHover && (
        <div className="flex gap-3 relative justify-end">
          <Edit onClick={()=>selectNote(note.id)} className="cursor-pointer"/>
          <Delete onClick={()=>deleteNote(note.id)} className="cursor-pointer"/>
        </div>
      )}
    </div>
  );
};

export default Note;
