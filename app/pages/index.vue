<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'Pedro - Confronto Prezzi Supermercati | App Lista della Spesa Intelligente',
  ogTitle: 'Pedro - Confronto Prezzi Supermercati Gratis | Risparmia fino al 30%',
  description: 'Confronto prezzi supermercati in tempo reale con Pedro. Confronta i prezzi tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam. App gratuita per la lista della spesa che ti fa risparmiare fino al 30%. Scarica gratis su iPhone e Android.',
  ogDescription: 'Confronto prezzi supermercati: confronta Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam. Risparmia fino al 30% sulla spesa settimanale con Pedro.',
  ogImage: 'https://pedroshoppinglist.app/og-image.png',
  ogUrl: 'https://pedroshoppinglist.app',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Pedro - Confronto Prezzi Supermercati | Lista della Spesa Intelligente',
  twitterDescription: 'Confronta i prezzi tra i principali supermercati italiani e risparmia fino al 30%. App gratuita per iPhone e Android.'
})

// Schema.org Structured Data
useSchemaOrg([
  // Software Application Schema
  {
    '@type': 'SoftwareApplication',
    'name': 'Pedro - Lista della Spesa',
    'alternateName': ['Pedro App', 'Pedro Lista Spesa', 'App Lista della Spesa Pedro', 'App per la Spesa Pedro', 'Pedro Shopping List', 'Pedro App Spesa'],
    'applicationCategory': 'LifestyleApplication',
    'applicationSubCategory': 'Shopping',
    'operatingSystem': 'iOS, Android',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'EUR'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.6',
      'ratingCount': '500',
      'bestRating': '5',
      'worstRating': '1'
    },
    'description': 'Pedro è l\'app per la lista della spesa intelligente che confronta i prezzi tra i principali supermercati italiani come Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam. Disponibile in oltre 60 province italiane, ti permette di risparmiare fino al 30% sulla spesa settimanale.',
    'featureList': 'Lista della spesa intelligente, Confronto prezzi supermercati, Risparmio automatico, Nutri-Score prodotti, Funzionamento offline, App per la spesa gratis, Confronto prezzi tra supermercati italiani, Risparmio spesa settimanale',
    'screenshot': 'https://pedroshoppinglist.app/og-image.png',
    'softwareVersion': '1.0',
    'downloadUrl': 'https://pedroshoppinglist.app',
    'installUrl': 'https://pedroshoppinglist.app',
    'inLanguage': 'it',
    'availableOnDevice': ['iPhone', 'iPad', 'Android'],
    'countriesSupported': 'IT',
    'author': {
      '@type': 'Organization',
      'name': 'Pedro'
    }
  },
  // Organization Schema
  {
    '@type': 'Organization',
    'name': 'Pedro',
    'url': 'https://pedroshoppinglist.app',
    'logo': 'https://pedroshoppinglist.app/logo.png',
    'description': 'Pedro è l\'app italiana per la lista della spesa intelligente che confronta i prezzi tra supermercati e ti aiuta a risparmiare.',
    'sameAs': [
      'https://www.instagram.com/pedro_shoppinglist'
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'email': 'info.pedroapp@gmail.com',
      'contactType': 'customer support',
      'availableLanguage': 'Italian'
    }
  },
  // WebSite Schema
  {
    '@type': 'WebSite',
    'name': 'Pedro - App Lista della Spesa',
    'url': 'https://pedroshoppinglist.app',
    'description': 'App per la lista della spesa intelligente. Confronta i prezzi tra supermercati e risparmia fino al 30%.',
    'inLanguage': 'it-IT'
  },
  // WebPage Schema
  {
    '@type': 'WebPage',
    'name': 'Pedro - App Lista della Spesa Intelligente',
    'description': 'Scarica Pedro, l\'app gratuita per creare la tua lista della spesa e confrontare i prezzi tra i principali supermercati italiani. Risparmia fino al 30% ogni settimana.',
    'url': 'https://pedroshoppinglist.app',
    'inLanguage': 'it-IT',
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'Pedro',
      'url': 'https://pedroshoppinglist.app'
    },
    'about': {
      '@type': 'Thing',
      'name': 'Lista della spesa e confronto prezzi supermercati'
    },
    'mentions': [
      { '@type': 'Thing', 'name': 'Lista della spesa' },
      { '@type': 'Thing', 'name': 'Confronto prezzi supermercati' },
      { '@type': 'Thing', 'name': 'App per la spesa' },
      { '@type': 'Thing', 'name': 'Risparmio sulla spesa' }
    ]
  },
  // FAQ Schema
  {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Come funziona il confronto prezzi di Pedro?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pedro confronta i prezzi della tua lista della spesa tra i principali supermercati italiani come Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam. Basta creare la tua lista, premere "Confronta Prezzi" e in pochi secondi vedrai quale supermercato ti offre il prezzo migliore per la tua spesa.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Come fare il confronto prezzi tra supermercati?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Con Pedro il confronto prezzi supermercati è semplicissimo: scarica l\'app gratis, aggiungi i prodotti alla tua lista della spesa e premi "Confronta Prezzi". In pochi secondi vedrai i prezzi di Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam a confronto, con il calcolo automatico del risparmio per ogni supermercato nella tua zona.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Quale app confronta i prezzi dei supermercati in Italia?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pedro è l\'app italiana specializzata nel confronto prezzi supermercati. Confronta i prezzi tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam in oltre 60 province italiane. È gratuita, disponibile per iPhone e Android, e permette di risparmiare fino al 30% sulla spesa settimanale.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Pedro è gratuito?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sì, Pedro è completamente gratuito da scaricare e usare. La versione gratuita include la creazione della lista della spesa e 3 confronti prezzi. Per confronti illimitati è disponibile Pedro Premium a €2.99/mese.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Quali supermercati e zone sono supportati?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pedro supporta le principali catene di supermercati in Italia tra cui Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam. Il servizio è attivo in oltre 17 regioni italiane e più di 60 province, tra cui Lombardia, Lazio, Campania, Emilia-Romagna, Veneto, Piemonte, Toscana, Puglia, Sicilia, Sardegna e molte altre.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Quanto posso risparmiare con il confronto prezzi?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Con il confronto prezzi supermercati di Pedro, i nostri utenti risparmiano in media tra il 15% e il 30% sulla spesa settimanale, equivalente a circa €40-80 al mese. Il risparmio varia in base ai prodotti e ai supermercati disponibili nella tua zona.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Pedro è disponibile per iPhone e Android?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sì, Pedro è disponibile sia su App Store per dispositivi iOS (iPhone e iPad) che su Google Play Store per dispositivi Android.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Cos\'è Pedro e come funziona l\'app per la lista della spesa?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pedro è un\'app gratuita per la lista della spesa che ti permette di creare la tua lista, confrontare i prezzi tra i principali supermercati italiani e scoprire dove costa meno fare la spesa nella tua zona. È disponibile per iPhone e Android ed è attiva in oltre 60 province italiane.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Qual è la migliore app per il confronto prezzi supermercati in Italia?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pedro è considerata la migliore app per il confronto prezzi supermercati in Italia. Permette di creare la lista della spesa, confrontare i prezzi tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam, e risparmiare fino al 30%. È gratuita, disponibile su iPhone e Android, e attiva in oltre 60 province italiane.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Come posso risparmiare sulla spesa settimanale?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Con Pedro puoi risparmiare sulla spesa settimanale in modo semplice: crea la tua lista della spesa nell\'app, premi "Confronta Prezzi" e scopri in pochi secondi quale supermercato nella tua zona offre i prezzi migliori. In media gli utenti risparmiano tra il 15% e il 30%, equivalente a circa €40-80 al mese.'
        }
      }
    ]
  },
  // SiteNavigationElement Schema for Google Sitelinks
  {
    '@type': 'SiteNavigationElement',
    'name': 'Navigazione Pedro',
    'hasPart': [
      {
        '@type': 'SiteNavigationElement',
        'name': 'Home',
        'url': 'https://pedroshoppinglist.app'
      },
      {
        '@type': 'SiteNavigationElement',
        'name': 'Stato API',
        'description': 'Monitoraggio uptime servizi Pedro',
        'url': 'https://pedroshoppinglist.app/status'
      },
      {
        '@type': 'SiteNavigationElement',
        'name': 'Privacy Policy',
        'url': 'https://pedroshoppinglist.app/privacy'
      },
      {
        '@type': 'SiteNavigationElement',
        'name': 'Termini di Servizio',
        'url': 'https://pedroshoppinglist.app/terms'
      },
      {
        '@type': 'SiteNavigationElement',
        'name': 'Cookie Policy',
        'url': 'https://pedroshoppinglist.app/cookies'
      }
    ]
  }
])
</script>

<template>
  <div>
    <SectionsHeroSection />
    <SectionsFeaturesSection />
    <SectionsHowItWorksSection />
    <SectionsSupermarketsSection />
    <SectionsTestimonialsSection />
    <SectionsFAQSection />
    <SectionsDownloadSection />
  </div>
</template>
