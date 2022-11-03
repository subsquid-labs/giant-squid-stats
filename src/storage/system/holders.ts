import { UnknownVersionError } from '../../utils/errors';
import { encodeAccount, getStorageHash } from '../../utils/common';
import {
  SessionValidatorsStorage,
  SystemAccountStorage
} from '../../types/generated/storage';

import { Ctx, Block } from '../../processor';
import { Chain as ProcessorChain } from '@subsquid/substrate-processor/lib/chain';
import { ResilientRpcClient } from '@subsquid/rpc-client/lib/resilient';

type StorageData = Uint8Array[];

// async function getStorageData(
//   ctx: Ctx,
//   block: Block
// ): Promise<StorageData | undefined> {
//   const storage = new SystemAccountStorage(ctx, block.header);
//   if (!storage.isExists) return undefined;
// }

const storageCache: {
  hash?: string;
  value?: HolderKeys;
} = {};

type HolderKeys = string[];

export async function getHoldersKeysCount(
  ctx: Ctx,
  block: Block
): Promise<number | undefined> {
  const storage = new SystemAccountStorage(ctx, block.header);
  if (!storage.isExists) return undefined;

  return await countKeys(ctx, block, 'System', 'Account');
}

async function countKeys(ctx: Ctx, block: Block, prefix: string, name: string) {
  const chain = ctx._chain as ProcessorChain;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const client = (chain as any).client as ResilientRpcClient;

  const req = getStorageHash('System', 'Account');

  const totalSize = (await client.call('state_getStorageSizeAt', [
    req,
    block.header.hash
  ])) as number;
  if (totalSize === 0 || !totalSize) return 0;

  const keys = (await client.call('state_getKeysPagedAt', [
    req,
    1,
    null,
    block.header.hash
  ])) as string[];

  const keySize = (await client.call('state_getStorageSizeAt', [
    keys[0],
    block.header.hash
  ])) as number;

  return totalSize / keySize;
}

// export async function getHoldersKeys(
//   ctx: Ctx,
//   block: Block
// ): Promise<HolderKeys | undefined> {
//   // const data = await getStorageData(ctx, block);
//   // if (!data) return undefined;
//
//   // @ts-ignore
//   const getStorageItemKeysHash = ctx._chain.getStorageItemKeysHash
//
//
//   const storage = new SystemAccountStorage(ctx, block.header);
//   if (!storage.isExists) return undefined;
//
//   const keys: string[] = await ctx._chain.client.call('state_getKeys', [
//     getStorageHash('System', 'Account'),
//     block.header.hash
//   ]);
//
//   if (!keys) return undefined;
//
//   return [...keys];
// }