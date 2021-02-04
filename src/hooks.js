import {useEffect, useRef, useState,useCallback} from 'react';
import axios from 'axios';

export const useSearch = (query) => {
  const [state, setState] = useState({
    articles: [],
    status: 'IDLE',
    error: ''
  })

  const cancelToken = useRef(null)

  useEffect(() => {
    if (query.length < 3) {// условие для оптимизации количества запросов, если ввел больше трех букв тогда делать запрос
      return
    }

    if (cancelToken.current) { //отменяет запрос который непрогрузившейся
      console.log('cancel -------------1')
      cancelToken.current.cancel()
    }


    cancelToken.current = axios.CancelToken.source();
    axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}`, {
      cancelToken: cancelToken.current.token // добывляем вторым парамертом
    })
        .then(function (response) {
          const parseResponse = [];
          for (let i = 0; i < response.data[1].length; i++) {
            parseResponse.push({
              id: response.data[3][i],
              label: response.data[1][i]
            })
          }
          setState({
            articles: parseResponse,
            status: 'SUCCESS',
            error: ''
          })
        })
        .catch(function (error) {
          if (axios.isCancel(error)) {
            console.log('request Cancel')
            return
          }
          setState({
            articles: [],
            status: 'ERROR',
            error: error
          });
          if (axios.isCancel(error)) {
            return
          }
        })

  }, [query]);
  return state
}


export const useDebounce = (value, delay = 500) => {
  const [debounceValue, setDebauncedValue] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebauncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])
  return debounceValue
}

export const useSearchForm = () => {
  const [searchValue,setSearchValue]= useState('');
  const onSearchChange = useCallback((e)=> setSearchValue(e.target.value),[]);
  return{
    searchValue,
    onSearchChange
  }
}
