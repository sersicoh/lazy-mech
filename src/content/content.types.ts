export interface IArrangements {
  location?: {
    title: string;
    link: string;
  };
  description: string;
  imageUrls: string[];
}

export interface IContent {
  header?: string;
  footer: string;
  lazyMech: {
    title: string;
    description: string[];
    imageUrl: string;
  };
  productSection: {
    product: {
      name: string;
      description: string;
      advantages: string[];
      imageUrl: string;
      overlayImageUrl: string;
      arrangements: IArrangements[];
    }[];
  };
  emailSection: {
    title: string;
    description: string;
    emailPlaceholder: string;
    emailHelperText: string;
    quantityPlaceholder: string;
    submitButton: string;
  };
}
