import { useRecoilValue, useRecoilState } from "recoil";
import {
  jobsAtom,
  messagesAtom,
  myNetworkAtom,
  notificationAtom,
} from "../store/atoms/atoms";

import { totalNotificationsSelector } from "../store/selectors/selectors";

const Navbar = () => {
  const networkNotificationCount = useRecoilValue(myNetworkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagesNotificationCount = useRecoilValue(messagesAtom);
  const notificationCount = useRecoilValue(notificationAtom);

  const totalNotifications = useRecoilValue(totalNotificationsSelector);

  function finalValue(value) {
    return value > 99 ? "99+" : value;
  }

  const buttonStyle = {
    padding: 10,
    margin: 5,
    backgroundColor: "black",
    borderRadius: 10,
    color: "white",
    fontSize: 16,
  };

  const navbarStyle = {
    padding: 20,
    textAlign: "center",
    boxShadow: "0,0,0,0.2",
    border: "1px solid",
    borderRadius: 20,
    backgroundColor: "gray",
  };

  return (
    <div style={navbarStyle}>
      <button style={buttonStyle}>Home</button>
      <button style={buttonStyle}>
        My Network ( {finalValue(networkNotificationCount)} )
      </button>
      <button style={buttonStyle}>
        Jobs ( {finalValue(jobsNotificationCount)} )
      </button>
      <button style={buttonStyle}>
        Messaging ( {finalValue(messagesNotificationCount)} )
      </button>
      <button style={buttonStyle}>
        Notification ( {finalValue(notificationCount)} )
      </button>
      <button style={buttonStyle}>me ( {totalNotifications} )</button>
    </div>
  );
};

export default Navbar;
