import Head from "next/head";
import Image from "next/image";
import LogoImg from "../../public/logo.svg";
import styles from "../../styles/home.module.scss";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Home() {
  return (
    <>
      <Head>
        <title>SujeitoPizza - Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={LogoImg} alt="Logo SujeitoPizzaria" />

        <div className={styles.login}>
          <form>
            <Input placeholder="Digite seu e-mail" type="text" />

            <Input placeholder="Sua senha" type="password" />
            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>

          <span className={styles.register}>
            Não possui uma conta? <a>Cadastre-se</a>
          </span>
        </div>
      </div>
    </>
  );
}
