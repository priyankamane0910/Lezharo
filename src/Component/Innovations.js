import { HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import img1 from '../Images/Innovation img1.png';
import img2 from '../Images/innovation img2.png';
import img3 from '../Images/innovations img3.png';
import img4 from '../Images/innovations img4.png';
import img5 from '../Images/innovations img5.png';

const Innovations = () => {
  return (
    <>
      <Stack>

        <VStack alignItems={'start'} m={'50'} ml={'180'}>
          <br/>
          <h1>Research Development</h1>
          <text>
          We at Lejhro believe Research & Development(R&D) as the best investment for the future.
          </text>
          <br/>
          <img classname="send1" src={img2} alt="hello" style={{width:'925px'}} />
        </VStack>

      </Stack >
        

      <Stack bgColor={'#f0ebebd8'} h={'500'} >

         <HStack m={'20'} ml={'130'}>
            
            <text style={{ width:'400px', height:'400px', fontSize:'17px'}}>
            R&D, an essential function for many businesses, is responsible for achieving breakthroughs in innovation.
            <br/>
            <br/>
            R&D always goes along with product development and behind every innovative product invention are decades of extensive research that ignites a spark within the organization.
            <br/>
            <br/>
            Research is the most endangered investment area because both the development of inventiveness and its prosperous understanding takes doubt, including the profitability of the creativeness. In a resolution, "huge R and D spending does not assure a more creative, more fabulous profit or more market share".
            </text>
           
              
              <img classname="send1" src={img3} alt="hello" style={{ height:'300px', width:'520px', marginLeft:'70px'}}/>
          </HStack>

      </Stack>
     

      <Stack>
        <VStack alignItems={'start'} m={'50'} ml={'180'}>
            <br/>
            <h1>Product Development</h1>
            <text>
            The journey of a new product development starts with an idea that should be untried or out of the box, forming the foundation for further development.
            </text>
            <br/>
            <img classname="send1" src={img4} alt="hello" style={{width:'925px'}} />
          </VStack>
      </Stack>


      <Stack bgColor={'#f0ebebd8'} h={'450'} >

         <HStack ml={'130'} mb={'10'}>
          <VStack m={'17'} alignItems={'start'}>
            <h2 style={{marginTop:'20px'}}>What is Innovation <br/>Product Development?</h2>
            <text style={{ width:'400px', height:'250px', fontSize:'17px'}}>
            It's a cross-functional activity that involves the process of transforming innovative ideas into reality. The innovation product development methodology consists of stages like ideation, design, validation, and launch of the final product.
             <br/>
            <br/>
            Additionally, this process also includes regular reviews of customer data, their problem statement, and feedback.
            </text>
            </VStack>
              
            <img classname="send1" src={img5} alt="hello" style={{marginLeft:'70px', height:'300px', width:'500px'}}/>
          </HStack>

      </Stack>


    </>
  );
}

export default Innovations;
