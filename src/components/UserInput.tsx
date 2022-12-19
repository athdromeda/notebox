import React from "react";

interface UserInputProps {
  title: string;
  body: string;
  setTitle(value: string): void;
  setBody(value: string): void;
  handleSubmit(): void;
}

const UserInput: React.FC<UserInputProps> = ({
  title,
  setTitle,
  body,
  setBody,
  handleSubmit,
}) => {
  return (
    <div className="flex flex-col items-center border border-gray-500 p-4 min-w-fit rounded-md gap-2">
        <input
          type="text"
          value={title}
          className="bg-gray-700 p-3"
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <input
          type="text"
          value={body}
          className="bg-gray-700 p-3"
          onChange={(e) => setBody(e.currentTarget.value)}
        />
        <button className="bg-black p-3" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserInput;
