import styled from "styled-components/macro"

export const Container = styled.div`
height: 80px;
width: auto;
overflow: hidden;
a {
    position: relative;
    background: rgba(179,179,179,0.35);
    border-radius: 4px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.25s;
    .poster {
        max-width: 78px;
        min-width: 78px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
            }
            h3 {
                font-size: 25px;
            }
        }
    .meta {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        button {
            position: absolute;
            right: 12px;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            border: none;
            opacity: 0;
            background: black;
            transform: translateY(8px);
            transition: all 0.25s;
            animation-direction: alternate;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
                color: white;
                width: 18px;
                height: 18px;
            }
            &:hover {
                transform: scale(1.05);
            }
        }
        h3 {
            font-size: 15px !important;
            white-space: nowrap;
            width: 106px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    &:hover {
        background: rgba(44,191,255,1);
        button {
                opacity: 1;
                transform: translateY(0px);
        }
    }
}
`;