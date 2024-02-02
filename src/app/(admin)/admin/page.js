import Image from "next/image";
import styles from "../style.admin.css";
import Dashboard from "@/app/components/Dashboard";

export default function Admin() {
  return (
    <main>
      <h1>Admin panel</h1>
      <Dashboard />
    </main>
  );
}
