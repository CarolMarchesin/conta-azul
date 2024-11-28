import React, { useState } from "react";
import { MinusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { InputField } from "../InputField";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { useContactForm } from "./hooks/useContactForm";

interface ContactModalProps {
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const { formData, errors, handleChange, validate } = useContactForm();
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const handleCloseSuccess = () => {
    onClose();
    setOpenSuccessModal(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setOpenSuccessModal(true);
    }
  };

  return (
    <div className="fixed bottom-0 right-5 bg-white drop-shadow-md">
      <div className="bg-black text-md font-medium text-white h-full w-full p-3 rounded-t-md flex flex-row justify-between items-center">
        <p>Fale conosco</p>
        <div className="flex justify-end items-end">
          <MinusIcon className="h-9" onClick={onClose} />
          <XMarkIcon className="h-8" onClick={onClose} />
        </div>
      </div>
      
      {!openSuccessModal ? (
        <div className="rounded-t-md p-6 w-[320px]">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <InputField
              label="Nome Completo"
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              error={errors.nome}
            />
            <InputField
              label="E-mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <InputField
              label="Telefone"
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              error={errors.telefone}
            />
            <InputField
              label="Como podemos ajudar?"
              type="text"
              name="ajuda"
              value={formData.ajuda}
              onChange={handleChange}
              error={errors.ajuda}
            />

            <button
              type="submit"
              className="bg-blue-800 opacity-90 text-white p-2 rounded-md mt-10 font-medium text-sm"
            >
              Enviar
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="text-black items-center flex flex-col gap-6 text-center w-[320px] h-[380px] justify-center">
            <CheckCircleIcon className="h-20 text-green-600 opacity-60" />
            <div className="gap-2 flex flex-col">
              <p className="font-bold">Caso enviado</p>
              <p className="font-medium text-sm">
                Registramos seu caso.
                <br />
                Voltaremos a nos falar em breve.
              </p>
            </div>
          </div>

          <div className="flex px-4 pb-6">
            <button
              className="bg-blue-800 opacity-90 text-white p-3 rounded-md font-normal text-sm w-full"
              onClick={handleCloseSuccess}
            >
              Concluído
            </button>
          </div>
        </>
      )}
    </div>
  );
};
