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
                    buttonPink: "Заказать",
                    buttonPlay: "Смотреть",
                    title: "Работа",
                    SubTitle: "Моя страсть",
                    paragraph:
                        "Я влюблена в искусство и татуировки. И я буду безумно рада поделиться этой страстью с Вами."
                }
            },
            footer: {
                slogan: "‶люди приходят и уходят, но татуировки останутся с тобой‶"
            },
            contactForm: {
                contactUs: "Напишите мне",
                title: "Будем",
                subTitle: "На Связи",
                paragraph:
                    "Я стремлюсь сделать своих клиентов счастливыми. Если у Вас есть какие-либо вопросы, Вы в правильном месте! Пожалуйста, заполните форму, и я свяжусь с Вами в ближайшие 24 часа.",
                submit: "отправить",
                placeholder: [
                    "*Имя",
                    "*Фамилия",
                    "*Рабочий email",
                    "Название фирмы",
                    "Номер телефона",
                    "*Тема сообщения",
                    "*Напишите здесь Ваше сообщение..."
                ]
            },
            loginWarning:'Логин находится в разработке'
        }
    };

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
            },
            contactForm: {
                contactUs: "contact me",
                title: "Let‘s Get",
                subTitle: "In Touch",
                paragraph:
                    "Here at Evirol Tattoo, I'm dedicated to making my customers happy. If you have a question or concern, you've come to the right place. Please fill out this form and I will get back to you within 24 hours.",
                submit: "send",
                placeholder: [
                    "*First name",
                    "*Last name",
                    "*Work email",
                    "Company name",
                    "Phone number",
                    "*Email subject",
                    "*Put your message in here..."
                ]
            },
            loginWarning:'Login is not yet available'
        }
    }
}
