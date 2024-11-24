
import React from 'react'
import styled from 'styled-components';





const Description=styled.div`
   font-size: 20px;
   font-weight:400;
   color:#b1b2b3;
   text-align:center;
    
   @media only screen and (max-width: 600px) {
        font-size: 17px;
    }

`

const Projects = () => {

    const projects=[
        {
            "id" : 0,
            "title" : "Fit-Tracker Application",
            "date" : "Aprl 21 - August 13",
            "description" : 
              "I developed a full-stack fitness tracker app with React.js, Bootstrap, Material UI, Redux, and Context API on the front-end, and Node.js, Express.js, and MongoDB on the back-end. Users can sign up, log in, add workout, and track past status and burned colorie difference. Compare past seven days burned colories and monthly how much colories burned for each part and get particular date workouts and burned colories details. ",
            "image" : "/fittrack.png",
            "source_code":"https://github.com/subashveerasamy/fitnessTrackerFE.git",
            "tags" : ["React.js","Node.js","MongoDb","Bootstrap"],
            "Webapp" : "https://subashfsdfittrack.netlify.app/",
           
        },
        {
            "id" : 1,
            "title" : "E-Commerce Application",
            "date" : "sept 21 - sept 30",
            "description" : 
              "I developed a full-stack E-Commerce web app with React.js, Bootstrap, Material UI, and Context API on the front-end, and Node.js, Express.js, and MongoDB on the back-end. Users can sign up, log in, add product to cart what you want,In cart page can order products, and track order status and update delivery address after delivered user can review about product. If user faces any issues , user can raise query.  ",
            "image" : "/ecommerce.png",
            "source_code":"https://github.com/subashveerasamy/E-Commerce-FE.git",
            "tags" : ["React.js","Node.js","MongoDb","Bootstrap"],
            "Webapp" : "https://subashfsdecommerce.netlify.app/",
           
        },
        {
            "id" : 2,
            "title" : "Calculator",
            "date" : "aug 16 - aug 16",
            "description" : 
              "I developed a calculator page using HTML, CSS, Bootstrap. It is a user-friendly interface that allows users to perform basic arithmetic operations with ease. It is designed with simplicity and functionality in mind, providing a seamless experience for quick calculations.",
            "image" : "/calculator.png",
            "source_code":"https://github.com/subashveerasamy/day15task1.git",
            "tags" : ["HTML","CSS","JavaScript","Bootstrap"],
            "Webapp" : "https://subashday15task1.netlify.app/",
           
        },
        {
            "id" : 3,
            "title" : "Tile Match",
            "date" : "aug 20 - aug 21",
            "description" : "I developed a Tile Match Game page using HTML, CSS, and Bootstrap. This interactive game challenges users to match pairs of tiles featuring different flags.The game includes features such as shuffling tiles, flipping tiles to reveal flags, and matching pairs. It’s a fun and educational way to test and improve memory skills.",
            "image" : "/tilematch.png",
            "source_code":"https://github.com/subashveerasamy/TileMatch.git",
            "tags" : ["HTML","CSS","JavaScript","Bootstrap", "React"],
            "Webapp" : "https://subashfsdtilematch.netlify.app/",
           
        }
    ]
   
    const handleProject = (project) => () => {
        window.open(project.Webapp, '_blank');
    };
    const handleSourceCode = (project) => () => {
        window.open(project.source_code, '_blank');
    }

  return (
    <div id='aaaa' className='d-flex flex-column align-items-center pb-5' style={{height:"auto" }}>
        <div className="text-light"><h2>Projects</h2></div>
        <Description className=' mt-3 ps-5 px-5'>Here are some of my skills on which I have been Working!</Description>

        <div className='container'>
            <div className='row justify-content-center align-items-center'>
            {
                projects.map((project,index)=>(
                    <div className='container col-12 col-md-6 col-lg-4 mt-5 mx-3' id='skillBox'  key={index} style={{ border: "1px solid white", borderRadius: "10px", boxShadow: "0 0 20px rgba(0, 255, 255, 0.6 )", minWidth:"10rem",maxWidth:"22rem", cursor:"pointer" }}>
                        
                            <div className='p-3 '>
                                <div className='bg-light p-2 mt-2' style={{borderRadius:"15px"}}> 
                                    <img src={project.image} alt={project.title} className='img-fluid' style={{ borderRadius: "15px" }} />
                                </div> 
                                </div>

                                <div className='d-flex flex-wrap justify-content-evenly'>
                                   {
                                    project.tags.map((tags, index) =>{
                                        return(
                                            <div className='text-primary mt-2' key={index} style={{borderRadius:"15px", fontSize:"13px", padding:"4px" , paddingLeft:"11px", paddingRight:"11px", background:"#343249"}}>{tags}</div>
                                        )
                                    })
                                   }
                                </div>
                            <div className='mt-3 m-3' style={{ flex: 1 }}>
                                <div className='text-light' style={{ fontWeight: "500" , fontSize:"25px"}}>{project.title}</div>
                     
                                <div className=' mt-3' id='desc' style={{color:"#b1b2b3", fontWeight:"470", fontSize:"17px"}}>{project.description}</div>
                               <div className="d-flex justify-content-between align-items-between">
                               <div className='mt-3'>
                                <img src="/profile.jpg" alt="profile" width={50}  style={{borderRadius:"25px"}}/>
                               </div>
                               <div className='d-flex'>
                               <div className='mx-3'>
                                   <button onClick={handleSourceCode(project)} className='mt-3 p-2 btn btn-dark' style={{borderRadius:"15px", fontWeight:"600"}}>Code</button>
                               </div>
                               <div>
                                   <button onClick={handleProject(project)} className='mt-3 p-2 btn btn-info' style={{borderRadius:"15px", fontWeight:"600"}}>Live App</button>
                               </div>
                               </div>
                              
                               </div>
                            </div>
                        
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Projects