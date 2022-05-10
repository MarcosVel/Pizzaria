import Head from "next/head";
import Image from "next/image";
import LogoImg from "../../public/logo.svg";
import styles from "../../styles/home.module.scss";
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
            <Input 
              placeholder="Digite seu e-mail"
              type="text"
            />

            <Input 
              placeholder="Sua senha"
              type="password"
            />
          </form>
        </div>
      </div>
    </>
  );
}
