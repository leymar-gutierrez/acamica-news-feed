import React, { Component } from 'react'
import { Modal, ModalBackground, ModalContent, Field, Control, Input  } from 'bloomer'
import { withRouter } from 'react-router-dom'
import { StyledInput, ContentButton } from './styled'


class Filters extends Component {
    state = {
        isActive: false,
        key_word: '',
    }

    handleChange = event => {
        const{name, value} = event.target
        this.setState({ [name] : value })
    }

    handleOpen = event => {
        this.setState({ isActive: true })   
    }
    handleClose = () => {
        const{ key_word } = this.state
        this.setState({ isActive: false })
        this.props.history.push(`/search/${key_word}`)
        //const { onFilterChange } =this.props
        //onFilterChange(key_word)
        
    }
    handleCloseCancel = event => {
        this.setState({ isActive: false }) 
    }
    render() {
        const{ isActive, key_word } = this.state
        return (
     <>
        <button onClick={this.handleOpen} style={{ marginTop:'5px' }} className="button is-warning">Busqueda</button>
        <Modal isActive={isActive === true ? true : false} >
            <ModalBackground  />
                <ModalContent>
                <Field>
                    <Control>
                        <Input name="key_word" active={key_word} onChange={this.handleChange} type="text" placeholder='Buscar' />
                        <ContentButton>
                            <button onClick={this.handleCloseCancel} style={{ marginTop:'5px', marginRight:'5px'}} className="button is-danger">Cancelar</button>
                            <StyledInput active={key_word} onClick={this.handleClose} style={{ marginTop:'5px' }} className="button is-primary">Buscar</StyledInput>
                        </ContentButton>
                    </Control>
                </Field>
                </ModalContent>
            </Modal>
        </>

        )
    }
}

export default withRouter(Filters);