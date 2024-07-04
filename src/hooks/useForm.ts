import { useState } from 'react';

export const useForm = <T extends Record<string, any>>(initialState: T) => {
  const [form, setForm] = useState<T>(initialState);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let error = null;
    switch (name) {
      case 'email':
        error = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? 'Correo electrónico no válido' : null;
        break;
      case 'name':
        error = value.trim().length < 3 ? 'El nombre debe tener al menos 3 caracteres' : null;
        break;
      case 'message':
        error = value.trim().length < 10 ? 'El mensaje debe tener al menos 10 caracteres' : null;
        break;
      default:
        error = value.trim() === '' ? 'Este campo es obligatorio' : null;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isFormValid = () => {
    return Object.values(form).every((value) => value.trim() !== '') && Object.values(errors).every((error) => error === null);
  };

  const resetForm = () => {
    setForm(initialState);
    setErrors({});
  };

  return [form, errors, handleChange, isFormValid, resetForm] as const;
};