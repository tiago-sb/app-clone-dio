import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Column, Container, Title, SubTitle, TextNormal, TextNormalLogin, Wrapper } from "./Styles";
import { CiLock, CiMail, CiUser } from "react-icons/ci";

const schema = yup.object({
  name: yup.string().required('campo obrigatório'),
  email: yup.string().email("email inválido").required('campo obrigatório'),
  password: yup.string().min(5, "Minimo de 5 caracteres").required('campo obrigatório'),
}).required()

const Register = () => {
  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const handleCreatedAccount = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        alert('Usuário cadastrado com sucesso!')
        localStorage.setItem('authenticated', 'true')
        localStorage.setItem('user', JSON.stringify(data))
        navigate('/feed')
      }
    } catch (error) {
      console.log(data)
      alert('Erro ao cadastrar usuário')
    }
  } 

  const handleBackLogin = () => navigate('/login')

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts,
            dominar as principais tecnologias e entrar
            mais rápido nas empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <Title>Comece agora grátis</Title>
            <SubTitle>Crie sua conta e make the Change._</SubTitle>
            <form onSubmit={handleSubmit(handleCreatedAccount)}>
              <Input
                name="name" errorMessage={errors?.name?.message}
                control={control} placeholder="Nome Completo"
                type="text" leftIcon={<CiUser />} />

              <Input
                name="email" errorMessage={errors?.email?.message}
                control={control} placeholder="E-mail"
                type="text" leftIcon={<CiMail />} />

              <Input
                name="password" errorMessage={errors?.password?.message}
                control={control} placeholder="Password"
                type="text" leftIcon={<CiLock />} />

              <Button
                title="Criar minha Conta" variant="secondary"
                type="submit" disabled={isValid}/>
            </form>
            <SubTitle>
              Ao clicar em "criar minha conta",
              declaro que aceito as Políticas de Privacidade
              e os Termos de Uso da DIO.
            </SubTitle>
            <TextNormal>
              Já tenho Conta.
              <TextNormalLogin onClick={handleBackLogin}>
                Fazer Login
              </TextNormalLogin>
            </TextNormal>
          </Wrapper>
        </Column>

      </Container>
    </>
  )
}

export { Register }