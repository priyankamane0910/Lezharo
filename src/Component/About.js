import { Box, Flex, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import aboutimage from '../Images/Aboutusimage.png'
import shakti from '../Images/Shakti.png'
import basu from '../Images/Basu.png'
import vision from '../Images/about-vision.jpg'
import mission from '../Images/about-mission.jpg'
import joinus from '../Images/about-join-us.jpg'

const About = () => {
  return (
    <>
    <Stack m={'20'}>
        <VStack>
        <img classname="send1" src={aboutimage} alt="hello" />
        <h1>Our Purpose</h1>
        <text style={{ fontSize:'22px', fontStyle:'italic'}}>
        To provide innovative solutions through change
        </text>
        </VStack>
    </Stack>
    
    <Stack bgColor={'#f0ebebd8'} direction={['column', 'row']}>
       
        {/* <test>
            Lejhro's experienced management team drives our company, guides it to accomplish its vision, and inspires its employees to ensure clients achieve their goals.

        </test> */}
        <VStack m={'75'} w={'full'} >
        <img classname="send2" src={shakti} alt="hello" style={{ width: '225px', height:'225px', borderRadius:'50%', marginLeft:'70px'}}/>
        <h1>Shakti Panigrahi</h1>
        <text style={{ fontSize:'22px', fontStyle:'italic'}}>CEO</text>
        </VStack>
        <VStack m={'75'} w={'full'} >
        <img classname="send3" src={basu} alt="hello" style={{ width: '225px', height:'225px', borderRadius:'50%', marginRight:'70px'}} />
        <h1>Bidintha Basumatary</h1>
        <text style={{ fontSize:'22px', fontStyle:'italic'}}>Vice President</text>
        </VStack>

    </Stack>

    <Stack direction={['column', 'row']} >
                <HStack marginLeft={'270px'}>
 
                    {/* <img classname="send4" src={vision} alt="hello" style={{ width: '225px', height:'225px', marginRight:'20px',marginTop:'5px'}}/> */}
                    <div class="row mt-4">
                        <div class="col-md-4">
 
                            <div class="card" style={{ width: "270px", height: "440px" , marginTop:"10px", backgroundColor:'#f0ebebd8'}}>
                                <img src={vision} class="card-img-top" alt="..." height="50px" style={{padding:"0px"}}/>
                                <div class="card-body">
                                    <h4 class="card-title" style={{ marginLeft: "70px", top: "5px" }}>Vision</h4>
                                    <text style={{ textAlign: 'center' }}>Lejhro was founded with a rebellious spirit and its objective was 'to be the change' and make a mark with its technological innovations and remarkable products.
                                    </text>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card" style={{ width: "270px", height: "420px" , marginTop:"80px",marginLeft:"125px", backgroundColor:'#f0ebebd8'}}>
                                <img src={mission} class="card-img-top" alt="..." height="50px" />
                                <div class="card-body">
                                    <h4 class="card-title" style={{ marginLeft: "80px", top: "5px" }}>Mission</h4>
                                    <text style={{ textAlign: 'center' }}>Provide quality and cost effective training to inspire, innovate and adapt to the evolving technology and accelerate business growth.
                                    </text>
                                </div>
                            </div>
                            </div>
                            </div>
                        </HStack>
                    </Stack>
 

    <Stack bgColor={'#f0ebebd8'} >
        <VStack m={'50'}>
            <h1>Why Join us?</h1>
        <img classname="send5" src={joinus} alt="hello" style={{ width: '600px', height:'400px'}}/>
        <text>
        Lejhro was founded with a rebellious spirit and its objective was to be the change and make a mark with its technological innovations and remarkable products.
       </text>
       <text>
       To apply mail your cv to hr@lejhro.com
       </text>
        </VStack>
    </Stack>
    
    </>
  )
}

export default About