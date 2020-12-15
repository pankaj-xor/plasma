export const URL = {
  local: "http://localhost:8080/",
  server: "https://plasma-donor.herokuapp.com/",
};

const env = URL.server;

export const API = {
  upload: `${env}api/patient/upload`,
  addPatient: `${env}api/patient/create`,
};
