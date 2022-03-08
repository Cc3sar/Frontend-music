import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { useParams } from 'react-router-dom'

import  appConfig from '../../config/env';

import SongItem from './SongItem';

const SongList = () => {
    const params = useParams();
    const idSongs = params.id;

    const [songs, setSongs] = useState([]);

    const list = async() => {
        const res = await Axios.get(`${appConfig.apiUrl}albums/${idSongs}`);
        setSongs(res.data.songs);
    }

    useEffect(() => {
        list();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="row">
            {songs.map((song) => (
                <SongItem key={song.id} song={song} list={list} />
            ))}
        </div>
    )
}

export default SongList