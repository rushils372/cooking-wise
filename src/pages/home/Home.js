
import { useFetch } from '../../hooks/useFetch'

// Styles 
import './Home.css'

// Components
import RecipeList from '../../components/RecipeList'

export default function Home() {

    const { data, isPending , error } = useFetch('http://localhost:8000/recipes')

    return (
        <div className="home" >
            {error && <p className="error">{error}</p> }
            {isPending && <p className="loading" >Loading...</p> }
            {data && <RecipeList recipes={data} />}
        </div>
    )
}
