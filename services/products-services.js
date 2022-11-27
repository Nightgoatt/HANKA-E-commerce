const prosthSection = () => fetch('http://localhost:3000/prosthetics').then((respuesta) => respuesta.json());

const brainSection = () => fetch('http://localhost:3000/brain-implants').then((respuesta) => respuesta.json());

const militarySection = () => fetch('http://localhost:3000/military').then((respuesta) => respuesta.json());

export const productServices = {
  prosthSection,
  brainSection,
  militarySection,
};
