/**
 * Created the Axios Instance to have all the default values to make API calls
 */

import axios from "axios";

export const URL = "/quizapp/";

export const API = axios.create({
  baseURL: URL
});
