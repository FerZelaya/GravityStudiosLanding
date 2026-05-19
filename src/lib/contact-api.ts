export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  message: string;
};

const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;

export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<void> {
  if (!formId) {
    throw new Error(
      "Contact form is not configured. Set VITE_FORMSPREE_FORM_ID in .env",
    );
  }

  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: `${payload.countryCode} ${payload.phone}`,
      countryCode: payload.countryCode,
      message: payload.message,
      _subject: `New contact from ${payload.name}`,
    }),
  });

  const data = (await response.json().catch(() => ({}))) as {
    error?: string;
  };

  if (!response.ok) {
    throw new Error(data.error ?? "Failed to send message.");
  }
}
