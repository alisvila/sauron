import React, { Component } from 'react'
import SideMenu from './Sidemenu'
import TopMenu from './TopMenu'
import Card from '../card'
import Agent from '../../service/api'


export default class uploadPage extends Component {
    constructor(props) {
        super(props);

        this.state = { file: '', imagePreviewUrl: '', uploading: false, image: [], blob: "" }
    }

    uploadImage = file => new Promise((resolve, reject) => {
        console.log(file)
        const reader = new FileReader();

        reader.onload = e => {
            console.log(e.target.result)
            resolve(e.target.result);
        };
        // blob
        reader.readAsText(file);
    });
    

    _handleChange(e) {
        console.log(e)
        e.preventDefault()
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
                image: [...this.state.image, reader.result]
            });
        }
        // base64
        reader.readAsDataURL(file)
        // var blob2 = file2 => new Promise((resolve, reject) => {
        var blob2 = (e) => {
            let blobReader = new FileReader();
            let file = e.target.files[0];
    
            blobReader.onloadend = () => {
                Agent.ImageService.send("//divar", blobReader.result)
                return blobReader.result
            }
            // blob
            blobReader.readAsText(file)
        };
        blob2(e)

    }
    clicked() {
        return
    }
    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        }
        else {
            $imagePreview = (<div className="previreText">please select image</div>);
        }
        return (
            <>
                <TopMenu />
                <div className="body-wrapper">
                        <div className="pannel-body">
                            <div className="flex-row">
                                <Card>
                                    <form className="">
                                        <div className="form-group">
                                            <label for="exampleFormControlFile1">Example image input</label>
                                            <input type="file" onChange={(e) => this._handleChange(e)} className="form-control-file" id="exampleFormControlFile1" />
                                        </div>
                                    </form>
                                    <div className="image-preview-wrapper">
                                    </div>
                                        
                                    {/* <a href="/pannel/new" v-if="isNew" className="btn btn-finno btn-small confirm hidden" onClick={this.clicked}>افزودن</a>
                                    <a click="deleteService" v-else className="btn btn-finno btn-small confirm hidden" >حذف شود؟</a> */}
                                    {$imagePreview}
                                    <div className="preview-image">
                                        {this.state.image.map((src, i) => <img src={src} key={i} />)}
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="pannel-menu">
                            <SideMenu />
                        </div>
                </div>
            </>
        )
    }
}
