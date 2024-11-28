import { useState } from 'react';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  ajuda: string;
}

interface FormErrors {
  nome: string;
  email: string;
  telefone: string;
  ajuda: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    ajuda: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    nome: "",
    email: "",
    telefone: "",
    ajuda: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: FormErrors = {
      nome: formData.nome ? "" : "Este campo é obrigatório",
      email: formData.email ? "" : "Este campo é obrigatório",
      telefone: formData.telefone ? "" : "Este campo é obrigatório",
      ajuda: formData.ajuda ? "" : "Este campo é obrigatório",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  return { formData, errors, handleChange, validate };
};

