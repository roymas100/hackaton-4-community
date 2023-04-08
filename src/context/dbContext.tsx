import { ICommunityCard, IServerSubscribe } from "@/interface";
import { communities } from "@/mockData/communities";
import { servers } from "@/mockData/servers";
import { createContext, ReactNode, useState } from "react";

type DbContextType = {
  communitiesList: ICommunityCard[];
  serverList: IServerSubscribe[];
};

type DbContextProviderProps = {
  children: ReactNode;
};

export const DbContext = createContext({} as DbContextType);

export function DbContextProvider(props: DbContextProviderProps) {
  const [communitiesList, setCommunitiesList] =
    useState<ICommunityCard[]>(communities);
  const [serverList, setServerList] = useState<IServerSubscribe[]>(servers);
  return (
    <DbContext.Provider
      value={{
        communitiesList,
        serverList,
      }}
    >
      {props.children}
    </DbContext.Provider>
  );
}
