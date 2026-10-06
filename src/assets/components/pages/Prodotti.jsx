import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Prodotti() {

  // Stato che contiene la lista dei prodotti
  const [listaProdotti, setListaProdotti] = useState([]);

  // Recupero i prodotti dall'API quando il componente viene caricato
  useEffect(() => {

    async function recuperaProdotti() {

      // Chiamata API
      const response = await fetch(
        "https://dummyjson.com/products"
      );

      // Controllo la risposta
      if (!response.ok) {
        throw new Error("Errore nella risposta dell'API");
      }

      // Converto la risposta in JSON
      const data = await response.json();

      // Salvo i prodotti nello stato
      setListaProdotti(data.products);
    }

    recuperaProdotti();

  }, []);

  return (
    <section className="container py-5">

      <h2 className="mb-4">Prodotti</h2>

      <ul className="row g-4 list-unstyled">

        {/* Creo una card per ogni prodotto */}
        {listaProdotti.map((prodotto) => (

          <li
            className="col-12 col-md-6 col-lg-4"
            key={prodotto.id}
          >

            {/* Link alla pagina di dettaglio */}
            <Link
              to={`/prodotti/${prodotto.id}`}
              className="text-decoration-none text-dark"
            >

              <div className="card h-100">

                <img
                  src={prodotto.thumbnail}
                  className="card-img-top"
                  alt={prodotto.title}
                />

                <div className="card-body">

                  <h5 className="card-title">
                    {prodotto.title}
                  </h5>

                  <p className="card-text">
                    {prodotto.description}
                  </p>

                  <span className="badge bg-primary">
                    {prodotto.category}
                  </span>

                </div>

              </div>

            </Link>

          </li>
        ))}

      </ul>

    </section>
  );
}