import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useContext } from "react";
import LogoImg from "../../public/logo.svg";
import styles from "../../styles/home.module.scss";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      email: "marcos.veloso@sempreceub.com",
      password: "123456",
    };

    await signIn(data);
  }

  return (
    <>
      <Head>
        <title>SujeitoPizza - Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={LogoImg} alt="Logo SujeitoPizzaria" />

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input placeholder="Digite seu e-mail" type="text" />

            <Input placeholder="Sua senha" type="password" />
            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>

          <span className={styles.register}>
            Não possui uma conta? <Link href="/signup">Cadastre-se</Link>
          </span>
        </div>
      </div>
    </>
  );
}
