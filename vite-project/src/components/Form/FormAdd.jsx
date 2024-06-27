import React, { useState } from "react";
import { FormContainer, Input, Campo, Select, Button } from "./Styles";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label>
        Título:
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Imagem:
        <Input
          type="text"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Descrição:
        <Campo
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Categoria:
        <Select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Selecione uma categoria</option>
          <option value="festa">Festa</option>
          <option value="aniversario">Aniversário</option>
          <option value="social">Social</option>
          <option value="casamento">Casamento</option>
        </Select>
      </label>
      <Button type="submit">ENVIAR</Button>
    </FormContainer>
  );
};

export default Form;
