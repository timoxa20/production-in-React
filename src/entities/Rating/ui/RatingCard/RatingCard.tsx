import {classNames} from "@/shared/lib/classNames/classNames";
import {memo, useCallback, useState} from "react";
import {Card} from "@/shared/ui/Card";
import {HStack, VStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text";
import {StarRating} from "@/shared/ui/StarRating";
import {Modal} from "@/shared/ui/Modal";
import {Input} from "@/shared/ui/Input";
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "@/shared/ui/Button";
import {BrowserView, MobileView} from "react-device-detect";
import {Drawer} from "@/shared/ui/Drower";


interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (startCount: number) => void;
    onAccept?: (startCount: number, feedback?: string) => void;
    rate?: number
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate
    } = props
    const {t} = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [startCount, setStartCount] = useState(rate)
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
        if (startCount !== undefined) {
            onAccept?.(startCount, feedback)
        }
    }, [feedback, onAccept, startCount])

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false)
        if (startCount !== undefined) {
            onCancel?.(startCount)
        }
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
        <Card max className={classNames('', {}, [className])}>
            <VStack align='center' gap='16'>
                <Text title={startCount ? t('Спасибо за оценку') : title}/>
                <StarRating selectStart={startCount} size={40} onSelect={onSelectsStart}/>
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    {modalContent}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}/>
            </MobileView>
        </Card>
    );
});

RatingCard.displayName = 'RatingCard'