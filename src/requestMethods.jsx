import axios from "axios";

const BASE_URL="http://localhost:5000/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGIyNjViODIxODgzNmI4YzNmZDUzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTc0ODAzMywiZXhwIjoxNjUwMDA3MjMzfQ.p2LZmP2k-t5iUPAxt9T8U__ccrojmhAuoVOUvS-vmHM"

export const publicRequest =axios.create({
    baseURL:BASE_URL,
});

export const userRequest =axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer${TOKEN}`}
});
