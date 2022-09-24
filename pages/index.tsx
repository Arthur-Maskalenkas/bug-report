import type { NextPage } from 'next'

import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Pagination,
  Configure,
} from 'react-instantsearch-dom';

const Home: NextPage = () => {
  const searchClient = algoliasearch(
    'B1G2GM9NG0',
    'aadef574be1f9252bb48d4ea09b5cfe5'
  );

  return (
    <div className="ais-InstantSearch">
      <h1>React InstantSearch e-commerce demos</h1>
      <InstantSearch searchClient={searchClient} indexName="demo_ecommerce">
        <Configure hitsPerPage={8}/>
        <div className="search-panel">
          <div className="search-panel__filters">

          </div>

          <div className="search-panel__results">
            <SearchBox
              className="searchbox"
              translations={{
                placeholder: ''
              }}
            />

            <div className="pagination">
              <Pagination/>
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  )
}


export default Home
