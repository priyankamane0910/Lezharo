import { Stack, VStack , Input, Button, HStack, Box, Heading, Text} from '@chakra-ui/react';
import React from 'react'
import {FaPhone, FaEnvelope} from 'react-icons/fa'

const Contact_Us = () => {
  return (
    <Box>
      <Stack h={500} m={5}  marginLeft={'70'} marginTop={'70'} direction={['column', 'row']}>
        <VStack w={'full'}>
            <Input
              placeholder='First Name'
              border={'none'}
                focusBorderColor={'none'}
                borderBottom={'1.5px solid Black'}
                marginBottom={'5'}
              // outline={'none'}
              />

            <Input
              placeholder='Last Name'
              border={'none'}
                focusBorderColor={'none'}
                borderBottom={'1.5px solid Black'}
              // outline={'none'}
              marginBottom={'5'}
              />

            <Input
              placeholder='Email'
              border={'none'}
                focusBorderColor={'none'}
                borderBottom={'1.5px solid Black'}
              // outline={'none'}
              marginBottom={'5'}
              />

            <Input
              placeholder='Phone Number'
              border={'none'}
                focusBorderColor={'none'}
                borderBottom={'1.5px solid Black'}
              // outline={'none'}
              marginBottom={'5'}
              />

            <Input
              placeholder='Company Name'
              border={'none'}
                focusBorderColor={'none'}
                borderBottom={'1.5px solid Black'}
              // outline={'none'}
              marginBottom={'5'}
              />

                  <Button 
                    colorScheme={'orange'} 
                    w={'40'}>
                   Submit
                </Button>
        </VStack>
        <VStack w={'full'} marginLeft={'0'} marginRight={'40'} marginTop={'55'}>
          
          <HStack marginLeft={0}>
            <FaPhone size={20} style={{ marginRight: '10px' }} />
            <span>+91 993 717 5522</span>
        
          </HStack>
          <HStack marginLeft={0}>
          <FaEnvelope size={20} style={{ marginRight: '10px' }} />
          <span>contact@lejhro.com</span>
       
          </HStack>
          
          <VStack marginTop={'10'}>
          <h3>Mailing Address</h3>
          <pre>
            Lejhro Technology Pvt. Ltd.
          <br/>
            LB 193, Bhimatangi, Phase II,
          <br/>
            Bhubaneswar 751002
          </pre>
          </VStack>
        </VStack>
      </Stack>
      </Box>
  )
}

export default Contact_Us;
