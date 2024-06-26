import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../models/redux";
import { listSelector } from "../../models/redux/list";
import { listService } from "../../models/redux/list/service";
import ViewContainer from "../../components/viewContainer";
import Loader from "../../components/loader";
import ListCard from "../../components/list-card";
import GridContainer from "../../components/grid-container";

export default function ListView() {
  const dispatch: AppDispatch = useDispatch();
  const list = useSelector(listSelector);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await dispatch(listService());
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!list || list.length === 0) {
      fetchData();
    }
  }, [dispatch, list]);

  return (
    <ViewContainer>
      {isLoading ? (
        <Loader data-testid="loader" />
      ) : (
        <GridContainer>
          {list.map((item, index) => (
            <ListCard key={index} name={item.name} avatar={item.avatar} />
          ))}
        </GridContainer>
      )}
    </ViewContainer>
  );
}
