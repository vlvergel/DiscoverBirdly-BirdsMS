
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Bird
 * 
 */
export type Bird = $Result.DefaultSelection<Prisma.$BirdPayload>
/**
 * Model Specie
 * 
 */
export type Specie = $Result.DefaultSelection<Prisma.$SpeciePayload>
/**
 * Model Family
 * 
 */
export type Family = $Result.DefaultSelection<Prisma.$FamilyPayload>
/**
 * Model Habitat
 * 
 */
export type Habitat = $Result.DefaultSelection<Prisma.$HabitatPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Birds
 * const birds = await prisma.bird.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Birds
   * const birds = await prisma.bird.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bird`: Exposes CRUD operations for the **Bird** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Birds
    * const birds = await prisma.bird.findMany()
    * ```
    */
  get bird(): Prisma.BirdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specie`: Exposes CRUD operations for the **Specie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Species
    * const species = await prisma.specie.findMany()
    * ```
    */
  get specie(): Prisma.SpecieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.family`: Exposes CRUD operations for the **Family** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Families
    * const families = await prisma.family.findMany()
    * ```
    */
  get family(): Prisma.FamilyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habitat`: Exposes CRUD operations for the **Habitat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habitats
    * const habitats = await prisma.habitat.findMany()
    * ```
    */
  get habitat(): Prisma.HabitatDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Bird: 'Bird',
    Specie: 'Specie',
    Family: 'Family',
    Habitat: 'Habitat'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bird" | "specie" | "family" | "habitat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Bird: {
        payload: Prisma.$BirdPayload<ExtArgs>
        fields: Prisma.BirdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BirdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BirdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload>
          }
          findFirst: {
            args: Prisma.BirdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BirdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload>
          }
          findMany: {
            args: Prisma.BirdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload>[]
          }
          create: {
            args: Prisma.BirdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload>
          }
          createMany: {
            args: Prisma.BirdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BirdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload>
          }
          update: {
            args: Prisma.BirdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload>
          }
          deleteMany: {
            args: Prisma.BirdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BirdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BirdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload>
          }
          aggregate: {
            args: Prisma.BirdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBird>
          }
          groupBy: {
            args: Prisma.BirdGroupByArgs<ExtArgs>
            result: $Utils.Optional<BirdGroupByOutputType>[]
          }
          count: {
            args: Prisma.BirdCountArgs<ExtArgs>
            result: $Utils.Optional<BirdCountAggregateOutputType> | number
          }
        }
      }
      Specie: {
        payload: Prisma.$SpeciePayload<ExtArgs>
        fields: Prisma.SpecieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciePayload>
          }
          findFirst: {
            args: Prisma.SpecieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciePayload>
          }
          findMany: {
            args: Prisma.SpecieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciePayload>[]
          }
          create: {
            args: Prisma.SpecieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciePayload>
          }
          createMany: {
            args: Prisma.SpecieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SpecieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciePayload>
          }
          update: {
            args: Prisma.SpecieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciePayload>
          }
          deleteMany: {
            args: Prisma.SpecieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpecieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciePayload>
          }
          aggregate: {
            args: Prisma.SpecieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecie>
          }
          groupBy: {
            args: Prisma.SpecieGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecieGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecieCountArgs<ExtArgs>
            result: $Utils.Optional<SpecieCountAggregateOutputType> | number
          }
        }
      }
      Family: {
        payload: Prisma.$FamilyPayload<ExtArgs>
        fields: Prisma.FamilyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamilyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamilyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          findFirst: {
            args: Prisma.FamilyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamilyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          findMany: {
            args: Prisma.FamilyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>[]
          }
          create: {
            args: Prisma.FamilyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          createMany: {
            args: Prisma.FamilyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FamilyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          update: {
            args: Prisma.FamilyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          deleteMany: {
            args: Prisma.FamilyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FamilyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FamilyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          aggregate: {
            args: Prisma.FamilyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamily>
          }
          groupBy: {
            args: Prisma.FamilyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamilyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamilyCountArgs<ExtArgs>
            result: $Utils.Optional<FamilyCountAggregateOutputType> | number
          }
        }
      }
      Habitat: {
        payload: Prisma.$HabitatPayload<ExtArgs>
        fields: Prisma.HabitatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitatPayload>
          }
          findFirst: {
            args: Prisma.HabitatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitatPayload>
          }
          findMany: {
            args: Prisma.HabitatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitatPayload>[]
          }
          create: {
            args: Prisma.HabitatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitatPayload>
          }
          createMany: {
            args: Prisma.HabitatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HabitatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitatPayload>
          }
          update: {
            args: Prisma.HabitatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitatPayload>
          }
          deleteMany: {
            args: Prisma.HabitatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HabitatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitatPayload>
          }
          aggregate: {
            args: Prisma.HabitatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitat>
          }
          groupBy: {
            args: Prisma.HabitatGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitatGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitatCountArgs<ExtArgs>
            result: $Utils.Optional<HabitatCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bird?: BirdOmit
    specie?: SpecieOmit
    family?: FamilyOmit
    habitat?: HabitatOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SpecieCountOutputType
   */

  export type SpecieCountOutputType = {
    Bird: number
  }

  export type SpecieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bird?: boolean | SpecieCountOutputTypeCountBirdArgs
  }

  // Custom InputTypes
  /**
   * SpecieCountOutputType without action
   */
  export type SpecieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecieCountOutputType
     */
    select?: SpecieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecieCountOutputType without action
   */
  export type SpecieCountOutputTypeCountBirdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BirdWhereInput
  }


  /**
   * Count Type FamilyCountOutputType
   */

  export type FamilyCountOutputType = {
    Bird: number
  }

  export type FamilyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bird?: boolean | FamilyCountOutputTypeCountBirdArgs
  }

  // Custom InputTypes
  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyCountOutputType
     */
    select?: FamilyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeCountBirdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BirdWhereInput
  }


  /**
   * Count Type HabitatCountOutputType
   */

  export type HabitatCountOutputType = {
    Bird: number
  }

  export type HabitatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bird?: boolean | HabitatCountOutputTypeCountBirdArgs
  }

  // Custom InputTypes
  /**
   * HabitatCountOutputType without action
   */
  export type HabitatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitatCountOutputType
     */
    select?: HabitatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitatCountOutputType without action
   */
  export type HabitatCountOutputTypeCountBirdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BirdWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Bird
   */

  export type AggregateBird = {
    _count: BirdCountAggregateOutputType | null
    _min: BirdMinAggregateOutputType | null
    _max: BirdMaxAggregateOutputType | null
  }

  export type BirdMinAggregateOutputType = {
    id: string | null
    name: string | null
    id_specie: string | null
    id_family: string | null
    id_habitat: string | null
    audio_url: string | null
    photo: string | null
    description: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BirdMaxAggregateOutputType = {
    id: string | null
    name: string | null
    id_specie: string | null
    id_family: string | null
    id_habitat: string | null
    audio_url: string | null
    photo: string | null
    description: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BirdCountAggregateOutputType = {
    id: number
    name: number
    id_specie: number
    id_family: number
    id_habitat: number
    audio_url: number
    photo: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BirdMinAggregateInputType = {
    id?: true
    name?: true
    id_specie?: true
    id_family?: true
    id_habitat?: true
    audio_url?: true
    photo?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BirdMaxAggregateInputType = {
    id?: true
    name?: true
    id_specie?: true
    id_family?: true
    id_habitat?: true
    audio_url?: true
    photo?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BirdCountAggregateInputType = {
    id?: true
    name?: true
    id_specie?: true
    id_family?: true
    id_habitat?: true
    audio_url?: true
    photo?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BirdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bird to aggregate.
     */
    where?: BirdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Birds to fetch.
     */
    orderBy?: BirdOrderByWithRelationInput | BirdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BirdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Birds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Birds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Birds
    **/
    _count?: true | BirdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BirdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BirdMaxAggregateInputType
  }

  export type GetBirdAggregateType<T extends BirdAggregateArgs> = {
        [P in keyof T & keyof AggregateBird]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBird[P]>
      : GetScalarType<T[P], AggregateBird[P]>
  }




  export type BirdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BirdWhereInput
    orderBy?: BirdOrderByWithAggregationInput | BirdOrderByWithAggregationInput[]
    by: BirdScalarFieldEnum[] | BirdScalarFieldEnum
    having?: BirdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BirdCountAggregateInputType | true
    _min?: BirdMinAggregateInputType
    _max?: BirdMaxAggregateInputType
  }

  export type BirdGroupByOutputType = {
    id: string
    name: string
    id_specie: string
    id_family: string
    id_habitat: string
    audio_url: string | null
    photo: string
    description: string
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: BirdCountAggregateOutputType | null
    _min: BirdMinAggregateOutputType | null
    _max: BirdMaxAggregateOutputType | null
  }

  type GetBirdGroupByPayload<T extends BirdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BirdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BirdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BirdGroupByOutputType[P]>
            : GetScalarType<T[P], BirdGroupByOutputType[P]>
        }
      >
    >


  export type BirdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    id_specie?: boolean
    id_family?: boolean
    id_habitat?: boolean
    audio_url?: boolean
    photo?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    specie?: boolean | SpecieDefaultArgs<ExtArgs>
    family?: boolean | FamilyDefaultArgs<ExtArgs>
    habitat?: boolean | HabitatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bird"]>



  export type BirdSelectScalar = {
    id?: boolean
    name?: boolean
    id_specie?: boolean
    id_family?: boolean
    id_habitat?: boolean
    audio_url?: boolean
    photo?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BirdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "id_specie" | "id_family" | "id_habitat" | "audio_url" | "photo" | "description" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["bird"]>
  export type BirdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specie?: boolean | SpecieDefaultArgs<ExtArgs>
    family?: boolean | FamilyDefaultArgs<ExtArgs>
    habitat?: boolean | HabitatDefaultArgs<ExtArgs>
  }

  export type $BirdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bird"
    objects: {
      specie: Prisma.$SpeciePayload<ExtArgs>
      family: Prisma.$FamilyPayload<ExtArgs>
      habitat: Prisma.$HabitatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      id_specie: string
      id_family: string
      id_habitat: string
      audio_url: string | null
      photo: string
      description: string
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bird"]>
    composites: {}
  }

  type BirdGetPayload<S extends boolean | null | undefined | BirdDefaultArgs> = $Result.GetResult<Prisma.$BirdPayload, S>

  type BirdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BirdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BirdCountAggregateInputType | true
    }

  export interface BirdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bird'], meta: { name: 'Bird' } }
    /**
     * Find zero or one Bird that matches the filter.
     * @param {BirdFindUniqueArgs} args - Arguments to find a Bird
     * @example
     * // Get one Bird
     * const bird = await prisma.bird.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BirdFindUniqueArgs>(args: SelectSubset<T, BirdFindUniqueArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bird that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BirdFindUniqueOrThrowArgs} args - Arguments to find a Bird
     * @example
     * // Get one Bird
     * const bird = await prisma.bird.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BirdFindUniqueOrThrowArgs>(args: SelectSubset<T, BirdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bird that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdFindFirstArgs} args - Arguments to find a Bird
     * @example
     * // Get one Bird
     * const bird = await prisma.bird.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BirdFindFirstArgs>(args?: SelectSubset<T, BirdFindFirstArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bird that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdFindFirstOrThrowArgs} args - Arguments to find a Bird
     * @example
     * // Get one Bird
     * const bird = await prisma.bird.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BirdFindFirstOrThrowArgs>(args?: SelectSubset<T, BirdFindFirstOrThrowArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Birds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Birds
     * const birds = await prisma.bird.findMany()
     * 
     * // Get first 10 Birds
     * const birds = await prisma.bird.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const birdWithIdOnly = await prisma.bird.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BirdFindManyArgs>(args?: SelectSubset<T, BirdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bird.
     * @param {BirdCreateArgs} args - Arguments to create a Bird.
     * @example
     * // Create one Bird
     * const Bird = await prisma.bird.create({
     *   data: {
     *     // ... data to create a Bird
     *   }
     * })
     * 
     */
    create<T extends BirdCreateArgs>(args: SelectSubset<T, BirdCreateArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Birds.
     * @param {BirdCreateManyArgs} args - Arguments to create many Birds.
     * @example
     * // Create many Birds
     * const bird = await prisma.bird.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BirdCreateManyArgs>(args?: SelectSubset<T, BirdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bird.
     * @param {BirdDeleteArgs} args - Arguments to delete one Bird.
     * @example
     * // Delete one Bird
     * const Bird = await prisma.bird.delete({
     *   where: {
     *     // ... filter to delete one Bird
     *   }
     * })
     * 
     */
    delete<T extends BirdDeleteArgs>(args: SelectSubset<T, BirdDeleteArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bird.
     * @param {BirdUpdateArgs} args - Arguments to update one Bird.
     * @example
     * // Update one Bird
     * const bird = await prisma.bird.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BirdUpdateArgs>(args: SelectSubset<T, BirdUpdateArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Birds.
     * @param {BirdDeleteManyArgs} args - Arguments to filter Birds to delete.
     * @example
     * // Delete a few Birds
     * const { count } = await prisma.bird.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BirdDeleteManyArgs>(args?: SelectSubset<T, BirdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Birds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Birds
     * const bird = await prisma.bird.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BirdUpdateManyArgs>(args: SelectSubset<T, BirdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bird.
     * @param {BirdUpsertArgs} args - Arguments to update or create a Bird.
     * @example
     * // Update or create a Bird
     * const bird = await prisma.bird.upsert({
     *   create: {
     *     // ... data to create a Bird
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bird we want to update
     *   }
     * })
     */
    upsert<T extends BirdUpsertArgs>(args: SelectSubset<T, BirdUpsertArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Birds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdCountArgs} args - Arguments to filter Birds to count.
     * @example
     * // Count the number of Birds
     * const count = await prisma.bird.count({
     *   where: {
     *     // ... the filter for the Birds we want to count
     *   }
     * })
    **/
    count<T extends BirdCountArgs>(
      args?: Subset<T, BirdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BirdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bird.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BirdAggregateArgs>(args: Subset<T, BirdAggregateArgs>): Prisma.PrismaPromise<GetBirdAggregateType<T>>

    /**
     * Group by Bird.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BirdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BirdGroupByArgs['orderBy'] }
        : { orderBy?: BirdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BirdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBirdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bird model
   */
  readonly fields: BirdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bird.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BirdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specie<T extends SpecieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecieDefaultArgs<ExtArgs>>): Prisma__SpecieClient<$Result.GetResult<Prisma.$SpeciePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    family<T extends FamilyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FamilyDefaultArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    habitat<T extends HabitatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitatDefaultArgs<ExtArgs>>): Prisma__HabitatClient<$Result.GetResult<Prisma.$HabitatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bird model
   */
  interface BirdFieldRefs {
    readonly id: FieldRef<"Bird", 'String'>
    readonly name: FieldRef<"Bird", 'String'>
    readonly id_specie: FieldRef<"Bird", 'String'>
    readonly id_family: FieldRef<"Bird", 'String'>
    readonly id_habitat: FieldRef<"Bird", 'String'>
    readonly audio_url: FieldRef<"Bird", 'String'>
    readonly photo: FieldRef<"Bird", 'String'>
    readonly description: FieldRef<"Bird", 'String'>
    readonly status: FieldRef<"Bird", 'Boolean'>
    readonly createdAt: FieldRef<"Bird", 'DateTime'>
    readonly updatedAt: FieldRef<"Bird", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bird findUnique
   */
  export type BirdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * Filter, which Bird to fetch.
     */
    where: BirdWhereUniqueInput
  }

  /**
   * Bird findUniqueOrThrow
   */
  export type BirdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * Filter, which Bird to fetch.
     */
    where: BirdWhereUniqueInput
  }

  /**
   * Bird findFirst
   */
  export type BirdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * Filter, which Bird to fetch.
     */
    where?: BirdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Birds to fetch.
     */
    orderBy?: BirdOrderByWithRelationInput | BirdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Birds.
     */
    cursor?: BirdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Birds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Birds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Birds.
     */
    distinct?: BirdScalarFieldEnum | BirdScalarFieldEnum[]
  }

  /**
   * Bird findFirstOrThrow
   */
  export type BirdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * Filter, which Bird to fetch.
     */
    where?: BirdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Birds to fetch.
     */
    orderBy?: BirdOrderByWithRelationInput | BirdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Birds.
     */
    cursor?: BirdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Birds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Birds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Birds.
     */
    distinct?: BirdScalarFieldEnum | BirdScalarFieldEnum[]
  }

  /**
   * Bird findMany
   */
  export type BirdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * Filter, which Birds to fetch.
     */
    where?: BirdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Birds to fetch.
     */
    orderBy?: BirdOrderByWithRelationInput | BirdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Birds.
     */
    cursor?: BirdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Birds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Birds.
     */
    skip?: number
    distinct?: BirdScalarFieldEnum | BirdScalarFieldEnum[]
  }

  /**
   * Bird create
   */
  export type BirdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * The data needed to create a Bird.
     */
    data: XOR<BirdCreateInput, BirdUncheckedCreateInput>
  }

  /**
   * Bird createMany
   */
  export type BirdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Birds.
     */
    data: BirdCreateManyInput | BirdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bird update
   */
  export type BirdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * The data needed to update a Bird.
     */
    data: XOR<BirdUpdateInput, BirdUncheckedUpdateInput>
    /**
     * Choose, which Bird to update.
     */
    where: BirdWhereUniqueInput
  }

  /**
   * Bird updateMany
   */
  export type BirdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Birds.
     */
    data: XOR<BirdUpdateManyMutationInput, BirdUncheckedUpdateManyInput>
    /**
     * Filter which Birds to update
     */
    where?: BirdWhereInput
    /**
     * Limit how many Birds to update.
     */
    limit?: number
  }

  /**
   * Bird upsert
   */
  export type BirdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * The filter to search for the Bird to update in case it exists.
     */
    where: BirdWhereUniqueInput
    /**
     * In case the Bird found by the `where` argument doesn't exist, create a new Bird with this data.
     */
    create: XOR<BirdCreateInput, BirdUncheckedCreateInput>
    /**
     * In case the Bird was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BirdUpdateInput, BirdUncheckedUpdateInput>
  }

  /**
   * Bird delete
   */
  export type BirdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * Filter which Bird to delete.
     */
    where: BirdWhereUniqueInput
  }

  /**
   * Bird deleteMany
   */
  export type BirdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Birds to delete
     */
    where?: BirdWhereInput
    /**
     * Limit how many Birds to delete.
     */
    limit?: number
  }

  /**
   * Bird without action
   */
  export type BirdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
  }


  /**
   * Model Specie
   */

  export type AggregateSpecie = {
    _count: SpecieCountAggregateOutputType | null
    _min: SpecieMinAggregateOutputType | null
    _max: SpecieMaxAggregateOutputType | null
  }

  export type SpecieMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecieMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecieCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpecieMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecieMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecieCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpecieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specie to aggregate.
     */
    where?: SpecieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpecieOrderByWithRelationInput | SpecieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Species
    **/
    _count?: true | SpecieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecieMaxAggregateInputType
  }

  export type GetSpecieAggregateType<T extends SpecieAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecie[P]>
      : GetScalarType<T[P], AggregateSpecie[P]>
  }




  export type SpecieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecieWhereInput
    orderBy?: SpecieOrderByWithAggregationInput | SpecieOrderByWithAggregationInput[]
    by: SpecieScalarFieldEnum[] | SpecieScalarFieldEnum
    having?: SpecieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecieCountAggregateInputType | true
    _min?: SpecieMinAggregateInputType
    _max?: SpecieMaxAggregateInputType
  }

  export type SpecieGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: SpecieCountAggregateOutputType | null
    _min: SpecieMinAggregateOutputType | null
    _max: SpecieMaxAggregateOutputType | null
  }

  type GetSpecieGroupByPayload<T extends SpecieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecieGroupByOutputType[P]>
            : GetScalarType<T[P], SpecieGroupByOutputType[P]>
        }
      >
    >


  export type SpecieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Bird?: boolean | Specie$BirdArgs<ExtArgs>
    _count?: boolean | SpecieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specie"]>



  export type SpecieSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpecieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["specie"]>
  export type SpecieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bird?: boolean | Specie$BirdArgs<ExtArgs>
    _count?: boolean | SpecieCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SpeciePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Specie"
    objects: {
      Bird: Prisma.$BirdPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["specie"]>
    composites: {}
  }

  type SpecieGetPayload<S extends boolean | null | undefined | SpecieDefaultArgs> = $Result.GetResult<Prisma.$SpeciePayload, S>

  type SpecieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecieCountAggregateInputType | true
    }

  export interface SpecieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Specie'], meta: { name: 'Specie' } }
    /**
     * Find zero or one Specie that matches the filter.
     * @param {SpecieFindUniqueArgs} args - Arguments to find a Specie
     * @example
     * // Get one Specie
     * const specie = await prisma.specie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecieFindUniqueArgs>(args: SelectSubset<T, SpecieFindUniqueArgs<ExtArgs>>): Prisma__SpecieClient<$Result.GetResult<Prisma.$SpeciePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Specie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecieFindUniqueOrThrowArgs} args - Arguments to find a Specie
     * @example
     * // Get one Specie
     * const specie = await prisma.specie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecieFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecieClient<$Result.GetResult<Prisma.$SpeciePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecieFindFirstArgs} args - Arguments to find a Specie
     * @example
     * // Get one Specie
     * const specie = await prisma.specie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecieFindFirstArgs>(args?: SelectSubset<T, SpecieFindFirstArgs<ExtArgs>>): Prisma__SpecieClient<$Result.GetResult<Prisma.$SpeciePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecieFindFirstOrThrowArgs} args - Arguments to find a Specie
     * @example
     * // Get one Specie
     * const specie = await prisma.specie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecieFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecieFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecieClient<$Result.GetResult<Prisma.$SpeciePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Species that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Species
     * const species = await prisma.specie.findMany()
     * 
     * // Get first 10 Species
     * const species = await prisma.specie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specieWithIdOnly = await prisma.specie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecieFindManyArgs>(args?: SelectSubset<T, SpecieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeciePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Specie.
     * @param {SpecieCreateArgs} args - Arguments to create a Specie.
     * @example
     * // Create one Specie
     * const Specie = await prisma.specie.create({
     *   data: {
     *     // ... data to create a Specie
     *   }
     * })
     * 
     */
    create<T extends SpecieCreateArgs>(args: SelectSubset<T, SpecieCreateArgs<ExtArgs>>): Prisma__SpecieClient<$Result.GetResult<Prisma.$SpeciePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Species.
     * @param {SpecieCreateManyArgs} args - Arguments to create many Species.
     * @example
     * // Create many Species
     * const specie = await prisma.specie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecieCreateManyArgs>(args?: SelectSubset<T, SpecieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Specie.
     * @param {SpecieDeleteArgs} args - Arguments to delete one Specie.
     * @example
     * // Delete one Specie
     * const Specie = await prisma.specie.delete({
     *   where: {
     *     // ... filter to delete one Specie
     *   }
     * })
     * 
     */
    delete<T extends SpecieDeleteArgs>(args: SelectSubset<T, SpecieDeleteArgs<ExtArgs>>): Prisma__SpecieClient<$Result.GetResult<Prisma.$SpeciePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Specie.
     * @param {SpecieUpdateArgs} args - Arguments to update one Specie.
     * @example
     * // Update one Specie
     * const specie = await prisma.specie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecieUpdateArgs>(args: SelectSubset<T, SpecieUpdateArgs<ExtArgs>>): Prisma__SpecieClient<$Result.GetResult<Prisma.$SpeciePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Species.
     * @param {SpecieDeleteManyArgs} args - Arguments to filter Species to delete.
     * @example
     * // Delete a few Species
     * const { count } = await prisma.specie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecieDeleteManyArgs>(args?: SelectSubset<T, SpecieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Species
     * const specie = await prisma.specie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecieUpdateManyArgs>(args: SelectSubset<T, SpecieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Specie.
     * @param {SpecieUpsertArgs} args - Arguments to update or create a Specie.
     * @example
     * // Update or create a Specie
     * const specie = await prisma.specie.upsert({
     *   create: {
     *     // ... data to create a Specie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specie we want to update
     *   }
     * })
     */
    upsert<T extends SpecieUpsertArgs>(args: SelectSubset<T, SpecieUpsertArgs<ExtArgs>>): Prisma__SpecieClient<$Result.GetResult<Prisma.$SpeciePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecieCountArgs} args - Arguments to filter Species to count.
     * @example
     * // Count the number of Species
     * const count = await prisma.specie.count({
     *   where: {
     *     // ... the filter for the Species we want to count
     *   }
     * })
    **/
    count<T extends SpecieCountArgs>(
      args?: Subset<T, SpecieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecieAggregateArgs>(args: Subset<T, SpecieAggregateArgs>): Prisma.PrismaPromise<GetSpecieAggregateType<T>>

    /**
     * Group by Specie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecieGroupByArgs['orderBy'] }
        : { orderBy?: SpecieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Specie model
   */
  readonly fields: SpecieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Specie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bird<T extends Specie$BirdArgs<ExtArgs> = {}>(args?: Subset<T, Specie$BirdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Specie model
   */
  interface SpecieFieldRefs {
    readonly id: FieldRef<"Specie", 'String'>
    readonly name: FieldRef<"Specie", 'String'>
    readonly description: FieldRef<"Specie", 'String'>
    readonly status: FieldRef<"Specie", 'Boolean'>
    readonly createdAt: FieldRef<"Specie", 'DateTime'>
    readonly updatedAt: FieldRef<"Specie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Specie findUnique
   */
  export type SpecieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specie
     */
    select?: SpecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specie
     */
    omit?: SpecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecieInclude<ExtArgs> | null
    /**
     * Filter, which Specie to fetch.
     */
    where: SpecieWhereUniqueInput
  }

  /**
   * Specie findUniqueOrThrow
   */
  export type SpecieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specie
     */
    select?: SpecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specie
     */
    omit?: SpecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecieInclude<ExtArgs> | null
    /**
     * Filter, which Specie to fetch.
     */
    where: SpecieWhereUniqueInput
  }

  /**
   * Specie findFirst
   */
  export type SpecieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specie
     */
    select?: SpecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specie
     */
    omit?: SpecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecieInclude<ExtArgs> | null
    /**
     * Filter, which Specie to fetch.
     */
    where?: SpecieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpecieOrderByWithRelationInput | SpecieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Species.
     */
    cursor?: SpecieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Species.
     */
    distinct?: SpecieScalarFieldEnum | SpecieScalarFieldEnum[]
  }

  /**
   * Specie findFirstOrThrow
   */
  export type SpecieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specie
     */
    select?: SpecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specie
     */
    omit?: SpecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecieInclude<ExtArgs> | null
    /**
     * Filter, which Specie to fetch.
     */
    where?: SpecieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpecieOrderByWithRelationInput | SpecieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Species.
     */
    cursor?: SpecieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Species.
     */
    distinct?: SpecieScalarFieldEnum | SpecieScalarFieldEnum[]
  }

  /**
   * Specie findMany
   */
  export type SpecieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specie
     */
    select?: SpecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specie
     */
    omit?: SpecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecieInclude<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where?: SpecieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpecieOrderByWithRelationInput | SpecieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Species.
     */
    cursor?: SpecieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    distinct?: SpecieScalarFieldEnum | SpecieScalarFieldEnum[]
  }

  /**
   * Specie create
   */
  export type SpecieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specie
     */
    select?: SpecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specie
     */
    omit?: SpecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecieInclude<ExtArgs> | null
    /**
     * The data needed to create a Specie.
     */
    data: XOR<SpecieCreateInput, SpecieUncheckedCreateInput>
  }

  /**
   * Specie createMany
   */
  export type SpecieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Species.
     */
    data: SpecieCreateManyInput | SpecieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specie update
   */
  export type SpecieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specie
     */
    select?: SpecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specie
     */
    omit?: SpecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecieInclude<ExtArgs> | null
    /**
     * The data needed to update a Specie.
     */
    data: XOR<SpecieUpdateInput, SpecieUncheckedUpdateInput>
    /**
     * Choose, which Specie to update.
     */
    where: SpecieWhereUniqueInput
  }

  /**
   * Specie updateMany
   */
  export type SpecieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Species.
     */
    data: XOR<SpecieUpdateManyMutationInput, SpecieUncheckedUpdateManyInput>
    /**
     * Filter which Species to update
     */
    where?: SpecieWhereInput
    /**
     * Limit how many Species to update.
     */
    limit?: number
  }

  /**
   * Specie upsert
   */
  export type SpecieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specie
     */
    select?: SpecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specie
     */
    omit?: SpecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecieInclude<ExtArgs> | null
    /**
     * The filter to search for the Specie to update in case it exists.
     */
    where: SpecieWhereUniqueInput
    /**
     * In case the Specie found by the `where` argument doesn't exist, create a new Specie with this data.
     */
    create: XOR<SpecieCreateInput, SpecieUncheckedCreateInput>
    /**
     * In case the Specie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecieUpdateInput, SpecieUncheckedUpdateInput>
  }

  /**
   * Specie delete
   */
  export type SpecieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specie
     */
    select?: SpecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specie
     */
    omit?: SpecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecieInclude<ExtArgs> | null
    /**
     * Filter which Specie to delete.
     */
    where: SpecieWhereUniqueInput
  }

  /**
   * Specie deleteMany
   */
  export type SpecieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Species to delete
     */
    where?: SpecieWhereInput
    /**
     * Limit how many Species to delete.
     */
    limit?: number
  }

  /**
   * Specie.Bird
   */
  export type Specie$BirdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    where?: BirdWhereInput
    orderBy?: BirdOrderByWithRelationInput | BirdOrderByWithRelationInput[]
    cursor?: BirdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BirdScalarFieldEnum | BirdScalarFieldEnum[]
  }

  /**
   * Specie without action
   */
  export type SpecieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specie
     */
    select?: SpecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specie
     */
    omit?: SpecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecieInclude<ExtArgs> | null
  }


  /**
   * Model Family
   */

  export type AggregateFamily = {
    _count: FamilyCountAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  export type FamilyMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FamilyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FamilyCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FamilyMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FamilyMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FamilyCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FamilyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Family to aggregate.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Families
    **/
    _count?: true | FamilyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyMaxAggregateInputType
  }

  export type GetFamilyAggregateType<T extends FamilyAggregateArgs> = {
        [P in keyof T & keyof AggregateFamily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamily[P]>
      : GetScalarType<T[P], AggregateFamily[P]>
  }




  export type FamilyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyWhereInput
    orderBy?: FamilyOrderByWithAggregationInput | FamilyOrderByWithAggregationInput[]
    by: FamilyScalarFieldEnum[] | FamilyScalarFieldEnum
    having?: FamilyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyCountAggregateInputType | true
    _min?: FamilyMinAggregateInputType
    _max?: FamilyMaxAggregateInputType
  }

  export type FamilyGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: FamilyCountAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  type GetFamilyGroupByPayload<T extends FamilyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyGroupByOutputType[P]>
        }
      >
    >


  export type FamilySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Bird?: boolean | Family$BirdArgs<ExtArgs>
    _count?: boolean | FamilyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["family"]>



  export type FamilySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FamilyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["family"]>
  export type FamilyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bird?: boolean | Family$BirdArgs<ExtArgs>
    _count?: boolean | FamilyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FamilyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Family"
    objects: {
      Bird: Prisma.$BirdPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["family"]>
    composites: {}
  }

  type FamilyGetPayload<S extends boolean | null | undefined | FamilyDefaultArgs> = $Result.GetResult<Prisma.$FamilyPayload, S>

  type FamilyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FamilyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FamilyCountAggregateInputType | true
    }

  export interface FamilyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Family'], meta: { name: 'Family' } }
    /**
     * Find zero or one Family that matches the filter.
     * @param {FamilyFindUniqueArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FamilyFindUniqueArgs>(args: SelectSubset<T, FamilyFindUniqueArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Family that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FamilyFindUniqueOrThrowArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FamilyFindUniqueOrThrowArgs>(args: SelectSubset<T, FamilyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Family that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindFirstArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FamilyFindFirstArgs>(args?: SelectSubset<T, FamilyFindFirstArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Family that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindFirstOrThrowArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FamilyFindFirstOrThrowArgs>(args?: SelectSubset<T, FamilyFindFirstOrThrowArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Families that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Families
     * const families = await prisma.family.findMany()
     * 
     * // Get first 10 Families
     * const families = await prisma.family.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familyWithIdOnly = await prisma.family.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FamilyFindManyArgs>(args?: SelectSubset<T, FamilyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Family.
     * @param {FamilyCreateArgs} args - Arguments to create a Family.
     * @example
     * // Create one Family
     * const Family = await prisma.family.create({
     *   data: {
     *     // ... data to create a Family
     *   }
     * })
     * 
     */
    create<T extends FamilyCreateArgs>(args: SelectSubset<T, FamilyCreateArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Families.
     * @param {FamilyCreateManyArgs} args - Arguments to create many Families.
     * @example
     * // Create many Families
     * const family = await prisma.family.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FamilyCreateManyArgs>(args?: SelectSubset<T, FamilyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Family.
     * @param {FamilyDeleteArgs} args - Arguments to delete one Family.
     * @example
     * // Delete one Family
     * const Family = await prisma.family.delete({
     *   where: {
     *     // ... filter to delete one Family
     *   }
     * })
     * 
     */
    delete<T extends FamilyDeleteArgs>(args: SelectSubset<T, FamilyDeleteArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Family.
     * @param {FamilyUpdateArgs} args - Arguments to update one Family.
     * @example
     * // Update one Family
     * const family = await prisma.family.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FamilyUpdateArgs>(args: SelectSubset<T, FamilyUpdateArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Families.
     * @param {FamilyDeleteManyArgs} args - Arguments to filter Families to delete.
     * @example
     * // Delete a few Families
     * const { count } = await prisma.family.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FamilyDeleteManyArgs>(args?: SelectSubset<T, FamilyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Families
     * const family = await prisma.family.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FamilyUpdateManyArgs>(args: SelectSubset<T, FamilyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Family.
     * @param {FamilyUpsertArgs} args - Arguments to update or create a Family.
     * @example
     * // Update or create a Family
     * const family = await prisma.family.upsert({
     *   create: {
     *     // ... data to create a Family
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Family we want to update
     *   }
     * })
     */
    upsert<T extends FamilyUpsertArgs>(args: SelectSubset<T, FamilyUpsertArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyCountArgs} args - Arguments to filter Families to count.
     * @example
     * // Count the number of Families
     * const count = await prisma.family.count({
     *   where: {
     *     // ... the filter for the Families we want to count
     *   }
     * })
    **/
    count<T extends FamilyCountArgs>(
      args?: Subset<T, FamilyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FamilyAggregateArgs>(args: Subset<T, FamilyAggregateArgs>): Prisma.PrismaPromise<GetFamilyAggregateType<T>>

    /**
     * Group by Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FamilyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamilyGroupByArgs['orderBy'] }
        : { orderBy?: FamilyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FamilyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Family model
   */
  readonly fields: FamilyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Family.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamilyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bird<T extends Family$BirdArgs<ExtArgs> = {}>(args?: Subset<T, Family$BirdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Family model
   */
  interface FamilyFieldRefs {
    readonly id: FieldRef<"Family", 'String'>
    readonly name: FieldRef<"Family", 'String'>
    readonly description: FieldRef<"Family", 'String'>
    readonly status: FieldRef<"Family", 'Boolean'>
    readonly createdAt: FieldRef<"Family", 'DateTime'>
    readonly updatedAt: FieldRef<"Family", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Family findUnique
   */
  export type FamilyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family findUniqueOrThrow
   */
  export type FamilyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family findFirst
   */
  export type FamilyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Families.
     */
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family findFirstOrThrow
   */
  export type FamilyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Families.
     */
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family findMany
   */
  export type FamilyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Families to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family create
   */
  export type FamilyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The data needed to create a Family.
     */
    data: XOR<FamilyCreateInput, FamilyUncheckedCreateInput>
  }

  /**
   * Family createMany
   */
  export type FamilyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Families.
     */
    data: FamilyCreateManyInput | FamilyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Family update
   */
  export type FamilyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The data needed to update a Family.
     */
    data: XOR<FamilyUpdateInput, FamilyUncheckedUpdateInput>
    /**
     * Choose, which Family to update.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family updateMany
   */
  export type FamilyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Families.
     */
    data: XOR<FamilyUpdateManyMutationInput, FamilyUncheckedUpdateManyInput>
    /**
     * Filter which Families to update
     */
    where?: FamilyWhereInput
    /**
     * Limit how many Families to update.
     */
    limit?: number
  }

  /**
   * Family upsert
   */
  export type FamilyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The filter to search for the Family to update in case it exists.
     */
    where: FamilyWhereUniqueInput
    /**
     * In case the Family found by the `where` argument doesn't exist, create a new Family with this data.
     */
    create: XOR<FamilyCreateInput, FamilyUncheckedCreateInput>
    /**
     * In case the Family was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamilyUpdateInput, FamilyUncheckedUpdateInput>
  }

  /**
   * Family delete
   */
  export type FamilyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter which Family to delete.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family deleteMany
   */
  export type FamilyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Families to delete
     */
    where?: FamilyWhereInput
    /**
     * Limit how many Families to delete.
     */
    limit?: number
  }

  /**
   * Family.Bird
   */
  export type Family$BirdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    where?: BirdWhereInput
    orderBy?: BirdOrderByWithRelationInput | BirdOrderByWithRelationInput[]
    cursor?: BirdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BirdScalarFieldEnum | BirdScalarFieldEnum[]
  }

  /**
   * Family without action
   */
  export type FamilyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
  }


  /**
   * Model Habitat
   */

  export type AggregateHabitat = {
    _count: HabitatCountAggregateOutputType | null
    _min: HabitatMinAggregateOutputType | null
    _max: HabitatMaxAggregateOutputType | null
  }

  export type HabitatMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitatMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitatCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HabitatMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitatMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitatCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HabitatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habitat to aggregate.
     */
    where?: HabitatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habitats to fetch.
     */
    orderBy?: HabitatOrderByWithRelationInput | HabitatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habitats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habitats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habitats
    **/
    _count?: true | HabitatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitatMaxAggregateInputType
  }

  export type GetHabitatAggregateType<T extends HabitatAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitat[P]>
      : GetScalarType<T[P], AggregateHabitat[P]>
  }




  export type HabitatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitatWhereInput
    orderBy?: HabitatOrderByWithAggregationInput | HabitatOrderByWithAggregationInput[]
    by: HabitatScalarFieldEnum[] | HabitatScalarFieldEnum
    having?: HabitatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitatCountAggregateInputType | true
    _min?: HabitatMinAggregateInputType
    _max?: HabitatMaxAggregateInputType
  }

  export type HabitatGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: HabitatCountAggregateOutputType | null
    _min: HabitatMinAggregateOutputType | null
    _max: HabitatMaxAggregateOutputType | null
  }

  type GetHabitatGroupByPayload<T extends HabitatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitatGroupByOutputType[P]>
            : GetScalarType<T[P], HabitatGroupByOutputType[P]>
        }
      >
    >


  export type HabitatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Bird?: boolean | Habitat$BirdArgs<ExtArgs>
    _count?: boolean | HabitatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitat"]>



  export type HabitatSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HabitatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["habitat"]>
  export type HabitatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bird?: boolean | Habitat$BirdArgs<ExtArgs>
    _count?: boolean | HabitatCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HabitatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habitat"
    objects: {
      Bird: Prisma.$BirdPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["habitat"]>
    composites: {}
  }

  type HabitatGetPayload<S extends boolean | null | undefined | HabitatDefaultArgs> = $Result.GetResult<Prisma.$HabitatPayload, S>

  type HabitatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitatCountAggregateInputType | true
    }

  export interface HabitatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habitat'], meta: { name: 'Habitat' } }
    /**
     * Find zero or one Habitat that matches the filter.
     * @param {HabitatFindUniqueArgs} args - Arguments to find a Habitat
     * @example
     * // Get one Habitat
     * const habitat = await prisma.habitat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitatFindUniqueArgs>(args: SelectSubset<T, HabitatFindUniqueArgs<ExtArgs>>): Prisma__HabitatClient<$Result.GetResult<Prisma.$HabitatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habitat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitatFindUniqueOrThrowArgs} args - Arguments to find a Habitat
     * @example
     * // Get one Habitat
     * const habitat = await prisma.habitat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitatFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitatClient<$Result.GetResult<Prisma.$HabitatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habitat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitatFindFirstArgs} args - Arguments to find a Habitat
     * @example
     * // Get one Habitat
     * const habitat = await prisma.habitat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitatFindFirstArgs>(args?: SelectSubset<T, HabitatFindFirstArgs<ExtArgs>>): Prisma__HabitatClient<$Result.GetResult<Prisma.$HabitatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habitat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitatFindFirstOrThrowArgs} args - Arguments to find a Habitat
     * @example
     * // Get one Habitat
     * const habitat = await prisma.habitat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitatFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitatFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitatClient<$Result.GetResult<Prisma.$HabitatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habitats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habitats
     * const habitats = await prisma.habitat.findMany()
     * 
     * // Get first 10 Habitats
     * const habitats = await prisma.habitat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitatWithIdOnly = await prisma.habitat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitatFindManyArgs>(args?: SelectSubset<T, HabitatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habitat.
     * @param {HabitatCreateArgs} args - Arguments to create a Habitat.
     * @example
     * // Create one Habitat
     * const Habitat = await prisma.habitat.create({
     *   data: {
     *     // ... data to create a Habitat
     *   }
     * })
     * 
     */
    create<T extends HabitatCreateArgs>(args: SelectSubset<T, HabitatCreateArgs<ExtArgs>>): Prisma__HabitatClient<$Result.GetResult<Prisma.$HabitatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habitats.
     * @param {HabitatCreateManyArgs} args - Arguments to create many Habitats.
     * @example
     * // Create many Habitats
     * const habitat = await prisma.habitat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitatCreateManyArgs>(args?: SelectSubset<T, HabitatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Habitat.
     * @param {HabitatDeleteArgs} args - Arguments to delete one Habitat.
     * @example
     * // Delete one Habitat
     * const Habitat = await prisma.habitat.delete({
     *   where: {
     *     // ... filter to delete one Habitat
     *   }
     * })
     * 
     */
    delete<T extends HabitatDeleteArgs>(args: SelectSubset<T, HabitatDeleteArgs<ExtArgs>>): Prisma__HabitatClient<$Result.GetResult<Prisma.$HabitatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habitat.
     * @param {HabitatUpdateArgs} args - Arguments to update one Habitat.
     * @example
     * // Update one Habitat
     * const habitat = await prisma.habitat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitatUpdateArgs>(args: SelectSubset<T, HabitatUpdateArgs<ExtArgs>>): Prisma__HabitatClient<$Result.GetResult<Prisma.$HabitatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habitats.
     * @param {HabitatDeleteManyArgs} args - Arguments to filter Habitats to delete.
     * @example
     * // Delete a few Habitats
     * const { count } = await prisma.habitat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitatDeleteManyArgs>(args?: SelectSubset<T, HabitatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habitats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habitats
     * const habitat = await prisma.habitat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitatUpdateManyArgs>(args: SelectSubset<T, HabitatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Habitat.
     * @param {HabitatUpsertArgs} args - Arguments to update or create a Habitat.
     * @example
     * // Update or create a Habitat
     * const habitat = await prisma.habitat.upsert({
     *   create: {
     *     // ... data to create a Habitat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habitat we want to update
     *   }
     * })
     */
    upsert<T extends HabitatUpsertArgs>(args: SelectSubset<T, HabitatUpsertArgs<ExtArgs>>): Prisma__HabitatClient<$Result.GetResult<Prisma.$HabitatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habitats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitatCountArgs} args - Arguments to filter Habitats to count.
     * @example
     * // Count the number of Habitats
     * const count = await prisma.habitat.count({
     *   where: {
     *     // ... the filter for the Habitats we want to count
     *   }
     * })
    **/
    count<T extends HabitatCountArgs>(
      args?: Subset<T, HabitatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habitat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitatAggregateArgs>(args: Subset<T, HabitatAggregateArgs>): Prisma.PrismaPromise<GetHabitatAggregateType<T>>

    /**
     * Group by Habitat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitatGroupByArgs['orderBy'] }
        : { orderBy?: HabitatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habitat model
   */
  readonly fields: HabitatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habitat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bird<T extends Habitat$BirdArgs<ExtArgs> = {}>(args?: Subset<T, Habitat$BirdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Habitat model
   */
  interface HabitatFieldRefs {
    readonly id: FieldRef<"Habitat", 'String'>
    readonly name: FieldRef<"Habitat", 'String'>
    readonly description: FieldRef<"Habitat", 'String'>
    readonly status: FieldRef<"Habitat", 'Boolean'>
    readonly createdAt: FieldRef<"Habitat", 'DateTime'>
    readonly updatedAt: FieldRef<"Habitat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Habitat findUnique
   */
  export type HabitatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitat
     */
    select?: HabitatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitat
     */
    omit?: HabitatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitatInclude<ExtArgs> | null
    /**
     * Filter, which Habitat to fetch.
     */
    where: HabitatWhereUniqueInput
  }

  /**
   * Habitat findUniqueOrThrow
   */
  export type HabitatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitat
     */
    select?: HabitatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitat
     */
    omit?: HabitatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitatInclude<ExtArgs> | null
    /**
     * Filter, which Habitat to fetch.
     */
    where: HabitatWhereUniqueInput
  }

  /**
   * Habitat findFirst
   */
  export type HabitatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitat
     */
    select?: HabitatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitat
     */
    omit?: HabitatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitatInclude<ExtArgs> | null
    /**
     * Filter, which Habitat to fetch.
     */
    where?: HabitatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habitats to fetch.
     */
    orderBy?: HabitatOrderByWithRelationInput | HabitatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habitats.
     */
    cursor?: HabitatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habitats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habitats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habitats.
     */
    distinct?: HabitatScalarFieldEnum | HabitatScalarFieldEnum[]
  }

  /**
   * Habitat findFirstOrThrow
   */
  export type HabitatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitat
     */
    select?: HabitatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitat
     */
    omit?: HabitatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitatInclude<ExtArgs> | null
    /**
     * Filter, which Habitat to fetch.
     */
    where?: HabitatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habitats to fetch.
     */
    orderBy?: HabitatOrderByWithRelationInput | HabitatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habitats.
     */
    cursor?: HabitatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habitats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habitats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habitats.
     */
    distinct?: HabitatScalarFieldEnum | HabitatScalarFieldEnum[]
  }

  /**
   * Habitat findMany
   */
  export type HabitatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitat
     */
    select?: HabitatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitat
     */
    omit?: HabitatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitatInclude<ExtArgs> | null
    /**
     * Filter, which Habitats to fetch.
     */
    where?: HabitatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habitats to fetch.
     */
    orderBy?: HabitatOrderByWithRelationInput | HabitatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habitats.
     */
    cursor?: HabitatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habitats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habitats.
     */
    skip?: number
    distinct?: HabitatScalarFieldEnum | HabitatScalarFieldEnum[]
  }

  /**
   * Habitat create
   */
  export type HabitatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitat
     */
    select?: HabitatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitat
     */
    omit?: HabitatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitatInclude<ExtArgs> | null
    /**
     * The data needed to create a Habitat.
     */
    data: XOR<HabitatCreateInput, HabitatUncheckedCreateInput>
  }

  /**
   * Habitat createMany
   */
  export type HabitatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habitats.
     */
    data: HabitatCreateManyInput | HabitatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habitat update
   */
  export type HabitatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitat
     */
    select?: HabitatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitat
     */
    omit?: HabitatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitatInclude<ExtArgs> | null
    /**
     * The data needed to update a Habitat.
     */
    data: XOR<HabitatUpdateInput, HabitatUncheckedUpdateInput>
    /**
     * Choose, which Habitat to update.
     */
    where: HabitatWhereUniqueInput
  }

  /**
   * Habitat updateMany
   */
  export type HabitatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habitats.
     */
    data: XOR<HabitatUpdateManyMutationInput, HabitatUncheckedUpdateManyInput>
    /**
     * Filter which Habitats to update
     */
    where?: HabitatWhereInput
    /**
     * Limit how many Habitats to update.
     */
    limit?: number
  }

  /**
   * Habitat upsert
   */
  export type HabitatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitat
     */
    select?: HabitatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitat
     */
    omit?: HabitatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitatInclude<ExtArgs> | null
    /**
     * The filter to search for the Habitat to update in case it exists.
     */
    where: HabitatWhereUniqueInput
    /**
     * In case the Habitat found by the `where` argument doesn't exist, create a new Habitat with this data.
     */
    create: XOR<HabitatCreateInput, HabitatUncheckedCreateInput>
    /**
     * In case the Habitat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitatUpdateInput, HabitatUncheckedUpdateInput>
  }

  /**
   * Habitat delete
   */
  export type HabitatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitat
     */
    select?: HabitatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitat
     */
    omit?: HabitatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitatInclude<ExtArgs> | null
    /**
     * Filter which Habitat to delete.
     */
    where: HabitatWhereUniqueInput
  }

  /**
   * Habitat deleteMany
   */
  export type HabitatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habitats to delete
     */
    where?: HabitatWhereInput
    /**
     * Limit how many Habitats to delete.
     */
    limit?: number
  }

  /**
   * Habitat.Bird
   */
  export type Habitat$BirdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    where?: BirdWhereInput
    orderBy?: BirdOrderByWithRelationInput | BirdOrderByWithRelationInput[]
    cursor?: BirdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BirdScalarFieldEnum | BirdScalarFieldEnum[]
  }

  /**
   * Habitat without action
   */
  export type HabitatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitat
     */
    select?: HabitatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitat
     */
    omit?: HabitatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitatInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BirdScalarFieldEnum: {
    id: 'id',
    name: 'name',
    id_specie: 'id_specie',
    id_family: 'id_family',
    id_habitat: 'id_habitat',
    audio_url: 'audio_url',
    photo: 'photo',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BirdScalarFieldEnum = (typeof BirdScalarFieldEnum)[keyof typeof BirdScalarFieldEnum]


  export const SpecieScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpecieScalarFieldEnum = (typeof SpecieScalarFieldEnum)[keyof typeof SpecieScalarFieldEnum]


  export const FamilyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FamilyScalarFieldEnum = (typeof FamilyScalarFieldEnum)[keyof typeof FamilyScalarFieldEnum]


  export const HabitatScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HabitatScalarFieldEnum = (typeof HabitatScalarFieldEnum)[keyof typeof HabitatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const BirdOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    id_specie: 'id_specie',
    id_family: 'id_family',
    id_habitat: 'id_habitat',
    audio_url: 'audio_url',
    photo: 'photo',
    description: 'description'
  };

  export type BirdOrderByRelevanceFieldEnum = (typeof BirdOrderByRelevanceFieldEnum)[keyof typeof BirdOrderByRelevanceFieldEnum]


  export const SpecieOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type SpecieOrderByRelevanceFieldEnum = (typeof SpecieOrderByRelevanceFieldEnum)[keyof typeof SpecieOrderByRelevanceFieldEnum]


  export const FamilyOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type FamilyOrderByRelevanceFieldEnum = (typeof FamilyOrderByRelevanceFieldEnum)[keyof typeof FamilyOrderByRelevanceFieldEnum]


  export const HabitatOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type HabitatOrderByRelevanceFieldEnum = (typeof HabitatOrderByRelevanceFieldEnum)[keyof typeof HabitatOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type BirdWhereInput = {
    AND?: BirdWhereInput | BirdWhereInput[]
    OR?: BirdWhereInput[]
    NOT?: BirdWhereInput | BirdWhereInput[]
    id?: StringFilter<"Bird"> | string
    name?: StringFilter<"Bird"> | string
    id_specie?: StringFilter<"Bird"> | string
    id_family?: StringFilter<"Bird"> | string
    id_habitat?: StringFilter<"Bird"> | string
    audio_url?: StringNullableFilter<"Bird"> | string | null
    photo?: StringFilter<"Bird"> | string
    description?: StringFilter<"Bird"> | string
    status?: BoolFilter<"Bird"> | boolean
    createdAt?: DateTimeFilter<"Bird"> | Date | string
    updatedAt?: DateTimeFilter<"Bird"> | Date | string
    specie?: XOR<SpecieScalarRelationFilter, SpecieWhereInput>
    family?: XOR<FamilyScalarRelationFilter, FamilyWhereInput>
    habitat?: XOR<HabitatScalarRelationFilter, HabitatWhereInput>
  }

  export type BirdOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    id_specie?: SortOrder
    id_family?: SortOrder
    id_habitat?: SortOrder
    audio_url?: SortOrderInput | SortOrder
    photo?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    specie?: SpecieOrderByWithRelationInput
    family?: FamilyOrderByWithRelationInput
    habitat?: HabitatOrderByWithRelationInput
    _relevance?: BirdOrderByRelevanceInput
  }

  export type BirdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BirdWhereInput | BirdWhereInput[]
    OR?: BirdWhereInput[]
    NOT?: BirdWhereInput | BirdWhereInput[]
    name?: StringFilter<"Bird"> | string
    id_specie?: StringFilter<"Bird"> | string
    id_family?: StringFilter<"Bird"> | string
    id_habitat?: StringFilter<"Bird"> | string
    audio_url?: StringNullableFilter<"Bird"> | string | null
    photo?: StringFilter<"Bird"> | string
    description?: StringFilter<"Bird"> | string
    status?: BoolFilter<"Bird"> | boolean
    createdAt?: DateTimeFilter<"Bird"> | Date | string
    updatedAt?: DateTimeFilter<"Bird"> | Date | string
    specie?: XOR<SpecieScalarRelationFilter, SpecieWhereInput>
    family?: XOR<FamilyScalarRelationFilter, FamilyWhereInput>
    habitat?: XOR<HabitatScalarRelationFilter, HabitatWhereInput>
  }, "id">

  export type BirdOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    id_specie?: SortOrder
    id_family?: SortOrder
    id_habitat?: SortOrder
    audio_url?: SortOrderInput | SortOrder
    photo?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BirdCountOrderByAggregateInput
    _max?: BirdMaxOrderByAggregateInput
    _min?: BirdMinOrderByAggregateInput
  }

  export type BirdScalarWhereWithAggregatesInput = {
    AND?: BirdScalarWhereWithAggregatesInput | BirdScalarWhereWithAggregatesInput[]
    OR?: BirdScalarWhereWithAggregatesInput[]
    NOT?: BirdScalarWhereWithAggregatesInput | BirdScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bird"> | string
    name?: StringWithAggregatesFilter<"Bird"> | string
    id_specie?: StringWithAggregatesFilter<"Bird"> | string
    id_family?: StringWithAggregatesFilter<"Bird"> | string
    id_habitat?: StringWithAggregatesFilter<"Bird"> | string
    audio_url?: StringNullableWithAggregatesFilter<"Bird"> | string | null
    photo?: StringWithAggregatesFilter<"Bird"> | string
    description?: StringWithAggregatesFilter<"Bird"> | string
    status?: BoolWithAggregatesFilter<"Bird"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Bird"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bird"> | Date | string
  }

  export type SpecieWhereInput = {
    AND?: SpecieWhereInput | SpecieWhereInput[]
    OR?: SpecieWhereInput[]
    NOT?: SpecieWhereInput | SpecieWhereInput[]
    id?: StringFilter<"Specie"> | string
    name?: StringFilter<"Specie"> | string
    description?: StringNullableFilter<"Specie"> | string | null
    status?: BoolFilter<"Specie"> | boolean
    createdAt?: DateTimeFilter<"Specie"> | Date | string
    updatedAt?: DateTimeFilter<"Specie"> | Date | string
    Bird?: BirdListRelationFilter
  }

  export type SpecieOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Bird?: BirdOrderByRelationAggregateInput
    _relevance?: SpecieOrderByRelevanceInput
  }

  export type SpecieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpecieWhereInput | SpecieWhereInput[]
    OR?: SpecieWhereInput[]
    NOT?: SpecieWhereInput | SpecieWhereInput[]
    name?: StringFilter<"Specie"> | string
    description?: StringNullableFilter<"Specie"> | string | null
    status?: BoolFilter<"Specie"> | boolean
    createdAt?: DateTimeFilter<"Specie"> | Date | string
    updatedAt?: DateTimeFilter<"Specie"> | Date | string
    Bird?: BirdListRelationFilter
  }, "id">

  export type SpecieOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpecieCountOrderByAggregateInput
    _max?: SpecieMaxOrderByAggregateInput
    _min?: SpecieMinOrderByAggregateInput
  }

  export type SpecieScalarWhereWithAggregatesInput = {
    AND?: SpecieScalarWhereWithAggregatesInput | SpecieScalarWhereWithAggregatesInput[]
    OR?: SpecieScalarWhereWithAggregatesInput[]
    NOT?: SpecieScalarWhereWithAggregatesInput | SpecieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Specie"> | string
    name?: StringWithAggregatesFilter<"Specie"> | string
    description?: StringNullableWithAggregatesFilter<"Specie"> | string | null
    status?: BoolWithAggregatesFilter<"Specie"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Specie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Specie"> | Date | string
  }

  export type FamilyWhereInput = {
    AND?: FamilyWhereInput | FamilyWhereInput[]
    OR?: FamilyWhereInput[]
    NOT?: FamilyWhereInput | FamilyWhereInput[]
    id?: StringFilter<"Family"> | string
    name?: StringFilter<"Family"> | string
    description?: StringNullableFilter<"Family"> | string | null
    status?: BoolFilter<"Family"> | boolean
    createdAt?: DateTimeFilter<"Family"> | Date | string
    updatedAt?: DateTimeFilter<"Family"> | Date | string
    Bird?: BirdListRelationFilter
  }

  export type FamilyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Bird?: BirdOrderByRelationAggregateInput
    _relevance?: FamilyOrderByRelevanceInput
  }

  export type FamilyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FamilyWhereInput | FamilyWhereInput[]
    OR?: FamilyWhereInput[]
    NOT?: FamilyWhereInput | FamilyWhereInput[]
    name?: StringFilter<"Family"> | string
    description?: StringNullableFilter<"Family"> | string | null
    status?: BoolFilter<"Family"> | boolean
    createdAt?: DateTimeFilter<"Family"> | Date | string
    updatedAt?: DateTimeFilter<"Family"> | Date | string
    Bird?: BirdListRelationFilter
  }, "id">

  export type FamilyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FamilyCountOrderByAggregateInput
    _max?: FamilyMaxOrderByAggregateInput
    _min?: FamilyMinOrderByAggregateInput
  }

  export type FamilyScalarWhereWithAggregatesInput = {
    AND?: FamilyScalarWhereWithAggregatesInput | FamilyScalarWhereWithAggregatesInput[]
    OR?: FamilyScalarWhereWithAggregatesInput[]
    NOT?: FamilyScalarWhereWithAggregatesInput | FamilyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Family"> | string
    name?: StringWithAggregatesFilter<"Family"> | string
    description?: StringNullableWithAggregatesFilter<"Family"> | string | null
    status?: BoolWithAggregatesFilter<"Family"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Family"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Family"> | Date | string
  }

  export type HabitatWhereInput = {
    AND?: HabitatWhereInput | HabitatWhereInput[]
    OR?: HabitatWhereInput[]
    NOT?: HabitatWhereInput | HabitatWhereInput[]
    id?: StringFilter<"Habitat"> | string
    name?: StringFilter<"Habitat"> | string
    description?: StringNullableFilter<"Habitat"> | string | null
    status?: BoolFilter<"Habitat"> | boolean
    createdAt?: DateTimeFilter<"Habitat"> | Date | string
    updatedAt?: DateTimeFilter<"Habitat"> | Date | string
    Bird?: BirdListRelationFilter
  }

  export type HabitatOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Bird?: BirdOrderByRelationAggregateInput
    _relevance?: HabitatOrderByRelevanceInput
  }

  export type HabitatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HabitatWhereInput | HabitatWhereInput[]
    OR?: HabitatWhereInput[]
    NOT?: HabitatWhereInput | HabitatWhereInput[]
    name?: StringFilter<"Habitat"> | string
    description?: StringNullableFilter<"Habitat"> | string | null
    status?: BoolFilter<"Habitat"> | boolean
    createdAt?: DateTimeFilter<"Habitat"> | Date | string
    updatedAt?: DateTimeFilter<"Habitat"> | Date | string
    Bird?: BirdListRelationFilter
  }, "id">

  export type HabitatOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HabitatCountOrderByAggregateInput
    _max?: HabitatMaxOrderByAggregateInput
    _min?: HabitatMinOrderByAggregateInput
  }

  export type HabitatScalarWhereWithAggregatesInput = {
    AND?: HabitatScalarWhereWithAggregatesInput | HabitatScalarWhereWithAggregatesInput[]
    OR?: HabitatScalarWhereWithAggregatesInput[]
    NOT?: HabitatScalarWhereWithAggregatesInput | HabitatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Habitat"> | string
    name?: StringWithAggregatesFilter<"Habitat"> | string
    description?: StringNullableWithAggregatesFilter<"Habitat"> | string | null
    status?: BoolWithAggregatesFilter<"Habitat"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Habitat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Habitat"> | Date | string
  }

  export type BirdCreateInput = {
    id?: string
    name: string
    audio_url?: string | null
    photo: string
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    specie: SpecieCreateNestedOneWithoutBirdInput
    family: FamilyCreateNestedOneWithoutBirdInput
    habitat: HabitatCreateNestedOneWithoutBirdInput
  }

  export type BirdUncheckedCreateInput = {
    id?: string
    name: string
    id_specie: string
    id_family: string
    id_habitat: string
    audio_url?: string | null
    photo: string
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    audio_url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specie?: SpecieUpdateOneRequiredWithoutBirdNestedInput
    family?: FamilyUpdateOneRequiredWithoutBirdNestedInput
    habitat?: HabitatUpdateOneRequiredWithoutBirdNestedInput
  }

  export type BirdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    id_specie?: StringFieldUpdateOperationsInput | string
    id_family?: StringFieldUpdateOperationsInput | string
    id_habitat?: StringFieldUpdateOperationsInput | string
    audio_url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirdCreateManyInput = {
    id?: string
    name: string
    id_specie: string
    id_family: string
    id_habitat: string
    audio_url?: string | null
    photo: string
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    audio_url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    id_specie?: StringFieldUpdateOperationsInput | string
    id_family?: StringFieldUpdateOperationsInput | string
    id_habitat?: StringFieldUpdateOperationsInput | string
    audio_url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecieCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Bird?: BirdCreateNestedManyWithoutSpecieInput
  }

  export type SpecieUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Bird?: BirdUncheckedCreateNestedManyWithoutSpecieInput
  }

  export type SpecieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bird?: BirdUpdateManyWithoutSpecieNestedInput
  }

  export type SpecieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bird?: BirdUncheckedUpdateManyWithoutSpecieNestedInput
  }

  export type SpecieCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Bird?: BirdCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Bird?: BirdUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bird?: BirdUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bird?: BirdUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamilyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitatCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Bird?: BirdCreateNestedManyWithoutHabitatInput
  }

  export type HabitatUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Bird?: BirdUncheckedCreateNestedManyWithoutHabitatInput
  }

  export type HabitatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bird?: BirdUpdateManyWithoutHabitatNestedInput
  }

  export type HabitatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bird?: BirdUncheckedUpdateManyWithoutHabitatNestedInput
  }

  export type HabitatCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SpecieScalarRelationFilter = {
    is?: SpecieWhereInput
    isNot?: SpecieWhereInput
  }

  export type FamilyScalarRelationFilter = {
    is?: FamilyWhereInput
    isNot?: FamilyWhereInput
  }

  export type HabitatScalarRelationFilter = {
    is?: HabitatWhereInput
    isNot?: HabitatWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BirdOrderByRelevanceInput = {
    fields: BirdOrderByRelevanceFieldEnum | BirdOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BirdCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    id_specie?: SortOrder
    id_family?: SortOrder
    id_habitat?: SortOrder
    audio_url?: SortOrder
    photo?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BirdMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    id_specie?: SortOrder
    id_family?: SortOrder
    id_habitat?: SortOrder
    audio_url?: SortOrder
    photo?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BirdMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    id_specie?: SortOrder
    id_family?: SortOrder
    id_habitat?: SortOrder
    audio_url?: SortOrder
    photo?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BirdListRelationFilter = {
    every?: BirdWhereInput
    some?: BirdWhereInput
    none?: BirdWhereInput
  }

  export type BirdOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecieOrderByRelevanceInput = {
    fields: SpecieOrderByRelevanceFieldEnum | SpecieOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SpecieCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecieMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecieMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamilyOrderByRelevanceInput = {
    fields: FamilyOrderByRelevanceFieldEnum | FamilyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FamilyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamilyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamilyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitatOrderByRelevanceInput = {
    fields: HabitatOrderByRelevanceFieldEnum | HabitatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HabitatCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitatMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitatMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecieCreateNestedOneWithoutBirdInput = {
    create?: XOR<SpecieCreateWithoutBirdInput, SpecieUncheckedCreateWithoutBirdInput>
    connectOrCreate?: SpecieCreateOrConnectWithoutBirdInput
    connect?: SpecieWhereUniqueInput
  }

  export type FamilyCreateNestedOneWithoutBirdInput = {
    create?: XOR<FamilyCreateWithoutBirdInput, FamilyUncheckedCreateWithoutBirdInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutBirdInput
    connect?: FamilyWhereUniqueInput
  }

  export type HabitatCreateNestedOneWithoutBirdInput = {
    create?: XOR<HabitatCreateWithoutBirdInput, HabitatUncheckedCreateWithoutBirdInput>
    connectOrCreate?: HabitatCreateOrConnectWithoutBirdInput
    connect?: HabitatWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SpecieUpdateOneRequiredWithoutBirdNestedInput = {
    create?: XOR<SpecieCreateWithoutBirdInput, SpecieUncheckedCreateWithoutBirdInput>
    connectOrCreate?: SpecieCreateOrConnectWithoutBirdInput
    upsert?: SpecieUpsertWithoutBirdInput
    connect?: SpecieWhereUniqueInput
    update?: XOR<XOR<SpecieUpdateToOneWithWhereWithoutBirdInput, SpecieUpdateWithoutBirdInput>, SpecieUncheckedUpdateWithoutBirdInput>
  }

  export type FamilyUpdateOneRequiredWithoutBirdNestedInput = {
    create?: XOR<FamilyCreateWithoutBirdInput, FamilyUncheckedCreateWithoutBirdInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutBirdInput
    upsert?: FamilyUpsertWithoutBirdInput
    connect?: FamilyWhereUniqueInput
    update?: XOR<XOR<FamilyUpdateToOneWithWhereWithoutBirdInput, FamilyUpdateWithoutBirdInput>, FamilyUncheckedUpdateWithoutBirdInput>
  }

  export type HabitatUpdateOneRequiredWithoutBirdNestedInput = {
    create?: XOR<HabitatCreateWithoutBirdInput, HabitatUncheckedCreateWithoutBirdInput>
    connectOrCreate?: HabitatCreateOrConnectWithoutBirdInput
    upsert?: HabitatUpsertWithoutBirdInput
    connect?: HabitatWhereUniqueInput
    update?: XOR<XOR<HabitatUpdateToOneWithWhereWithoutBirdInput, HabitatUpdateWithoutBirdInput>, HabitatUncheckedUpdateWithoutBirdInput>
  }

  export type BirdCreateNestedManyWithoutSpecieInput = {
    create?: XOR<BirdCreateWithoutSpecieInput, BirdUncheckedCreateWithoutSpecieInput> | BirdCreateWithoutSpecieInput[] | BirdUncheckedCreateWithoutSpecieInput[]
    connectOrCreate?: BirdCreateOrConnectWithoutSpecieInput | BirdCreateOrConnectWithoutSpecieInput[]
    createMany?: BirdCreateManySpecieInputEnvelope
    connect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
  }

  export type BirdUncheckedCreateNestedManyWithoutSpecieInput = {
    create?: XOR<BirdCreateWithoutSpecieInput, BirdUncheckedCreateWithoutSpecieInput> | BirdCreateWithoutSpecieInput[] | BirdUncheckedCreateWithoutSpecieInput[]
    connectOrCreate?: BirdCreateOrConnectWithoutSpecieInput | BirdCreateOrConnectWithoutSpecieInput[]
    createMany?: BirdCreateManySpecieInputEnvelope
    connect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
  }

  export type BirdUpdateManyWithoutSpecieNestedInput = {
    create?: XOR<BirdCreateWithoutSpecieInput, BirdUncheckedCreateWithoutSpecieInput> | BirdCreateWithoutSpecieInput[] | BirdUncheckedCreateWithoutSpecieInput[]
    connectOrCreate?: BirdCreateOrConnectWithoutSpecieInput | BirdCreateOrConnectWithoutSpecieInput[]
    upsert?: BirdUpsertWithWhereUniqueWithoutSpecieInput | BirdUpsertWithWhereUniqueWithoutSpecieInput[]
    createMany?: BirdCreateManySpecieInputEnvelope
    set?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    disconnect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    delete?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    connect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    update?: BirdUpdateWithWhereUniqueWithoutSpecieInput | BirdUpdateWithWhereUniqueWithoutSpecieInput[]
    updateMany?: BirdUpdateManyWithWhereWithoutSpecieInput | BirdUpdateManyWithWhereWithoutSpecieInput[]
    deleteMany?: BirdScalarWhereInput | BirdScalarWhereInput[]
  }

  export type BirdUncheckedUpdateManyWithoutSpecieNestedInput = {
    create?: XOR<BirdCreateWithoutSpecieInput, BirdUncheckedCreateWithoutSpecieInput> | BirdCreateWithoutSpecieInput[] | BirdUncheckedCreateWithoutSpecieInput[]
    connectOrCreate?: BirdCreateOrConnectWithoutSpecieInput | BirdCreateOrConnectWithoutSpecieInput[]
    upsert?: BirdUpsertWithWhereUniqueWithoutSpecieInput | BirdUpsertWithWhereUniqueWithoutSpecieInput[]
    createMany?: BirdCreateManySpecieInputEnvelope
    set?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    disconnect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    delete?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    connect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    update?: BirdUpdateWithWhereUniqueWithoutSpecieInput | BirdUpdateWithWhereUniqueWithoutSpecieInput[]
    updateMany?: BirdUpdateManyWithWhereWithoutSpecieInput | BirdUpdateManyWithWhereWithoutSpecieInput[]
    deleteMany?: BirdScalarWhereInput | BirdScalarWhereInput[]
  }

  export type BirdCreateNestedManyWithoutFamilyInput = {
    create?: XOR<BirdCreateWithoutFamilyInput, BirdUncheckedCreateWithoutFamilyInput> | BirdCreateWithoutFamilyInput[] | BirdUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: BirdCreateOrConnectWithoutFamilyInput | BirdCreateOrConnectWithoutFamilyInput[]
    createMany?: BirdCreateManyFamilyInputEnvelope
    connect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
  }

  export type BirdUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: XOR<BirdCreateWithoutFamilyInput, BirdUncheckedCreateWithoutFamilyInput> | BirdCreateWithoutFamilyInput[] | BirdUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: BirdCreateOrConnectWithoutFamilyInput | BirdCreateOrConnectWithoutFamilyInput[]
    createMany?: BirdCreateManyFamilyInputEnvelope
    connect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
  }

  export type BirdUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<BirdCreateWithoutFamilyInput, BirdUncheckedCreateWithoutFamilyInput> | BirdCreateWithoutFamilyInput[] | BirdUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: BirdCreateOrConnectWithoutFamilyInput | BirdCreateOrConnectWithoutFamilyInput[]
    upsert?: BirdUpsertWithWhereUniqueWithoutFamilyInput | BirdUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: BirdCreateManyFamilyInputEnvelope
    set?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    disconnect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    delete?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    connect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    update?: BirdUpdateWithWhereUniqueWithoutFamilyInput | BirdUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: BirdUpdateManyWithWhereWithoutFamilyInput | BirdUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: BirdScalarWhereInput | BirdScalarWhereInput[]
  }

  export type BirdUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<BirdCreateWithoutFamilyInput, BirdUncheckedCreateWithoutFamilyInput> | BirdCreateWithoutFamilyInput[] | BirdUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: BirdCreateOrConnectWithoutFamilyInput | BirdCreateOrConnectWithoutFamilyInput[]
    upsert?: BirdUpsertWithWhereUniqueWithoutFamilyInput | BirdUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: BirdCreateManyFamilyInputEnvelope
    set?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    disconnect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    delete?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    connect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    update?: BirdUpdateWithWhereUniqueWithoutFamilyInput | BirdUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: BirdUpdateManyWithWhereWithoutFamilyInput | BirdUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: BirdScalarWhereInput | BirdScalarWhereInput[]
  }

  export type BirdCreateNestedManyWithoutHabitatInput = {
    create?: XOR<BirdCreateWithoutHabitatInput, BirdUncheckedCreateWithoutHabitatInput> | BirdCreateWithoutHabitatInput[] | BirdUncheckedCreateWithoutHabitatInput[]
    connectOrCreate?: BirdCreateOrConnectWithoutHabitatInput | BirdCreateOrConnectWithoutHabitatInput[]
    createMany?: BirdCreateManyHabitatInputEnvelope
    connect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
  }

  export type BirdUncheckedCreateNestedManyWithoutHabitatInput = {
    create?: XOR<BirdCreateWithoutHabitatInput, BirdUncheckedCreateWithoutHabitatInput> | BirdCreateWithoutHabitatInput[] | BirdUncheckedCreateWithoutHabitatInput[]
    connectOrCreate?: BirdCreateOrConnectWithoutHabitatInput | BirdCreateOrConnectWithoutHabitatInput[]
    createMany?: BirdCreateManyHabitatInputEnvelope
    connect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
  }

  export type BirdUpdateManyWithoutHabitatNestedInput = {
    create?: XOR<BirdCreateWithoutHabitatInput, BirdUncheckedCreateWithoutHabitatInput> | BirdCreateWithoutHabitatInput[] | BirdUncheckedCreateWithoutHabitatInput[]
    connectOrCreate?: BirdCreateOrConnectWithoutHabitatInput | BirdCreateOrConnectWithoutHabitatInput[]
    upsert?: BirdUpsertWithWhereUniqueWithoutHabitatInput | BirdUpsertWithWhereUniqueWithoutHabitatInput[]
    createMany?: BirdCreateManyHabitatInputEnvelope
    set?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    disconnect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    delete?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    connect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    update?: BirdUpdateWithWhereUniqueWithoutHabitatInput | BirdUpdateWithWhereUniqueWithoutHabitatInput[]
    updateMany?: BirdUpdateManyWithWhereWithoutHabitatInput | BirdUpdateManyWithWhereWithoutHabitatInput[]
    deleteMany?: BirdScalarWhereInput | BirdScalarWhereInput[]
  }

  export type BirdUncheckedUpdateManyWithoutHabitatNestedInput = {
    create?: XOR<BirdCreateWithoutHabitatInput, BirdUncheckedCreateWithoutHabitatInput> | BirdCreateWithoutHabitatInput[] | BirdUncheckedCreateWithoutHabitatInput[]
    connectOrCreate?: BirdCreateOrConnectWithoutHabitatInput | BirdCreateOrConnectWithoutHabitatInput[]
    upsert?: BirdUpsertWithWhereUniqueWithoutHabitatInput | BirdUpsertWithWhereUniqueWithoutHabitatInput[]
    createMany?: BirdCreateManyHabitatInputEnvelope
    set?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    disconnect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    delete?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    connect?: BirdWhereUniqueInput | BirdWhereUniqueInput[]
    update?: BirdUpdateWithWhereUniqueWithoutHabitatInput | BirdUpdateWithWhereUniqueWithoutHabitatInput[]
    updateMany?: BirdUpdateManyWithWhereWithoutHabitatInput | BirdUpdateManyWithWhereWithoutHabitatInput[]
    deleteMany?: BirdScalarWhereInput | BirdScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SpecieCreateWithoutBirdInput = {
    id?: string
    name: string
    description?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecieUncheckedCreateWithoutBirdInput = {
    id?: string
    name: string
    description?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecieCreateOrConnectWithoutBirdInput = {
    where: SpecieWhereUniqueInput
    create: XOR<SpecieCreateWithoutBirdInput, SpecieUncheckedCreateWithoutBirdInput>
  }

  export type FamilyCreateWithoutBirdInput = {
    id?: string
    name: string
    description?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamilyUncheckedCreateWithoutBirdInput = {
    id?: string
    name: string
    description?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamilyCreateOrConnectWithoutBirdInput = {
    where: FamilyWhereUniqueInput
    create: XOR<FamilyCreateWithoutBirdInput, FamilyUncheckedCreateWithoutBirdInput>
  }

  export type HabitatCreateWithoutBirdInput = {
    id?: string
    name: string
    description?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitatUncheckedCreateWithoutBirdInput = {
    id?: string
    name: string
    description?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitatCreateOrConnectWithoutBirdInput = {
    where: HabitatWhereUniqueInput
    create: XOR<HabitatCreateWithoutBirdInput, HabitatUncheckedCreateWithoutBirdInput>
  }

  export type SpecieUpsertWithoutBirdInput = {
    update: XOR<SpecieUpdateWithoutBirdInput, SpecieUncheckedUpdateWithoutBirdInput>
    create: XOR<SpecieCreateWithoutBirdInput, SpecieUncheckedCreateWithoutBirdInput>
    where?: SpecieWhereInput
  }

  export type SpecieUpdateToOneWithWhereWithoutBirdInput = {
    where?: SpecieWhereInput
    data: XOR<SpecieUpdateWithoutBirdInput, SpecieUncheckedUpdateWithoutBirdInput>
  }

  export type SpecieUpdateWithoutBirdInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecieUncheckedUpdateWithoutBirdInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyUpsertWithoutBirdInput = {
    update: XOR<FamilyUpdateWithoutBirdInput, FamilyUncheckedUpdateWithoutBirdInput>
    create: XOR<FamilyCreateWithoutBirdInput, FamilyUncheckedCreateWithoutBirdInput>
    where?: FamilyWhereInput
  }

  export type FamilyUpdateToOneWithWhereWithoutBirdInput = {
    where?: FamilyWhereInput
    data: XOR<FamilyUpdateWithoutBirdInput, FamilyUncheckedUpdateWithoutBirdInput>
  }

  export type FamilyUpdateWithoutBirdInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyUncheckedUpdateWithoutBirdInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitatUpsertWithoutBirdInput = {
    update: XOR<HabitatUpdateWithoutBirdInput, HabitatUncheckedUpdateWithoutBirdInput>
    create: XOR<HabitatCreateWithoutBirdInput, HabitatUncheckedCreateWithoutBirdInput>
    where?: HabitatWhereInput
  }

  export type HabitatUpdateToOneWithWhereWithoutBirdInput = {
    where?: HabitatWhereInput
    data: XOR<HabitatUpdateWithoutBirdInput, HabitatUncheckedUpdateWithoutBirdInput>
  }

  export type HabitatUpdateWithoutBirdInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitatUncheckedUpdateWithoutBirdInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirdCreateWithoutSpecieInput = {
    id?: string
    name: string
    audio_url?: string | null
    photo: string
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    family: FamilyCreateNestedOneWithoutBirdInput
    habitat: HabitatCreateNestedOneWithoutBirdInput
  }

  export type BirdUncheckedCreateWithoutSpecieInput = {
    id?: string
    name: string
    id_family: string
    id_habitat: string
    audio_url?: string | null
    photo: string
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirdCreateOrConnectWithoutSpecieInput = {
    where: BirdWhereUniqueInput
    create: XOR<BirdCreateWithoutSpecieInput, BirdUncheckedCreateWithoutSpecieInput>
  }

  export type BirdCreateManySpecieInputEnvelope = {
    data: BirdCreateManySpecieInput | BirdCreateManySpecieInput[]
    skipDuplicates?: boolean
  }

  export type BirdUpsertWithWhereUniqueWithoutSpecieInput = {
    where: BirdWhereUniqueInput
    update: XOR<BirdUpdateWithoutSpecieInput, BirdUncheckedUpdateWithoutSpecieInput>
    create: XOR<BirdCreateWithoutSpecieInput, BirdUncheckedCreateWithoutSpecieInput>
  }

  export type BirdUpdateWithWhereUniqueWithoutSpecieInput = {
    where: BirdWhereUniqueInput
    data: XOR<BirdUpdateWithoutSpecieInput, BirdUncheckedUpdateWithoutSpecieInput>
  }

  export type BirdUpdateManyWithWhereWithoutSpecieInput = {
    where: BirdScalarWhereInput
    data: XOR<BirdUpdateManyMutationInput, BirdUncheckedUpdateManyWithoutSpecieInput>
  }

  export type BirdScalarWhereInput = {
    AND?: BirdScalarWhereInput | BirdScalarWhereInput[]
    OR?: BirdScalarWhereInput[]
    NOT?: BirdScalarWhereInput | BirdScalarWhereInput[]
    id?: StringFilter<"Bird"> | string
    name?: StringFilter<"Bird"> | string
    id_specie?: StringFilter<"Bird"> | string
    id_family?: StringFilter<"Bird"> | string
    id_habitat?: StringFilter<"Bird"> | string
    audio_url?: StringNullableFilter<"Bird"> | string | null
    photo?: StringFilter<"Bird"> | string
    description?: StringFilter<"Bird"> | string
    status?: BoolFilter<"Bird"> | boolean
    createdAt?: DateTimeFilter<"Bird"> | Date | string
    updatedAt?: DateTimeFilter<"Bird"> | Date | string
  }

  export type BirdCreateWithoutFamilyInput = {
    id?: string
    name: string
    audio_url?: string | null
    photo: string
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    specie: SpecieCreateNestedOneWithoutBirdInput
    habitat: HabitatCreateNestedOneWithoutBirdInput
  }

  export type BirdUncheckedCreateWithoutFamilyInput = {
    id?: string
    name: string
    id_specie: string
    id_habitat: string
    audio_url?: string | null
    photo: string
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirdCreateOrConnectWithoutFamilyInput = {
    where: BirdWhereUniqueInput
    create: XOR<BirdCreateWithoutFamilyInput, BirdUncheckedCreateWithoutFamilyInput>
  }

  export type BirdCreateManyFamilyInputEnvelope = {
    data: BirdCreateManyFamilyInput | BirdCreateManyFamilyInput[]
    skipDuplicates?: boolean
  }

  export type BirdUpsertWithWhereUniqueWithoutFamilyInput = {
    where: BirdWhereUniqueInput
    update: XOR<BirdUpdateWithoutFamilyInput, BirdUncheckedUpdateWithoutFamilyInput>
    create: XOR<BirdCreateWithoutFamilyInput, BirdUncheckedCreateWithoutFamilyInput>
  }

  export type BirdUpdateWithWhereUniqueWithoutFamilyInput = {
    where: BirdWhereUniqueInput
    data: XOR<BirdUpdateWithoutFamilyInput, BirdUncheckedUpdateWithoutFamilyInput>
  }

  export type BirdUpdateManyWithWhereWithoutFamilyInput = {
    where: BirdScalarWhereInput
    data: XOR<BirdUpdateManyMutationInput, BirdUncheckedUpdateManyWithoutFamilyInput>
  }

  export type BirdCreateWithoutHabitatInput = {
    id?: string
    name: string
    audio_url?: string | null
    photo: string
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    specie: SpecieCreateNestedOneWithoutBirdInput
    family: FamilyCreateNestedOneWithoutBirdInput
  }

  export type BirdUncheckedCreateWithoutHabitatInput = {
    id?: string
    name: string
    id_specie: string
    id_family: string
    audio_url?: string | null
    photo: string
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirdCreateOrConnectWithoutHabitatInput = {
    where: BirdWhereUniqueInput
    create: XOR<BirdCreateWithoutHabitatInput, BirdUncheckedCreateWithoutHabitatInput>
  }

  export type BirdCreateManyHabitatInputEnvelope = {
    data: BirdCreateManyHabitatInput | BirdCreateManyHabitatInput[]
    skipDuplicates?: boolean
  }

  export type BirdUpsertWithWhereUniqueWithoutHabitatInput = {
    where: BirdWhereUniqueInput
    update: XOR<BirdUpdateWithoutHabitatInput, BirdUncheckedUpdateWithoutHabitatInput>
    create: XOR<BirdCreateWithoutHabitatInput, BirdUncheckedCreateWithoutHabitatInput>
  }

  export type BirdUpdateWithWhereUniqueWithoutHabitatInput = {
    where: BirdWhereUniqueInput
    data: XOR<BirdUpdateWithoutHabitatInput, BirdUncheckedUpdateWithoutHabitatInput>
  }

  export type BirdUpdateManyWithWhereWithoutHabitatInput = {
    where: BirdScalarWhereInput
    data: XOR<BirdUpdateManyMutationInput, BirdUncheckedUpdateManyWithoutHabitatInput>
  }

  export type BirdCreateManySpecieInput = {
    id?: string
    name: string
    id_family: string
    id_habitat: string
    audio_url?: string | null
    photo: string
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirdUpdateWithoutSpecieInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    audio_url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneRequiredWithoutBirdNestedInput
    habitat?: HabitatUpdateOneRequiredWithoutBirdNestedInput
  }

  export type BirdUncheckedUpdateWithoutSpecieInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    id_family?: StringFieldUpdateOperationsInput | string
    id_habitat?: StringFieldUpdateOperationsInput | string
    audio_url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirdUncheckedUpdateManyWithoutSpecieInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    id_family?: StringFieldUpdateOperationsInput | string
    id_habitat?: StringFieldUpdateOperationsInput | string
    audio_url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirdCreateManyFamilyInput = {
    id?: string
    name: string
    id_specie: string
    id_habitat: string
    audio_url?: string | null
    photo: string
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirdUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    audio_url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specie?: SpecieUpdateOneRequiredWithoutBirdNestedInput
    habitat?: HabitatUpdateOneRequiredWithoutBirdNestedInput
  }

  export type BirdUncheckedUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    id_specie?: StringFieldUpdateOperationsInput | string
    id_habitat?: StringFieldUpdateOperationsInput | string
    audio_url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirdUncheckedUpdateManyWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    id_specie?: StringFieldUpdateOperationsInput | string
    id_habitat?: StringFieldUpdateOperationsInput | string
    audio_url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirdCreateManyHabitatInput = {
    id?: string
    name: string
    id_specie: string
    id_family: string
    audio_url?: string | null
    photo: string
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirdUpdateWithoutHabitatInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    audio_url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specie?: SpecieUpdateOneRequiredWithoutBirdNestedInput
    family?: FamilyUpdateOneRequiredWithoutBirdNestedInput
  }

  export type BirdUncheckedUpdateWithoutHabitatInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    id_specie?: StringFieldUpdateOperationsInput | string
    id_family?: StringFieldUpdateOperationsInput | string
    audio_url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirdUncheckedUpdateManyWithoutHabitatInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    id_specie?: StringFieldUpdateOperationsInput | string
    id_family?: StringFieldUpdateOperationsInput | string
    audio_url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}