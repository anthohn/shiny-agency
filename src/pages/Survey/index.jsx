// Import necessary dependencies from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

// Define the Survey component
function Survey() {
  // Extract the 'questionNumber' parameter from the URL parameters using 'useParams'
  const { questionNumber } = useParams()

  // Convert 'questionNumber' to an integer for numerical operations
  const questionNumberInt = parseInt(questionNumber)

  // Calculate the previous and next question numbers
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1

  // Render the component
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      
      {/* Display the current question number */}
      <h2>Question {questionNumber}</h2>
      
      {/* Link to the previous question, disabled if the current question is the first one */}
      <Link to={`/survey/${prevQuestionNumber}`}>Previous</Link>
      
      {/* Conditionally display the link to results or the next question */}
      {questionNumberInt === 10 ? (
        <Link to="/results">Results</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Next</Link>
      )}
    </div>
  )
}

// Export the Survey component as the default export
export default Survey
