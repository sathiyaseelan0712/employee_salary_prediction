import { useEffect, useState } from "react";

const DataOverview = () => {
  const [data, setData] = useState([]);

  // Fetch Data from Backend
  useEffect(() => {
    fetch("http://127.0.0.1:5000/data")
      .then((response) => response.json())
      .then((data) => {
        const parsedData = JSON.parse(data);
        setData(parsedData);
      });
  }, []);

  return (
    <div className="bg-gray-800 p-6 rounded-lg max-w-7xl mx-auto shadow-md">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-red-500 font-mono">
          Employee Salary Prediction 📈💰
        </h1>
      </div>

      {/* Data Overview Table */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-yellow-400 mb-3 font-mono text-center">
          Employee Data Overview
        </h2>
        <div
          className="overflow-y-auto rounded-lg shadow-lg"
          style={{ maxHeight: "408px" }}
        >
          <table className="min-w-full bg-gray-900 text-center text-white rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 font-bold text-lg font-mono">Age</th>
                <th className="px-4 py-2 font-bold text-lg font-mono">
                  Experience
                </th>
                <th className="px-4 py-2 font-bold text-lg font-mono">
                  Education
                </th>
                <th className="px-4 py-2 font-bold text-lg font-mono">
                  Gender
                </th>
                <th className="px-4 py-2 font-bold text-lg font-mono">
                  Salary
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} className="odd:bg-gray-700 even:bg-gray-800">
                  <td className="border px-4 py-2 font-mono">{row.Age}</td>
                  <td className="border px-4 py-2 font-mono">
                    {row["Years of Experience"]}
                  </td>
                  <td className="border px-4 py-2 font-mono">
                    {row["Education Level"]}
                  </td>
                  <td className="border px-4 py-2 font-mono">
                    {row["Gender"]}
                  </td>
                  <td className="border px-4 py-2 font-mono">{row.Salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataOverview;
