import { useEffect, useState } from "react";
import { getEquipment, addEquipment, deleteEquipment } from "../services/api";

import EquipmentForm from "../components/EquipmentForm";
import EquipmentTable from "../components/EquipmentTable";

const Home = () => {
  const [equipment, setEquipment] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    type: "Machine",
    status: "Active",
    lastCleanedDate: "",
  });

  // Fetch equipment list
  const fetchEquipment = async () => {
    try {
      const res = await getEquipment();
      setEquipment(res.data);
    } catch (error) {
      console.error("Error fetching equipment", error);
    }
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  // Add equipment
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addEquipment(formData);
      setFormData({
        name: "",
        type: "Machine",
        status: "Active",
        lastCleanedDate: "",
      });
      fetchEquipment();
    } catch (error) {
      console.error("Error adding equipment", error);
    }
  };

  // Delete equipment
  const handleDelete = async (id) => {
    try {
      await deleteEquipment(id);
      fetchEquipment();
    } catch (error) {
      console.error("Error deleting equipment", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Equipment Tracker</h2>

      <EquipmentForm
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />

      <hr />

      <EquipmentTable equipment={equipment} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
