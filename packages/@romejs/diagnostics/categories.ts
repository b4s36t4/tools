/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Rather than having a generic `string` type, we use string literals so there's one place where
// all category names are defined. This allows the naming scheme to be more easily reviewed and
// made consistent.
export type DiagnosticCategory =
  | 'analyzeDependencies/cjsExportInES'
  | 'args/fileNotFound'
  | 'args/invalid'
  | 'bundler/importTypeMismatch'
  | 'bundler/topLevelAwait'
  | 'bundler/unknownExport'
  | 'bundler/moduleCycle'
  | 'compile/jsx'
  | 'compile/classes'
  | 'flags/invalid'
  | 'internalError/request'
  | 'internalError/httpServer'
  | 'lint/pendingFixes'
  | 'lint/defaultExportSameBasename'
  | 'lint/noMultipleSpacesInRegularExpressionLiterals'
  | 'lint/noDuplicateGroupNamesInRegularExpressions'
  | 'lint/noVar'
  | 'lint/emptyBlocks'
  | 'lint/getterReturn'
  | 'lint/noAsyncPromiseExecutor'
  | 'lint/noCompareNegZero'
  | 'lint/noCondAssign'
  | 'lint/noDanglingBackslash'
  | 'lint/noDebugger'
  | 'lint/noDeleteVars'
  | 'lint/noDupeArgs'
  | 'lint/noDuplicateCase'
  | 'lint/noDuplicateKeys'
  | 'lint/noEmptyCharacterClass'
  | 'lint/noExplicitAny'
  | 'lint/noExtraBooleanCast'
  | 'lint/noFunctionAssign'
  | 'lint/noImportAssign'
  | 'lint/noLabelVar'
  | 'lint/noShadowRestrictedNames'
  | 'lint/noTemplateCurlyInString'
  | 'lint/noUnsafeFinally'
  | 'lint/preferFunctionDeclarations'
  | 'lint/preferTemplate'
  | 'lint/sparseArray'
  | 'lint/undeclaredVariables'
  | 'lint/unsafeNegation'
  | 'lint/unusedVariables'
  | 'parse/url/query'
  | 'parse/url'
  | 'parse/js'
  | 'parse/patchMatch'
  | 'parse/stringMarkup'
  | 'parse/regex'
  | 'parse/json'
  | 'parse/semver'
  | 'parse/manifest'
  | 'parse/spdxLicense'
  | 'parse/snapshots'
  | 'projectManager/nameCollision'
  | 'projectManager/missing'
  | 'projectManager/incorrectConfigFilename'
  | 'resolver/notFound'
  | 'resolver/unsupported'
  | 'resolver/fetchFailed'
  | 'suppressions/unused'
  | 'suppressions/incorrectPrefix'
  | 'suppressions/duplicate'
  | 'tests/noneDeclared'
  | 'tests/timeout'
  | 'tests/snapshots/missing'
  | 'tests/snapshots/redundant'
  | 'tests/snapshots/incorrect'
  | 'tests/unhandledRejection'
  | 'tests/fixtureOptions'
  | 'tests/failure'
  | 'typeCheck/incompatible'
  | 'typeCheck/uncallable'
  | 'typeCheck/undeclaredVariable'
  | 'typeCheck/unknownImport'
  | 'typeCheck/unknownProperty'
  | 'typeCheck/notExhaustive'
  | 'typeCheck/missingCondition'
  | 'v8/syntaxError';

export type DiagnosticCategoryPrefix =
  | 'analyzeDependencies'
  | 'args'
  | 'bundler'
  | 'compiler'
  | 'flags'
  | 'internalError'
  | 'lint'
  | 'parse'
  | 'projectManager'
  | 'tests'
  | 'typeCheck'
  | 'v8';
