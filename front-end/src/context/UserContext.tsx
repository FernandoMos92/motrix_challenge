import { createContext, ReactNode, useState } from 'react';
import { listContent } from '../helpers/api/request/api';
import { useQuery } from '@tanstack/react-query'

type UserContextProps = {
  children: ReactNode
}

type ContentInput = {
  title: string,
  body: string
}

type ContentReponse = {
  id: number,
  title: string, 
  body: string,
}

type FilteredContent = {
  id: number,
  title: string, 
  body: string,
  createdAt: Date,
  updatedAt: Date
}

type DataTypes = {
  isModal: boolean;
  setIsModal: (newState: boolean) => void;
  isOpenModalDetail: boolean;
  setIsOpenModalDetail: (newState: boolean) => void;
  content: {
    title: string,
    body: string
  };
  setContent: (newState: string | any) => void;
  listOfContent: ContentReponse[];
  setListOfContent: (newState: string | any) => void;
  filteredContent: FilteredContent[] ;
  setFilteredContent: (newState: string | any) => void;
  searchContent: FilteredContent[] ;
  setSearchContent: (newState: string | any) => void;
  history: FilteredContent[] ;
  setHistory: (newState: string | any) => void;
}

const initialValue = {
  isModal: false,
  setIsModal: () => { },
  isOpenModalDetail: false,
  setIsOpenModalDetail: () => {},
  content: {
    title: "",
    body: ""
  },
  setContent: () => { },
  listOfContent: [],
  setListOfContent: () => { },
  filteredContent: [],
  setFilteredContent: () => { },
  searchContent: [],
  setSearchContent: () => { },
  history: [],
  setHistory: () => { },
}

const UserContentContext = createContext<DataTypes>(initialValue)

export function UserContentProvider({ children }:UserContextProps) {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isOpenModalDetail, setIsOpenModalDetail] = useState<boolean>(false);
  const [listOfContent, setListOfContent] = useState<ContentReponse[]>([])
  const [filteredContent, setFilteredContent] = useState<FilteredContent[]>([])
  const [searchContent, setSearchContent] = useState<FilteredContent[]>([])
  const [history, setHistory] = useState<FilteredContent[]>([])
  const [content, setContent] = useState<ContentInput>({
    title: "",
    body: ""
  });
  
  useQuery(['contents'], listContent, {
    onSuccess: (res) => {
      setListOfContent(res.data)
    }
  })

  const myContent = {
    isModal,
    setIsModal,
    isOpenModalDetail,
    setIsOpenModalDetail,
    content,
    setContent,
    listOfContent,
    setListOfContent,
    filteredContent,
    setFilteredContent,
    searchContent,
    setSearchContent,
    history,
    setHistory
  }
  
  return (
    <UserContentContext.Provider value={myContent}>
      { children }
    </UserContentContext.Provider>
  )
}

export default UserContentContext;