"use server";
import { getServerSession } from "next-auth";
const SessionServer = async () => {
  const session = await getServerSession();
  return (
    <div>
      <h3>Server Component for NextAuth Session</h3>
      {JSON.stringify(session)}
    </div>
  );
};

export default SessionServer;
