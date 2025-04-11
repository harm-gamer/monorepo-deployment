
import { prismaClient } from "db/cilent";

export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
    <div >
      {JSON.stringify(users)}
    </div>
  );
}
