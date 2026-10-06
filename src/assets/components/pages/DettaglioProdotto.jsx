import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DettaglioProdotto() {

  // Recupero l'id dinamico dalla URL
  const { id } = useParams();

  // Stato che conterrà il prodotto
  const [prodotto, setProdotto] = useState(null);

  // Recupero il prodotto dall'API
  useEffect(() => {

    async function recuperaProdotto() {

      const response = await fetch(
        `https://dummyjson.com/products/${id}`
      );

      if (!response.ok) {
        throw new Error("Errore nella risposta dell'API");
      }

      const data = await response.json();

      // Salvo il prodotto nello stato
      setProdotto(data);
    }

    recuperaProdotto();

  }, [id]);


  // Mostro un messaggio durante il caricamento
  if (!prodotto) {
    return <p>Caricamento...</p>;
  }


  return (
    <section className="container py-5">

      <div className="row">

        {/* Immagine del prodotto */}
        <div className="col-md-6">
          <img
            src={prodotto.thumbnail}
            alt={prodotto.title}
            className="img-fluid"
          />
        </div>

        {/* Informazioni del prodotto */}
        <div className="col-md-6">

          <h1>{prodotto.title}</h1>

          <p>{prodotto.description}</p>

          <p>
            <strong>Categoria:</strong> {prodotto.category}
          </p>

          <p>
            <strong>Prezzo:</strong> €{prodotto.price}
          </p>

          <p>
            <strong>Disponibilità:</strong> {prodotto.stock}
          </p>

        </div>

      </div>

    </section>
  );
}