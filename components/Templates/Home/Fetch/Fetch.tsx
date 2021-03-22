import { Endpoint, ResultData } from "components/types"
import { UseQueryResult } from "react-query"
import { styled } from "styles/stitches.config"

interface FetchProps{
    endpoint: Endpoint
    result: UseQueryResult<ResultData>
}

const Fetch: React.FC<FetchProps> = ({endpoint, result}) => {

    const refetch = () => {
        if(endpoint === 'random'){
            return result.refetch()
        }
    }

    return(
        <Button onClick={refetch}>Fetch!</Button>
    )
}

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

export default Fetch