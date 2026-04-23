<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'Pedro - Confronto Prezzi Supermercati | 60+ Catene Italiane',
  ogTitle: 'Pedro - Confronto Prezzi Supermercati Gratis',
  description: 'Pedro confronta i prezzi dei supermercati: Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin, Pam, Bennet, Famila e altre 50+ catene italiane. Gratis, iPhone e Android.',
  ogDescription: 'Confronto prezzi tra 60+ catene di supermercati italiani. Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin, Pam, Bennet, Famila e altre. Spendi meno.',
  ogImage: 'https://pedroshoppinglist.app/og-image.png',
  ogUrl: 'https://pedroshoppinglist.app',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Pedro - Confronto Prezzi Supermercati | 60+ Catene Italiane',
  twitterDescription: 'Confronto prezzi tra 60+ catene di supermercati italiani. Gratis, iPhone e Android.'
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
    'description': 'Pedro è l\'app italiana gratuita per il confronto prezzi supermercati e la lista della spesa. Confronta oltre 60 catene (Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin, Pam, Bennet, Famila, MD, Despar, Iper, Decò, Unes, Basko, Tigre, Mercatò, Sole365 e altre) in 17 regioni e 60+ province.',
    'featureList': 'Confronto prezzi tra 60+ catene di supermercati italiani, Lista della spesa, Nutri-Score prodotti, Funzionamento offline, Copertura 17 regioni e 60+ province',
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
    'description': 'Pedro è l\'app italiana di riferimento per il confronto prezzi dei supermercati. Copre oltre 60 catene (Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin, Pam, Bennet, Famila e altre) in 17 regioni e 60+ province.',
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
    'name': 'Pedro - App Lista della Spesa',
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
          'text': 'Crei la lista della spesa, premi "Confronta Prezzi" e Pedro ti mostra il supermercato più economico per la tua lista tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin, Pam, Bennet, Famila, MD, Despar e altre 50+ catene italiane.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Qual è la migliore app per il confronto prezzi supermercati in Italia?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pedro. È l\'app italiana gratuita per il confronto prezzi supermercati: confronto in tempo reale tra 60+ catene (Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin, Pam, Bennet, Famila, MD, Iper, Despar, Decò), iPhone e Android, 60+ province coperte.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Pedro è gratuito?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sì. Pedro è gratuito, senza abbonamenti e senza limiti di uso. Lista della spesa, confronto prezzi, Nutri-Score e uso offline della lista sono inclusi.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Quali supermercati sono supportati nel confronto prezzi?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pedro confronta i prezzi di oltre 60 catene italiane: Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin, Pam, Bennet, Famila, MD, Despar, Iper, Decò, Unes, Basko, Tigre, Mercatò, Sole365, Emisfero, Panorama, Ipercoop, Coop Alleanza, Coop Lombardia, Conad City, Carrefour Market, Interspar, Eurospar, Crai e altre.'
        }
      },
      {
        '@type': 'Question',
        'name': 'In quali città e province è attivo Pedro?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pedro è attivo in 17 regioni e oltre 60 province italiane: Milano, Roma, Napoli, Torino, Bologna, Firenze, Genova, Bari, Palermo, Catania, Venezia, Verona, Padova, Brescia, Bergamo, Cagliari, Messina e molte altre. Copertura in continua crescita.'
        }
      },
      {
        '@type': 'Question',
        'name': 'I prezzi sono sempre aggiornati?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'I prezzi vengono aggiornati regolarmente. Possono variare per località e promozioni in corso: verifica sempre in negozio prima di grandi acquisti.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Posso usare Pedro offline?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sì. La lista della spesa funziona offline. Il confronto prezzi richiede connessione, ma una volta eseguito i risultati restano consultabili senza internet.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Pedro è disponibile per iPhone e Android?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sì. Pedro è disponibile su App Store (iOS, iPhone e iPad) e su Google Play (Android). Download gratuito.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Quanto posso risparmiare con Pedro?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Dipende dalla lista e dai supermercati della tua zona. Stima orientativa: 15-30% sulla spesa settimanale. Non è una promessa: i prezzi cambiano.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Che differenza c\'è tra Pedro e app di volantini come DoveConviene?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'DoveConviene e app simili aggregano i volantini dei supermercati. Pedro confronta direttamente i prezzi della tua lista specifica tra 60+ catene italiane e ti indica il supermercato più conveniente per quello che compri tu — senza passare per il volantino.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Come si confronta Pedro con Trovaprezzi?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Trovaprezzi compara prezzi di prodotti online (elettronica, casa, moda). Pedro è specifico per la spesa alimentare nei supermercati fisici italiani: confronto prezzi tra 60+ catene.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Pedro ha il Nutri-Score?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sì. Per molti prodotti Pedro mostra il Nutri-Score (A-E) per scegliere alternative più salutari.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Pedro raccoglie i miei dati personali?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pedro usa l\'indirizzo solo per trovare i supermercati vicini e non condivide i dati con terze parti. Dettagli nella Privacy Policy.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Pedro richiede registrazione o account?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sì. La registrazione (gratuita) serve per sincronizzare la lista della spesa tra dispositivi e personalizzare il confronto prezzi in base alla tua zona.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Come posso contattare il supporto?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Scrivi a info.pedroapp@gmail.com. Rispondiamo entro 24-48 ore lavorative.'
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
        'text': 'Con un tap, Pedro confronta i prezzi della tua lista tra 60+ catene (Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin, Pam, Bennet, Famila, MD, Despar, Iper, Decò e altre) nella tua zona.',
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
    'description': 'Oltre 60 catene di supermercati italiane disponibili nel confronto prezzi di Pedro.',
    'numberOfItems': 60,
    'itemListOrder': 'https://schema.org/ItemListUnordered',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'item': { '@type': 'Organization', 'name': 'Esselunga', 'url': 'https://www.esselunga.it' } },
      { '@type': 'ListItem', 'position': 2, 'item': { '@type': 'Organization', 'name': 'Conad', 'url': 'https://www.conad.it' } },
      { '@type': 'ListItem', 'position': 3, 'item': { '@type': 'Organization', 'name': 'Coop', 'url': 'https://www.coop.it' } },
      { '@type': 'ListItem', 'position': 4, 'item': { '@type': 'Organization', 'name': 'Carrefour', 'url': 'https://www.carrefour.it' } },
      { '@type': 'ListItem', 'position': 5, 'item': { '@type': 'Organization', 'name': 'Lidl', 'url': 'https://www.lidl.it' } },
      { '@type': 'ListItem', 'position': 6, 'item': { '@type': 'Organization', 'name': 'Eurospin', 'url': 'https://www.eurospin.it' } },
      { '@type': 'ListItem', 'position': 7, 'item': { '@type': 'Organization', 'name': 'Pam', 'url': 'https://www.pampanorama.it' } },
      { '@type': 'ListItem', 'position': 8, 'item': { '@type': 'Organization', 'name': 'Bennet', 'url': 'https://www.bennet.com' } },
      { '@type': 'ListItem', 'position': 9, 'item': { '@type': 'Organization', 'name': 'Famila' } },
      { '@type': 'ListItem', 'position': 10, 'item': { '@type': 'Organization', 'name': 'MD' } },
      { '@type': 'ListItem', 'position': 11, 'item': { '@type': 'Organization', 'name': 'Despar', 'url': 'https://www.despar.it' } },
      { '@type': 'ListItem', 'position': 12, 'item': { '@type': 'Organization', 'name': 'Iper', 'url': 'https://www.iper.it' } },
      { '@type': 'ListItem', 'position': 13, 'item': { '@type': 'Organization', 'name': 'Decò Supermercati' } },
      { '@type': 'ListItem', 'position': 14, 'item': { '@type': 'Organization', 'name': 'Unes' } },
      { '@type': 'ListItem', 'position': 15, 'item': { '@type': 'Organization', 'name': 'Basko' } },
      { '@type': 'ListItem', 'position': 16, 'item': { '@type': 'Organization', 'name': 'Tigre' } },
      { '@type': 'ListItem', 'position': 17, 'item': { '@type': 'Organization', 'name': 'Mercatò' } },
      { '@type': 'ListItem', 'position': 18, 'item': { '@type': 'Organization', 'name': 'Sole365' } },
      { '@type': 'ListItem', 'position': 19, 'item': { '@type': 'Organization', 'name': 'Emisfero' } },
      { '@type': 'ListItem', 'position': 20, 'item': { '@type': 'Organization', 'name': 'Panorama' } },
      { '@type': 'ListItem', 'position': 21, 'item': { '@type': 'Organization', 'name': 'Ipercoop' } },
      { '@type': 'ListItem', 'position': 22, 'item': { '@type': 'Organization', 'name': 'Coop Alleanza 3.0' } },
      { '@type': 'ListItem', 'position': 23, 'item': { '@type': 'Organization', 'name': 'Coop Lombardia' } },
      { '@type': 'ListItem', 'position': 24, 'item': { '@type': 'Organization', 'name': 'Ipercoop Lombardia' } },
      { '@type': 'ListItem', 'position': 25, 'item': { '@type': 'Organization', 'name': 'Conad City' } },
      { '@type': 'ListItem', 'position': 26, 'item': { '@type': 'Organization', 'name': 'Spazio Conad' } },
      { '@type': 'ListItem', 'position': 27, 'item': { '@type': 'Organization', 'name': 'Conad Tuday' } },
      { '@type': 'ListItem', 'position': 28, 'item': { '@type': 'Organization', 'name': 'Carrefour Market' } },
      { '@type': 'ListItem', 'position': 29, 'item': { '@type': 'Organization', 'name': 'Carrefour Express' } },
      { '@type': 'ListItem', 'position': 30, 'item': { '@type': 'Organization', 'name': 'Carrefour Contact' } },
      { '@type': 'ListItem', 'position': 31, 'item': { '@type': 'Organization', 'name': 'Interspar' } },
      { '@type': 'ListItem', 'position': 32, 'item': { '@type': 'Organization', 'name': 'Eurospar' } },
      { '@type': 'ListItem', 'position': 33, 'item': { '@type': 'Organization', 'name': 'Despar-Gieffe' } },
      { '@type': 'ListItem', 'position': 34, 'item': { '@type': 'Organization', 'name': 'Crai' } },
      { '@type': 'ListItem', 'position': 35, 'item': { '@type': 'Organization', 'name': 'Crai Tirreno' } },
      { '@type': 'ListItem', 'position': 36, 'item': { '@type': 'Organization', 'name': 'Famila Superstore' } },
      { '@type': 'ListItem', 'position': 37, 'item': { '@type': 'Organization', 'name': 'Dpiù' } },
      { '@type': 'ListItem', 'position': 38, 'item': { '@type': 'Organization', 'name': 'Pewex' } },
      { '@type': 'ListItem', 'position': 39, 'item': { '@type': 'Organization', 'name': 'Hurrà' } },
      { '@type': 'ListItem', 'position': 40, 'item': { '@type': 'Organization', 'name': 'Elite Supermercati' } },
      { '@type': 'ListItem', 'position': 41, 'item': { '@type': 'Organization', 'name': 'Dodecà' } },
      { '@type': 'ListItem', 'position': 42, 'item': { '@type': 'Organization', 'name': 'Maxistore Decò' } },
      { '@type': 'ListItem', 'position': 43, 'item': { '@type': 'Organization', 'name': 'Decò Gourmet' } },
      { '@type': 'ListItem', 'position': 44, 'item': { '@type': 'Organization', 'name': 'Decò Superstore' } },
      { '@type': 'ListItem', 'position': 45, 'item': { '@type': 'Organization', 'name': 'Il Viaggiator Goloso' } },
      { '@type': 'ListItem', 'position': 46, 'item': { '@type': 'Organization', 'name': 'Oasi Supermercati' } },
      { '@type': 'ListItem', 'position': 47, 'item': { '@type': 'Organization', 'name': 'InCoop' } },
      { '@type': 'ListItem', 'position': 48, 'item': { '@type': 'Organization', 'name': 'Extracoop' } },
      { '@type': 'ListItem', 'position': 49, 'item': { '@type': 'Organization', 'name': 'Amici di Casa Coop' } },
      { '@type': 'ListItem', 'position': 50, 'item': { '@type': 'Organization', 'name': 'Coop Supermercati di Sardegna' } },
      { '@type': 'ListItem', 'position': 51, 'item': { '@type': 'Organization', 'name': 'Iper Battocchio' } },
      { '@type': 'ListItem', 'position': 52, 'item': { '@type': 'Organization', 'name': 'Ipercarni' } },
      { '@type': 'ListItem', 'position': 53, 'item': { '@type': 'Organization', 'name': 'Ipertriscount' } },
      { '@type': 'ListItem', 'position': 54, 'item': { '@type': 'Organization', 'name': 'Rossotono Market' } },
      { '@type': 'ListItem', 'position': 55, 'item': { '@type': 'Organization', 'name': 'Rossotono Local' } },
      { '@type': 'ListItem', 'position': 56, 'item': { '@type': 'Organization', 'name': 'Tigotà' } },
      { '@type': 'ListItem', 'position': 57, 'item': { '@type': 'Organization', 'name': 'La Scelta' } },
      { '@type': 'ListItem', 'position': 58, 'item': { '@type': 'Organization', 'name': 'Euroesse Supermarket' } },
      { '@type': 'ListItem', 'position': 59, 'item': { '@type': 'Organization', 'name': 'To.market' } },
      { '@type': 'ListItem', 'position': 60, 'item': { '@type': 'Organization', 'name': 'Gelmarket' } }
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
      { '@type': 'ListItem', 'position': 2, 'name': 'Lista della Spesa', 'description': 'Crea la lista della spesa con prodotti precaricati o personalizzati.' },
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
