import { 
    Container,
    NameText,
    UserPicture,
    Progress
} from './Styles';

const UserInfo = ( {nome, image, percentual} ) => {
    return(
        <Container>
            <UserPicture src={image} />
            <div>
                <NameText> {nome} </NameText>
                <Progress percentual={percentual} />
            </div>
        </Container>
    )
}

export default UserInfo 