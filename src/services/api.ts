import axios from "axios";

export const fetchDashboard = async () => {
  const res = await axios.get("/api/dashboard");
  return res.data;
};