import React, {useState} from 'react'
import ReactAutocomplete from 'react-autocomplete'
import {useDebounce, useSearch} from './hooks';
import {Input} from './components/input/input';


function App() {
  const [value, setValue] = useState('')
  const {articles, status, error} = useSearch(useDebounce(value))

  return (
      <>
        <div>
          <p>Status:{status}</p>
          <p>Error:{error}</p>
        </div>
        <ReactAutocomplete
            items={articles}
            renderInput={Input}
            inputProps={{placeholder:'Input a search term:' }}
            // shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1} //удаляем за ненадобностью

            getItemValue={item => item.label}
            renderMenu={(children,value,style)=>(
              <div style={{...style}} className='input-suggestion'>
                {children}
            <a href={`/search?query=${value}`} className={'search-link'}> See all result</a>
              </div>
        )}


            renderItem={(item, highlighted) =>
                <div
                    key={item.id}
                    style={{backgroundColor: highlighted ? '#eee' : 'transparent'}}
                >
                  {item.label}
                </div>
            }
            value={value}
            onChange={e => setValue(e.target.value)}
            onSelect={value => setValue({value})}
        />
      </>
  );
}

export default App;
