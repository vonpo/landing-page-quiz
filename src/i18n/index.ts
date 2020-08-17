import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      summary: {
        anyTrue:
          "Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which maybe used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication.",
        allFalse:
          "Great news! We have the perfect treatment for your hair loss. Proceed to www.manual.co, and prepare to say hello to your new hair!",
      },
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
        section2: {
          header: "Erectile Dysfunction",
          subheader:
            "Erections can be a tricky thing. But no need to feel down!",
          description:
            "There are plenty of reasons why you might be having difficulty in the erection department. We can help you figure out possible reasons why. And prescribe a pill if needed.",
        },
      },
      header: {
        takeTheQuiz: "TAKE THE QUIZ",
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
