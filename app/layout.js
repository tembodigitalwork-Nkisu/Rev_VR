import "./globals.css";

export const metadata = {
  title: "REV VR Xperience — Lusaka's VR Arcade at Manda Hill",
  description:
    "Step into virtual reality at Manda Hill, Lusaka. Action, adventure, space exploration and more — book your session at REV VR Xperience.",
  keywords: [
    "VR Lusaka",
    "Virtual Reality Zambia",
    "Manda Hill",
    "things to do in Lusaka",
    "VR arcade Zambia",
    "birthday party Lusaka",
  ],
  openGraph: {
    title: "REV VR Xperience — Lusaka's VR Arcade",
    description:
      "Action, adventure, space exploration. Walk-in or book ahead at Manda Hill, upstairs opposite the escalators.",
    type: "website",
    locale: "en_ZM",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06010f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <LocalBusinessSchema />
      </body>
    </html>
  );
}

function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: "REV VR Xperience",
    image: "https://rev-vr-xperience.example/og.jpg",
    "@id": "https://rev-vr-xperience.example",
    url: "https://rev-vr-xperience.example",
    telephone: "+260952866700",
    email: "revvrxperience@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Manda Hill Shopping Centre, Upper Level (opposite the escalators)",
      addressLocality: "Lusaka",
      addressCountry: "ZM",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -15.400305,
      longitude: 28.304069,
    },
    hasMap: "https://www.google.com/maps/place/?q=place_id:ChIJjW7m6VGLQBkRbkCmk6xkgVY",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:30",
        closes: "23:30",
      },
    ],
    sameAs: [
      "https://www.instagram.com/rev_vr_xperience/",
      "https://www.tiktok.com/@rev.vr.xperience",
      "https://www.facebook.com/61571615593576",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
