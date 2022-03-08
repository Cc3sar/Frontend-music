import React from 'react';

import { useNavigate } from 'react-router-dom';

import Axios from 'axios';

import appConfig from '../../config/env';

const SongItem = ({song, list}) => {
    const navigate = useNavigate();

    const handleDelete = async (songId) => {
        await Axios.delete(`${ appConfig.apiUrl }songs/${ songId }/`);
        list();
    }

    return(
        <div className="col-md-4 mb-4">
            <div className="card card-body">
                <h3 className="card-title">
                    {song.name}
                    <button onClick={() => navigate(`/updateSong/${song.id}`)} className="ms-3 btn btn-sm btn-info">Update</button>
                </h3>
                <button onClick={() => song.id && handleDelete(song.id)} className="btn btn-danger my-2">Delete</button>
            </div>
        </div>
    )
}

export default SongItem;