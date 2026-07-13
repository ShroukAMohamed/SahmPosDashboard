export interface KitchenEvent {
  id: string;
  type: 'LOAD_UPDATE' | 'BOTTLENECK_DETECTED' | 'SYSTEM_NOTICE';
  stationId?: string;
  value?: number;
  message?: string;
  timestamp: string;
}
