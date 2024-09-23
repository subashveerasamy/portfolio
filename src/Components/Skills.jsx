import { faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Skills = () => {
    const [skills, setSkills]=useState([
        {
            title:"Frontend",
            skills:[
                {name:"HTML",
                    image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
                },
            
                {name:"CSS",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
            },
            {name:"JavaScript",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
            },
            {name:"React Js",
            image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            },
            {name:"Bootstrap",
            image: "https://www.kindpng.com/picc/m/27-278320_bootstrap-logo-logo-png-bootstrap-logo-transparent-png.png"
            },
            {name:"Redux",
            image: "https://img.stackshare.io/service/7374/react-redux.png"
            }]
        },
        {
            "title" : "Backend",
            "skills" : [
                {
                    "name": "Node.js",
                    "image": "https://www.pngitem.com/pimgs/m/520-5202823_nodejs-node-js-logo-png-transparent-png.png"
                },
                {
                    "name" : "MongoDB",
                    "image" : "https://technologypoint.in/wp-content/uploads/2021/06/MongoDB-sm-logo.gif"
                },
                {
                    "name" : "Express.js",
                    "image" : "https://tse1.mm.bing.net/th?id=OIP.1ji9NLQl3sOXktSoEYnt3wHaHa&pid=Api&P=0&h=100"
                },
                {
                    "name" : "MySQL",
                    "image" : "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                }
            ]
        },
        {
           "title" : "Tools",
           "skills" : [
                {
                    "name" : "Git",
                    "image" : "https://tse3.mm.bing.net/th?id=OIP.Xa0BEkwl0Zx4qnY9lMbD7gAAAA&pid=Api&P=0&h=180"
                },
                {
                    "name" : "GitHub",
                    "image" : "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                },
                {
                    "name": "VS Code",
                    "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"
                },
                {
                    "name" : "Canva",
                    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ7WL31BgP94lXiVCt-m6cReSz8AqGnKVy4hCWa-kh_qEEFDB6byi_OfMP&s=10"
                },
                {
                    "name" : "Postman API",
                    "image" : "https://tse3.mm.bing.net/th?id=OIP.Txf8ugHH_MlHPM8JU6hT5wHaEh&pid=Api&P=0&h=100"
                },
                {
                    "name" : "Netlify",
                    "image" : "https://images.saasworthy.com/netlify_6502_logo_1583418670_gqrd3.png"
                },
                {
                    "name" : "Render",
                    "image" : "https://tse1.mm.bing.net/th?id=OIP.X7ZhhhnYwFK9HLdgjrL6SQAAAA&pid=Api&P=0&h=100"
                }
            ]
        }
        ])
  return (
    <div className='aaa'  style={{backgroundColor:"#080a34", paddingBottom:"5rem"}}>
        <div className='text-center text-secondary'>
            <div><h1 className='text-light'>Skills</h1></div>
            <div className='text-secondary' style={{fontSize:"1.2rem"}}>Here are some of my skills on which I have been working!</div><br />

            <div className='container'>
                <div className="row justify-content-center">{
                    skills.map((skill,index)=>(
                        <div className='col-md-4 col-12 border p-4 m-3' id='skillBox' key={index} style={{height:"auto", borderRadius:"10px", boxShadow:"0 0 20px rgba(0, 255, 255, 0.6 )", minWidth:"35vw", maxWidth:"70vw"}}>
                            <div className='text-light p-3'><h3>{skill.title}</h3></div>
                            <div className='row justify-content-center'>
                                {skill.skills.map((sk,index)=>(
                                    <div className='col-md-6 col-6 m-2 p-2 d-flex justify-content-evenly ' key={index} style={{width:"auto",border:"1px solid white", borderRadius:"10px", gap:"10px"}}>
                                       <div><img src={sk.image} alt={sk.name} width={24} height={24} />
                                       </div>
                                        <div>{sk.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
                

                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Skills