import * as Notifications from 'expo-notifications';

export const scheduleGoodEveningNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Good Afternoon!',
      body: 'Hope you had a great day 😊',
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY, // DAILY trigger type
      hour: 15,  // 3 PM (24-hour format)
      minute: 55, // 40 minutes
    },
  });
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Good evening!',
      body: 'Hope you had a great day 😊',
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY, // DAILY trigger type
      hour: 16,  // 3 PM (24-hour format)
      minute: 3, // 40 minutes
    },
  });


  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Good Night!',
      body: 'Hope you had a great day 😊',
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY, // DAILY trigger type
      hour: 21,  // 3 PM (24-hour format)
      minute: 30, // 40 minutes
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Good Morning!',
      body: 'Hope you had a great day 😊',
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY, // DAILY trigger type
      hour: 9,  // 3 PM (24-hour format)
      minute: 30, // 40 minutes
    },
  });
};
