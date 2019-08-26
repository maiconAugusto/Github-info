import React from 'react'
import './main.css'

const Main = (props)=>{
    
    return(
        <div className="container-main">
            <main>
                {props.github.length ===0 ?  <div className="void"></div>
                : 
                <>
                <section>
                    <div className="container-space">
                        <img src={props.github.avatar_url} alt=""/>
                        <strong>{props.github.name}</strong>
                        <small>{props.github.bio}</small>
                        <small>{props.github.location}</small>
                    </div>
                </section>
                <section className="container-repository">
                    {props.repository.map(function(element){
                        return(
                                <div key={element.id} className="container-resp">
                                    <strong>{element.name}</strong>
                                    <small>{element.description}</small>
                                    <small>{element.full_name}</small>
                                </div>
                        )
                    })
                    }
                </section>
                </>
                }
            </main>
        </div>
    )
}

export default Main