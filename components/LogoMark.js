import Image from "next/image";

// Official REV VR XPERIENCE logo. Transparent PNG, extracted from the
// venue's promo artwork via scripts/extract-logo.js.
export default function LogoMark({ className = "h-8 w-auto", priority = false }) {
  return (
    <Image
      src="/logo.png"
      alt="REV VR XPERIENCE"
      width={516}
      height={314}
      priority={priority}
      className={className}
    />
  );
}
