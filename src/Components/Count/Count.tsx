import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.tsx";

export default function Count() {
  const count = useSelector((state: RootState) => state.count);

  const getCount = () => {
    if (count === 1) {
      return `${count}  item`;
    } else {
      return `${count}  items`;
    }
  };
  return (
    <div className="fs-6 fs-md-5 fs-lg-4 row-gap-2">{getCount()} left</div>
  );
}
