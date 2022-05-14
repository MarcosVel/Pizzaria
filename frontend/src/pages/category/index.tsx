import Head from "next/head";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Header } from "../../components/Header";
import { Input } from "../../components/ui/input";
import { setupAPIClient } from "../../services/api";
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from "./styles.module.scss";

export default function Category() {
  const [category, setCategory] = useState("");

  async function handleRegister(e: FormEvent) {
    e.preventDefault();

    if (category === "") {
      return toast.info("Insira o nome da categoria");
    }

    const apiClient = setupAPIClient();
    await apiClient.post("/category", {
      name: category,
    });

    toast.success(`Categoria "${category}" criada com sucesso!`);
    setCategory("");
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

export const getServerSideProps = canSSRAuth(async ctx => {
  return {
    props: {},
  };
});
