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
    }[];
  };
  emailSection: {
    title: string;
    description: string;
    emailPlaceholder: string;
    emailHelperText: string;
    submitButton: string;
  };
}
