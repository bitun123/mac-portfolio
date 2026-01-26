import axios from "axios";
 
export async function getgithubApi(){
    const res  =await  axios.get("VITE_GITHUB_API")
    console.log(res)
}