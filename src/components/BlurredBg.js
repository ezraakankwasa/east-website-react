import React from 'react';
import styled from 'styled-components';

const BlurredBg = ({teammember}) => {
    return(
        <ModalContainer>
            if(teammember)
            {
                
            }
            else
            {

            }
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: #fff;
  border: 1px solid #000;
  padding: 20px;
  min-height: 200px;
`;

export default BlurredBg;