import { Component } from 'react';
import { Form, Label, Input, Text, Button} from "./ContactForm.styled"
import {Box} from "../Box"


class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    }

    handleChange = event => {
        const { name, value } = event.currentTarget;

        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
           
        this.props.onSubmitingForm(this.state);

        this.reset();
    }
  
    reset = () => {
            this.setState({ name: '', number: '',})
    }

    render() {
        return (


        <Form onSubmit={this.handleSubmit}> 
          <Label> <Text> Name </Text>
            <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required /> </Label>
          
          <Label> <Text> Number </Text>
            <Input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required /> </Label>  
    
          <Button type="submit"> Add Contact </Button>
                </Form>
               
        )
    }
 }


export default ContactForm;