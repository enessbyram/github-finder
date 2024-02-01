import React, { Component } from 'react'

export class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            keyword: ""
        }
    }

    onChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (this.state.keyword === '') {
            this.props.displayAlert('Anahtar kelime giriniz.', 'danger')
        } else {
            this.props.searchUsers(this.state.keyword)
            this.setState({ keyword: '' })
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input onChange={this.onChange} value={this.state.keyword} type="text" className='form-control' placeholder='Anahtar kelime' />
                        <button className="btn btn-primary" type='sumbit'>Ara</button>
                    </div>
                </form>
                {
                    this.props.showClearButton && <button onClick={this.props.clearResults} className="btn btn-outline-danger mt-2 block">Sonuçları Temizle</button>
                }
            </div>
        )
    }
}

export default Search