import React from 'react'

export default function Card(props) {
    return (
            <div class="d-flex card wrapper">
                <div class="client panel panel-default text-center approved" data="ffilan" status="approved">
                    <div class="panel-heading">
                        <h6></h6>
                    </div>
                        <div class="logo approved"><img src="image" /></div>
                        <p>{props.children}</p>
                        <div class="approved-icone">
                        <i class="fa fa-trash-o"></i>
    
                        <a href="/pannel/new" v-if="isNew" class="btn btn-finno btn-small confirm hidden">افزودن</a>
                        <a click="deleteService" v-else class="btn btn-finno btn-small confirm hidden" >حذف شود؟</a>
                    </div>
                </div>
            </div>

    )
}
