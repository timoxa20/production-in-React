import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import React, { memo, SVGAttributes } from 'react';

type SvgProps = Omit<SVGAttributes<SVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
    clickable?: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        ...otherProps
    } = props;

    const icons = (
        <Svg
            width={width}
            height={height}
            className={classNames(cls.Icon, {}, [className])}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                className={cls.button}
                onClick={props.onClick}
                type={'button'}
                style={{ width, height }}
            >
                {icons}
            </button>
        );
    }

    return icons;
});

Icon.displayName = 'Icon';
