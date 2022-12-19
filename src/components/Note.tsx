export interface NoteInterface {
    title: string;
    body: string;
}

interface NoteProps {
  note: NoteInterface;
}

const Note: React.FC<NoteProps> = ({ note }) => {
  return (
    <div className="bg-indigo-500 p-3 rounded-md h-24">
      <p className="font-bold">{note.title}</p>
      <p>{note.body}</p>
    </div>
  );
};

export default Note;
