import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <p>Привіт, <strong>{user.username || user.name}</strong>!</p>
          <p>Твої дані з контексту:</p>
          <pre>
            {JSON.stringify(user, null, 2)}
          </pre>
          <button onClick={logout}>Вийти з акаунта</button>
        </div>
      ) : (
        <div>
          <p>Ви зараз не авторизовані.</p>
          <p>Статус: Гість</p>
          <p>Щоб побачити свої дані, потрібно увійти в систему.</p>
        </div>
      )}
    </div>
  );
};

export default Home;