import React from 'react';
import { Flex, Icon, Button, Avatar, Box, Text } from '@chakra-ui/react';
import { GitHub, ChevronDown } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHouse, faUsers, faGear, faTable } from '@fortawesome/free-solid-svg-icons';
import { PhoneIcon } from '@chakra-ui/icons';
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'
const LoginPage = () => {
  return (
    <Flex h="100vh" w="100vw" bg="#161A25" flexDirection="row">
      <Flex h="100vh" w={['100%', '20%']} direction="column">
        <Icon as={GitHub} boxSize={8} color="white" marginTop="3rem" marginLeft="4rem" />
        
        <Button
          variant="unstyled"
          h={['4%', '8%', '10%']} 
          fontSize={['xs', 'sm', 'md']} 
          color="white"
          marginTop="1rem"
          bg="#343541"
          marginLeft="2rem"
          minWidth={['6rem', '8rem', '10rem']} 
        >
          My Website <Icon as={FontAwesomeIcon} icon={faStar} boxSize={4} mr={2} marginLeft={'1rem'}/>
        </Button>

        <Button
          variant="unstyled" 
          h={['4%', '8%', '10%']} 
          fontSize={['xs', 'sm', 'md']} 
          color="white"
          marginTop="1rem"
          minWidth={['6rem', '8rem', '10rem']} 
          textAlign="left"
          marginLeft={['2rem', '3rem']}
        >
          <Icon as={FontAwesomeIcon} icon={faHouse} boxSize={4} mr={2} /> DashBoard
        </Button>

        <Button
          variant="unstyled" 
          h={['4%', '8%', '10%']} 
          fontSize={['xs', 'sm', 'md']} 
          color="white"
          marginTop="1rem"
          minWidth={['6rem', '8rem', '10rem']} 
          textAlign="left" 
          marginLeft={['2rem', '3rem']}
        >
          <Icon as={FontAwesomeIcon} icon={faUsers} boxSize={4} mr={2} /> Users
        </Button>

        <Button
          variant="unstyled" 
          h={['4%', '8%', '10%']} 
          fontSize={['xs', 'sm', 'md']} 
          color="white"
          marginTop="1rem"
          minWidth={['6rem', '8rem', '10rem']} 
          textAlign="left"
          marginLeft={['2rem', '3rem']}
        >
          <Icon as={FontAwesomeIcon} icon={faGear} boxSize={4} mr={2} /> Settings
        </Button>
      </Flex>

      <Flex h={['auto', '100vh']} w={['100%', '80%']} direction='column' alignItems={['center', 'flex-end']} >
        <Flex alignItems="center" marginTop={['2rem', '2vh']} marginRight={['2rem', '5vw']}>
          <PhoneIcon color={'white'} marginRight={['2rem', '2vw']} />
          <Box
            bg="#343541"
            borderRadius="50%"
            padding="0.5rem"
            marginRight={['2rem', '2vw']}
          >
            <Avatar />
          </Box>
          <Box marginLeft="1rem" color="white">
            <Text fontWeight="bold">Charles Dickson</Text>
            <Icon as={ChevronDown} boxSize={4} ml={2} />
          </Box>
        </Flex>

        <Flex 
          bg={"#343541"}
          h={['auto', '30%']} 
          w={['100%', '90%']}
          marginRight={['2rem', '5vw']} 
          marginTop={['2rem', '10vh']}
          borderRadius={'10px'} 
          alignItems={['center', 'flex-start']}
          flexDirection="column"
        >
          <Text color={'#fff'} marginTop={'2rem'} fontWeight={'bolder'} fontSize={['xl', '2xl']} marginBottom={'3rem'} marginLeft={'2rem'}>
            <Avatar marginRight={'2rem'}></Avatar>
            DashBoard
          </Text>
          <Box>
            <Text marginLeft={'2rem'} fontWeight={'bold'} color={'#ffff'}>Welcome, Charles 👋</Text>
          </Box>
        </Flex>
        
        <Flex
          w={['100%', '90%']}
          marginLeft={['1rem', '4vw']}  
          justifyContent={['space-between', 'space-around']}
          marginTop={['2rem', '5vh']}
        >
          <Box
            bg="#343541"
            borderRadius="10px"
            padding="1rem"
            width={['40%', '25%']}
            height="150%"
            textAlign="center"
            marginLeft="-7%"
            color={'white'}
          >
            <StatGroup>
  <Stat>
    <StatLabel>Sent</StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
</StatGroup>
          </Box>
          <Box
            bg="#343541"
            borderRadius="10px"
            padding="1rem"
            width={['40%', '25%']}
            height="150%"
            textAlign="center"
            marginLeft="1%"
            color={'white'}
          >
            <StatGroup>
  <Stat>
    <StatLabel>Sent</StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
</StatGroup>
          </Box>
          <Box
            bg="#343541"
            borderRadius="10px"
            padding="1rem"
            width={['40%', '25%']}
            height="150%"
            textAlign="center"
            marginLeft="1%"
            color={'white'}
          >
            <StatGroup>
  <Stat>
    <StatLabel>Sent</StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
</StatGroup>
          </Box >
          <Box
          color={'white'}
            bg="#343541"
            borderRadius="10px"
            padding="1rem"
            width={['40%', '25%']}
            height="150%"
            marginLeft={'1%'}
            textAlign="center"
            marginRight="7%"
          >
            <StatGroup>
  <Stat >
    <StatLabel>Sent</StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
</StatGroup>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
