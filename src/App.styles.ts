import styled, {createGlobalStyle} from 'styled-components';    
export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}

body{
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

* {
    box-sizing: border-box;
}
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .score{
        font-size: 2rem;
        margin: 0;
    }
    h1{
        
    }
`