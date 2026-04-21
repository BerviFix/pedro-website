<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'Pedro - Confronto Prezzi Supermercati | App Lista della Spesa',
  ogTitle: 'Pedro - Confronto Prezzi Supermercati Gratis',
  description: 'Confronto prezzi supermercati con Pedro. Confronta Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam. App gratuita per lista della spesa. iPhone e Android.',
  ogDescription: 'Confronto prezzi supermercati: Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam. Paga meno la spesa settimanale.',
  ogImage: 'https://pedroshoppinglist.app/og-image.png',
  ogUrl: 'https://pedroshoppinglist.app',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Pedro - Confronto Prezzi Supermercati | Lista della Spesa',
  twitterDescription: 'Confronto prezzi supermercati: Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam. Spendi meno.'
})

// Schema.org Structured Data
useSchemaOrg([
  // Mobile / Software Application Schema (dual type for max store-rich-result coverage)
  {
    '@type': ['SoftwareApplication', 'MobileApplication'],
    'name': 'Pedro - Lista della Spesa',
    'alternateName': ['Pedro App', 'Pedro Lista Spesa', 'App Lista della Spesa Pedro', 'App per la Spesa Pedro', 'Pedro Shopping List', 'Pedro App Spesa'],
    'applicationCategory': 'LifestyleApplication',
    'applicationSubCategory': 'Shopping',
    'operatingSystem': 'iOS 15+, Android 8+',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'EUR',
      'availability': 'https://schema.org/InStock'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.6',
      'ratingCount': '500',
      'bestRating': '5',
      'worstRating': '1'
    },
    'description': 'Pedro è l\'app gratuita per la lista della spesa e il confronto prezzi tra i principali supermercati italiani (Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin, Pam). Attiva in 17 regioni e 60+ province.',
    'featureList': 'Lista della spesa intelligente, Confronto prezzi supermercati, Risparmio automatico, Nutri-Score prodotti, Funzionamento offline, App per la spesa gratis, Confronto prezzi tra supermercati italiani, Risparmio spesa settimanale',
    'screenshot': 'https://pedroshoppinglist.app/og-image.png',
    'softwareVersion': '1.0',
    'downloadUrl': 'https://pedroshoppinglist.app',
    'installUrl': 'https://pedroshoppinglist.app',
    'inLanguage': 'it',
    'availableOnDevice': ['iPhone', 'iPad', 'Android'],
    'countriesSupported': 'IT',
    'fileSize': '25MB',
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
    'description': 'App per la lista della spesa e il confronto prezzi tra i principali supermercati italiani.',
    'inLanguage': 'it-IT'
  },
  // WebPage Schema
  {
    '@type': 'WebPage',
    'name': 'Pedro - App Lista della Spesa Intelligente',
    'description': 'Pedro: app gratuita per lista della spesa e confronto prezzi tra i principali supermercati italiani.',
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
          'text': 'Crei la lista della spesa. Premi "Confronta Prezzi". Pedro mostra il supermercato più economico tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Come fare il confronto prezzi tra supermercati?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Scarica Pedro. Aggiungi i prodotti alla lista. Premi "Confronta Prezzi". Vedi il confronto tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam con il risparmio per supermercato.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Quale app confronta i prezzi dei supermercati in Italia?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pedro. Confronta i prezzi tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam in 60+ province. Gratis, per iPhone e Android.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Pedro è gratuito?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sì. Pedro è gratuito, senza account e senza limiti. Lista della spesa, confronti prezzi, Nutri-Score e uso offline sono inclusi.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Quali supermercati e zone sono supportati?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam. Attivo in 17 regioni e 60+ province: Lombardia, Lazio, Campania, Emilia-Romagna, Veneto, Piemonte, Toscana, Puglia, Sicilia, Sardegna e altre. Copertura in crescita.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Quanto posso risparmiare con Pedro?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Dipende dalla tua lista e dai supermercati della tua zona. Stima orientativa: 15-30% sulla spesa settimanale. Non è una promessa: i prezzi cambiano.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Pedro è disponibile per iPhone e Android?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sì. Pedro è disponibile su App Store per iOS (iPhone e iPad) e su Google Play per Android.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Cos\'è Pedro e come funziona l\'app per la lista della spesa?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pedro è un\'app gratuita per la lista della spesa. Crei la lista, confronti i prezzi tra i principali supermercati italiani e vedi dove costa meno. iPhone e Android, 60+ province.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Qual è la migliore app per il confronto prezzi supermercati in Italia?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pedro è tra le app gratuite italiane specifiche per il confronto prezzi supermercati. Lista della spesa, confronto tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam, 60+ province. iPhone e Android.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Come posso risparmiare sulla spesa settimanale?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Crea la lista nella app. Premi "Confronta Prezzi". Vai dove costa meno.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Pedro funziona a Milano?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sì. Pedro copre Milano città e provincia, con i supermercati Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam presenti in zona.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Pedro funziona a Roma?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sì. Pedro è attivo a Roma e in tutta la provincia, con copertura delle principali catene (Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin, Pam).'
        }
      },
      {
        '@type': 'Question',
        'name': 'Pedro funziona a Napoli, Torino, Bologna, Firenze?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sì. Pedro è attivo in 17 regioni e oltre 60 province italiane: Milano, Roma, Napoli, Torino, Bologna, Firenze, Genova, Bari, Palermo, Catania, Venezia, Verona, Padova, Brescia, Bergamo e molte altre.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Che differenza c\'è tra Pedro e DoveConviene?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'DoveConviene mostra i volantini dei supermercati. Pedro confronta i prezzi della tua lista della spesa tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam e ti dice il supermercato più economico per la tua lista specifica.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Come si confronta Pedro con Trovaprezzi?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Trovaprezzi è un comparatore prezzi su prodotti in vendita online (elettronica, casa, moda). Pedro è specifico per la spesa alimentare nei supermercati fisici italiani: confronto prezzi tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Pedro mostra i volantini dei supermercati?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Pedro non è un aggregatore di volantini. Confronta direttamente i prezzi dei prodotti della tua lista tra i supermercati, senza passare per il volantino.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Pedro ha il Nutri-Score?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sì. Per molti prodotti Pedro mostra il Nutri-Score (A-E) per aiutarti a scegliere alternative più salutari.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Posso condividere la lista della spesa con un familiare?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'La lista è salvata localmente sul dispositivo. La condivisione tra dispositivi non è disponibile al momento.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Quante città sono coperte da Pedro?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pedro copre 17 regioni italiane e oltre 60 province, includendo i capoluoghi principali e molte città medie. La copertura viene ampliata in base alle nuove catene e punti vendita aggiunti al database.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Pedro richiede registrazione o account?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Pedro funziona senza account. Apri l\'app, crei la lista, confronti i prezzi. L\'indirizzo serve solo a trovare i supermercati vicini.'
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
  },
  // BreadcrumbList (home)
  {
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://pedroshoppinglist.app'
      }
    ]
  },
  // HowTo: Come risparmiare sulla spesa con Pedro
  {
    '@type': 'HowTo',
    'name': 'Come risparmiare sulla spesa con Pedro in 3 passi',
    'description': 'Guida in 3 passi per usare Pedro e pagare meno la spesa confrontando i prezzi tra i principali supermercati italiani.',
    'image': 'https://pedroshoppinglist.app/og-image.png',
    'totalTime': 'PT1M',
    'estimatedCost': {
      '@type': 'MonetaryAmount',
      'currency': 'EUR',
      'value': '0'
    },
    'supply': [
      { '@type': 'HowToSupply', 'name': 'Smartphone iPhone o Android' },
      { '@type': 'HowToSupply', 'name': 'App Pedro installata (gratuita)' }
    ],
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': 'Crea la tua lista',
        'text': 'Scarica Pedro gratis e aggiungi i prodotti che devi comprare. Scegli tra i prodotti precaricati o aggiungi i tuoi personalizzati.',
        'url': 'https://pedroshoppinglist.app/#how-it-works'
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': 'Confronta i prezzi',
        'text': 'Con un tap, Pedro confronta i prezzi della tua lista tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam nella tua zona.',
        'url': 'https://pedroshoppinglist.app/#how-it-works'
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': 'Scegli e risparmia',
        'text': 'Scopri quale supermercato è più conveniente per la tua lista e quanto puoi risparmiare. Vai a fare la spesa informato!',
        'url': 'https://pedroshoppinglist.app/#how-it-works'
      }
    ]
  },
  // ItemList: supermercati supportati
  {
    '@type': 'ItemList',
    'name': 'Supermercati supportati da Pedro per il confronto prezzi',
    'description': 'Catene di supermercati italiane disponibili nel confronto prezzi di Pedro.',
    'numberOfItems': 7,
    'itemListOrder': 'https://schema.org/ItemListUnordered',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'item': { '@type': 'Organization', 'name': 'Esselunga', 'url': 'https://www.esselunga.it' } },
      { '@type': 'ListItem', 'position': 2, 'item': { '@type': 'Organization', 'name': 'Conad', 'url': 'https://www.conad.it' } },
      { '@type': 'ListItem', 'position': 3, 'item': { '@type': 'Organization', 'name': 'Coop', 'url': 'https://www.coop.it' } },
      { '@type': 'ListItem', 'position': 4, 'item': { '@type': 'Organization', 'name': 'Carrefour', 'url': 'https://www.carrefour.it' } },
      { '@type': 'ListItem', 'position': 5, 'item': { '@type': 'Organization', 'name': 'Lidl', 'url': 'https://www.lidl.it' } },
      { '@type': 'ListItem', 'position': 6, 'item': { '@type': 'Organization', 'name': 'Eurospin', 'url': 'https://www.eurospin.it' } },
      { '@type': 'ListItem', 'position': 7, 'item': { '@type': 'Organization', 'name': 'Pam', 'url': 'https://www.pampanorama.it' } }
    ]
  },
  // ItemList: feature principali
  {
    '@type': 'ItemList',
    'name': 'Funzionalità principali di Pedro',
    'description': 'Elenco delle funzionalità chiave dell\'app Pedro per il confronto prezzi supermercati.',
    'numberOfItems': 6,
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Confronta i Prezzi', 'description': 'Confronto istantaneo dei prezzi della tua lista tra i principali supermercati nella tua zona.' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Lista Intelligente', 'description': 'Crea e gestisci la tua lista della spesa con prodotti precaricati e personalizzati.' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Supermercati Vicini', 'description': 'Trova automaticamente i supermercati più vicini a te.' },
      { '@type': 'ListItem', 'position': 4, 'name': 'Risparmio Garantito', 'description': 'Vedi quanto spendi in meno scegliendo il supermercato giusto.' },
      { '@type': 'ListItem', 'position': 5, 'name': 'Funziona Offline', 'description': 'Lista sempre disponibile anche senza connessione internet.' },
      { '@type': 'ListItem', 'position': 6, 'name': 'Privacy First', 'description': 'Usiamo solo l\'indirizzo per trovare supermercati vicini. Nessun tracciamento.' }
    ]
  },
  // Reviews (testimonianze utenti)
  {
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'SoftwareApplication',
      'name': 'Pedro - Lista della Spesa'
    },
    'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' },
    'author': { '@type': 'Person', 'name': 'Maria R.' },
    'reviewBody': 'Finalmente un\'app che mi fa risparmiare davvero! Ogni settimana risparmio almeno 10-15 euro sulla spesa. Semplicissima da usare.'
  },
  {
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'SoftwareApplication',
      'name': 'Pedro - Lista della Spesa'
    },
    'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' },
    'author': { '@type': 'Person', 'name': 'Giuseppe L.' },
    'reviewBody': 'La uso ogni volta che vado a fare la spesa. È fantastico vedere subito quale supermercato conviene di più per quello che devo comprare.'
  },
  {
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'SoftwareApplication',
      'name': 'Pedro - Lista della Spesa'
    },
    'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' },
    'author': { '@type': 'Person', 'name': 'Francesca M.' },
    'reviewBody': 'Con Pedro ho iniziato a pianificare meglio la spesa. Non solo risparmio soldi, ma anche tempo perché vado sempre nel posto giusto.'
  },
  {
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'SoftwareApplication',
      'name': 'Pedro - Lista della Spesa'
    },
    'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' },
    'author': { '@type': 'Person', 'name': 'Andrea B.' },
    'reviewBody': 'App eccezionale! L\'interfaccia è bellissima e funziona perfettamente. Confrontare i prezzi non è mai stato così facile.'
  }
])
</script>

<template>
  <div>
    <SectionsHeroSection />
    <SectionsFeaturesSection />
    <SectionsHowItWorksSection />
    <SectionsSupermarketsSection />
    <SectionsComparisonSection />
    <SectionsTestimonialsSection />
    <SectionsFAQSection />
    <SectionsDownloadSection />
  </div>
</template>
