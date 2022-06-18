import {Box, Text, HStack, Image} from '@chakra-ui/react'
import Link from 'next/link'
const Navbar = () => {
    return ( 
        <HStack
        display='flex'
        justifyContent='space-between'
        py='1rem'
        px={['1.5rem', '1.5rem','3rem', '3rem']}
        >
            <Image 
                src='/logo.png' 
                h={['40px', '40px', '60px', '60px']}
            />
            <HStack>
                <Link href='/body-part'>muscles</Link>
                <Link href='/exercises'>exercises</Link>
            </HStack>
        </HStack>
     );
}
 
export default Navbar;