import Head from "next/head";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Input } from "../../components/ui/input";
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from "./styles.module.scss";

export default function Product() {
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files);

    if (!e.target.files) {
      return;
    }

    const image = e.target.files[0];

    if (!image) {
      return;
    }

    if (image.type === "image/jpeg" || image.type === "image/png") {
      setImageFile(image);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <>
      <Head>
        <title>Produtos</title>
      </Head>

      <Header />
      <main className={styles.container}>
        <h1>Novo Produto</h1>

        <form>
          <label className={styles.labelImg}>
            <FiUpload size={30} color="#fff" />
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFile}
            />

            {imageUrl && (
              <Image
                src={imageUrl}
                alt="Produto"
                className={styles.preview}
                width={300}
                height={300}
              />
            )}
          </label>

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
