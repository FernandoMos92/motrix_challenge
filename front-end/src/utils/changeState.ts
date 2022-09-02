import { Dispatch, SetStateAction } from "react";

type TypeState = {
  modal:boolean
}

const changeState = (state: boolean, setState: Dispatch<SetStateAction<TypeState | any>>) => {
  setState(!state)
}

export default changeState;