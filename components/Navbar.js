import {Box, Text, HStack, Image} from '@chakra-ui/react'
import Link from 'next/link'
const Navbar = () => {
    return ( 
        <HStack
        display='flex'
        justifyContent='space-between'
        py='1rem'
        w='100%'
        px={['1.5rem', '1.5rem','3rem', '3rem']}
        >
            <Image 
                src='/logo.png' 
                h={['40px', '40px', '60px', '60px']}
            />
            <HStack>
                <Link href='/body-part'>
                    <Text
                        color='yellow.400'
                        fontSize='18px'
                        fontWeight='semibold'
                    >
                        workout
                    </Text>
                </Link>
                <Link href='/exercises'>
                    <Text
                        color='yellow.400'
                        fontSize='18px'
                        fontWeight='semibold'
                    >
                        exercises
                    </Text>
                </Link>
            </HStack>
        </HStack>
     );
}
 
export default Navbar;