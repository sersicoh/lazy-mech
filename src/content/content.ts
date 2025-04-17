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
        name: 'Zmechacona doniczka',
        description:
          'Stylowa doniczka wypełniona naturalnym fińskim mchem chrobotkiem to prosty sposób na dodanie natury do wnętrza – efektownie i bezobsługowo.',
        advantages: [
          'Nie wymaga podlewania ani żadnej pielęgnacji.',
          'Długo zachowuje intensywny kolor i miękką strukturę.',
          'Bezpieczny dla alergików - nie pyli i nie przyciąga kurzu.',
          'Pomaga utrzymać komfortową wilgotność w pomieszczeniu.',
          'Najlepiej czuje się przy wilgotności powietrza 40-60%.',
          'Nie wymaga dostępu do światła.',
          'Nie lubi jak świeci na niego słońce.',
        ],
        imageUrl: 'planter.jpg',
        overlayImageUrl: 'planter_overlay.jpg',
      },
    ],
  },
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
