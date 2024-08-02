import Home from "./pages/Home/Home";
import Input from "./components/Input/InputSearch";
import Logo from './components/Logo/Logo'
import CarrouselFilter from "./components/CarrouselFilter/CarrouselFilter";
import './index.css'
import './styles/global.css'
import InputSearch from "./components/Input/InputSearch";
import CardFood from "./components/CardFood/CardFood";
function App() {
  return (
    <>
    <Logo/>
    <div className="search">
    <InputSearch/>
    </div>
      <div className="containerFilter">
      <CarrouselFilter 
      imageSrc=" https://img.freepik.com/fotos-gratis/hamburguer-de-carne-grelhada-com-queijo-tomate-e-cebola-no-pao-gerado-por-inteligencia-artificial_25030-63222.jpg?ga=GA1.1.1229035658.1718065502&semt=sph"
      text="Hamburguer"
      />
      <CarrouselFilter
      imageSrc=" https://img.freepik.com/fotos-gratis/pizza-de-calabresa-com-azeitonas-na-placa-de-madeira_140725-5374.jpg?ga=GA1.1.1229035658.1718065502&semt=sph"
      text="Pizza"/>
      <CarrouselFilter
       imageSrc=" https://img.freepik.com/fotos-gratis/composicao-de-comida-brasileira-deliciosa-de-alto-angulo_23-2148739223.jpg?t=st=1722624870~exp=1722628470~hmac=f610bc1d79e1ed91575a217c512e5237be23150f91ebea01bf00281dafa8edc9&w=1380"
       text="Comida"/>
      <CarrouselFilter
       imageSrc=" https://img.freepik.com/fotos-gratis/salada-de-legumes-na-mesa_23-2148515515.jpg?ga=GA1.1.1229035658.1718065502&semt=sph"
       text="Salada"/>
      </div>
    <div className="cards">
      <CardFood
      cardImg="https://img.freepik.com/fotos-gratis/frango-grelhado-arroz-grao-de-bico-picante-abacate-repolho-pimenta-na-tigela-buda_127032-1996.jpg?ga=GA1.1.1229035658.1718065502&semt=sph"
      nameFood="Salada"
      priceFood="R$43.44"
      />
      <CardFood
      cardImg="https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?t=st=1722626374~exp=1722629974~hmac=266b4a686f5cce9e515f25c3cf9679df3a963a84c26e529159ad5c409a87ab81&w=1480"
      nameFood="Hamburguer"
      priceFood="R$53.99"
      />
      <CardFood
      cardImg="https://img.freepik.com/fotos-gratis/pizza-de-calabresa-com-azeitonas-na-placa-de-madeira_140725-5374.jpg?t=st=1722626494~exp=1722630094~hmac=f8e852253e0e27443d8ca788a714551705e23511ff6ab2cfd17718c90e2e4c7c&w=900"
      nameFood="Pizza de calabresa"
      priceFood="R$89.99"
      />
    
    </div>
    </>
  );
}

export default App;
