import React from 'react'
import ReactDOM from 'react-dom'
import Photo from './components/Photo'
import Header from './components/Header'

export default function Page(){
    return(
        <div>
            <Photo />
            <Header />
        </div>
        
    )
}

ReactDOM.render(<Page />, document.getElementById('root'))
