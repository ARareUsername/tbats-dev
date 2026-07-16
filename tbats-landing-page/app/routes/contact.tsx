import ConsultationForm from '@components/ConsultationForm';
import ContactReviews from '@components/ContactReviews';

export function meta() {
  return [
    { title: 'Contact & Free Consultation | tbats.dev' },
    {
      name: 'description',
      content: 'Book your free design and performance consultation with the tbats team.',
    },
  ];
}

export default function ContactRoute() {
  return (
    <div style={{ padding: '4rem 0' }}>
      <ConsultationForm />
      <ContactReviews />
    </div>
  );
}
