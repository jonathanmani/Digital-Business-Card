import React from 'react'

export default function Header(){
    return(
        <div className='header-div'>
            <h1>Jonathan Mani</h1>
            <h3>Full Stack Developer</h3>
            <h4><a href='https://jonathanmani.netlify.app/'>Portfolio</a></h4>
            <div className='button-div'>
                <button className='button-email'>Email</button>
                <button className='button-linkedin'>Linkedin</button>
            </div> 
        </div>
    )
}