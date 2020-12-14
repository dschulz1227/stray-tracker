import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function UploadImage({user}) {
    const [data,
        setData] = useState();
    const [loading,
        setLoading] = useState(false)

    useEffect(() => {
        console.log(user, 'came from upload image file')
    }, []);

    const handleFileRead = async(event) => {
        //when button is clised, get the file name
        const file = event.target.files[0]
        console.log(file)
        const base64 = await convertBase64(file)
        // user.avitar = base64; await API.put(`/users/${user.id}`, user); setData(user)
    }
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }
    const uploadPhoto = (e) => {
        setLoading(true)
        //get image information
        var uploadfile = e.target.files[0];
        console.log(uploadfile)

        //when sending image info to server always call new FormData(), the image info will be stored here.
        var data = new FormData();

        // for getting only extension
        var fileExtension = uploadfile
            .type
            .split("/")
            .pop();
        
        //rename file - option
        //data.append("sampleFile", uploadfile, user._id + '.' + fileExtension);

        data.append("sampleFile", uploadfile);
        console.log(data)

        //save file  to  database and upload image to AWS S3
        var request = axios.post(`http://localhost:5000/api/users/updateImage/${user._id}`, data)
        request.then(function (response) {
            console.log(response, 'upload image response')
            // you need to send data from server in response
            if (response.status == 200) {
                window.location.reload(false);
                // pushed document data in documents array
            }
            setLoading(false)
        })
    }

    return (
        <div>
            <div className="gallery">
                Upload Images test {/* <input
                            accept="image/*"
                            type="file"
                            required
                            label="Document"
                            onChange={e => uploadPhoto(e)}
                            size="small"
                            variant="primary"
                            style={{ margin: '0 auto', display: 'none' }}
                            id="sampleFile"
                            name="sampleFile"
                        /> */}
                <input
                    id="fileInput"
                    type="file"
                    name="sampleFile"
                    onChange={uploadPhoto}
                    
                    className="form-input"/>
                {/* <button color="primary" variant="contained" component="span">
                    {loading
                        ? `Uploading image... Please wait.`
                        : 'Upload Image'}
                </button> */}
                <div style={{width:250, height:250}}>
                    <img src={user.avatar} style={{width:'100%', height:'100%'}}/>
                </div>
            </div>
        </div>
    );
}