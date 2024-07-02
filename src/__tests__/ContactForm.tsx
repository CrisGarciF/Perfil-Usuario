import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../components/ContactForm/ContactForm';

test('renders contact form and submits successfully', () => {
  render(<ContactForm />);
  
  const nameInput = screen.getByLabelText(/Nombre/i);
  const emailInput = screen.getByLabelText(/Email/i);
  const messageTextarea = screen.getByLabelText(/Mensaje/i);
  const submitButton = screen.getByText(/Enviar/i);

  fireEvent.change(nameInput, { target: { value: 'User' } });
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(messageTextarea, { target: { value: 'message.' } });

  fireEvent.click(submitButton);

  expect(screen.getByText(/Mensaje Enviado/i)).toBeInTheDocument();
});
