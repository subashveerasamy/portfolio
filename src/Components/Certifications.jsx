import React from 'react'

const Certifications = () => {
    const certification = [{
        "id": 0,
        "img": "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f36678129705991.6170792d7aa89.png",
        "role": "Full Stack Developer (MERN) - GUVI Technology",
        "company": "GUVI Geek Networks, IITM Research Park",
        "date": "May 2024 - present",
        "desc": "Currently pursuing the Full Stack Development (MERN) course from GUVI Zen Class, working towards earning a Professional Certificate. Developing a strong skill set in both front-end and back-end development.",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "DoM Manipulation",
            "React Js",
            "Bootstrap",
            "Node.js",
            "Advance JS",
            "MongoDB"
        ],
        "doc": "https://i.ibb.co/qCxc1nT/Full-stack-Development-certification.jpg"
    }]

    return (
        <div id='aaaa' className='p-5 d-flex flex-column align-items-center' style={{ height: "auto" }}>
            <div><div className='text-center text-light' style={{ fontSize: "45px", fontWeight: "600", color: "#F2F3F4", fontFamily: "Space Grotesk, sans-serif" }}>Certifications</div></div>
            <div className=' mt-5' style={{ fontSize: "18px", maxWidth: "600px", textAlign: "center", color: "#b1b2b3" }}>
                Currently enrolled MERN Full Stack Developer course at GUVI Technology,for building full-stack web applications.
            </div>
            <div>
                {
                    certification.map((cert, index) => (
                        <div className='container mt-5' id='skillBox' key={index} style={{ border: "1px solid white", borderRadius: "10px", boxShadow: "0 0 20px rgba(0, 255, 255, 0.6 )", minWidth: "45vw", maxWidth: "35rem" }}>
                            <div className='d-flex'>
                                <div className='p-3'>
                                    <img src={cert.img} alt={cert.role} width={70} height={70} style={{ borderRadius: "15px" }} />
                                </div>
                                <div className='mt-3 mb-4' style={{ flex: 1}}>
                                    <div className='text-light' style={{fontWeight:"700"}}>{cert.role}</div>
                                    <div  style={{color: "#b1b2b3"}}>{cert.company}</div>
                                    <div style={{color: "#b1b2b3"}}>{cert.date}</div>

                                </div>
                            </div>
                            <div className='mb-4'>
                                <div className='text-light'><p>{cert.desc}</p></div>
                                <div className='text-light'>
                                    <div className="d-flex">
                                    <div><h6>Skills: </h6></div>
                                    <div className='mx-3'>  {cert.skills.map((eachSkill, index) => 
                                    <span className='mx-2' key={index}>• {eachSkill}</span>
                                    )}</div>
                                    </div>
                                </div>
                               
                               
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Certifications