import React, { Fragment, useCallback, useContext } from "react";
import { Context as StorageContext, StorageKey } from "../StorageManager";
import CookieConsent from "./CookieConsent";
import CustomEventName from "../../../data/CustomEventName";

const TrackingManager: React.FC = props => {
  const storage = useContext(StorageContext);

  const handleConsent = useCallback(() => {
    storage.setValue(StorageKey.TrackingConsent, true, true);

    // @ts-ignore
    dataLayer.push({ event: CustomEventName.OnTrackingConsent });
  }, [storage]);

  const handleDissent = useCallback(() => {
    storage.setValue(StorageKey.TrackingConsent, false);
  }, [storage]);

  const showTrackingConsent =
    storage.getValue(StorageKey.TrackingConsent) == null;

  return (
    <Fragment>
      {props.children}

      {showTrackingConsent && (
        <CookieConsent onConsent={handleConsent} onDissent={handleDissent} />
      )}
    </Fragment>
  );
};

export default TrackingManager;
