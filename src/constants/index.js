const navLinks = [
  {
    name: "Арбитраж",
    link: "#experience",
  },
  {
    name: "Отзывы",
    link: "#testimonials",
  },
];

const words = [
  { text: "Открыто", imgPath: "/images/ideas.svg" },
  { text: "Прозрачно", imgPath: "/images/concepts.svg" },
  { text: "Честно", imgPath: "/images/designs.svg" },
  { text: "Открыто", imgPath: "/images/ideas.svg" },
  { text: "Прозрачно", imgPath: "/images/concepts.svg" },
  { text: "Честно", imgPath: "/images/designs.svg" },
  { text: "Открыто", imgPath: "/images/ideas.svg" },
  { text: "Прозрачно", imgPath: "/images/concepts.svg" },
];

const counterItems = [
  { value: 4, suffix: "%", label: "Доходность со сделок за круг" },
  { value: 8, suffix: "+", label: "Лет опыта в арбитраже" },
  { value: 90, suffix: "%", label: "Успешных связок" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Точность",
    desc: "Реализация арбитражных возможностей с точностью и вниманием к каждой детали.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Прозрачность",
    desc: "Информируем о сделках, рисках и прибылях на каждом этапе для полной прозрачности.",
  },
  {
    imgPath: "/images/time.png",
    title: "Эффективность",
    desc: "Обеспечение быстрой и эффективной реализации арбитражных транзакций для максимизации прибыли.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    // name: "React Developer",
    modelPath: "/images/1.jpg",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    // name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    // name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    // name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    // name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Бесплатное обучение",
    date: "January 2023 - Present",
    responsibilities: [
      "Вы будете под личным руководством наставника",
      "Даже если у вас нету опыта, с вами будет на связи профессионал.",
      "Даём все необходимые инструкции и поддержку на каждом этапе.",
    ],
  },
  {
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo1.png",
    title: "Торговые сигналы",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Регулярные сигналы по крипто-арбитражу с высокой точностью.",
      "Подробные инструкции к каждому сигналу: вход, выход, риск.",
      "Поддержка и разбор сделок для уверенной торговли.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo1.png",
    title: "Арбитражные сделки",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Готовые арбитражные сделки с пошаговым объяснением.",
      "Минимальные риски за счёт проверенных связок.",
      "Понятный формат: что делать, куда заходить и когда выходить.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo1.png",
    title: "Закрытые VIP группы",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Закрытые группы, где всё объясняется простым языком.",
      "Можно задать любой вопрос и получить помощь.",
      "Подсказки и обновления прямо во время работы.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

// constants/index.js
const testimonials = [
  {
    id: 1,
    image: "/images/1.jpg",
    size: "lg", // влияет на scale
  },
  {
    id: 2,
    image: "/images/2.jpg",
    size: "md",
  },
  {
    id: 3,
    image: "/images/3.jpg",
    size: "sm",
  },
  {
    id: 4,
    image: "/images/4.jpg",
    size: "md",
  },
  {
    id: 5,
    image: "/images/5.jpg",
    size: "lg",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
