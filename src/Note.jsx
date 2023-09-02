import React from 'react'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Note(props) {
  return (
    <ul>
      {props.notes.map((items, index) => {
        return (<li
          key={index}
          className='space-x-3 font-light uppercase text-[30px]'
        >
          <span><RadioButtonCheckedIcon/></span>
          <span>{items}</span>
          <span
          onClick={() => {
            props.remove(index);
          }}
          ><DeleteIcon/></span>
        </li>
        )
      })}
    </ul>
  )
}
