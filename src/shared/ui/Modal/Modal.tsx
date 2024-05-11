import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Modal.module.scss'
import {ReactNode, useCallback} from "react";
import {Portal} from "../Portal/Portal";
import {useTheme} from "app/providers/ThemeProvider";
import {Overlay} from "../Overlay/Overlay";
import {useModal} from "shared/lib/hooks/useModal/useModal";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}
export const Modal = (props: ModalProps) => {
    const ANIMATION_DELAY = 300;
    const {theme} = useTheme()
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy
    } = props
    const {
        close,
        isClosing,
        isMounted
    } = useModal(
        {
            animationDelay: ANIMATION_DELAY,
            onClose,
            isOpen
        })

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, "app_modal"])}>
                <Overlay onClick={close}/>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>

    );
};



