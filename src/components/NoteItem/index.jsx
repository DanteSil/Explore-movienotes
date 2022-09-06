import { Container } from './styles'

import { FiPlus, FiX } from 'react-icons/fi' 

export function NoteItem({value, isNew, onClick, ...rest}) {
  return (
    <Container isNew={isNew}>
      <input 
      type="text"
      value={value}
      readOnly={!isNew}
      {...rest}/>

      <button type='button' onClick={onClick}>
        {isNew ? <FiPlus size={20}/> : <FiX size={20}/>}
      </button>
    </Container>
  )
}