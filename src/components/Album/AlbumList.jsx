import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import  appConfig from '../../config/env';

import AlbumItem from './AlbumItem';

const AlbumList = () => {
    const [albums, setAlbum] = useState([]);

    const List = async() => {
        const res = await Axios.get(`${ appConfig.apiUrl }albums/`);
        setAlbum(res.data);
    }

    useEffect(() => {
        List();
    }, [])

    return (
        <div className="row">
            {albums.map((album) => (
                <AlbumItem key={album.id} album={album} list={List} />
            ))}
        </div>
    )
}

export default AlbumList