import type { IContent } from '@/content/content.types';

export const content: IContent = {
  header: 'Dekoracje z mchu',
  footer: 'Leniwy Mech. Wszelkie prawa zastrzeżone',
  lazyMech: {
    title: 'Leniwy Mech',
    description: [
      'Leniwy Mech to nic innego jak fiński mech chrobotek (Cladonia stellaris) umieszczony w stylowej doniczce, którą samodzielnie stworzyłem.',
      'Ten mech jest niezwykle popularny w dekoracjach ze względu na swoją miękką strukturę, naturalny wygląd i właściwości antystatyczne. Praktycznie nie wymaga pielęgnacji, a przy odpowiedniej wilgotności powietrza utrzymuje swój żywy wygląd przez długie lata.',
    ],
    imageUrl: '/logo.png',
  },
  productSection: {
    product: [
      {
        name: 'Zmechacona doniczka',
        description:
          'Zielona ściana z mchu to doskonały sposób na wprowadzenie natury do Twojego wnętrza.',
        advantages: [
          'Nie wymaga podlewania ani nawożenia.',
          'Pochłania wilgoć z otoczenia, co pomaga utrzymać odpowiednią wilgotność.',
          'Jest hipoalergiczny i antystatyczny.',
          'Zachowuje swój kolor i miękką strukturę przez długi czas.',
          'Zalecana wilgotność 40-60%.',
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
