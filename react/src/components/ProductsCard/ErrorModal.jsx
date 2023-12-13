import { useContext } from 'react';
import './ErrorModal.css'
import { RiCloseCircleLine } from "react-icons/ri";
import { AppContext } from '../Context/AppContext';

export function ErrorModal() {

    const {isOpenErrorModal, setIsOpenErrorModal} = useContext(AppContext)

    if (isOpenErrorModal) {

        document.body.style.overflow = 'hidden';

        return (
            <div className="error-background">
                <div className="error">
                    <RiCloseCircleLine className='close-icon' size={20} onClick={() => {setIsOpenErrorModal(false)}}/>
                    <h3>Este item já esta no carrinho!</h3>
                </div>
            </div>
        )
    }
    return document.body.style.overflow = ''
}