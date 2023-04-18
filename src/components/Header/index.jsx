import {RiShutDownLine} from 'react-icons/ri';

import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
     <Profile>
        <img s
        src="https://github.com/alvarenga-allan.png"
        alt="Foto do usuário"
        />
        <div>
            <span>Bem-vindo</span>
            <strong>Allan Alvarenga</strong>
        </div>
     </Profile>

     <Logout>
      <RiShutDownLine />
     </Logout>
    </Container>
  );
}
