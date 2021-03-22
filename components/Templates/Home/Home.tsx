import { createStyled } from '@stitches/react'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const fetchDog = () => fetch('https://dog.ceo/api/breeds/image/random').then( res => res.json() )

const Home = () => {
    const [endpoint, setEndpoint] = useState<'random' | 'by-breed'>('random')
    const fetch = useQuery<{message: string, status: string}>('dog', fetchDog, { refetchOnWindowFocus: false })

    const refetch = () => {
        if(endpoint === 'random'){
            return fetch.refetch()
        }
    }

    return(
        <Flex>
            <Tabs>
                <Tab active={endpoint === 'random'}>
                    <button onClick={() => setEndpoint('random')}>
                        Random
                    </button>
                </Tab>
                <Tab active={endpoint === 'by-breed'}>
                    <button onClick={() => setEndpoint('by-breed')}>
                        By Breed
                    </button>
                </Tab>
            </Tabs>
            {
                fetch.isSuccess ? 
                <Dog>
                    <img src={fetch.data.message}/>
                </Dog>
                : <></>
            }
            <Button onClick={refetch}>Fetch!</Button>
        </Flex>
    )
}

const { styled } = createStyled({})

const Button = styled('button', {
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 500,
    lineHeight: '1',
    padding: '8px 16px',
    border: '0',
    borderRadius: '16px',
    background: 'blueviolet'
})

const Dog = styled('figure', {
    flex: 1,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    overflow: 'hidden',
    padding: '20px 0',
    'img': {
        maxHeight: '100%',
        objectFit: 'resize'
    }
})

const Tab = styled('li', {
    textAlign: 'center',
    padding: '5px',
    margin: '0 10px',
    cursor: 'pointer',
    position: 'relative',
    'button': {
        outline: 'none',
        letterSpacing: '1.2px',
        fontSize: '1.2rem',
        fontWeight: '500',
        cursor: 'pointer',
    },
    '&::before': {
        content: "''",
        height: '1.5px',
        width: '0',
        background: '#f2f2f2',
        display: 'block',
        position: 'relative',
        top: 'calc(100% + 4px)',
        transition: '.25s width ease-in-out, .25s background',
    },
    variants: {
        active: {
            true: {
                '&::before': {
                    background: 'blueviolet',
                    width: '100%'
                }
            }
        }
    }
})

const Tabs = styled('ul', {
    display: 'flex',
})

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