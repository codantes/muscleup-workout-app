import { Grid, GridItem, VStack ,HStack, FormControl, Input, Button, Box, Text, Image } from "@chakra-ui/react";
import {useState} from 'react'
import { options, fetchData } from "../utils/fetchData"
import Link from 'next/link'

const SearchExercise = () => {
    const [search, setSearch] = useState('')
    const [exercises, setExercises] = useState([])

    const handleSearch = async () => {
        if(search){
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options)
            console.log(exerciseData)

            const searchedExercises = exerciseData.filter( (exercise) => exercise.name.toLowerCase().includes(search)
            ||exercise.target.toLowerCase().includes(search)
            ||exercise.equipment.toLowerCase().includes(search)
            ||exercise.bodyPart.toLowerCase().includes(search) )
            setSearch('')
            setExercises(searchedExercises)
        }
    }
    console.log(exercises)
    
    return ( 
        <VStack>
            <Text
                w='90%'
                mx='auto'
                my='1.5rem'
                fontSize={['30px', '30px', '40px', '40px']}
                fontWeight='bold'
                textAlign='center'
            >
                Find the exercises you need 
            </Text>
            <FormControl
                w='85%'
                display='flex'
                mx='auto'
            >
                <Input 
                    placeholder='enter target muscle, equipment, name, etc.'
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase()) } 
                />
                <Button 
                    onClick={handleSearch}
                >Search</Button>
            </FormControl>
            <Grid
            gridTemplateColumns={['1fr', 'repeat(3, 1fr)', 'repeat(5, 1fr)', 'repeat(5, 1fr)']}
            w='75%'
            gap='2rem'
            alignItems='center'
            justifyContent='center'
            >
            {
                    exercises.map((exercise) => {
                        return (
                        <GridItem
                         key={exercise.id}
                        >
                            <Box
                                 boxShadow="lg" 
                                 p='0.5rem'
                                 m='1rem' 
                                 rounded="md" 
                                 bg="white"
                            >
                                <Image 
                                    src={exercise.gifUrl}
                                />
                                <Text
                                    textAlign='center'
                                    m='0.3rem'
                                >
                                    {exercise.name}
                                </Text>
                            </Box>
                        </GridItem>
                        )
                    })
                }
            </Grid>
        </VStack>
     );
}
 
export default SearchExercise;