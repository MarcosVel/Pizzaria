import Head from "next/head";
import { Header } from "../../components/Header";
import { Input } from "../../components/ui/input";
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from "./styles.module.scss";

export default function Product() {
  return (
    <>
      <Head>
        <title>Produtos</title>
      </Head>

      <Header />
      <main className={styles.container}>
        <h1>Novo Produto</h1>

        <form>
          <select>
            <option>Bebidas</option>
            <option>Pizzas</option>
          </select>

          <div className={styles.inputs}>
            <Input placeholder="Nome do produto" style={{ width: "70%" }} />
            <Input
              type="number"
              placeholder="Preço: R$ 00,00"
              style={{ width: "30%" }}
            />
          </div>

          <textarea placeholder="Descreva seu produto..." />

          <button>Cadastrar</button>
        </form>
      </main>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async ctx => {
  return {
    props: {},
  };
});
