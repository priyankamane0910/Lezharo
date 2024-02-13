import React from 'react';
import './Navbar.css';
import send from '../Images/send-removebg-preview.png';
import lezhro from '../Images/lezhro-removebg-preview.png';
import overview from '../Images/overview-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import {Link, useLocation} from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin , FaYoutube} from 'react-icons/fa';

 import { useState, useEffect } from 'react';

import {
  Drawer, DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  Button,
  useDisclosure,
  VStack,
  DrawerHeader,
  HStack,
  Stack
  } from '@chakra-ui/react'



const Navbar = () => {

  
  const nav= useNavigate();
  const handlechange=(event)=>{
  nav("/"+event.target.value);
  }

  
  const {isOpen, onOpen, onClose} = useDisclosure();

  const [currentComponent, setCurrentComponent] = useState('Blogs');
  const location = useLocation();

  useEffect(() => {
    // Extract the component name from the route path
    const pathSegments = location.pathname.split('/').filter(segment => segment.trim() !== '');
    const componentName = pathSegments.length > 0 ? pathSegments[0] : 'Blogs';
    setCurrentComponent(componentName);
  }, [location]);

  return (
    <div>

<nav class="navbar navbar-expand-lg  bg-war">
  <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
          
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
      <li class="nav-item1">
        
         <img classname="send" src={send} alt="hello" width="60px" height="40px"/>
         <img classname="lezhro" src={lezhro} alt="hello" height ="100px" width="250px"/>
         
        </li>
        
        <li class="nav-item">
          <option className='nav-link active' value="Innovations" style={{color:"white"}} onClick={handlechange}>Innovations</option>
        </li>
        <li class="nav-item">
          <option className='nav-link active1' value="Business_Services" onClick={handlechange}>Business Services</option>
        </li>
        <li class="nav-item">
          <option class="nav-link active2" value={"Financial_Services"} onClick={handlechange}>Financial Services</option>
        </li>
        <li class="nav-item">
          <option class="nav-link active3" value="Bootcamp" onClick={handlechange}>Bootcamp</option> 
        </li>
       
        </ul>
        
        
       
      <div class="nav-item2">
        {/* <Button 
         colorScheme={'whatsapp'} onClick={onOpen} 
        zIndex={'overlay'}
        >

             Open

        </Button> */}

<img classname="overview" src={overview} alt="hello" width="40px" height="40px" onClick={onOpen} zIndex={'overlay'}
         style={{marginRight:"10px"}}/>

        {/* <div style={{position: "absolute", bottom: "70px", left: '50px', fontSize:'40px'}}>{currentComponent}</div> */}

        </div>
        
        <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
           
           <DrawerOverlay/>
           <DrawerContent >
               <DrawerCloseButton/>
               {/* <DrawerHeader>LEZHRO</DrawerHeader> */}
               
              <img classname="lezhro" src={lezhro} alt="hello" height ="100px" width="250px"/>
      
               <DrawerBody>
                   
                   <VStack alignItems={'flex-start'}>
                       <div>
                           <Button variant={"link"} fontSize={'x-large'} colorScheme={'black'} onClick={onClose}>
                              <Link to={'/Innovations'} >Innovations</Link>
                           </Button>
                       </div>
                       <div>
                           <Button variant={"link"} fontSize={'x-large'} marginTop={'2'} colorScheme={'black'} onClick={onClose}>
                              <Link to={'/Bootcamp'}>Bootcamp</Link>
                           </Button>
                       </div>
                       <div>
                           <Button variant={"link"} fontSize={'x-large'} marginTop={'2'} colorScheme={'black'} onClick={onClose}>
                              <Link to={'/Business_Services'}>Business_Services</Link>
                           </Button>
                       </div>
                       <div>
                           <Button variant={"link"} fontSize={'x-large'} marginTop={'2'} colorScheme={'black'} onClick={onClose}>
                              <Link to={'/Financial_Services'}>Financial_Services</Link>
                           </Button>
                       </div>
                       <div>
                           <Button variant={"link"} fontSize={'x-large'} marginTop={'2'} colorScheme={'black'} onClick={onClose}>
                              <Link to={'/about'}>About</Link>
                           </Button>
                       </div>
                       <div>
                           <Button variant={"link"} fontSize={'x-large'} marginTop={'2'} colorScheme={'black'} onClick={onClose}>
                              <Link to={'/contact_us'}>Contact Us</Link>
                           </Button>
                           {/* <option value="contact_us" onClick={handlechange}>Contact Us</option> */}
                       </div>
                       <div>
                           <Button variant={"link"} fontSize={'x-large'} marginTop={'2'} colorScheme={'black'} onClick={onClose}>
                              <Link to={'/'}>Blogs</Link>
                           </Button>
                       </div>
                       <HStack>
                            <div>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                              <FaTwitter size={30} style={{ marginRight: '10px' }} />
                            </a>
                            </div>
                            <div>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                              <FaFacebook size={30} style={{ marginRight: '10px' }} />
                            </a>
                            </div>
                            <div>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                              <FaLinkedin size={30} style={{ marginRight: '10px' }} />
                            </a>
                            </div>
                            <div>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                              <FaYoutube size={30} />
                            </a>
                            </div>
                       </HStack>
                   </VStack>

               </DrawerBody>
           </DrawerContent>

       </Drawer>
       
      </div>
  </div>
 
        <div style={{position: "absolute", bottom: "50px", left: '110px', fontSize:'50px', color:'white'}}>{currentComponent}</div>
</nav>
    </div>
  );
}

export default Navbar;
