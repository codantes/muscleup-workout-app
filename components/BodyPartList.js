import { options, fetchData } from '../utils/fetchData'
import {Button, Text, Box, Grid, GridItem} from '@chakra-ui/react'
import Link from 'next/link'
import {useEffect, useState} from 'react'

const BodyPartList = () => {

    const [parts, setParts] = useState([])
    const fetchParts = async () => {
        const res = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options);
        const data = await res.json()
        setParts(data)
    }

    useEffect(()=>{
        fetchParts();
    }, [])
    
    return ( 
       <Grid
       gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(5, 1fr)']}
       w='75%'
       gap='3rem'
       alignItems='center'
       justifyContent='center'
       >
        {
            parts.map(part => {
                return(
                    <Link 
                    href={`/target/${part}`}
                    key={part}
                    >
                        <Button
                            bgColor='yellow.400'
                            h='3.5rem'
                            key={part}
                        >
                            {part}
                        </Button>
                    </Link>
                )
            })
        }
       </Grid>
     );
}
 
export default BodyPartList;