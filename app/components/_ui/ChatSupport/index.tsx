import React, { useState } from "react";
import { ContactButton } from "./ContactButton";
import { ContactModal } from "./ContactModal/indext";

interface ChatSupportProps {
  className?: string;
  iconSize: string;
  textSize: string;
}

export const ChatSupport: React.FC<ChatSupportProps> = ({
  className,
  iconSize,
  textSize,
}) => {
  const [openModalChat, setOpenModalChat] = useState<boolean>(false);

  return (
    <>
      <ContactButton
        className={className}
        iconSize={iconSize}
        textSize={textSize}
        openChat={() => setOpenModalChat(true)}
      />

      {openModalChat && (
        <ContactModal onClose={() => setOpenModalChat(false)} />
      )}
    </>
  );
};
