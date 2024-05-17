import React, { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'
// components
import SongStatus from './songStatus'
import PlayerFunctionality from './playerFunc'
// context
import { StatusContext, TokenContext, TrackContext } from "../../utils/context"
// utils
import reqWithToken from "../../utils/reqWithToken"
import updateWithToken from '../../utils/updateWithToken'
import postWithToken from "../../utils/postWithToken"
// icons 
import { PlayIcon, PauseIcon, ShufflePlayIcon, PreviousPlayIcon, NextPlayIcon, RepeatPlayIcon } from '../../helpers/icons'
// styled-components
import { Wrapper, Container, PlayerStatus, AudioPlayer, PlayerControl } from './styles/playerStyles'

function Player({ handleMaximize, isFullScreen }, ref) {
    const spotifyToken = useContext(TokenContext);
    const setFlash = useContext(StatusContext);
    const { currentTrack, setCurrentTrack } = useContext(TrackContext);

    let fireyPlayer = useRef(null);

    const [toggleDevice, setToggleDevice] = useState(false);
    const [playbackState, setPlaybackState] = useState({
        loading: false,
        play: false,
        shuffle: false,
        repeat: false,
        progress: 0,
        duration: 0,
    });

    // handle ref from the start
    useImperativeHandle(ref, () => ({
        updateState: () => {
            setPlaybackState(state => ({ ...state, play: true }));
            updateState();
        }
    }))

    // create a new cross browser audio player with spotify webplayback sdk
    const loadScript = () => {
        const script = document.createElement("script");
        script.id = "spotify-player";
        script.type = "text/javascript";
        script.async = "async";
        script.defer = "defer";
        script.src = "https://sdk.scdn.co/spotify-player.js";
        document.body.appendChild(script);
    };


    const InitializePlayer = () => {
        let { Player } = window.Spotify;
        fireyPlayer = new Player({
            name: "Next Music",
            getOAuthToken: (cb) => {
                cb(spotifyToken);
            },
        });
        // Error handling
        fireyPlayer.addListener("initialization_error", ({ message }) => {
            console.log(message);
        });
        fireyPlayer.addListener("authentication_error", ({ message }) => {
            console.log(message);
        });
        fireyPlayer.addListener("account_error", ({ message }) => {
            console.log(message);
        });
        fireyPlayer.addListener("playback_error", ({ message }) => {
            console.log(message);
        });
        // Playback status updates
        fireyPlayer.addListener("player_state_changed", (state) => {
            try {
                if (state) {
                    const { duration, loading, paused, position, repeat_mode, shuffle, track_window } = state;
                    const { current_track } = track_window;
                    setCurrentTrack({ ...current_track, play: !paused });
                    setPlaybackState(state => ({
                        ...state,
                        loading: loading,
                        play: !paused,
                        shuffle: shuffle,
                        repeat: repeat_mode !== 0,
                        progress: position,
                        duration: duration
                    }));
                }
            } catch (error) {
                console.log(error);
            }
        });
        // Ready
        fireyPlayer.addListener("ready", ({ device_id }) => {
        });
        // Not Ready
        fireyPlayer.addListener("not_ready", ({ device_id }) => {
        });
        // Connect the player!
        fireyPlayer.connect()
    };

    const updateState = () => {
        if (!fireyPlayer.current) {
            getPlayerInfo();
        }
    };

    // get user's current player device infomations 
    const getPlayerInfo = _ => {
        const reqInformations = reqWithToken('https://api.spotify.com/v1/me/player', spotifyToken)
        const getFunc = async () => {
            try {
                const response = await reqInformations();
                if (response.status === 200) {
                    const { data } = response;
                    const { is_playing, item, progress_ms, repeat_state, shuffle_state } = data;
                    setCurrentTrack({ ...item, play: is_playing });
                    setPlaybackState(state => ({
                        ...state,
                        play: is_playing,
                        shuffle: shuffle_state,
                        repeat: repeat_state !== "off",
                        duration: item.duration_ms,
                        progress: progress_ms,
                    }))
                } else if (response.status === 204) {
                } else {
                }
            } catch (error) {
                console.log(error);
            }
        }
        getFunc();
    };

    // play / resume, pause track
    const toggleMusic = _ => {
        const request = updateWithToken(`${playbackState.play ? `https://api.spotify.com/v1/me/player/pause` : `https://api.spotify.com/v1/me/player/play`}`, spotifyToken);
        const requestFunc = async _ => {
            try {
                const response = await request();
                if (response.status === 204) {
                    setPlaybackState(state => ({ ...state, play: !state.play }))
                    updateState();
                } else {
                    setFlash('Bạn chưa chọn thiết bị phát');
                    return;
                }
            } catch (error) {
                console.log(error);
            }
        }

        requestFunc();
    };

    // enable shuffle mode 
    const toggleShuffle = _ => {
        const request = updateWithToken(`https://api.spotify.com/v1/me/player/shuffle?state=${!playbackState.shuffle}`, spotifyToken);
        const requestFunc = async _ => {
            try {
                const response = await request();
                if (response.status === 204) {
                    setPlaybackState(state => ({ ...state, shuffle: !state.shuffle }));
                    setFlash(`Trộn bài ${playbackState.shuffle ? "đã tắt" : "đang bật"}`);
                } else {
                    return;
                }
            } catch (error) {
                console.log(error);
            }
        }

        requestFunc();
    };

    // get previous track
    const skipPrevious = _ => {
        const request = postWithToken('https://api.spotify.com/v1/me/player/previous', spotifyToken);
        const requestFunc = async _ => {
            try {
                const response = await request();
                if (response.status !== 204) {
                    setFlash('Bạn thao tác quá nhanh, vui lòng F5 lại trang!');
                    return;
                };
            } catch (error) {
                console.log(error);
            }
        }

        requestFunc();
    };

    // get next track
    const skipNext = _ => {
        const request = postWithToken('https://api.spotify.com/v1/me/player/next', spotifyToken);
        const requestFunc = async _ => {
            try {
                const response = await request();
                if (response.status !== 204) {
                    setFlash('Bạn thao tác quá nhanh, vui lòng F5 lại trang!');
                    return;
                };
            } catch (error) {
                console.log(error);
            }
        }

        requestFunc();
    };

    // enable repeat mode 
    const toggleRepeat = _ => {
        const request = updateWithToken(`https://api.spotify.com/v1/me/player/repeat?state=${playbackState.repeat ? `off` : `track`}`, spotifyToken);
        const requestFunc = async _ => {
            try {
                const response = await request();
                if (response.status === 204) {
                    setPlaybackState(state => ({ ...state, repeat: !state.repeat }));
                    setFlash(`Phát lặp lại ${playbackState.repeat ? "đã tắt" : "đang được bật"}`);
                } else {
                    setFlash('Bạn thao tác quá nhanh, vui lòng F5 lại trang!');
                    return;
                }
            } catch (error) {
                console.log(error);
            }
        }

        requestFunc();
    };

    useEffect(() => {
        // initialize script
        loadScript();
        getPlayerInfo();
        window.onSpotifyWebPlaybackSDKReady = () => InitializePlayer();
        // get current state of the player
        return () => {
            fireyPlayer.disconnect();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <Wrapper>
            <Container>
                <PlayerStatus>
                    <SongStatus currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} />
                </PlayerStatus>
                <AudioPlayer>
                    <div className="player_controls">
                        <div className="player_shuffle">
                            <button onClick={toggleShuffle}>
                                <ShufflePlayIcon fill={playbackState.shuffle ? `rgba(29, 185, 84, 1)` : `rgba(179, 179, 179, 1)`} />
                            </button>
                        </div>
                        <div className="player_previous">
                            <button onClick={skipPrevious}>
                                <PreviousPlayIcon />
                            </button>
                        </div>
                        <div onClick={toggleMusic} className="player_play_controls">
                            <button>
                                {playbackState.play && playbackState.loading === false ? <PauseIcon /> : <PlayIcon />}
                            </button>
                        </div>
                        <div className="player_next">
                            <button onClick={skipNext}>
                                <NextPlayIcon />
                            </button>
                        </div>
                        <div className="player_repeat">
                            <button onClick={toggleRepeat}>
                                <RepeatPlayIcon fill={playbackState.repeat ? `rgba(29, 185, 84, 1)` : `rgba(179, 179, 179, 1)`} />
                            </button>
                        </div>
                    </div>
                </AudioPlayer>
                <PlayerControl>
                    <PlayerFunctionality
                        toggleDevice={toggleDevice}
                        setToggleDevice={setToggleDevice}
                        handleMaximize={handleMaximize}
                        isFullScreen={isFullScreen}
                    />
                </PlayerControl>
            </Container>
        </Wrapper>
    )
}

export default forwardRef(Player);