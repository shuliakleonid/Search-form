import React, {useEffect, useState} from 'react'
import './App.css';
import ReactAutocomplete from 'react-autocomplete'
import axios from 'axios';


function App() {
  const [value, setValue] = useState('')
  const [item, setItem] = useState([])
  useEffect(() => {

    axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${value}`)
        .then(function (response) {
          const parseResponse = [];
          for (let i = 0; i < response.data[1].length; i++) {
            parseResponse.push({
              id: response.data[3][i],
              label: response.data[1][i]
            })
          }
          setItem(parseResponse)
          debugger
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })

  }, [value]);
  return (
      <ReactAutocomplete
          items={item}
          shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={item => item.label}
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
  );
}

export default App;
