import React from 'react'

export default function Pokemon(props) {

    const {experience, name, height, image, weight} = props.data
    return (
        <div>
            <h2 style={{textTransform: "capitalize"}}>{name}</h2>
            <img src={image} />
                <p>height: {height}<br />
                weight: {weight}<br />
                experience: {experience}</p>
        </div>
    )
}
