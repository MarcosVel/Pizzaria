import Head from "next/head";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Input } from "../../components/ui/input";
import { setupAPIClient } from "../../services/api";
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from "./styles.module.scss";

type ItemProps = {
  id: string;
  name: string;
};

interface CategoryProps {
  categoryList: ItemProps[];
}

export default function Product({ categoryList }: CategoryProps) {
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [categories, setCategories] = useState(categoryList || []);
  const [categorySelected, setCategorySelected] = useState(0);

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

  function handleCategorySelected(e) {
    // console.log("Selecionado: ", categories[e.target.value]);
    setCategorySelected(e.target.value);
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

          <select value={categorySelected} onChange={handleCategorySelected}>
            {categories.map((item, index) => (
              <option key={item.id} value={index}>
                {item.name}
              </option>
            ))}
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
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get("/category");

  return {
    props: {
      categoryList: response.data,
    },
  };
});
