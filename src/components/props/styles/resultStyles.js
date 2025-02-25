import styled from "styled-components"

export const FrameWrapper = styled.div`
    display: grid;
    column-gap: 24px;
    row-gap: 16px;
`;

export const Container = styled.div`
    margin-bottom: 24px;
    width: 100%;
    height: 324px;
    padding: 16px 0;
    border-radius: 5px;
    h1 {
        font-size: 24px;
        color: rgba(255, 255, 255, 0.9);
    }

    .type_grid {
        width: 100%;
        display: flex;
        flex-direction: column;
            .grid {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 6px;
                border-radius: 6px;
                margin-bottom: 4px;
                &:hover {
                    background: rgba(179, 179, 179, 0.2);
                    .meta {
                        .cover {
                            img {
                                filter: grayscale(1);
                            }
                            .start_listening {
                                display: block;
                                opacity: 1;
                            }
                        }
                    }
                }
                .add_to_playlist {
                    button {
                        background: transparent;
                        border: 1px solid rgba(179, 179, 179, 0.6);
                        border-radius: 25px;
                        padding: 8px 24px;
                        color: rgba(255, 255, 255, 0.8);
                        font-weight: 600;
                        font-size: 13px;
                        &:hover {
                            transform: scale(1.08);
                            cursor: pointer;
                        }
                    }
                }
                .meta {
                    display: flex;
                    .cover {
                        width: 42px;
                        height: 42px;
                        position: relative;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                        .start_listening {
                            position: absolute;
                            opacity: 0;
                            display: none;
                            left: 11px;
                            top: 10px;
                            button {
                                outline: none;
                                border: none;
                                background: transparent;
                                svg {
                                    width: 20px;
                                    height: 20px;
                                    color: rgba(255, 255, 255, 1);
                                    fill: rgba(255, 255, 255, 1);
                                }
                            }
                        }
                    }
                    .dets {
                        margin-left: 16px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        h3 {
                            line-height: 16px;
                            font-size: 16px;
                            font-weight: 600;
                            color: black;
                        }
                        span {
                            font-weight: 500;
                            font-size: 14px;
                        }
                    }
                }
            }
            .grid:nth-child(1){
                 background-color: rgba(60,60,67,.03);
            }
            .grid:nth-child(3){
                background-color: rgba(60,60,67,.03);
            }
    }
`;