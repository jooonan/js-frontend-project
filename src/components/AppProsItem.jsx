import React from 'react'

const AppProsItem = ({item}) => {
  return (
    <div className="pros-box">
        <img src={item.imageUrl} alt={item.imageAlt} />
        <div className="pros-textbox">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
        </div>
    </div>
  )
}

export default AppProsItem