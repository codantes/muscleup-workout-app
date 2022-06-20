import { Text } from '@chakra-ui/react';
import { options, fetchData } from '../../utils/fetchData';
import { useEffect, useState } from 'react';

/*export const getStaticPaths = async () => {
    const res = await fetch('https://exercisedb.p.rapidapi.com/exercises', options);
    const data = await res.json();

    const paths = data.map(exercise => {
        return {
            params : {exerciseId : exercise.id.toString()}
        }
    })

    return {
        paths, 
        fallback : false
    }
}*/

export const getStaticProps = async (context) => {
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
        <section>
            
        </section>
     );
}
 
export default exerciseDetail;