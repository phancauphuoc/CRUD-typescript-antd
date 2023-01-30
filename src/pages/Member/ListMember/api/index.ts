import axios from "axios";

const MEMBER_LSIT = 'https://63ad41f8da81ba976196f553.mockapi.io/member/users';

export function apiLoadListUser() {
    return axios.get(MEMBER_LSIT);
}

export function apiEditUser(body: any, id: any) {
    return axios.put(`${MEMBER_LSIT}/${id}`, body);
}