export enum BlockEventName {
  BALANCES_TRANSFER = 'BALANCES_TRANSFER',
  BALANCES_WITHDRAW = 'BALANCES_WITHDRAW',
  SIGNED_EXTRINSIC = 'SIGNED_EXTRINSIC'
}

export enum CheckPointsKeys {
  holders = 'holders',
  issuance = 'issuance',
  validators = 'validators',
  staking = 'staking'
}

export interface BalancesTransferEventData {
  id: string;
  blockNumber: number;
  blockHash: string;
  timestamp: Date;
  volume: bigint;
}

export interface BalancesWithdrawEventData {
  id: string;
  blockNumber: number;
  blockHash: string;
  timestamp: Date;
}

export interface CallSignedExtrinsicData {
  id: string;
  blockNumber: number;
  blockHash: string;
  timestamp: Date;
  callName: string;
}

export type ParsedEventsData =
  | BalancesTransferEventData
  | BalancesWithdrawEventData
  | CallSignedExtrinsicData;

export type ParsedEventsDataMap = Map<BlockEventName, Set<ParsedEventsData>>;