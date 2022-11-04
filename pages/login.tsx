import { Box, Button, Checkbox, Container, createTheme, CssBaseline, FormControlLabel, TextField, ThemeProvider, Typography} from '@mui/material';
import axios from 'axios';
import React,{useState, useEffect, FormEvent} from 'react';
import Copyright from '../components/utils/Copyright';
import Snackbar from '../components/utils/Snackbar';

const theme= createTheme();

export default function LoginPage() {

const [error, setError] = useState< boolean >(false);
const [errorMenssage, setErrorMessage] = useState<string >('');
const [email, setEmail] = useState<string |undefined | null| FormDataEntryValue >();
const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>();
const [open, setOpen] = useState<boolean>(false);

useEffect(()=>{
  if(password && password.length < 6){
    setError(true);
    setErrorMessage('A senha deve ter no minimo 6 caracteres');
  }else if(password){
    setError(false);
    setErrorMessage('');
    // enviar o formulario para o servidor
    // setOpen(true);
    axios.post('http://localhost:3000/auth/login',{
      login: email,
      password
    }).then((response)=>{
      console.log(response);
      if(response.status == 200){
        setOpen(true);
      }
    }).catch((error)=>{
      console.log(error);
    })
  }
},[password]);

const handleSubmit= (event: FormEvent<HTMLFormElement>)=> {
  // Previne o comportamento padrao do formulario, que eria recarreagr a pagina
  event.preventDefault();
  const data= new FormData(event.currentTarget);
  setEmail(data.get('email'));
  setPassword(data.get('password'));
}
  return (
    <ThemeProvider theme= {theme}>
      <Container component="main" maxWidth= "xs">
        <CssBaseline/>
        <Box sx={{mt:8, display:'flex', flexDirection:'column', alignItems: 'center'}}>
          <Typography component="h1" variant='h5'>
            Login
          </Typography>
          <Box component="form" onSubmit= {handleSubmit}>
            <TextField margin="normal" required fullWidth id="email" label="Digite o email" name="email" autoComplete="email" autoFocus/>
            <TextField margin="normal" required fullWidth id="password" label="Digite a senha" name="password" autoComplete="password" autoFocus/>
              <FormControlLabel control={<Checkbox value="Remember" color="primary" />} label= "Lembrar de mim"/>
              <Button type='submit' fullWidth variant="contained" sx={{mt:3, mb:2}}>Entrar</Button>
              {error && <Typography color="error">{errorMenssage}</Typography>}
          </Box> 
        </Box>
        <Copyright site='www.avanade.com.br' sx= {{mt:8, mb:4}} />
        {open && <Snackbar open={open} hide={4} message=" Usuário logado com sucesso... Aguarde..."/>}
      </Container>
    </ThemeProvider>
  )
}