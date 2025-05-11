import type { IContent } from '@/content/content.types';

export const content: IContent = {
  header: 'Dekoracje z mchu',
  footer: 'KuzyNostra. Wszelkie prawa zastrzeżone',
  lazyMech: {
    title: 'Cześć!',
    description: [
      'Jestem Leniwy Mech - naturalny fiński chrobotek (Cladonia stellaris), który lubi dobrze wyglądać bez zbędnego wysiłku.',
      'Nie trzeba mnie podlewać ani przycinać. Wystarczy, że w powietrzu jest trochę wilgoci, a przez długie lata będę wyglądać świeżo i dekoracyjnie.',
      'Pasuję do każdego wnętrza - od salonu, przez łazienkę, po biuro czy salon urody. Gdziekolwiek mnie postawisz, wprowadzę tam trochę natury i spokoju.',
    ],

    imageUrl: 'logo.png',
  },
  productSection: {
    product: [
            {
        id: 'banda',
        name: 'Mchu Banda',
        description:
          'Zestaw trzech uroczych doniczek z mchem - dwa Smyki i jeden Niuchacz. Idealny prezent lub gotowa dekoracja do mieszkania, biura albo łazienki. Pachnie, wygląda i niczego nie wymaga.',
        imageUrl: [
          'banda_onyx_table.jpg',
          'banda_marble_table.jpg',
          'banda_onyx.jpg',
          'banda_onyx_box.jpg',
          'banda_marble.jpg',
          'banda_marble_box.jpg',
        ],
      },
      {
      id: 'dzienMatki',
      name: 'Dzień Matki 2025',
      description:
       'Bo Mama zasługuje na wszystko, co najlepsze - nawet na kawałek lasu w doniczce. Limitowana edycja naszego zestawu Mchu Banda - elegancka wersja tylko na Dzień Matki. 30 zestawów w czerni i zaledwie 5 w wersji marmurowej. Stylowy, pachnący i zawsze oddany. Jak prawdziwy członek rodziny...',
      imageUrl: ['dzienMatki.jpg'],
     },
      {
        id: 'smyk',
        name: 'Mech Smyk',
        soldOut: true,
        description:
          'Mniejszy, ale równie czarujący - idealny do mniejszych przestrzeni i wesołych aranżacji.',
        imageUrl: [
          'smyk_onyx.jpg',
          'smyk_onyx_table.jpg',
          'smyk_marble.jpg',
          'smyk_marble_table.jpg',
        ],
      },
      {
        id: 'niuchacz',
        name: 'Mech Niuchacz',
        soldOut: true,
        description:
          'Ten sam mech, ta sama radość - ale z bonusem w postaci przyjemnego zapachu dzięki funkcji dyfuzora.',
        imageUrl: ['niuchacz_marble.jpg', 'niuchacz_onyx.jpg'],
      },
      {
        id: 'ekipa',
        name: 'Mała Ekipa',
        soldOut: true,
        description:
          'Zestaw dwóch doniczek - Smyka i Niuchacza. Kompaktowy, stylowy i gotowy do wręczenia. Jeden pachnie, oba zachwycają. Sprawdzi się jako prezent albo detal do przytulnego wnętrza.',
        imageUrl: [
          'ekipa_onyx.jpg',
          'ekipa_onyx_table.jpg',
          'ekipa_marble.jpg',
          'ekipa_marble_table.jpg',
        ],
      },
      {
        id: 'mechrzestny',
        name: 'Ojciec Mechrzestny',
        description:
          'Największy z naszej rodziny mchu - dumny, efektowny i zawsze napierwszym planie. Od niego wszystko się zaczęło.',
        imageUrl: [
          'mechrzestny_onyx.jpg',
          'mechrzestny_marble.jpg',
          'mechrzestny_overlay.jpg',
          'mechrzestny_onyx_table.jpg',
          'mechrzestny_marble_table.jpg',
        ],
      },
    ],
  },
  arrangements: [
    {
      id: 'kololove',
      location: {
        title: 'KoloLove - salon fryzjerski',
        link: 'https://maps.app.goo.gl/K4LVSbuBd9yh83Qu5',
      },
      description:
        'Nasze doniczki zamieszkały w salonie Kololove we Wrocławiu przy Bogatyńskiej 6 - wpadnij je zobaczyć na żywo, a przy okazji możesz też odświeżyć fryzurę. One już to zrobiły!',
      imageUrls: ['kololove1.jpg', 'kololove2.jpg'],
    },
  ],
  emailSection: {
    title: 'Przygarnij mech',
    description:
      'Zostaw nam swój adres e-mail, a my się z Tobą skontaktujemy i ustalimy szczegóły.',
    emailPlaceholder: 'Adres e-mail',
    quantityPlaceholder: 'Ilość sztuk',
    emailHelperText: 'Nie udostępniamy Twojego adresu nikomu.',
    submitButton: 'Wyślij',
  },
};
