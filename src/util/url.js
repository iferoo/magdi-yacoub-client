// export const url = "http://localhost:3004";
// export const patientsUrl = `${url}/patients`;
// export const roomUrl = `${url}/Room`;
// export const doctorsUrl = `${url}/doctors`;
// export const nursesUrl = `${url}/nurses`;
import axios from "axios";

export const url = "http://127.0.0.1:8000";
export const hospitalUrl = "http://127.0.0.1:8000/hospital";
// export const url = "https://132f-156-202-242-19.eu.ngrok.io/hospital";
export const patientsUrl = `${hospitalUrl}/patient/`;
export const roomUrl = `${hospitalUrl}/room/`;
export const bedUrl = `${hospitalUrl}/bed/`;
export const doctorsUrl = `${hospitalUrl}/doctor/`;
export const nursesUrl = `${hospitalUrl}/nurse/`;
export const registerUrl = `${hospitalUrl}/register/`;
export const loginUrl = `${hospitalUrl}/login/`;
export const logoutUrl = `${hospitalUrl}/logout/`;
export const logoutallUrl = `${hospitalUrl}/logoutall/`;
