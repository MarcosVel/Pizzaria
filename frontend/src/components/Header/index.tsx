import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Header() {
  const { signOut } = useContext(AuthContext);

  return (
    <header>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <Image src="/logo.svg" alt="logo" width={190} height={60} />
        </Link>

        <nav>
          <Link href="/category">Categoria</Link>
          <Link href="/product">Cardápio</Link>
          <button onClick={signOut}>
            <FiLogOut color="#fff" size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}
