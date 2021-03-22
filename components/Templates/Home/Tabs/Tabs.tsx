import { styled } from "styles/stitches.config"
import { Endpoint } from "../../../types"

interface TabsProps{
    endpoint: Endpoint,
    setEndpoint: (endpoint: Endpoint) => void
}

const Tabs: React.FC<TabsProps> = ({endpoint, setEndpoint}) => {
    return (
        <ListTabs>
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
        </ListTabs>
    )
}

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

const ListTabs = styled('ul', {
    display: 'flex',
})

export default Tabs