import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Photo from './components/Photo'
import Header from './components/Header'
import Info from './components/Info'
import Socials from './components/Socials'


export default function Page(){
    return(
        <div className='container'>
            <Photo />
            <Header />
            <Info />
            <Socials />
        </div>
        
    )
}

ReactDOM.render(<Page />, document.getElementById('root'))
