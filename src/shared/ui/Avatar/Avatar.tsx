import {classNames, Mods} from "@/shared/lib/classNames/classNames";
import cls from './Avatar.module.scss'
import {CSSProperties, useMemo} from "react";


interface AvatarProps {
    className?: string;
    src?: string
    size?: string
    alt?: string
}

export const Avatar = (props: AvatarProps) => {

    const {
        className,
        src,
        size,
        alt
    } = props

    const mods: Mods = {}
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size
        }
    }, [size])

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};



