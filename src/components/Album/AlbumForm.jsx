import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Axios from 'axios'

import appConfig from '../../config/env';

const AlbumForm = () => {
    const navigate = useNavigate();
    const params = useParams();

    const initialState = { name:"", nameband:"", date: "2022-02-28" };

    const [album, setalbum] = useState(initialState);

    const handleInputChange = (e) => {
        setalbum({ ...album, [e.target.name]: e.target.value })
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!params.id) {
            await Axios.post(`${appConfig.apiUrl}albums/`, album);
            setalbum(initialState);
        } else {
            await Axios.put(`${appConfig.apiUrl}albums/${params.id}/`, album);
        }
         
        navigate("/");
    }
    
    const getalbum = async(albumId) => {
        const res = await Axios.get(`${appConfig.apiUrl}albums/${albumId}`);
        setalbum(res.data);
    }

    useEffect(() => {
        if(params.id) {
            getalbum(params.id);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div className="col-md-3 mx-auto">
            <h2 className="mb-3 text-center">album</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" value={album.name} onChange={handleInputChange} className="form-control" minLength="2" maxLength="100" autoFocus required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Band</label>
                    <input type="text" name="nameband" value={album.nameband} onChange={handleInputChange} className="form-control" minLength="2" maxLength="150" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Year</label>
                    <input type="date-us" name="date" value={album.date} onChange={handleInputChange} className="form-control" maxLength="100" required />
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

export default AlbumForm;