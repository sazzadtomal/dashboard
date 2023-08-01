import React from 'react'

 const Button = ({bgColor, color,size,text,borderRadius}) => {
  return (
     <button className={`text-${size} p-2 hover:drop-shadow-xl`} type="button" style={{backgroundColor:bgColor,color:color,borderRadius:borderRadius}}>
      {text}
     </button>
  )
}

export default Button