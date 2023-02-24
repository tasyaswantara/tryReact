import { Button, TextField, Typography } from "@mui/material";
import styled from "styled-components";

const Form = styled.form`
    padding: 40px;
    border-radius: 30px;
    background-color: white;
    width: 1000px;
    margin: auto;
    margin-top:50px;
`

const FormTweetCard = () => {
    return (
        <Form>
            <Typography variant="h5" fontWeight={600}>Give me your comment!</Typography>
            <TextField
                fullWidth
                sx={{ marginTop: '20px' }}
                label="Title"
                variant="outlined"
            />
            <TextField
                fullWidth
                sx={{ marginTop: '20px' }}
                label="Description"
                multiline
                minRows={5}
            />
            <Button type="submit" variant="contained" sx={{ marginTop: '20px' }}>Submit</Button>
        </Form>
    )
}

export default FormTweetCard;
