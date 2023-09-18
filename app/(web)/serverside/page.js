const page = async () => {
  const usersData = await fetch("https://api.github.com/users");
  const users = await usersData.json();
  return (
    <div>
      <h2>Server Side Rendering Example</h2>
      <h3>Fetching User Information</h3>
      <table border="1px" className="m-3">
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.login}</td>
            <td>
              <img
                src={user.avatar_url}
                alt="pic not found"
                width="100px"
                height="100px"
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default page;
