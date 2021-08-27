import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Main from '../components/main/main';

export default function Home() {
  return (
    <>
      <Header />
      <a href="/api/auth/login">Login</a>
      <div />
      <a href="/api/auth/logout">Logout</a>
      <div />
      <a href="/profile">Profile </a>

      <Main />
      <Footer />
    </>
  );
}
