import Head from "next/head";
import { FiRefreshCcw } from "react-icons/fi";
import { Header } from "../../components/Header";
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from "./styles.module.scss";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Header />
      <main className={styles.container}>
        <div className={styles.header}>
          <h1>Últimos pedidos</h1>
          <button>
            <FiRefreshCcw size={25} />
          </button>
        </div>

        <article className={styles.listOrders}>
          <button className={styles.orderItem}>
            <div className={styles.tag} />
            <span>Mesa 30</span>
          </button>
        </article>
      </main>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async ctx => {
  return {
    props: {},
  };
});
