export const contactDetails = {
  location: {
    label: 'Location',
    value: 'Your city, country',
  },
  phone: {
    label: 'Phone',
    value: '+000 0000 0000',
  },
  email: {
    label: 'Email',
    value: 'hello@gravitystudios.example',
  },
} as const

export const contactForm = {
  title: 'Request a free quote',
  fields: {
    name: { label: 'Your name', placeholder: 'Your name' },
    countryCode: {
      label: 'Country code',
      placeholder: 'Select country',
    },
    phone: { label: 'Phone number', placeholder: 'Phone number' },
    email: { label: 'Email', placeholder: 'Your email' },
    message: {
      label: 'Tell us about your project',
      placeholder: 'Tell us about your project',
    },
  },
  submit: 'Send message',
  success: 'Thanks — we will get back to you shortly.',
} as const

export const countryDialOptions = [
  { value: '+504', label: 'Honduras (+504)' },
  { value: '+1', label: 'United States (+1)' },
  { value: '+52', label: 'Mexico (+52)' },
  { value: '+34', label: 'Spain (+34)' },
] as const
