import React, { useEffect, useState, FormEvent } from 'react'
import { Typography, Container, CssBaseline, Box, TextField, FormControlLabel, 
Checkbox, Button, Stack} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/utils/Copyright';
import Snackbar from '../components/utils/Snackbar';



const theme = createTheme();

export default function LoginPage() {

  const [nome,setNome] = useState('');
  const [contador, setContador] = useState<number>(5);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [email, setEmail] = useState<string | undefined | null | FormDataEntryValue>('');
  const [password, setPassaword] = useState<string | undefined | null | FormDataEntryValue>('');
  const [open, setOpen] = useState<boolean>(false);


  const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
      //previne o comportamento padrão do formulário, que seria recarregar a página.
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      setEmail(data.get('email'));
      setPassaword(data.get('password'));
  }

  return (
<ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{mt:8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
            <Box component="form" onSubmit={handleSubmit}>
    
          <TextField margin="normal" required variant='standard' fullWidth id="name" label="Digite o nome" name="nome" autoComplete="nome" autoFocus/>
          <TextField margin="normal" required variant='standard' fullWidth id="email" label="Digite o e-mail" name="email" autoComplete="email" autoFocus/>
          <TextField margin="normal" required variant='standard' fullWidth id="password" type="password" label="Digite a senha" name="password" autoComplete="current-password" autoFocus/>
          <TextField margin="normal" required variant='standard' fullWidth id="password" type="password" label="Conforme a senha" name="password" autoComplete="current-password" autoFocus/>
            <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>Entrar</Button>
            {error && <Typography color="error">{errorMessage}</Typography>}
          </Box>
        </Box>
            {/*<div>login</div>*/}
            <Copyright site="www.avanade.com.br" sx={{mt:8, mb: 4}} />

            {open && <Snackbar open={open} hide={6} message="Usuário auteticado com sucesso... Aguarde..."
            onClose={()=>setOpen(false)}/>}
        </Container>
    </ThemeProvider>

  )
}
