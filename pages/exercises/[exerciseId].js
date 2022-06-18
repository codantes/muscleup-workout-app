import {useRouter} from 'next/router';

const exerciseDetail = () => {
    const router = useRouter();
    const exerciseId = router.query.exerciseId;
    const url = 'https://exercisedb.p.rapidapi.com/exercises/exercise/' + exerciseId; 

    return ( 
        <section>
            <h1>{exerciseId}</h1>
        </section>
     );
}
 
export default exerciseDetail;