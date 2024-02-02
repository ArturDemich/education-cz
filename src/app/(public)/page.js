import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Leave your contact</h1>
      <form>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
