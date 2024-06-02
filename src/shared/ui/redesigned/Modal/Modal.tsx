import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { ReactNode } from 'react';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';
import { toggleFeatures } from '@/shared/lib/features';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const ANIMATION_DELAY = 300;
    const { theme } = useTheme();
    const { className, children, isOpen, onClose, lazy } = props;
    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    theme,
                    'app_modal',
                    cls.modalNew,
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
