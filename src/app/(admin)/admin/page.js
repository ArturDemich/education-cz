import Image from "next/image";
import styles from "../style.admin.css";
import Dashboard from "@/app/components/Dashboard";
import { fetchClients } from "@/app/lib/data";

export default async function Admin() {
  const data = await fetchClients()
  return (
    <main>
      <h1>Admin panel</h1>
      <Dashboard dataClient={data} />
    </main>
  );
}
