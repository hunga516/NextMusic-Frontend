import React, { useContext, useEffect, useState } from 'react'
// components
import Header from '../../components/header'
import PageBanner from '../../components/props/pageBanner';
// utils
import randomColor from '../../utils/randomColor';
import reqWithToken from '../../utils/reqWithToken';
// context
import { TrackContext, TokenContext, LoginContext } from '../../utils/context';
// styled-components
import { Wrapper } from "./styles/trackStyles"
import TrackList from '../../components/props/trackList';

export default function CollectionTracks() {
    const auth = useContext(LoginContext);
    const spotifyToken = useContext(TokenContext);
    const { currentTrack } = useContext(TrackContext);


    const [bgColor, setBgColor] = useState('');
    const [songs, setSongs] = useState([]);
    const [totalSongs, setTotalSongs] = useState(0);


    useEffect(() => {
        if (auth) {
            async function getSavedTracks() {
                const getTracks = reqWithToken('https://api.spotify.com/v1/me/tracks?limit=50', spotifyToken);
                try {
                    const response = await getTracks();
                    if (response.status === 200) {
                        let { items, total } = response.data;
                        setTotalSongs(total);
                        setSongs([...items.map(item => item.track)])
                    } else {
                        console.log('opps, something happend.')
                    }
                } catch (error) {
                    console.log(error)
                }
            }

            getSavedTracks();
        }
    }, [spotifyToken, auth])

    useEffect(() => {
        // set a random linear background color
        setBgColor(randomColor());
    }, [])

    return (
        <Wrapper>
            <Header bg={bgColor} />
            <PageBanner
                bg={bgColor}
                songs={totalSongs}
                title="Liked Songs"
                image={'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png'}
                disabled={true}
            >
                <TrackList songs={songs} />
            </PageBanner>
        </Wrapper>
    )
}
