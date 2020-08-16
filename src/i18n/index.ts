import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      sitemap: {
        product: "Product",
        popular: "Popular",
        trending: "Trending",
        guided: "Guided",
        products: "Products",
        company: "Company",
        press: "Press Releases",
        mission: "Mission",
        strategy: "Strategy",
        about: "About",
        info: "Info",
        support: "Support",
        customerService: "Customer Service",
        getStarted: "Get Started Guide",
        followUs: "Follow Us",
      },
      section: {
        header: "What we can help with",
        section1: {
          header: "hair loss",
          subheader: "Hair loss needn’t be irreversible. We can help!",
          description:
            "Hair loss needn’t be irreversible. There’s a scientifically proven way that’s most effective in keeping and regrowing your hair. It’s all to do with blocking a pesky hormone called DHT. That’s the bad guy behind hair loss. And you can keep him at bay. The choice is yours.",
        },
      },
      header: {
        quizButton: "Take the quiz",
        mainText1: "BE GOOD",
        mainText2: "TO YOURSELF",
        description:
          "We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
      },
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
