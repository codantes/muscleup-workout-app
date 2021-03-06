import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import SearchExercise from '../components/SearchExercises'
import BodyPartList from '../components/BodyPartList'
import {VStack} from '@chakra-ui/react'
export default function Home() {
  return (
    <VStack
    w='100%'
    spacing='4rem'
    bgColor='blackAlpha.800'
    bgSize='cover'
    bgAttachment='fixed'
    >
      <Head>
        <title>MuscleUP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SearchExercise />
      <BodyPartList /> 
    </VStack>
  )
}
