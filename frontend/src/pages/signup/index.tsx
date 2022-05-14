import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import LogoImg from "../../../public/logo.svg";
import styles from "../../../styles/home.module.scss";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

export default function SignUp() {
  const { signUp } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp(e: FormEvent) {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      return toast.warning("Complete todos os campos");
    }

    setLoading(true);

    let data = { name, email, password };

    await signUp(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>SujeitoPizza - Cadastro</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={LogoImg} alt="Logo SujeitoPizzaria" />

        <div className={styles.login}>
          <h1>Crie sua conta</h1>

          <form onSubmit={handleSignUp}>
            <Input
              placeholder="Digite seu nome"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />

            <Input
              placeholder="Digite seu e-mail"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            <Input
              placeholder="Sua senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <Button type="submit" loading={loading}>
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
