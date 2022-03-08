import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Axios from 'axios'

import appConfig from '../../config/env';

const SongForm = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [albums, setAlbum] = useState([]);

    const initialState = { name:"", album: "" };

    const [song, setsong] = useState(initialState);

    const handleInputChange = (e) => {
        setsong({...song, [e.target.name]: e.target.value })
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // obtener el listado de albums
        console.log(song);
        if(!params.id) {
            await Axios.post(`${appConfig.apiUrl}songs/`, song);
            setsong(initialState);
        } else {
            await Axios.put(`${appConfig.apiUrl}songs/${params.id}/`, song);
        }
         
        navigate("/");
    }
    
    const getsong = async(songId) => {
        const res = await Axios.get(`${appConfig.apiUrl}songs/${songId}`);
        setsong(res.data);
    }

    const getAlbum = async() => {
        const album = await Axios.get(`${ appConfig.apiUrl }albums/`);
        setAlbum(album.data);
    }

    useEffect(() => {
        getAlbum();
        if(params.id) {
            getsong(params.id);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div className="col-md-3 mx-auto">
            <h2 className="mb-3 text-center">song</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" value={song.name} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Album</label>
                    <select className="form-select" onChange={handleInputChange} name="album" value="">
                    <option>----------</option>
                        {albums.map((album) => (
                            <option key={album.id} value={album.id}>{album.name}</option>
                        ))}
                    </select>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-block btn-success">
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
};

export default SongForm;