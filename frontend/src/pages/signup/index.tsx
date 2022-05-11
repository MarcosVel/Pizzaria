import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import LogoImg from "../../../public/logo.svg";
import styles from "../../../styles/home.module.scss";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>SujeitoPizza - Cadastro</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={LogoImg} alt="Logo SujeitoPizzaria" />

        <div className={styles.login}>
          <h1>Crie sua conta</h1>

          <form>
            <Input placeholder="Digite seu nome" type="text" />
            
            <Input placeholder="Digite seu e-mail" type="email" />

            <Input placeholder="Sua senha" type="password" />
            <Button type="submit" loading={false}>
              Cadastrar
            </Button>
          </form>

          <span className={styles.register}>
            Já possui uma conta? <Link href="/">Entrar</Link>
          </span>
        </div>
      </div>
    </>
  );
}
