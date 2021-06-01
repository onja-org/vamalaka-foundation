import styled from 'styled-components'

const Container = styled.div`
  div {
   position: relative;
    margin: auto;
      p {
      position: absolute;
      top: 30%;
      left: 8%;
      color: #FFFFFF;
      font-family: Futura Std;
      font-style: normal;
      font-weight: 400px;
      font-size: 40px;
      line-height: 48px;
      text-align: center;
      max-width: 534px;
    }
  }
`;

export interface LeftSideProps {
  background: string,
  backgroundSize: string,
  backgroundPosition: string,
  backgroundRepeat: string,
  width: string,
  maxWidth: string,
  height: string,
  fontFamily: string,
}

export const LeftSide: React.FC<LeftSideProps> = ({ backgroundSize, background, backgroundPosition, backgroundRepeat, width, height, fontFamily, maxWidth }) => (
  <Container>
    <div style={{
      background,
      backgroundSize,
      backgroundPosition,
      backgroundRepeat,
      maxWidth,
      width,
      height
    }}>
      <p style={{fontFamily}}>Discover amazing products and profit from a truly fair market</p>
    </div>
  </Container>
);
