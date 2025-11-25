import './App.css';
function App() {
  return (
    <>
      <div className='app-root'>
        <div className='header'>
          <div className='title'>Candidate manager</div>
          <div>
           {/* <button className='add-btn'>kanvan</button> */}
            <button className='add-btn'>Add Candidate</button>
          </div>
        </div>
        <div className='dashbord'>
          <div className='dash-card'>
            <div className='dash-value'>10</div>
            <div className='dash-label'>total</div>
          </div>
          <div className='dash-card'>
            <div className='dash-value'>10</div>
            <div className='dash-label'>total</div>
          </div>
          <div className='dash-card'>
            <div className='dash-value'>10</div>
            <div className='dash-label'>total</div>
          </div>
          <div className='dash-card'>
            <div className='dash-value'>10</div>
            <div className='dash-label'>total</div>
          </div>
          <div className='dash-card'>
            <div className='dash-value'>10</div>
            <div className='dash-label'>total</div>
          </div>
          <div className='dash-card'>
            <div className='dash-value'>10</div>
            <div className='dash-label'>total</div>
          </div>
        </div>
        <div className='controls'>
          <div className='left-filter'>
            <select className='select'><option>Month</option></select>
            <select className='select'><option>Agent</option></select>
            <select className='select'><option>Status</option></select>
            <select className='select'><option>Agency</option></select>
          </div>
          <input 
            placeholder='search'
            className='search'
          />
        </div>
        <div className='table-card'>
          <table>
            <thead>
              <tr>
                <th>SL</th>
                <th>NAME</th>
                <th>PASSPORT</th>
                <th>AGENT</th>
                <th>RECIVED</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>RIAJUL ISLAM</td>
                <td>A123456</td>
                <td>RAHMAN</td>
                <td>01-10-2025</td>
                <td>JUST RECIVED</td>
                <td>EDIT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </>
  )
}

export default App
