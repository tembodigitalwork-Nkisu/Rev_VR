import Pricing from "@/components/Pricing";
import Corporate from "@/components/Corporate";

export const metadata = {
  title: "Parties & Groups",
  description:
    "Birthday parties, end-of-term outings, corporate team-building, and school groups at REV VR Xperience, Manda Hill, Lusaka. Tailored packages on request.",
};

export default function PartiesPage() {
  return (
    <main>
      <Pricing />
      <Corporate />
    </main>
  );
}
