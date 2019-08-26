import React,{ Fragment, useState} from  'react'
import './header.css'
import Main from './main';
import axios from 'axios'

const Header = ()=>{
    const [ user, setUser ] = useState('')
    const [ github, setGithub ] = useState([])
    const [ repository, setRepository ] = useState([])

    async function handleGithub(event){
        event.preventDefault()
        try{
            await axios.get(`https://api.github.com/users/${user}`)
            .then((response)=>{
                setGithub(response.data)
                handleRepository()
            })
        }catch(err){
            alert(`Attention\nNot found :(`)
        }
    }
    async function handleRepository(){
        await axios.get(`https://api.github.com/users/${user}/repos`)
            .then((response)=>{
                setRepository(response.data)
            })
    }
    return(
        <Fragment>
            <div className="container-header" >
                <header>
                        <form onSubmit={handleGithub}>
                            <input  
                            value={user}
                            onChange={(event)=> setUser(event.target.value)}
                            placeholder="github user"/>
                            <button>OK</button>
                        </form>
                </header>
            </div>
            <Main  repository={repository} github={github}/>
        </Fragment>
    )
}
export default Header