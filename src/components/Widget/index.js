import styled from 'styled-components';

const Widget = styled.div`

  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) =>
    // console.log('Posso mostrar os temas aqui'); COMENTADO=> Quando ataulizava component, era mostrada
    theme.colors.mainBg
};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }

  .outcomeMessage{
    margin:0;
  }
`;

Widget.Header = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 18px;
  background-color: ${({ theme }) => theme.colors.primary};

  * { 
    margin:0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  
  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none; 
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  p {
    /* margin-top: 0; */
    margin-bottom: 10px;
    line-height: 1.5;
  }
`;

Widget.Topic = styled.a`
  /* text-shadow: 0px 0px 10px black,0px 0px 10px black, 0px 0px 10px F5FBFF;  */
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all .3s;
  display: block;
  

  &:hover,
  &:focus {
    transform: scale(1.07);
    transform-origin: center;
    background-color: ${({ theme }) => `${theme.colors.hover}`};
    opacity: .75;
  }
`;


export default Widget;
