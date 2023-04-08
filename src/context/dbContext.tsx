import { ICommunityCard, IModalNews, IServerSubscribe } from "@/interface";
import { communities } from "@/mockData/communities";
import { news } from "@/mockData/news";
import { servers } from "@/mockData/servers";
import { createContext, ReactNode, useState } from "react";

type DbContextType = {
  communitiesList: ICommunityCard[];
  serverList: IServerSubscribe[];
  newsList : IModalNews[]
};

type DbContextProviderProps = {
  children: ReactNode;
};

export const DbContext = createContext({} as DbContextType);

export function DbContextProvider(props: DbContextProviderProps) {
  const [communitiesList, setCommunitiesList] =
    useState<ICommunityCard[]>(communities);
  const [serverList, setServerList] = useState<IServerSubscribe[]>(servers);
  const [newsList , setNewsList] = useState<IModalNews[]>(news)
  return (
    <DbContext.Provider
      value={{
        communitiesList,
        serverList,
        newsList
      }}
    >
      {props.children}
    </DbContext.Provider>
  );
}
