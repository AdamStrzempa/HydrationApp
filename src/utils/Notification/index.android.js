import Notification from 'react-native-android-local-notification'
const displayNotification = () => {
  Notification.create({
    id: 1337,
    subject: 'Hydration App',
    message: `Don't forget to hydrate yourself.`,
    smallIcon: 'ic_launcher',
    autoClear: true,
    payload: { number: 1, what: true, someAnswer: '42' }
  });
}

export default displayNotification
