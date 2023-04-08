export interface ICommunityCard {
  title: string;
  description: string;
  imgUrl: string;
  type: string;
  color: string;
  disabled: boolean;
  id: string;
  icon?: string;
}

export interface IComunityData {
  name: string;
  avatarUrl: string;
}

export interface IServerSubscribe {
  name: string;
  imgUrl: string;
  status: string;
  id: string;
  category: string;
  type: string;
  canvasLink: string;
  canvasBackground: string;
  image1: string;
  image2: string;
  image3: string;
  primaryColor: string;
  secondaryColor: string;
  ternaryColor: string;
  textColor: string;
}

export interface IModalNews {
  title : string
  color : string
  news : {
    subtitle : string,
    text: string
  }[]
}