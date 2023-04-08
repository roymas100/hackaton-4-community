export const communities = [
  {
    title: "Comunidade do Figma",
    description: "A maior comunidade de design do mundo!!!",
    color: "#99C5FD",
    type: "public",
    disabled: false,
    id: "123",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
  },
  {
    title: "Canonlovers",
    description: "A maior comunidade de fotografia do mundo!!!",
    color: "#000",
    type: "premium",
    disabled: false,
    id: "444",
    icon: "data:image/png;base64,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",
  },
  {
    title: "Briofiteiros de plantão 🌱",
    description:
      "A maior comunidade de botânicos do 4.communitys. Aqui você encontrará tudo relacionado a plantinhas e a plantões!!!",
    imgUrl:
      "https://joaobidu.com.br/wp-content/uploads/2023/04/plantas-que-promovem-bem-estar-em-casa.jpg",
    color: "#121212",
    type: "private",
    disabled: true,
  },
  {
    title: "InfoJr UFBA 💚",
    description:
      "A empresa júnior de tecnologia mais BARRIL do nordeste! Venha participar da nossa comunidade inovadora.",
    imgUrl: "",
    color: "#121212",
    type: "public",
    disabled: true,
  },
  {
    title: "Startups UFBA 💙",
    description:
      "Uma comunidade da Universidade Federal da Bahia para incentivar o empreendedorismo e o espírito de liderança.",
    imgUrl: "",
    color: "#99C5FD",
    type: "private",
    disabled: true,
  },
  {
    title: "Comunidade",
    description:
      "Uma comunidade da Universidade Federal da Bahia para incentivar o empreendedorismo e o espírito de liderança.",
    imgUrl:
      "https://www.globaltechrecruitment.com/wp-content/uploads/2019/03/it-1-1.jpg",
    color: "#99C5FD",
    type: "public",
    disabled: true,
  },
  {
    title: "Comunidade",
    description:
      "Uma comunidade da Universidade Federal da Bahia para incentivar o empreendedorismo e o espírito de liderança.",
    imgUrl: "",
    color: "#873e23",
    type: "private",
    disabled: true,
  },
];
