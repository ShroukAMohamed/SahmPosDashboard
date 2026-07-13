import { KitchenStatus } from '../types/kitchen-status.type';

export interface PendingItem {
  name: string;
  count: number;
  time: string;
  isWarning?: boolean;
}

export interface KitchenStation {
  id: string;
  name: string;
  icon: string;
  currentLoad: number;
  maxCapacity: number;
  status: KitchenStatus;
  pendingItems: PendingItem[];
}
