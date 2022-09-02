import { createContext, ReactNode, useState } from 'react';

type UserContextProps = {
  children: ReactNode
}

type DataTypes = {
  isModal: boolean;
  setIsModal: (newState: boolean) => void;
  content: {
    title: string,
    body: string
  };
  setContent: (newState: string | any) => void;
}

const initialValue = {
  isModal: false,
  setIsModal: () => {},
  content: {
    title: "",
    body: ""
  },
  setContent: () => {}
}

type Content = {
  title: string,
  body: string
}


const UserContentContext = createContext<DataTypes>(initialValue)

export function UserContentProvider({ children }:UserContextProps) {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [content, setContent] = useState<Content>({
    title: "",
    body: ""
  });

  const myContent = {
    isModal,
    setIsModal,
    content,
    setContent
  }

  return (
    <UserContentContext.Provider value={myContent}>
      { children }
    </UserContentContext.Provider>
  )
}

export default UserContentContext;