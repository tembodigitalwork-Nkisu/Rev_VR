import Image from "next/image";

// Official REV VR XPERIENCE logo. Yellow headset with play triangle and
// wordmark on a black background — blends onto the site's pure-black bg.
export default function LogoMark({ className = "h-8 w-auto", priority = false }) {
  return (
    <Image
      src="/logo.jpg"
      alt="REV VR XPERIENCE"
      width={520}
      height={300}
      priority={priority}
      className={className}
    />
  );
}
