import { FiX } from "react-icons/fi";
import Modal from "react-modal";
import { OrderItemProps } from "../../../pages/dashboard";
import styles from "./styles.module.scss";

interface ModalOrderProps {
  isOpen: boolean;
  onRequestClose: () => void;
  order: OrderItemProps[];
}

export function ModalOrder({ isOpen, onRequestClose, order }: ModalOrderProps) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      bottom: "auto",
      right: "auto",
      padding: "30px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1d1d2e",
      width: "90%",
      maxWidth: "650px",
      borderRadius: "10px",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h2>Detalhes do pedido</h2>
          <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
            style={{ background: "transparent", border: 0 }}
          >
            <FiX size={40} color="#f34748" />
          </button>
        </div>
        <span className={styles.table}>
          Mesa: <strong>{order[0].order.table}</strong>
        </span>
        {order.map(item => (
          <section key={item.id} className={styles.containerItem}>
            <strong>
              {item.amount} - {item.product.name}
            </strong>
            <span className={styles.description}>
              {item.product.description}
            </span>
          </section>
        ))}

        <button className={styles.btnOrder}>Concluir pedido</button>
      </div>
    </Modal>
  );
}
