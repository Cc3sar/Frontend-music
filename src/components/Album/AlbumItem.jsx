import React from 'react';

import { useNavigate } from 'react-router-dom';

import Axios from 'axios';

import appConfig from '../../config/env';

const AlbumItem = ({album, list}) => {
    const navigate = useNavigate();

    const handleDelete = async (albumId) => {
        await Axios.delete(`${ appConfig.apiUrl }albums/${ albumId }`)
        list();
    }

    let {  id, name, nameband, date } = album;

    return(
        <div className="col-md-4 mb-4">
            <div className="card card-body">
                <h3 className="card-title">
                    {name}
                    <button onClick={() => navigate(`/updateAlbum/${id}`)} className="ms-3 btn btn-sm btn-info">Update</button>
                </h3>
                <p className="card-text">Band: <strong>{nameband}</strong></p>
                <p className="card-text">Year: <strong>{date}</strong></p>
                <button onClick={() => navigate(`/viewSongs/${id}`)} className="btn btn-info my-2">View Album</button>
                <button onClick={() => id && handleDelete(id)} className="btn btn-danger my-2">Delete</button>
            </div>
        </div>
    )
}

export default AlbumItem