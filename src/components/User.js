import React, { Component } from 'react'

export class User extends Component {
    render() {
        const { avatar_url, login, html_url } = this.props.user
        return (
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={avatar_url} alt={login} className='img-fluid rounded-start avatar' />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h3 className="card-title">{login}</h3>
                            <a target='_blank' rel="noreferrer" href={html_url} className="btn btn-primary">Github Profili</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User