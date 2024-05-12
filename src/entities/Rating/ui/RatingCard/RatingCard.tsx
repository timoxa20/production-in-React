import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './RatingCard.module.scss'
import {memo, useCallback, useState} from "react";
import {Card} from "@/shared/ui/Card/Card";
import {HStack, VStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";
import {StarRating} from "@/shared/ui/StarRating/StarRating";
import {Modal} from "@/shared/ui/Modal/Modal";
import {Input} from "@/shared/ui/Input/Input";
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "@/shared/ui/Button/Button";
import {BrowserView, MobileView} from "react-device-detect";
import {Drawer} from "@/shared/ui/Drower/Drawer";


interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (startCount: number) => void
    onAccept?: (startCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept
    } = props
    const {t} = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [startCount, setStartCount] = useState(0)
    const [feedback, setFeedback] = useState('')


    const onSelectsStart = useCallback((selectedStartCount: number) => {
        setStartCount(selectedStartCount)
        if (hasFeedback) {
            setIsModalOpen(true)
        } else {
            onAccept?.(selectedStartCount)
        }
    }, [hasFeedback, onAccept])

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(startCount, feedback)
    }, [feedback, onAccept, startCount])

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(startCount)
    }, [onCancel, startCount])

    const modalContent = (
        <VStack max gap='24'>
            <Text title={feedbackTitle}/>
            <Input value={feedback} onChange={setFeedback} placeholder={t('Ваш отзыв')}/>
            <HStack max gap='16' justify='end'>
                <Button onClick={cancelHandle} theme={ThemeButton.OUTLINE_RED}>
                    {t('Закрыть')}
                </Button>
                <Button onClick={acceptHandle}>
                    {t('Отправить')}
                </Button>
            </HStack>
        </VStack>
    )

    return (
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <VStack align='center' gap='16'>
                <Text title={title}/>
                <StarRating size={40} onSelect={onSelectsStart}/>
                <BrowserView>
                    <Modal isOpen={isModalOpen} lazy>
                        {modalContent}
                    </Modal>
                </BrowserView>
                <MobileView>
                    <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>

                    </Drawer>
                </MobileView>
            </VStack>
        </Card>
    );
});

RatingCard.displayName = 'RatingCard'