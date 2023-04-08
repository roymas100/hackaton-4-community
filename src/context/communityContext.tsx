import { IServerSubscribe } from "@/interface";
import { communities } from "@/mockData/communities";
import { servers } from "@/mockData/servers";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface CommunityProviderProps extends React.PropsWithChildren {
  setCurrentCommunity: Dispatch<SetStateAction<IServerSubscribe | undefined>>;
  currentCommunity: IServerSubscribe | undefined;
}

export const CommunityContext = createContext({} as CommunityProviderProps);

export function CommunityProvider(props: React.PropsWithChildren) {
  const [currentCommunity, setCurrentCommunity] = useState<
    IServerSubscribe | undefined
  >(undefined);

  return (
    <CommunityContext.Provider
      value={{
        setCurrentCommunity,
        currentCommunity,
      }}
    >
      {props.children}
    </CommunityContext.Provider>
  );
}
