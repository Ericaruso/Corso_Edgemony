import { getUser } from "@/action/get-user";
import { getUsers } from "@/action/get-users";
import Button from "@/components/Button";

export default async function Home() {
  const user = await getUser();
  const users = await getUsers();

  return (
    <main>
      <h1>hello, {user.name}</h1>
      {users.map((user) => {
        return (
          <li key={user.id}>
            Name: {user.name} <Button user={user} />
          </li>
        );
      })}
    </main>
  );
}