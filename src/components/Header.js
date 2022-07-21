import React from 'react'

export default function Header(){
    return(
        <div>
            <h1>Jonathan Mani</h1>
            <h3>Full Stack Developer</h3>
            <h4><a href='https://jonathanmani.netlify.app/'>Portfolio</a></h4>
            <input type='button' className='button--email'>Email</input>
            <input type='button' className='button--Linkedin'>Linkedin</input>
        </div>
    )
}