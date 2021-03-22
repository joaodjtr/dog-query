import { ResultData } from 'components/types'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { styled } from 'styles/stitches.config'
import Tabs from './Tabs/Tabs'
import Dog from './Dog/Dog'
import Fetch from './Fetch/Fetch'

const fetchDog = () => fetch('https://dog.ceo/api/breeds/image/random').then( res => res.json() )

const Home = () => {
    const [endpoint, setEndpoint] = useState<'random' | 'by-breed'>('random')
    const result = useQuery<ResultData>('dog', fetchDog, { refetchOnWindowFocus: false })

    return(
        <Flex>
            <Tabs endpoint={endpoint} setEndpoint={setEndpoint}/>
            <Dog result={result}/>
            <Fetch endpoint={endpoint} result={result}/>
        </Flex>
    )
}

const Flex = styled('div', {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexFlow: 'column nowrap',
    padding: '10px 0 15px 0'
})

export default Home