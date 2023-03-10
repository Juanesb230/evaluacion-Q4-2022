import { useState } from 'react';
import { useAppContext } from '../../../../context/app-context';
import { GifService } from '../../../../services/gif/gif';

const useCard = (card: any) => {
  const { gifReducer } = useAppContext()
  const { gifDispatch } = gifReducer
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const closeModal = () => {
    setOpenModal(false)
  }

  const onDelete = async () => {
    try {
      GifService.deleteGif(card)
      closeModal()
      gifDispatch({ type: 'deleteGif', payload: card.id || -1 })
    } catch (e) {
    }
  }

  return {
    openModal,
    handleOpenModal,
    closeModal,
    onDelete
  }
}

export default useCard
