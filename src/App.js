import './App.css';
import { BasicTable } from './components/BasicTable';
import { FilterTable } from './components/FilterTable';
import { SortingTable } from './components/SortingTable';
import { PaginationTable } from './components/PaginationTable';
import { RowSelectionTable } from './components/RowSelectionTable';
import { ColumnOrderTable } from './components/ColumnOrderTable';
import { ColumnHidingTable } from './components/ColumnHidingTable';
function App() {
  return (
    <div >
     <ColumnHidingTable/>
    </div>
  );
}

export default App;
