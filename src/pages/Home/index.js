import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';
import editIcon from '../../assets/images/icons/edit.svg';
import trashIcon from '../../assets/images/icons/trash.svg';
import arrowIcon from '../../assets/images/icons/arrow.svg';

export default function Home() {
  return (
    <>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>
      <Container>
        <Header>
          <strong>3 contatos</strong>
          <a href="/"> Novo contato</a>
        </Header>

        <ListContainer>
          <header>
            <button type="button">
              <span>Nome</span>
              <img src={arrowIcon} alt="Ícone de ordernar por nome" />
            </button>
          </header>

          <Card>
            <div className="info">
              <div className="contact-name">
                <strong>Raphael Vizoni</strong>
                <small>instagram</small>
              </div>
              <span>aaaa</span>
              <span>4499999</span>
            </div>

            <div className="actions">
              <a href="/">
                <img src={editIcon} alt="Ícone de editar" />
              </a>
              <button type="button">
                <img src={trashIcon} alt="Ícone de deletar" />
              </button>
            </div>
          </Card>
          <Card>
            <div className="info">
              <div className="contact-name">
                <strong>Raphael Vizoni</strong>
                <small>instagram</small>
              </div>
              <span>aaaa</span>
              <span>4499999</span>
            </div>

            <div className="actions">
              <a href="/">
                <img src={editIcon} alt="Ícone de editar" />
              </a>
              <button type="button">
                <img src={trashIcon} alt="Ícone de deletar" />
              </button>
            </div>
          </Card>
          <Card>
            <div className="info">
              <div className="contact-name">
                <strong>Raphael Vizoni</strong>
                <small>instagram</small>
              </div>
              <span>aaaa</span>
              <span>4499999</span>
            </div>

            <div className="actions">
              <a href="/">
                <img src={editIcon} alt="Ícone de editar" />
              </a>
              <button type="button">
                <img src={trashIcon} alt="Ícone de deletar" />
              </button>
            </div>
          </Card>

        </ListContainer>

      </Container>

    </>

  );
}
