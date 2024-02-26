import { 
    CardContainer,
    Content,
    ImageBackground,
    MaisInfo,
    PostInfo,
    UserInfo,
    UserPicture 
} from './Styles';
import feed from '../../assets/feed.jpg';
import { CiHeart } from 'react-icons/ci';

const Card = () => {
    return(
        <CardContainer>
            <ImageBackground src={ feed } />
            
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/111618371?s=400&u=29bd54d1a7e42503be9f61cd927a2b4ddb0898ba&v=4' />
                    
                    <div>
                        <h3>Tiago Bela</h3>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>

                <PostInfo>
                    <h3>Projeto para curso de JavaScript e React</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Reprehenderit adipisci placeat eaque.
                        Iusto at, eos dolorem temporibus est, 
                        sapiente nam maiores minus impedit pariatur vel distinctio 
                        cum ut consequuntur accusamus!
                    </p>
                </PostInfo>
                <MaisInfo>
                    <h3>#javascript #react</h3>
                    <p>
                        <CiHeart /> 
                        10
                    </p>
                </MaisInfo>
            </Content>
        </CardContainer>
    )
}

export default Card