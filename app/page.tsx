import axios from "axios";

async function fetchdata() {
  const response = await axios.get("http://localhost:3000/api/user");
  console.log("Response : ", JSON.stringify(response.data));
  return response.data;
}
export default async function Home() {
  const data = await fetchdata();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div>Username:{data.username}</div>
      <div>Password:{data.password}</div>
      <div>Email:{data.email}</div>
    </div>
  );
}
