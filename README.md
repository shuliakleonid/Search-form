# Search-form (Clone Google Search)
![example](https://i.ibb.co/hXBRvQb/Clone-Google.png)

#### Description of your project
This is clone of Google search with using Wikipedia API.
####__In this project I do:__
- cover all code with tests
- create custom hook
- fetching data with REST from Wikipedia
- use testing library
## Table of content

- [**Getting Started**](#getting-started)
- [Built With](#built-with)
- [Contributing](#contributing)
- [Get Help](#get-help)
- [Links](#links)

## Getting Started

### Install
```console
npm install 
npm run
```

### Usage
Use custom Hook
```javascript
export const useSearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const onSearchChange = useCallback((e) => setSearchValue(e.target.value), []);
  return {
    searchValue,
    onSearchChange
  }
}
```
```javascript
export const useDebounce = (value, delay = 500) => {
  const [debounceValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])
  return debounceValue
}
```
## Built With
- React
- React Hooks
- Fetch API
- SCSS
- Storybook 
- Units tests
- Enzyme
- Jest testing


## Contributing

#### Issues
In the case of a bug report, bugfix or a suggestions, please feel very free to open an issue.

#### Pull request
Pull requests are always welcome, and I'll do my best to do reviews as fast as I can.


## Get Help
- Contact me on zeleny777@email.com
- If appropriate, [open an issue](https://github.com/shuliakleonid/react-js-progect/issues) on GitHub

## Links

Even though this information can be found inside the project on machine-readable
format like in a .json file, it's good to include a summary of most useful
links to humans using your project. You can include links like:

- Project homepage: https://shuliakleonid.github.io/Search-form/
- Repository:https://github.com/shuliakleonid/Search-form

