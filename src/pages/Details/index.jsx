import { Container, Links, Content } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
            vitae deserunt. Quasi, dolorem ab quia ducimus veritatis
            perspiciatis enim illo temporibus praesentium ipsam quam consectetur
            voluptates esse, libero explicabo rem nihil consequuntur amet velit
            dicta delectus cupiditate. A officiis, reprehenderit sapiente
            obcaecati cupiditate voluptate accusamus optio sunt necessitatibus
            nisi officia.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://www.rocketseat.com.br">
                  www.rocketseat.com.br
                </a>
              </li>
              <li>
                <a href="https://www.rocketseat.com.br">
                  www.rocketseat.com.br
                </a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="Node.js" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
