export const PLANS = [
    {
      name: 'free',
      slug: 'free',
      quota: 10,
      accessLimit: 400,
      price: {
        amount: 0,
        priceIds: {
          test: '',
          production: '',
        },
      },
    },
    {
      name: 'pro',
      slug: 'pro',
      quota: 50,
      accessLimit: 10000,
      price: {
        amount: 14,
        priceIds: {
          test: 'price_1OfFpUSGKZFfVccXopPpmMUC',
          production: '',
        },
      },
    },
  ]