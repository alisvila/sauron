import React, { Component } from 'react'
import SideMenu from './Sidemenu'
import TopMenu from './TopMenu'
import Card from '../card'


export default class uploadPage extends Component {
    constructor(props) {
        super(props);

        this.state = {file: '', imagePreviewUrl: '', uploading: false, image: []}
    }

    _handleChange(e) {
        e.preventDefault()
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
                image: [...this.image, reader.result]
            });
        }

        reader.readAsDataURL(file)

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
                                            <label for="exampleFormControlFile1">Example file input</label>
                                            <input type="file" onChange={(e) => this._handleChange(e)} className="form-control-file" id="exampleFormControlFile1" />
                                        </div>
                                    </form>
                                    <div className="image-preview-wrapper">
                                        {$imagePreview}
                                    </div>
                                        
                                    <a href="/pannel/new" v-if="isNew" className="btn btn-finno btn-small confirm hidden" onClick={}>افزودن</a>
                                    <a click="deleteService" v-else className="btn btn-finno btn-small confirm hidden" >حذف شود؟</a>
                                    <div>
                                        {image.map((src, i) => <img obj={src} key={i} />)}
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
