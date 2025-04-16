import {useSelector} from "react-redux";
import {RootState} from "../../redux/store.tsx";

export default function Count () {

    const count  = useSelector((state: RootState) => state.count)

    const getCount = () => {
        if (count === 1) {
            return `${count}  item`
        } else {
            return `${count}  items`
        }
    }
    return (
        <>

            <div>{getCount()} left </div>

        </>
    )
}

