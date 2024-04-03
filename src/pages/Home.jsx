import useAuthContext from '@/hooks/useAuthContext';

const Home = () => {
  const { currentUser } = useAuthContext();

  return (
    <div className="m-auto text-center">
      <p>Home Page</p>
      {currentUser && (
        <>
          <h1>Logged in </h1>
          <p>Email: {currentUser?.email}</p>
        </>
      )}
    </div>
  );
};

export default Home;
