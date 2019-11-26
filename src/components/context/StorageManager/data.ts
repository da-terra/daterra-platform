type StorageDefaultValuesType = {
  [name in StorageKey]: any;
};

export enum StorageKey {
  themeUuid = "themeUuid",
  TargetGroup = "targetGroup",
  QuickScanResultUuid = "quickScanResultUuid"
}

export const StorageDefaultValues: StorageDefaultValuesType = {
  [StorageKey.themeUuid]: undefined,
  [StorageKey.TargetGroup]: 1 << 0,
  [StorageKey.QuickScanResultUuid]: undefined
};
