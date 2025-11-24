import './App.css';
function App() {
  return (
    <>
      <div className="erp-container">
        <div className="erp-header">
          <div className="erp-title">
            <h1>ERP Candiate Manager</h1>
            <p>Minimal professional single-page dashborad</p>
          </div>
          <div className="flex-row">
            <button className="add-btn">Add Canidate</button>
          </div>
        </div>
        <div className="dashboard">
          <div className="card"><h3>10</h3><p>total candiate</p></div>
          <div className="card"><h3>10</h3><p>total candiate</p></div>
          <div className="card"><h3>10</h3><p>total candiate</p></div>
          <div className="card"><h3>10</h3><p>total candiate</p></div>
        </div>
        <div className="filter">
          <div className="filter-left">
            <select>
              <option>All Statge</option>
            </select>
            <select>
              <option>All Statge</option>
            </select>
            <input />
          </div>
          <div className="search-filter">
            <input />
            <button>search</button>
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>h1</th>
                <th>h1</th>
                <th>h1</th>
                <th>h1</th>
                <th>h1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>h1</td>
                <td>h1</td>
                <td>h1</td>
                <td>h1</td>
                <td>h1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
