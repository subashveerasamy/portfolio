import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/linkedin';
import 'react-social-icons/github';
import 'react-social-icons/instagram';
import Skills from './Components/Skills';
import Certifications from './Components/Certifications';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

const theme = createTheme({
  palette: {
    primary: {
      main: '#010010',
    },
    secondary: {
      main: '#1a237e',
    },
  },
});
const Container = styled.div`
  height: auto;
  
  @media only screen and (min-width: 650px) {
    height: 100vh;
  }
`;


export default function DenseAppBar() {
  const aboutRef = React.useRef(null);
  const skillsRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const educationRef = React.useRef(null);
  const contactRef = React.useRef(null);

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'About', ref: aboutRef },
    { text: 'Skills', ref: skillsRef },
    { text: 'Projects', ref: projectsRef },
    { text: 'Education', ref: educationRef },
    { text: 'Contact', ref: contactRef },
  ];

  return (
    <div className='aaaa' style={{overflow:"hidden"}}>
     <div style={{ cursor: "pointer" }}>
  <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ width: '100vw',top:0, left:0 }}>
        <Toolbar variant="dense" sx={{ justifyContent: 'space-between', minHeight: 70 }}>
          <Typography variant="h6" color="inherit" component="div" style={{ width: isMobile ? "auto" : "10vw" }}>
            Portfolio
          </Typography>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor='top'
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    top: '70px',
                    position: 'absolute',
                    width: '100%',
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                  },
                }}
              >
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem
                      button="true"
                      key={index}
                      onClick={() => { handleScroll(item.ref); setDrawerOpen(false); }}
                      sx={{ cursor: 'pointer', transition: 'background-color 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#619bad'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'inherit'}
                    >
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <div className='d-flex justify-content-between align-items-center w-75'>
              <div className='d-flex justify-content-evenly w-50' style={{ cursor: "pointer" }}>
                {menuItems.map((item, index) => (
                  <div id='refs' key={index} onClick={() => handleScroll(item.ref)}>{item.text}</div>
                ))}
              </div>
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} style={{ width: isMobile ? "auto" : "10vw" }}>
                <Avatar alt="Remy Sharp" src="/profile.jpg" />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  </ThemeProvider>
</div>

      <Container id='aaaa' ref={aboutRef} className='mt-5 p-5 d-flex flex-wrap-reverse justify-content-around align-items-center' >
        <div className='mt-4'>
          <h1 className='text-white'>Hello, I'm <span className='text-warning'>Subash Veerasamy</span></h1><br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h4 className='text-white text-center mx-3' style={{ margin: 0 }}>
              And I'm a
            </h4>
            <h4 className='text-white'>
              <Typewriter
                options={{
                  strings: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
          </div>
          <br />
          <p className='text-white'>I like to craft solid and Scalable products with great user experiences.</p><br />
          <SocialIcon className='m-2' network="linkedin" url='https://www.linkedin.com/in/subash-veerasamy-544972244/' style={{ width: 40, height: 40 }} />
          <SocialIcon className='m-2' network="github" url='https://github.com/subashveerasamy' style={{ width: 40, height: 40 }} />
          <SocialIcon className='m-2' network="instagram" url='https://www.instagram.com/subash_f.l.o.s.h/' style={{ width: 40, height: 40 }} />
        </div>
        <div>
          <div>
            <img
              className='rounded-circle'
              src="/profile.jpg"
              alt="profile"
              width={300}
              style={{
                border: "10px outset aqua",
                borderRadius: "50%",
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.7)",
                maxWidth: "30vw"
              }}
            />
          </div>
        </div>
      </Container>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div >
        <Certifications />
      </div>
      <div ref={projectsRef} >
        <Projects />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={contactRef} id='aaaa'>
        <Contact />
        <div  className='d-flex pb-5 flex-column align-items-center' >
      <div className='text-warning mt-5 ' style={{fontSize:"25px", fontWeight:"500"}}>Subash Veerasamy</div>
      <div className="d-flex justify-content-between mt-4" style={{ cursor: "pointer", minWidth:"20rem"}}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            id='refs'
            className="menu-item"
            onClick={() => handleScroll(item.ref)}
          >
            {item.text}
          </div>
        ))}
      </div>
      <p className='mt-4 text-light'>© 2024 Subash V. All rights reserved</p>
    </div>
      </div>
      
    </div>
  );
}
