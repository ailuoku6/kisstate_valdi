// 导出核心功能（从 kiss-state-core）
import { ObservableClass, watchProps, computed } from '../kiss-state-core/src/index';
// 导出 Valdi 相关功能
import {
  createValdiObserver,
  type ValdiObserverConfig,
  type IBaseComponent,
} from './valdi/index';

export {
  ObservableClass, watchProps, computed,
  createValdiObserver,
  type ValdiObserverConfig,
  type IBaseComponent,
}
