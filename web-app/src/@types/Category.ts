/* eslint-disable @typescript-eslint/no-empty-object-type */
interface ICategoryCommon {
  id: string;
  name: string;
}

interface ICategoryPersistence extends ICategoryCommon {}

interface ICategoryDomain extends ICategoryCommon {}

export type { ICategoryPersistence, ICategoryDomain };
