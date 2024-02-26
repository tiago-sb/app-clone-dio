import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

import { Container, TextContent, Title, TitleHighLight } from './Styles';
import banner from '../../assets/banner.png';

const Home = () => {
    const navigate = useNavigate()
    
    const clickSignIn = () => {
        navigate('/login')
    }

    return(
        <>
            <Header/>

            <Container>
                <div>
                    <Title>
                        <TitleHighLight>
                            Implemente 
                            <br/>
                        </TitleHighLight>
                        o seu futuro global agora!
                        <br/>
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo 
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar" variant='secondary' onClick={clickSignIn}/>
                </div>
                
                <div>
                    <img src={banner} alt="Imagem principal"/>
                </div>
            </Container>
        </>
    )
}

export { Home }