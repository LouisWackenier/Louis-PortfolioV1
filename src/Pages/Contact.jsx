import Navbar from "../Components/Navbar";
import styled from "styled-components";

const Contact = () => {
  return (
    <>
    <Navbar />
    <Section id='Contact'>
      
    <FormContainer>
     <Context>
       If you have any questions or wish to get in contact with me, Please feel free to send a email.
     </Context>
     <Form>
       <FormGroup>
         <Label htmlFor="name">Name</Label>
         <NameInput
           type="text"
           id="name"
           name="name"
           required
         />
       </FormGroup>
       <FormGroup>
         <Label htmlFor="email">Email</Label>
         <EmailInput
           type="email"
           id="email"
           name="email"
           required
         />
       </FormGroup>
       <FormGroup>
         <MessageLabel htmlFor="message">Message</MessageLabel>
         <MessageInput
           id="message"
           name="message"
           required
         />
       </FormGroup>
       <Button type="submit">Submit</Button>
     </Form>
       </FormContainer>
    </Section>
   </>
  )
}

export default Contact

const Section = styled.div`
     height: 60vh;
     display: flex;
`;

const FormContainer = styled.div`
  margin: 0 auto;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 5px;

`;

const Label = styled.label`
  font-size: 20px;
  margin-bottom: 5px;
  margin-right: 5px;
`;

const MessageLabel = styled.label`
  font-size: 20px;
  margin-bottom: 5px;
  margin-right: 4px;
`;

const NameInput = styled.input`
  width: 400px;
  height: 30px;
  font-size: 20px;
  margin-bottom: 10px;

  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const EmailInput = styled.input`
   width: 400px;
   height: 30px;
   font-size: 20px;
   margin-bottom: 10px;
 
   padding: 10px;
   border: 1px solid #ccc;
   border-radius: 4px;
`;

const MessageInput = styled.input`
  width: 460px;
  height: 200px;
  font-size: 20px;
  margin-bottom: 10px;
  display: flex;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  transition: background-color 1s;

  &:hover {
    background-color: lightblue;
  }
  
`;

const Context = styled.h3`
    width: 25vw;
    margin-bottom: 1vh;
`;