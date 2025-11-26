import React, { useState, useEffect } from "react";

interface Candidate {
    _id: string;
    fullName: string;
    passportNumber: string;
}

interface Visa {
    _id?: string;
    candidate: {
        _id: string;
        name: string;
        passportNumber: string;
    };
    issueDate: string;
    expiryDate: string;
    status: string;
}

function VisaPage() {
    const [candidates, setCandidates] = useState<Candidate[]>([]);

    const [visa, setVisa] = useState({
        candidate: "",
        issueDate: "",
        expiryDate: "",
        status: "ISSUDE",
    });

    const [visaList, setVisaList] = useState<Visa[]>([]);

    // Fetch candidates
    const getCandidates = async () => {
        const res = await fetch("https://core-nx6y.onrender.com/api/candidates");
        const data = await res.json();
        setCandidates(data);
    };

    // Fetch visas
    const getVisas = async () => {
        const res = await fetch("https://core-nx6y.onrender.com/api/visas");
        const data = await res.json();
        setVisaList(data);
    };

    useEffect(() => {
        getCandidates();
        getVisas();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setVisa({ ...visa, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await fetch("https://core-nx6y.onrender.com/api/visas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(visa),
        });

        setVisa({
            candidate: "",
            issueDate: "",
            expiryDate: "",
            status: "ISSUDE",
        });

        getVisas();
    };

    return (
        <div>
            <h1>Visa Processing</h1>

            {/* --- FORM --- */}
            <form onSubmit={handleSubmit}>

                <div>
                    <label>Candidate</label>
                    <select
                        name="candidate"
                        value={visa.candidate}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Candidate</option>

                        {candidates.map((c) => (
                            <option key={c._id} value={c._id}>
                                {c.fullName} ({c.passportNumber})
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Issue Date</label>
                    <input
                        type="date"
                        name="issueDate"
                        value={visa.issueDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Expiry Date</label>
                    <input
                        type="date"
                        name="expiryDate"
                        value={visa.expiryDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Add Visa</button>
            </form>

            {/* --- LIST --- */}
            <div>
                <h2>Visa List</h2>

                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "15px" }}>
                    <thead>
                        <tr style={{ background: "#f5f5f5", textAlign: "left" }}>
                            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Name</th>
                            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Passport</th>
                            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Issue Date</th>
                            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Expiry Date</th>
                            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {visaList.map((v) => (
                            <tr key={v._id}>
                                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                                    {v.candidate?.name}
                                </td>

                                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                                    {v.candidate?.passportNumber}
                                </td>

                                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                                    {v.issueDate?.slice(0, 10)}
                                </td>

                                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                                    {v.expiryDate?.slice(0, 10)}
                                </td>

                                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                                    {v.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default VisaPage;
