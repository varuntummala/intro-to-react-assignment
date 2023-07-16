import "./styles/App.css";
import UserProfile from "./UserProfile.jsx";
function App() {
  //The array of users to render in the assignment
  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "Michael Johnson",
      email: "michael@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Emily Brown",
      email: "emily@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "David Wilson",
      email: "david@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Sarah Davis",
      email: "sarah@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "Daniel Thompson",
      email: "daniel@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Olivia Martinez",
      email: "olivia@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
  ];

  const listItems = users.map((user) =>

          // eslint-disable-next-line react/jsx-key
        <UserProfile name={user.name} email={user.email} imgURL={user.imgUrl}/>

  );

  return (
    <div className="App">
      <header >
        <h1 className="">User Profiles:</h1>
      </header>
      <div className="user-profile-wrapper">
        <ul>{listItems}</ul>

      </div>
    </div>
  );
}

export default App;
