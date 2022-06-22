import { VStack, Grid, GridItem, Tag, Text, Image, Box } from '@chakra-ui/react';
import { options, fetchData } from '../../utils/fetchData';
import { useEffect, useState } from 'react';

export const getServerSideProps = async (context) => {
    const exerciseId = context.params.exerciseId;
    const url = 'https://exercisedb.p.rapidapi.com/exercises/exercise/' + exerciseId;
    const res = await fetch(url, options);
    const data = await res.json();

    return {
        props : {exerciseData : data}
    }
}; 

const exerciseDetail = ({exerciseData}) => {
    console.log(exerciseData);
    return ( 
        <VStack
            py='1.5rem'
            bgColor='blackAlpha.900'
            h='100vh'
            bgAttachment='fixed'
        >
            <Grid>
                <GridItem>
                    <Text
                        w='90%'
                        mx='auto'
                        my='1.5rem'
                        fontSize={['30px', '30px', '40px', '40px']}
                        fontWeight='bold'
                        textAlign='center'
                        color='yellow.400'
                        textDecoration='underline'
                    >
                        {exerciseData.name}
                    </Text>

                    <Image 
                        src={exerciseData.gifUrl}
                        borderRadius='10%'
                        w='80%'
                        m='auto'
                    />
                </GridItem>

                <GridItem
                >
                    <Text
                        color='yellow.200'
                        textAlign='center'
                        fontSize='18px'
                        fontWeight='bold'
                        my='0.5rem'
                    >
                        Equipment:
                    </Text>
                    <Box
                        display='flex'
                        justifyContent='center'
                    >
                        <Tag
                            bgColor='yellow.200'
                            h='2.5rem'
                            fontSize='16px'
                            cursorPointer='pointer'
                        >
                            {exerciseData.equipment}
                        </Tag>
                    </Box>
                    <Text
                        color='yellow.200'
                        textAlign='center'
                        fontSize='18px'
                        fontWeight='bold'
                        my='0.5rem'
                    >
                        Target:
                    </Text>
                    <Box
                        display='flex'
                        justifyContent='center'
                    >
                        <Tag
                            bgColor='yellow.200'
                            h='2.5rem'
                            fontSize='16px'
                            cursorPointer='pointer'
                            mx='0.5rem'
                        >
                            {exerciseData.target}
                        </Tag>
                        <Tag
                            bgColor='yellow.200'
                            h='2.5rem'
                            fontSize='16px'
                            cursorPointer='pointer'
                            mx='0.5rem'
                        >
                            {exerciseData.bodyPart}
                        </Tag>  
                    </Box>
                </GridItem>
            </Grid>
            
        </VStack>
     );
}
 
export default exerciseDetail;