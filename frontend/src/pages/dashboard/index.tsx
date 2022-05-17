import Head from "next/head";
import { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { Header } from "../../components/Header";
import { setupAPIClient } from "../../services/api";
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from "./styles.module.scss";

type OrdersProps = {
  id: string;
  table: number;
  status: boolean;
  draft: boolean;
  name: string | null;
};
interface HomeProps {
  orders: OrdersProps[];
}

export default function Dashboard({ orders }: HomeProps) {
  const [orderList, setOrderList] = useState(orders || []);

  function handleOpenModalView(id: string) {
    alert("teste: " + id);
  }

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
          {orderList.map(item => (
            <button
              key={item.id}
              className={styles.orderItem}
              onClick={() => handleOpenModalView(item.id)}
            >
              <div className={styles.tag} />
              <span>Mesa: {item.table}</span>
            </button>
          ))}
        </article>
      </main>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async ctx => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get("/orders");

  return {
    props: {
      orders: response.data,
    },
  };
});
