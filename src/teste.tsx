import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}


// é possível fazer uma estilização simples para cada item, depois chama-lo no código html.
const Botao = styled.button`
  background-color: red;
`

// também é possivel estilizar cada item através de uma propriedade, fazendo condições para que possa funcionar de formas diferentes
const Botao2 = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

//também é possivel criar um outro item, a partir de um item já definido
const BotaoPerigo = styled(Botao2) `
  background-color: red;
  color: #fff;
`

function Teste() {
  return (
    <>
      <Botao>Clique aqui</Botao>
      <Botao2 principal={false}>Clique aqui</Botao2>
      <Botao2 fontSize="14px" principal>
        Clique aqui
      </Botao2>
      <BotaoPerigo principal>
        Não clique
      </BotaoPerigo>
    </>
  )
}

export default Teste
