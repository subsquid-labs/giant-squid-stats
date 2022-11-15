import type {Result} from './support'

export type AssetIds = AssetIds_ForeignAssetId

export interface AssetIds_ForeignAssetId {
  __kind: 'ForeignAssetId'
  value: number
}

export interface AssetMetadata {
  name: Uint8Array
  symbol: Uint8Array
  decimals: number
  minimalBalance: bigint
}

export interface V1MultiLocation {
  parents: number
  interior: V1Junctions
}

export type CurrencyId = CurrencyId_Native | CurrencyId_VToken | CurrencyId_Token | CurrencyId_Stable | CurrencyId_VSToken | CurrencyId_VSBond | CurrencyId_LPToken | CurrencyId_ForeignAsset

export interface CurrencyId_Native {
  __kind: 'Native'
  value: TokenSymbol
}

export interface CurrencyId_VToken {
  __kind: 'VToken'
  value: TokenSymbol
}

export interface CurrencyId_Token {
  __kind: 'Token'
  value: TokenSymbol
}

export interface CurrencyId_Stable {
  __kind: 'Stable'
  value: TokenSymbol
}

export interface CurrencyId_VSToken {
  __kind: 'VSToken'
  value: TokenSymbol
}

export interface CurrencyId_VSBond {
  __kind: 'VSBond'
  value: [TokenSymbol, number, number, number]
}

export interface CurrencyId_LPToken {
  __kind: 'LPToken'
  value: [TokenSymbol, number, TokenSymbol, number]
}

export interface CurrencyId_ForeignAsset {
  __kind: 'ForeignAsset'
  value: number
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_TooManyConsumers | DispatchError_Token | DispatchError_Arithmetic

export interface DispatchError_Other {
  __kind: 'Other'
}

export interface DispatchError_CannotLookup {
  __kind: 'CannotLookup'
}

export interface DispatchError_BadOrigin {
  __kind: 'BadOrigin'
}

export interface DispatchError_Module {
  __kind: 'Module'
  value: ModuleError
}

export interface DispatchError_ConsumerRemaining {
  __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
  __kind: 'NoProviders'
}

export interface DispatchError_TooManyConsumers {
  __kind: 'TooManyConsumers'
}

export interface DispatchError_Token {
  __kind: 'Token'
  value: TokenError
}

export interface DispatchError_Arithmetic {
  __kind: 'Arithmetic'
  value: ArithmeticError
}

export type ExtraFeeName = ExtraFeeName_SalpContribute | ExtraFeeName_StatemineTransfer | ExtraFeeName_NoExtraFee

export interface ExtraFeeName_SalpContribute {
  __kind: 'SalpContribute'
}

export interface ExtraFeeName_StatemineTransfer {
  __kind: 'StatemineTransfer'
}

export interface ExtraFeeName_NoExtraFee {
  __kind: 'NoExtraFee'
}

export type PoolType = PoolType_Mining | PoolType_Farming | PoolType_EBFarming | PoolType_SingleToken

export interface PoolType_Mining {
  __kind: 'Mining'
}

export interface PoolType_Farming {
  __kind: 'Farming'
}

export interface PoolType_EBFarming {
  __kind: 'EBFarming'
}

export interface PoolType_SingleToken {
  __kind: 'SingleToken'
}

export interface Timepoint {
  height: number
  index: number
}

export interface DispatchInfo {
  weight: bigint
  class: DispatchClass
  paysFee: Pays
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
  __kind: 'Free'
}

export interface BalanceStatus_Reserved {
  __kind: 'Reserved'
}

export type OrderType = OrderType_Sell | OrderType_Buy

export interface OrderType_Sell {
  __kind: 'Sell'
}

export interface OrderType_Buy {
  __kind: 'Buy'
}

export interface VstokenConversionExchangeFee {
  vsksmExchangeFee: bigint
  vsdotExchangeFee: bigint
  vsbondExchangeFeeOfVsksm: bigint
  vsbondExchangeFeeOfVsdot: bigint
}

export interface VstokenConversionExchangeRate {
  vsbondConvertToVsksm: number
  vsksmConvertToVsbond: number
  vsbondConvertToVsdot: number
  vsdotConvertToVsbond: number
}

export interface V1MultiAsset {
  id: V1AssetId
  fun: V1Fungibility
}

export type VersionedMultiLocation = VersionedMultiLocation_V0 | VersionedMultiLocation_V1

export interface VersionedMultiLocation_V0 {
  __kind: 'V0'
  value: V0MultiLocation
}

export interface VersionedMultiLocation_V1 {
  __kind: 'V1'
  value: V1MultiLocation
}

export type Call = Call_System | Call_Timestamp | Call_Indices | Call_ParachainSystem | Call_Balances | Call_Authorship | Call_Session | Call_ParachainStaking | Call_Democracy | Call_Council | Call_TechnicalCommittee | Call_PhragmenElection | Call_CouncilMembership | Call_TechnicalMembership | Call_XcmpQueue | Call_PolkadotXcm | Call_CumulusXcm | Call_DmpQueue | Call_Utility | Call_Scheduler | Call_Proxy | Call_Multisig | Call_Identity | Call_Vesting | Call_Treasury | Call_Bounties | Call_Tips | Call_Preimage | Call_XTokens | Call_Tokens | Call_Currencies | Call_OrmlXcm | Call_ZenlinkProtocol | Call_MerkleDistributor | Call_FlexibleFee | Call_Salp | Call_LiquidityMiningDOT | Call_LiquidityMining | Call_TokenIssuer | Call_LighteningRedeem | Call_SalpLite | Call_CallSwitchgear | Call_VSBondAuction | Call_AssetRegistry | Call_XcmInterface | Call_VstokenConversion

export interface Call_System {
  __kind: 'System'
  value: SystemCall
}

export interface Call_Timestamp {
  __kind: 'Timestamp'
  value: TimestampCall
}

export interface Call_Indices {
  __kind: 'Indices'
  value: IndicesCall
}

export interface Call_ParachainSystem {
  __kind: 'ParachainSystem'
  value: ParachainSystemCall
}

export interface Call_Balances {
  __kind: 'Balances'
  value: BalancesCall
}

export interface Call_Authorship {
  __kind: 'Authorship'
  value: AuthorshipCall
}

export interface Call_Session {
  __kind: 'Session'
  value: SessionCall
}

export interface Call_ParachainStaking {
  __kind: 'ParachainStaking'
  value: ParachainStakingCall
}

export interface Call_Democracy {
  __kind: 'Democracy'
  value: DemocracyCall
}

export interface Call_Council {
  __kind: 'Council'
  value: CouncilCall
}

export interface Call_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: TechnicalCommitteeCall
}

export interface Call_PhragmenElection {
  __kind: 'PhragmenElection'
  value: PhragmenElectionCall
}

export interface Call_CouncilMembership {
  __kind: 'CouncilMembership'
  value: CouncilMembershipCall
}

export interface Call_TechnicalMembership {
  __kind: 'TechnicalMembership'
  value: TechnicalMembershipCall
}

export interface Call_XcmpQueue {
  __kind: 'XcmpQueue'
  value: XcmpQueueCall
}

export interface Call_PolkadotXcm {
  __kind: 'PolkadotXcm'
  value: PolkadotXcmCall
}

export interface Call_CumulusXcm {
  __kind: 'CumulusXcm'
  value: CumulusXcmCall
}

export interface Call_DmpQueue {
  __kind: 'DmpQueue'
  value: DmpQueueCall
}

export interface Call_Utility {
  __kind: 'Utility'
  value: UtilityCall
}

export interface Call_Scheduler {
  __kind: 'Scheduler'
  value: SchedulerCall
}

export interface Call_Proxy {
  __kind: 'Proxy'
  value: ProxyCall
}

export interface Call_Multisig {
  __kind: 'Multisig'
  value: MultisigCall
}

export interface Call_Identity {
  __kind: 'Identity'
  value: IdentityCall
}

export interface Call_Vesting {
  __kind: 'Vesting'
  value: VestingCall
}

export interface Call_Treasury {
  __kind: 'Treasury'
  value: TreasuryCall
}

export interface Call_Bounties {
  __kind: 'Bounties'
  value: BountiesCall
}

export interface Call_Tips {
  __kind: 'Tips'
  value: TipsCall
}

export interface Call_Preimage {
  __kind: 'Preimage'
  value: PreimageCall
}

export interface Call_XTokens {
  __kind: 'XTokens'
  value: XTokensCall
}

export interface Call_Tokens {
  __kind: 'Tokens'
  value: TokensCall
}

export interface Call_Currencies {
  __kind: 'Currencies'
  value: CurrenciesCall
}

export interface Call_OrmlXcm {
  __kind: 'OrmlXcm'
  value: OrmlXcmCall
}

export interface Call_ZenlinkProtocol {
  __kind: 'ZenlinkProtocol'
  value: ZenlinkProtocolCall
}

export interface Call_MerkleDistributor {
  __kind: 'MerkleDistributor'
  value: MerkleDistributorCall
}

export interface Call_FlexibleFee {
  __kind: 'FlexibleFee'
  value: FlexibleFeeCall
}

export interface Call_Salp {
  __kind: 'Salp'
  value: SalpCall
}

export interface Call_LiquidityMiningDOT {
  __kind: 'LiquidityMiningDOT'
  value: LiquidityMiningDOTCall
}

export interface Call_LiquidityMining {
  __kind: 'LiquidityMining'
  value: LiquidityMiningCall
}

export interface Call_TokenIssuer {
  __kind: 'TokenIssuer'
  value: TokenIssuerCall
}

export interface Call_LighteningRedeem {
  __kind: 'LighteningRedeem'
  value: LighteningRedeemCall
}

export interface Call_SalpLite {
  __kind: 'SalpLite'
  value: SalpLiteCall
}

export interface Call_CallSwitchgear {
  __kind: 'CallSwitchgear'
  value: CallSwitchgearCall
}

export interface Call_VSBondAuction {
  __kind: 'VSBondAuction'
  value: VSBondAuctionCall
}

export interface Call_AssetRegistry {
  __kind: 'AssetRegistry'
  value: AssetRegistryCall
}

export interface Call_XcmInterface {
  __kind: 'XcmInterface'
  value: XcmInterfaceCall
}

export interface Call_VstokenConversion {
  __kind: 'VstokenConversion'
  value: VstokenConversionCall
}

export type MultiAddress = MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw | MultiAddress_Address32 | MultiAddress_Address20

export interface MultiAddress_Id {
  __kind: 'Id'
  value: Uint8Array
}

export interface MultiAddress_Index {
  __kind: 'Index'
  value: number
}

export interface MultiAddress_Raw {
  __kind: 'Raw'
  value: Uint8Array
}

export interface MultiAddress_Address32 {
  __kind: 'Address32'
  value: Uint8Array
}

export interface MultiAddress_Address20 {
  __kind: 'Address20'
  value: Uint8Array
}

export type ProxyType = ProxyType_Any | ProxyType_NonTransfer | ProxyType_Governance | ProxyType_CancelProxy | ProxyType_IdentityJudgement | ProxyType_Staking

export interface ProxyType_Any {
  __kind: 'Any'
}

export interface ProxyType_NonTransfer {
  __kind: 'NonTransfer'
}

export interface ProxyType_Governance {
  __kind: 'Governance'
}

export interface ProxyType_CancelProxy {
  __kind: 'CancelProxy'
}

export interface ProxyType_IdentityJudgement {
  __kind: 'IdentityJudgement'
}

export interface ProxyType_Staking {
  __kind: 'Staking'
}

export type MaybeHashed = MaybeHashed_Value | MaybeHashed_Hash

export interface MaybeHashed_Value {
  __kind: 'Value'
  value: Call
}

export interface MaybeHashed_Hash {
  __kind: 'Hash'
  value: Uint8Array
}

export type OriginCaller = OriginCaller_system | OriginCaller_Council | OriginCaller_TechnicalCommittee | OriginCaller_PolkadotXcm | OriginCaller_CumulusXcm | OriginCaller_Void

export interface OriginCaller_system {
  __kind: 'system'
  value: RawOrigin
}

export interface OriginCaller_Council {
  __kind: 'Council'
  value: Type_329
}

export interface OriginCaller_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: Type_330
}

export interface OriginCaller_PolkadotXcm {
  __kind: 'PolkadotXcm'
  value: Origin
}

export interface OriginCaller_CumulusXcm {
  __kind: 'CumulusXcm'
  value: Type_332
}

export interface OriginCaller_Void {
  __kind: 'Void'
  value: Void
}

export type TokenSymbol = TokenSymbol_ASG | TokenSymbol_BNC | TokenSymbol_KUSD | TokenSymbol_DOT | TokenSymbol_KSM | TokenSymbol_ETH | TokenSymbol_KAR | TokenSymbol_ZLK | TokenSymbol_PHA | TokenSymbol_RMRK | TokenSymbol_MOVR

export interface TokenSymbol_ASG {
  __kind: 'ASG'
}

export interface TokenSymbol_BNC {
  __kind: 'BNC'
}

export interface TokenSymbol_KUSD {
  __kind: 'KUSD'
}

export interface TokenSymbol_DOT {
  __kind: 'DOT'
}

export interface TokenSymbol_KSM {
  __kind: 'KSM'
}

export interface TokenSymbol_ETH {
  __kind: 'ETH'
}

export interface TokenSymbol_KAR {
  __kind: 'KAR'
}

export interface TokenSymbol_ZLK {
  __kind: 'ZLK'
}

export interface TokenSymbol_PHA {
  __kind: 'PHA'
}

export interface TokenSymbol_RMRK {
  __kind: 'RMRK'
}

export interface TokenSymbol_MOVR {
  __kind: 'MOVR'
}

export interface DepositData {
  deposit: bigint
  gainAvgs: [CurrencyId, bigint][]
  updateB: number
  pendingUnlocks: [number, bigint][]
}

export interface PoolInfo {
  poolId: number
  keeper: Uint8Array
  investor: (Uint8Array | undefined)
  tradingPair: [CurrencyId, CurrencyId]
  duration: number
  type: PoolType
  minDepositToStart: bigint
  afterBlockToStart: number
  deposit: bigint
  rewards: [CurrencyId, RewardData][]
  updateB: number
  state: PoolState
  blockStartup: (number | undefined)
  blockRetired: (number | undefined)
  redeemLimitTime: number
  unlockLimitNums: number
  pendingUnlockNums: number
}

export interface MerkleMetadata {
  merkleRoot: Uint8Array
  description: Uint8Array
  distributeCurrency: CurrencyId
  distributeAmount: bigint
  distributeHolder: Uint8Array
  charged: boolean
}

export interface ScheduledV3 {
  maybeId: (Uint8Array | undefined)
  priority: number
  call: MaybeHashed
  maybePeriodic: ([number, number] | undefined)
  origin: OriginCaller
}

export interface EventRecord {
  phase: Phase
  event: Event
  topics: Uint8Array[]
}

export interface Type_507 {
  free: bigint
  reserved: bigint
  frozen: bigint
}

export interface Type_505 {
  id: Uint8Array
  amount: bigint
}

export interface OrderInfo {
  owner: Uint8Array
  vsbond: CurrencyId
  amount: bigint
  remain: bigint
  totalPrice: bigint
  remainPrice: bigint
  orderId: bigint
  orderType: OrderType
}

export type V1Junctions = V1Junctions_Here | V1Junctions_X1 | V1Junctions_X2 | V1Junctions_X3 | V1Junctions_X4 | V1Junctions_X5 | V1Junctions_X6 | V1Junctions_X7 | V1Junctions_X8

export interface V1Junctions_Here {
  __kind: 'Here'
}

export interface V1Junctions_X1 {
  __kind: 'X1'
  value: V1Junction
}

export interface V1Junctions_X2 {
  __kind: 'X2'
  value: [V1Junction, V1Junction]
}

export interface V1Junctions_X3 {
  __kind: 'X3'
  value: [V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X4 {
  __kind: 'X4'
  value: [V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X5 {
  __kind: 'X5'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X6 {
  __kind: 'X6'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X7 {
  __kind: 'X7'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X8 {
  __kind: 'X8'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface ModuleError {
  index: number
  error: number
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Unsupported

export interface TokenError_NoFunds {
  __kind: 'NoFunds'
}

export interface TokenError_WouldDie {
  __kind: 'WouldDie'
}

export interface TokenError_BelowMinimum {
  __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
  __kind: 'CannotCreate'
}

export interface TokenError_UnknownAsset {
  __kind: 'UnknownAsset'
}

export interface TokenError_Frozen {
  __kind: 'Frozen'
}

export interface TokenError_Unsupported {
  __kind: 'Unsupported'
}

export type ArithmeticError = ArithmeticError_Underflow | ArithmeticError_Overflow | ArithmeticError_DivisionByZero

export interface ArithmeticError_Underflow {
  __kind: 'Underflow'
}

export interface ArithmeticError_Overflow {
  __kind: 'Overflow'
}

export interface ArithmeticError_DivisionByZero {
  __kind: 'DivisionByZero'
}

export type DispatchClass = DispatchClass_Normal | DispatchClass_Operational | DispatchClass_Mandatory

export interface DispatchClass_Normal {
  __kind: 'Normal'
}

export interface DispatchClass_Operational {
  __kind: 'Operational'
}

export interface DispatchClass_Mandatory {
  __kind: 'Mandatory'
}

export type Pays = Pays_Yes | Pays_No

export interface Pays_Yes {
  __kind: 'Yes'
}

export interface Pays_No {
  __kind: 'No'
}

export type V1AssetId = V1AssetId_Concrete | V1AssetId_Abstract

export interface V1AssetId_Concrete {
  __kind: 'Concrete'
  value: V1MultiLocation
}

export interface V1AssetId_Abstract {
  __kind: 'Abstract'
  value: Uint8Array
}

export type V1Fungibility = V1Fungibility_Fungible | V1Fungibility_NonFungible

export interface V1Fungibility_Fungible {
  __kind: 'Fungible'
  value: bigint
}

export interface V1Fungibility_NonFungible {
  __kind: 'NonFungible'
  value: V1AssetInstance
}

export type V0MultiLocation = V0MultiLocation_Null | V0MultiLocation_X1 | V0MultiLocation_X2 | V0MultiLocation_X3 | V0MultiLocation_X4 | V0MultiLocation_X5 | V0MultiLocation_X6 | V0MultiLocation_X7 | V0MultiLocation_X8

export interface V0MultiLocation_Null {
  __kind: 'Null'
}

export interface V0MultiLocation_X1 {
  __kind: 'X1'
  value: V0Junction
}

export interface V0MultiLocation_X2 {
  __kind: 'X2'
  value: [V0Junction, V0Junction]
}

export interface V0MultiLocation_X3 {
  __kind: 'X3'
  value: [V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X4 {
  __kind: 'X4'
  value: [V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X5 {
  __kind: 'X5'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X6 {
  __kind: 'X6'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X7 {
  __kind: 'X7'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X8 {
  __kind: 'X8'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
  __kind: 'fill_block'
  ratio: number
}

/**
 * Make some on-chain remark.
 * 
 * # <weight>
 * - `O(1)`
 * # </weight>
 */
export interface SystemCall_remark {
  __kind: 'remark'
  remark: Uint8Array
}

/**
 * Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
  __kind: 'set_heap_pages'
  pages: bigint
}

/**
 * Set the new runtime code.
 * 
 * # <weight>
 * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
 *   expensive).
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime, but generally this is very
 * expensive. We will treat this as a full block.
 * # </weight>
 */
export interface SystemCall_set_code {
  __kind: 'set_code'
  code: Uint8Array
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * # <weight>
 * - `O(C)` where `C` length of `code`
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime. We will treat this as a full
 * block. # </weight>
 */
export interface SystemCall_set_code_without_checks {
  __kind: 'set_code_without_checks'
  code: Uint8Array
}

/**
 * Set some items of storage.
 */
export interface SystemCall_set_storage {
  __kind: 'set_storage'
  items: [Uint8Array, Uint8Array][]
}

/**
 * Kill some items from storage.
 */
export interface SystemCall_kill_storage {
  __kind: 'kill_storage'
  keys: Uint8Array[]
}

/**
 * Kill all storage items with a key that starts with the given prefix.
 * 
 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 * the prefix we are removing to accurately calculate the weight of this function.
 */
export interface SystemCall_kill_prefix {
  __kind: 'kill_prefix'
  prefix: Uint8Array
  subkeys: number
}

/**
 * Make some on-chain remark and emit event.
 */
export interface SystemCall_remark_with_event {
  __kind: 'remark_with_event'
  remark: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TimestampCall = TimestampCall_set

/**
 * Set the current time.
 * 
 * This call should be invoked exactly once per block. It will panic at the finalization
 * phase, if this call hasn't been invoked by that time.
 * 
 * The timestamp should be greater than the previous one by the amount specified by
 * `MinimumPeriod`.
 * 
 * The dispatch origin for this call must be `Inherent`.
 * 
 * # <weight>
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 * # </weight>
 */
export interface TimestampCall_set {
  __kind: 'set'
  now: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type IndicesCall = IndicesCall_claim | IndicesCall_transfer | IndicesCall_free | IndicesCall_force_transfer | IndicesCall_freeze

/**
 * Assign an previously unassigned index.
 * 
 * Payment: `Deposit` is reserved from the sender account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `index`: the index to be claimed. This must not be in use.
 * 
 * Emits `IndexAssigned` if successful.
 * 
 * # <weight>
 * - `O(1)`.
 * - One storage mutation (codec `O(1)`).
 * - One reserve operation.
 * - One event.
 * -------------------
 * - DB Weight: 1 Read/Write (Accounts)
 * # </weight>
 */
export interface IndicesCall_claim {
  __kind: 'claim'
  index: number
}

/**
 * Assign an index already owned by the sender to another account. The balance reservation
 * is effectively transferred to the new account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `index`: the index to be re-assigned. This must be owned by the sender.
 * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * 
 * Emits `IndexAssigned` if successful.
 * 
 * # <weight>
 * - `O(1)`.
 * - One storage mutation (codec `O(1)`).
 * - One transfer operation.
 * - One event.
 * -------------------
 * - DB Weight:
 *    - Reads: Indices Accounts, System Account (recipient)
 *    - Writes: Indices Accounts, System Account (recipient)
 * # </weight>
 */
export interface IndicesCall_transfer {
  __kind: 'transfer'
  new: Uint8Array
  index: number
}

/**
 * Free up an index owned by the sender.
 * 
 * Payment: Any previous deposit placed for the index is unreserved in the sender account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must own the index.
 * 
 * - `index`: the index to be freed. This must be owned by the sender.
 * 
 * Emits `IndexFreed` if successful.
 * 
 * # <weight>
 * - `O(1)`.
 * - One storage mutation (codec `O(1)`).
 * - One reserve operation.
 * - One event.
 * -------------------
 * - DB Weight: 1 Read/Write (Accounts)
 * # </weight>
 */
export interface IndicesCall_free {
  __kind: 'free'
  index: number
}

/**
 * Force an index to an account. This doesn't require a deposit. If the index is already
 * held, then any deposit is reimbursed to its current owner.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `index`: the index to be (re-)assigned.
 * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
 * 
 * Emits `IndexAssigned` if successful.
 * 
 * # <weight>
 * - `O(1)`.
 * - One storage mutation (codec `O(1)`).
 * - Up to one reserve operation.
 * - One event.
 * -------------------
 * - DB Weight:
 *    - Reads: Indices Accounts, System Account (original owner)
 *    - Writes: Indices Accounts, System Account (original owner)
 * # </weight>
 */
export interface IndicesCall_force_transfer {
  __kind: 'force_transfer'
  new: Uint8Array
  index: number
  freeze: boolean
}

/**
 * Freeze an index so it will always point to the sender account. This consumes the
 * deposit.
 * 
 * The dispatch origin for this call must be _Signed_ and the signing account must have a
 * non-frozen account `index`.
 * 
 * - `index`: the index to be frozen in place.
 * 
 * Emits `IndexFrozen` if successful.
 * 
 * # <weight>
 * - `O(1)`.
 * - One storage mutation (codec `O(1)`).
 * - Up to one slash operation.
 * - One event.
 * -------------------
 * - DB Weight: 1 Read/Write (Accounts)
 * # </weight>
 */
export interface IndicesCall_freeze {
  __kind: 'freeze'
  index: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainSystemCall = ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message | ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade

/**
 * Set the current validation data.
 * 
 * This should be invoked exactly once per block. It will panic at the finalization
 * phase if the call was not invoked.
 * 
 * The dispatch origin for this call must be `Inherent`
 * 
 * As a side effect, this function upgrades the current validation function
 * if the appropriate time has come.
 */
export interface ParachainSystemCall_set_validation_data {
  __kind: 'set_validation_data'
  data: ParachainInherentData
}

export interface ParachainSystemCall_sudo_send_upward_message {
  __kind: 'sudo_send_upward_message'
  message: Uint8Array
}

export interface ParachainSystemCall_authorize_upgrade {
  __kind: 'authorize_upgrade'
  codeHash: Uint8Array
}

export interface ParachainSystemCall_enact_authorized_upgrade {
  __kind: 'enact_authorized_upgrade'
  code: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 * 
 * # <weight>
 * - Dependent on arguments but not critical, given proper implementations for input config
 *   types. See related functions below.
 * - It contains a limited number of reads and writes internally and no complex
 *   computation.
 * 
 * Related functions:
 * 
 *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *   - Transferring balances to accounts that did not exist before will cause
 *     `T::OnNewAccount::on_new_account` to be called.
 *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
 *     that the transfer will not kill the origin account.
 * ---------------------------------
 * - Origin account is already in memory, so no DB operations for them.
 * # </weight>
 */
export interface BalancesCall_transfer {
  __kind: 'transfer'
  dest: MultiAddress
  value: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 * also alter the total issuance of the system (`TotalIssuance`) appropriately.
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_set_balance {
  __kind: 'set_balance'
  who: MultiAddress
  newFree: bigint
  newReserved: bigint
}

/**
 * Exactly as `transfer`, except the origin must be root and the source account may be
 * specified.
 * # <weight>
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
 * # </weight>
 */
export interface BalancesCall_force_transfer {
  __kind: 'force_transfer'
  source: MultiAddress
  dest: MultiAddress
  value: bigint
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer will not kill the
 * origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * [`transfer`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
  __kind: 'transfer_keep_alive'
  dest: MultiAddress
  value: bigint
}

/**
 * Transfer the entire transferable balance from the caller account.
 * 
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 * 
 * The dispatch origin of this call must be Signed.
 * 
 * - `dest`: The recipient of the transfer.
 * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *   of the funds the account has, causing the sender account to be killed (false), or
 *   transfer everything except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true). # <weight>
 * - O(1). Just like transfer, but reading the user's transferable balance first.
 *   #</weight>
 */
export interface BalancesCall_transfer_all {
  __kind: 'transfer_all'
  dest: MultiAddress
  keepAlive: boolean
}

/**
 * Unreserve some balance from a user by force.
 * 
 * Can only be called by ROOT.
 */
export interface BalancesCall_force_unreserve {
  __kind: 'force_unreserve'
  who: MultiAddress
  amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 * Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
  __kind: 'set_uncles'
  newUncles: Header[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

/**
 * Sets the session key(s) of the function caller to `keys`.
 * Allows an account to set its session key prior to becoming a validator.
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be signed.
 * 
 * # <weight>
 * - Complexity: `O(1)`. Actual cost depends on the number of length of
 *   `T::Keys::key_ids()` which is fixed.
 * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
 * - DbWrites: `origin account`, `NextKeys`
 * - DbReads per key id: `KeyOwner`
 * - DbWrites per key id: `KeyOwner`
 * # </weight>
 */
export interface SessionCall_set_keys {
  __kind: 'set_keys'
  keys: SessionKeys
  proof: Uint8Array
}

/**
 * Removes any session key(s) of the function caller.
 * 
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be Signed and the account must be either be
 * convertible to a validator ID using the chain's typical addressing system (this usually
 * means being a controller account) or directly convertible into a validator ID (which
 * usually means being a stash account).
 * 
 * # <weight>
 * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
 *   of `T::Keys::key_ids()` which is fixed.
 * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
 * - DbWrites: `NextKeys`, `origin account`
 * - DbWrites per key id: `KeyOwner`
 * # </weight>
 */
export interface SessionCall_purge_keys {
  __kind: 'purge_keys'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainStakingCall = ParachainStakingCall_hotfix_remove_delegation_requests | ParachainStakingCall_hotfix_update_candidate_pool_value | ParachainStakingCall_set_staking_expectations | ParachainStakingCall_set_inflation | ParachainStakingCall_set_parachain_bond_account | ParachainStakingCall_set_parachain_bond_reserve_percent | ParachainStakingCall_set_parachain_bond_reserve_payment | ParachainStakingCall_set_total_selected | ParachainStakingCall_set_collator_commission | ParachainStakingCall_set_blocks_per_round | ParachainStakingCall_join_candidates | ParachainStakingCall_schedule_leave_candidates | ParachainStakingCall_execute_leave_candidates | ParachainStakingCall_cancel_leave_candidates | ParachainStakingCall_go_offline | ParachainStakingCall_go_online | ParachainStakingCall_candidate_bond_more | ParachainStakingCall_schedule_candidate_bond_less | ParachainStakingCall_execute_candidate_bond_less | ParachainStakingCall_cancel_candidate_bond_less | ParachainStakingCall_delegate | ParachainStakingCall_schedule_leave_delegators | ParachainStakingCall_execute_leave_delegators | ParachainStakingCall_cancel_leave_delegators | ParachainStakingCall_schedule_revoke_delegation | ParachainStakingCall_delegator_bond_more | ParachainStakingCall_schedule_delegator_bond_less | ParachainStakingCall_execute_delegation_request | ParachainStakingCall_cancel_delegation_request

/**
 * Hotfix patch to remove all delegation requests not removed during a candidate exit
 */
export interface ParachainStakingCall_hotfix_remove_delegation_requests {
  __kind: 'hotfix_remove_delegation_requests'
  delegators: Uint8Array[]
}

/**
 * Hotfix patch to correct and update CandidatePool value for candidates that have
 * called candidate_bond_more when it did not update the CandidatePool value
 */
export interface ParachainStakingCall_hotfix_update_candidate_pool_value {
  __kind: 'hotfix_update_candidate_pool_value'
  candidates: Uint8Array[]
}

/**
 * Set the expectations for total staked. These expectations determine the issuance for
 * the round according to logic in `fn compute_issuance`
 */
export interface ParachainStakingCall_set_staking_expectations {
  __kind: 'set_staking_expectations'
  expectations: Range
}

/**
 * Set the annual inflation rate to derive per-round inflation
 */
export interface ParachainStakingCall_set_inflation {
  __kind: 'set_inflation'
  schedule: Type_266
}

/**
 * Set the account that will hold funds set aside for parachain bond
 */
export interface ParachainStakingCall_set_parachain_bond_account {
  __kind: 'set_parachain_bond_account'
  new: Uint8Array
}

/**
 * Set the percent of inflation set aside for parachain bond
 */
export interface ParachainStakingCall_set_parachain_bond_reserve_percent {
  __kind: 'set_parachain_bond_reserve_percent'
  new: number
}

/**
 * Set payment for each round
 */
export interface ParachainStakingCall_set_parachain_bond_reserve_payment {
  __kind: 'set_parachain_bond_reserve_payment'
  new: bigint
}

/**
 * Set the total number of collator candidates selected per round
 * - changes are not applied until the start of the next round
 */
export interface ParachainStakingCall_set_total_selected {
  __kind: 'set_total_selected'
  new: number
}

/**
 * Set the commission for all collators
 */
export interface ParachainStakingCall_set_collator_commission {
  __kind: 'set_collator_commission'
  new: number
}

/**
 * Set blocks per round
 * - if called with `new` less than length of current round, will transition immediately
 * in the next block
 * - also updates per-round inflation config
 */
export interface ParachainStakingCall_set_blocks_per_round {
  __kind: 'set_blocks_per_round'
  new: number
}

/**
 * Join the set of collator candidates
 */
export interface ParachainStakingCall_join_candidates {
  __kind: 'join_candidates'
  bond: bigint
  candidateCount: number
}

/**
 * Request to leave the set of candidates. If successful, the account is immediately
 * removed from the candidate pool to prevent selection as a collator.
 */
export interface ParachainStakingCall_schedule_leave_candidates {
  __kind: 'schedule_leave_candidates'
  candidateCount: number
}

/**
 * Execute leave candidates request
 */
export interface ParachainStakingCall_execute_leave_candidates {
  __kind: 'execute_leave_candidates'
  candidate: Uint8Array
  candidateDelegationCount: number
}

/**
 * Cancel open request to leave candidates
 * - only callable by collator account
 * - result upon successful call is the candidate is active in the candidate pool
 */
export interface ParachainStakingCall_cancel_leave_candidates {
  __kind: 'cancel_leave_candidates'
  candidateCount: number
}

/**
 * Temporarily leave the set of collator candidates without unbonding
 */
export interface ParachainStakingCall_go_offline {
  __kind: 'go_offline'
}

/**
 * Rejoin the set of collator candidates if previously had called `go_offline`
 */
export interface ParachainStakingCall_go_online {
  __kind: 'go_online'
}

/**
 * Increase collator candidate self bond by `more`
 */
export interface ParachainStakingCall_candidate_bond_more {
  __kind: 'candidate_bond_more'
  more: bigint
}

/**
 * Request by collator candidate to decrease self bond by `less`
 */
export interface ParachainStakingCall_schedule_candidate_bond_less {
  __kind: 'schedule_candidate_bond_less'
  less: bigint
}

/**
 * Execute pending request to adjust the collator candidate self bond
 */
export interface ParachainStakingCall_execute_candidate_bond_less {
  __kind: 'execute_candidate_bond_less'
  candidate: Uint8Array
}

/**
 * Cancel pending request to adjust the collator candidate self bond
 */
export interface ParachainStakingCall_cancel_candidate_bond_less {
  __kind: 'cancel_candidate_bond_less'
}

/**
 * If caller is not a delegator and not a collator, then join the set of delegators
 * If caller is a delegator, then makes delegation to change their delegation state
 */
export interface ParachainStakingCall_delegate {
  __kind: 'delegate'
  candidate: Uint8Array
  amount: bigint
  candidateDelegationCount: number
  delegationCount: number
}

/**
 * Request to leave the set of delegators. If successful, the caller is scheduled
 * to be allowed to exit. Success forbids future delegator actions until the request is
 * invoked or cancelled.
 */
export interface ParachainStakingCall_schedule_leave_delegators {
  __kind: 'schedule_leave_delegators'
}

/**
 * Execute the right to exit the set of delegators and revoke all ongoing delegations.
 */
export interface ParachainStakingCall_execute_leave_delegators {
  __kind: 'execute_leave_delegators'
  delegator: Uint8Array
  delegationCount: number
}

/**
 * Cancel a pending request to exit the set of delegators. Success clears the pending exit
 * request (thereby resetting the delay upon another `leave_delegators` call).
 */
export interface ParachainStakingCall_cancel_leave_delegators {
  __kind: 'cancel_leave_delegators'
}

/**
 * Request to revoke an existing delegation. If successful, the delegation is scheduled
 * to be allowed to be revoked via the `execute_delegation_request` extrinsic.
 */
export interface ParachainStakingCall_schedule_revoke_delegation {
  __kind: 'schedule_revoke_delegation'
  collator: Uint8Array
}

/**
 * Bond more for delegators wrt a specific collator candidate.
 */
export interface ParachainStakingCall_delegator_bond_more {
  __kind: 'delegator_bond_more'
  candidate: Uint8Array
  more: bigint
}

/**
 * Request bond less for delegators wrt a specific collator candidate.
 */
export interface ParachainStakingCall_schedule_delegator_bond_less {
  __kind: 'schedule_delegator_bond_less'
  candidate: Uint8Array
  less: bigint
}

/**
 * Execute pending request to change an existing delegation
 */
export interface ParachainStakingCall_execute_delegation_request {
  __kind: 'execute_delegation_request'
  delegator: Uint8Array
  candidate: Uint8Array
}

/**
 * Cancel request to change an existing delegation.
 */
export interface ParachainStakingCall_cancel_delegation_request {
  __kind: 'cancel_delegation_request'
  candidate: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_cancel_queued | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_note_preimage | DemocracyCall_note_preimage_operational | DemocracyCall_note_imminent_preimage | DemocracyCall_note_imminent_preimage_operational | DemocracyCall_reap_preimage | DemocracyCall_unlock | DemocracyCall_remove_vote | DemocracyCall_remove_other_vote | DemocracyCall_enact_proposal | DemocracyCall_blacklist | DemocracyCall_cancel_proposal

/**
 * Propose a sensitive action to be taken.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender must
 * have funds to cover the deposit.
 * 
 * - `proposal_hash`: The hash of the proposal preimage.
 * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 * Emits `Proposed`.
 * 
 * Weight: `O(p)`
 */
export interface DemocracyCall_propose {
  __kind: 'propose'
  proposalHash: Uint8Array
  value: bigint
}

/**
 * Signals agreement with a particular proposal.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender
 * must have funds to cover the deposit, equal to the original deposit.
 * 
 * - `proposal`: The index of the proposal to second.
 * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
 *   proposal. Extrinsic is weighted according to this value with no refund.
 * 
 * Weight: `O(S)` where S is the number of seconds a proposal already has.
 */
export interface DemocracyCall_second {
  __kind: 'second'
  proposal: number
  secondsUpperBound: number
}

/**
 * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 * otherwise it is a vote to keep the status quo.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `ref_index`: The index of the referendum to vote for.
 * - `vote`: The vote configuration.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter has voted on.
 */
export interface DemocracyCall_vote {
  __kind: 'vote'
  refIndex: number
  vote: AccountVote
}

/**
 * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 * referendum.
 * 
 * The dispatch origin of this call must be `CancellationOrigin`.
 * 
 * -`ref_index`: The index of the referendum to cancel.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_emergency_cancel {
  __kind: 'emergency_cancel'
  refIndex: number
}

/**
 * Schedule a referendum to be tabled once it is legal to schedule an external
 * referendum.
 * 
 * The dispatch origin of this call must be `ExternalOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
 *   Decoding vec of length V. Charged as maximum
 */
export interface DemocracyCall_external_propose {
  __kind: 'external_propose'
  proposalHash: Uint8Array
}

/**
 * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 * an external referendum.
 * 
 * The dispatch of this call must be `ExternalMajorityOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_majority {
  __kind: 'external_propose_majority'
  proposalHash: Uint8Array
}

/**
 * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 * schedule an external referendum.
 * 
 * The dispatch of this call must be `ExternalDefaultOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_default {
  __kind: 'external_propose_default'
  proposalHash: Uint8Array
}

/**
 * Schedule the currently externally-proposed majority-carries referendum to be tabled
 * immediately. If there is no externally-proposed referendum currently, or if there is one
 * but it is not a majority-carries referendum then it fails.
 * 
 * The dispatch of this call must be `FastTrackOrigin`.
 * 
 * - `proposal_hash`: The hash of the current external proposal.
 * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 *   `FastTrackVotingPeriod` if too low.
 * - `delay`: The number of block after voting has ended in approval and this should be
 *   enacted. This doesn't have a minimum amount.
 * 
 * Emits `Started`.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
  __kind: 'fast_track'
  proposalHash: Uint8Array
  votingPeriod: number
  delay: number
}

/**
 * Veto and blacklist the external proposal hash.
 * 
 * The dispatch origin of this call must be `VetoOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 * 
 * Emits `Vetoed`.
 * 
 * Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
export interface DemocracyCall_veto_external {
  __kind: 'veto_external'
  proposalHash: Uint8Array
}

/**
 * Remove a referendum.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * - `ref_index`: The index of the referendum to cancel.
 * 
 * # Weight: `O(1)`.
 */
export interface DemocracyCall_cancel_referendum {
  __kind: 'cancel_referendum'
  refIndex: number
}

/**
 * Cancel a proposal queued for enactment.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * - `which`: The index of the referendum to cancel.
 * 
 * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
 */
export interface DemocracyCall_cancel_queued {
  __kind: 'cancel_queued'
  which: number
}

/**
 * Delegate the voting power (with some given conviction) of the sending account.
 * 
 * The balance delegated is locked for as long as it's delegated, and thereafter for the
 * time appropriate for the conviction's lock period.
 * 
 * The dispatch origin of this call must be _Signed_, and the signing account must either:
 *   - be delegating already; or
 *   - have no voting activity (if there is, then it will need to be removed/consolidated
 *     through `reap_vote` or `unvote`).
 * 
 * - `to`: The account whose voting the `target` account's voting power will follow.
 * - `conviction`: The conviction that will be attached to the delegated votes. When the
 *   account is undelegated, the funds will be locked for the corresponding period.
 * - `balance`: The amount of the account's balance to be used in delegating. This must not
 *   be more than the account's current balance.
 * 
 * Emits `Delegated`.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_delegate {
  __kind: 'delegate'
  to: Uint8Array
  conviction: Conviction
  balance: bigint
}

/**
 * Undelegate the voting power of the sending account.
 * 
 * Tokens may be unlocked following once an amount of time consistent with the lock period
 * of the conviction with which the delegation was issued.
 * 
 * The dispatch origin of this call must be _Signed_ and the signing account must be
 * currently delegating.
 * 
 * Emits `Undelegated`.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_undelegate {
  __kind: 'undelegate'
}

/**
 * Clears all public proposals.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
  __kind: 'clear_public_proposals'
}

/**
 * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
 * in the dispatch queue but does require a deposit, returned once enacted.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `encoded_proposal`: The preimage of a proposal.
 * 
 * Emits `PreimageNoted`.
 * 
 * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_preimage {
  __kind: 'note_preimage'
  encodedProposal: Uint8Array
}

/**
 * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_preimage_operational {
  __kind: 'note_preimage_operational'
  encodedProposal: Uint8Array
}

/**
 * Register the preimage for an upcoming proposal. This requires the proposal to be
 * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
 * the preimage has not been uploaded before and matches some imminent proposal,
 * no fee is paid.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `encoded_proposal`: The preimage of a proposal.
 * 
 * Emits `PreimageNoted`.
 * 
 * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_imminent_preimage {
  __kind: 'note_imminent_preimage'
  encodedProposal: Uint8Array
}

/**
 * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_imminent_preimage_operational {
  __kind: 'note_imminent_preimage_operational'
  encodedProposal: Uint8Array
}

/**
 * Remove an expired proposal preimage and collect the deposit.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `proposal_hash`: The preimage hash of a proposal.
 * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
 *   weighted according to this value with no refund.
 * 
 * This will only work after `VotingPeriod` blocks from the time that the preimage was
 * noted, if it's the same account doing it. If it's a different account, then it'll only
 * work an additional `EnactmentPeriod` later.
 * 
 * Emits `PreimageReaped`.
 * 
 * Weight: `O(D)` where D is length of proposal.
 */
export interface DemocracyCall_reap_preimage {
  __kind: 'reap_preimage'
  proposalHash: Uint8Array
  proposalLenUpperBound: number
}

/**
 * Unlock tokens that have an expired lock.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account to remove the lock on.
 * 
 * Weight: `O(R)` with R number of vote of target.
 */
export interface DemocracyCall_unlock {
  __kind: 'unlock'
  target: Uint8Array
}

/**
 * Remove a vote for a referendum.
 * 
 * If:
 * - the referendum was cancelled, or
 * - the referendum is ongoing, or
 * - the referendum has ended such that
 *   - the vote of the account was in opposition to the result; or
 *   - there was no conviction to the account's vote; or
 *   - the account made a split vote
 * ...then the vote is removed cleanly and a following call to `unlock` may result in more
 * funds being available.
 * 
 * If, however, the referendum has ended and:
 * - it finished corresponding to the vote of the account, and
 * - the account made a standard vote with conviction, and
 * - the lock period of the conviction is not over
 * ...then the lock will be aggregated into the overall account's lock, which may involve
 * *overlocking* (where the two locks are combined into a single lock that is the maximum
 * of both the amount locked and the time is it locked for).
 * 
 * The dispatch origin of this call must be _Signed_, and the signer must have a vote
 * registered for referendum `index`.
 * 
 * - `index`: The index of referendum of the vote to be removed.
 * 
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_vote {
  __kind: 'remove_vote'
  index: number
}

/**
 * Remove a vote for a referendum.
 * 
 * If the `target` is equal to the signer, then this function is exactly equivalent to
 * `remove_vote`. If not equal to the signer, then the vote must have expired,
 * either because the referendum was cancelled, because the voter lost the referendum or
 * because the conviction period is over.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account of the vote to be removed; this account must have voted for
 *   referendum `index`.
 * - `index`: The index of referendum of the vote to be removed.
 * 
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_other_vote {
  __kind: 'remove_other_vote'
  target: Uint8Array
  index: number
}

/**
 * Enact a proposal from a referendum. For now we just make the weight be the maximum.
 */
export interface DemocracyCall_enact_proposal {
  __kind: 'enact_proposal'
  proposalHash: Uint8Array
  index: number
}

/**
 * Permanently place a proposal into the blacklist. This prevents it from ever being
 * proposed again.
 * 
 * If called on a queued public or external proposal, then this will result in it being
 * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 * then it will be cancelled.
 * 
 * The dispatch origin of this call must be `BlacklistOrigin`.
 * 
 * - `proposal_hash`: The proposal hash to blacklist permanently.
 * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 * cancelled.
 * 
 * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *   reasonable value).
 */
export interface DemocracyCall_blacklist {
  __kind: 'blacklist'
  proposalHash: Uint8Array
  maybeRefIndex: (number | undefined)
}

/**
 * Remove a proposal.
 * 
 * The dispatch origin of this call must be `CancelProposalOrigin`.
 * 
 * - `prop_index`: The index of the proposal to cancel.
 * 
 * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
export interface DemocracyCall_cancel_proposal {
  __kind: 'cancel_proposal'
  propIndex: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote | CouncilCall_close | CouncilCall_disapprove_proposal

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface CouncilCall_set_members {
  __kind: 'set_members'
  newMembers: Uint8Array[]
  prime: (Uint8Array | undefined)
  oldCount: number
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface CouncilCall_execute {
  __kind: 'execute'
  proposal: Call
  lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface CouncilCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Call
  lengthBound: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface CouncilCall_vote {
  __kind: 'vote'
  proposal: Uint8Array
  index: number
  approve: boolean
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface CouncilCall_close {
  __kind: 'close'
  proposalHash: Uint8Array
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface CouncilCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote | TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface TechnicalCommitteeCall_set_members {
  __kind: 'set_members'
  newMembers: Uint8Array[]
  prime: (Uint8Array | undefined)
  oldCount: number
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_execute {
  __kind: 'execute'
  proposal: Call
  lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Call
  lengthBound: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_vote {
  __kind: 'vote'
  proposal: Uint8Array
  index: number
  approve: boolean
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface TechnicalCommitteeCall_close {
  __kind: 'close'
  proposalHash: Uint8Array
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PhragmenElectionCall = PhragmenElectionCall_vote | PhragmenElectionCall_remove_voter | PhragmenElectionCall_submit_candidacy | PhragmenElectionCall_renounce_candidacy | PhragmenElectionCall_remove_member | PhragmenElectionCall_clean_defunct_voters

/**
 * Vote for a set of candidates for the upcoming round of election. This can be called to
 * set the initial votes, or update already existing votes.
 * 
 * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
 * reserved. The deposit is based on the number of votes and can be updated over time.
 * 
 * The `votes` should:
 *   - not be empty.
 *   - be less than the number of possible candidates. Note that all current members and
 *     runners-up are also automatically candidates for the next round.
 * 
 * If `value` is more than `who`'s free balance, then the maximum of the two is used.
 * 
 * The dispatch origin of this call must be signed.
 * 
 * ### Warning
 * 
 * It is the responsibility of the caller to **NOT** place all of their balance into the
 * lock and keep some for further operations.
 * 
 * # <weight>
 * We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
 * # </weight>
 */
export interface PhragmenElectionCall_vote {
  __kind: 'vote'
  votes: Uint8Array[]
  value: bigint
}

/**
 * Remove `origin` as a voter.
 * 
 * This removes the lock and returns the deposit.
 * 
 * The dispatch origin of this call must be signed and be a voter.
 */
export interface PhragmenElectionCall_remove_voter {
  __kind: 'remove_voter'
}

/**
 * Submit oneself for candidacy. A fixed amount of deposit is recorded.
 * 
 * All candidates are wiped at the end of the term. They either become a member/runner-up,
 * or leave the system while their deposit is slashed.
 * 
 * The dispatch origin of this call must be signed.
 * 
 * ### Warning
 * 
 * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
 * to get their deposit back. Losing the spot in an election will always lead to a slash.
 * 
 * # <weight>
 * The number of current candidates must be provided as witness data.
 * # </weight>
 */
export interface PhragmenElectionCall_submit_candidacy {
  __kind: 'submit_candidacy'
  candidateCount: number
}

/**
 * Renounce one's intention to be a candidate for the next election round. 3 potential
 * outcomes exist:
 * 
 * - `origin` is a candidate and not elected in any set. In this case, the deposit is
 *   unreserved, returned and origin is removed as a candidate.
 * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
 *   origin is removed as a runner-up.
 * - `origin` is a current member. In this case, the deposit is unreserved and origin is
 *   removed as a member, consequently not being a candidate for the next round anymore.
 *   Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
 *   are immediately used. If the prime is renouncing, then no prime will exist until the
 *   next round.
 * 
 * The dispatch origin of this call must be signed, and have one of the above roles.
 * 
 * # <weight>
 * The type of renouncing must be provided as witness data.
 * # </weight>
 */
export interface PhragmenElectionCall_renounce_candidacy {
  __kind: 'renounce_candidacy'
  renouncing: Renouncing
}

/**
 * Remove a particular member from the set. This is effective immediately and the bond of
 * the outgoing member is slashed.
 * 
 * If a runner-up is available, then the best runner-up will be removed and replaces the
 * outgoing member. Otherwise, a new phragmen election is started.
 * 
 * The dispatch origin of this call must be root.
 * 
 * Note that this does not affect the designated block number of the next election.
 * 
 * # <weight>
 * If we have a replacement, we use a small weight. Else, since this is a root call and
 * will go into phragmen, we assume full block for now.
 * # </weight>
 */
export interface PhragmenElectionCall_remove_member {
  __kind: 'remove_member'
  who: MultiAddress
  hasReplacement: boolean
}

/**
 * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
 * deposit of the removed voters are returned.
 * 
 * This is an root function to be used only for cleaning the state.
 * 
 * The dispatch origin of this call must be root.
 * 
 * # <weight>
 * The total number of voters and those that are defunct must be provided as witness data.
 * # </weight>
 */
export interface PhragmenElectionCall_clean_defunct_voters {
  __kind: 'clean_defunct_voters'
  numVoters: number
  numDefunct: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilMembershipCall = CouncilMembershipCall_add_member | CouncilMembershipCall_remove_member | CouncilMembershipCall_swap_member | CouncilMembershipCall_reset_members | CouncilMembershipCall_change_key | CouncilMembershipCall_set_prime | CouncilMembershipCall_clear_prime

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface CouncilMembershipCall_add_member {
  __kind: 'add_member'
  who: Uint8Array
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface CouncilMembershipCall_remove_member {
  __kind: 'remove_member'
  who: Uint8Array
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface CouncilMembershipCall_swap_member {
  __kind: 'swap_member'
  remove: Uint8Array
  add: Uint8Array
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface CouncilMembershipCall_reset_members {
  __kind: 'reset_members'
  members: Uint8Array[]
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface CouncilMembershipCall_change_key {
  __kind: 'change_key'
  new: Uint8Array
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface CouncilMembershipCall_set_prime {
  __kind: 'set_prime'
  who: Uint8Array
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface CouncilMembershipCall_clear_prime {
  __kind: 'clear_prime'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_swap_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_change_key | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_clear_prime

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface TechnicalMembershipCall_add_member {
  __kind: 'add_member'
  who: Uint8Array
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalMembershipCall_remove_member {
  __kind: 'remove_member'
  who: Uint8Array
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalMembershipCall_swap_member {
  __kind: 'swap_member'
  remove: Uint8Array
  add: Uint8Array
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface TechnicalMembershipCall_reset_members {
  __kind: 'reset_members'
  members: Uint8Array[]
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface TechnicalMembershipCall_change_key {
  __kind: 'change_key'
  new: Uint8Array
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_set_prime {
  __kind: 'set_prime'
  who: Uint8Array
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_clear_prime {
  __kind: 'clear_prime'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcmpQueueCall = XcmpQueueCall_service_overweight | XcmpQueueCall_suspend_xcm_execution | XcmpQueueCall_resume_xcm_execution | XcmpQueueCall_update_suspend_threshold | XcmpQueueCall_update_drop_threshold | XcmpQueueCall_update_resume_threshold | XcmpQueueCall_update_threshold_weight | XcmpQueueCall_update_weight_restrict_decay | XcmpQueueCall_update_xcmp_max_individual_weight

/**
 * Services a single overweight XCM.
 * 
 * - `origin`: Must pass `ExecuteOverweightOrigin`.
 * - `index`: The index of the overweight XCM to service
 * - `weight_limit`: The amount of weight that XCM execution may take.
 * 
 * Errors:
 * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
 * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
 * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
 * 
 * Events:
 * - `OverweightServiced`: On success.
 */
export interface XcmpQueueCall_service_overweight {
  __kind: 'service_overweight'
  index: bigint
  weightLimit: bigint
}

/**
 * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
 * 
 * - `origin`: Must pass `ControllerOrigin`.
 */
export interface XcmpQueueCall_suspend_xcm_execution {
  __kind: 'suspend_xcm_execution'
}

/**
 * Resumes all XCM executions for the XCMP queue.
 * 
 * Note that this function doesn't change the status of the in/out bound channels.
 * 
 * - `origin`: Must pass `ControllerOrigin`.
 */
export interface XcmpQueueCall_resume_xcm_execution {
  __kind: 'resume_xcm_execution'
}

/**
 * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
 * suspend their sending.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.suspend_value`
 */
export interface XcmpQueueCall_update_suspend_threshold {
  __kind: 'update_suspend_threshold'
  new: number
}

/**
 * Overwrites the number of pages of messages which must be in the queue after which we drop any further
 * messages from the channel.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.drop_threshold`
 */
export interface XcmpQueueCall_update_drop_threshold {
  __kind: 'update_drop_threshold'
  new: number
}

/**
 * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
 * message sending may recommence after it has been suspended.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.resume_threshold`                                
 */
export interface XcmpQueueCall_update_resume_threshold {
  __kind: 'update_resume_threshold'
  new: number
}

/**
 * Overwrites the amount of remaining weight under which we stop processing messages.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.threshold_weight`                                
 */
export interface XcmpQueueCall_update_threshold_weight {
  __kind: 'update_threshold_weight'
  new: bigint
}

/**
 * Overwrites the speed to which the available weight approaches the maximum weight.
 * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.                                
 */
export interface XcmpQueueCall_update_weight_restrict_decay {
  __kind: 'update_weight_restrict_decay'
  new: bigint
}

/**
 * Overwrite the maximum amount of weight any individual message may consume.
 * Messages above this weight go into the overweight queue and may only be serviced explicitly.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.                                
 */
export interface XcmpQueueCall_update_xcmp_max_individual_weight {
  __kind: 'update_xcmp_max_individual_weight'
  new: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets

export interface PolkadotXcmCall_send {
  __kind: 'send'
  dest: VersionedMultiLocation
  message: VersionedXcm
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
 * fee-weight is calculated locally and thus remote weights are assumed to be equal to
 * local weights.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_teleport_assets {
  __kind: 'teleport_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 * a notification XCM.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
 * fee-weight is calculated locally and thus remote weights are assumed to be equal to
 * local weights.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
  __kind: 'reserve_transfer_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
}

/**
 * Execute an XCM message from a local, signed, origin.
 * 
 * An event is deposited indicating whether `msg` could be executed completely or only
 * partially.
 * 
 * No more than `max_weight` will be used in its attempted execution. If this is less than the
 * maximum amount of weight that the message could take to be executed, then no execution
 * attempt will be made.
 * 
 * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
 * to completion; only that *some* of it was executed.
 */
export interface PolkadotXcmCall_execute {
  __kind: 'execute'
  message: Type_310
  maxWeight: bigint
}

/**
 * Extoll that a particular destination can be communicated with through a particular
 * version of XCM.
 * 
 * - `origin`: Must be Root.
 * - `location`: The destination that is being described.
 * - `xcm_version`: The latest version of XCM that `location` supports.
 */
export interface PolkadotXcmCall_force_xcm_version {
  __kind: 'force_xcm_version'
  location: V1MultiLocation
  xcmVersion: number
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 * 
 * - `origin`: Must be Root.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface PolkadotXcmCall_force_default_xcm_version {
  __kind: 'force_default_xcm_version'
  maybeXcmVersion: (number | undefined)
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we should subscribe for XCM version notifications.
 */
export interface PolkadotXcmCall_force_subscribe_version_notify {
  __kind: 'force_subscribe_version_notify'
  location: VersionedMultiLocation
}

/**
 * Require that a particular destination should no longer notify us regarding any XCM
 * version changes.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we are currently subscribed for XCM version
 *   notifications which we no longer desire.
 */
export interface PolkadotXcmCall_force_unsubscribe_version_notify {
  __kind: 'force_unsubscribe_version_notify'
  location: VersionedMultiLocation
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 * a notification XCM.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_reserve_transfer_assets {
  __kind: 'limited_reserve_transfer_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
  weightLimit: V2WeightLimit
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_teleport_assets {
  __kind: 'limited_teleport_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
  weightLimit: V2WeightLimit
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CumulusXcmCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 * Service a single overweight message.
 * 
 * - `origin`: Must pass `ExecuteOverweightOrigin`.
 * - `index`: The index of the overweight message to service.
 * - `weight_limit`: The amount of weight that message execution may take.
 * 
 * Errors:
 * - `Unknown`: Message of `index` is unknown.
 * - `OverLimit`: Message execution may use greater than `weight_limit`.
 * 
 * Events:
 * - `OverweightServiced`: On success.
 */
export interface DmpQueueCall_service_overweight {
  __kind: 'service_overweight'
  index: bigint
  weightLimit: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all | UtilityCall_dispatch_as

/**
 * Send a batch of dispatch calls.
 * 
 * May be called from any origin.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then call are dispatch without checking origin filter. (This includes
 * bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 * 
 * This will return `Ok` in all circumstances. To determine the success of the batch, an
 * event is deposited. If a call failed and the batch was interrupted, then the
 * `BatchInterrupted` event is deposited, along with the number of successful calls made
 * and the error of the failed call. If all were successful, then the `BatchCompleted`
 * event is deposited.
 */
export interface UtilityCall_batch {
  __kind: 'batch'
  calls: Call[]
}

/**
 * Send a call through an indexed pseudonym of the sender.
 * 
 * Filter from origin are passed along. The call will be dispatched with an origin which
 * use the same filter as the origin of this call.
 * 
 * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 * because you expect `proxy` to have been used prior in the call stack and you do not want
 * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 * in the Multisig pallet instead.
 * 
 * NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 * The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
  __kind: 'as_derivative'
  index: number
  call: Call
}

/**
 * Send a batch of dispatch calls and atomically execute them.
 * The whole transaction will rollback and fail if any of the calls failed.
 * 
 * May be called from any origin.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then call are dispatch without checking origin filter. (This includes
 * bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 */
export interface UtilityCall_batch_all {
  __kind: 'batch_all'
  calls: Call[]
}

/**
 * Dispatches a function call with a provided origin.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
 * # </weight>
 */
export interface UtilityCall_dispatch_as {
  __kind: 'dispatch_as'
  asOrigin: OriginCaller
  call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 * Anonymously schedule a task.
 */
export interface SchedulerCall_schedule {
  __kind: 'schedule'
  when: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: MaybeHashed
}

/**
 * Cancel an anonymously scheduled task.
 */
export interface SchedulerCall_cancel {
  __kind: 'cancel'
  when: number
  index: number
}

/**
 * Schedule a named task.
 */
export interface SchedulerCall_schedule_named {
  __kind: 'schedule_named'
  id: Uint8Array
  when: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: MaybeHashed
}

/**
 * Cancel a named scheduled task.
 */
export interface SchedulerCall_cancel_named {
  __kind: 'cancel_named'
  id: Uint8Array
}

/**
 * Anonymously schedule a task after a delay.
 * 
 * # <weight>
 * Same as [`schedule`].
 * # </weight>
 */
export interface SchedulerCall_schedule_after {
  __kind: 'schedule_after'
  after: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: MaybeHashed
}

/**
 * Schedule a named task after a delay.
 * 
 * # <weight>
 * Same as [`schedule_named`](Self::schedule_named).
 * # </weight>
 */
export interface SchedulerCall_schedule_named_after {
  __kind: 'schedule_named_after'
  id: Uint8Array
  after: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: MaybeHashed
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ProxyCall = ProxyCall_proxy | ProxyCall_add_proxy | ProxyCall_remove_proxy | ProxyCall_remove_proxies | ProxyCall_anonymous | ProxyCall_kill_anonymous | ProxyCall_announce | ProxyCall_remove_announcement | ProxyCall_reject_announcement | ProxyCall_proxy_announced

/**
 * Dispatch the given `call` from an account that the sender is authorised for through
 * `add_proxy`.
 * 
 * Removes any corresponding announcement(s).
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_proxy {
  __kind: 'proxy'
  real: Uint8Array
  forceProxyType: (ProxyType | undefined)
  call: Call
}

/**
 * Register a proxy account for the sender that is able to make calls on its behalf.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `proxy`: The account that the `caller` would like to make a proxy.
 * - `proxy_type`: The permissions allowed for this proxy account.
 * - `delay`: The announcement period required of the initial proxy. Will generally be
 * zero.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_add_proxy {
  __kind: 'add_proxy'
  delegate: Uint8Array
  proxyType: ProxyType
  delay: number
}

/**
 * Unregister a proxy account for the sender.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `proxy`: The account that the `caller` would like to remove as a proxy.
 * - `proxy_type`: The permissions currently enabled for the removed proxy account.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_remove_proxy {
  __kind: 'remove_proxy'
  delegate: Uint8Array
  proxyType: ProxyType
  delay: number
}

/**
 * Unregister all proxy accounts for the sender.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * WARNING: This may be called on accounts created by `anonymous`, however if done, then
 * the unreserved fees will be inaccessible. **All access to this account will be lost.**
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_remove_proxies {
  __kind: 'remove_proxies'
}

/**
 * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 * initialize it with a proxy of `proxy_type` for `origin` sender.
 * 
 * Requires a `Signed` origin.
 * 
 * - `proxy_type`: The type of the proxy that the sender will be registered as over the
 * new account. This will almost always be the most permissive `ProxyType` possible to
 * allow for maximum flexibility.
 * - `index`: A disambiguation index, in case this is called multiple times in the same
 * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
 * want to use `0`.
 * - `delay`: The announcement period required of the initial proxy. Will generally be
 * zero.
 * 
 * Fails with `Duplicate` if this has already been called in this transaction, from the
 * same sender, with the same parameters.
 * 
 * Fails if there are insufficient funds to pay for deposit.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 * TODO: Might be over counting 1 read
 */
export interface ProxyCall_anonymous {
  __kind: 'anonymous'
  proxyType: ProxyType
  delay: number
  index: number
}

/**
 * Removes a previously spawned anonymous proxy.
 * 
 * WARNING: **All access to this account will be lost.** Any funds held in it will be
 * inaccessible.
 * 
 * Requires a `Signed` origin, and the sender account must have been created by a call to
 * `anonymous` with corresponding parameters.
 * 
 * - `spawner`: The account that originally called `anonymous` to create this account.
 * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
 * - `proxy_type`: The proxy type originally passed to `anonymous`.
 * - `height`: The height of the chain when the call to `anonymous` was processed.
 * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
 * 
 * Fails with `NoPermission` in case the caller is not a previously created anonymous
 * account whose `anonymous` call has corresponding parameters.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_kill_anonymous {
  __kind: 'kill_anonymous'
  spawner: Uint8Array
  proxyType: ProxyType
  index: number
  height: number
  extIndex: number
}

/**
 * Publish the hash of a proxy-call that will be made in the future.
 * 
 * This must be called some number of blocks before the corresponding `proxy` is attempted
 * if the delay associated with the proxy relationship is greater than zero.
 * 
 * No more than `MaxPending` announcements may be made at any one time.
 * 
 * This will take a deposit of `AnnouncementDepositFactor` as well as
 * `AnnouncementDepositBase` if there are no other pending announcements.
 * 
 * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 * # <weight>
 * Weight is a function of:
 * - A: the number of announcements made.
 * - P: the number of proxies the user has.
 * # </weight>
 */
export interface ProxyCall_announce {
  __kind: 'announce'
  real: Uint8Array
  callHash: Uint8Array
}

/**
 * Remove a given announcement.
 * 
 * May be called by a proxy account to remove a call they previously announced and return
 * the deposit.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 * # <weight>
 * Weight is a function of:
 * - A: the number of announcements made.
 * - P: the number of proxies the user has.
 * # </weight>
 */
export interface ProxyCall_remove_announcement {
  __kind: 'remove_announcement'
  real: Uint8Array
  callHash: Uint8Array
}

/**
 * Remove the given announcement of a delegate.
 * 
 * May be called by a target (proxied) account to remove a call that one of their delegates
 * (`delegate`) has announced they want to execute. The deposit is returned.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `delegate`: The account that previously announced the call.
 * - `call_hash`: The hash of the call to be made.
 * 
 * # <weight>
 * Weight is a function of:
 * - A: the number of announcements made.
 * - P: the number of proxies the user has.
 * # </weight>
 */
export interface ProxyCall_reject_announcement {
  __kind: 'reject_announcement'
  delegate: Uint8Array
  callHash: Uint8Array
}

/**
 * Dispatch the given `call` from an account that the sender is authorized for through
 * `add_proxy`.
 * 
 * Removes any corresponding announcement(s).
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 * 
 * # <weight>
 * Weight is a function of:
 * - A: the number of announcements made.
 * - P: the number of proxies the user has.
 * # </weight>
 */
export interface ProxyCall_proxy_announced {
  __kind: 'proxy_announced'
  delegate: Uint8Array
  real: Uint8Array
  forceProxyType: (ProxyType | undefined)
  call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

/**
 * Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `other_signatories`: The accounts (other than the sender) who are part of the
 * multi-signature, but do not participate in the approval process.
 * - `call`: The call to be executed.
 * 
 * Result is equivalent to the dispatched result.
 * 
 * # <weight>
 * O(Z + C) where Z is the length of the call and C its execution weight.
 * -------------------------------
 * - DB Weight: None
 * - Plus Call Weight
 * # </weight>
 */
export interface MultisigCall_as_multi_threshold_1 {
  __kind: 'as_multi_threshold_1'
  otherSignatories: Uint8Array[]
  call: Call
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * If there are enough, then dispatch the call.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call`: The call to be executed.
 * 
 * NOTE: Unless this is the final approval, you will generally want to use
 * `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 * on success, result is `Ok` and the result from the interior call, if it was executed,
 * may be found in the deposited `MultisigExecuted` event.
 * 
 * # <weight>
 * - `O(S + Z + Call)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - The weight of the `call`.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 * -------------------------------
 * - DB Weight:
 *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
 * - Plus Call Weight
 * # </weight>
 */
export interface MultisigCall_as_multi {
  __kind: 'as_multi'
  threshold: number
  otherSignatories: Uint8Array[]
  maybeTimepoint: (Timepoint | undefined)
  call: Uint8Array
  storeCall: boolean
  maxWeight: bigint
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 * ----------------------------------
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account]
 *     - Write: Multisig Storage, [Caller Account]
 * # </weight>
 */
export interface MultisigCall_approve_as_multi {
  __kind: 'approve_as_multi'
  threshold: number
  otherSignatories: Uint8Array[]
  maybeTimepoint: (Timepoint | undefined)
  callHash: Uint8Array
  maxWeight: bigint
}

/**
 * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 * for this operation will be unreserved on success.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `timepoint`: The timepoint (block number and transaction index) of the first approval
 * transaction for this dispatch.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - One event.
 * - I/O: 1 read `O(S)`, one remove.
 * - Storage: removes one item.
 * ----------------------------------
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
 *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
 * # </weight>
 */
export interface MultisigCall_cancel_as_multi {
  __kind: 'cancel_as_multi'
  threshold: number
  otherSignatories: Uint8Array[]
  timepoint: Timepoint
  callHash: Uint8Array
}

/**
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_set_identity | IdentityCall_set_subs | IdentityCall_clear_identity | IdentityCall_request_judgement | IdentityCall_cancel_request | IdentityCall_set_fee | IdentityCall_set_account_id | IdentityCall_set_fields | IdentityCall_provide_judgement | IdentityCall_kill_identity | IdentityCall_add_sub | IdentityCall_rename_sub | IdentityCall_remove_sub | IdentityCall_quit_sub

/**
 * Add a registrar to the system.
 * 
 * The dispatch origin for this call must be `T::RegistrarOrigin`.
 * 
 * - `account`: the account of the registrar.
 * 
 * Emits `RegistrarAdded` if successful.
 * 
 * # <weight>
 * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
 * - One storage mutation (codec `O(R)`).
 * - One event.
 * # </weight>
 */
export interface IdentityCall_add_registrar {
  __kind: 'add_registrar'
  account: Uint8Array
}

/**
 * Set an account's identity information and reserve the appropriate deposit.
 * 
 * If the account already has identity information, the deposit is taken as part payment
 * for the new deposit.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `info`: The identity information.
 * 
 * Emits `IdentitySet` if successful.
 * 
 * # <weight>
 * - `O(X + X' + R)`
 *   - where `X` additional-field-count (deposit-bounded and code-bounded)
 *   - where `R` judgements-count (registrar-count-bounded)
 * - One balance reserve operation.
 * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
 * - One event.
 * # </weight>
 */
export interface IdentityCall_set_identity {
  __kind: 'set_identity'
  info: IdentityInfo
}

/**
 * Set the sub-accounts of the sender.
 * 
 * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * - `subs`: The identity's (new) sub-accounts.
 * 
 * # <weight>
 * - `O(P + S)`
 *   - where `P` old-subs-count (hard- and deposit-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 * - At most one balance operations.
 * - DB:
 *   - `P + S` storage mutations (codec complexity `O(1)`)
 *   - One storage read (codec complexity `O(P)`).
 *   - One storage write (codec complexity `O(S)`).
 *   - One storage-exists (`IdentityOf::contains_key`).
 * # </weight>
 */
export interface IdentityCall_set_subs {
  __kind: 'set_subs'
  subs: [Uint8Array, Data][]
}

/**
 * Clear an account's identity info and all sub-accounts and return all deposits.
 * 
 * Payment: All reserved balances on the account are returned.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * Emits `IdentityCleared` if successful.
 * 
 * # <weight>
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 * - One balance-unreserve operation.
 * - `2` storage reads and `S + 2` storage deletions.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_clear_identity {
  __kind: 'clear_identity'
}

/**
 * Request a judgement from a registrar.
 * 
 * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 * given.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is requested.
 * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 * 
 * ```nocompile
 * Self::registrars().get(reg_index).unwrap().fee
 * ```
 * 
 * Emits `JudgementRequested` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-reserve operation.
 * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_request_judgement {
  __kind: 'request_judgement'
  regIndex: number
  maxFee: bigint
}

/**
 * Cancel a previous request.
 * 
 * Payment: A previously reserved deposit is returned on success.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is no longer requested.
 * 
 * Emits `JudgementUnrequested` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-reserve operation.
 * - One storage mutation `O(R + X)`.
 * - One event
 * # </weight>
 */
export interface IdentityCall_cancel_request {
  __kind: 'cancel_request'
  regIndex: number
}

/**
 * Set the fee required for a judgement to be requested from a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fee`: the new fee.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_fee {
  __kind: 'set_fee'
  index: number
  fee: bigint
}

/**
 * Change the account associated with a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `new`: the new account ID.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_account_id {
  __kind: 'set_account_id'
  index: number
  new: Uint8Array
}

/**
 * Set the field information for a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fields`: the fields that the registrar concerns themselves with.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_fields {
  __kind: 'set_fields'
  index: number
  fields: bigint
}

/**
 * Provide a judgement for an account's identity.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `reg_index`.
 * 
 * - `reg_index`: the index of the registrar whose judgement is being made.
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 * 
 * Emits `JudgementGiven` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-transfer operation.
 * - Up to one account-lookup operation.
 * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_provide_judgement {
  __kind: 'provide_judgement'
  regIndex: number
  target: MultiAddress
  judgement: Judgement
}

/**
 * Remove an account's identity and sub-account information and slash the deposits.
 * 
 * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 * `Slash`. Verification request deposits are not returned; they should be cancelled
 * manually using `cancel_request`.
 * 
 * The dispatch origin for this call must match `T::ForceOrigin`.
 * 
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * 
 * Emits `IdentityKilled` if successful.
 * 
 * # <weight>
 * - `O(R + S + X)`.
 * - One balance-reserve operation.
 * - `S + 2` storage mutations.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_kill_identity {
  __kind: 'kill_identity'
  target: MultiAddress
}

/**
 * Add the given account to the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_add_sub {
  __kind: 'add_sub'
  sub: MultiAddress
  data: Data
}

/**
 * Alter the associated name of the given sub-account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_rename_sub {
  __kind: 'rename_sub'
  sub: MultiAddress
  data: Data
}

/**
 * Remove the given account from the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_remove_sub {
  __kind: 'remove_sub'
  sub: MultiAddress
}

/**
 * Remove the sender as a sub-account.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender (*not* the original depositor).
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * super-identity.
 * 
 * NOTE: This should not normally be used, but is provided in the case that the non-
 * controller of an account is maliciously registered as a sub-account.
 */
export interface IdentityCall_quit_sub {
  __kind: 'quit_sub'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingCall = VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer | VestingCall_force_vested_transfer | VestingCall_force_set_vested | VestingCall_init_vesting_start_at | VestingCall_set_vesting_per_block | VestingCall_force_set_cliff

/**
 * Unlock any vested funds of the sender account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have funds still
 * locked under this pallet.
 * 
 * Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 2 Reads, 2 Writes
 *     - Reads: Vesting Storage, Balances Locks, [Sender Account]
 *     - Writes: Vesting Storage, Balances Locks, [Sender Account]
 * # </weight>
 */
export interface VestingCall_vest {
  __kind: 'vest'
}

/**
 * Unlock any vested funds of a `target` account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `target`: The account whose vested funds should be unlocked. Must have funds still
 * locked under this pallet.
 * 
 * Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 3 Reads, 3 Writes
 *     - Reads: Vesting Storage, Balances Locks, Target Account
 *     - Writes: Vesting Storage, Balances Locks, Target Account
 * # </weight>
 */
export interface VestingCall_vest_other {
  __kind: 'vest_other'
  target: MultiAddress
}

/**
 * Create a vested transfer.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `target`: The account that should be transferred the vested funds.
 * - `amount`: The amount of funds to transfer and will be vested.
 * - `schedule`: The vesting schedule attached to the transfer.
 * 
 * Emits `VestingCreated`.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 3 Reads, 3 Writes
 *     - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 *     - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 * # </weight>
 */
export interface VestingCall_vested_transfer {
  __kind: 'vested_transfer'
  target: MultiAddress
  schedule: VestingInfo
}

/**
 * Force a vested transfer.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `source`: The account whose funds should be transferred.
 * - `target`: The account that should be transferred the vested funds.
 * - `amount`: The amount of funds to transfer and will be vested.
 * - `schedule`: The vesting schedule attached to the transfer.
 * 
 * Emits `VestingCreated`.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 4 Reads, 4 Writes
 *     - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
 *     - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
 * # </weight>
 */
export interface VestingCall_force_vested_transfer {
  __kind: 'force_vested_transfer'
  source: MultiAddress
  target: MultiAddress
  schedule: VestingInfo
}

export interface VestingCall_force_set_vested {
  __kind: 'force_set_vested'
  source: MultiAddress
  target: MultiAddress
  schedule: VestingInfo
}

export interface VestingCall_init_vesting_start_at {
  __kind: 'init_vesting_start_at'
  vestingStartAt: number
}

export interface VestingCall_set_vesting_per_block {
  __kind: 'set_vesting_per_block'
  target: MultiAddress
  perBlock: bigint
}

export interface VestingCall_force_set_cliff {
  __kind: 'force_set_cliff'
  target: MultiAddress
  cliffBlock: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal

/**
 * Put forward a suggestion for spending. A deposit proportional to the value
 * is reserved and slashed if the proposal is rejected. It is returned once the
 * proposal is awarded.
 * 
 * # <weight>
 * - Complexity: O(1)
 * - DbReads: `ProposalCount`, `origin account`
 * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
 * # </weight>
 */
export interface TreasuryCall_propose_spend {
  __kind: 'propose_spend'
  value: bigint
  beneficiary: MultiAddress
}

/**
 * Reject a proposed spend. The original deposit will be slashed.
 * 
 * May only be called from `T::RejectOrigin`.
 * 
 * # <weight>
 * - Complexity: O(1)
 * - DbReads: `Proposals`, `rejected proposer account`
 * - DbWrites: `Proposals`, `rejected proposer account`
 * # </weight>
 */
export interface TreasuryCall_reject_proposal {
  __kind: 'reject_proposal'
  proposalId: number
}

/**
 * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 * and the original deposit will be returned.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - Complexity: O(1).
 * - DbReads: `Proposals`, `Approvals`
 * - DbWrite: `Approvals`
 * # </weight>
 */
export interface TreasuryCall_approve_proposal {
  __kind: 'approve_proposal'
  proposalId: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BountiesCall = BountiesCall_propose_bounty | BountiesCall_approve_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator | BountiesCall_accept_curator | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry

/**
 * Propose a new bounty.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
 * or slashed when rejected.
 * 
 * - `curator`: The curator account whom will manage this bounty.
 * - `fee`: The curator fee.
 * - `value`: The total payment amount of this bounty, curator fee included.
 * - `description`: The description of this bounty.
 */
export interface BountiesCall_propose_bounty {
  __kind: 'propose_bounty'
  value: bigint
  description: Uint8Array
}

/**
 * Approve a bounty proposal. At a later time, the bounty will be funded and become active
 * and the original deposit will be returned.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_approve_bounty {
  __kind: 'approve_bounty'
  bountyId: number
}

/**
 * Assign a curator to a funded bounty.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_propose_curator {
  __kind: 'propose_curator'
  bountyId: number
  curator: MultiAddress
  fee: bigint
}

/**
 * Unassign curator from a bounty.
 * 
 * This function can only be called by the `RejectOrigin` a signed origin.
 * 
 * If this function is called by the `RejectOrigin`, we assume that the curator is
 * malicious or inactive. As a result, we will slash the curator when possible.
 * 
 * If the origin is the curator, we take this as a sign they are unable to do their job and
 * they willingly give up. We could slash them, but for now we allow them to recover their
 * deposit and exit without issue. (We may want to change this if it is abused.)
 * 
 * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
 * anyone in the community to call out that a curator is not doing their due diligence, and
 * we should pick a new curator. In this case the curator should also be slashed.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_unassign_curator {
  __kind: 'unassign_curator'
  bountyId: number
}

/**
 * Accept the curator role for a bounty.
 * A deposit will be reserved from curator and refund upon successful payout.
 * 
 * May only be called from the curator.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_accept_curator {
  __kind: 'accept_curator'
  bountyId: number
}

/**
 * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
 * after a delay.
 * 
 * The dispatch origin for this call must be the curator of this bounty.
 * 
 * - `bounty_id`: Bounty ID to award.
 * - `beneficiary`: The beneficiary account whom will receive the payout.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_award_bounty {
  __kind: 'award_bounty'
  bountyId: number
  beneficiary: MultiAddress
}

/**
 * Claim the payout from an awarded bounty after payout delay.
 * 
 * The dispatch origin for this call must be the beneficiary of this bounty.
 * 
 * - `bounty_id`: Bounty ID to claim.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_claim_bounty {
  __kind: 'claim_bounty'
  bountyId: number
}

/**
 * Cancel a proposed or active bounty. All the funds will be sent to treasury and
 * the curator deposit will be unreserved if possible.
 * 
 * Only `T::RejectOrigin` is able to cancel a bounty.
 * 
 * - `bounty_id`: Bounty ID to cancel.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_close_bounty {
  __kind: 'close_bounty'
  bountyId: number
}

/**
 * Extend the expiry time of an active bounty.
 * 
 * The dispatch origin for this call must be the curator of this bounty.
 * 
 * - `bounty_id`: Bounty ID to extend.
 * - `remark`: additional information.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_extend_bounty_expiry {
  __kind: 'extend_bounty_expiry'
  bountyId: number
  remark: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TipsCall = TipsCall_report_awesome | TipsCall_retract_tip | TipsCall_tip_new | TipsCall_tip | TipsCall_close_tip | TipsCall_slash_tip

/**
 * Report something `reason` that deserves a tip and claim any eventual the finder's fee.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 * `DataDepositPerByte` for each byte in `reason`.
 * 
 * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *   a UTF-8-encoded URL.
 * - `who`: The account which should be credited for the tip.
 * 
 * Emits `NewTip` if successful.
 * 
 * # <weight>
 * - Complexity: `O(R)` where `R` length of `reason`.
 *   - encoding and hashing of 'reason'
 * - DbReads: `Reasons`, `Tips`
 * - DbWrites: `Reasons`, `Tips`
 * # </weight>
 */
export interface TipsCall_report_awesome {
  __kind: 'report_awesome'
  reason: Uint8Array
  who: Uint8Array
}

/**
 * Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
 * 
 * If successful, the original deposit will be unreserved.
 * 
 * The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
 * must have been reported by the signing account through `report_awesome` (and not
 * through `tip_new`).
 * 
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 * Emits `TipRetracted` if successful.
 * 
 * # <weight>
 * - Complexity: `O(1)`
 *   - Depends on the length of `T::Hash` which is fixed.
 * - DbReads: `Tips`, `origin account`
 * - DbWrites: `Reasons`, `Tips`, `origin account`
 * # </weight>
 */
export interface TipsCall_retract_tip {
  __kind: 'retract_tip'
  hash: Uint8Array
}

/**
 * Give a tip for something new; no finder's fee will be taken.
 * 
 * The dispatch origin for this call must be _Signed_ and the signing account must be a
 * member of the `Tippers` set.
 * 
 * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *   a UTF-8-encoded URL.
 * - `who`: The account which should be credited for the tip.
 * - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *   value of active tippers will be given to the `who`.
 * 
 * Emits `NewTip` if successful.
 * 
 * # <weight>
 * - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
 *   - `O(T)`: decoding `Tipper` vec of length `T`. `T` is charged as upper bound given by
 *     `ContainsLengthBound`. The actual cost depends on the implementation of
 *     `T::Tippers`.
 *   - `O(R)`: hashing and encoding of reason of length `R`
 * - DbReads: `Tippers`, `Reasons`
 * - DbWrites: `Reasons`, `Tips`
 * # </weight>
 */
export interface TipsCall_tip_new {
  __kind: 'tip_new'
  reason: Uint8Array
  who: Uint8Array
  tipValue: bigint
}

/**
 * Declare a tip value for an already-open tip.
 * 
 * The dispatch origin for this call must be _Signed_ and the signing account must be a
 * member of the `Tippers` set.
 * 
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
 *   account ID.
 * - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *   value of active tippers will be given to the `who`.
 * 
 * Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
 * has started.
 * 
 * # <weight>
 * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
 *   `T`, insert tip and check closing, `T` is charged as upper bound given by
 *   `ContainsLengthBound`. The actual cost depends on the implementation of `T::Tippers`.
 * 
 *   Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
 *   is weighted as if almost full i.e of length `T-1`.
 * - DbReads: `Tippers`, `Tips`
 * - DbWrites: `Tips`
 * # </weight>
 */
export interface TipsCall_tip {
  __kind: 'tip'
  hash: Uint8Array
  tipValue: bigint
}

/**
 * Close and payout a tip.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * The tip identified by `hash` must have finished its countdown period.
 * 
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 * # <weight>
 * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
 *   `T`. `T` is charged as upper bound given by `ContainsLengthBound`. The actual cost
 *   depends on the implementation of `T::Tippers`.
 * - DbReads: `Tips`, `Tippers`, `tip finder`
 * - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
 * # </weight>
 */
export interface TipsCall_close_tip {
  __kind: 'close_tip'
  hash: Uint8Array
}

/**
 * Remove and slash an already-open tip.
 * 
 * May only be called from `T::RejectOrigin`.
 * 
 * As a result, the finder is slashed and the deposits are lost.
 * 
 * Emits `TipSlashed` if successful.
 * 
 * # <weight>
 *   `T` is charged as upper bound given by `ContainsLengthBound`.
 *   The actual cost depends on the implementation of `T::Tippers`.
 * # </weight>
 */
export interface TipsCall_slash_tip {
  __kind: 'slash_tip'
  hash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PreimageCall = PreimageCall_note_preimage | PreimageCall_unnote_preimage | PreimageCall_request_preimage | PreimageCall_unrequest_preimage

/**
 * Register a preimage on-chain.
 * 
 * If the preimage was previously requested, no fees or deposits are taken for providing
 * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
 */
export interface PreimageCall_note_preimage {
  __kind: 'note_preimage'
  bytes: Uint8Array
}

/**
 * Clear an unrequested preimage from the runtime storage.
 */
export interface PreimageCall_unnote_preimage {
  __kind: 'unnote_preimage'
  hash: Uint8Array
}

/**
 * Request a preimage be uploaded to the chain without paying any fees or deposits.
 * 
 * If the preimage requests has already been provided on-chain, we unreserve any deposit
 * a user may have paid, and take the control of the preimage out of their hands.
 */
export interface PreimageCall_request_preimage {
  __kind: 'request_preimage'
  hash: Uint8Array
}

/**
 * Clear a previously made request for a preimage.
 * 
 * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
 */
export interface PreimageCall_unrequest_preimage {
  __kind: 'unrequest_preimage'
  hash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset | XTokensCall_transfer_with_fee | XTokensCall_transfer_multiasset_with_fee | XTokensCall_transfer_multicurrencies | XTokensCall_transfer_multiassets

/**
 * Transfer native currencies.
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer {
  __kind: 'transfer'
  currencyId: CurrencyId
  amount: bigint
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Transfer `MultiAsset`.
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiasset {
  __kind: 'transfer_multiasset'
  asset: VersionedMultiAsset
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Transfer native currencies specifying the fee and amount as
 * separate.
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the amount to be spent to pay for execution in destination
 * chain. Both fee and amount will be subtracted form the callers
 * balance.
 * 
 * If `fee` is not high enough to cover for the execution costs in the
 * destination chain, then the assets will be trapped in the
 * destination chain
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_with_fee {
  __kind: 'transfer_with_fee'
  currencyId: CurrencyId
  amount: bigint
  fee: bigint
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Transfer `MultiAsset` specifying the fee and amount as separate.
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the multiasset to be spent to pay for execution in
 * destination chain. Both fee and amount will be subtracted form the
 * callers balance For now we only accept fee and asset having the same
 * `MultiLocation` id.
 * 
 * If `fee` is not high enough to cover for the execution costs in the
 * destination chain, then the assets will be trapped in the
 * destination chain
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiasset_with_fee {
  __kind: 'transfer_multiasset_with_fee'
  asset: VersionedMultiAsset
  fee: VersionedMultiAsset
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Transfer several currencies specifying the item to be used as fee
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the currencies tuple that we want to use for
 * payment
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multicurrencies {
  __kind: 'transfer_multicurrencies'
  currencies: [CurrencyId, bigint][]
  feeItem: number
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Transfer several `MultiAsset` specifying the item to be used as fee
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the MultiAssets that we want to use for
 * payment
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiassets {
  __kind: 'transfer_multiassets'
  assets: VersionedMultiAssets
  feeItem: number
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TokensCall = TokensCall_transfer | TokensCall_transfer_all | TokensCall_transfer_keep_alive | TokensCall_force_transfer | TokensCall_set_balance

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * It will decrease the total issuance of the system by the
 * `TransferFee`. If the sender's account is below the existential
 * deposit as a result of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_transfer {
  __kind: 'transfer'
  dest: MultiAddress
  currencyId: CurrencyId
  amount: bigint
}

/**
 * Transfer all remaining balance to the given account.
 * 
 * NOTE: This function only attempts to transfer _transferable_
 * balances. This means that any locked, reserved, or existential
 * deposits (when `keep_alive` is `true`), will not be transferred by
 * this function. To ensure that this function results in a killed
 * account, you might need to prepare the account by removing any
 * reference counters, storage deposits, etc...
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `keep_alive`: A boolean to determine if the `transfer_all`
 *   operation should send all of the funds the account has, causing
 *   the sender account to be killed (false), or transfer everything
 *   except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true).
 */
export interface TokensCall_transfer_all {
  __kind: 'transfer_all'
  dest: MultiAddress
  currencyId: CurrencyId
  keepAlive: boolean
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer
 * will not kill the origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_transfer_keep_alive {
  __kind: 'transfer_keep_alive'
  dest: MultiAddress
  currencyId: CurrencyId
  amount: bigint
}

/**
 * Exactly as `transfer`, except the origin must be root and the source
 * account may be specified.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `source`: The sender of the transfer.
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_force_transfer {
  __kind: 'force_transfer'
  source: MultiAddress
  dest: MultiAddress
  currencyId: CurrencyId
  amount: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it
 * will also decrease the total issuance of the system
 * (`TotalIssuance`). If the new free or reserved balance is below the
 * existential deposit, it will reap the `AccountInfo`.
 * 
 * The dispatch origin for this call is `root`.
 */
export interface TokensCall_set_balance {
  __kind: 'set_balance'
  who: MultiAddress
  currencyId: CurrencyId
  newFree: bigint
  newReserved: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CurrenciesCall = CurrenciesCall_transfer | CurrenciesCall_transfer_native_currency | CurrenciesCall_update_balance

/**
 * Transfer some balance to another account under `currency_id`.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrenciesCall_transfer {
  __kind: 'transfer'
  dest: MultiAddress
  currencyId: CurrencyId
  amount: bigint
}

/**
 * Transfer some native currency to another account.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrenciesCall_transfer_native_currency {
  __kind: 'transfer_native_currency'
  dest: MultiAddress
  amount: bigint
}

/**
 * update amount of account `who` under `currency_id`.
 * 
 * The dispatch origin of this call must be _Root_.
 */
export interface CurrenciesCall_update_balance {
  __kind: 'update_balance'
  who: MultiAddress
  currencyId: CurrencyId
  amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type OrmlXcmCall = OrmlXcmCall_send_as_sovereign

/**
 * Send an XCM message as parachain sovereign.
 */
export interface OrmlXcmCall_send_as_sovereign {
  __kind: 'send_as_sovereign'
  dest: VersionedMultiLocation
  message: VersionedXcm
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ZenlinkProtocolCall = ZenlinkProtocolCall_set_fee_receiver | ZenlinkProtocolCall_set_fee_point | ZenlinkProtocolCall_transfer | ZenlinkProtocolCall_transfer_to_parachain | ZenlinkProtocolCall_create_pair | ZenlinkProtocolCall_add_liquidity | ZenlinkProtocolCall_remove_liquidity | ZenlinkProtocolCall_swap_exact_assets_for_assets | ZenlinkProtocolCall_swap_assets_for_exact_assets | ZenlinkProtocolCall_bootstrap_create | ZenlinkProtocolCall_bootstrap_contribute | ZenlinkProtocolCall_bootstrap_claim | ZenlinkProtocolCall_bootstrap_end | ZenlinkProtocolCall_bootstrap_update | ZenlinkProtocolCall_bootstrap_refund | ZenlinkProtocolCall_bootstrap_charge_reward | ZenlinkProtocolCall_bootstrap_withdraw_reward

/**
 * Set the new receiver of the protocol fee.
 * 
 * # Arguments
 * 
 * - `send_to`:
 * (1) Some(receiver): it turn on the protocol fee and the new receiver account.
 * (2) None: it turn off the protocol fee.
 */
export interface ZenlinkProtocolCall_set_fee_receiver {
  __kind: 'set_fee_receiver'
  sendTo: (MultiAddress | undefined)
}

/**
 * Set the protocol fee point.
 * 
 * # Arguments
 * 
 * - `fee_point`:
 * The fee_point which integer between [0,30]
 * 0 means no protocol fee.
 * 30 means 0.3% * 100% = 0.0030.
 * default is 5 and means 0.3% * 1 / 6 = 0.0005.
 */
export interface ZenlinkProtocolCall_set_fee_point {
  __kind: 'set_fee_point'
  feePoint: number
}

/**
 * Move some assets from one holder to another.
 * 
 * # Arguments
 * 
 * - `asset_id`: The foreign id.
 * - `target`: The receiver of the foreign.
 * - `amount`: The amount of the foreign to transfer.
 */
export interface ZenlinkProtocolCall_transfer {
  __kind: 'transfer'
  assetId: AssetId
  recipient: MultiAddress
  amount: bigint
}

/**
 * Transfer zenlink assets to a sibling parachain.
 * 
 * Zenlink assets can be either native or foreign to the sending parachain.
 * 
 * # Arguments
 * 
 * - `asset_id`: Global identifier for a zenlink foreign
 * - `para_id`: Destination parachain
 * - `account`: Destination account
 * - `amount`: Amount to transfer
 */
export interface ZenlinkProtocolCall_transfer_to_parachain {
  __kind: 'transfer_to_parachain'
  assetId: AssetId
  paraId: number
  recipient: Uint8Array
  amount: bigint
  maxWeight: bigint
}

/**
 * Create pair by two assets.
 * 
 * The order of foreign dot effect result.
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up Pair
 * - `asset_1`: Asset which make up Pair
 */
export interface ZenlinkProtocolCall_create_pair {
  __kind: 'create_pair'
  asset0: AssetId
  asset1: AssetId
}

/**
 * Provide liquidity to a pair.
 * 
 * The order of foreign dot effect result.
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up pair
 * - `asset_1`: Asset which make up pair
 * - `amount_0_desired`: Maximum amount of asset_0 added to the pair
 * - `amount_1_desired`: Maximum amount of asset_1 added to the pair
 * - `amount_0_min`: Minimum amount of asset_0 added to the pair
 * - `amount_1_min`: Minimum amount of asset_1 added to the pair
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_add_liquidity {
  __kind: 'add_liquidity'
  asset0: AssetId
  asset1: AssetId
  amount0Desired: bigint
  amount1Desired: bigint
  amount0Min: bigint
  amount1Min: bigint
  deadline: number
}

/**
 * Extract liquidity.
 * 
 * The order of foreign dot effect result.
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up pair
 * - `asset_1`: Asset which make up pair
 * - `amount_asset_0_min`: Minimum amount of asset_0 to exact
 * - `amount_asset_1_min`: Minimum amount of asset_1 to exact
 * - `recipient`: Account that accepts withdrawal of assets
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_remove_liquidity {
  __kind: 'remove_liquidity'
  asset0: AssetId
  asset1: AssetId
  liquidity: bigint
  amount0Min: bigint
  amount1Min: bigint
  recipient: MultiAddress
  deadline: number
}

/**
 * Sell amount of foreign by path.
 * 
 * # Arguments
 * 
 * - `amount_in`: Amount of the foreign will be sold
 * - `amount_out_min`: Minimum amount of target foreign
 * - `path`: path can convert to pairs.
 * - `recipient`: Account that receive the target foreign
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_swap_exact_assets_for_assets {
  __kind: 'swap_exact_assets_for_assets'
  amountIn: bigint
  amountOutMin: bigint
  path: AssetId[]
  recipient: MultiAddress
  deadline: number
}

/**
 * Buy amount of foreign by path.
 * 
 * # Arguments
 * 
 * - `amount_out`: Amount of the foreign will be bought
 * - `amount_in_max`: Maximum amount of sold foreign
 * - `path`: path can convert to pairs.
 * - `recipient`: Account that receive the target foreign
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_swap_assets_for_exact_assets {
  __kind: 'swap_assets_for_exact_assets'
  amountOut: bigint
  amountInMax: bigint
  path: AssetId[]
  recipient: MultiAddress
  deadline: number
}

/**
 * Create bootstrap pair
 * 
 * The order of asset don't affect result.
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 * - `target_supply_0`: Target amount of asset_0 total contribute
 * - `target_supply_0`: Target amount of asset_1 total contribute
 * - `capacity_supply_0`: The max amount of asset_0 total contribute
 * - `capacity_supply_1`: The max amount of asset_1 total contribute
 * - `end`: The earliest ending block.
 */
export interface ZenlinkProtocolCall_bootstrap_create {
  __kind: 'bootstrap_create'
  asset0: AssetId
  asset1: AssetId
  targetSupply0: bigint
  targetSupply1: bigint
  capacitySupply0: bigint
  capacitySupply1: bigint
  end: number
  rewards: AssetId[]
  limits: [AssetId, bigint][]
}

/**
 * Contribute some asset to a bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 * - `amount_0_contribute`: The amount of asset_0 contribute to this bootstrap pair
 * - `amount_1_contribute`: The amount of asset_1 contribute to this bootstrap pair
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_bootstrap_contribute {
  __kind: 'bootstrap_contribute'
  asset0: AssetId
  asset1: AssetId
  amount0Contribute: bigint
  amount1Contribute: bigint
  deadline: number
}

/**
 * Claim lp asset from a bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_bootstrap_claim {
  __kind: 'bootstrap_claim'
  recipient: MultiAddress
  asset0: AssetId
  asset1: AssetId
  deadline: number
}

/**
 * End a bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 */
export interface ZenlinkProtocolCall_bootstrap_end {
  __kind: 'bootstrap_end'
  asset0: AssetId
  asset1: AssetId
}

/**
 * update a bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 * - `min_contribution_0`: The new min amount of asset_0 contribute
 * - `min_contribution_0`: The new min amount of asset_1 contribute
 * - `target_supply_0`: The new target amount of asset_0 total contribute
 * - `target_supply_0`: The new target amount of asset_1 total contribute
 * - `capacity_supply_0`: The new max amount of asset_0 total contribute
 * - `capacity_supply_1`: The new max amount of asset_1 total contribute
 * - `end`: The earliest ending block.
 */
export interface ZenlinkProtocolCall_bootstrap_update {
  __kind: 'bootstrap_update'
  asset0: AssetId
  asset1: AssetId
  targetSupply0: bigint
  targetSupply1: bigint
  capacitySupply0: bigint
  capacitySupply1: bigint
  end: number
  rewards: AssetId[]
  limits: [AssetId, bigint][]
}

/**
 * Contributor refund from disable bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 */
export interface ZenlinkProtocolCall_bootstrap_refund {
  __kind: 'bootstrap_refund'
  asset0: AssetId
  asset1: AssetId
}

export interface ZenlinkProtocolCall_bootstrap_charge_reward {
  __kind: 'bootstrap_charge_reward'
  asset0: AssetId
  asset1: AssetId
  chargeRewards: [AssetId, bigint][]
}

export interface ZenlinkProtocolCall_bootstrap_withdraw_reward {
  __kind: 'bootstrap_withdraw_reward'
  asset0: AssetId
  asset1: AssetId
  recipient: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MerkleDistributorCall = MerkleDistributorCall_add_to_create_whitelist | MerkleDistributorCall_remove_from_create_whitelist | MerkleDistributorCall_create_merkle_distributor | MerkleDistributorCall_claim | MerkleDistributorCall_charge | MerkleDistributorCall_emergency_withdraw

export interface MerkleDistributorCall_add_to_create_whitelist {
  __kind: 'add_to_create_whitelist'
  account: Uint8Array
}

export interface MerkleDistributorCall_remove_from_create_whitelist {
  __kind: 'remove_from_create_whitelist'
  account: Uint8Array
}

/**
 * `create_merkle_distributor` will create a merkle distributor,
 *  which allow specified users claim asset.
 * 
 * The dispatch origin for this call must be `Signed` by root.
 * 
 * - `merkle_root`: The root of a merkle tree.
 * - `description`: About the purpose of this distribution.
 * - `distribute_currency`: The id of currency about this distribution.
 * - `distribute_amount`: The total currency amount of this distribution.
 */
export interface MerkleDistributorCall_create_merkle_distributor {
  __kind: 'create_merkle_distributor'
  merkleRoot: Uint8Array
  description: Uint8Array
  distributeCurrency: CurrencyId
  distributeAmount: bigint
}

/**
 * `claim` Claim rewards through user information and merkle proof.
 * 
 * - `merkle_distributor_id`: ID of a merkle distributor.
 * - `index`: The index of the merkle tree leaf.
 * - `account`: The owner's account of merkle proof.
 * - `merkle_proof`: The hashes with merkle tree leaf can get merkle tree root.
 */
export interface MerkleDistributorCall_claim {
  __kind: 'claim'
  merkleDistributorId: number
  index: number
  account: MultiAddress
  amount: bigint
  merkleProof: Uint8Array[]
}

/**
 * Charge currency to the account of merkle distributor
 * 
 * `merkle_distributor_id`: ID of a merkle distributor.
 */
export interface MerkleDistributorCall_charge {
  __kind: 'charge'
  merkleDistributorId: number
}

export interface MerkleDistributorCall_emergency_withdraw {
  __kind: 'emergency_withdraw'
  merkleDistributorId: number
  recipient: MultiAddress
  amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FlexibleFeeCall = FlexibleFeeCall_set_user_fee_charge_order

/**
 * Set user fee charge assets order.
 */
export interface FlexibleFeeCall_set_user_fee_charge_order {
  __kind: 'set_user_fee_charge_order'
  assetOrderListVec: (CurrencyId[] | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SalpCall = SalpCall_set_multisig_confirm_account | SalpCall_fund_success | SalpCall_fund_fail | SalpCall_continue_fund | SalpCall_fund_retire | SalpCall_fund_end | SalpCall_create | SalpCall_edit | SalpCall_contribute | SalpCall_confirm_contribute | SalpCall_unlock | SalpCall_batch_unlock | SalpCall_withdraw | SalpCall_refund | SalpCall_redeem | SalpCall_dissolve_refunded | SalpCall_dissolve

export interface SalpCall_set_multisig_confirm_account {
  __kind: 'set_multisig_confirm_account'
  account: Uint8Array
}

export interface SalpCall_fund_success {
  __kind: 'fund_success'
  index: number
}

export interface SalpCall_fund_fail {
  __kind: 'fund_fail'
  index: number
}

export interface SalpCall_continue_fund {
  __kind: 'continue_fund'
  index: number
  firstSlot: number
  lastSlot: number
}

export interface SalpCall_fund_retire {
  __kind: 'fund_retire'
  index: number
}

export interface SalpCall_fund_end {
  __kind: 'fund_end'
  index: number
}

/**
 * Create a new crowdloaning campaign for a parachain slot deposit for the current auction.
 */
export interface SalpCall_create {
  __kind: 'create'
  index: number
  cap: bigint
  firstSlot: number
  lastSlot: number
}

/**
 * Edit the configuration for an in-progress crowdloan.
 * 
 * Can only be called by Root origin.
 */
export interface SalpCall_edit {
  __kind: 'edit'
  index: number
  cap: bigint
  raised: bigint
  firstSlot: number
  lastSlot: number
  fundStatus: (FundStatus | undefined)
}

/**
 * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
 * slot. It will be withdrawable in two instances: the parachain becomes retired; or the
 * slot is unable to be purchased and the timeout expires.
 */
export interface SalpCall_contribute {
  __kind: 'contribute'
  index: number
  value: bigint
}

/**
 * Confirm contribute
 */
export interface SalpCall_confirm_contribute {
  __kind: 'confirm_contribute'
  who: Uint8Array
  index: number
  isSuccess: boolean
  messageId: Uint8Array
}

/**
 * Unlock the reserved vsToken/vsBond after fund success
 */
export interface SalpCall_unlock {
  __kind: 'unlock'
  who: Uint8Array
  index: number
}

/**
 * Unlock the reserved vsToken/vsBond after fund success
 */
export interface SalpCall_batch_unlock {
  __kind: 'batch_unlock'
  index: number
}

/**
 * Withdraw full balance of the parachain.
 * - `index`: The parachain to whose crowdloan the contribution was made.
 */
export interface SalpCall_withdraw {
  __kind: 'withdraw'
  index: number
}

export interface SalpCall_refund {
  __kind: 'refund'
  index: number
  firstSlot: number
  lastSlot: number
  value: bigint
}

export interface SalpCall_redeem {
  __kind: 'redeem'
  index: number
  value: bigint
}

/**
 * Remove a fund after the retirement period has ended and all funds have been returned.
 */
export interface SalpCall_dissolve_refunded {
  __kind: 'dissolve_refunded'
  index: number
  firstSlot: number
  lastSlot: number
}

/**
 * Remove a fund after the retirement period has ended and all funds have been returned.
 */
export interface SalpCall_dissolve {
  __kind: 'dissolve'
  index: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type LiquidityMiningDOTCall = LiquidityMiningDOTCall_create_single_token_pool | LiquidityMiningDOTCall_create_mining_pool | LiquidityMiningDOTCall_create_farming_pool | LiquidityMiningDOTCall_create_eb_farming_pool | LiquidityMiningDOTCall_charge | LiquidityMiningDOTCall_kill_pool | LiquidityMiningDOTCall_force_retire_pool | LiquidityMiningDOTCall_edit_pool | LiquidityMiningDOTCall_deposit | LiquidityMiningDOTCall_redeem | LiquidityMiningDOTCall_redeem_all | LiquidityMiningDOTCall_volunteer_to_redeem | LiquidityMiningDOTCall_claim | LiquidityMiningDOTCall_unlock | LiquidityMiningDOTCall_cancel_unlock | LiquidityMiningDOTCall_lazy_migration_v2_0_0

/**
 * Create a liquidity-pool which type is `PoolType::SingleToken`, accepts any token as
 * deposit.
 */
export interface LiquidityMiningDOTCall_create_single_token_pool {
  __kind: 'create_single_token_pool'
  token: CurrencyId
  mainReward: [CurrencyId, bigint]
  optionRewards: [CurrencyId, bigint][]
  duration: number
  minDepositToStart: bigint
  afterBlockToStart: number
  redeemLimitTime: number
  unlockLimitNums: number
}

/**
 * Create a liquidity-pool which type is `PoolType::Mining`, Only accepts `lpToken` as
 * deposit.
 */
export interface LiquidityMiningDOTCall_create_mining_pool {
  __kind: 'create_mining_pool'
  tradingPair: [CurrencyId, CurrencyId]
  mainReward: [CurrencyId, bigint]
  optionRewards: [CurrencyId, bigint][]
  duration: number
  minDepositToStart: bigint
  afterBlockToStart: number
  redeemLimitTime: number
  unlockLimitNums: number
}

/**
 * Create a liquidity-pool which type is `PoolType::Farming`, Only accepts free `vsToken`
 * and free `vsBond` as deposit.
 */
export interface LiquidityMiningDOTCall_create_farming_pool {
  __kind: 'create_farming_pool'
  index: number
  firstSlot: number
  lastSlot: number
  mainReward: [CurrencyId, bigint]
  optionRewards: [CurrencyId, bigint][]
  duration: number
  minDepositToStart: bigint
  afterBlockToStart: number
  redeemLimitTime: number
  unlockLimitNums: number
}

/**
 * Create a liquidity-pool which type is `PoolType::Farming`, Only accepts reserved
 * `vsToken` and reserved `vsBond` as deposit.
 */
export interface LiquidityMiningDOTCall_create_eb_farming_pool {
  __kind: 'create_eb_farming_pool'
  index: number
  firstSlot: number
  lastSlot: number
  mainReward: [CurrencyId, bigint]
  optionRewards: [CurrencyId, bigint][]
  duration: number
  minDepositToStart: bigint
  afterBlockToStart: number
}

/**
 * Transfer the rewards which are used to distribute to depositors to a liquidity-pool.
 * 
 * _NOTE_: The extrinsic is only applied to the liquidity-pool at `PoolState::UnCharged`;
 * 	When the extrinsic was executed successfully, the liquidity-pool would be at
 * 	`PoolState::Charged`.
 */
export interface LiquidityMiningDOTCall_charge {
  __kind: 'charge'
  pid: number
}

/**
 * Kill a liquidity-pool at `PoolState::Uncharged`.
 */
export interface LiquidityMiningDOTCall_kill_pool {
  __kind: 'kill_pool'
  pid: number
}

/**
 * Make a liquidity-pool be at `PoolState::Retired` forcefully.
 * 
 * __NOTE__:
 * 1. If the pool is at `PoolState::Charged` but doesn't have any deposit, the data about
 * 	the pool would be deleted and the rewards charged would be returned back.
 * 
 * 2. If the pool is at `PoolState::Charged` and has some deposit, or `PoolState::Ongoing`,
 * 	the field `block_retired` of the pool would be set to the current block height.
 */
export interface LiquidityMiningDOTCall_force_retire_pool {
  __kind: 'force_retire_pool'
  pid: number
}

/**
 * Edit the parameters of a liquidity-pool.
 * 
 * __NOTE__: Forbid editing the liquidity-pool which type is `PoolType::EBFarming`;
 */
export interface LiquidityMiningDOTCall_edit_pool {
  __kind: 'edit_pool'
  pid: number
  redeemLimitTime: number
  unlockLimitNums: number
}

/**
 * Caller deposits some token to a liquidity-pool.
 * 
 * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
 * 
 * The conditions to deposit:
 * - The deposit caller was contributed to the pool should be bigger than
 *   `T::MinimumDeposit`;
 * - The pool is at `PoolState::Charged` or `PoolState::Ongoing`;
 */
export interface LiquidityMiningDOTCall_deposit {
  __kind: 'deposit'
  pid: number
  value: bigint
}

/**
 * Caller redeems some deposit owned by self from a pool.
 * 
 * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
 * 
 * __NOTE__:
 * 0. If the pool is at `PoolState::Ongoing`, the caller may not redeem successfully
 * because of 	the `reward algorithm`, which requires `pool-ongoing` must have deposit more
 * than `T::MinimumDeposit`.
 * 
 * 1. If the pool is at `PoolState::Retired`, the extrinsic will redeem all deposits
 * owned by the caller, whatever the `value` is.
 * 
 * 2. If the pool is at `PoolState::Retired` and the deposit in the pool will become zero
 * after calling the extrinsic, the remaining rewards left in the pool will be returned
 * back to the charger.
 * 
 * The condition to redeem:
 * - There is enough deposit owned by the caller in the pool.
 * - The pool is at `PoolState::Ongoing` or `PoolState::Retired`.
 */
export interface LiquidityMiningDOTCall_redeem {
  __kind: 'redeem'
  pid: number
  value: bigint
}

/**
 * Caller redeems all deposit owned by self from a pool.
 * 
 * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
 * 
 * __NOTE__:
 * 0. If the pool is at `PoolState::Ongoing`, the caller may not redeem successfully
 * because of 	the `reward algorithm`, which requires `pool-ongoing` must have deposit more
 * than `T::MinimumDeposit`.
 * 
 * 1. If the pool is at `PoolState::Retired` and the deposit in the pool will become zero
 * after calling the extrinsic, the remaining rewards left in the pool will be
 * returned back to the charger.
 * 
 * The condition to redeem:
 * - There is enough deposit owned by the caller in the pool.
 * - The pool is at `PoolState::Ongoing` or `PoolState::Retired`.
 */
export interface LiquidityMiningDOTCall_redeem_all {
  __kind: 'redeem_all'
  pid: number
}

/**
 * A selfless man intimately helps depositors of the pool to redeem their deposit,
 * aaaaaaah, such a grateful!!
 * 
 * If the `account` is `Option::None`, the extrinsic will give "freedom" for a lucky man
 * randomly;
 * 
 * If the `account` is specific and a depositor of the pool indeed, who will be given
 * "freedom" by the extrinsic.
 * 
 * The condition to redeem:
 * - The pool is at `PoolState::Retired`.
 */
export interface LiquidityMiningDOTCall_volunteer_to_redeem {
  __kind: 'volunteer_to_redeem'
  pid: number
  account: (Uint8Array | undefined)
}

/**
 * Caller withdraw the unclaimed rewards owned by self from a pool.
 * 
 * __NOTE__: The extrinsic will retire the pool, which is reached the end of life.
 * 
 * The conditions to claim:
 * - There is enough deposit owned by the caller in the pool.
 * - The pool is at `PoolState::Ongoing`.
 */
export interface LiquidityMiningDOTCall_claim {
  __kind: 'claim'
  pid: number
}

/**
 * Caller unlocks the locked deposit in the liquidity-pool.
 * 
 * __NOTE__: The extrinsic will retire the pool, which is reached the end of life.
 * 
 * The conditions to unlock:
 * - The pool type is not `PoolType::EBFarming`.
 * - There are pending-unlocks in the deposit_data.
 * - The current block-height exceeded the unlock-height;
 */
export interface LiquidityMiningDOTCall_unlock {
  __kind: 'unlock'
  pid: number
}

/**
 * Caller cancels the specific pending-unlock.
 * 
 * __NOTE__: The extrinsic will retire the pool, which is reached the end of life.
 * 
 * The conditions to cancel:
 * - The pool state is `PoolState::Ongoing`.
 * - There is a `pending-unlock` that is specific by the parameter `index`;
 */
export interface LiquidityMiningDOTCall_cancel_unlock {
  __kind: 'cancel_unlock'
  pid: number
  index: number
}

export interface LiquidityMiningDOTCall_lazy_migration_v2_0_0 {
  __kind: 'lazy_migration_v2_0_0'
  maxNums: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type LiquidityMiningCall = LiquidityMiningCall_create_single_token_pool | LiquidityMiningCall_create_mining_pool | LiquidityMiningCall_create_farming_pool | LiquidityMiningCall_create_eb_farming_pool | LiquidityMiningCall_charge | LiquidityMiningCall_kill_pool | LiquidityMiningCall_force_retire_pool | LiquidityMiningCall_edit_pool | LiquidityMiningCall_deposit | LiquidityMiningCall_redeem | LiquidityMiningCall_redeem_all | LiquidityMiningCall_volunteer_to_redeem | LiquidityMiningCall_claim | LiquidityMiningCall_unlock | LiquidityMiningCall_cancel_unlock | LiquidityMiningCall_lazy_migration_v2_0_0

/**
 * Create a liquidity-pool which type is `PoolType::SingleToken`, accepts any token as
 * deposit.
 */
export interface LiquidityMiningCall_create_single_token_pool {
  __kind: 'create_single_token_pool'
  token: CurrencyId
  mainReward: [CurrencyId, bigint]
  optionRewards: [CurrencyId, bigint][]
  duration: number
  minDepositToStart: bigint
  afterBlockToStart: number
  redeemLimitTime: number
  unlockLimitNums: number
}

/**
 * Create a liquidity-pool which type is `PoolType::Mining`, Only accepts `lpToken` as
 * deposit.
 */
export interface LiquidityMiningCall_create_mining_pool {
  __kind: 'create_mining_pool'
  tradingPair: [CurrencyId, CurrencyId]
  mainReward: [CurrencyId, bigint]
  optionRewards: [CurrencyId, bigint][]
  duration: number
  minDepositToStart: bigint
  afterBlockToStart: number
  redeemLimitTime: number
  unlockLimitNums: number
}

/**
 * Create a liquidity-pool which type is `PoolType::Farming`, Only accepts free `vsToken`
 * and free `vsBond` as deposit.
 */
export interface LiquidityMiningCall_create_farming_pool {
  __kind: 'create_farming_pool'
  index: number
  firstSlot: number
  lastSlot: number
  mainReward: [CurrencyId, bigint]
  optionRewards: [CurrencyId, bigint][]
  duration: number
  minDepositToStart: bigint
  afterBlockToStart: number
  redeemLimitTime: number
  unlockLimitNums: number
}

/**
 * Create a liquidity-pool which type is `PoolType::Farming`, Only accepts reserved
 * `vsToken` and reserved `vsBond` as deposit.
 */
export interface LiquidityMiningCall_create_eb_farming_pool {
  __kind: 'create_eb_farming_pool'
  index: number
  firstSlot: number
  lastSlot: number
  mainReward: [CurrencyId, bigint]
  optionRewards: [CurrencyId, bigint][]
  duration: number
  minDepositToStart: bigint
  afterBlockToStart: number
}

/**
 * Transfer the rewards which are used to distribute to depositors to a liquidity-pool.
 * 
 * _NOTE_: The extrinsic is only applied to the liquidity-pool at `PoolState::UnCharged`;
 * 	When the extrinsic was executed successfully, the liquidity-pool would be at
 * 	`PoolState::Charged`.
 */
export interface LiquidityMiningCall_charge {
  __kind: 'charge'
  pid: number
}

/**
 * Kill a liquidity-pool at `PoolState::Uncharged`.
 */
export interface LiquidityMiningCall_kill_pool {
  __kind: 'kill_pool'
  pid: number
}

/**
 * Make a liquidity-pool be at `PoolState::Retired` forcefully.
 * 
 * __NOTE__:
 * 1. If the pool is at `PoolState::Charged` but doesn't have any deposit, the data about
 * 	the pool would be deleted and the rewards charged would be returned back.
 * 
 * 2. If the pool is at `PoolState::Charged` and has some deposit, or `PoolState::Ongoing`,
 * 	the field `block_retired` of the pool would be set to the current block height.
 */
export interface LiquidityMiningCall_force_retire_pool {
  __kind: 'force_retire_pool'
  pid: number
}

/**
 * Edit the parameters of a liquidity-pool.
 * 
 * __NOTE__: Forbid editing the liquidity-pool which type is `PoolType::EBFarming`;
 */
export interface LiquidityMiningCall_edit_pool {
  __kind: 'edit_pool'
  pid: number
  redeemLimitTime: number
  unlockLimitNums: number
}

/**
 * Caller deposits some token to a liquidity-pool.
 * 
 * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
 * 
 * The conditions to deposit:
 * - The deposit caller was contributed to the pool should be bigger than
 *   `T::MinimumDeposit`;
 * - The pool is at `PoolState::Charged` or `PoolState::Ongoing`;
 */
export interface LiquidityMiningCall_deposit {
  __kind: 'deposit'
  pid: number
  value: bigint
}

/**
 * Caller redeems some deposit owned by self from a pool.
 * 
 * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
 * 
 * __NOTE__:
 * 0. If the pool is at `PoolState::Ongoing`, the caller may not redeem successfully
 * because of 	the `reward algorithm`, which requires `pool-ongoing` must have deposit more
 * than `T::MinimumDeposit`.
 * 
 * 1. If the pool is at `PoolState::Retired`, the extrinsic will redeem all deposits
 * owned by the caller, whatever the `value` is.
 * 
 * 2. If the pool is at `PoolState::Retired` and the deposit in the pool will become zero
 * after calling the extrinsic, the remaining rewards left in the pool will be returned
 * back to the charger.
 * 
 * The condition to redeem:
 * - There is enough deposit owned by the caller in the pool.
 * - The pool is at `PoolState::Ongoing` or `PoolState::Retired`.
 */
export interface LiquidityMiningCall_redeem {
  __kind: 'redeem'
  pid: number
  value: bigint
}

/**
 * Caller redeems all deposit owned by self from a pool.
 * 
 * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
 * 
 * __NOTE__:
 * 0. If the pool is at `PoolState::Ongoing`, the caller may not redeem successfully
 * because of 	the `reward algorithm`, which requires `pool-ongoing` must have deposit more
 * than `T::MinimumDeposit`.
 * 
 * 1. If the pool is at `PoolState::Retired` and the deposit in the pool will become zero
 * after calling the extrinsic, the remaining rewards left in the pool will be
 * returned back to the charger.
 * 
 * The condition to redeem:
 * - There is enough deposit owned by the caller in the pool.
 * - The pool is at `PoolState::Ongoing` or `PoolState::Retired`.
 */
export interface LiquidityMiningCall_redeem_all {
  __kind: 'redeem_all'
  pid: number
}

/**
 * A selfless man intimately helps depositors of the pool to redeem their deposit,
 * aaaaaaah, such a grateful!!
 * 
 * If the `account` is `Option::None`, the extrinsic will give "freedom" for a lucky man
 * randomly;
 * 
 * If the `account` is specific and a depositor of the pool indeed, who will be given
 * "freedom" by the extrinsic.
 * 
 * The condition to redeem:
 * - The pool is at `PoolState::Retired`.
 */
export interface LiquidityMiningCall_volunteer_to_redeem {
  __kind: 'volunteer_to_redeem'
  pid: number
  account: (Uint8Array | undefined)
}

/**
 * Caller withdraw the unclaimed rewards owned by self from a pool.
 * 
 * __NOTE__: The extrinsic will retire the pool, which is reached the end of life.
 * 
 * The conditions to claim:
 * - There is enough deposit owned by the caller in the pool.
 * - The pool is at `PoolState::Ongoing`.
 */
export interface LiquidityMiningCall_claim {
  __kind: 'claim'
  pid: number
}

/**
 * Caller unlocks the locked deposit in the liquidity-pool.
 * 
 * __NOTE__: The extrinsic will retire the pool, which is reached the end of life.
 * 
 * The conditions to unlock:
 * - The pool type is not `PoolType::EBFarming`.
 * - There are pending-unlocks in the deposit_data.
 * - The current block-height exceeded the unlock-height;
 */
export interface LiquidityMiningCall_unlock {
  __kind: 'unlock'
  pid: number
}

/**
 * Caller cancels the specific pending-unlock.
 * 
 * __NOTE__: The extrinsic will retire the pool, which is reached the end of life.
 * 
 * The conditions to cancel:
 * - The pool state is `PoolState::Ongoing`.
 * - There is a `pending-unlock` that is specific by the parameter `index`;
 */
export interface LiquidityMiningCall_cancel_unlock {
  __kind: 'cancel_unlock'
  pid: number
  index: number
}

export interface LiquidityMiningCall_lazy_migration_v2_0_0 {
  __kind: 'lazy_migration_v2_0_0'
  maxNums: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TokenIssuerCall = TokenIssuerCall_add_to_issue_whitelist | TokenIssuerCall_remove_from_issue_whitelist | TokenIssuerCall_add_to_transfer_whitelist | TokenIssuerCall_remove_from_transfer_whitelist | TokenIssuerCall_issue | TokenIssuerCall_transfer

export interface TokenIssuerCall_add_to_issue_whitelist {
  __kind: 'add_to_issue_whitelist'
  currencyId: CurrencyId
  account: Uint8Array
}

export interface TokenIssuerCall_remove_from_issue_whitelist {
  __kind: 'remove_from_issue_whitelist'
  currencyId: CurrencyId
  account: Uint8Array
}

export interface TokenIssuerCall_add_to_transfer_whitelist {
  __kind: 'add_to_transfer_whitelist'
  currencyId: CurrencyId
  account: Uint8Array
}

export interface TokenIssuerCall_remove_from_transfer_whitelist {
  __kind: 'remove_from_transfer_whitelist'
  currencyId: CurrencyId
  account: Uint8Array
}

export interface TokenIssuerCall_issue {
  __kind: 'issue'
  dest: Uint8Array
  currencyId: CurrencyId
  amount: bigint
}

/**
 * Destroy some balance from an account.
 * 
 * The dispatch origin for this call must be `Root` by the
 * transactor.
 */
export interface TokenIssuerCall_transfer {
  __kind: 'transfer'
  dest: Uint8Array
  currencyId: CurrencyId
  amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type LighteningRedeemCall = LighteningRedeemCall_add_ksm_to_pool | LighteningRedeemCall_exchange_for_ksm | LighteningRedeemCall_edit_exchange_price | LighteningRedeemCall_edit_release_per_day | LighteningRedeemCall_edit_release_start_and_end_block

/**
 * Anyone can add KSM to the pool.
 */
export interface LighteningRedeemCall_add_ksm_to_pool {
  __kind: 'add_ksm_to_pool'
  tokenAmount: bigint
}

export interface LighteningRedeemCall_exchange_for_ksm {
  __kind: 'exchange_for_ksm'
  tokenAmount: bigint
}

export interface LighteningRedeemCall_edit_exchange_price {
  __kind: 'edit_exchange_price'
  price: bigint
}

export interface LighteningRedeemCall_edit_release_per_day {
  __kind: 'edit_release_per_day'
  amountPerDay: bigint
}

export interface LighteningRedeemCall_edit_release_start_and_end_block {
  __kind: 'edit_release_start_and_end_block'
  start: number
  end: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SalpLiteCall = SalpLiteCall_set_multisig_confirm_account | SalpLiteCall_fund_success | SalpLiteCall_fund_fail | SalpLiteCall_fund_retire | SalpLiteCall_create | SalpLiteCall_issue | SalpLiteCall_withdraw | SalpLiteCall_redeem | SalpLiteCall_dissolve | SalpLiteCall_continue_fund | SalpLiteCall_refund | SalpLiteCall_dissolve_refunded | SalpLiteCall_edit

export interface SalpLiteCall_set_multisig_confirm_account {
  __kind: 'set_multisig_confirm_account'
  account: Uint8Array
}

export interface SalpLiteCall_fund_success {
  __kind: 'fund_success'
  index: number
}

export interface SalpLiteCall_fund_fail {
  __kind: 'fund_fail'
  index: number
}

export interface SalpLiteCall_fund_retire {
  __kind: 'fund_retire'
  index: number
}

/**
 * Create a new crowdloaning campaign for a parachain slot deposit for the current auction.
 */
export interface SalpLiteCall_create {
  __kind: 'create'
  index: number
  cap: bigint
  firstSlot: number
  lastSlot: number
}

/**
 * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
 * slot. It will be withdrawable in two instances: the parachain becomes retired; or the
 * slot is unable to be purchased and the timeout expires.
 */
export interface SalpLiteCall_issue {
  __kind: 'issue'
  who: Uint8Array
  index: number
  value: bigint
  messageId: Uint8Array
}

/**
 * Withdraw full balance of the parachain.
 * - `index`: The parachain to whose crowdloan the contribution was made.
 */
export interface SalpLiteCall_withdraw {
  __kind: 'withdraw'
  index: number
}

export interface SalpLiteCall_redeem {
  __kind: 'redeem'
  index: number
  value: bigint
}

/**
 * Remove a fund after the retirement period has ended and all funds have been returned.
 */
export interface SalpLiteCall_dissolve {
  __kind: 'dissolve'
  index: number
}

export interface SalpLiteCall_continue_fund {
  __kind: 'continue_fund'
  index: number
  firstSlot: number
  lastSlot: number
}

export interface SalpLiteCall_refund {
  __kind: 'refund'
  index: number
  firstSlot: number
  lastSlot: number
  value: bigint
}

/**
 * Remove a fund after the retirement period has ended and all funds have been returned.
 */
export interface SalpLiteCall_dissolve_refunded {
  __kind: 'dissolve_refunded'
  index: number
  firstSlot: number
  lastSlot: number
}

/**
 * Edit the configuration for an in-progress crowdloan.
 * 
 * Can only be called by Root origin.
 */
export interface SalpLiteCall_edit {
  __kind: 'edit'
  index: number
  cap: bigint
  raised: bigint
  firstSlot: number
  lastSlot: number
  fundStatus: (Type_409 | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CallSwitchgearCall = CallSwitchgearCall_switchoff_transaction | CallSwitchgearCall_switchon_transaction | CallSwitchgearCall_disable_transfers | CallSwitchgearCall_enable_transfers

export interface CallSwitchgearCall_switchoff_transaction {
  __kind: 'switchoff_transaction'
  palletName: Uint8Array
  functionName: Uint8Array
}

export interface CallSwitchgearCall_switchon_transaction {
  __kind: 'switchon_transaction'
  palletName: Uint8Array
  functionName: Uint8Array
}

export interface CallSwitchgearCall_disable_transfers {
  __kind: 'disable_transfers'
  currencyId: CurrencyId
}

export interface CallSwitchgearCall_enable_transfers {
  __kind: 'enable_transfers'
  currencyId: CurrencyId
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VSBondAuctionCall = VSBondAuctionCall_create_order | VSBondAuctionCall_revoke_order | VSBondAuctionCall_force_revoke | VSBondAuctionCall_clinch_order | VSBondAuctionCall_partial_clinch_order | VSBondAuctionCall_set_buy_and_sell_transaction_fee_rate

/**
 * Create a sell order or buy order to sell `vsbond`.
 */
export interface VSBondAuctionCall_create_order {
  __kind: 'create_order'
  index: number
  tokenSymbol: TokenSymbol
  firstSlot: number
  lastSlot: number
  amount: bigint
  totalPrice: bigint
  orderType: OrderType
}

/**
 * Revoke a sell or buy order in trade by the order creator.
 */
export interface VSBondAuctionCall_revoke_order {
  __kind: 'revoke_order'
  orderId: bigint
}

/**
 * Revoke a sell or buy order in trade by the order creator.
 */
export interface VSBondAuctionCall_force_revoke {
  __kind: 'force_revoke'
  orderId: bigint
}

/**
 * Users(non-order-creator) buy the remaining `vsbond` of a sell order.
 */
export interface VSBondAuctionCall_clinch_order {
  __kind: 'clinch_order'
  orderId: bigint
}

/**
 * Users(non-order-creator) buys some of the remaining `vsbond` of a sell or buy order.
 */
export interface VSBondAuctionCall_partial_clinch_order {
  __kind: 'partial_clinch_order'
  orderId: bigint
  quantity: bigint
}

export interface VSBondAuctionCall_set_buy_and_sell_transaction_fee_rate {
  __kind: 'set_buy_and_sell_transaction_fee_rate'
  buyRate: number
  sellRate: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssetRegistryCall = AssetRegistryCall_register_foreign_asset | AssetRegistryCall_update_foreign_asset

export interface AssetRegistryCall_register_foreign_asset {
  __kind: 'register_foreign_asset'
  location: VersionedMultiLocation
  metadata: AssetMetadata
}

export interface AssetRegistryCall_update_foreign_asset {
  __kind: 'update_foreign_asset'
  foreignAssetId: number
  location: VersionedMultiLocation
  metadata: AssetMetadata
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcmInterfaceCall = XcmInterfaceCall_update_xcm_dest_weight_and_fee | XcmInterfaceCall_transfer_statemine_assets

/**
 * Sets the xcm_dest_weight and fee for XCM operation of XcmInterface.
 * 
 * Parameters:
 * - `updates`: vec of tuple: (XcmInterfaceOperation, WeightChange, FeeChange).
 */
export interface XcmInterfaceCall_update_xcm_dest_weight_and_fee {
  __kind: 'update_xcm_dest_weight_and_fee'
  updates: [XcmInterfaceOperation, (bigint | undefined), (bigint | undefined)][]
}

export interface XcmInterfaceCall_transfer_statemine_assets {
  __kind: 'transfer_statemine_assets'
  amount: bigint
  assetId: number
  dest: (Uint8Array | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VstokenConversionCall = VstokenConversionCall_vsbond_convert_to_vsksm | VstokenConversionCall_vsksm_convert_to_vsbond | VstokenConversionCall_vsbond_convert_to_vsdot | VstokenConversionCall_vsdot_convert_to_vsbond | VstokenConversionCall_set_exchange_fee | VstokenConversionCall_set_exchange_rate | VstokenConversionCall_set_kusama_lease | VstokenConversionCall_set_polkadot_lease

export interface VstokenConversionCall_vsbond_convert_to_vsksm {
  __kind: 'vsbond_convert_to_vsksm'
  currencyId: CurrencyId
  vsbondAmount: bigint
  minimumVsksm: bigint
}

export interface VstokenConversionCall_vsksm_convert_to_vsbond {
  __kind: 'vsksm_convert_to_vsbond'
  currencyId: CurrencyId
  vsksmAmount: bigint
  minimumVsbond: bigint
}

export interface VstokenConversionCall_vsbond_convert_to_vsdot {
  __kind: 'vsbond_convert_to_vsdot'
  currencyId: CurrencyId
  vsbondAmount: bigint
  minimumVsdot: bigint
}

export interface VstokenConversionCall_vsdot_convert_to_vsbond {
  __kind: 'vsdot_convert_to_vsbond'
  currencyId: CurrencyId
  vsdotAmount: bigint
  minimumVsbond: bigint
}

export interface VstokenConversionCall_set_exchange_fee {
  __kind: 'set_exchange_fee'
  exchangeFee: VstokenConversionExchangeFee
}

export interface VstokenConversionCall_set_exchange_rate {
  __kind: 'set_exchange_rate'
  lease: number
  exchangeRate: VstokenConversionExchangeRate
}

export interface VstokenConversionCall_set_kusama_lease {
  __kind: 'set_kusama_lease'
  lease: number
}

export interface VstokenConversionCall_set_polkadot_lease {
  __kind: 'set_polkadot_lease'
  lease: number
}

export type RawOrigin = RawOrigin_Root | RawOrigin_Signed | RawOrigin_None

export interface RawOrigin_Root {
  __kind: 'Root'
}

export interface RawOrigin_Signed {
  __kind: 'Signed'
  value: Uint8Array
}

export interface RawOrigin_None {
  __kind: 'None'
}

export type Type_329 = Type_329_Members | Type_329_Member | Type_329__Phantom

export interface Type_329_Members {
  __kind: 'Members'
  value: [number, number]
}

export interface Type_329_Member {
  __kind: 'Member'
  value: Uint8Array
}

export interface Type_329__Phantom {
  __kind: '_Phantom'
}

export type Type_330 = Type_330_Members | Type_330_Member | Type_330__Phantom

export interface Type_330_Members {
  __kind: 'Members'
  value: [number, number]
}

export interface Type_330_Member {
  __kind: 'Member'
  value: Uint8Array
}

export interface Type_330__Phantom {
  __kind: '_Phantom'
}

export type Origin = Origin_Xcm | Origin_Response

export interface Origin_Xcm {
  __kind: 'Xcm'
  value: V1MultiLocation
}

export interface Origin_Response {
  __kind: 'Response'
  value: V1MultiLocation
}

export type Type_332 = Type_332_Relay | Type_332_SiblingParachain

export interface Type_332_Relay {
  __kind: 'Relay'
}

export interface Type_332_SiblingParachain {
  __kind: 'SiblingParachain'
  value: number
}

export type Void = never

export interface RewardData {
  total: bigint
  perBlock: bigint
  claimed: bigint
  gainAvg: bigint
}

export type PoolState = PoolState_UnCharged | PoolState_Charged | PoolState_Ongoing | PoolState_Retired | PoolState_Dead

export interface PoolState_UnCharged {
  __kind: 'UnCharged'
}

export interface PoolState_Charged {
  __kind: 'Charged'
}

export interface PoolState_Ongoing {
  __kind: 'Ongoing'
}

export interface PoolState_Retired {
  __kind: 'Retired'
}

export interface PoolState_Dead {
  __kind: 'Dead'
}

export type Phase = Phase_ApplyExtrinsic | Phase_Finalization | Phase_Initialization

export interface Phase_ApplyExtrinsic {
  __kind: 'ApplyExtrinsic'
  value: number
}

export interface Phase_Finalization {
  __kind: 'Finalization'
}

export interface Phase_Initialization {
  __kind: 'Initialization'
}

export type Event = Event_System | Event_Indices | Event_ParachainSystem | Event_Balances | Event_Session | Event_ParachainStaking | Event_Democracy | Event_Council | Event_TechnicalCommittee | Event_PhragmenElection | Event_CouncilMembership | Event_TechnicalMembership | Event_XcmpQueue | Event_PolkadotXcm | Event_CumulusXcm | Event_DmpQueue | Event_Utility | Event_Scheduler | Event_Proxy | Event_Multisig | Event_Identity | Event_Vesting | Event_Treasury | Event_Bounties | Event_Tips | Event_Preimage | Event_XTokens | Event_Tokens | Event_Currencies | Event_UnknownTokens | Event_OrmlXcm | Event_ZenlinkProtocol | Event_MerkleDistributor | Event_FlexibleFee | Event_Salp | Event_LiquidityMiningDOT | Event_LiquidityMining | Event_TokenIssuer | Event_LighteningRedeem | Event_SalpLite | Event_CallSwitchgear | Event_VSBondAuction | Event_AssetRegistry | Event_XcmInterface | Event_VstokenConversion

export interface Event_System {
  __kind: 'System'
  value: SystemEvent
}

export interface Event_Indices {
  __kind: 'Indices'
  value: IndicesEvent
}

export interface Event_ParachainSystem {
  __kind: 'ParachainSystem'
  value: ParachainSystemEvent
}

export interface Event_Balances {
  __kind: 'Balances'
  value: BalancesEvent
}

export interface Event_Session {
  __kind: 'Session'
  value: SessionEvent
}

export interface Event_ParachainStaking {
  __kind: 'ParachainStaking'
  value: ParachainStakingEvent
}

export interface Event_Democracy {
  __kind: 'Democracy'
  value: DemocracyEvent
}

export interface Event_Council {
  __kind: 'Council'
  value: CouncilEvent
}

export interface Event_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: TechnicalCommitteeEvent
}

export interface Event_PhragmenElection {
  __kind: 'PhragmenElection'
  value: PhragmenElectionEvent
}

export interface Event_CouncilMembership {
  __kind: 'CouncilMembership'
  value: CouncilMembershipEvent
}

export interface Event_TechnicalMembership {
  __kind: 'TechnicalMembership'
  value: TechnicalMembershipEvent
}

export interface Event_XcmpQueue {
  __kind: 'XcmpQueue'
  value: XcmpQueueEvent
}

export interface Event_PolkadotXcm {
  __kind: 'PolkadotXcm'
  value: PolkadotXcmEvent
}

export interface Event_CumulusXcm {
  __kind: 'CumulusXcm'
  value: CumulusXcmEvent
}

export interface Event_DmpQueue {
  __kind: 'DmpQueue'
  value: DmpQueueEvent
}

export interface Event_Utility {
  __kind: 'Utility'
  value: UtilityEvent
}

export interface Event_Scheduler {
  __kind: 'Scheduler'
  value: SchedulerEvent
}

export interface Event_Proxy {
  __kind: 'Proxy'
  value: ProxyEvent
}

export interface Event_Multisig {
  __kind: 'Multisig'
  value: MultisigEvent
}

export interface Event_Identity {
  __kind: 'Identity'
  value: IdentityEvent
}

export interface Event_Vesting {
  __kind: 'Vesting'
  value: VestingEvent
}

export interface Event_Treasury {
  __kind: 'Treasury'
  value: TreasuryEvent
}

export interface Event_Bounties {
  __kind: 'Bounties'
  value: BountiesEvent
}

export interface Event_Tips {
  __kind: 'Tips'
  value: TipsEvent
}

export interface Event_Preimage {
  __kind: 'Preimage'
  value: PreimageEvent
}

export interface Event_XTokens {
  __kind: 'XTokens'
  value: XTokensEvent
}

export interface Event_Tokens {
  __kind: 'Tokens'
  value: TokensEvent
}

export interface Event_Currencies {
  __kind: 'Currencies'
  value: CurrenciesEvent
}

export interface Event_UnknownTokens {
  __kind: 'UnknownTokens'
  value: UnknownTokensEvent
}

export interface Event_OrmlXcm {
  __kind: 'OrmlXcm'
  value: OrmlXcmEvent
}

export interface Event_ZenlinkProtocol {
  __kind: 'ZenlinkProtocol'
  value: ZenlinkProtocolEvent
}

export interface Event_MerkleDistributor {
  __kind: 'MerkleDistributor'
  value: MerkleDistributorEvent
}

export interface Event_FlexibleFee {
  __kind: 'FlexibleFee'
  value: FlexibleFeeEvent
}

export interface Event_Salp {
  __kind: 'Salp'
  value: SalpEvent
}

export interface Event_LiquidityMiningDOT {
  __kind: 'LiquidityMiningDOT'
  value: LiquidityMiningDOTEvent
}

export interface Event_LiquidityMining {
  __kind: 'LiquidityMining'
  value: LiquidityMiningEvent
}

export interface Event_TokenIssuer {
  __kind: 'TokenIssuer'
  value: TokenIssuerEvent
}

export interface Event_LighteningRedeem {
  __kind: 'LighteningRedeem'
  value: LighteningRedeemEvent
}

export interface Event_SalpLite {
  __kind: 'SalpLite'
  value: SalpLiteEvent
}

export interface Event_CallSwitchgear {
  __kind: 'CallSwitchgear'
  value: CallSwitchgearEvent
}

export interface Event_VSBondAuction {
  __kind: 'VSBondAuction'
  value: VSBondAuctionEvent
}

export interface Event_AssetRegistry {
  __kind: 'AssetRegistry'
  value: AssetRegistryEvent
}

export interface Event_XcmInterface {
  __kind: 'XcmInterface'
  value: XcmInterfaceEvent
}

export interface Event_VstokenConversion {
  __kind: 'VstokenConversion'
  value: VstokenConversionEvent
}

export type V1Junction = V1Junction_Parachain | V1Junction_AccountId32 | V1Junction_AccountIndex64 | V1Junction_AccountKey20 | V1Junction_PalletInstance | V1Junction_GeneralIndex | V1Junction_GeneralKey | V1Junction_OnlyChild | V1Junction_Plurality

export interface V1Junction_Parachain {
  __kind: 'Parachain'
  value: number
}

export interface V1Junction_AccountId32 {
  __kind: 'AccountId32'
  network: V0NetworkId
  id: Uint8Array
}

export interface V1Junction_AccountIndex64 {
  __kind: 'AccountIndex64'
  network: V0NetworkId
  index: bigint
}

export interface V1Junction_AccountKey20 {
  __kind: 'AccountKey20'
  network: V0NetworkId
  key: Uint8Array
}

export interface V1Junction_PalletInstance {
  __kind: 'PalletInstance'
  value: number
}

export interface V1Junction_GeneralIndex {
  __kind: 'GeneralIndex'
  value: bigint
}

export interface V1Junction_GeneralKey {
  __kind: 'GeneralKey'
  value: Uint8Array
}

export interface V1Junction_OnlyChild {
  __kind: 'OnlyChild'
}

export interface V1Junction_Plurality {
  __kind: 'Plurality'
  id: V0BodyId
  part: V0BodyPart
}

export type V1AssetInstance = V1AssetInstance_Undefined | V1AssetInstance_Index | V1AssetInstance_Array4 | V1AssetInstance_Array8 | V1AssetInstance_Array16 | V1AssetInstance_Array32 | V1AssetInstance_Blob

export interface V1AssetInstance_Undefined {
  __kind: 'Undefined'
}

export interface V1AssetInstance_Index {
  __kind: 'Index'
  value: bigint
}

export interface V1AssetInstance_Array4 {
  __kind: 'Array4'
  value: Uint8Array
}

export interface V1AssetInstance_Array8 {
  __kind: 'Array8'
  value: Uint8Array
}

export interface V1AssetInstance_Array16 {
  __kind: 'Array16'
  value: Uint8Array
}

export interface V1AssetInstance_Array32 {
  __kind: 'Array32'
  value: Uint8Array
}

export interface V1AssetInstance_Blob {
  __kind: 'Blob'
  value: Uint8Array
}

export type V0Junction = V0Junction_Parent | V0Junction_Parachain | V0Junction_AccountId32 | V0Junction_AccountIndex64 | V0Junction_AccountKey20 | V0Junction_PalletInstance | V0Junction_GeneralIndex | V0Junction_GeneralKey | V0Junction_OnlyChild | V0Junction_Plurality

export interface V0Junction_Parent {
  __kind: 'Parent'
}

export interface V0Junction_Parachain {
  __kind: 'Parachain'
  value: number
}

export interface V0Junction_AccountId32 {
  __kind: 'AccountId32'
  network: V0NetworkId
  id: Uint8Array
}

export interface V0Junction_AccountIndex64 {
  __kind: 'AccountIndex64'
  network: V0NetworkId
  index: bigint
}

export interface V0Junction_AccountKey20 {
  __kind: 'AccountKey20'
  network: V0NetworkId
  key: Uint8Array
}

export interface V0Junction_PalletInstance {
  __kind: 'PalletInstance'
  value: number
}

export interface V0Junction_GeneralIndex {
  __kind: 'GeneralIndex'
  value: bigint
}

export interface V0Junction_GeneralKey {
  __kind: 'GeneralKey'
  value: Uint8Array
}

export interface V0Junction_OnlyChild {
  __kind: 'OnlyChild'
}

export interface V0Junction_Plurality {
  __kind: 'Plurality'
  id: V0BodyId
  part: V0BodyPart
}

export interface ParachainInherentData {
  validationData: V1PersistedValidationData
  relayChainState: StorageProof
  downwardMessages: InboundDownwardMessage[]
  horizontalMessages: [number, InboundHrmpMessage[]][]
}

export interface Header {
  parentHash: Uint8Array
  number: number
  stateRoot: Uint8Array
  extrinsicsRoot: Uint8Array
  digest: Digest
}

export interface SessionKeys {
  aura: Uint8Array
}

export interface Range {
  min: bigint
  ideal: bigint
  max: bigint
}

export interface Type_266 {
  min: number
  ideal: number
  max: number
}

export type AccountVote = AccountVote_Standard | AccountVote_Split

export interface AccountVote_Standard {
  __kind: 'Standard'
  vote: number
  balance: bigint
}

export interface AccountVote_Split {
  __kind: 'Split'
  aye: bigint
  nay: bigint
}

export type Conviction = Conviction_None | Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x

export interface Conviction_None {
  __kind: 'None'
}

export interface Conviction_Locked1x {
  __kind: 'Locked1x'
}

export interface Conviction_Locked2x {
  __kind: 'Locked2x'
}

export interface Conviction_Locked3x {
  __kind: 'Locked3x'
}

export interface Conviction_Locked4x {
  __kind: 'Locked4x'
}

export interface Conviction_Locked5x {
  __kind: 'Locked5x'
}

export interface Conviction_Locked6x {
  __kind: 'Locked6x'
}

export type Renouncing = Renouncing_Member | Renouncing_RunnerUp | Renouncing_Candidate

export interface Renouncing_Member {
  __kind: 'Member'
}

export interface Renouncing_RunnerUp {
  __kind: 'RunnerUp'
}

export interface Renouncing_Candidate {
  __kind: 'Candidate'
  value: number
}

export type VersionedXcm = VersionedXcm_V0 | VersionedXcm_V1 | VersionedXcm_V2

export interface VersionedXcm_V0 {
  __kind: 'V0'
  value: V0Xcm
}

export interface VersionedXcm_V1 {
  __kind: 'V1'
  value: V1Xcm
}

export interface VersionedXcm_V2 {
  __kind: 'V2'
  value: V2Instruction[]
}

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1

export interface VersionedMultiAssets_V0 {
  __kind: 'V0'
  value: V0MultiAsset[]
}

export interface VersionedMultiAssets_V1 {
  __kind: 'V1'
  value: V1MultiAsset[]
}

export type Type_310 = Type_310_V0 | Type_310_V1 | Type_310_V2

export interface Type_310_V0 {
  __kind: 'V0'
  value: Type_311
}

export interface Type_310_V1 {
  __kind: 'V1'
  value: Type_316
}

export interface Type_310_V2 {
  __kind: 'V2'
  value: Type_322[]
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited

export interface V2WeightLimit_Unlimited {
  __kind: 'Unlimited'
}

export interface V2WeightLimit_Limited {
  __kind: 'Limited'
  value: bigint
}

export interface IdentityInfo {
  additional: [Data, Data][]
  display: Data
  legal: Data
  web: Data
  riot: Data
  email: Data
  pgpFingerprint: (Uint8Array | undefined)
  image: Data
  twitter: Data
}

export type Data = Data_None | Data_Raw0 | Data_Raw1 | Data_Raw2 | Data_Raw3 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_BlakeTwo256 | Data_Sha256 | Data_Keccak256 | Data_ShaThree256

export interface Data_None {
  __kind: 'None'
}

export interface Data_Raw0 {
  __kind: 'Raw0'
  value: Uint8Array
}

export interface Data_Raw1 {
  __kind: 'Raw1'
  value: Uint8Array
}

export interface Data_Raw2 {
  __kind: 'Raw2'
  value: Uint8Array
}

export interface Data_Raw3 {
  __kind: 'Raw3'
  value: Uint8Array
}

export interface Data_Raw4 {
  __kind: 'Raw4'
  value: Uint8Array
}

export interface Data_Raw5 {
  __kind: 'Raw5'
  value: Uint8Array
}

export interface Data_Raw6 {
  __kind: 'Raw6'
  value: Uint8Array
}

export interface Data_Raw7 {
  __kind: 'Raw7'
  value: Uint8Array
}

export interface Data_Raw8 {
  __kind: 'Raw8'
  value: Uint8Array
}

export interface Data_Raw9 {
  __kind: 'Raw9'
  value: Uint8Array
}

export interface Data_Raw10 {
  __kind: 'Raw10'
  value: Uint8Array
}

export interface Data_Raw11 {
  __kind: 'Raw11'
  value: Uint8Array
}

export interface Data_Raw12 {
  __kind: 'Raw12'
  value: Uint8Array
}

export interface Data_Raw13 {
  __kind: 'Raw13'
  value: Uint8Array
}

export interface Data_Raw14 {
  __kind: 'Raw14'
  value: Uint8Array
}

export interface Data_Raw15 {
  __kind: 'Raw15'
  value: Uint8Array
}

export interface Data_Raw16 {
  __kind: 'Raw16'
  value: Uint8Array
}

export interface Data_Raw17 {
  __kind: 'Raw17'
  value: Uint8Array
}

export interface Data_Raw18 {
  __kind: 'Raw18'
  value: Uint8Array
}

export interface Data_Raw19 {
  __kind: 'Raw19'
  value: Uint8Array
}

export interface Data_Raw20 {
  __kind: 'Raw20'
  value: Uint8Array
}

export interface Data_Raw21 {
  __kind: 'Raw21'
  value: Uint8Array
}

export interface Data_Raw22 {
  __kind: 'Raw22'
  value: Uint8Array
}

export interface Data_Raw23 {
  __kind: 'Raw23'
  value: Uint8Array
}

export interface Data_Raw24 {
  __kind: 'Raw24'
  value: Uint8Array
}

export interface Data_Raw25 {
  __kind: 'Raw25'
  value: Uint8Array
}

export interface Data_Raw26 {
  __kind: 'Raw26'
  value: Uint8Array
}

export interface Data_Raw27 {
  __kind: 'Raw27'
  value: Uint8Array
}

export interface Data_Raw28 {
  __kind: 'Raw28'
  value: Uint8Array
}

export interface Data_Raw29 {
  __kind: 'Raw29'
  value: Uint8Array
}

export interface Data_Raw30 {
  __kind: 'Raw30'
  value: Uint8Array
}

export interface Data_Raw31 {
  __kind: 'Raw31'
  value: Uint8Array
}

export interface Data_Raw32 {
  __kind: 'Raw32'
  value: Uint8Array
}

export interface Data_BlakeTwo256 {
  __kind: 'BlakeTwo256'
  value: Uint8Array
}

export interface Data_Sha256 {
  __kind: 'Sha256'
  value: Uint8Array
}

export interface Data_Keccak256 {
  __kind: 'Keccak256'
  value: Uint8Array
}

export interface Data_ShaThree256 {
  __kind: 'ShaThree256'
  value: Uint8Array
}

export type Judgement = Judgement_Unknown | Judgement_FeePaid | Judgement_Reasonable | Judgement_KnownGood | Judgement_OutOfDate | Judgement_LowQuality | Judgement_Erroneous

export interface Judgement_Unknown {
  __kind: 'Unknown'
}

export interface Judgement_FeePaid {
  __kind: 'FeePaid'
  value: bigint
}

export interface Judgement_Reasonable {
  __kind: 'Reasonable'
}

export interface Judgement_KnownGood {
  __kind: 'KnownGood'
}

export interface Judgement_OutOfDate {
  __kind: 'OutOfDate'
}

export interface Judgement_LowQuality {
  __kind: 'LowQuality'
}

export interface Judgement_Erroneous {
  __kind: 'Erroneous'
}

export interface VestingInfo {
  locked: bigint
  perBlock: bigint
  startingBlock: number
}

export type VersionedMultiAsset = VersionedMultiAsset_V0 | VersionedMultiAsset_V1

export interface VersionedMultiAsset_V0 {
  __kind: 'V0'
  value: V0MultiAsset
}

export interface VersionedMultiAsset_V1 {
  __kind: 'V1'
  value: V1MultiAsset
}

export interface AssetId {
  chainId: number
  assetType: number
  assetIndex: bigint
}

export type FundStatus = FundStatus_Ongoing | FundStatus_Retired | FundStatus_Success | FundStatus_Failed | FundStatus_RefundWithdrew | FundStatus_RedeemWithdrew | FundStatus_FailedToContinue | FundStatus_End

export interface FundStatus_Ongoing {
  __kind: 'Ongoing'
}

export interface FundStatus_Retired {
  __kind: 'Retired'
}

export interface FundStatus_Success {
  __kind: 'Success'
}

export interface FundStatus_Failed {
  __kind: 'Failed'
}

export interface FundStatus_RefundWithdrew {
  __kind: 'RefundWithdrew'
}

export interface FundStatus_RedeemWithdrew {
  __kind: 'RedeemWithdrew'
}

export interface FundStatus_FailedToContinue {
  __kind: 'FailedToContinue'
}

export interface FundStatus_End {
  __kind: 'End'
}

export type Type_409 = Type_409_Ongoing | Type_409_Retired | Type_409_Success | Type_409_Failed | Type_409_RefundWithdrew | Type_409_RedeemWithdrew | Type_409_FailedToContinue

export interface Type_409_Ongoing {
  __kind: 'Ongoing'
}

export interface Type_409_Retired {
  __kind: 'Retired'
}

export interface Type_409_Success {
  __kind: 'Success'
}

export interface Type_409_Failed {
  __kind: 'Failed'
}

export interface Type_409_RefundWithdrew {
  __kind: 'RefundWithdrew'
}

export interface Type_409_RedeemWithdrew {
  __kind: 'RedeemWithdrew'
}

export interface Type_409_FailedToContinue {
  __kind: 'FailedToContinue'
}

export type XcmInterfaceOperation = XcmInterfaceOperation_UmpContributeTransact | XcmInterfaceOperation_StatemineTransfer

export interface XcmInterfaceOperation_UmpContributeTransact {
  __kind: 'UmpContributeTransact'
}

export interface XcmInterfaceOperation_StatemineTransfer {
  __kind: 'StatemineTransfer'
}

/**
 * Event for the System pallet.
 */
export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount | SystemEvent_Remarked

/**
 * An extrinsic completed successfully.
 */
export interface SystemEvent_ExtrinsicSuccess {
  __kind: 'ExtrinsicSuccess'
  dispatchInfo: DispatchInfo
}

/**
 * An extrinsic failed.
 */
export interface SystemEvent_ExtrinsicFailed {
  __kind: 'ExtrinsicFailed'
  dispatchError: DispatchError
  dispatchInfo: DispatchInfo
}

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
  __kind: 'CodeUpdated'
}

/**
 * A new account was created.
 */
export interface SystemEvent_NewAccount {
  __kind: 'NewAccount'
  account: Uint8Array
}

/**
 * An account was reaped.
 */
export interface SystemEvent_KilledAccount {
  __kind: 'KilledAccount'
  account: Uint8Array
}

/**
 * On on-chain remark happened.
 */
export interface SystemEvent_Remarked {
  __kind: 'Remarked'
  sender: Uint8Array
  hash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type IndicesEvent = IndicesEvent_IndexAssigned | IndicesEvent_IndexFreed | IndicesEvent_IndexFrozen

/**
 * A account index was assigned.
 */
export interface IndicesEvent_IndexAssigned {
  __kind: 'IndexAssigned'
  who: Uint8Array
  index: number
}

/**
 * A account index has been freed up (unassigned).
 */
export interface IndicesEvent_IndexFreed {
  __kind: 'IndexFreed'
  index: number
}

/**
 * A account index has been frozen to its current account ID.
 */
export interface IndicesEvent_IndexFrozen {
  __kind: 'IndexFrozen'
  index: number
  who: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ParachainSystemEvent = ParachainSystemEvent_ValidationFunctionStored | ParachainSystemEvent_ValidationFunctionApplied | ParachainSystemEvent_ValidationFunctionDiscarded | ParachainSystemEvent_UpgradeAuthorized | ParachainSystemEvent_DownwardMessagesReceived | ParachainSystemEvent_DownwardMessagesProcessed

/**
 * The validation function has been scheduled to apply.
 */
export interface ParachainSystemEvent_ValidationFunctionStored {
  __kind: 'ValidationFunctionStored'
}

/**
 * The validation function was applied as of the contained relay chain block number.
 */
export interface ParachainSystemEvent_ValidationFunctionApplied {
  __kind: 'ValidationFunctionApplied'
  value: number
}

/**
 * The relay-chain aborted the upgrade process.
 */
export interface ParachainSystemEvent_ValidationFunctionDiscarded {
  __kind: 'ValidationFunctionDiscarded'
}

/**
 * An upgrade has been authorized.
 */
export interface ParachainSystemEvent_UpgradeAuthorized {
  __kind: 'UpgradeAuthorized'
  value: Uint8Array
}

/**
 * Some downward messages have been received and will be processed.
 * \[ count \]
 */
export interface ParachainSystemEvent_DownwardMessagesReceived {
  __kind: 'DownwardMessagesReceived'
  value: number
}

/**
 * Downward messages were processed using the given weight.
 * \[ weight_used, result_mqc_head \]
 */
export interface ParachainSystemEvent_DownwardMessagesProcessed {
  __kind: 'DownwardMessagesProcessed'
  value: [bigint, Uint8Array]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated | BalancesEvent_Deposit | BalancesEvent_Withdraw | BalancesEvent_Slashed

/**
 * An account was created with some free balance.
 */
export interface BalancesEvent_Endowed {
  __kind: 'Endowed'
  account: Uint8Array
  freeBalance: bigint
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss.
 */
export interface BalancesEvent_DustLost {
  __kind: 'DustLost'
  account: Uint8Array
  amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface BalancesEvent_Transfer {
  __kind: 'Transfer'
  from: Uint8Array
  to: Uint8Array
  amount: bigint
}

/**
 * A balance was set by root.
 */
export interface BalancesEvent_BalanceSet {
  __kind: 'BalanceSet'
  who: Uint8Array
  free: bigint
  reserved: bigint
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface BalancesEvent_Reserved {
  __kind: 'Reserved'
  who: Uint8Array
  amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface BalancesEvent_Unreserved {
  __kind: 'Unreserved'
  who: Uint8Array
  amount: bigint
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 */
export interface BalancesEvent_ReserveRepatriated {
  __kind: 'ReserveRepatriated'
  from: Uint8Array
  to: Uint8Array
  amount: bigint
  destinationStatus: BalanceStatus
}

/**
 * Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
  __kind: 'Deposit'
  who: Uint8Array
  amount: bigint
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees).
 */
export interface BalancesEvent_Withdraw {
  __kind: 'Withdraw'
  who: Uint8Array
  amount: bigint
}

/**
 * Some amount was removed from the account (e.g. for misbehavior).
 */
export interface BalancesEvent_Slashed {
  __kind: 'Slashed'
  who: Uint8Array
  amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SessionEvent = SessionEvent_NewSession

/**
 * New session has happened. Note that the argument is the session index, not the
 * block number as the type might suggest.
 */
export interface SessionEvent_NewSession {
  __kind: 'NewSession'
  sessionIndex: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ParachainStakingEvent = ParachainStakingEvent_NewRound | ParachainStakingEvent_JoinedCollatorCandidates | ParachainStakingEvent_CollatorChosen | ParachainStakingEvent_CandidateBondLessRequested | ParachainStakingEvent_CandidateBondedMore | ParachainStakingEvent_CandidateBondedLess | ParachainStakingEvent_CandidateWentOffline | ParachainStakingEvent_CandidateBackOnline | ParachainStakingEvent_CandidateScheduledExit | ParachainStakingEvent_CancelledCandidateExit | ParachainStakingEvent_CancelledCandidateBondLess | ParachainStakingEvent_CandidateLeft | ParachainStakingEvent_DelegationDecreaseScheduled | ParachainStakingEvent_DelegationIncreased | ParachainStakingEvent_DelegationDecreased | ParachainStakingEvent_DelegatorExitScheduled | ParachainStakingEvent_DelegationRevocationScheduled | ParachainStakingEvent_DelegatorLeft | ParachainStakingEvent_DelegationRevoked | ParachainStakingEvent_DelegationKicked | ParachainStakingEvent_DelegatorExitCancelled | ParachainStakingEvent_CancelledDelegationRequest | ParachainStakingEvent_Delegation | ParachainStakingEvent_DelegatorLeftCandidate | ParachainStakingEvent_Rewarded | ParachainStakingEvent_ReservedForParachainBond | ParachainStakingEvent_ParachainBondAccountSet | ParachainStakingEvent_ParachainBondReservePercentSet | ParachainStakingEvent_ParachainBondReservePaymentSet | ParachainStakingEvent_InflationSet | ParachainStakingEvent_StakeExpectationsSet | ParachainStakingEvent_TotalSelectedSet | ParachainStakingEvent_CollatorCommissionSet | ParachainStakingEvent_BlocksPerRoundSet

/**
 * Started new round.
 */
export interface ParachainStakingEvent_NewRound {
  __kind: 'NewRound'
  startingBlock: number
  round: number
  selectedCollatorsNumber: number
  totalBalance: bigint
}

/**
 * Account joined the set of collator candidates.
 */
export interface ParachainStakingEvent_JoinedCollatorCandidates {
  __kind: 'JoinedCollatorCandidates'
  account: Uint8Array
  amountLocked: bigint
  newTotalAmtLocked: bigint
}

/**
 * Candidate selected for collators. Total Exposed Amount includes all delegations.
 */
export interface ParachainStakingEvent_CollatorChosen {
  __kind: 'CollatorChosen'
  round: number
  collatorAccount: Uint8Array
  totalExposedAmount: bigint
}

/**
 * Сandidate requested to decrease a self bond.
 */
export interface ParachainStakingEvent_CandidateBondLessRequested {
  __kind: 'CandidateBondLessRequested'
  candidate: Uint8Array
  amountToDecrease: bigint
  executeRound: number
}

/**
 * Сandidate has increased a self bond.
 */
export interface ParachainStakingEvent_CandidateBondedMore {
  __kind: 'CandidateBondedMore'
  candidate: Uint8Array
  amount: bigint
  newTotalBond: bigint
}

/**
 * Сandidate has decreased a self bond.
 */
export interface ParachainStakingEvent_CandidateBondedLess {
  __kind: 'CandidateBondedLess'
  candidate: Uint8Array
  amount: bigint
  newBond: bigint
}

/**
 * Candidate temporarily leave the set of collator candidates without unbonding.
 */
export interface ParachainStakingEvent_CandidateWentOffline {
  __kind: 'CandidateWentOffline'
  candidate: Uint8Array
}

/**
 * Candidate rejoins the set of collator candidates.
 */
export interface ParachainStakingEvent_CandidateBackOnline {
  __kind: 'CandidateBackOnline'
  candidate: Uint8Array
}

/**
 * Сandidate has requested to leave the set of candidates.
 */
export interface ParachainStakingEvent_CandidateScheduledExit {
  __kind: 'CandidateScheduledExit'
  exitAllowedRound: number
  candidate: Uint8Array
  scheduledExit: number
}

/**
 * Cancelled request to leave the set of candidates.
 */
export interface ParachainStakingEvent_CancelledCandidateExit {
  __kind: 'CancelledCandidateExit'
  candidate: Uint8Array
}

/**
 * Cancelled request to decrease candidate's bond.
 */
export interface ParachainStakingEvent_CancelledCandidateBondLess {
  __kind: 'CancelledCandidateBondLess'
  candidate: Uint8Array
  amount: bigint
  executeRound: number
}

/**
 * Candidate has left the set of candidates.
 */
export interface ParachainStakingEvent_CandidateLeft {
  __kind: 'CandidateLeft'
  exCandidate: Uint8Array
  unlockedAmount: bigint
  newTotalAmtLocked: bigint
}

/**
 * Delegator requested to decrease a bond for the collator candidate.
 */
export interface ParachainStakingEvent_DelegationDecreaseScheduled {
  __kind: 'DelegationDecreaseScheduled'
  delegator: Uint8Array
  candidate: Uint8Array
  amountToDecrease: bigint
  executeRound: number
}

export interface ParachainStakingEvent_DelegationIncreased {
  __kind: 'DelegationIncreased'
  delegator: Uint8Array
  candidate: Uint8Array
  amount: bigint
  inTop: boolean
}

export interface ParachainStakingEvent_DelegationDecreased {
  __kind: 'DelegationDecreased'
  delegator: Uint8Array
  candidate: Uint8Array
  amount: bigint
  inTop: boolean
}

/**
 * Delegator requested to leave the set of delegators.
 */
export interface ParachainStakingEvent_DelegatorExitScheduled {
  __kind: 'DelegatorExitScheduled'
  round: number
  delegator: Uint8Array
  scheduledExit: number
}

/**
 * Delegator requested to revoke delegation.
 */
export interface ParachainStakingEvent_DelegationRevocationScheduled {
  __kind: 'DelegationRevocationScheduled'
  round: number
  delegator: Uint8Array
  candidate: Uint8Array
  scheduledExit: number
}

/**
 * Delegator has left the set of delegators.
 */
export interface ParachainStakingEvent_DelegatorLeft {
  __kind: 'DelegatorLeft'
  delegator: Uint8Array
  unstakedAmount: bigint
}

/**
 * Delegation revoked.
 */
export interface ParachainStakingEvent_DelegationRevoked {
  __kind: 'DelegationRevoked'
  delegator: Uint8Array
  candidate: Uint8Array
  unstakedAmount: bigint
}

/**
 * Delegation kicked.
 */
export interface ParachainStakingEvent_DelegationKicked {
  __kind: 'DelegationKicked'
  delegator: Uint8Array
  candidate: Uint8Array
  unstakedAmount: bigint
}

/**
 * Cancelled a pending request to exit the set of delegators.
 */
export interface ParachainStakingEvent_DelegatorExitCancelled {
  __kind: 'DelegatorExitCancelled'
  delegator: Uint8Array
}

/**
 * Cancelled request to change an existing delegation.
 */
export interface ParachainStakingEvent_CancelledDelegationRequest {
  __kind: 'CancelledDelegationRequest'
  delegator: Uint8Array
  cancelledRequest: DelegationRequest
}

/**
 * New delegation (increase of the existing one).
 */
export interface ParachainStakingEvent_Delegation {
  __kind: 'Delegation'
  delegator: Uint8Array
  lockedAmount: bigint
  candidate: Uint8Array
  delegatorPosition: DelegatorAdded
}

/**
 * Delegation from candidate state has been remove.
 */
export interface ParachainStakingEvent_DelegatorLeftCandidate {
  __kind: 'DelegatorLeftCandidate'
  delegator: Uint8Array
  candidate: Uint8Array
  unstakedAmount: bigint
  totalCandidateStaked: bigint
}

/**
 * Paid the account (delegator or collator) the balance as liquid rewards.
 */
export interface ParachainStakingEvent_Rewarded {
  __kind: 'Rewarded'
  account: Uint8Array
  rewards: bigint
}

/**
 * Transferred to account which holds funds reserved for parachain bond.
 */
export interface ParachainStakingEvent_ReservedForParachainBond {
  __kind: 'ReservedForParachainBond'
  account: Uint8Array
  value: bigint
}

/**
 * Account (re)set for parachain bond treasury.
 */
export interface ParachainStakingEvent_ParachainBondAccountSet {
  __kind: 'ParachainBondAccountSet'
  old: Uint8Array
  new: Uint8Array
}

/**
 * Percent of inflation reserved for parachain bond (re)set.
 */
export interface ParachainStakingEvent_ParachainBondReservePercentSet {
  __kind: 'ParachainBondReservePercentSet'
  old: number
  new: number
}

/**
 * Payment reserved for each round
 */
export interface ParachainStakingEvent_ParachainBondReservePaymentSet {
  __kind: 'ParachainBondReservePaymentSet'
  old: bigint
  new: bigint
}

/**
 * Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
 */
export interface ParachainStakingEvent_InflationSet {
  __kind: 'InflationSet'
  annualMin: number
  annualIdeal: number
  annualMax: number
  roundMin: number
  roundIdeal: number
  roundMax: number
}

/**
 * Staking expectations set.
 */
export interface ParachainStakingEvent_StakeExpectationsSet {
  __kind: 'StakeExpectationsSet'
  expectMin: bigint
  expectIdeal: bigint
  expectMax: bigint
}

/**
 * Set total selected candidates to this value.
 */
export interface ParachainStakingEvent_TotalSelectedSet {
  __kind: 'TotalSelectedSet'
  old: number
  new: number
}

/**
 * Set collator commission to this value.
 */
export interface ParachainStakingEvent_CollatorCommissionSet {
  __kind: 'CollatorCommissionSet'
  old: number
  new: number
}

/**
 * Set blocks per round
 */
export interface ParachainStakingEvent_BlocksPerRoundSet {
  __kind: 'BlocksPerRoundSet'
  currentRound: number
  firstBlock: number
  old: number
  new: number
  newPerRoundInflationMin: number
  newPerRoundInflationIdeal: number
  newPerRoundInflationMax: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type DemocracyEvent = DemocracyEvent_Proposed | DemocracyEvent_Tabled | DemocracyEvent_ExternalTabled | DemocracyEvent_Started | DemocracyEvent_Passed | DemocracyEvent_NotPassed | DemocracyEvent_Cancelled | DemocracyEvent_Executed | DemocracyEvent_Delegated | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed | DemocracyEvent_PreimageNoted | DemocracyEvent_PreimageUsed | DemocracyEvent_PreimageInvalid | DemocracyEvent_PreimageMissing | DemocracyEvent_PreimageReaped | DemocracyEvent_Blacklisted | DemocracyEvent_Voted | DemocracyEvent_Seconded

/**
 * A motion has been proposed by a public account.
 */
export interface DemocracyEvent_Proposed {
  __kind: 'Proposed'
  proposalIndex: number
  deposit: bigint
}

/**
 * A public proposal has been tabled for referendum vote.
 */
export interface DemocracyEvent_Tabled {
  __kind: 'Tabled'
  proposalIndex: number
  deposit: bigint
  depositors: Uint8Array[]
}

/**
 * An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
  __kind: 'ExternalTabled'
}

/**
 * A referendum has begun.
 */
export interface DemocracyEvent_Started {
  __kind: 'Started'
  refIndex: number
  threshold: VoteThreshold
}

/**
 * A proposal has been approved by referendum.
 */
export interface DemocracyEvent_Passed {
  __kind: 'Passed'
  refIndex: number
}

/**
 * A proposal has been rejected by referendum.
 */
export interface DemocracyEvent_NotPassed {
  __kind: 'NotPassed'
  refIndex: number
}

/**
 * A referendum has been cancelled.
 */
export interface DemocracyEvent_Cancelled {
  __kind: 'Cancelled'
  refIndex: number
}

/**
 * A proposal has been enacted.
 */
export interface DemocracyEvent_Executed {
  __kind: 'Executed'
  refIndex: number
  result: Result<null, DispatchError>
}

/**
 * An account has delegated their vote to another account.
 */
export interface DemocracyEvent_Delegated {
  __kind: 'Delegated'
  who: Uint8Array
  target: Uint8Array
}

/**
 * An account has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
  __kind: 'Undelegated'
  account: Uint8Array
}

/**
 * An external proposal has been vetoed.
 */
export interface DemocracyEvent_Vetoed {
  __kind: 'Vetoed'
  who: Uint8Array
  proposalHash: Uint8Array
  until: number
}

/**
 * A proposal's preimage was noted, and the deposit taken.
 */
export interface DemocracyEvent_PreimageNoted {
  __kind: 'PreimageNoted'
  proposalHash: Uint8Array
  who: Uint8Array
  deposit: bigint
}

/**
 * A proposal preimage was removed and used (the deposit was returned).
 */
export interface DemocracyEvent_PreimageUsed {
  __kind: 'PreimageUsed'
  proposalHash: Uint8Array
  provider: Uint8Array
  deposit: bigint
}

/**
 * A proposal could not be executed because its preimage was invalid.
 */
export interface DemocracyEvent_PreimageInvalid {
  __kind: 'PreimageInvalid'
  proposalHash: Uint8Array
  refIndex: number
}

/**
 * A proposal could not be executed because its preimage was missing.
 */
export interface DemocracyEvent_PreimageMissing {
  __kind: 'PreimageMissing'
  proposalHash: Uint8Array
  refIndex: number
}

/**
 * A registered preimage was removed and the deposit collected by the reaper.
 */
export interface DemocracyEvent_PreimageReaped {
  __kind: 'PreimageReaped'
  proposalHash: Uint8Array
  provider: Uint8Array
  deposit: bigint
  reaper: Uint8Array
}

/**
 * A proposal_hash has been blacklisted permanently.
 */
export interface DemocracyEvent_Blacklisted {
  __kind: 'Blacklisted'
  proposalHash: Uint8Array
}

/**
 * An account has voted in a referendum
 */
export interface DemocracyEvent_Voted {
  __kind: 'Voted'
  voter: Uint8Array
  refIndex: number
  vote: AccountVote
}

/**
 * An account has secconded a proposal
 */
export interface DemocracyEvent_Seconded {
  __kind: 'Seconded'
  seconder: Uint8Array
  propIndex: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CouncilEvent = CouncilEvent_Proposed | CouncilEvent_Voted | CouncilEvent_Approved | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Closed

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface CouncilEvent_Proposed {
  __kind: 'Proposed'
  account: Uint8Array
  proposalIndex: number
  proposalHash: Uint8Array
  threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface CouncilEvent_Voted {
  __kind: 'Voted'
  account: Uint8Array
  proposalHash: Uint8Array
  voted: boolean
  yes: number
  no: number
}

/**
 * A motion was approved by the required threshold.
 */
export interface CouncilEvent_Approved {
  __kind: 'Approved'
  proposalHash: Uint8Array
}

/**
 * A motion was not approved by the required threshold.
 */
export interface CouncilEvent_Disapproved {
  __kind: 'Disapproved'
  proposalHash: Uint8Array
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_Executed {
  __kind: 'Executed'
  proposalHash: Uint8Array
  result: Result<null, DispatchError>
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_MemberExecuted {
  __kind: 'MemberExecuted'
  proposalHash: Uint8Array
  result: Result<null, DispatchError>
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface CouncilEvent_Closed {
  __kind: 'Closed'
  proposalHash: Uint8Array
  yes: number
  no: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted | TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Closed

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Proposed {
  __kind: 'Proposed'
  account: Uint8Array
  proposalIndex: number
  proposalHash: Uint8Array
  threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Voted {
  __kind: 'Voted'
  account: Uint8Array
  proposalHash: Uint8Array
  voted: boolean
  yes: number
  no: number
}

/**
 * A motion was approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Approved {
  __kind: 'Approved'
  proposalHash: Uint8Array
}

/**
 * A motion was not approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Disapproved {
  __kind: 'Disapproved'
  proposalHash: Uint8Array
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_Executed {
  __kind: 'Executed'
  proposalHash: Uint8Array
  result: Result<null, DispatchError>
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
  __kind: 'MemberExecuted'
  proposalHash: Uint8Array
  result: Result<null, DispatchError>
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface TechnicalCommitteeEvent_Closed {
  __kind: 'Closed'
  proposalHash: Uint8Array
  yes: number
  no: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PhragmenElectionEvent = PhragmenElectionEvent_NewTerm | PhragmenElectionEvent_EmptyTerm | PhragmenElectionEvent_ElectionError | PhragmenElectionEvent_MemberKicked | PhragmenElectionEvent_Renounced | PhragmenElectionEvent_CandidateSlashed | PhragmenElectionEvent_SeatHolderSlashed

/**
 * A new term with new_members. This indicates that enough candidates existed to run
 * the election, not that enough have has been elected. The inner value must be examined
 * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
 * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
 * begin with.
 */
export interface PhragmenElectionEvent_NewTerm {
  __kind: 'NewTerm'
  newMembers: [Uint8Array, bigint][]
}

/**
 * No (or not enough) candidates existed for this round. This is different from
 * `NewTerm(\[\])`. See the description of `NewTerm`.
 */
export interface PhragmenElectionEvent_EmptyTerm {
  __kind: 'EmptyTerm'
}

/**
 * Internal error happened while trying to perform election.
 */
export interface PhragmenElectionEvent_ElectionError {
  __kind: 'ElectionError'
}

/**
 * A member has been removed. This should always be followed by either `NewTerm` or
 * `EmptyTerm`.
 */
export interface PhragmenElectionEvent_MemberKicked {
  __kind: 'MemberKicked'
  member: Uint8Array
}

/**
 * Someone has renounced their candidacy.
 */
export interface PhragmenElectionEvent_Renounced {
  __kind: 'Renounced'
  candidate: Uint8Array
}

/**
 * A candidate was slashed by amount due to failing to obtain a seat as member or
 * runner-up.
 * 
 * Note that old members and runners-up are also candidates.
 */
export interface PhragmenElectionEvent_CandidateSlashed {
  __kind: 'CandidateSlashed'
  candidate: Uint8Array
  amount: bigint
}

/**
 * A seat holder was slashed by amount by being forcefully removed from the set.
 */
export interface PhragmenElectionEvent_SeatHolderSlashed {
  __kind: 'SeatHolderSlashed'
  seatHolder: Uint8Array
  amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CouncilMembershipEvent = CouncilMembershipEvent_MemberAdded | CouncilMembershipEvent_MemberRemoved | CouncilMembershipEvent_MembersSwapped | CouncilMembershipEvent_MembersReset | CouncilMembershipEvent_KeyChanged | CouncilMembershipEvent_Dummy

/**
 * The given member was added; see the transaction for who.
 */
export interface CouncilMembershipEvent_MemberAdded {
  __kind: 'MemberAdded'
}

/**
 * The given member was removed; see the transaction for who.
 */
export interface CouncilMembershipEvent_MemberRemoved {
  __kind: 'MemberRemoved'
}

/**
 * Two members were swapped; see the transaction for who.
 */
export interface CouncilMembershipEvent_MembersSwapped {
  __kind: 'MembersSwapped'
}

/**
 * The membership was reset; see the transaction for who the new set is.
 */
export interface CouncilMembershipEvent_MembersReset {
  __kind: 'MembersReset'
}

/**
 * One of the members' keys changed.
 */
export interface CouncilMembershipEvent_KeyChanged {
  __kind: 'KeyChanged'
}

/**
 * Phantom member, never used.
 */
export interface CouncilMembershipEvent_Dummy {
  __kind: 'Dummy'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TechnicalMembershipEvent = TechnicalMembershipEvent_MemberAdded | TechnicalMembershipEvent_MemberRemoved | TechnicalMembershipEvent_MembersSwapped | TechnicalMembershipEvent_MembersReset | TechnicalMembershipEvent_KeyChanged | TechnicalMembershipEvent_Dummy

/**
 * The given member was added; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberAdded {
  __kind: 'MemberAdded'
}

/**
 * The given member was removed; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberRemoved {
  __kind: 'MemberRemoved'
}

/**
 * Two members were swapped; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MembersSwapped {
  __kind: 'MembersSwapped'
}

/**
 * The membership was reset; see the transaction for who the new set is.
 */
export interface TechnicalMembershipEvent_MembersReset {
  __kind: 'MembersReset'
}

/**
 * One of the members' keys changed.
 */
export interface TechnicalMembershipEvent_KeyChanged {
  __kind: 'KeyChanged'
}

/**
 * Phantom member, never used.
 */
export interface TechnicalMembershipEvent_Dummy {
  __kind: 'Dummy'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type XcmpQueueEvent = XcmpQueueEvent_Success | XcmpQueueEvent_Fail | XcmpQueueEvent_BadVersion | XcmpQueueEvent_BadFormat | XcmpQueueEvent_UpwardMessageSent | XcmpQueueEvent_XcmpMessageSent | XcmpQueueEvent_OverweightEnqueued | XcmpQueueEvent_OverweightServiced

/**
 * Some XCM was executed ok.
 */
export interface XcmpQueueEvent_Success {
  __kind: 'Success'
  value: (Uint8Array | undefined)
}

/**
 * Some XCM failed.
 */
export interface XcmpQueueEvent_Fail {
  __kind: 'Fail'
  value: [(Uint8Array | undefined), V2Error]
}

/**
 * Bad XCM version used.
 */
export interface XcmpQueueEvent_BadVersion {
  __kind: 'BadVersion'
  value: (Uint8Array | undefined)
}

/**
 * Bad XCM format used.
 */
export interface XcmpQueueEvent_BadFormat {
  __kind: 'BadFormat'
  value: (Uint8Array | undefined)
}

/**
 * An upward message was sent to the relay chain.
 */
export interface XcmpQueueEvent_UpwardMessageSent {
  __kind: 'UpwardMessageSent'
  value: (Uint8Array | undefined)
}

/**
 * An HRMP message was sent to a sibling parachain.
 */
export interface XcmpQueueEvent_XcmpMessageSent {
  __kind: 'XcmpMessageSent'
  value: (Uint8Array | undefined)
}

/**
 * An XCM exceeded the individual message weight budget.
 */
export interface XcmpQueueEvent_OverweightEnqueued {
  __kind: 'OverweightEnqueued'
  value: [number, number, bigint, bigint]
}

/**
 * An XCM from the overweight queue was executed with the given actual weight used.
 */
export interface XcmpQueueEvent_OverweightServiced {
  __kind: 'OverweightServiced'
  value: [bigint, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PolkadotXcmEvent = PolkadotXcmEvent_Attempted | PolkadotXcmEvent_Sent | PolkadotXcmEvent_UnexpectedResponse | PolkadotXcmEvent_ResponseReady | PolkadotXcmEvent_Notified | PolkadotXcmEvent_NotifyOverweight | PolkadotXcmEvent_NotifyDispatchError | PolkadotXcmEvent_NotifyDecodeFailed | PolkadotXcmEvent_InvalidResponder | PolkadotXcmEvent_InvalidResponderVersion | PolkadotXcmEvent_ResponseTaken | PolkadotXcmEvent_AssetsTrapped | PolkadotXcmEvent_VersionChangeNotified | PolkadotXcmEvent_SupportedVersionChanged | PolkadotXcmEvent_NotifyTargetSendFail | PolkadotXcmEvent_NotifyTargetMigrationFail

/**
 * Execution of an XCM message was attempted.
 * 
 * \[ outcome \]
 */
export interface PolkadotXcmEvent_Attempted {
  __kind: 'Attempted'
  value: V2Outcome
}

/**
 * A XCM message was sent.
 * 
 * \[ origin, destination, message \]
 */
export interface PolkadotXcmEvent_Sent {
  __kind: 'Sent'
  value: [V1MultiLocation, V1MultiLocation, V2Instruction[]]
}

/**
 * Query response received which does not match a registered query. This may be because a
 * matching query was never registered, it may be because it is a duplicate response, or
 * because the query timed out.
 * 
 * \[ origin location, id \]
 */
export interface PolkadotXcmEvent_UnexpectedResponse {
  __kind: 'UnexpectedResponse'
  value: [V1MultiLocation, bigint]
}

/**
 * Query response has been received and is ready for taking with `take_response`. There is
 * no registered notification call.
 * 
 * \[ id, response \]
 */
export interface PolkadotXcmEvent_ResponseReady {
  __kind: 'ResponseReady'
  value: [bigint, V2Response]
}

/**
 * Query response has been received and query is removed. The registered notification has
 * been dispatched and executed successfully.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_Notified {
  __kind: 'Notified'
  value: [bigint, number, number]
}

/**
 * Query response has been received and query is removed. The registered notification could
 * not be dispatched because the dispatch weight is greater than the maximum weight
 * originally budgeted by this runtime for the query result.
 * 
 * \[ id, pallet index, call index, actual weight, max budgeted weight \]
 */
export interface PolkadotXcmEvent_NotifyOverweight {
  __kind: 'NotifyOverweight'
  value: [bigint, number, number, bigint, bigint]
}

/**
 * Query response has been received and query is removed. There was a general error with
 * dispatching the notification call.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_NotifyDispatchError {
  __kind: 'NotifyDispatchError'
  value: [bigint, number, number]
}

/**
 * Query response has been received and query is removed. The dispatch was unable to be
 * decoded into a `Call`; this might be due to dispatch function having a signature which
 * is not `(origin, QueryId, Response)`.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_NotifyDecodeFailed {
  __kind: 'NotifyDecodeFailed'
  value: [bigint, number, number]
}

/**
 * Expected query response has been received but the origin location of the response does
 * not match that expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 * 
 * \[ origin location, id, expected location \]
 */
export interface PolkadotXcmEvent_InvalidResponder {
  __kind: 'InvalidResponder'
  value: [V1MultiLocation, bigint, (V1MultiLocation | undefined)]
}

/**
 * Expected query response has been received but the expected origin location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 * 
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 * 
 * \[ origin location, id \]
 */
export interface PolkadotXcmEvent_InvalidResponderVersion {
  __kind: 'InvalidResponderVersion'
  value: [V1MultiLocation, bigint]
}

/**
 * Received query response has been read and removed.
 * 
 * \[ id \]
 */
export interface PolkadotXcmEvent_ResponseTaken {
  __kind: 'ResponseTaken'
  value: bigint
}

/**
 * Some assets have been placed in an asset trap.
 * 
 * \[ hash, origin, assets \]
 */
export interface PolkadotXcmEvent_AssetsTrapped {
  __kind: 'AssetsTrapped'
  value: [Uint8Array, V1MultiLocation, VersionedMultiAssets]
}

/**
 * An XCM version change notification message has been attempted to be sent.
 * 
 * \[ destination, result \]
 */
export interface PolkadotXcmEvent_VersionChangeNotified {
  __kind: 'VersionChangeNotified'
  value: [V1MultiLocation, number]
}

/**
 * The supported version of a location has been changed. This might be through an
 * automatic notification or a manual intervention.
 * 
 * \[ location, XCM version \]
 */
export interface PolkadotXcmEvent_SupportedVersionChanged {
  __kind: 'SupportedVersionChanged'
  value: [V1MultiLocation, number]
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * sending the notification to it.
 * 
 * \[ location, query ID, error \]
 */
export interface PolkadotXcmEvent_NotifyTargetSendFail {
  __kind: 'NotifyTargetSendFail'
  value: [V1MultiLocation, bigint, V2Error]
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * migrating the location to our new XCM format.
 * 
 * \[ location, query ID \]
 */
export interface PolkadotXcmEvent_NotifyTargetMigrationFail {
  __kind: 'NotifyTargetMigrationFail'
  value: [VersionedMultiLocation, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CumulusXcmEvent = CumulusXcmEvent_InvalidFormat | CumulusXcmEvent_UnsupportedVersion | CumulusXcmEvent_ExecutedDownward

/**
 * Downward message is invalid XCM.
 * \[ id \]
 */
export interface CumulusXcmEvent_InvalidFormat {
  __kind: 'InvalidFormat'
  value: Uint8Array
}

/**
 * Downward message is unsupported version of XCM.
 * \[ id \]
 */
export interface CumulusXcmEvent_UnsupportedVersion {
  __kind: 'UnsupportedVersion'
  value: Uint8Array
}

/**
 * Downward message executed with the given outcome.
 * \[ id, outcome \]
 */
export interface CumulusXcmEvent_ExecutedDownward {
  __kind: 'ExecutedDownward'
  value: [Uint8Array, V2Outcome]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type DmpQueueEvent = DmpQueueEvent_InvalidFormat | DmpQueueEvent_UnsupportedVersion | DmpQueueEvent_ExecutedDownward | DmpQueueEvent_WeightExhausted | DmpQueueEvent_OverweightEnqueued | DmpQueueEvent_OverweightServiced

/**
 * Downward message is invalid XCM.
 * \[ id \]
 */
export interface DmpQueueEvent_InvalidFormat {
  __kind: 'InvalidFormat'
  value: Uint8Array
}

/**
 * Downward message is unsupported version of XCM.
 * \[ id \]
 */
export interface DmpQueueEvent_UnsupportedVersion {
  __kind: 'UnsupportedVersion'
  value: Uint8Array
}

/**
 * Downward message executed with the given outcome.
 * \[ id, outcome \]
 */
export interface DmpQueueEvent_ExecutedDownward {
  __kind: 'ExecutedDownward'
  value: [Uint8Array, V2Outcome]
}

/**
 * The weight limit for handling downward messages was reached.
 * \[ id, remaining, required \]
 */
export interface DmpQueueEvent_WeightExhausted {
  __kind: 'WeightExhausted'
  value: [Uint8Array, bigint, bigint]
}

/**
 * Downward message is overweight and was placed in the overweight queue.
 * \[ id, index, required \]
 */
export interface DmpQueueEvent_OverweightEnqueued {
  __kind: 'OverweightEnqueued'
  value: [Uint8Array, bigint, bigint]
}

/**
 * Downward message from the overweight queue was executed.
 * \[ index, used \]
 */
export interface DmpQueueEvent_OverweightServiced {
  __kind: 'OverweightServiced'
  value: [bigint, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type UtilityEvent = UtilityEvent_BatchInterrupted | UtilityEvent_BatchCompleted | UtilityEvent_ItemCompleted | UtilityEvent_DispatchedAs

/**
 * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 * well as the error.
 */
export interface UtilityEvent_BatchInterrupted {
  __kind: 'BatchInterrupted'
  index: number
  error: DispatchError
}

/**
 * Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
  __kind: 'BatchCompleted'
}

/**
 * A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
  __kind: 'ItemCompleted'
}

/**
 * A call was dispatched.
 */
export interface UtilityEvent_DispatchedAs {
  __kind: 'DispatchedAs'
  result: Result<null, DispatchError>
}

/**
 * Events type.
 */
export type SchedulerEvent = SchedulerEvent_Scheduled | SchedulerEvent_Canceled | SchedulerEvent_Dispatched | SchedulerEvent_CallLookupFailed

/**
 * Scheduled some task.
 */
export interface SchedulerEvent_Scheduled {
  __kind: 'Scheduled'
  when: number
  index: number
}

/**
 * Canceled some task.
 */
export interface SchedulerEvent_Canceled {
  __kind: 'Canceled'
  when: number
  index: number
}

/**
 * Dispatched some task.
 */
export interface SchedulerEvent_Dispatched {
  __kind: 'Dispatched'
  task: [number, number]
  id: (Uint8Array | undefined)
  result: Result<null, DispatchError>
}

/**
 * The call for the provided hash was not found so the task has been aborted.
 */
export interface SchedulerEvent_CallLookupFailed {
  __kind: 'CallLookupFailed'
  task: [number, number]
  id: (Uint8Array | undefined)
  error: LookupError
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ProxyEvent = ProxyEvent_ProxyExecuted | ProxyEvent_AnonymousCreated | ProxyEvent_Announced | ProxyEvent_ProxyAdded

/**
 * A proxy was executed correctly, with the given.
 */
export interface ProxyEvent_ProxyExecuted {
  __kind: 'ProxyExecuted'
  result: Result<null, DispatchError>
}

/**
 * Anonymous account has been created by new proxy with given
 * disambiguation index and proxy type.
 */
export interface ProxyEvent_AnonymousCreated {
  __kind: 'AnonymousCreated'
  anonymous: Uint8Array
  who: Uint8Array
  proxyType: ProxyType
  disambiguationIndex: number
}

/**
 * An announcement was placed to make a call in the future.
 */
export interface ProxyEvent_Announced {
  __kind: 'Announced'
  real: Uint8Array
  proxy: Uint8Array
  callHash: Uint8Array
}

/**
 * A proxy was added.
 */
export interface ProxyEvent_ProxyAdded {
  __kind: 'ProxyAdded'
  delegator: Uint8Array
  delegatee: Uint8Array
  proxyType: ProxyType
  delay: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type MultisigEvent = MultisigEvent_NewMultisig | MultisigEvent_MultisigApproval | MultisigEvent_MultisigExecuted | MultisigEvent_MultisigCancelled

/**
 * A new multisig operation has begun.
 */
export interface MultisigEvent_NewMultisig {
  __kind: 'NewMultisig'
  approving: Uint8Array
  multisig: Uint8Array
  callHash: Uint8Array
}

/**
 * A multisig operation has been approved by someone.
 */
export interface MultisigEvent_MultisigApproval {
  __kind: 'MultisigApproval'
  approving: Uint8Array
  timepoint: Timepoint
  multisig: Uint8Array
  callHash: Uint8Array
}

/**
 * A multisig operation has been executed.
 */
export interface MultisigEvent_MultisigExecuted {
  __kind: 'MultisigExecuted'
  approving: Uint8Array
  timepoint: Timepoint
  multisig: Uint8Array
  callHash: Uint8Array
  result: Result<null, DispatchError>
}

/**
 * A multisig operation has been cancelled.
 */
export interface MultisigEvent_MultisigCancelled {
  __kind: 'MultisigCancelled'
  cancelling: Uint8Array
  timepoint: Timepoint
  multisig: Uint8Array
  callHash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type IdentityEvent = IdentityEvent_IdentitySet | IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_JudgementGiven | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked

/**
 * A name was set or reset (which will remove all judgements).
 */
export interface IdentityEvent_IdentitySet {
  __kind: 'IdentitySet'
  who: Uint8Array
}

/**
 * A name was cleared, and the given balance returned.
 */
export interface IdentityEvent_IdentityCleared {
  __kind: 'IdentityCleared'
  who: Uint8Array
  deposit: bigint
}

/**
 * A name was removed and the given balance slashed.
 */
export interface IdentityEvent_IdentityKilled {
  __kind: 'IdentityKilled'
  who: Uint8Array
  deposit: bigint
}

/**
 * A judgement was asked from a registrar.
 */
export interface IdentityEvent_JudgementRequested {
  __kind: 'JudgementRequested'
  who: Uint8Array
  registrarIndex: number
}

/**
 * A judgement request was retracted.
 */
export interface IdentityEvent_JudgementUnrequested {
  __kind: 'JudgementUnrequested'
  who: Uint8Array
  registrarIndex: number
}

/**
 * A judgement was given by a registrar.
 */
export interface IdentityEvent_JudgementGiven {
  __kind: 'JudgementGiven'
  target: Uint8Array
  registrarIndex: number
}

/**
 * A registrar was added.
 */
export interface IdentityEvent_RegistrarAdded {
  __kind: 'RegistrarAdded'
  registrarIndex: number
}

/**
 * A sub-identity was added to an identity and the deposit paid.
 */
export interface IdentityEvent_SubIdentityAdded {
  __kind: 'SubIdentityAdded'
  sub: Uint8Array
  main: Uint8Array
  deposit: bigint
}

/**
 * A sub-identity was removed from an identity and the deposit freed.
 */
export interface IdentityEvent_SubIdentityRemoved {
  __kind: 'SubIdentityRemoved'
  sub: Uint8Array
  main: Uint8Array
  deposit: bigint
}

/**
 * A sub-identity was cleared, and the given deposit repatriated from the
 * main identity account to the sub-identity account.
 */
export interface IdentityEvent_SubIdentityRevoked {
  __kind: 'SubIdentityRevoked'
  sub: Uint8Array
  main: Uint8Array
  deposit: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type VestingEvent = VestingEvent_VestingUpdated | VestingEvent_VestingCompleted

/**
 * The amount vested has been updated. This could indicate more funds are available. The
 * balance given is the amount which is left unvested (and thus locked).
 * \[account, unvested\]
 */
export interface VestingEvent_VestingUpdated {
  __kind: 'VestingUpdated'
  value: [Uint8Array, bigint]
}

/**
 * An \[account\] has become fully vested. No further vesting can happen.
 */
export interface VestingEvent_VestingCompleted {
  __kind: 'VestingCompleted'
  value: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TreasuryEvent = TreasuryEvent_Proposed | TreasuryEvent_Spending | TreasuryEvent_Awarded | TreasuryEvent_Rejected | TreasuryEvent_Burnt | TreasuryEvent_Rollover | TreasuryEvent_Deposit

/**
 * New proposal.
 */
export interface TreasuryEvent_Proposed {
  __kind: 'Proposed'
  proposalIndex: number
}

/**
 * We have ended a spend period and will now allocate funds.
 */
export interface TreasuryEvent_Spending {
  __kind: 'Spending'
  budgetRemaining: bigint
}

/**
 * Some funds have been allocated.
 */
export interface TreasuryEvent_Awarded {
  __kind: 'Awarded'
  proposalIndex: number
  award: bigint
  account: Uint8Array
}

/**
 * A proposal was rejected; funds were slashed.
 */
export interface TreasuryEvent_Rejected {
  __kind: 'Rejected'
  proposalIndex: number
  slashed: bigint
}

/**
 * Some of our funds have been burnt.
 */
export interface TreasuryEvent_Burnt {
  __kind: 'Burnt'
  burntFunds: bigint
}

/**
 * Spending has finished; this is the amount that rolls over until next spend.
 */
export interface TreasuryEvent_Rollover {
  __kind: 'Rollover'
  rolloverBalance: bigint
}

/**
 * Some funds have been deposited.
 */
export interface TreasuryEvent_Deposit {
  __kind: 'Deposit'
  value: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type BountiesEvent = BountiesEvent_BountyProposed | BountiesEvent_BountyRejected | BountiesEvent_BountyBecameActive | BountiesEvent_BountyAwarded | BountiesEvent_BountyClaimed | BountiesEvent_BountyCanceled | BountiesEvent_BountyExtended

/**
 * New bounty proposal.
 */
export interface BountiesEvent_BountyProposed {
  __kind: 'BountyProposed'
  index: number
}

/**
 * A bounty proposal was rejected; funds were slashed.
 */
export interface BountiesEvent_BountyRejected {
  __kind: 'BountyRejected'
  index: number
  bond: bigint
}

/**
 * A bounty proposal is funded and became active.
 */
export interface BountiesEvent_BountyBecameActive {
  __kind: 'BountyBecameActive'
  index: number
}

/**
 * A bounty is awarded to a beneficiary.
 */
export interface BountiesEvent_BountyAwarded {
  __kind: 'BountyAwarded'
  index: number
  beneficiary: Uint8Array
}

/**
 * A bounty is claimed by beneficiary.
 */
export interface BountiesEvent_BountyClaimed {
  __kind: 'BountyClaimed'
  index: number
  payout: bigint
  beneficiary: Uint8Array
}

/**
 * A bounty is cancelled.
 */
export interface BountiesEvent_BountyCanceled {
  __kind: 'BountyCanceled'
  index: number
}

/**
 * A bounty expiry is extended.
 */
export interface BountiesEvent_BountyExtended {
  __kind: 'BountyExtended'
  index: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TipsEvent = TipsEvent_NewTip | TipsEvent_TipClosing | TipsEvent_TipClosed | TipsEvent_TipRetracted | TipsEvent_TipSlashed

/**
 * A new tip suggestion has been opened.
 */
export interface TipsEvent_NewTip {
  __kind: 'NewTip'
  tipHash: Uint8Array
}

/**
 * A tip suggestion has reached threshold and is closing.
 */
export interface TipsEvent_TipClosing {
  __kind: 'TipClosing'
  tipHash: Uint8Array
}

/**
 * A tip suggestion has been closed.
 */
export interface TipsEvent_TipClosed {
  __kind: 'TipClosed'
  tipHash: Uint8Array
  who: Uint8Array
  payout: bigint
}

/**
 * A tip suggestion has been retracted.
 */
export interface TipsEvent_TipRetracted {
  __kind: 'TipRetracted'
  tipHash: Uint8Array
}

/**
 * A tip suggestion has been slashed.
 */
export interface TipsEvent_TipSlashed {
  __kind: 'TipSlashed'
  tipHash: Uint8Array
  finder: Uint8Array
  deposit: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PreimageEvent = PreimageEvent_Noted | PreimageEvent_Requested | PreimageEvent_Cleared

/**
 * A preimage has been noted.
 */
export interface PreimageEvent_Noted {
  __kind: 'Noted'
  hash: Uint8Array
}

/**
 * A preimage has been requested.
 */
export interface PreimageEvent_Requested {
  __kind: 'Requested'
  hash: Uint8Array
}

/**
 * A preimage has ben cleared.
 */
export interface PreimageEvent_Cleared {
  __kind: 'Cleared'
  hash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type XTokensEvent = XTokensEvent_TransferredMultiAssets

/**
 * Transferred `MultiAsset` with fee.
 */
export interface XTokensEvent_TransferredMultiAssets {
  __kind: 'TransferredMultiAssets'
  sender: Uint8Array
  assets: V1MultiAsset[]
  fee: V1MultiAsset
  dest: V1MultiLocation
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TokensEvent = TokensEvent_Endowed | TokensEvent_DustLost | TokensEvent_Transfer | TokensEvent_Reserved | TokensEvent_Unreserved | TokensEvent_RepatriatedReserve | TokensEvent_BalanceSet

/**
 * An account was created with some free balance.
 */
export interface TokensEvent_Endowed {
  __kind: 'Endowed'
  currencyId: CurrencyId
  who: Uint8Array
  amount: bigint
}

/**
 * An account was removed whose balance was non-zero but below
 * ExistentialDeposit, resulting in an outright loss.
 */
export interface TokensEvent_DustLost {
  __kind: 'DustLost'
  currencyId: CurrencyId
  who: Uint8Array
  amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface TokensEvent_Transfer {
  __kind: 'Transfer'
  currencyId: CurrencyId
  from: Uint8Array
  to: Uint8Array
  amount: bigint
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface TokensEvent_Reserved {
  __kind: 'Reserved'
  currencyId: CurrencyId
  who: Uint8Array
  amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface TokensEvent_Unreserved {
  __kind: 'Unreserved'
  currencyId: CurrencyId
  who: Uint8Array
  amount: bigint
}

/**
 * Some reserved balance was repatriated (moved from reserved to
 * another account).
 */
export interface TokensEvent_RepatriatedReserve {
  __kind: 'RepatriatedReserve'
  currencyId: CurrencyId
  from: Uint8Array
  to: Uint8Array
  amount: bigint
  status: BalanceStatus
}

/**
 * A balance was set by root.
 */
export interface TokensEvent_BalanceSet {
  __kind: 'BalanceSet'
  currencyId: CurrencyId
  who: Uint8Array
  free: bigint
  reserved: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CurrenciesEvent = CurrenciesEvent_Transferred | CurrenciesEvent_BalanceUpdated | CurrenciesEvent_Deposited | CurrenciesEvent_Withdrawn

/**
 * Currency transfer success.
 */
export interface CurrenciesEvent_Transferred {
  __kind: 'Transferred'
  currencyId: CurrencyId
  from: Uint8Array
  to: Uint8Array
  amount: bigint
}

/**
 * Update balance success.
 */
export interface CurrenciesEvent_BalanceUpdated {
  __kind: 'BalanceUpdated'
  currencyId: CurrencyId
  who: Uint8Array
  amount: bigint
}

/**
 * Deposit success.
 */
export interface CurrenciesEvent_Deposited {
  __kind: 'Deposited'
  currencyId: CurrencyId
  who: Uint8Array
  amount: bigint
}

/**
 * Withdraw success.
 */
export interface CurrenciesEvent_Withdrawn {
  __kind: 'Withdrawn'
  currencyId: CurrencyId
  who: Uint8Array
  amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type UnknownTokensEvent = UnknownTokensEvent_Deposited | UnknownTokensEvent_Withdrawn

/**
 * Deposit success.
 */
export interface UnknownTokensEvent_Deposited {
  __kind: 'Deposited'
  asset: V1MultiAsset
  who: V1MultiLocation
}

/**
 * Withdraw success.
 */
export interface UnknownTokensEvent_Withdrawn {
  __kind: 'Withdrawn'
  asset: V1MultiAsset
  who: V1MultiLocation
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type OrmlXcmEvent = OrmlXcmEvent_Sent

/**
 * XCM message sent. \[to, message\]
 */
export interface OrmlXcmEvent_Sent {
  __kind: 'Sent'
  to: V1MultiLocation
  message: V2Instruction[]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ZenlinkProtocolEvent = ZenlinkProtocolEvent_Transferred | ZenlinkProtocolEvent_Burned | ZenlinkProtocolEvent_Minted | ZenlinkProtocolEvent_PairCreated | ZenlinkProtocolEvent_LiquidityAdded | ZenlinkProtocolEvent_LiquidityRemoved | ZenlinkProtocolEvent_AssetSwap | ZenlinkProtocolEvent_TransferredToParachain | ZenlinkProtocolEvent_BootstrapContribute | ZenlinkProtocolEvent_BootstrapEnd | ZenlinkProtocolEvent_BootstrapCreated | ZenlinkProtocolEvent_BootstrapClaim | ZenlinkProtocolEvent_BootstrapUpdate | ZenlinkProtocolEvent_BootstrapRefund | ZenlinkProtocolEvent_DistributeReward | ZenlinkProtocolEvent_ChargeReward | ZenlinkProtocolEvent_WithdrawReward

/**
 * Foreign Asset
 * Some assets were transferred. \[asset_id, owner, target, amount\]
 */
export interface ZenlinkProtocolEvent_Transferred {
  __kind: 'Transferred'
  value: [AssetId, Uint8Array, Uint8Array, bigint]
}

/**
 * Some assets were burned. \[asset_id, owner, amount\]
 */
export interface ZenlinkProtocolEvent_Burned {
  __kind: 'Burned'
  value: [AssetId, Uint8Array, bigint]
}

/**
 * Some assets were minted. \[asset_id, owner, amount\]
 */
export interface ZenlinkProtocolEvent_Minted {
  __kind: 'Minted'
  value: [AssetId, Uint8Array, bigint]
}

/**
 * Swap
 * Create a trading pair. \[asset_0, asset_1\]
 */
export interface ZenlinkProtocolEvent_PairCreated {
  __kind: 'PairCreated'
  value: [AssetId, AssetId]
}

/**
 * Add liquidity. \[owner, asset_0, asset_1, add_balance_0, add_balance_1,
 * mint_balance_lp\]
 */
export interface ZenlinkProtocolEvent_LiquidityAdded {
  __kind: 'LiquidityAdded'
  value: [Uint8Array, AssetId, AssetId, bigint, bigint, bigint]
}

/**
 * Remove liquidity. \[owner, recipient, asset_0, asset_1, rm_balance_0, rm_balance_1,
 * burn_balance_lp\]
 */
export interface ZenlinkProtocolEvent_LiquidityRemoved {
  __kind: 'LiquidityRemoved'
  value: [Uint8Array, Uint8Array, AssetId, AssetId, bigint, bigint, bigint]
}

/**
 * Transact in trading \[owner, recipient, swap_path, balances\]
 */
export interface ZenlinkProtocolEvent_AssetSwap {
  __kind: 'AssetSwap'
  value: [Uint8Array, Uint8Array, AssetId[], bigint[]]
}

/**
 * Transfer by xcm
 * Transferred to parachain. \[asset_id, src, para_id, dest, amount, used_weight\]
 */
export interface ZenlinkProtocolEvent_TransferredToParachain {
  __kind: 'TransferredToParachain'
  value: [AssetId, Uint8Array, number, Uint8Array, bigint, bigint]
}

/**
 * Contribute to bootstrap pair. \[who, asset_0, asset_0_contribute, asset_1_contribute\]
 */
export interface ZenlinkProtocolEvent_BootstrapContribute {
  __kind: 'BootstrapContribute'
  value: [Uint8Array, AssetId, bigint, AssetId, bigint]
}

/**
 * A bootstrap pair end. \[asset_0, asset_1, asset_0_amount, asset_1_amount,
 * total_lp_supply]
 */
export interface ZenlinkProtocolEvent_BootstrapEnd {
  __kind: 'BootstrapEnd'
  value: [AssetId, AssetId, bigint, bigint, bigint]
}

/**
 * Create a bootstrap pair. \[bootstrap_pair_account, asset_0, asset_1,
 * total_supply_0,total_supply_1, capacity_supply_0,capacity_supply_1, end\]
 */
export interface ZenlinkProtocolEvent_BootstrapCreated {
  __kind: 'BootstrapCreated'
  value: [Uint8Array, AssetId, AssetId, bigint, bigint, bigint, bigint, number]
}

/**
 * Claim a bootstrap pair. \[bootstrap_pair_account, claimer, receiver, asset_0, asset_1,
 * asset_0_refund, asset_1_refund, lp_amount\]
 */
export interface ZenlinkProtocolEvent_BootstrapClaim {
  __kind: 'BootstrapClaim'
  value: [Uint8Array, Uint8Array, Uint8Array, AssetId, AssetId, bigint, bigint, bigint]
}

/**
 * Update a bootstrap pair. \[caller, asset_0, asset_1,
 * total_supply_0,total_supply_1, capacity_supply_0,capacity_supply_1\]
 */
export interface ZenlinkProtocolEvent_BootstrapUpdate {
  __kind: 'BootstrapUpdate'
  value: [Uint8Array, AssetId, AssetId, bigint, bigint, bigint, bigint, number]
}

/**
 * Refund from disable bootstrap pair. \[bootstrap_pair_account, caller, asset_0, asset_1,
 * asset_0_refund, asset_1_refund\]
 */
export interface ZenlinkProtocolEvent_BootstrapRefund {
  __kind: 'BootstrapRefund'
  value: [Uint8Array, Uint8Array, AssetId, AssetId, bigint, bigint]
}

/**
 * Bootstrap distribute some rewards to contributors.
 */
export interface ZenlinkProtocolEvent_DistributeReward {
  __kind: 'DistributeReward'
  value: [AssetId, AssetId, Uint8Array, [AssetId, bigint][]]
}

/**
 * Charge reward into a bootstrap.
 */
export interface ZenlinkProtocolEvent_ChargeReward {
  __kind: 'ChargeReward'
  value: [AssetId, AssetId, Uint8Array, [AssetId, bigint][]]
}

/**
 * Withdraw all reward from a bootstrap.
 */
export interface ZenlinkProtocolEvent_WithdrawReward {
  __kind: 'WithdrawReward'
  value: [AssetId, AssetId, Uint8Array]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type MerkleDistributorEvent = MerkleDistributorEvent_Create | MerkleDistributorEvent_Claim | MerkleDistributorEvent_Withdraw | MerkleDistributorEvent_AddToWhiteList | MerkleDistributorEvent_RemoveFromWhiteList

/**
 * create a merkle distributor. \ [merkle distributor id, merkle tree root, total reward balance]
 */
export interface MerkleDistributorEvent_Create {
  __kind: 'Create'
  value: [number, Uint8Array, bigint]
}

/**
 * claim reward. \[merkle distributor id, account, balance]
 */
export interface MerkleDistributorEvent_Claim {
  __kind: 'Claim'
  value: [number, Uint8Array, bigint]
}

/**
 * withdraw reward. \ [merkle distributor id, account, balance]
 */
export interface MerkleDistributorEvent_Withdraw {
  __kind: 'Withdraw'
  value: [number, Uint8Array, bigint]
}

/**
 * add account who can create merkle distributor. \ [account]
 */
export interface MerkleDistributorEvent_AddToWhiteList {
  __kind: 'AddToWhiteList'
  value: Uint8Array
}

/**
 * remove account from the set who can create merkle distributor. \ [account]
 */
export interface MerkleDistributorEvent_RemoveFromWhiteList {
  __kind: 'RemoveFromWhiteList'
  value: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type FlexibleFeeEvent = FlexibleFeeEvent_FlexibleFeeExchanged | FlexibleFeeEvent_FixedRateFeeExchanged | FlexibleFeeEvent_ExtraFeeDeducted

export interface FlexibleFeeEvent_FlexibleFeeExchanged {
  __kind: 'FlexibleFeeExchanged'
  value: [CurrencyId, bigint]
}

export interface FlexibleFeeEvent_FixedRateFeeExchanged {
  __kind: 'FixedRateFeeExchanged'
  value: [CurrencyId, bigint]
}

export interface FlexibleFeeEvent_ExtraFeeDeducted {
  __kind: 'ExtraFeeDeducted'
  value: [ExtraFeeName, CurrencyId, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SalpEvent = SalpEvent_Created | SalpEvent_Contributing | SalpEvent_Contributed | SalpEvent_ContributeFailed | SalpEvent_Withdrew | SalpEvent_Refunded | SalpEvent_AllRefunded | SalpEvent_Redeemed | SalpEvent_Edited | SalpEvent_Dissolved | SalpEvent_Unlocked | SalpEvent_AllUnlocked | SalpEvent_Failed | SalpEvent_Success | SalpEvent_Retired | SalpEvent_End | SalpEvent_Continued | SalpEvent_RefundedDissolved

/**
 * Create a new crowdloaning campaign. [fund_index]
 */
export interface SalpEvent_Created {
  __kind: 'Created'
  value: number
}

/**
 * Contributing to a crowd sale. [who, fund_index, amount]
 */
export interface SalpEvent_Contributing {
  __kind: 'Contributing'
  value: [Uint8Array, number, bigint, Uint8Array]
}

/**
 * Contributed to a crowd sale. [who, fund_index, amount]
 */
export interface SalpEvent_Contributed {
  __kind: 'Contributed'
  value: [Uint8Array, number, bigint, Uint8Array]
}

/**
 * Fail on contribute to crowd sale. [who, fund_index, amount]
 */
export interface SalpEvent_ContributeFailed {
  __kind: 'ContributeFailed'
  value: [Uint8Array, number, bigint, Uint8Array]
}

/**
 * Withdrew full balance of a contributor. [who, fund_index, amount]
 */
export interface SalpEvent_Withdrew {
  __kind: 'Withdrew'
  value: [number, bigint]
}

/**
 * refund to account. [who, fund_index,value]
 */
export interface SalpEvent_Refunded {
  __kind: 'Refunded'
  value: [Uint8Array, number, number, number, bigint]
}

/**
 * all refund
 */
export interface SalpEvent_AllRefunded {
  __kind: 'AllRefunded'
  value: number
}

/**
 * redeem to account. [who, fund_index, first_slot, last_slot, value]
 */
export interface SalpEvent_Redeemed {
  __kind: 'Redeemed'
  value: [Uint8Array, number, number, number, bigint]
}

/**
 * Fund is edited. [fund_index]
 */
export interface SalpEvent_Edited {
  __kind: 'Edited'
  value: number
}

/**
 * Fund is dissolved. [fund_index]
 */
export interface SalpEvent_Dissolved {
  __kind: 'Dissolved'
  value: number
}

/**
 * The vsToken/vsBond was be unlocked. [who, fund_index, value]
 */
export interface SalpEvent_Unlocked {
  __kind: 'Unlocked'
  value: [Uint8Array, number, bigint]
}

export interface SalpEvent_AllUnlocked {
  __kind: 'AllUnlocked'
  value: number
}

/**
 * Fund status change
 */
export interface SalpEvent_Failed {
  __kind: 'Failed'
  value: number
}

export interface SalpEvent_Success {
  __kind: 'Success'
  value: number
}

export interface SalpEvent_Retired {
  __kind: 'Retired'
  value: number
}

export interface SalpEvent_End {
  __kind: 'End'
  value: number
}

export interface SalpEvent_Continued {
  __kind: 'Continued'
  value: [number, number, number]
}

export interface SalpEvent_RefundedDissolved {
  __kind: 'RefundedDissolved'
  value: [number, number, number]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type LiquidityMiningDOTEvent = LiquidityMiningDOTEvent_PoolCreated | LiquidityMiningDOTEvent_PoolCharged | LiquidityMiningDOTEvent_PoolStarted | LiquidityMiningDOTEvent_PoolKilled | LiquidityMiningDOTEvent_PoolRetiredForcefully | LiquidityMiningDOTEvent_PoolEdited | LiquidityMiningDOTEvent_UserDeposited | LiquidityMiningDOTEvent_UserRedeemed | LiquidityMiningDOTEvent_UserClaimed | LiquidityMiningDOTEvent_UserUnlocked | LiquidityMiningDOTEvent_UserCancelUnlock | LiquidityMiningDOTEvent_LazyMigration

/**
 * The liquidity-pool was created
 * 
 * [pool_id, pool_type, trading_pair, keeper]
 */
export interface LiquidityMiningDOTEvent_PoolCreated {
  __kind: 'PoolCreated'
  value: [number, PoolType, [CurrencyId, CurrencyId], Uint8Array]
}

/**
 * The liquidity-pool was charged
 * 
 * [pool_id, pool_type, trading_pair, investor]
 */
export interface LiquidityMiningDOTEvent_PoolCharged {
  __kind: 'PoolCharged'
  value: [number, PoolType, [CurrencyId, CurrencyId], Uint8Array]
}

/**
 * The liquidity-pool was started up
 * 
 * [pool_id, pool_type, trading_pair]
 */
export interface LiquidityMiningDOTEvent_PoolStarted {
  __kind: 'PoolStarted'
  value: [number, PoolType, [CurrencyId, CurrencyId]]
}

/**
 * The liquidity-pool was killed
 * 
 * [pool_id, pool_type, trading_pair]
 */
export interface LiquidityMiningDOTEvent_PoolKilled {
  __kind: 'PoolKilled'
  value: [number, PoolType, [CurrencyId, CurrencyId]]
}

/**
 * The liquidity-pool was retired forcefully
 * 
 * [pool_id, pool_type, trading_pair]
 */
export interface LiquidityMiningDOTEvent_PoolRetiredForcefully {
  __kind: 'PoolRetiredForcefully'
  value: [number, PoolType, [CurrencyId, CurrencyId]]
}

/**
 * The liquidity-pool was edited
 * 
 * [pool_id, old_redeem_limit_time, old_unlock_limit_nums, new_redeem_limit_time,
 * new_unlock_limit_nums]
 */
export interface LiquidityMiningDOTEvent_PoolEdited {
  __kind: 'PoolEdited'
  value: [number, number, number, number, number]
}

/**
 * User deposited tokens to a liquidity-pool
 * 
 * [pool_id, pool_type, trading_pair, amount_deposited, user]
 */
export interface LiquidityMiningDOTEvent_UserDeposited {
  __kind: 'UserDeposited'
  value: [number, PoolType, [CurrencyId, CurrencyId], bigint, Uint8Array]
}

/**
 * User redeemed tokens from a liquidity-mining
 * 
 * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
 */
export interface LiquidityMiningDOTEvent_UserRedeemed {
  __kind: 'UserRedeemed'
  value: [number, PoolType, [CurrencyId, CurrencyId], bigint, number, Uint8Array]
}

/**
 * User withdrew the rewards whose deserved from a liquidity-pool
 * 
 * [pool_id, pool_type, trading_pair, rewards, user]
 */
export interface LiquidityMiningDOTEvent_UserClaimed {
  __kind: 'UserClaimed'
  value: [number, PoolType, [CurrencyId, CurrencyId], [CurrencyId, bigint][], Uint8Array]
}

/**
 * User unlock tokens from a liquidity-pool
 * 
 * [pool_id, pool_type, trading_pair, amount_redeemed, user]
 */
export interface LiquidityMiningDOTEvent_UserUnlocked {
  __kind: 'UserUnlocked'
  value: [number, PoolType, [CurrencyId, CurrencyId], bigint, Uint8Array]
}

/**
 * User cancels a pending-unlock from a liquidity-pool
 * 
 * [pool_id, pool_type, trading_pair, amount_canceled, user]
 */
export interface LiquidityMiningDOTEvent_UserCancelUnlock {
  __kind: 'UserCancelUnlock'
  value: [number, PoolType, [CurrencyId, CurrencyId], bigint, Uint8Array]
}

/**
 * Lazy migration event
 * 
 * [deposit_data_migration_nums, pool_info_migration_nums]
 */
export interface LiquidityMiningDOTEvent_LazyMigration {
  __kind: 'LazyMigration'
  value: [number, number]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type LiquidityMiningEvent = LiquidityMiningEvent_PoolCreated | LiquidityMiningEvent_PoolCharged | LiquidityMiningEvent_PoolStarted | LiquidityMiningEvent_PoolKilled | LiquidityMiningEvent_PoolRetiredForcefully | LiquidityMiningEvent_PoolEdited | LiquidityMiningEvent_UserDeposited | LiquidityMiningEvent_UserRedeemed | LiquidityMiningEvent_UserClaimed | LiquidityMiningEvent_UserUnlocked | LiquidityMiningEvent_UserCancelUnlock | LiquidityMiningEvent_LazyMigration

/**
 * The liquidity-pool was created
 * 
 * [pool_id, pool_type, trading_pair, keeper]
 */
export interface LiquidityMiningEvent_PoolCreated {
  __kind: 'PoolCreated'
  value: [number, PoolType, [CurrencyId, CurrencyId], Uint8Array]
}

/**
 * The liquidity-pool was charged
 * 
 * [pool_id, pool_type, trading_pair, investor]
 */
export interface LiquidityMiningEvent_PoolCharged {
  __kind: 'PoolCharged'
  value: [number, PoolType, [CurrencyId, CurrencyId], Uint8Array]
}

/**
 * The liquidity-pool was started up
 * 
 * [pool_id, pool_type, trading_pair]
 */
export interface LiquidityMiningEvent_PoolStarted {
  __kind: 'PoolStarted'
  value: [number, PoolType, [CurrencyId, CurrencyId]]
}

/**
 * The liquidity-pool was killed
 * 
 * [pool_id, pool_type, trading_pair]
 */
export interface LiquidityMiningEvent_PoolKilled {
  __kind: 'PoolKilled'
  value: [number, PoolType, [CurrencyId, CurrencyId]]
}

/**
 * The liquidity-pool was retired forcefully
 * 
 * [pool_id, pool_type, trading_pair]
 */
export interface LiquidityMiningEvent_PoolRetiredForcefully {
  __kind: 'PoolRetiredForcefully'
  value: [number, PoolType, [CurrencyId, CurrencyId]]
}

/**
 * The liquidity-pool was edited
 * 
 * [pool_id, old_redeem_limit_time, old_unlock_limit_nums, new_redeem_limit_time,
 * new_unlock_limit_nums]
 */
export interface LiquidityMiningEvent_PoolEdited {
  __kind: 'PoolEdited'
  value: [number, number, number, number, number]
}

/**
 * User deposited tokens to a liquidity-pool
 * 
 * [pool_id, pool_type, trading_pair, amount_deposited, user]
 */
export interface LiquidityMiningEvent_UserDeposited {
  __kind: 'UserDeposited'
  value: [number, PoolType, [CurrencyId, CurrencyId], bigint, Uint8Array]
}

/**
 * User redeemed tokens from a liquidity-mining
 * 
 * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
 */
export interface LiquidityMiningEvent_UserRedeemed {
  __kind: 'UserRedeemed'
  value: [number, PoolType, [CurrencyId, CurrencyId], bigint, number, Uint8Array]
}

/**
 * User withdrew the rewards whose deserved from a liquidity-pool
 * 
 * [pool_id, pool_type, trading_pair, rewards, user]
 */
export interface LiquidityMiningEvent_UserClaimed {
  __kind: 'UserClaimed'
  value: [number, PoolType, [CurrencyId, CurrencyId], [CurrencyId, bigint][], Uint8Array]
}

/**
 * User unlock tokens from a liquidity-pool
 * 
 * [pool_id, pool_type, trading_pair, amount_redeemed, user]
 */
export interface LiquidityMiningEvent_UserUnlocked {
  __kind: 'UserUnlocked'
  value: [number, PoolType, [CurrencyId, CurrencyId], bigint, Uint8Array]
}

/**
 * User cancels a pending-unlock from a liquidity-pool
 * 
 * [pool_id, pool_type, trading_pair, amount_canceled, user]
 */
export interface LiquidityMiningEvent_UserCancelUnlock {
  __kind: 'UserCancelUnlock'
  value: [number, PoolType, [CurrencyId, CurrencyId], bigint, Uint8Array]
}

/**
 * Lazy migration event
 * 
 * [deposit_data_migration_nums, pool_info_migration_nums]
 */
export interface LiquidityMiningEvent_LazyMigration {
  __kind: 'LazyMigration'
  value: [number, number]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TokenIssuerEvent = TokenIssuerEvent_AddedToIssueList | TokenIssuerEvent_RemovedFromIssueList | TokenIssuerEvent_AddedToTransferList | TokenIssuerEvent_RemovedFromTransferList | TokenIssuerEvent_Issued | TokenIssuerEvent_Transferred

/**
 * Successful added a new account to the issue whitelist. \[account, currency_id]\
 */
export interface TokenIssuerEvent_AddedToIssueList {
  __kind: 'AddedToIssueList'
  value: [Uint8Array, CurrencyId]
}

/**
 * Successful remove an account from the issue whitelist. \[account, currency_id]\
 */
export interface TokenIssuerEvent_RemovedFromIssueList {
  __kind: 'RemovedFromIssueList'
  value: [Uint8Array, CurrencyId]
}

/**
 * Successful added a new account to the transfer whitelist. \[account, currency_id]\
 */
export interface TokenIssuerEvent_AddedToTransferList {
  __kind: 'AddedToTransferList'
  value: [Uint8Array, CurrencyId]
}

/**
 * Successful remove an account from the transfer whitelist. \[account, currency_id]\
 */
export interface TokenIssuerEvent_RemovedFromTransferList {
  __kind: 'RemovedFromTransferList'
  value: [Uint8Array, CurrencyId]
}

/**
 * Token issue success, \[currency_id, dest, amount\]
 */
export interface TokenIssuerEvent_Issued {
  __kind: 'Issued'
  value: [Uint8Array, CurrencyId, bigint]
}

/**
 * Token transferred success, \[origin, dest, currency_id, amount\]
 */
export interface TokenIssuerEvent_Transferred {
  __kind: 'Transferred'
  value: [Uint8Array, Uint8Array, CurrencyId, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type LighteningRedeemEvent = LighteningRedeemEvent_KSMExchanged | LighteningRedeemEvent_KSMAdded | LighteningRedeemEvent_PriceEdited | LighteningRedeemEvent_BlockIntervalEdited | LighteningRedeemEvent_ReleasedPerDayEdited

/**
 * [exchanger, ksm_amount]
 */
export interface LighteningRedeemEvent_KSMExchanged {
  __kind: 'KSMExchanged'
  value: [Uint8Array, bigint]
}

/**
 * [adder, ksm_amount]
 */
export interface LighteningRedeemEvent_KSMAdded {
  __kind: 'KSMAdded'
  value: [Uint8Array, bigint]
}

/**
 * [original_prce, new_price]
 */
export interface LighteningRedeemEvent_PriceEdited {
  __kind: 'PriceEdited'
  value: [bigint, bigint]
}

/**
 * [start, end]
 */
export interface LighteningRedeemEvent_BlockIntervalEdited {
  __kind: 'BlockIntervalEdited'
  value: [number, number]
}

/**
 * [originla_amount_per_day, amount_per_day]
 */
export interface LighteningRedeemEvent_ReleasedPerDayEdited {
  __kind: 'ReleasedPerDayEdited'
  value: [bigint, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SalpLiteEvent = SalpLiteEvent_Created | SalpLiteEvent_Issued | SalpLiteEvent_Withdrew | SalpLiteEvent_Refunded | SalpLiteEvent_Redeemed | SalpLiteEvent_Edited | SalpLiteEvent_Dissolved | SalpLiteEvent_Unlocked | SalpLiteEvent_AllUnlocked | SalpLiteEvent_Failed | SalpLiteEvent_Success | SalpLiteEvent_Retired | SalpLiteEvent_Continued | SalpLiteEvent_RefundedDissolved

/**
 * Create a new crowdloaning campaign. [fund_index]
 */
export interface SalpLiteEvent_Created {
  __kind: 'Created'
  value: number
}

/**
 * Contributed to a crowd sale. [who, fund_index, amount]
 */
export interface SalpLiteEvent_Issued {
  __kind: 'Issued'
  value: [Uint8Array, number, bigint, Uint8Array]
}

/**
 * Withdrew full balance of a contributor. [who, fund_index, amount]
 */
export interface SalpLiteEvent_Withdrew {
  __kind: 'Withdrew'
  value: [number, bigint]
}

/**
 * refund to account. [who, fund_index,value]
 */
export interface SalpLiteEvent_Refunded {
  __kind: 'Refunded'
  value: [Uint8Array, number, number, number, bigint]
}

/**
 * redeem to account. [who, fund_index, first_slot, last_slot, value]
 */
export interface SalpLiteEvent_Redeemed {
  __kind: 'Redeemed'
  value: [Uint8Array, number, number, number, bigint]
}

/**
 * Fund is edited. [fund_index]
 */
export interface SalpLiteEvent_Edited {
  __kind: 'Edited'
  value: number
}

/**
 * Fund is dissolved. [fund_index]
 */
export interface SalpLiteEvent_Dissolved {
  __kind: 'Dissolved'
  value: number
}

/**
 * The vsToken/vsBond was be unlocked. [who, fund_index, value]
 */
export interface SalpLiteEvent_Unlocked {
  __kind: 'Unlocked'
  value: [Uint8Array, number, bigint]
}

export interface SalpLiteEvent_AllUnlocked {
  __kind: 'AllUnlocked'
  value: number
}

/**
 * Fund status change
 */
export interface SalpLiteEvent_Failed {
  __kind: 'Failed'
  value: number
}

export interface SalpLiteEvent_Success {
  __kind: 'Success'
  value: number
}

export interface SalpLiteEvent_Retired {
  __kind: 'Retired'
  value: number
}

export interface SalpLiteEvent_Continued {
  __kind: 'Continued'
  value: [number, number, number]
}

export interface SalpLiteEvent_RefundedDissolved {
  __kind: 'RefundedDissolved'
  value: [number, number, number]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CallSwitchgearEvent = CallSwitchgearEvent_TransactionSwitchedoff | CallSwitchgearEvent_TransactionSwitchedOn | CallSwitchgearEvent_TransferAccountDisabled | CallSwitchgearEvent_TransferAccountEnabled

/**
 * Switch off transaction . \[pallet_name, function_name\]
 */
export interface CallSwitchgearEvent_TransactionSwitchedoff {
  __kind: 'TransactionSwitchedoff'
  value: [Uint8Array, Uint8Array]
}

/**
 * Switch on transaction . \[pallet_name, function_name\]
 */
export interface CallSwitchgearEvent_TransactionSwitchedOn {
  __kind: 'TransactionSwitchedOn'
  value: [Uint8Array, Uint8Array]
}

export interface CallSwitchgearEvent_TransferAccountDisabled {
  __kind: 'TransferAccountDisabled'
  value: CurrencyId
}

export interface CallSwitchgearEvent_TransferAccountEnabled {
  __kind: 'TransferAccountEnabled'
  value: CurrencyId
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type VSBondAuctionEvent = VSBondAuctionEvent_OrderCreated | VSBondAuctionEvent_OrderRevoked | VSBondAuctionEvent_OrderClinchd | VSBondAuctionEvent_TransactionFeeRateSet

/**
 * The order has been created.
 * 
 * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, total_price]
 */
export interface VSBondAuctionEvent_OrderCreated {
  __kind: 'OrderCreated'
  value: [bigint, OrderType, Uint8Array, CurrencyId, bigint, bigint]
}

/**
 * The order has been revoked.
 * 
 * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, vsbond_remain,
 * total_price]
 */
export interface VSBondAuctionEvent_OrderRevoked {
  __kind: 'OrderRevoked'
  value: [bigint, OrderType, Uint8Array, CurrencyId, bigint, bigint, bigint]
}

/**
 * The order has been clinched.
 * 
 * [order_id, order_type, order_creator, order_opponent, vsbond_type,
 * vsbond_amount_clinched, vsbond_amount, vsbond_remain, total_price]
 */
export interface VSBondAuctionEvent_OrderClinchd {
  __kind: 'OrderClinchd'
  value: [bigint, OrderType, Uint8Array, Uint8Array, CurrencyId, bigint, bigint, bigint, bigint]
}

/**
 * Transaction fee rate has been reset.
 * 
 * [buy_fee_rate, sell_fee_rate]
 */
export interface VSBondAuctionEvent_TransactionFeeRateSet {
  __kind: 'TransactionFeeRateSet'
  value: [number, number]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type AssetRegistryEvent = AssetRegistryEvent_ForeignAssetRegistered | AssetRegistryEvent_ForeignAssetUpdated | AssetRegistryEvent_AssetRegistered | AssetRegistryEvent_AssetUpdated

/**
 * The foreign asset registered.
 */
export interface AssetRegistryEvent_ForeignAssetRegistered {
  __kind: 'ForeignAssetRegistered'
  assetId: number
  assetAddress: V1MultiLocation
  metadata: AssetMetadata
}

/**
 * The foreign asset updated.
 */
export interface AssetRegistryEvent_ForeignAssetUpdated {
  __kind: 'ForeignAssetUpdated'
  assetId: number
  assetAddress: V1MultiLocation
  metadata: AssetMetadata
}

/**
 * The asset registered.
 */
export interface AssetRegistryEvent_AssetRegistered {
  __kind: 'AssetRegistered'
  assetId: AssetIds
  metadata: AssetMetadata
}

/**
 * The asset updated.
 */
export interface AssetRegistryEvent_AssetUpdated {
  __kind: 'AssetUpdated'
  assetId: AssetIds
  metadata: AssetMetadata
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type XcmInterfaceEvent = XcmInterfaceEvent_XcmDestWeightUpdated | XcmInterfaceEvent_XcmFeeUpdated | XcmInterfaceEvent_TransferredStatemineMultiAsset

/**
 * Xcm dest weight has been updated. \[xcm_operation, new_xcm_dest_weight\]
 */
export interface XcmInterfaceEvent_XcmDestWeightUpdated {
  __kind: 'XcmDestWeightUpdated'
  value: [XcmInterfaceOperation, bigint]
}

/**
 * Xcm dest weight has been updated. \[xcm_operation, new_xcm_dest_weight\]
 */
export interface XcmInterfaceEvent_XcmFeeUpdated {
  __kind: 'XcmFeeUpdated'
  value: [XcmInterfaceOperation, bigint]
}

export interface XcmInterfaceEvent_TransferredStatemineMultiAsset {
  __kind: 'TransferredStatemineMultiAsset'
  value: [Uint8Array, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type VstokenConversionEvent = VstokenConversionEvent_VsbondConvertToVsksm | VstokenConversionEvent_VsksmConvertToVsbond | VstokenConversionEvent_VsbondConvertToVsdot | VstokenConversionEvent_VsdotConvertToVsbond | VstokenConversionEvent_ExchangeFeeSet | VstokenConversionEvent_ExchangeRateSet | VstokenConversionEvent_PolkadotLeaseSet | VstokenConversionEvent_KusamaLeaseSet

export interface VstokenConversionEvent_VsbondConvertToVsksm {
  __kind: 'VsbondConvertToVsksm'
  currencyId: CurrencyId
  vsbondAmount: bigint
  vsksmAmount: bigint
}

export interface VstokenConversionEvent_VsksmConvertToVsbond {
  __kind: 'VsksmConvertToVsbond'
  currencyId: CurrencyId
  vsbondAmount: bigint
  vsksmAmount: bigint
}

export interface VstokenConversionEvent_VsbondConvertToVsdot {
  __kind: 'VsbondConvertToVsdot'
  currencyId: CurrencyId
  vsbondAmount: bigint
  vsdotAmount: bigint
}

export interface VstokenConversionEvent_VsdotConvertToVsbond {
  __kind: 'VsdotConvertToVsbond'
  currencyId: CurrencyId
  vsbondAmount: bigint
  vsdotAmount: bigint
}

export interface VstokenConversionEvent_ExchangeFeeSet {
  __kind: 'ExchangeFeeSet'
  exchangeFee: VstokenConversionExchangeFee
}

export interface VstokenConversionEvent_ExchangeRateSet {
  __kind: 'ExchangeRateSet'
  lease: number
  exchangeRate: VstokenConversionExchangeRate
}

export interface VstokenConversionEvent_PolkadotLeaseSet {
  __kind: 'PolkadotLeaseSet'
  lease: number
}

export interface VstokenConversionEvent_KusamaLeaseSet {
  __kind: 'KusamaLeaseSet'
  lease: number
}

export type V0NetworkId = V0NetworkId_Any | V0NetworkId_Named | V0NetworkId_Polkadot | V0NetworkId_Kusama

export interface V0NetworkId_Any {
  __kind: 'Any'
}

export interface V0NetworkId_Named {
  __kind: 'Named'
  value: Uint8Array
}

export interface V0NetworkId_Polkadot {
  __kind: 'Polkadot'
}

export interface V0NetworkId_Kusama {
  __kind: 'Kusama'
}

export type V0BodyId = V0BodyId_Unit | V0BodyId_Named | V0BodyId_Index | V0BodyId_Executive | V0BodyId_Technical | V0BodyId_Legislative | V0BodyId_Judicial

export interface V0BodyId_Unit {
  __kind: 'Unit'
}

export interface V0BodyId_Named {
  __kind: 'Named'
  value: Uint8Array
}

export interface V0BodyId_Index {
  __kind: 'Index'
  value: number
}

export interface V0BodyId_Executive {
  __kind: 'Executive'
}

export interface V0BodyId_Technical {
  __kind: 'Technical'
}

export interface V0BodyId_Legislative {
  __kind: 'Legislative'
}

export interface V0BodyId_Judicial {
  __kind: 'Judicial'
}

export type V0BodyPart = V0BodyPart_Voice | V0BodyPart_Members | V0BodyPart_Fraction | V0BodyPart_AtLeastProportion | V0BodyPart_MoreThanProportion

export interface V0BodyPart_Voice {
  __kind: 'Voice'
}

export interface V0BodyPart_Members {
  __kind: 'Members'
  count: number
}

export interface V0BodyPart_Fraction {
  __kind: 'Fraction'
  nom: number
  denom: number
}

export interface V0BodyPart_AtLeastProportion {
  __kind: 'AtLeastProportion'
  nom: number
  denom: number
}

export interface V0BodyPart_MoreThanProportion {
  __kind: 'MoreThanProportion'
  nom: number
  denom: number
}

export interface V1PersistedValidationData {
  parentHead: Uint8Array
  relayParentNumber: number
  relayParentStorageRoot: Uint8Array
  maxPovSize: number
}

export interface StorageProof {
  trieNodes: Uint8Array[]
}

export interface InboundDownwardMessage {
  sentAt: number
  msg: Uint8Array
}

export interface InboundHrmpMessage {
  sentAt: number
  data: Uint8Array
}

export interface Digest {
  logs: DigestItem[]
}

export type V0Xcm = V0Xcm_WithdrawAsset | V0Xcm_ReserveAssetDeposit | V0Xcm_TeleportAsset | V0Xcm_QueryResponse | V0Xcm_TransferAsset | V0Xcm_TransferReserveAsset | V0Xcm_Transact | V0Xcm_HrmpNewChannelOpenRequest | V0Xcm_HrmpChannelAccepted | V0Xcm_HrmpChannelClosing | V0Xcm_RelayedFrom

export interface V0Xcm_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V0MultiAsset[]
  effects: V0Order[]
}

export interface V0Xcm_ReserveAssetDeposit {
  __kind: 'ReserveAssetDeposit'
  assets: V0MultiAsset[]
  effects: V0Order[]
}

export interface V0Xcm_TeleportAsset {
  __kind: 'TeleportAsset'
  assets: V0MultiAsset[]
  effects: V0Order[]
}

export interface V0Xcm_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V0Response
}

export interface V0Xcm_TransferAsset {
  __kind: 'TransferAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Xcm_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order[]
}

export interface V0Xcm_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V0Xcm_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V0Xcm_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V0Xcm_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V0Xcm_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V0MultiLocation
  message: V0Xcm
}

export type V1Xcm = V1Xcm_WithdrawAsset | V1Xcm_ReserveAssetDeposited | V1Xcm_ReceiveTeleportedAsset | V1Xcm_QueryResponse | V1Xcm_TransferAsset | V1Xcm_TransferReserveAsset | V1Xcm_Transact | V1Xcm_HrmpNewChannelOpenRequest | V1Xcm_HrmpChannelAccepted | V1Xcm_HrmpChannelClosing | V1Xcm_RelayedFrom | V1Xcm_SubscribeVersion | V1Xcm_UnsubscribeVersion

export interface V1Xcm_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V1MultiAsset[]
  effects: V1Order[]
}

export interface V1Xcm_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  assets: V1MultiAsset[]
  effects: V1Order[]
}

export interface V1Xcm_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  assets: V1MultiAsset[]
  effects: V1Order[]
}

export interface V1Xcm_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V1Response
}

export interface V1Xcm_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAsset[]
  beneficiary: V1MultiLocation
}

export interface V1Xcm_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAsset[]
  dest: V1MultiLocation
  effects: V1Order[]
}

export interface V1Xcm_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V1Xcm_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V1Xcm_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V1Xcm_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V1Xcm_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V1Junctions
  message: V1Xcm
}

export interface V1Xcm_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V1Xcm_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export type V2Instruction = V2Instruction_WithdrawAsset | V2Instruction_ReserveAssetDeposited | V2Instruction_ReceiveTeleportedAsset | V2Instruction_QueryResponse | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Transact | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_ClearOrigin | V2Instruction_DescendOrigin | V2Instruction_ReportError | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_ExchangeAsset | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_BuyExecution | V2Instruction_RefundSurplus | V2Instruction_SetErrorHandler | V2Instruction_SetAppendix | V2Instruction_ClearError | V2Instruction_ClaimAsset | V2Instruction_Trap | V2Instruction_SubscribeVersion | V2Instruction_UnsubscribeVersion

export interface V2Instruction_WithdrawAsset {
  __kind: 'WithdrawAsset'
  value: V1MultiAsset[]
}

export interface V2Instruction_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  value: V1MultiAsset[]
}

export interface V2Instruction_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  value: V1MultiAsset[]
}

export interface V2Instruction_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V2Response
  maxWeight: bigint
}

export interface V2Instruction_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAsset[]
  beneficiary: V1MultiLocation
}

export interface V2Instruction_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAsset[]
  dest: V1MultiLocation
  xcm: V2Instruction[]
}

export interface V2Instruction_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V2Instruction_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V2Instruction_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V2Instruction_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V2Instruction_ClearOrigin {
  __kind: 'ClearOrigin'
}

export interface V2Instruction_DescendOrigin {
  __kind: 'DescendOrigin'
  value: V1Junctions
}

export interface V2Instruction_ReportError {
  __kind: 'ReportError'
  queryId: bigint
  dest: V1MultiLocation
  maxResponseWeight: bigint
}

export interface V2Instruction_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V2Instruction_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  xcm: V2Instruction[]
}

export interface V2Instruction_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAsset[]
}

export interface V2Instruction_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  xcm: V2Instruction[]
}

export interface V2Instruction_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  xcm: V2Instruction[]
}

export interface V2Instruction_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
  maxResponseWeight: bigint
}

export interface V2Instruction_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weightLimit: V2WeightLimit
}

export interface V2Instruction_RefundSurplus {
  __kind: 'RefundSurplus'
}

export interface V2Instruction_SetErrorHandler {
  __kind: 'SetErrorHandler'
  value: V2Instruction[]
}

export interface V2Instruction_SetAppendix {
  __kind: 'SetAppendix'
  value: V2Instruction[]
}

export interface V2Instruction_ClearError {
  __kind: 'ClearError'
}

export interface V2Instruction_ClaimAsset {
  __kind: 'ClaimAsset'
  assets: V1MultiAsset[]
  ticket: V1MultiLocation
}

export interface V2Instruction_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface V2Instruction_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V2Instruction_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export type V0MultiAsset = V0MultiAsset_None | V0MultiAsset_All | V0MultiAsset_AllFungible | V0MultiAsset_AllNonFungible | V0MultiAsset_AllAbstractFungible | V0MultiAsset_AllAbstractNonFungible | V0MultiAsset_AllConcreteFungible | V0MultiAsset_AllConcreteNonFungible | V0MultiAsset_AbstractFungible | V0MultiAsset_AbstractNonFungible | V0MultiAsset_ConcreteFungible | V0MultiAsset_ConcreteNonFungible

export interface V0MultiAsset_None {
  __kind: 'None'
}

export interface V0MultiAsset_All {
  __kind: 'All'
}

export interface V0MultiAsset_AllFungible {
  __kind: 'AllFungible'
}

export interface V0MultiAsset_AllNonFungible {
  __kind: 'AllNonFungible'
}

export interface V0MultiAsset_AllAbstractFungible {
  __kind: 'AllAbstractFungible'
  id: Uint8Array
}

export interface V0MultiAsset_AllAbstractNonFungible {
  __kind: 'AllAbstractNonFungible'
  class: Uint8Array
}

export interface V0MultiAsset_AllConcreteFungible {
  __kind: 'AllConcreteFungible'
  id: V0MultiLocation
}

export interface V0MultiAsset_AllConcreteNonFungible {
  __kind: 'AllConcreteNonFungible'
  class: V0MultiLocation
}

export interface V0MultiAsset_AbstractFungible {
  __kind: 'AbstractFungible'
  id: Uint8Array
  amount: bigint
}

export interface V0MultiAsset_AbstractNonFungible {
  __kind: 'AbstractNonFungible'
  class: Uint8Array
  instance: V1AssetInstance
}

export interface V0MultiAsset_ConcreteFungible {
  __kind: 'ConcreteFungible'
  id: V0MultiLocation
  amount: bigint
}

export interface V0MultiAsset_ConcreteNonFungible {
  __kind: 'ConcreteNonFungible'
  class: V0MultiLocation
  instance: V1AssetInstance
}

export type Type_311 = Type_311_WithdrawAsset | Type_311_ReserveAssetDeposit | Type_311_TeleportAsset | Type_311_QueryResponse | Type_311_TransferAsset | Type_311_TransferReserveAsset | Type_311_Transact | Type_311_HrmpNewChannelOpenRequest | Type_311_HrmpChannelAccepted | Type_311_HrmpChannelClosing | Type_311_RelayedFrom

export interface Type_311_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V0MultiAsset[]
  effects: Type_313[]
}

export interface Type_311_ReserveAssetDeposit {
  __kind: 'ReserveAssetDeposit'
  assets: V0MultiAsset[]
  effects: Type_313[]
}

export interface Type_311_TeleportAsset {
  __kind: 'TeleportAsset'
  assets: V0MultiAsset[]
  effects: Type_313[]
}

export interface Type_311_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V0Response
}

export interface Type_311_TransferAsset {
  __kind: 'TransferAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface Type_311_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order[]
}

export interface Type_311_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface Type_311_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface Type_311_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface Type_311_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface Type_311_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V0MultiLocation
  message: Type_311
}

export type Type_316 = Type_316_WithdrawAsset | Type_316_ReserveAssetDeposited | Type_316_ReceiveTeleportedAsset | Type_316_QueryResponse | Type_316_TransferAsset | Type_316_TransferReserveAsset | Type_316_Transact | Type_316_HrmpNewChannelOpenRequest | Type_316_HrmpChannelAccepted | Type_316_HrmpChannelClosing | Type_316_RelayedFrom | Type_316_SubscribeVersion | Type_316_UnsubscribeVersion

export interface Type_316_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V1MultiAsset[]
  effects: Type_318[]
}

export interface Type_316_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  assets: V1MultiAsset[]
  effects: Type_318[]
}

export interface Type_316_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  assets: V1MultiAsset[]
  effects: Type_318[]
}

export interface Type_316_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V1Response
}

export interface Type_316_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAsset[]
  beneficiary: V1MultiLocation
}

export interface Type_316_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAsset[]
  dest: V1MultiLocation
  effects: V1Order[]
}

export interface Type_316_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface Type_316_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface Type_316_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface Type_316_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface Type_316_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V1Junctions
  message: Type_316
}

export interface Type_316_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface Type_316_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export type Type_322 = Type_322_WithdrawAsset | Type_322_ReserveAssetDeposited | Type_322_ReceiveTeleportedAsset | Type_322_QueryResponse | Type_322_TransferAsset | Type_322_TransferReserveAsset | Type_322_Transact | Type_322_HrmpNewChannelOpenRequest | Type_322_HrmpChannelAccepted | Type_322_HrmpChannelClosing | Type_322_ClearOrigin | Type_322_DescendOrigin | Type_322_ReportError | Type_322_DepositAsset | Type_322_DepositReserveAsset | Type_322_ExchangeAsset | Type_322_InitiateReserveWithdraw | Type_322_InitiateTeleport | Type_322_QueryHolding | Type_322_BuyExecution | Type_322_RefundSurplus | Type_322_SetErrorHandler | Type_322_SetAppendix | Type_322_ClearError | Type_322_ClaimAsset | Type_322_Trap | Type_322_SubscribeVersion | Type_322_UnsubscribeVersion

export interface Type_322_WithdrawAsset {
  __kind: 'WithdrawAsset'
  value: V1MultiAsset[]
}

export interface Type_322_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  value: V1MultiAsset[]
}

export interface Type_322_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  value: V1MultiAsset[]
}

export interface Type_322_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V2Response
  maxWeight: bigint
}

export interface Type_322_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAsset[]
  beneficiary: V1MultiLocation
}

export interface Type_322_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAsset[]
  dest: V1MultiLocation
  xcm: V2Instruction[]
}

export interface Type_322_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface Type_322_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface Type_322_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface Type_322_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface Type_322_ClearOrigin {
  __kind: 'ClearOrigin'
}

export interface Type_322_DescendOrigin {
  __kind: 'DescendOrigin'
  value: V1Junctions
}

export interface Type_322_ReportError {
  __kind: 'ReportError'
  queryId: bigint
  dest: V1MultiLocation
  maxResponseWeight: bigint
}

export interface Type_322_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface Type_322_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  xcm: V2Instruction[]
}

export interface Type_322_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAsset[]
}

export interface Type_322_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  xcm: V2Instruction[]
}

export interface Type_322_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  xcm: V2Instruction[]
}

export interface Type_322_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
  maxResponseWeight: bigint
}

export interface Type_322_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weightLimit: V2WeightLimit
}

export interface Type_322_RefundSurplus {
  __kind: 'RefundSurplus'
}

export interface Type_322_SetErrorHandler {
  __kind: 'SetErrorHandler'
  value: Type_322[]
}

export interface Type_322_SetAppendix {
  __kind: 'SetAppendix'
  value: Type_322[]
}

export interface Type_322_ClearError {
  __kind: 'ClearError'
}

export interface Type_322_ClaimAsset {
  __kind: 'ClaimAsset'
  assets: V1MultiAsset[]
  ticket: V1MultiLocation
}

export interface Type_322_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface Type_322_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface Type_322_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export interface DelegationRequest {
  collator: Uint8Array
  amount: bigint
  whenExecutable: number
  action: DelegationChange
}

export type DelegatorAdded = DelegatorAdded_AddedToTop | DelegatorAdded_AddedToBottom

export interface DelegatorAdded_AddedToTop {
  __kind: 'AddedToTop'
  newTotal: bigint
}

export interface DelegatorAdded_AddedToBottom {
  __kind: 'AddedToBottom'
}

export type VoteThreshold = VoteThreshold_SuperMajorityApprove | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SimpleMajority

export interface VoteThreshold_SuperMajorityApprove {
  __kind: 'SuperMajorityApprove'
}

export interface VoteThreshold_SuperMajorityAgainst {
  __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SimpleMajority {
  __kind: 'SimpleMajority'
}

export type V2Error = V2Error_Overflow | V2Error_Unimplemented | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_BadOrigin | V2Error_InvalidLocation | V2Error_AssetNotFound | V2Error_FailedToTransactAsset | V2Error_NotWithdrawable | V2Error_LocationCannotHold | V2Error_ExceedsMaxMessageSize | V2Error_DestinationUnsupported | V2Error_Transport | V2Error_Unroutable | V2Error_UnknownClaim | V2Error_FailedToDecode | V2Error_MaxWeightInvalid | V2Error_NotHoldingFees | V2Error_TooExpensive | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_WeightLimitReached | V2Error_Barrier | V2Error_WeightNotComputable

export interface V2Error_Overflow {
  __kind: 'Overflow'
}

export interface V2Error_Unimplemented {
  __kind: 'Unimplemented'
}

export interface V2Error_UntrustedReserveLocation {
  __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
  __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_MultiLocationFull {
  __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
  __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_BadOrigin {
  __kind: 'BadOrigin'
}

export interface V2Error_InvalidLocation {
  __kind: 'InvalidLocation'
}

export interface V2Error_AssetNotFound {
  __kind: 'AssetNotFound'
}

export interface V2Error_FailedToTransactAsset {
  __kind: 'FailedToTransactAsset'
}

export interface V2Error_NotWithdrawable {
  __kind: 'NotWithdrawable'
}

export interface V2Error_LocationCannotHold {
  __kind: 'LocationCannotHold'
}

export interface V2Error_ExceedsMaxMessageSize {
  __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_DestinationUnsupported {
  __kind: 'DestinationUnsupported'
}

export interface V2Error_Transport {
  __kind: 'Transport'
}

export interface V2Error_Unroutable {
  __kind: 'Unroutable'
}

export interface V2Error_UnknownClaim {
  __kind: 'UnknownClaim'
}

export interface V2Error_FailedToDecode {
  __kind: 'FailedToDecode'
}

export interface V2Error_MaxWeightInvalid {
  __kind: 'MaxWeightInvalid'
}

export interface V2Error_NotHoldingFees {
  __kind: 'NotHoldingFees'
}

export interface V2Error_TooExpensive {
  __kind: 'TooExpensive'
}

export interface V2Error_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface V2Error_UnhandledXcmVersion {
  __kind: 'UnhandledXcmVersion'
}

export interface V2Error_WeightLimitReached {
  __kind: 'WeightLimitReached'
  value: bigint
}

export interface V2Error_Barrier {
  __kind: 'Barrier'
}

export interface V2Error_WeightNotComputable {
  __kind: 'WeightNotComputable'
}

export type V2Outcome = V2Outcome_Complete | V2Outcome_Incomplete | V2Outcome_Error

export interface V2Outcome_Complete {
  __kind: 'Complete'
  value: bigint
}

export interface V2Outcome_Incomplete {
  __kind: 'Incomplete'
  value: [bigint, V2Error]
}

export interface V2Outcome_Error {
  __kind: 'Error'
  value: V2Error
}

export type V2Response = V2Response_Null | V2Response_Assets | V2Response_ExecutionResult | V2Response_Version

export interface V2Response_Null {
  __kind: 'Null'
}

export interface V2Response_Assets {
  __kind: 'Assets'
  value: V1MultiAsset[]
}

export interface V2Response_ExecutionResult {
  __kind: 'ExecutionResult'
  value: ([number, V2Error] | undefined)
}

export interface V2Response_Version {
  __kind: 'Version'
  value: number
}

export type LookupError = LookupError_Unknown | LookupError_BadFormat

export interface LookupError_Unknown {
  __kind: 'Unknown'
}

export interface LookupError_BadFormat {
  __kind: 'BadFormat'
}

export type DigestItem = DigestItem_PreRuntime | DigestItem_Consensus | DigestItem_Seal | DigestItem_Other | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_PreRuntime {
  __kind: 'PreRuntime'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Consensus {
  __kind: 'Consensus'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
  __kind: 'Seal'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Other {
  __kind: 'Other'
  value: Uint8Array
}

export interface DigestItem_RuntimeEnvironmentUpdated {
  __kind: 'RuntimeEnvironmentUpdated'
}

export type V0Order = V0Order_Null | V0Order_DepositAsset | V0Order_DepositReserveAsset | V0Order_ExchangeAsset | V0Order_InitiateReserveWithdraw | V0Order_InitiateTeleport | V0Order_QueryHolding | V0Order_BuyExecution

export interface V0Order_Null {
  __kind: 'Null'
}

export interface V0Order_DepositAsset {
  __kind: 'DepositAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Order_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order[]
}

export interface V0Order_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V0MultiAsset[]
  receive: V0MultiAsset[]
}

export interface V0Order_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V0MultiAsset[]
  reserve: V0MultiLocation
  effects: V0Order[]
}

export interface V0Order_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order[]
}

export interface V0Order_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V0MultiLocation
  assets: V0MultiAsset[]
}

export interface V0Order_BuyExecution {
  __kind: 'BuyExecution'
  fees: V0MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  xcm: V0Xcm[]
}

export type V0Response = V0Response_Assets

export interface V0Response_Assets {
  __kind: 'Assets'
  value: V0MultiAsset[]
}

export type V0OriginKind = V0OriginKind_Native | V0OriginKind_SovereignAccount | V0OriginKind_Superuser | V0OriginKind_Xcm

export interface V0OriginKind_Native {
  __kind: 'Native'
}

export interface V0OriginKind_SovereignAccount {
  __kind: 'SovereignAccount'
}

export interface V0OriginKind_Superuser {
  __kind: 'Superuser'
}

export interface V0OriginKind_Xcm {
  __kind: 'Xcm'
}

export interface DoubleEncoded {
  encoded: Uint8Array
}

export type V1Order = V1Order_Noop | V1Order_DepositAsset | V1Order_DepositReserveAsset | V1Order_ExchangeAsset | V1Order_InitiateReserveWithdraw | V1Order_InitiateTeleport | V1Order_QueryHolding | V1Order_BuyExecution

export interface V1Order_Noop {
  __kind: 'Noop'
}

export interface V1Order_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V1Order_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  effects: V1Order[]
}

export interface V1Order_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAsset[]
}

export interface V1Order_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  effects: V1Order[]
}

export interface V1Order_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  effects: V1Order[]
}

export interface V1Order_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
}

export interface V1Order_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  instructions: V1Xcm[]
}

export type V1Response = V1Response_Assets | V1Response_Version

export interface V1Response_Assets {
  __kind: 'Assets'
  value: V1MultiAsset[]
}

export interface V1Response_Version {
  __kind: 'Version'
  value: number
}

export type V1MultiAssetFilter = V1MultiAssetFilter_Definite | V1MultiAssetFilter_Wild

export interface V1MultiAssetFilter_Definite {
  __kind: 'Definite'
  value: V1MultiAsset[]
}

export interface V1MultiAssetFilter_Wild {
  __kind: 'Wild'
  value: V1WildMultiAsset
}

export type Type_313 = Type_313_Null | Type_313_DepositAsset | Type_313_DepositReserveAsset | Type_313_ExchangeAsset | Type_313_InitiateReserveWithdraw | Type_313_InitiateTeleport | Type_313_QueryHolding | Type_313_BuyExecution

export interface Type_313_Null {
  __kind: 'Null'
}

export interface Type_313_DepositAsset {
  __kind: 'DepositAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface Type_313_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order[]
}

export interface Type_313_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V0MultiAsset[]
  receive: V0MultiAsset[]
}

export interface Type_313_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V0MultiAsset[]
  reserve: V0MultiLocation
  effects: V0Order[]
}

export interface Type_313_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order[]
}

export interface Type_313_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V0MultiLocation
  assets: V0MultiAsset[]
}

export interface Type_313_BuyExecution {
  __kind: 'BuyExecution'
  fees: V0MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  xcm: Type_311[]
}

export type Type_318 = Type_318_Noop | Type_318_DepositAsset | Type_318_DepositReserveAsset | Type_318_ExchangeAsset | Type_318_InitiateReserveWithdraw | Type_318_InitiateTeleport | Type_318_QueryHolding | Type_318_BuyExecution

export interface Type_318_Noop {
  __kind: 'Noop'
}

export interface Type_318_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface Type_318_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  effects: V1Order[]
}

export interface Type_318_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAsset[]
}

export interface Type_318_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  effects: V1Order[]
}

export interface Type_318_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  effects: V1Order[]
}

export interface Type_318_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
}

export interface Type_318_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  instructions: Type_316[]
}

export type DelegationChange = DelegationChange_Revoke | DelegationChange_Decrease

export interface DelegationChange_Revoke {
  __kind: 'Revoke'
}

export interface DelegationChange_Decrease {
  __kind: 'Decrease'
}

export type V1WildMultiAsset = V1WildMultiAsset_All | V1WildMultiAsset_AllOf

export interface V1WildMultiAsset_All {
  __kind: 'All'
}

export interface V1WildMultiAsset_AllOf {
  __kind: 'AllOf'
  id: V1AssetId
  fun: V1WildFungibility
}

export type V1WildFungibility = V1WildFungibility_Fungible | V1WildFungibility_NonFungible

export interface V1WildFungibility_Fungible {
  __kind: 'Fungible'
}

export interface V1WildFungibility_NonFungible {
  __kind: 'NonFungible'
}
