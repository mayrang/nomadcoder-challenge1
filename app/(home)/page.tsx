import Image from "next/image";
import PersonCard, { IPersonCard } from "./_components/PersonCard";

export const apiUrl = "https://billions-api.nomadcoders.workers.dev/";

async function getDatas() {
  const response = await fetch(`${apiUrl}`);
  const data = await response.json();
  return data as IPersonCard[];
}

export default async function Home() {
  const data = await getDatas();
  console.log("data", data);
  return (
    <ul className="grid grid-cols-4 gap-4">
      {data?.map((person) => (
        <PersonCard key={person.id} {...person} />
      ))}
    </ul>
  );
}
