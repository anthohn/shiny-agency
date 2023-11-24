import styled from 'styled-components'
import colors from '../../utils/style/colors'



const ErrorWrapper = styled.nav`
margin: 30px;
display: flex;
flex-direction: column;
background-color: ${colors.background};
align-items: center;
`

const ErrorTitle = styled.nav`
  font-size: 30px;
`

const Illustration = styled.img`
  max-width: 800px;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`


function Error() {
    return (
      <ErrorWrapper>
        <ErrorTitle>Dommage...</ErrorTitle>
        <Illustration src="https://github.com/atoulmet/assets/blob/master/404.svg?raw=true" />
        <ErrorSubtitle>Il semblerait que vous n'ayez besoin d'aucune compétence</ErrorSubtitle>

      </ErrorWrapper>

    )
  }
  
  export default Error