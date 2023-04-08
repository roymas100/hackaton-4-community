import { communities } from "@/mockData/communities";
import { servers } from "@/mockData/servers";
import { createContext, ReactNode, useState } from "react";

export interface ICommunityCard  {
  title : string
  description : string
  imgUrl : string
  type: string
  color : string
}


export interface IComunityData {
  name : string
  avatarUrl : string
}

export interface IServerSubscribe {
  name : string
  imgUrl : string
  status : string
}

type DbContextType = {
  communitiesList : ICommunityCard[]
  serverList : IServerSubscribe[]

};

type DbContextProviderProps = {
  children: ReactNode;
};







export const DbContext = createContext({} as DbContextType);

export function DbContextProvider(props: DbContextProviderProps) {

    const [ communitiesList, setCommunitiesList] = useState<ICommunityCard[]>(communities)
    const [ serverList , setServerList] = useState<IServerSubscribe[]>(servers)
    return (
        <DbContext.Provider
          value={{
            communitiesList,
            serverList
          }}
        >
          {props.children}
        </DbContext.Provider>
      );

 
}