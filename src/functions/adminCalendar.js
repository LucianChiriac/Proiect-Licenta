import { getJustTime } from "./dateManipulation";
import { MdVideoCameraFront } from "react-icons/md";
import { differenceInHours, addHours, startOfDay, compareAsc } from "date-fns";
import { slotMaxTime } from "../globalValues";
import PopupAddCalendarEvent from "../components/Popups/PopupAddCalendarEvent";

const renderEventContent = (eventInfo) => {
  const viewType = eventInfo.view.type;
  const props = eventInfo.event.extendedProps;

  return (
    <div className="eventFrame">
      <div className="eventFrameTitle">
        {props.location === "online" && (
          <MdVideoCameraFront className="videoIcon" />
        )}{" "}
        {eventInfo.event.title}
      </div>
      {}
      <div className="eventInterval">{`${getJustTime(
        eventInfo.event._instance.range.start
      )}-${getJustTime(props.realEnd)}`}</div>
    </div>
  );
};

export { renderEventContent }; //, selectBehaviour, dateClickBehaviour
