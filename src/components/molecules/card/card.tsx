import Button from '../../atoms/button/button'
import Modal from '../modal/modal';
import DeleteIcon from "../../../assets/delete-icon.svg";

import useCard from './use-card/use-card';
import { Gif } from '../../../utils/interfaces/Gif';

import './card.scss'


export interface CardProps {
  card: Gif
}

const Card: React.FC<CardProps> = ({ card }) => {
  const { openModal, handleOpenModal, onDelete, closeModal } = useCard(card)

  return (
    <>
      <div className="card" data-testid="card">
        <img className="card__gif" src={card.url} alt={`Card #${card.id}`} />
        <div className="card__icon">
          <Button variant="transparent" onClick={handleOpenModal}>
            <img src={DeleteIcon} alt="Delete icon" />
          </Button>
        </div>
        <Modal open={openModal} onDelete={onDelete} onCancele={closeModal} />
      </div>
    </>
  )
}

export default Card