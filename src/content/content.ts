import type { IContent } from '@/content/content.types';

export const content: IContent = {
  header: 'Dekoracje z mchu',
  footer: 'Leniwy Mech. Wszelkie prawa zastrzeżone',
  lazyMech: {
    title: 'Leniwy Mech',
    description: [
      'Leniwy Mech to naturalny fiński mech chrobotek (Cladonia stellaris), wyróżniający się miękką strukturą, antystatycznymi właściwościami i charakterystycznym, dekoracyjnym wyglądem.',
      'Nie wymaga podlewania ani przycinania — przy odpowiedniej wilgotności powietrza zachowuje świeży wygląd przez długie lata, pozostając efektownym i bezobsługowym elementem każdej przestrzeni.',
      'Świetnie sprawdza się w różnych pomieszczeniach domowych, takich jak salon, sypialnia czy łazienka, a także w przestrzeniach usługowych – od biur po salony urody.',
    ],
    imageUrl: '/logo.png',
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
      },
    ],
  },
  emailSection: {
    title: 'Chcesz taką ozdobę?',
    description: 'Zostaw swój adres e-mail, na który wyślemy Ci niezbędne informacje :)',
    emailPlaceholder: 'Adres e-mail',
    emailHelperText: 'Nie udostępnimy Twojego adresu nikomu innemu.',
    submitButton: 'Wyślij',
  },
};
