// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Samriddhi Daksh Avenue Noida Sector 150 - 3BHK 1980 Sq Ft Luxury Apartments | Book Site Visit",
  description:
    "Luxury 3BHK (1980 sq ft) apartments at Samriddhi Daksh Avenue, Sector 150 Noida. Premium amenities, green township, expressway connectivity. Know more now!",
  keywords:
    "Samriddhi Daksh Avenue, Noida Sector 150, 3BHK Noida, 3BHK 1980 sq ft, luxury apartments Noida, Noida expressway",
  metadataBase: new URL("https://noidaluxhomes.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Samriddhi Daksh Avenue Noida Sector 150 - 3BHK 1980 Sq Ft Luxury Apartments | Book Site Visit",
    description:
      "Premium 3BHK luxury apartments in Sector 150, Noida. Explore amenities, floor plan, gallery and location.",
    url: "https://noidaluxhomes.vercel.app",
    images: ["/brochure_images/page_01.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/brochure_images/page_04.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Samriddhi Daksh Avenue - Luxury 3BHK 1980 sq ft Noida" />
        <meta property="og:description" content="High-end luxury 3BHK homes in Sector 150 Noida. Explore amenities, gallery & location." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Samriddhi Daksh Avenue - 3BHK Luxury Homes in Noida" />
        <meta name="twitter:description" content="1980 sq ft luxury apartments in premium Sector 150 Noida." />
        <meta name="twitter:image" content="https://noidaluxhomes.vercel.app/brochure_images/page_07.jpg" />


        <link rel="canonical" href="https://noidaluxhomes.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateListing",
              "name": "Samriddhi Daksh Avenue - 3BHK Luxury Apartments (1980 sq ft) in Sector 150 Noida",
              "description":
                "Explore luxury 3BHK 1980 sq ft apartments in Samriddhi Daksh Avenue, Sector 150 Noida...",
              "url": "https://noidaluxhomes.vercel.app/",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sector 150",
                "addressLocality": "Noida",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "201310",
                "addressCountry": "IN",
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
              }
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
                  "text":
                    "The 3BHK units at Samriddhi Daksh Avenue have a spacious 1980 sq ft super area with large balconies and four-side open design.",
                },
              },
              {
                "@type": "Question",
                "name": "Where is the project located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Samriddhi Daksh Avenue is located in Sector 150, Noida’s greenest and lowest-density residential zone with expressway and metro access.",
                },
              },
              {
                "@type": "Question",
                "name": "What amenities are available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Amenities include a 40,000 sq ft clubhouse, swimming pool, fully equipped gym, kids play area, sports facilities, landscaped gardens, and more.",
                },
              },
              {
                "@type": "Question",
                "name": "When is the possession?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Expected possession for Samriddhi Daksh Avenue is Early 2027.",
                },
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
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://noidaluxhomes.vercel.app/",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Samriddhi Daksh Avenue",
                "item": "https://noidaluxhomes.vercel.app/",
              },
            ],
          }),
        }}
      />

      </head>
      <body className="bg-[#fbfbfb] text-[#2c3e50] antialiased">
        {children}
      </body>
    </html>
  );
}
