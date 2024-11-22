import { XMarkIcon } from "@heroicons/react/24/solid";

interface SearchModalProps {
  onClose: () => void;
}

export const SearchModal = ({ onClose }: SearchModalProps) => {
  return (
    <div className="bg-white h-full w-full fixed top-0 left-0 z-20 transition-opacity duration-700">
      <XMarkIcon
        className="absolute top-3 right-3 h-10 cursor-pointer text-gray-400"
        onClick={onClose}
      />
      <input
        type="text"
        placeholder="Buscar"
        autoFocus
        className="w-full h-full text-center text-5xl font-medium outline-none text-gray-500"
      />
    </div>
  );
};
