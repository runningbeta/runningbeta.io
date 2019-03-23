// tslint:disable-next-line no-namespace
declare global {
  // tslint:disable-next-line interface-name
  interface Window {
    ga: any;
  }
}

const trackEvent = (
  eventCategory: string,
  eventAction: string,
  eventLabel: string,
  eventValue: any,
) => {
  if (window.ga) {
    window.ga("send", "event", {
      eventAction,
      eventCategory,
      eventLabel,
      eventValue,
    });
  }

  return false;
};

export default trackEvent;
