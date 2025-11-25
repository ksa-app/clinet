import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

export default function CandidateApp() {
  const [search, setSearch] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);
  const [selected, setSelected] = useState(null);

  const allData = useMemo(() => {
    // sample data (you can replace with real data or generate more)
    const base = [
      { id: 1, name: "Rahim", passport: "A12345", date: "2025-02-01", agent: "Kamal", status: "Medical" },
      { id: 2, name: "Karim", passport: "B87965", date: "2025-02-03", agent: "Jamal", status: "Visa" },
      { id: 3, name: "Salam", passport: "C12121", date: "2025-02-06", agent: "Rubel", status: "Flight" },
      { id: 4, name: "Mithu", passport: "D99881", date: "2025-03-01", agent: "Kamal", status: "Complete" },
      { id: 5, name: "Raju", passport: "E44556", date: "2025-03-05", agent: "Jamal", status: "Cancel" },
      { id: 6, name: "Anis", passport: "F77889", date: "2025-03-12", agent: "Rubel", status: "Medical" },
    ];
    return base;
  }, []);

  const data = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return allData;
    return allData.filter((r) => {
      return (
        String(r.id).includes(q) ||
        r.name.toLowerCase().includes(q) ||
        r.passport.toLowerCase().includes(q) ||
        r.agent.toLowerCase().includes(q) ||
        r.status.toLowerCase().includes(q) ||
        r.date.toLowerCase().includes(q)
      );
    });
  }, [search, allData]);

  const counts = useMemo(() => {
    const totals = { Total: allData.length, Medical: 0, Visa: 0, Flight: 0, Complete: 0, Cancel: 0 };
    allData.forEach((r) => {
      if (r.status in totals) totals[r.status] += 1;
    });
    return totals;
  }, [allData]);

  function openEdit(row) {
    setSelected(row);
    setShowDrawer(true);
  }

  function saveEdit(e) {
    // placeholder: implement saving logic (update state or call API)
    e.preventDefault();
    setShowDrawer(false);
  }

  return (
    <div className="app-root">
      <style>{`
        :root{
          --bg:#f4f7fb; --card:#ffffff; --muted:#6b7280; --accent:#2563eb; --success:#10b981; --danger:#ef4444; --glass: rgba(255,255,255,0.6);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }
        *{box-sizing:border-box}
        .app-root{min-height:100vh;background:var(--bg);padding:22px}

        /* header */
        .header{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}
        .title{font-size:20px;font-weight:700;color:#0f172a}
        .add-btn{background:var(--accent);color:#fff;border:0;padding:10px 14px;border-radius:8px;cursor:pointer;box-shadow:0 6px 18px rgba(37,99,235,0.15)}

        /* dashboard */
        .dashboard{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin-bottom:18px}
        .dash-card{background:var(--card);padding:14px;border-radius:10px;box-shadow:0 6px 18px rgba(15,23,42,0.04);text-align:center}
        .dash-value{font-size:18px;font-weight:700;color:#0f172a}
        .dash-label{font-size:12px;color:var(--muted);margin-top:6px}

        /* filter + search */
        .controls{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;gap:12px}
        .left-filters{display:flex;gap:10px;flex-wrap:wrap}
        .select{padding:8px 10px;border-radius:8px;border:1px solid #e6e9ee;background:#fff;min-width:110px}
        .search{padding:9px 12px;border-radius:8px;border:1px solid #e6e9ee;min-width:220px;outline:none}

        /* table */
        .table-card{background:var(--card);border-radius:12px;padding:6px;box-shadow:0 8px 30px rgba(15,23,42,0.06);overflow:auto}
        table{width:100%;border-collapse:collapse;font-size:13px}
        thead th{background:#f1f5f9;padding:12px;text-align:left;color:#111827;font-weight:600;font-size:13px}
        tbody tr{border-top:1px solid #eef2f6}
        tbody td{padding:12px;color:#0f172a}
        tbody tr:hover{background:linear-gradient(90deg, rgba(245,247,250,1), rgba(255,255,255,0.6))}
        .action-btn{background:none;border:0;color:var(--accent);cursor:pointer}

        /* drawer */
        .drawer-backdrop{position:fixed;inset:0;background:rgba(2,6,23,0.35);display:flex;justify-content:flex-end}
        .drawer{width:380px;max-width:95vw;background:var(--card);height:100vh;padding:18px;box-shadow:-20px 0 40px rgba(15,23,42,0.12);overflow:auto}
        .drawer h2{margin:0 0 12px 0;font-size:18px}
        .form-row{margin-bottom:10px}
        .input{width:100%;padding:9px;border-radius:8px;border:1px solid #e6e9ee}
        .save{display:block;width:100%;padding:10px;border-radius:8px;border:0;background:var(--success);color:#fff;cursor:pointer;margin-top:8px}
        .close{display:block;width:100%;padding:10px;border-radius:8px;border:0;background:var(--danger);color:#fff;cursor:pointer;margin-top:8px}

        /* responsive */
        @media (max-width:900px){
          .dashboard{grid-template-columns:repeat(2,1fr)}
          .controls{flex-direction:column;align-items:flex-start}
          .search{min-width:unset;width:100%}
        }
      `}</style>

      <div className="header">
        <div className="title">Candidate Manager</div>
        <button className="add-btn">+ Add Candidate</button>
      </div>

      <div className="dashboard">
        <div className="dash-card">
          <div className="dash-value">{counts.Total}</div>
          <div className="dash-label">Total</div>
        </div>
        <div className="dash-card">
          <div className="dash-value">{counts.Medical}</div>
          <div className="dash-label">Medical</div>
        </div>
        <div className="dash-card">
          <div className="dash-value">{counts.Visa}</div>
          <div className="dash-label">Visa</div>
        </div>
        <div className="dash-card">
          <div className="dash-value">{counts.Flight}</div>
          <div className="dash-label">Flight</div>
        </div>
        <div className="dash-card">
          <div className="dash-value">{counts.Complete}</div>
          <div className="dash-label">Complete</div>
        </div>
        <div className="dash-card">
          <div className="dash-value">{counts.Cancel}</div>
          <div className="dash-label">Cancel</div>
        </div>
      </div>

      <div className="controls">
        <div className="left-filters">
          <select className="select"><option>Month</option></select>
          <select className="select"><option>Agent</option></select>
          <select className="select"><option>Status</option></select>
          <select className="select"><option>Agency</option></select>
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search candidates, passport, agent..."
          className="search"
        />
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th style={{width:50}}>SL</th>
              <th>Name</th>
              <th>Passport</th>
              <th>Received Date</th>
              <th>Agent</th>
              <th>Status</th>
              <th style={{width:90}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
              >
                <td>{i + 1}</td>
                <td>{row.name}</td>
                <td>{row.passport}</td>
                <td>{row.date}</td>
                <td>{row.agent}</td>
                <td>{row.status}</td>
                <td>
                  <button className="action-btn" onClick={() => openEdit(row)}>
                    Edit
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {showDrawer && (
        <div className="drawer-backdrop" onClick={() => setShowDrawer(false)}>
          <motion.div
            className="drawer"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Edit Candidate</h2>
            <form onSubmit={saveEdit}>
              <div className="form-row">
                <label className="muted">Name</label>
                <input className="input" defaultValue={selected?.name} />
              </div>
              <div className="form-row">
                <label className="muted">Passport</label>
                <input className="input" defaultValue={selected?.passport} />
              </div>
              <div className="form-row">
                <label className="muted">Received Date</label>
                <input className="input" defaultValue={selected?.date} />
              </div>
              <div className="form-row">
                <label className="muted">Agent</label>
                <input className="input" defaultValue={selected?.agent} />
              </div>
              <div className="form-row">
                <label className="muted">Status</label>
                <select className="input" defaultValue={selected?.status}>
                  <option>Medical</option>
                  <option>Visa</option>
                  <option>Flight</option>
                  <option>Complete</option>
                  <option>Cancel</option>
                </select>
              </div>

              <button className="save" type="submit">Save</button>
              <button type="button" className="close" onClick={() => setShowDrawer(false)}>Close</button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
