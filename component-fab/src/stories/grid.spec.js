/*
    - Saber si los componentes se renderiza correctamente
    - Supervisar el estilo de los componentes
*/

import React from "react";
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import {screen, render} from '@testing-library/react'
import Grid from './Grid'




describe('Grid component', () =>{
    const imagesrc=
    'https://images.contentstack.io/v3/assets/blt07d653b53a07a055/bltf5d546faf18ed515/60f5f7a4ed7a525fcd55b844/Captura_de_Pantalla_2021-07-19_a_la(s)_18.05.13.png?disable=upscale&format=webp&quality=70&width=1280';

    beforeEach(() => render(<Grid src={imagesrc}/>));

    
  
    describe('rendering different grid components', () =>{
        
        it('must display a text button', () =>{
            expect(screen.queryByText(/QUIERO VER MAS/i)).toBeInTheDocument()
        });
    })
    
    describe('rendering grid style', () =>{
        
        test('images must have the same property', () =>{
            expect(screen.queryByTestId('img-testid')).toHaveStyle("height: 100%;");
            expect(screen.queryByTestId('img-testid')).toHaveStyle("width: 25.875rem;");
        });
    })
});
