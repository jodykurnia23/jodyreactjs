import React from "react";

export default class FormElement extends React.Component{
    state = {
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        member: false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        alert(`
        Nama : ${this.state.nama}
        Jurusan : ${this.state.jurusan}
        Jenis kelamin : ${this.state.gender}
        Alamat : ${this.state.alamat}
        Member : ${this.state.member ? 'YES' : 'NO'}
        `)
        this.setState({
            nama: '',
            jurusan: '',
            gender: '',
            alamat: '',
            member: false
        })
    }
    render(){
        return(
            <div style={{margin: '50px 300px'}}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nama : <input 
                                    type="text" 
                                    name="nama" 
                                    onChange={e => this.setState({nama: e.target.value})}
                                    value={this.state.nama}
                                />
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Jurusan : <select 
                                    name="jurusan"
                                    onChange={e => this.setState({jurusan: e.target.value})}
                                    value={this.state.jurusan}
                                    >
                            <option value="">Pilih Jurusan</option>
                            <option value="Teknik Informatika">Teknik Informatika</option>
                            <option value="Sistem Informasi">Sistem Informasi</option>
                            <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
                        </select>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Jenis kelamin : 
                        <input 
                            type="radio" 
                            value={'Laki-laki'} 
                            name="gender"
                            onChange={e => this.setState({gender: e.target.value})}
                            checked={this.state.state}
                        /> Laki-laki
                        <input 
                            type="radio" 
                            value={'Perempuan'} 
                            name="gender"
                            onChange={e => this.setState({gender: e.target.value})}
                            checked={this.state.state}
                        /> Perempuan
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Alamat : <textarea 
                                    cols="30" 
                                    rows="10" 
                                    name="alamat"
                                    onChange={e => this.setState({alamat: e.target.value})}
                                    value={this.state.alamat}
                                />
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Member : <input 
                                    type="checkbox" 
                                    checked={this.state.member}
                                    name="member"
                                    onChange={e => this.setState({member: e.target.checked})}
                                />
                    </label>
                    <br/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}