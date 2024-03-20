
import {Button} from "shared/ui/Button/Button";
import {useEffect, useState} from "react";


//Компонент для тестирования
export const BugButton = () => {
    const [error, setError] = useState(false)
    const throwError = 'throw error'
    const toggleError = () => {
        setError(true)
    }

    useEffect(() => {
        if(error) {
            throw new Error();
        }
    }, [error])
    return (
        <Button
            onClick={toggleError}
        >
            {throwError}
        </Button>
    );
};



