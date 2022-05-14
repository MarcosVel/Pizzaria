import Head from "next/head";
import { FormEvent, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/ui/input";
import styles from "./styles.module.scss";

export default function Category() {
  const [category, setCategory] = useState("");

  async function handleRegister(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <>
      <Head>
        <title>Categoria</title>
      </Head>
      <div>
        <Header />

        <main className={styles.container}>
          <h1>Cadastrar categorias</h1>

          <form onSubmit={handleRegister}>
            <Input
              style={{ width: "100%" }}
              placeholder="Digite o nome da categoria"
              value={category}
              onChange={e => setCategory(e.target.value)}
            />

            <button>Cadastrar</button>
          </form>
        </main>
      </div>
    </>
  );
}
