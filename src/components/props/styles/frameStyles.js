import styled from "styled-components/macro"

export const Container = styled.div`
    height: 82%;
    width: auto;
    border-radius: 4px;
    a {
        text-decoration: none;
        width: 100%;
        height: 100%;
        cursor: pointer;
        .poster {
            height: 92%;
            padding: 8px;
            position: relative;
            text-align: center;
            h1 {
                color: rgba(255, 255, 255, 0.9);
            }
            button {
                position: absolute;
                height: 42px;
                width: 42px;
                border-radius: 50%;
                border: none;
                bottom: 24px;
                right: 24px;
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
            img {
                border-radius: 6px;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .meta {
            padding: 0 16px 16px 8px;
            h3 {
                padding: 6px 0px;
                font-size: 16px !important;
                color: black;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            p {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                line-clamp: 2;
                -webkit-line-clamp: 2;
                color: rgba(179, 179, 179, 0.9);
                font-weight: 500;
            }
        }
    }
    &:hover {
        background: rgba(44,191,255,1);
        .poster {
            button {
                opacity: 1;
                transform: translateY(0px);
                box-shadow: 0 8px 8px rgb(0, 0, 0, 0.3);
            }
        }
        .meta{
            background: rgba(44,191,255,1);
            border-radius: 4px;
        }
    }
`;