"use client";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FormContainer,
  FormTitle,
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  SuccessMessage,
  ErrorMessage,
} from "./ContactForm.styles";

export default function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm("service_3rd4ucw", "template_ejci9uj", form.current, {
        publicKey: "rcbgbFeo3CBwhThwW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSubmitStatus("success");
          setFormData({ user_email: "", user_name: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSubmitStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <FormContainer>
      <FormTitle>Contact me</FormTitle>
      <Form ref={form} onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="user_email">Email</FormLabel>
          <FormInput
            type="email"
            id="user_email"
            name="user_email"
            placeholder="email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="user_name">Name</FormLabel>
          <FormInput
            type="text"
            id="user_name"
            name="user_name"
            placeholder="name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormTextarea
            id="message"
            name="message"
            placeholder="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>

        {submitStatus === "success" && (
          <SuccessMessage>Message sent successfully! I'll get back to you soon.</SuccessMessage>
        )}
        {submitStatus === "error" && (
          <ErrorMessage>
            Failed to send message. Please try again or contact me directly.
          </ErrorMessage>
        )}

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
}
