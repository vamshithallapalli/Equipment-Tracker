import React from "react";

const EquipmentTable = ({ equipment, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Last Cleaned</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {equipment.map((item) => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.status}</td>
            <td>{item.lastCleanedDate.slice(0, 10)}</td>
            <td>
              <button onClick={() => onDelete(item._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EquipmentTable;
