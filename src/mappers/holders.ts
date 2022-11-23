import { Ctx, Block } from '../processor';
import { Holders } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import storage from '../storage';
import { isCheckPoint } from '../utils/common';
import {
  CheckPointsKeys,
  SubProcessorTask,
  SubProcessorTaskResult
} from '../utils/types';
import { TreadsPool } from '../subProcessor';

export async function handleChainHolders(ctx: Ctx, block: Block) {
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);
  const treadsPoolInst = TreadsPool.getInstance();

  await storage.system.countKeys(ctx, block)

  const tasksResults = treadsPoolInst.getResultsListByTaskName(
    SubProcessorTask.GET_HOLDERS_KEYS_COUNT
  );
  if (tasksResults && tasksResults.length > 0) {

    treadsPoolInst.clearTaskResultsListByTaskName(
      SubProcessorTask.GET_HOLDERS_KEYS_COUNT
    );
    for (const resItem of tasksResults as SubProcessorTaskResult[]) {
      if (resItem.result !== undefined) {
        const newHoldersStat = new Holders({
          id: resItem.blockHeight.toString(),
          amount: resItem.result,
          timestamp: new Date(resItem.timestamp),
          blockHash: resItem.blockHash
        });

        ctx.store.deferredUpsert(newHoldersStat);

        const totals = await getOrCreateTotals(ctx);

        totals.holders = resItem.result;

        ctx.store.deferredUpsert(totals);
      }
    }
  }

  if (!isCheckPoint(CheckPointsKeys.holders, histDataMeta, block)) return;

  treadsPoolInst.setTask({
    taskId: `${block.header.height}_${SubProcessorTask.GET_HOLDERS_KEYS_COUNT}`,
    taskName: SubProcessorTask.GET_HOLDERS_KEYS_COUNT,
    blockHash: block.header.hash,
    blockHeight: block.header.height,
    timestamp: block.header.timestamp
  });

  histDataMeta.holdersLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.holdersLatestTime = new Date(block.header.timestamp);
  ctx.store.deferredUpsert(histDataMeta);
}
