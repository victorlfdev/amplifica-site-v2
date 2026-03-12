import Header from "../components/Header";
import Hero from "../components/Hero";
import Servicos from "../components/Servicos";
import Carrossel from "../components/Carrossel";
import Sobre from "../components/Sobre";
import Contato from "../components/Contato";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Servicos />
      <Carrossel />
      <Sobre />
      <Contato />
      <Footer />
    </>
  );
}
