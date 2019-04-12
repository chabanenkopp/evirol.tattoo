export default class TranslationService {
  tRussian = () => {
    return {
      header: {
        tattoo: "Тату",
        shop: "Магазин",
        contacts: "Контакты",
        login: "Войти"
      },
      subHeader: {
        gallery: "Галерея",
        order: "Заказ",
        teaching: "Обучение",
        login: "Войти"
      },
      main: {
        upperSection: {
          buttonPink: "TEST",
          buttonPlay: "Смотреть",
          title: "Работа",
          SubTitle: "Моя страсть",
          paragraph:
            "Я влюблена в искусство и татуировки. И я буду безумно рада поделиться этой страстью с Вами."
        }
      },
      footer: {
        slogan: "‶люди приходят и уходят, но татуировки останутся с тобой‶"
      }
    }
  }

  tEnglish = () => {
    return {
      header: {
        tattoo: "Tattoo",
        shop: "Shop",
        contacts: "Contacts",
        login: "login"
      },
      subHeader: {
        gallery: "Gallery",
        order: "Order",
        teaching: "Teaching",
        login: "login"
      },
      main: {
        upperSection: {
          buttonPink: "get in touch",
          buttonPlay: "play video",
          title: "My Job",
          SubTitle: "Is My Passion",
          paragraph:
            "I am passionate about tattoos and art. And I would be extremely happy to share this passion with you."
        }
      },
      footer: {
        slogan:
          "‶People come and go in your life, but tattoos will always stay with you‶"
      }
    }
  }
}
