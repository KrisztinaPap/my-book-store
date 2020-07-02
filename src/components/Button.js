import styled from 'styled-components';

export const MyButton = styled.button`
    font-size: 1rem;
    background: transparent;
    border: 0.05rem solid;
    border-radius: 0.75rem;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &: hover{
        background:var(--lightPurple);
        color: var(--white);
    }
    &: focus{
        outline: none;
    }
`

