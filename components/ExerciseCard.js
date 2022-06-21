import {Box, Text, Button, Image} from '@chakra-ui/react';
import Link from 'next/link';

const ExerciseCard = ({gifUrl, name, id}) => {
    return ( 
        <Box
        boxShadow="lg" 
        p='0.5rem'
        h='320px'
        rounded="md" 
        bg="white"
        display='flex'
        flexDirection='column'
        textAlign='center'
        alignItems='center'
        justifyContent='center'
        >
            <Image 
            src={gifUrl}
            />
            <Text
            textAlign='center'
            m='0.3rem'
            >
                {name}
            </Text>
            <Link
            href={'/exercises/' + id}
            >
                <Button
                    mx='auto'
                >Show more</Button>
            </Link>
        </Box>
     );
}
 
export default ExerciseCard;