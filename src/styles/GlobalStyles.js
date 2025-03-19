import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme.colors.BgMain};
        font-family: ${({ theme }) => theme.fonst.main};
        color: ${({ theme }) => theme.colors.textColor};
        font-size: ${({ theme }) => theme.fontSize.fzText};
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
    }
    
    button{
        cursor: pointer;
    }
`;
