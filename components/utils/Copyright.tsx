import { Typography } from '@mui/material';
import Link from "next/link";

type CopyProps ={
    site: string;
    sx?:object;
  }
  function Copyright(props:CopyProps){
    return (
      <Typography>
        {'Copyright ©️'}
        <Link color='inherit' href='https://www.avanade.com.br/'>
          {props.site}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
  }

  export default Copyright;