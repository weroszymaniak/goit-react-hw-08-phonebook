import { useAuth } from 'hooks';

const styles = {
  container: {
    // minHeight: 'calc(100vh - 50px)',
    marginTop: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '0',
  },
  title: {
    fontWeight: 500,
    fontSize: 42,
    textAlign: 'center',
    padding: 0,
  },
  word: {
    color: 'rgb(202, 159, 216)',
  },
};

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <div style={styles.container}>
      {!isLoggedIn && (
        <h1 style={styles.title}>
          Welcome to your <b style={styles.word}>phonebook</b>, log in to see
          your contacts 📲{' '}
        </h1>
      )}
      {isLoggedIn && (
        <h1 style={styles.title}>
          Welcome to your <b style={styles.word}>phonebook 💜</b>{' '}
        </h1>
      )}
    </div>
  );
}
