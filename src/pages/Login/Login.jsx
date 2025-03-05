import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import { CiLock, CiMail } from "react-icons/ci";

import {
  Container,
  Title,
  Column,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  TitleLogin,
  Wrapper,
} from './Styles'

const schema = yup.object({
  email: yup.string().email("email inválido").required('campo obrigatório'),
  password: yup.string().min(5, "Minimo de 5 caracteres").required('campo obrigatório'),
}).required()

const Login = () => {
  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const handleCreatedAccount = async (data) => {
    try {
      const response = await fetch(`http://localhost:5001/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const conteudo_db = await response.json()
      
      if (response.ok) {
        const userMatches = conteudo_db.find(user => user.email === data.email && user.password === data.password)
        
        if (userMatches) {
          alert('Usuário logado com sucesso!')
          localStorage.setItem('authenticated', 'true')
          localStorage.setItem('user', JSON.stringify(userMatches))
          navigate('/feed')
        } else {
          alert('E-mail ou nome não correspondem.')
          window.location.reload()
        }
      }
    } catch (error) {
      alert('Erro ao logar usuário')
    }
  }

  const handleCreateAccount = () => navigate('/register')

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            Domine as tecnologias utilizadas pelas empresas
            mais inovadoras do mundo e encare seu novo
            desafio profissional, evoluindo em comunidade
            com os melhores experts.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <TitleLogin>Faça seu Login</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
            <form onSubmit={handleSubmit(handleCreatedAccount)}>
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="example@gmail.com" type="text" leftIcon={<CiMail />} />
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<CiLock />} />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci Minha Senha</EsqueciText>
              <CriarText onClick={handleCreateAccount}>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}

export { Login }
