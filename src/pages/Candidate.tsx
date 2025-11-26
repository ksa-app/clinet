import { useEffect,useState } from 'react';
import '../App.css';
function Candidate() {
  interface Candidate{
    _id:string;
    sl:number;
    fullName:string;
    passportNumber:string;
    AGENT:string;
    status:string;
    receivedDate?:string;
  }
  const [candidates,setCandidates] = useState<Candidate[]>([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    fetch('https://core-nx6y.onrender.com/api/candidates')
      .then((res)=>res.json())
      .then((data: Candidate[])=>{
        setCandidates(data);
        setLoading(false);
      })
      .catch((err)=>{
        console.error("api error",err);
        setLoading(false);
      });
      
  },[]);
  if(loading) return <h2>loading</h2>
  function formatDateIso(dateStr?: string | null){
    if(!dateStr) return "N/A";
    const d = new Date(dateStr);
    if(isNaN(d.getTime())) return "N/A";
    
    const day = String(d.getUTCDate()).padStart(2,"0");
    const month = String(d.getUTCMonth()+1).padStart(2,"0");
    const year = d.getUTCFullYear();
    return `${day}-${month}-${year}`;
  }
  return (
    <>
      <div className='app-root'>
        <div className='header'>
          <div className='title'>RUNWAY OVERSEAS</div>
          <div>
           {/* <button className='add-btn'>kanvan</button> */}
            <button className='add-btn'>Add Candidate</button>
          </div>
        </div>
        <div className='dashbord'>
          <div className='dash-card'>
            <div className='dash-value'>{candidates.length}</div>
            <div className='dash-label'>TOTAL</div>
          </div>
          <div className='dash-card'>
            <div className='dash-value'>10</div>
            <div className='dash-label'>MEIDCAL</div>
          </div>
          <div className='dash-card'>
            <div className='dash-value'>10</div>
            <div className='dash-label'>VISA</div>
          </div>
          <div className='dash-card'>
            <div className='dash-value'>10</div>
            <div className='dash-label'>FLIGHT</div>
          </div>
          <div className='dash-card'>
            <div className='dash-value'>10</div>
            <div className='dash-label'>FLIGHT</div>
          </div>
          <div className='dash-card'>
            <div className='dash-value'>10</div>
            <div className='dash-label'>CANCEL</div>
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
                <th>REMARK</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((c)=>(
                <tr key={c._id}>
                  <td>{c.sl}</td>
                  <td>{c.fullName}</td>
                  <td>{c.passportNumber}</td>
                  <td>{c.AGENT}</td>
                  <td>{formatDateIso(c.receivedDate)}</td>
                  <td>{c.status}</td>
                  <td></td>
                  <td><button>edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </>
  )
}

export default Candidate;
