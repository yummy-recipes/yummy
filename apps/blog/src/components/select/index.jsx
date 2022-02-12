import React from 'react'
import MagnifierIcon from '../icons/Magnifier'
import {default as ReactSelect} from 'react-select/lib/Async'
import { components } from 'react-select'

const Option = (props) => {
  return <components.Option {...props} className='testid-menu-option' />
}

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <MagnifierIcon />
    </components.DropdownIndicator>
  );
};

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    marginTop: 0,
    borderRadius: 0
  }),
  menuList: (provided, state) => ({
    ...provided,
    padding: 0
  })
}

export default function Select(props) {
  return <ReactSelect
    styles={customStyles}
    components={{DropdownIndicator, Option}}
    {...props}
  />
}
