import { ChevronDown, ChevronRight, FilePlus, Folder } from "lucide-react";
import { useState } from "react";

interface FolderProps {
  name: string;
  folders?: FolderProps[];
}

let folders: FolderProps[] = [
  {
    name: "Home",
    folders: [
      {
        name: "Movies",
        folders: [
          {
            name: "Action",
            folders: [
              {
                name: "2000",
                folders: [
                  { name: "Mission-Impossible.mp4" },
                  { name: "X-Men.mp4" },
                ],
              },
              { name: "2002", folders: [] },
            ],
          },
          { name: "Comedy", folders: [] },
        ],
      },
      {
        name: "Music",
        folders: [
          { name: "Classical", folders: [] },
          { name: "Pop", folders: [] },
        ],
      },
      {
        name: "Pictures",
        folders: [
          { name: "Trip", folders: [] },
          { name: "School", folders: [] },
        ],
      },
      { name: "Documents", folders: [{ name: "password.tsx" }] },
    ],
  },
];

function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <ul>
        {folders.map((folder) => (
          <FolderStucture key={folder.name} folder={folder} />
        ))}
      </ul>
    </div>
  );
}

export default App;

function FolderStucture({ folder }: { folder: FolderProps }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li>
      <span className="flex space-x-2 items-center">
        {folder.folders ? (
          <button onClick={() => setIsOpen(!isOpen)}>
            <ChevronRight
              size={18}
              className={`${
                folder.folders && isOpen ? "rotate-90 transition" : ""
              }`}
            />
          </button>
        ) : (
          ""
        )}
        {folder.folders ? (
          <Folder size={18} className="text-blue-500" />
        ) : (
          <FilePlus size={18} className="text-red-500" />
        )}
        {folder.name}
      </span>

      {isOpen && (
        <ul className="pl-6">
          {folder.folders?.map((folder) => (
            <FolderStucture folder={folder} key={folder.name} />
          ))}
        </ul>
      )}
    </li>
  );
}
