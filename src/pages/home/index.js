import React from 'react';
import Menu from '../../components/Menu'
import BannerMain from  '../../components/BannerMain'
import Carrousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import dadosIniciais from  '../../data/dados_iniciais.json'

function Home() {
  return (
    <div style={{ background: "#141414"}}>
      <Menu />
      <BannerMain 
        backgroundImage = '#141414'
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
      ></BannerMain>
      <Carrousel 
        ignoreFirstVideo 
        category={dadosIniciais.categorias[0]}></Carrousel>
      <Carrousel 
        category={dadosIniciais.categorias[1]}></Carrousel>
      <Footer></Footer>
    </div>
  );
}

export default Home;
