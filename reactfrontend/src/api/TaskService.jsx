import axios from "axios";
import config from "../components/config";

class TaskService {
  getAllTasks() {
    return axios.get(`${config.API_URL}/all`);
  }

  getTaskById(id) {
    return axios.get(`${config.API_URL}/get/${id}`);
  }

  createTask(task) {
    console.log("Backend API base URL:", config.API_URL); // should print your correct backend URL
    return axios.post(`${config.API_URL}/add`, task);
  }

  updateTask(id, task) {
    return axios.put(`${config.API_URL}/update/${id}`, task);
  }

  updateStatus(id, task) {
    return axios.put(`${config.API_URL}/updatestatus/${id}`, task);
  }

  deleteTask(id) {
    return axios.delete(`${config.API_URL}/delete/${id}`);
  }
}

export default new TaskService();
