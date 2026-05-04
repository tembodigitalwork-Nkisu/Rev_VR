// Approximation of the REV VR Xperience headset mark — yellow goggles with
// a play triangle on the left lens. Replace with the official SVG when supplied.
export default function LogoMark({ className = "h-8 w-auto" }) {
  return (
    <svg
      viewBox="0 0 64 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="REV VR Xperience"
      className={className}
    >
      <path
        d="M8 8h44a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H38l-3 4-3-4H12a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4Z"
        fill="#FFD60A"
      />
      <circle cx="20" cy="16" r="5.5" fill="#0a0a0a" />
      <circle cx="42" cy="16" r="5.5" fill="#0a0a0a" />
      <path d="M17.5 13l5 3-5 3z" fill="#FFD60A" />
      <text
        x="42"
        y="19"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="6.5"
        fill="#FFD60A"
      >
        VR
      </text>
    </svg>
  );
}
