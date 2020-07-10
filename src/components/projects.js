//react
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const initialState = []
const Projects = () => {
    const [projects, setProjects] = useState(initialState)
    const [actions, setActions] = useState(initialState)

    useEffect(() => {

        axios.get('https://sprintnodeapichallenge.herokuapp.com/api/projects')
            .then(res => {
                console.log(res.data)
                setProjects(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    const getActions = (id) => {
        axios.get(`https://sprintnodeapichallenge.herokuapp.com/api/projects/${id}/actions`)
        .then(res => {
            console.log(res.data)
            setActions(res.data)
            console.log(actions)
        })
        .catch(err =>{
            console.log(err)
        })

    }

    return (
        <div>
            {projects.map((project) => {
                return (
                    <div key={project.id} >
                        <br />
                        <div> Project name: <h3>  {project.name} </h3> </div>
                        <div> Project description: <h4> {project.description} </h4> </div>
                        <div> Completed: {project.completed ? 'true' : 'false'} </div>
                        <button onClick={() => {getActions(project.id)}}> Check actions </button>
                        <div> 
                            {actions.map(action => {
                            return (
                                <div key={action.id}>  
                                    <div> action description: <h4>  {action.description} </h4> </div>
                                    <div> notes: <h4>  {action.notes} </h4> </div>
                                   </div>)
                        })} </div>

                        <h4> ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h4>
                        
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default Projects


