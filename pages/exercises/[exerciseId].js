import { Text } from '@chakra-ui/react';
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
        <section>
            <h1>{exerciseData.name}</h1>
        </section>
     );
}
 
export default exerciseDetail;