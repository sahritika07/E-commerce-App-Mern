const { HOST } = require("@/utils/constants");
import axios from "axios";

const apiClient = axios.create({
   baseURL: HOST, 
})