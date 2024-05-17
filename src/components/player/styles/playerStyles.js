import styled from "styled-components/macro"

export const Wrapper = styled.footer`
    grid-area: now-playing-bar;
    height: auto;
    width: 100%;
`;

export const Container = styled.div`
    border-top: 0.3px solid rgba(0, 0, 0, 0.18);
    float: right;
    height: 90px;
    width: 86.5%;
    padding: 12px 16px;
    background: white;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PlayerStatus = styled.div`
    width: 25%;
    min-width: 200px;
    height: 100%;
    display: flex;
`;
export const AudioPlayer = styled.div`
    border: 1px solid rgba(226,225,225,1);
    border-radius: 4px;
    background-color: rgba(226,225,225,1);
    width: 65%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* .player_progress_bar {
        width: 100%;
        max-width: 540px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        user-select: none;
        .duration {
            margin: 0 6px;
        }
    } */
    .player_controls {
        display: flex;
        align-items: center;
            button {
                margin: 8px 12px 0 12px;
                background: transparent;
                outline: none;
                border: none;
                svg {
                    transition: all 0.15s;
                    fill: black;
                }
                &:hover {
                    svg {
                        fill: rgba(255, 255, 255, 1);
                    }
                }
        }
        .player_play_controls {
            width: 38px;
            height: 37px;
            border-radius: 49%;
            margin: 0 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 1);
            button {
                margin: 4px 0 0 0;
                svg {
                    width: 17px;
                    height: 17px;
                    fill: black;
                }
            }
        }
    }

    @media(max-width: 800px) {
            width: 64px;
            .player_shuffle, .player_repeat, .player_next, .player_previous {
                display: none;
            }
    }
`;
export const PlayerControl = styled.div`
    width: 25%;
    min-width: 200px;
    height: 100%;
    
    @media (max-width: 800px) {
            display: none;
        }
`;
