// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Samriddhi Daksh Avenue – Sector 150 Noida | 3BHK Luxury Apartments (1980 sq ft)",
  description:
    "Luxury 3BHK 1980 sq ft apartments in Samriddhi Daksh Avenue, Sector 150 Noida. Low-density project, large balconies, 40,000 sq ft clubhouse, expressway connectivity, metro access, and early 2027 possession.",
  keywords: [
    "Samriddhi Daksh Avenue",
    "Sector 150 Noida",
    "3BHK Noida",
    "Luxury apartments Noida",
    "1980 sq ft flats Noida",
    "Noida expressway property",
  ],
  metadataBase: new URL("https://noidaluxhomes.vercel.app"),
  alternates: {
    canonical: "https://noidaluxhomes.vercel.app",
  },
  openGraph: {
    title: "Samriddhi Daksh Avenue – Luxury 3BHK Homes in Noida Sector 150",
    description:
      "1980 sq ft luxury apartments in premium Sector 150 Noida. Large balconies, green zone location, clubhouse, and premium amenities.",
    url: "https://noidaluxhomes.vercel.app",
    siteName: "NoidaLuxHomes",
    type: "website",
    images: [
      {
        url: "https://noidaluxhomes.vercel.app/brochure_images/page_07.jpg",
        width: 1200,
        height: 628,
        alt: "Samriddhi Daksh Avenue 3BHK Sector 150 Noida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samriddhi Daksh Avenue – Sector 150 Noida | Luxury 3BHK",
    description:
      "Explore luxury 3BHK 1980 sq ft residences in Noida’s greenest low-density sector.",
    images: ["https://noidaluxhomes.vercel.app/brochure_images/page_07.jpg"],
    creator: "@NoidaLuxHomes",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <link rel="canonical" href="https://noidaluxhomes.vercel.app/" />
      </head>
      <body className="bg-[#fbfbfb] text-[#2c3e50] antialiased">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "RealEstateListing",
                "name": "Samriddhi Daksh Avenue – 3BHK Luxury Apartments",
                "description":
                  "Luxury 3BHK 1980 sq ft apartments in Samriddhi Daksh Avenue, Sector 150 Noida. Premium low-density project with expressway connectivity, metro access and early 2027 possession.",
                "url": "https://noidaluxhomes.vercel.app",
                "image": "https://noidaluxhomes.vercel.app/brochure_images/page_07.jpg",
                "numberOfRooms": 3,
                "floorSize": {
                  "@type": "QuantitativeValue",
                  "value": "1980",
                  "unitCode": "SQF",
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Sector 150",
                  "addressLocality": "Noida",
                  "addressRegion": "UP",
                  "postalCode": "201310",
                  "addressCountry": "IN",
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "28.5156",
                  "longitude": "77.4697",
                },
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "INR",
                  "price": "0",
                },
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "NoidaLuxHomes",
                "telephone": "+918979333131",
                "email": "arjun.sisodia8@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Sector 150",
                  "addressLocality": "Noida",
                  "addressRegion": "UP",
                  "postalCode": "201310",
                  "addressCountry": "IN",
                },
                "url": "https://noidaluxhomes.vercel.app",
                "image": "https://noidaluxhomes.vercel.app/brochure_images/page_08.jpg",
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "28.5156",
                  "longitude": "77.4697",
                },
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://noidaluxhomes.vercel.app",
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Samriddhi Daksh Avenue",
                    "item": "https://noidaluxhomes.vercel.app",
                  },
                ],
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is the size of the 3BHK apartment?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The 3BHK units feature a spacious 1980 sq ft super area with large balconies.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Where is the project located?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The project is located in Sector 150 Noida, a premium green low-density residential hub.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "What amenities are available?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Amenities include a 40,000 sq ft clubhouse, gym, pool, sports courts, gardens, kids play area and more.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "When is the possession?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Expected possession is Early 2027.",
                    },
                  },
                ],
              }),
            }}
          />

        {children}
      </body>
    </html>
  );
}
