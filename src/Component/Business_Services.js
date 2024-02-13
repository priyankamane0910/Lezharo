import { Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import img1 from '../Images/services img1.png';
import img2 from '../Images/services img2.jpg';
import img3 from '../Images/services img3.jpg'
import img4 from '../Images/services img4.jpg'
import img5 from '../Images/services img5.jpg'
import img6 from '../Images/services img6.jpg'
import img7 from '../Images/services img7.jpg'

const Business_Services = () => {
  return (
   <>
      <Stack bgColor={'rgb(218, 158, 47)'} h={'400'}>
        <HStack ml={'220'} >
          <img classname="send1" src={img1} alt="hello" style={{width:'300px'}} />
          <text style={{color:'white', fontSize:'60px', marginLeft:'80px'}}>Accelerate Your <br/> Business</text>
        </HStack>
      </Stack>

      <Stack h={'420'}>
      
        <HStack   m={'20'} >
         <img classname="send1" src={img2} alt="hello" style={{ height:'300px', width:'450px', marginLeft:'60px'}}/>

         <VStack alignContent={'start'}>
          <text style={{fontSize:'40px'}}>Digital Marketing</text>
          <text style={{ width:'400px', height:'200px', fontSize:'17px', marginLeft:'70px'}}>
          In today's cut-throat competitive environment, enterprises in order to find their footing, must market themselves digitally and develop a strong online presence.
          <br/>
          <br/>
          We at Lejhro help businesses in strong relationship building with their clients by delivering customized and superior results.

          </text>
          </VStack>
    
        </HStack>

      </Stack>

      <Stack bgColor={'#f0ebebd8'} h={'420'}>
      
        <HStack m={'20'} >
         
         <VStack  marginLeft='60px' >
          <text style={{fontSize:'40px'}}>Data Analyst</text>
          <text style={{ width:'400px', height:'200px', fontSize:'17px'}}>
          In today's ever changing environment businesses have to ensure a flexible and dynamic approach for a brighter future.
          <br/>
          <br/>
          In order to flourish enterprises must rethink their working style and develop the ability to predict, brainstorm, respond and adapt to any setbacks or challenges.
          </text>
          </VStack>
          <img classname="send1" src={img3} alt="hello" style={{ height:'300px', width:'450px', marginLeft:'60px'}}/>

        </HStack>

      </Stack>

      <Stack h={'450'}>
      
        <HStack   m={'20'} >
         <img classname="send1" src={img4} alt="hello" style={{ height:'270px', width:'450px', marginLeft:'60px', marginTop:'40px'}}/>

         <VStack alignContent={'start'}>
          <text style={{fontSize:'35px'}}>Application <br/> Modernization</text>
          <text style={{ width:'400px', height:'150px', fontSize:'17px', marginLeft:'70px'}}>
          With the dominance of technology all around the globe and applications becoming the new trend, application modernization has become more than necessary.
          <br/>
          <br/>
          Organizations need to revamp applications in innovative ways in order to ensure better growth and survival in the future.
          </text>
          </VStack>
    
        </HStack>

      </Stack>

      <Stack bgColor={'#f0ebebd8'} h={'450'}>
      
        <HStack m={'20'} >
         
         <VStack  marginLeft='60px' alignContent={'start'}>
          <text style={{fontSize:'35px'}}>Application Development <br/> and Maintenance</text>
          <text style={{ width:'400px', height:'200px', fontSize:'17px'}}>
          In this digital age usage of applications and technology by organizations has become necessary for ease of operation.
           <br/>
          <br/>
          With usage, maintenance and further development become even more essential for smooth operations. Businesses now more than ever need to build proficient and systematic ways to achieve their strategic targets.
           </text>
          </VStack>
          <img classname="send1" src={img3} alt="hello" style={{ height:'300px', width:'450px', marginLeft:'60px'}}/>

        </HStack>

      </Stack>

      <Stack h={'420'}>
      
        <HStack   m={'20'} >
         <img classname="send1" src={img6} alt="hello" style={{ height:'300px', width:'450px', marginLeft:'60px'}}/>

         <VStack alignContent={'start'}>
          <text style={{fontSize:'40px'}}>Cyber Security</text>
          <text style={{ width:'400px', height:'200px', fontSize:'17px', marginLeft:'70px'}}>
          With the advent of the digital era and businesses being heavily reliant on technology, cyber security becomes very crucial for an organization.
           <br/>
          <br/>
          Now, work securely with Lejhro's cyber security services which are based on the strategy of securing and ensuring scalability without compromising on safety.
          </text>
          </VStack>
    
        </HStack>

      </Stack>

      <Stack bgColor={'#f0ebebd8'} h={'450'}>
      
        <HStack m={'20'} >
         
         <VStack  marginLeft='60px' alignContent={'start'}>
          <text style={{fontSize:'35px'}}>Quality Assurance</text>
          <text style={{ width:'400px', height:'200px', fontSize:'17px'}}>
          Now digitally transforming and revamping organizations has become quintessential in this era.
          <br/>
          <br/>
          Re-structure your enterprises with quality assurance services from Lejhro which are mainly focused on building strategic relations to magnify our clients' value.
          </text>
          </VStack>
          <img classname="send1" src={img7} alt="hello" style={{ height:'300px', width:'450px', marginLeft:'60px'}}/>

        </HStack>

      </Stack>

   </>
  );
}

export default Business_Services;
