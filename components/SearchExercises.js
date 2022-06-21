import { Grid, GridItem, VStack ,HStack, FormControl, Input, Button, Box, Text, Image, Spinner } from "@chakra-ui/react";
import {useState} from 'react'
import { options, fetchData } from "../utils/fetchData"
import Link from 'next/link'
import ExerciseCard from './ExerciseCard'

const SearchExercise = () => {
    const [search, setSearch] = useState('')
    const [exercises, setExercises] = useState([])

    const handleSearch = async () => {
        if(search){
            const res = await fetch('https://exercisedb.p.rapidapi.com/exercises', options);
            const exerciseData = await res.json();
            
            const searchedExercises = exerciseData.filter( (exercise) => exercise.name.toLowerCase().includes(search)
            ||exercise.target.toLowerCase().includes(search)
            ||exercise.equipment.toLowerCase().includes(search)
            ||exercise.bodyPart.toLowerCase().includes(search) );
            setSearch('')
            setExercises(searchedExercises)
        }
    }
    
    return ( 
        <VStack
            w='100%'
        >
            <Text
                w='90%'
                mx='auto'
                my='1.5rem'
                fontSize={['30px', '30px', '40px', '40px']}
                fontWeight='bold'
                textAlign='center'
                color='yellow.400'
            >
                Find the exercises you need 
            </Text>
            <FormControl
                w={['85%', '85%', '55%', '45%']}
                display='flex'
                mx='auto'
            >
                <Input 
                    placeholder='enter target muscle, equipment, name, etc.'
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase()) } 
                    borderRightRadius='0%'
                    bgColor='yellow.200'
                    border='yellow.400'
                />
                <Button 
                    onClick={handleSearch}
                    borderLeftRadius='0%'
                    bgColor='yellow.400'
                >Search</Button>
            </FormControl>
            <Grid
            gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(5, 1fr)', 'repeat(5, 1fr)']}
            w='75%'
            gap='1.5rem'
            alignItems='center'
            justifyContent='center'
            >
            {
                    exercises.map((exercise) => {
                        return (
                        <GridItem
                         key={exercise.id}
                        >
                            <ExerciseCard
                                name={exercise.name}
                                id={exercise.id}
                                gifUrl={exercise.gifUrl}
                            />
                        </GridItem>
                        )
                    })
                }
            </Grid>
        </VStack>
     );
}
 
export default SearchExercise;