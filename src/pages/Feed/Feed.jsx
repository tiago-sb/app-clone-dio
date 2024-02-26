import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import UserInfo from '../../components/UserInfo/UserInfo';

import { Container, Column, TitleHighLight, Title } from './Styles'

const Feed = () => {
    return(
        <>
            <Header autenticado={true}/>
            <Container>

                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighLight># RANKING DA SEMANA</TitleHighLight>
                    <UserInfo nome="tiago" percentual={35} image="https://avatars.githubusercontent.com/u/111618371?s=400&u=29bd54d1a7e42503be9f61cd927a2b4ddb0898ba&v=4"/>
                    <UserInfo nome="gabriel" percentual={75} image="https://avatars.githubusercontent.com/u/111618371?s=400&u=29bd54d1a7e42503be9f61cd927a2b4ddb0898ba&v=4"/>
                    <UserInfo nome="jonas" percentual={92} image="https://avatars.githubusercontent.com/u/111618371?s=400&u=29bd54d1a7e42503be9f61cd927a2b4ddb0898ba&v=4"/>
                    <UserInfo nome="pedro" percentual={5} image="https://avatars.githubusercontent.com/u/111618371?s=400&u=29bd54d1a7e42503be9f61cd927a2b4ddb0898ba&v=4"/>
                </Column>
            </Container>
        </>
    )
}

export { Feed }