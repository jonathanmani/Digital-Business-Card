import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Photo from './components/Photo'
import Header from './components/Header'


export default function Page(){
    return(
        <div className='container'>
            <Photo />
            <Header />
        </div>
        
    )
}

ReactDOM.render(<Page />, document.getElementById('root'))
