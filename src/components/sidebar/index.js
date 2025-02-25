import React, { useContext, useState } from 'react'
import { Link, NavLink } from "react-router-dom"
// components
import EditUi from '../props/editUi'
// utils
import { LoginContext, PlaylistContext } from '../../utils/context'
// icons
import { Logo, HomeIcon, SearchIcon, CollectionIcon, PlusIcon, HeartIcon } from '../../helpers/icons'
// styled-components
import { Wrapper, Container, Banner, NavItems, NavRoot, ClientInfo, CreatePlaylist, LikedSongs, UserPlaylists } from "./styles/sidebarStyles"

export default function Sidebar() {
    const auth = useContext(LoginContext);
    const { items } = useContext(PlaylistContext);

    const [toggle, setToggle] = useState(false);

    return (
        <Wrapper>
            {toggle && <EditUi toggle={toggle} setToggle={setToggle} />}
            <Container>
                <Banner>
                    <Link draggable="false" to="/">
                        <Logo />
                    </Link>
                </Banner>
                <NavItems>
                    <li>
                        <NavLink draggable="false" to="/" exact={true} activeClassName="active">
                            <div className="nav_items">
                                <HomeIcon />
                                <span>Nghe ngay</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink draggable="false" to="/search" activeClassName="active">
                            <div className="nav_items">
                                <SearchIcon />
                                <span>Tìm kiếm</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink draggable="false" to="/collection/playlists" activeClassName="active">
                            <div className="nav_items">
                                <CollectionIcon />
                                <span>Thư viện của bạn</span>
                            </div>
                        </NavLink>
                    </li>
                </NavItems>
                <NavRoot>
                    <CreatePlaylist>
                        <button onClick={auth ? () => setToggle(true) : null}>
                            <div className="rect">
                                <PlusIcon />
                            </div>
                            <span>Tạo danh sách phát</span>
                        </button>
                    </CreatePlaylist>
                    <LikedSongs>
                        <button>
                            <NavLink activeClassName="active" to='/collection/tracks'>
                                <div className="rect">
                                    <HeartIcon />
                                </div>
                                <span>Bài hát yêu thích</span>
                            </NavLink>
                        </button>
                    </LikedSongs>
                    {auth && (
                        <div className="playlist">
                            <UserPlaylists>
                                {items && items.map(({ name, id }, index) => (
                                    <div key={`playlist-${index}`} className="spread">
                                        <NavLink draggable="false" to={`/playlist/${id}`} activeClassName="active"><span>{name}</span></NavLink>
                                    </div>
                                ))}
                            </UserPlaylists>
                        </div>
                    )}
                </NavRoot>
                {!auth && (
                    <ClientInfo>
                        <a draggable="false" href="https://www.spotify.com/legal/cookies-policy/" target="_blank" rel="noreferrer noopener">Cookies</a>
                        <a draggable="false" href="https://www.spotify.com/legal/privacy-policy/" target="_blank" rel="noreferrer noopener">Privacy</a>
                    </ClientInfo>
                )}
            </Container>
        </Wrapper>
    )
}
