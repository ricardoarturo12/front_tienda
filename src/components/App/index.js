import './App.css';
import { Filter } from '../Filter';
import { Util } from '../Util';
import { DataTable } from '../DataTable';

function App() {
  const {
    setFilter,
    filter,
    data,
  } = Util()

  return (
    <div style={{width:"40%", paddingLeft:20}}>
      <Filter setFilter={setFilter}/>
      <DataTable data={data} filter={filter}/>
    </div>
  );
}

export default App;