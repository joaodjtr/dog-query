import { UseQueryResult } from "react-query"
import { styled } from "styles/stitches.config"
import { ResultData } from '../../../types'

interface DogProps{
    result: UseQueryResult<ResultData>
}

const Dog: React.FC<DogProps> = ({result}) => {
    
    if(result.isLoading){
        return <> loading... </>
    }

    if(result.isError){
        return <> An error ocurred. Please try again. </>
    }

    return(
        <Figure>
            <img src={result.data.message} alt="A dog"/>
        </Figure>    
    )
}

const Figure = styled('figure', {
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

export default Dog