import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { TiDeleteOutline } from 'react-icons/ti'
import { FiEdit3 } from 'react-icons/fi'
import StyleOption from './StyleOption'

export default function CardOption () {
  return (
    <StyleOption>
      <abbr title="Create new content">
        <BsPlusLg className="icon-options" />
      </abbr>
      <abbr title="Edit content">
        <FiEdit3 className="icon-options" />
      </abbr>
      <abbr title="Delete Content">
        <TiDeleteOutline className="icon-options" />
      </abbr>
    </StyleOption>
  )
}
