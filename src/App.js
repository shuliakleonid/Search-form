import React from 'react'
import ReactAutocomplete from 'react-autocomplete'
import {useDebounce, useSearch, useSearchForm} from './hooks';
import {Input} from './components/input/input';


function App() {
  const {searchValue, onSearchChange} = useSearchForm()
  const {articles, status, error} = useSearch(useDebounce(searchValue))
  // const [value, setValue] = useState('') удаляем т.к. есть хук useSearch

  return (
      <>
        <div>
          <p>Status:{status}</p>
          <p>Error:{error}</p>
        </div>
        <ReactAutocomplete
            items={articles}
            renderInput={Input}
            inputProps={{placeholder: 'Input a search term:'}}
            // shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1} //удаляем за ненадобностью

            getItemValue={item => item.label}
            renderMenu={(children, value, style) => {
              return articles && articles.length
                  ? (<div style={{...style}} className='input-suggestion'>
                    {children}
                    <a href={`/search?query=${value}`} className={'search-link'}> See all result</a>
                  </div>)
                  : <></>

            }}


            renderItem={(item, highlighted) =>
                <div
                    key={item.id}
                    style={{backgroundColor: highlighted ? '#eee' : 'transparent'}}
                >
                  {item.label}
                </div>
            }
            value={searchValue}
            onChange={
              // e => setValue(e.target.value)   вместо этого значение пробрасываем через кастомный хук useSearch
              onSearchChange
            }
            // onSelect={value => setValue({value})}
        />
      </>
  );
}

export default App;
