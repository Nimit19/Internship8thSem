import React from "react";
import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-details");
  return <EventForm method={"PATCH"} event={data.event} />;
};

export default EditEventPage;
