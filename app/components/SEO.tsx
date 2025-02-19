import { NextSeo } from 'next-seo'
import { JsonLd } from 'react-schemaorg'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    images?: Array<{
      url: string
      width: number
      height: number
      alt: string
    }>
  }
}

export function SEO({
  title = 'ΚΔΑΠ Καρφίτσα - Καινοτόμο Κέντρο Δημιουργικής Απασχόλησης Παιδιών',
  description = 'Το ΚΔΑΠ Καρφίτσα προσφέρει καινοτόμα προγράμματα και δραστηριότητες για παιδιά, συνδυάζοντας τη Μοντεσσοριανή μέθοδο με σύγχρονες τεχνολογίες.',
  canonical = 'https://www.kdapkarfitsa.gr',
  openGraph,
}: SEOProps) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          type: 'website',
          locale: 'el_GR',
          url: canonical,
          title: openGraph?.title || title,
          description: openGraph?.description || description,
          images: openGraph?.images || [
            {
              url: 'https://www.kdapkarfitsa.gr/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'ΚΔΑΠ Καρφίτσα',
            },
          ],
          site_name: 'ΚΔΑΠ Καρφίτσα',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'ΚΔΑΠ, Θεσσαλονίκη, δημιουργική απασχόληση, Μοντεσσοριανή μέθοδος, εκπαίδευση παιδιών',
          },
          {
            name: 'author',
            content: 'ΚΔΑΠ Καρφίτσα',
          },
        ]}
      />
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "ChildCare",
          name: "ΚΔΑΠ Καρφίτσα",
          description: description,
          url: canonical,
          telephone: "+30 2310123456",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Διεύθυνση ΚΔΑΠ",
            addressLocality: "Θεσσαλονίκη",
            postalCode: "54000",
            addressCountry: "GR"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "40.6401",
            longitude: "22.9444"
          },
          openingHours: "Mo-Fr 08:00-20:00",
          priceRange: "€€",
          image: "https://www.kdapkarfitsa.gr/og-image.jpg",
          sameAs: [
            "https://www.facebook.com/kdapkarfitsa",
            "https://www.instagram.com/kdapkarfitsa"
          ]
        }}
      />
    </>
  )
}
