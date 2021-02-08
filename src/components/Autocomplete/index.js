import React from 'react'
import ReactAutocomplete from 'react-autocomplete'
import {Input} from '../input/input';


const Autocomplete = ({articles, searchValue, onSearchChange}) => (
    <>
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
export default Autocomplete;
