import {store} from "react-notifications-component";

export default {
  showErrorAlert(message: string): void {
    store.addNotification({
      title: "Error",
      message: message,
      type: "danger",
      insert: "bottom",
      container: "bottom-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    })
  }
}