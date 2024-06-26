import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../models/redux";
import { eventSelector } from "../../models/redux/events";
import { eventService } from "../../models/redux/events/service";
import Loader from "../loader";

import { EventType } from "../../models/entities/event";
import { Container } from "./styled";
import EventContainer from "../event-container";

export default function Content() {
  const dispatch: AppDispatch = useDispatch();
  const events = useSelector(eventSelector);

  const [, setPollingInterval] = useState(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const handleFetchEvents = async () => {
      try {
        await dispatch(eventService());
        setPollingInterval(null);
      } catch (error) {
        console.error(error);
      }
    };

    if (!events || events.length === 0) {
      handleFetchEvents();
      intervalId = setInterval(handleFetchEvents, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [dispatch, events]);

  if (!events || events.length === 0) {
    return <Loader data-testid="loader" />;
  }

  const filteredEvents = events.filter(
    (event: EventType) => event.markets && event.markets.length > 0
  );

  if (filteredEvents.length === 0) {
    return <p>There are´nt available events</p>;
  }

  return (
    <Container data-testid="container">
      {filteredEvents.map((event: EventType) => (
        <EventContainer
          data-testid="event-container"
          key={event.id}
          event={event}
        />
      ))}
    </Container>
  );
}
