import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useState, useEffect } from 'react'
import { Loader } from '../../utils/style/Atoms'


const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelances() {
  // Variables d'état pour gérer le chargement des données la gestion des erreurs et la liste des freelances
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)
  const [freelancersList, setFreelancesList] = useState([])

  // Le hook useEffect pour récupérer les données des freelances quand le composant est monté
  useEffect(() => {
    // Définir le chargement des données à true avant de faire la requête API
    async function fetchFreelances() {
      setDataLoading(true)
      try {
        // Récupérer les données depuis l'API spécifiée
        const response = await fetch(`http://localhost:8000/freelances`)
        const { freelancersList } = await response.json()
        // Mettre à jour l'état avec la liste des freelances récupérée
        setFreelancesList(freelancersList)
      } catch (err) {
        // Journaliser les erreurs qui se produisent pendant la requête API
        console.log('===== error =====', err)
        // Définir l'état d'erreur à true
        setError(true)
      } finally {
        // Définir le chargement des données à false, qu'il y ait succès ou échec
        setDataLoading(false)
      }
    }
    // Appeler la fonction fetchFreelances lorsque le composant est monté (tableau de dépendances vide)
    fetchFreelances()
  }, [])

  // Rendre un message d'erreur si une erreur s'est produite lors de la récupération des données
  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {/* Mapper la liste des freelances et rendre un composant Card pour chaque freelance */}
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances