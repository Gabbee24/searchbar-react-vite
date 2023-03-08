import SearchResult from './SearchResult'
import './SearchResultList.css'

const SearchResultList = ({results}) => {
  return (
    <div className='results-list'>
        {
            results.map((result, id) => {
                return <SearchResult key={id} result={result}/>
            })
        }
    </div>
  )
}

export default SearchResultList