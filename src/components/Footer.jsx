import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Contactitem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
width:50%;`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ECOM SITE.</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          similique quos commodi facilis, rem ab, ullam perferendis incidunt
          consequuntur provident aspernatur voluptas veritatis laudantium velit
          accusamus eum accusantium odit tenetur!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>USEFUL LINKS</Title>
        <List>
          <ListItem>HOME</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>MAN FASHION</ListItem>
          <ListItem>WOMAN FASHION</ListItem>
          <ListItem>ACCESSORIES</ListItem>
          <ListItem>MY ACCOUNT</ListItem>
          <ListItem>ORDER TRACKING</ListItem>
          <ListItem>WISHLIST</ListItem>
          <ListItem>TERMS</ListItem>
        </List>
      </Center>
      <Right>
        <Title></Title>
        <Contactitem>
          <Room style={{marginRight:"10px"}}/>
          NEW COLONY GURGAON 122001
        </Contactitem>
        <Contactitem>
          <Phone style={{marginRight:"10px"}} />
          +91 9899890527
        </Contactitem>
        <Contactitem>
          <MailOutline style={{marginRight:"10px"}}/> prtikgera@gmail.com
        </Contactitem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
