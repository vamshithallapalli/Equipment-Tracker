import React from "react";

const EquipmentForm = ({ onSubmit, formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={onSubmit} className="form-page">
      <input name="name" placeholder="Name" required onChange={handleChange} />

      <select name="type" required onChange={handleChange}>
        <option>Machine</option>
        <option>Vessel</option>
        <option>Tank</option>
        <option>Mixer</option>
      </select>

      <select name="status" required onChange={handleChange}>
        <option>Active</option>
        <option>Inactive</option>
        <option>Under Maintenance</option>
      </select>

      <input
        type="date"
        name="lastCleanedDate"
        required
        onChange={handleChange}
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default EquipmentForm;
