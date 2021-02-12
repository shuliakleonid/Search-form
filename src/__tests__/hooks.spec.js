import {act, renderHook} from '@testing-library/react-hooks'
import {useDebounce, useSearchForm} from '../hooks';

jest.useFakeTimers()

describe('useSearchForm hook', () => {
  let event1;
  let event2;

  beforeEach(() => {
    event1 = {
      target: {
        value: 'data1'
      }
    };
    event2 = {
      target: {
        value: 'data2'
      }
    };
  })
  it('should update search value', () => {
    const {result} = renderHook(() => useSearchForm())
    expect(result.current.searchValue).toBe('')
    act(() => result.current.onSearchChange(event1));
    expect(result.current.searchValue).toBe('data1')
    act(() => result.current.onSearchChange(event2));
    expect(result.current.searchValue).toBe('data2')
  })
})

describe('useDebounce hook', () => {
  it('it should return the same value after long delay ', () => {
    const expectResult = 'text';
    const {result} = renderHook(() => useDebounce(expectResult, 500))
    expect(result.current).toBe(expectResult)
    jest.advanceTimersByTime(510)
    expect(result.current).toBe(expectResult)
  });
  it('it should return the same value before timer is reached', () => {
    const value1 = 'text1';
    const value2 = 'text2';

    const {result, rerender} = renderHook(
        ({value, delay}) => useDebounce(value, delay),
        {initialProps: {value: value1, delay: 500}}
    )

    expect(result.current).toBe(value1)
    jest.advanceTimersByTime(490);
    rerender({value:value2})
    expect(result.current).toBe(value1);

    jest.runAllTimers();

    expect(result.current).toBe(value1);
  })
})
