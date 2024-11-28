import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";

interface ContactButtonProps {
    className?: string;
    iconSize: string;
    textSize: string;
    openChat: () => void;
  }

export const ContactButton: React.FC<ContactButtonProps> = ({
    className,
    iconSize,
    textSize,
    openChat
  }) => {  return (
    <button
      className={`items-center bg-darkblue h-[55px] hover:opacity-90 ${className}`}
      onClick={openChat}
    >
      <ChatBubbleOvalLeftEllipsisIcon className={iconSize} />
      <p className={`${textSize} text-white font-medium`}>Fale conosco</p>
    </button>
  );
};
