import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Book a Session",
  description:
    "Send REV VR Xperience your booking details — single rides, group bookings, birthday parties, corporate, and school enquiries. We confirm before charging.",
};

export default function BookPage() {
  return (
    <main>
      <BookingForm />
    </main>
  );
}
