type StorageDefaultValuesType = {
  [name in StorageKey]: any;
};

export enum StorageKey {
  themeUuid = "themeUuid",
  TargetGroup = "targetGroup"
}

export const StorageDefaultValues: StorageDefaultValuesType = {
  [StorageKey.themeUuid]: undefined,
  [StorageKey.TargetGroup]: 1 << 0
};
