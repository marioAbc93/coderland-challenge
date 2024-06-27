import { useState } from "react";
import { useSelector } from "react-redux";
import { tasksSelector } from "../../models/redux/tasks";
import GridContainer from "../../components/grid-container";

import Loader from "../../components/loader";
import ViewContainer from "../../components/viewContainer";
import TaskCard from "../../components/task-card";

export default function TasksView() {
  const [isLoading, setIsLoading] = useState(false);
  const tasks = useSelector(tasksSelector);
  if (tasks.length < 0 || !tasks) {
    setIsLoading(true);
  }
  return (
    <ViewContainer>
      {isLoading ? (
        <Loader data-testid="loader" />
      ) : (
        <GridContainer>
          {tasks.map((item) => (
            <TaskCard key={item.id} description={item.description} />
          ))}
        </GridContainer>
      )}
    </ViewContainer>
  );
}
