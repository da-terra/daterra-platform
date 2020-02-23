type StorageDefaultValuesType = {
  [name in StorageKey]: any;
};

export enum StorageKey {
  themeName = "themeUuid",
  TargetGroup = "targetGroup",
  QuickscanResultUuid = "quickscanResultUuid",
  TrackingConsent = "trackingConsent",
  Locale = "locale"
}

export const StorageDefaultValues: StorageDefaultValuesType = {
  [StorageKey.themeName]: undefined,
  [StorageKey.TargetGroup]: 1 << 0,
  [StorageKey.QuickscanResultUuid]: undefined,
  [StorageKey.TrackingConsent]: undefined,
  [StorageKey.Locale]: undefined
};
