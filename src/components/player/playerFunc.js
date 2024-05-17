import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios';
// components
import Progressbar from "../props/progressBar";
// hooks
import getWithToken from '../../utils/getWithToken';
// utils
import useOnclickOutside from '../../hooks/useOnclickOutside';
import updateWithToken from '../../utils/updateWithToken';
// context
import { StatusContext, TokenContext } from '../../utils/context';
// styled-components
import { Wrapper, DeviceOptions, VolumeFunc } from "./styles/funcStyles"
// icons
import { DeviceIcon, VolumeIcon, MaximixeIcon, MonitorIcon, SmartPhoneIcon } from '../../helpers/icons'

export default function PlayerFunctionality({ toggleDevice = false, setToggleDevice, handleMaximize, isFullScreen }) {
    const spotifyToken = useContext(TokenContext);
    const setFlash = useContext(StatusContext);

    const deviceRef = useRef(null);
    const [devices, setDevices] = useState([]);
    const [volume, setVolume] = useState(0.5);

    useOnclickOutside(deviceRef, () => setToggleDevice(false));

    useEffect(() => {
        const cancelSource = axios.CancelToken.source();
        // get user's all devices information
        if (toggleDevice) {
            const getDeviceInfo = async _ => {
                const requestFunc = getWithToken('https://api.spotify.com/v1/me/player/devices', spotifyToken, cancelSource);
                try {
                    const response = await requestFunc();
                    if (response.status === 200) {
                        let { devices } = response.data;
                        setDevices(devices);
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            getDeviceInfo();
        }

        return _ => cancelSource.cancel();
    }, [toggleDevice, spotifyToken, setFlash])

    // switch or transfer device 
    const switchDevice = (id) => {
        if (typeof spotifyToken !== 'undefined') {
            const data = { device_ids: [id] };
            const requestTransfer = async _ => {
                const reqFunction = updateWithToken('https://api.spotify.com/v1/me/player', spotifyToken, data);
                try {
                    const response = await reqFunction();
                    if (response.status === 204) {
                        setToggleDevice(false);
                    } else {
                    }
                } catch (error) {
                    console.log(error)
                }
            }

            requestTransfer();
        }
    };

    // handle volume
    const handleVolume = (ratio) => {
        const integer = Math.round(ratio * 100);
        const seekVolume = async _ => {
            const requestFunc = updateWithToken(`https://api.spotify.com/v1/me/player/volume?volume_percent=${integer}`, spotifyToken);
            try {
                const response = await requestFunc();
                if (response.status === 204) {
                    setVolume(ratio);
                } else {
                }
            } catch (error) {
                console.log(error)
            }
        }
        seekVolume();
    };

    return (
        <Wrapper ref={deviceRef} active={toggleDevice}>
            <button onClick={() => setToggleDevice(!toggleDevice)}>
                <DeviceIcon />
                {toggleDevice && (
                    <DeviceOptions>
                        <div className="text">
                            <h3>Kết nối thiết bị khác</h3>
                        </div>
                        <div className="banner">
                            <img src='../img/device.png' alt="devices-png" draggable="false" />
                        </div>
                        <div className="devices">
                            {devices && devices.length === 0 ? (<h3>Không phát hiện thiết bị nào, hãy thử bật lại hộp thoại này</h3>) : (
                                devices.map(items => (
                                    <div key={items.id} className="device_item" onClick={() => items.is_active === true ? null : switchDevice(items.id)}>
                                        <div className="icon">
                                            {items.type === "Computer" ? <MonitorIcon /> : <SmartPhoneIcon />}
                                        </div>
                                        <div className="informations">
                                            <div className="name">
                                                <span style={{ color: items.is_active ? 'rgba(44,191,255,1)' : 'black' }}>{items.is_active ? `Đang phát` : `${items.name}`}</span>
                                            </div>
                                            <div className="device_status">
                                                <VolumeIcon volume={1} style={{ stroke: items.is_active ? 'rgba(44,191,255,1)' : 'black' }} />
                                                <span style={{ color: items.is_active ? 'rgba(44,191,255,1)' : 'black)' }}>{items.is_active ? `${items.name}` : `Đã ngắt kết nối`}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </DeviceOptions>
                )}
            </button>
            <VolumeFunc>
                <VolumeIcon volume={volume} />
                <Progressbar value={volume} setValue={(ratio) => handleVolume(ratio)} className="progress_volume" />
            </VolumeFunc>
            <button onClick={isFullScreen ? () => document.exitFullscreen() : handleMaximize} className="maximize">
                <MaximixeIcon />
            </button>
        </Wrapper>
    )
}
