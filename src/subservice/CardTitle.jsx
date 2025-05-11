import React from 'react'

function CardTitle({ title }) {
  return (
    <div>
       <h3 className="mb-2 text-2xl font-bold dark:text-white">{title}</h3>
    </div>
  )
}

export default CardTitle