import React from 'react';
import { Stack, HStack, VStack, Button, Box } from '@chakra-ui/react';
import img1 from '../Images/Financial img1.png';
import img2 from '../Images/Financial img2.png'
import img3 from '../Images/Financial img3.png'
import img4 from '../Images/Financial img4.jpg'
import img5 from '../Images/Financial img5.png' 
import img6 from '../Images/Financial img6.png'

const Financial_Services = () => {
  return (
    <>

      <Stack h={'420'}>

        <HStack >
        
        <VStack  marginLeft='90px' >
          <text style={{fontSize:'40px'}}>Invest | Earn | Grow</text>
          <br/>
          <text style={{ width:'400px', height:'200px', fontSize:'20px', font:'20px solid black'}}>
          Two Incomes, One Future: Make Investments Smarter.
          Earn 1% interest per month.
          <br/>
          <br/>
          <br/>
          **T&C Apply

          <br/>
          <br/>
          <br/>
          Talk to Lejhro consultant today.
          </text>
          <Button colorScheme={'orange'}>Request a call back</Button>
        
          </VStack>
          <img classname="send1" src={img1} alt="hello" style={{ height:'400px', width:'550px', marginLeft:'60px'}}/>

        </HStack>

      </Stack>

      <Stack bgColor={'#f0ebebd8'} h={'800'}>

        <VStack  m={'5'}>

           <h1>Fixed Deposits</h1>
           <br/>
           <text style={{fontSize:'20px'}}>
            Witness the transformation of your savings into a thriving force of financial growth with a powerful choice of Fixed Deposits!
            </text>
            <br/>
            <text style={{fontSize:'20px'}}>
            By entrusting your funds to FD, you're setting in motion a process that nurtures your wealth. It's not about safeguarding your hard-earned 
            </text>
            <text style={{fontSize:'20px'}}>money; it's about igniting a journey toward prosperous returns.</text>
            <br/>
            <br/>
            <h1>Features & Benefits</h1>
            <br/>
            <text style={{fontSize:'20px'}}>
            Trusted by millions of customers, Lejhro Fixed Deposit is the safest investment option with attractive interest rates.
            </text>
          
          <HStack m={'20'}>
            <VStack alignItems={'center'}>
              <img classname="send1" src={img2} alt="hello" style={{height:'75px', backgroundColor:'#f0ebebd8' }}/>
              <text style={{fontSize:'30px'}}>Simple and Transparent</text>
              <text style={{fontSize:'17px'}}>
              We have an easy-to-use platform where you get a dedicated wealth manager to build and maintain your portfolio.
              </text>
            </VStack>
            <VStack ml={'20'} mr={'20'} alignItems={'center'}>
            <img classname="send1" src={img3} alt="hello" style={{ height:'75px', backgroundColor:'#f0ebebd8',}}/>
            <text style={{fontSize:'30px'}}>Greater Returns</text>
              <text style={{fontSize:'17px'}}>
              Multiply your savings safely and smartly by earning 2 times more than your FD returns
              </text>
            </VStack>
            <VStack alignItems={'center'}>
            <img classname="send1" src={img4} alt="hello" style={{height:'75px', backgroundColor:'#f0ebebd8'}}/>
            <text style={{fontSize:'30px'}}>Monthly Cash Flow</text>
              <text style={{fontSize:'17px'}}>
              Invest and get your passive income seamlessly through the monthly repayments. No hidden charges included
              </text>
            </VStack>
          </HStack>


        </VStack>
       </Stack>

       <Stack h={'600'}>
        <VStack >
            <br/>
            <h1>How to Apply?</h1>
            <text style={{fontSize:'17px'}}>
            Applying for Lejhro Fixed Deposit online is easy. Book your Lejhro Fixed Deposit in four easy steps.
           </text>
            <br/>
            <br/>
            {/* <img classname="send1" src={img} alt="hello" style={{width:'925px'}} /> */}
          </VStack>
         <HStack>
         <img classname="send1" src={img5} alt="hello" style={{height:'325px', width:'450px', marginLeft:'30px'}} />
         <img classname="send1" src={img6} alt="hello" style={{height:'325px', width:'450px', marginLeft:'25px'}} />
         </HStack>
         
      </Stack>

      <Stack bgColor={'#f0ebebd8'} h={'500'}>
        <VStack >
            <br/>
            <h1>Interest & Charges</h1>
            <text style={{fontSize:'17px'}}>
            A Fixed Deposit is a safe investment and independent of market fluctuations. Check Lejhro Finance Fixed Deposit
interest rates and charges.
            </text>
            <br/>
            <br/>
            <Button colorScheme={'orange'} size={'md'} p={'7'} textColor={'black'} fontSize={'20px'}>Interest Rates</Button>
            <br/>
            <Box
              w="600px"  
              h="125px"   
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="black"
              borderWidth="1px" 
              borderColor="orange"
              borderRadius={'25'}
              fontSize="20px"
            >Interest rates<br/>
            1% per month
          </Box>
          </VStack>
         
      </Stack>
    </>
  );
}

export default Financial_Services;
