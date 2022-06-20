import {Box, Text, Button, Image} from '@chakra-ui/react';
import Link from 'next/link';

const ExerciseCard = ({gifUrl, name, id}) => {
    return ( 
        <Box
        boxShadow="lg" 
        p='0.5rem'
        m='1rem' 
        rounded="md" 
        bg="white"
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
                <Button>Show more</Button>
            </Link>
        </Box>
     );
}
 
export default ExerciseCard;