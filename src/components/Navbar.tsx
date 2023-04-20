import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 py-5 px-5 flex items-center border-b border-gray-700">
      <FontAwesomeIcon className="text-purple-400 h-5 mr-2" icon={faCode} />
      <div className="uppercase font-semibold text-xl text-gray-100">
        Next Playground
      </div>
    </nav>
  );
}
