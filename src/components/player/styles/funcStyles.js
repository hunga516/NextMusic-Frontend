import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
        &:after {
            display: ${(props) => props.active ? `block` : `none`};
            position: absolute;
            z-index: 20;
            content: '';
            top: 0;
            left: 8px;
            transform: rotate(180deg);
            width: 24px;
            height: 12px;
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            background: rgba(40, 40, 40, 1);
        }
    button {
        margin: 8px 12px 0 12px;
        background: transparent;
        outline: none;
        border: none;
            svg {
                transition: all 0.15s;
                stroke: rgba(179, 179, 179, 1);
                width: 20px;
                height: 20px;
            }
            &:hover {
                svg {
                    stroke: rgba(255, 255, 255, 1);
                }
            }
        }
`;

export const DeviceOptions = styled.div`
    border-radius: 8px;
    padding: 24px 16px;
    width: auto;
    height: auto;
    position: absolute;
    z-index: 20;
    bottom: 100%;
    right: 50%;
    background: rgba(226,225,225,1);
    .text {
        margin-bottom: 24px;
        white-space: nowrap;
        h3 {
            color: black;
            font-size: 20px;
            letter-spacing: 0.3px;
        }
    }
    .banner {
        padding: 0 24px;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .devices {
        display: flex;
        flex-direction: column;
        h3 {
            font-size: 15px;
            color: black;
            font-weight: 400;
        }
        .device_item {
            display: flex;
            padding: 8px 16px;
            transition: 0.2s;
            background: transparent;
            border-radius: 4px;
            &:hover {
                background: rgba(176,175,175,0.8);
            }
            .icon {
                margin-right: 12px;
                svg {
                    width: 32px;
                    height: 32px;
                    stroke: black;
                }
            }
            .informations {
                display: flex;
                flex-direction: column;
                .name {
                    color:black;
                    align-self: flex-start;
                    span {
                        color: black;
                        font-size: 15px;
                        font-weight: 600;
                        white-space: nowrap;
                    }
                }
                .device_status {
                    display: flex;
                    align-items: center;
                    svg {
                        height: 18px;
                        width: 18px;
                        margin-right: 4px;
                    }
                    span {
                       color: black;
                       font-size: 12px;
                       font-weight: 600;
                       white-space: nowrap;
                    }
                }
            }
        }
    }
`;

export const VolumeFunc = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    margin-top: 2px;
    &:hover {
        svg {
            color: rgba(255, 255, 255, 0.9);
        }
    }
    svg {
        transition: all 0.15s;
        width: 30px;
        height: 30px;
        color: rgba(179, 179, 179, 0.9);
        margin-right: 6px;
    }
`;