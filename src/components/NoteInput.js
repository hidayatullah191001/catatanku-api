import React from 'react';
import PropTypes from "prop-types";
import { AlertSwalError } from './Alert';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            limitTitle: { char: 50, max_char: 50, limit: false },
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        let titleLength = event.target.value.length;
        let maxlength = this.state.limitTitle.max_char;
        let charLeft = maxlength - titleLength;
        if (charLeft !== 0) {
            this.setState(() => {
                return {
                    title: event.target.value,
                    limitTitle: { char: charLeft, max_char: maxlength, limit: false }
                }
            })
        } else {
            this.setState(() => {
                return {
                    limitTitle: { char: charLeft, max_char: maxlength, limit: true }
                }
            })
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        if (this.state.title === '' || this.state.body === '') {
            this.props.lang === 'id' ?
                AlertSwalError({ title: 'Gagal', message: "Data tidak boleh ada yang kosong" }) :
                AlertSwalError({ title: 'Failed', message: "Field cannot be empty" });
        } else
            if (this.state.limitTitle.limit === false) {
                this.props.addNotes(this.state);
                this.setState({
                    title: '',
                    body: '',
                    lang: this.props.lang
                })
            } else {
                this.props.lang === 'id' ? 
                AlertSwalError({ title: 'Gagal', message: "Judul harus kurang dari 50 karakter" }) :
                AlertSwalError({ title: 'Failed', message: "The title must be less than 50 characters" });
            }
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler}>
                <div className="mb-3">
                    <div className="d-flex justify-content-between">
                        <label>{this.props.lang === 'id' ? 'Judul Catatan' : 'Title Note'}</label>
                        <p
                            className={this.state.limitTitle.limit === false ? 'text-black' : 'text-danger'}>
                            {this.props.lang === 'id' ? 'Sisa karakter' : 'Limit Character'}  : {this.state.limitTitle.char}
                        </p>
                    </div>
                    <input type="text"
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                        className="form-control"
                        placeholder={this.props.lang === 'id' ? 'Masukkan judul catatan kamu' : 'Input your Title Note'} />
                </div>
                <div className="mb-3">
                    <label>{this.props.lang === 'id' ? 'Isi Catatan' : 'Body Note'}</label>
                    <textarea
                        value={this.state.body}
                        onChange={this.onBodyChangeEventHandler}
                        className="form-control"
                        placeholder={this.props.lang === 'id' ? 'Masukkan isi catatan kamu' : 'Input your Body Note'} />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary"><i className="bi bi-plus-lg me-2"></i>{this.props.lang === 'id' ? 'Tambah' : 'Add New'}</button>
                </div>
            </form>
        )
    }
}

NoteInput.propTypes = {
    addNotes: PropTypes.func.isRequired,
    lang : PropTypes.string.isRequired
}

export default NoteInput;