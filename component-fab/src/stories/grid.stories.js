import React from 'react';
import  Grid  from "./Grid";
import * as Styled from "./Grid.style"

export default {
    title: 'GridView/Grid',
    component: Grid,
  };
  
  const Img1 = {
    src: "https://images.contentstack.io/v3/assets/blt07d653b53a07a055/bltf86358ea63967371/600982f694a1800f61b4ef3c/gridmosaicexampleimage.jpg?disable=upscale&format=webp&quality=70&width=1280",
    link: "",
    alt: ""
  }
  const Img2= {
    src: "https://images.contentstack.io/v3/assets/blt07d653b53a07a055/bltf5d546faf18ed515/60f5f7a4ed7a525fcd55b844/Captura_de_Pantalla_2021-07-19_a_la(s)_18.05.13.png?disable=upscale&format=webp&quality=70&width=1280",
    link: "https://www.falabella.com/falabella-cl",
    alt: ""
  }
  const logo = {
    src:"https://images.contentstack.io/v3/assets/blt07d653b53a07a055/blt695e70830c51fc8d/5efbb573b2975d3d706ad12f/logocyber-mobile.svg?disable=upscale&format=webp&width=1280"
  }

  const Video = {
    src: "https://falabella.scene7.com/is/content/Falabella/DiaDia/Videos/Especiales/infl2_berni.mp4",
    link: "https://www.falabella.com/falabella-cl",
    preload: "auto",
    alt: ""
  }
                            
  export const textExample= () =>(
    
    <div>
      <Styled.H2><Styled.Logo src={logo.src}></Styled.Logo><h2>Aún no has visto nada</h2></Styled.H2>
      <Styled.Div>
        <div>
          
        
        <Styled.Img src={Img1.src}></Styled.Img>
        <Styled.Img src={Img2.src}></Styled.Img>
        <Styled.Video src={Video.src} preload={Video.preload} autoPlay loop playsInline muted></Styled.Video>
        </div>
      </Styled.Div>
      <Styled.Button>QUIERO VER MAS</Styled.Button>
      
    </div>
  );

