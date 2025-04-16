import emailjs from 'emailjs-com';
import { customAlphabet } from 'nanoid';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
// const TEMPLATE_ID_OWNER = import.meta.env.VITE_TEMPLATE_ID_OWNER;
const TEMPLATE_ID_CLIENT = import.meta.env.VITE_TEMPLATE_ID_CLIENT;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const numericId = customAlphabet('0123456789', 10);

export async function sendOrderEmails(clientEmail: string, quantity: number): Promise<string> {
  const newOrderId = numericId();

  // const mailToOwnerParams = {
  //   clientEmail,
  //   orderId: newOrderId,
  //   quantity,
  // };

  const mailToClientParams = {
    orderId: newOrderId,
    quantity,
    toEmail: clientEmail,
  };

  try {
    // await emailjs.send(SERVICE_ID, TEMPLATE_ID_OWNER, mailToOwnerParams, PUBLIC_KEY);

    await emailjs.send(SERVICE_ID, TEMPLATE_ID_CLIENT, mailToClientParams, PUBLIC_KEY);

    return newOrderId;
  } catch (error) {
    console.error('Błąd przy wysyłce maili:', error);
    throw error;
  }
}
