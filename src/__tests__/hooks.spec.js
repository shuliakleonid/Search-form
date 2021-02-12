import { renderHook, act} from '@testing-library/react-hooks'
import  {useSearchForm} from '../hooks';

describe('useSearchForm hook',()=>{
  let event1;
  let event2;

  beforeEach(()=>{
    event1 = {
      target:{
        value:'data1'
      }
    };
    event2= {
      target:{
        value:'data2'
      }
    };
  })
  it('should update search value',()=>{
    const {result} = renderHook(()=>useSearchForm())
    expect(result.current.searchValue).toBe('')
    act(()=>result.current.onSearchChange(event1));
    expect(result.current.searchValue).toBe('data1')
    act(()=>result.current.onSearchChange(event2));
    expect(result.current.searchValue).toBe('data2')
  })
})
