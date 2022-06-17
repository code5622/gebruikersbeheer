const Home = ({user}: {user:any}) => {
  let message = 'You are not logged in!';

  if(user) {
    message = `${user.first_name} ${user.last_name}`;
  }

  return (
    <div className="container">
      <h1>{message}</h1>
    </div>
  );
};

export default Home;
