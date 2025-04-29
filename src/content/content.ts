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
        name: 'Mech Gagatek',
        description:
          'Największy z naszej rodziny mchu - dumny, efektowny i zawsze na pierwszym planie.',
        imageUrl: ['gagatek.jpg'],
        overlayImageUrl: 'gagatek_overlay.jpg',
      },
      {
        name: 'Mech Smyk',
        description:
          'Mniejszy, ale równie czarujący - idealny do mniejszych przestrzeni i wesołych aranżacji.',
        imageUrl: ['smyk1.jpg', 'smyk2.jpg'],
      },
      {
        name: 'Mech Niuchacz',
        description:
          'Ten sam mech, ta sama radość - ale z bonusem w postaci przyjemnego zapachu dzięki funkcji dyfuzora.',
        imageUrl: ['niuchacz1.jpg', 'niuchacz2.jpg'],
      },
      {
        name: 'Mała Ekipa',
        description:
          'Zestaw dwóch doniczek - Smyka i Niuchacza. Kompaktowy, stylowy i gotowy do wręczenia. Jeden pachnie, oba zachwycają. Sprawdzi się jako prezent albo detal do przytulnego wnętrza.',
        imageUrl: ['ekipa1.jpg', 'ekipa2.jpg'],
      },
      {
        name: 'Mchu Banda',
        description:
          'Zestaw trzech uroczych doniczek z mchem - dwa Smyki i jeden Niuchacz. Idealny prezent lub gotowa dekoracja do mieszkania, biura albo łazienki. Pachnie, wygląda i niczego nie wymaga.',
        imageUrl: ['banda1.jpg', 'banda2.jpg'],
      },
    ],
  },
  arrangements: [
    {
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
    title: 'Chcesz taką ozdobę?',
    description:
      'Każde zamówienie będzie realizowane indywidualnie, wystarczy, że podasz mi swój adres e-mail i podasz ilość sztuk, które chcesz zamówić, a ja się z Tobą skontaktuję i ustalę szczegóły.',
    emailPlaceholder: 'Adres e-mail',
    quantityPlaceholder: 'Ilość sztuk',
    emailHelperText: 'Nie udostępnimy Twojego adresu nikomu innemu.',
    submitButton: 'Wyślij',
  },
};
