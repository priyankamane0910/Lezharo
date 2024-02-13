import React from 'react'
import { Box, Button, Heading, HStack, Input, Stack, VStack } from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'
import { FaFacebook, FaTwitter, FaLinkedin , FaYoutube} from 'react-icons/fa';

export const Footer = () => {
  return (
    <Box h={'325px'} bgColor={'white'} color={'black'} textAlign={'center'} 
    borderTop={'10px solid rgb(58, 113, 196);;'}
    >
      

        <Stack direction={['column', 'row']} mt={'22'}>
            <VStack w={'full'}  alignItems={'center'}  >
              <Heading 
              textTransform={'uppercase'} size={'md'} >
                 Company
              </Heading>
              <text>Innovations</text>
              <text>Business Services</text>
              <text>Financial Services</text>
              <text>Lejhro Recruiter</text>
              <text>About</text>
              <text>Blog</text>
            </VStack >

            <VStack w={'full'} alignItems={'center'}>
                <Heading textTransform={'uppercase'} size={'md'}>Programs</Heading>
                <text>Lejhro Bootcamp</text>
            </VStack>
            <VStack w={'full'}>
            <Heading textTransform={'uppercase'} size={'md'} >Supports</Heading>
                <text>Contact</text>
                <text>Term of Use</text>
                <test>Private Statement</test>
            </VStack>

            <VStack w={'full'} alignItems={'center'} mr={'20'}>
                <Heading size={'md'} textTransform={'uppercase'}>Connect With Us</Heading>
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
        </Stack>
   <text>© 2024 LEJHRO. All Rights Reserved.</text>
    </Box>
  )
}
export default Footer;