"use client";
import { useState } from "react";
import {
  FormContainer,
  FormTitle,
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
} from "./ContactForm.styles";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <FormContainer>
      <FormTitle>Contact me</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="details">Details</FormLabel>
          <FormTextarea
            id="details"
            name="details"
            placeholder="details"
            value={formData.details}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
    </FormContainer>
  );
}
