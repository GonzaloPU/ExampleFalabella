import React from 'react'
import * as Styled from './Grid.style';
import PropTypes from 'prop-types';

const Grid = ({src, preload}) => {
  return (
    <div>
        
        <Styled.Div>
        <Styled.Img src={src} data-testid="img-testid"/>
        <Styled.Video src={src} preload ={preload}/>
        </Styled.Div>

        <Styled.Button>QUIERO VER MAS</Styled.Button>
          
    </div>
  )
}

Grid.protoTypes ={
  src: PropTypes.string.isRequired,
  preload: PropTypes.string.isRequired
}

Grid.defaulProps = {
  preload: '',
  src: ''
}



export default Grid;
