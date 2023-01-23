export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  JSON: any
}

export type AvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']>
  quality?: InputMaybe<Scalars['Int']>
  speed?: InputMaybe<Scalars['Int']>
}

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>
}

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  ne?: InputMaybe<Scalars['Boolean']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>
  gt?: InputMaybe<Scalars['Date']>
  gte?: InputMaybe<Scalars['Date']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  lt?: InputMaybe<Scalars['Date']>
  lte?: InputMaybe<Scalars['Date']>
  ne?: InputMaybe<Scalars['Date']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
}

export type Directory = Node & {
  __typename?: 'Directory'
  absolutePath: Scalars['String']
  accessTime: Scalars['Date']
  atime: Scalars['Date']
  atimeMs: Scalars['Float']
  base: Scalars['String']
  birthTime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  changeTime: Scalars['Date']
  children: Array<Node>
  ctime: Scalars['Date']
  ctimeMs: Scalars['Float']
  dev: Scalars['Int']
  dir: Scalars['String']
  ext: Scalars['String']
  extension: Scalars['String']
  gid: Scalars['Int']
  id: Scalars['ID']
  ino: Scalars['Float']
  internal: Internal
  mode: Scalars['Int']
  modifiedTime: Scalars['Date']
  mtime: Scalars['Date']
  mtimeMs: Scalars['Float']
  name: Scalars['String']
  nlink: Scalars['Int']
  parent?: Maybe<Node>
  prettySize: Scalars['String']
  rdev: Scalars['Int']
  relativeDirectory: Scalars['String']
  relativePath: Scalars['String']
  root: Scalars['String']
  size: Scalars['Int']
  sourceInstanceName: Scalars['String']
  uid: Scalars['Int']
}

export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection'
  distinct: Array<Scalars['String']>
  edges: Array<DirectoryEdge>
  group: Array<DirectoryGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Directory>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge'
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  ChangeTime = 'changeTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid',
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>
  accessTime?: InputMaybe<DateQueryOperatorInput>
  atime?: InputMaybe<DateQueryOperatorInput>
  atimeMs?: InputMaybe<FloatQueryOperatorInput>
  base?: InputMaybe<StringQueryOperatorInput>
  birthTime?: InputMaybe<DateQueryOperatorInput>
  birthtime?: InputMaybe<DateQueryOperatorInput>
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>
  changeTime?: InputMaybe<DateQueryOperatorInput>
  children?: InputMaybe<NodeFilterListInput>
  ctime?: InputMaybe<DateQueryOperatorInput>
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>
  dev?: InputMaybe<IntQueryOperatorInput>
  dir?: InputMaybe<StringQueryOperatorInput>
  ext?: InputMaybe<StringQueryOperatorInput>
  extension?: InputMaybe<StringQueryOperatorInput>
  gid?: InputMaybe<IntQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  ino?: InputMaybe<FloatQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  mode?: InputMaybe<IntQueryOperatorInput>
  modifiedTime?: InputMaybe<DateQueryOperatorInput>
  mtime?: InputMaybe<DateQueryOperatorInput>
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  nlink?: InputMaybe<IntQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  prettySize?: InputMaybe<StringQueryOperatorInput>
  rdev?: InputMaybe<IntQueryOperatorInput>
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>
  relativePath?: InputMaybe<StringQueryOperatorInput>
  root?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>
  uid?: InputMaybe<IntQueryOperatorInput>
}

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<DirectoryEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<DirectoryGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Directory>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
  highlight: Scalars['String']
  opacity?: InputMaybe<Scalars['Int']>
  shadow: Scalars['String']
}

export type File = Node & {
  __typename?: 'File'
  absolutePath: Scalars['String']
  accessTime: Scalars['Date']
  atime: Scalars['Date']
  atimeMs: Scalars['Float']
  base: Scalars['String']
  birthTime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  changeTime: Scalars['Date']
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>
  children: Array<Node>
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>
  ctime: Scalars['Date']
  ctimeMs: Scalars['Float']
  dev: Scalars['Int']
  dir: Scalars['String']
  ext: Scalars['String']
  extension: Scalars['String']
  gid: Scalars['Int']
  id: Scalars['ID']
  ino: Scalars['Float']
  internal: Internal
  mode: Scalars['Int']
  modifiedTime: Scalars['Date']
  mtime: Scalars['Date']
  mtimeMs: Scalars['Float']
  name: Scalars['String']
  nlink: Scalars['Int']
  parent?: Maybe<Node>
  prettySize: Scalars['String']
  rdev: Scalars['Int']
  relativeDirectory: Scalars['String']
  relativePath: Scalars['String']
  root: Scalars['String']
  size: Scalars['Int']
  sourceInstanceName: Scalars['String']
  uid: Scalars['Int']
  url?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileConnection = {
  __typename?: 'FileConnection'
  distinct: Array<Scalars['String']>
  edges: Array<FileEdge>
  group: Array<FileGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<File>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileEdge = {
  __typename?: 'FileEdge'
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export enum FileFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildren = 'childImageSharp___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpId = 'childImageSharp___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  Children = 'children',
  ChildrenImageSharp = 'childrenImageSharp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpId = 'childrenImageSharp___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid',
  Url = 'url',
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>
  accessTime?: InputMaybe<DateQueryOperatorInput>
  atime?: InputMaybe<DateQueryOperatorInput>
  atimeMs?: InputMaybe<FloatQueryOperatorInput>
  base?: InputMaybe<StringQueryOperatorInput>
  birthTime?: InputMaybe<DateQueryOperatorInput>
  birthtime?: InputMaybe<DateQueryOperatorInput>
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>
  blksize?: InputMaybe<IntQueryOperatorInput>
  blocks?: InputMaybe<IntQueryOperatorInput>
  changeTime?: InputMaybe<DateQueryOperatorInput>
  childImageSharp?: InputMaybe<ImageSharpFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>
  ctime?: InputMaybe<DateQueryOperatorInput>
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>
  dev?: InputMaybe<IntQueryOperatorInput>
  dir?: InputMaybe<StringQueryOperatorInput>
  ext?: InputMaybe<StringQueryOperatorInput>
  extension?: InputMaybe<StringQueryOperatorInput>
  gid?: InputMaybe<IntQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  ino?: InputMaybe<FloatQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  mode?: InputMaybe<IntQueryOperatorInput>
  modifiedTime?: InputMaybe<DateQueryOperatorInput>
  mtime?: InputMaybe<DateQueryOperatorInput>
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  nlink?: InputMaybe<IntQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  prettySize?: InputMaybe<StringQueryOperatorInput>
  rdev?: InputMaybe<IntQueryOperatorInput>
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>
  relativePath?: InputMaybe<StringQueryOperatorInput>
  root?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>
  uid?: InputMaybe<IntQueryOperatorInput>
  url?: InputMaybe<StringQueryOperatorInput>
}

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<FileEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<FileGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<File>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  ne?: InputMaybe<Scalars['Float']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
}

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE',
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP',
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG',
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp'
  children: Array<Node>
  fixed?: Maybe<ImageSharpFixed>
  fluid?: Maybe<ImageSharpFluid>
  gatsbyImageData: Scalars['JSON']
  id: Scalars['ID']
  internal: Internal
  original?: Maybe<ImageSharpOriginal>
  parent?: Maybe<Node>
  resize?: Maybe<ImageSharpResize>
}

export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>
  base64Width?: InputMaybe<Scalars['Int']>
  cropFocus?: InputMaybe<ImageCropFocus>
  duotone?: InputMaybe<DuotoneGradient>
  fit?: InputMaybe<ImageFit>
  grayscale?: InputMaybe<Scalars['Boolean']>
  height?: InputMaybe<Scalars['Int']>
  jpegProgressive?: InputMaybe<Scalars['Boolean']>
  jpegQuality?: InputMaybe<Scalars['Int']>
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>
  pngQuality?: InputMaybe<Scalars['Int']>
  quality?: InputMaybe<Scalars['Int']>
  rotate?: InputMaybe<Scalars['Int']>
  toFormat?: InputMaybe<ImageFormat>
  toFormatBase64?: InputMaybe<ImageFormat>
  traceSVG?: InputMaybe<Potrace>
  trim?: InputMaybe<Scalars['Float']>
  webpQuality?: InputMaybe<Scalars['Int']>
  width?: InputMaybe<Scalars['Int']>
}

export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>
  base64Width?: InputMaybe<Scalars['Int']>
  cropFocus?: InputMaybe<ImageCropFocus>
  duotone?: InputMaybe<DuotoneGradient>
  fit?: InputMaybe<ImageFit>
  grayscale?: InputMaybe<Scalars['Boolean']>
  jpegProgressive?: InputMaybe<Scalars['Boolean']>
  jpegQuality?: InputMaybe<Scalars['Int']>
  maxHeight?: InputMaybe<Scalars['Int']>
  maxWidth?: InputMaybe<Scalars['Int']>
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>
  pngQuality?: InputMaybe<Scalars['Int']>
  quality?: InputMaybe<Scalars['Int']>
  rotate?: InputMaybe<Scalars['Int']>
  sizes?: InputMaybe<Scalars['String']>
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  toFormat?: InputMaybe<ImageFormat>
  toFormatBase64?: InputMaybe<ImageFormat>
  traceSVG?: InputMaybe<Potrace>
  trim?: InputMaybe<Scalars['Float']>
  webpQuality?: InputMaybe<Scalars['Int']>
}

export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>
  avifOptions?: InputMaybe<AvifOptions>
  backgroundColor?: InputMaybe<Scalars['String']>
  blurredOptions?: InputMaybe<BlurredOptions>
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>
  height?: InputMaybe<Scalars['Int']>
  jpgOptions?: InputMaybe<JpgOptions>
  layout?: InputMaybe<ImageLayout>
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  placeholder?: InputMaybe<ImagePlaceholder>
  pngOptions?: InputMaybe<PngOptions>
  quality?: InputMaybe<Scalars['Int']>
  sizes?: InputMaybe<Scalars['String']>
  tracedSVGOptions?: InputMaybe<Potrace>
  transformOptions?: InputMaybe<TransformOptions>
  webpOptions?: InputMaybe<WebPOptions>
  width?: InputMaybe<Scalars['Int']>
}

export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>
  base64?: InputMaybe<Scalars['Boolean']>
  cropFocus?: InputMaybe<ImageCropFocus>
  duotone?: InputMaybe<DuotoneGradient>
  fit?: InputMaybe<ImageFit>
  grayscale?: InputMaybe<Scalars['Boolean']>
  height?: InputMaybe<Scalars['Int']>
  jpegProgressive?: InputMaybe<Scalars['Boolean']>
  jpegQuality?: InputMaybe<Scalars['Int']>
  pngCompressionLevel?: InputMaybe<Scalars['Int']>
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>
  pngQuality?: InputMaybe<Scalars['Int']>
  quality?: InputMaybe<Scalars['Int']>
  rotate?: InputMaybe<Scalars['Int']>
  toFormat?: InputMaybe<ImageFormat>
  traceSVG?: InputMaybe<Potrace>
  trim?: InputMaybe<Scalars['Float']>
  webpQuality?: InputMaybe<Scalars['Int']>
  width?: InputMaybe<Scalars['Int']>
}

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection'
  distinct: Array<Scalars['String']>
  edges: Array<ImageSharpEdge>
  group: Array<ImageSharpGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge'
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export enum ImageSharpFieldsEnum {
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  Children = 'children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildren = 'children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenChildren = 'children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenChildrenId = 'children___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenId = 'children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalType = 'children___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenParentId = 'children___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenId = 'children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalContent = 'children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalDescription = 'children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalMediaType = 'children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalOwner = 'children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalType = 'children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentChildren = 'children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentChildrenId = 'children___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentId = 'children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalContent = 'children___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalType = 'children___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentParentChildren = 'children___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentParentId = 'children___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedAspectRatio = 'fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedBase64 = 'fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedHeight = 'fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedOriginalName = 'fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrc = 'fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrcSet = 'fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrcWebp = 'fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedTracedSvg = 'fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedWidth = 'fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidAspectRatio = 'fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidBase64 = 'fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidOriginalImg = 'fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidOriginalName = 'fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidPresentationHeight = 'fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidPresentationWidth = 'fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSizes = 'fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrc = 'fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrcSet = 'fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrcWebp = 'fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidTracedSvg = 'fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GatsbyImageData = 'gatsbyImageData',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  Id = 'id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalContent = 'internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalContentDigest = 'internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalDescription = 'internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalFieldOwners = 'internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalIgnoreType = 'internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalMediaType = 'internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalOwner = 'internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalType = 'internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OriginalHeight = 'original___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OriginalSrc = 'original___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OriginalWidth = 'original___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildren = 'parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenChildren = 'parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenChildrenId = 'parent___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenId = 'parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalContent = 'parent___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalType = 'parent___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenParentChildren = 'parent___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenParentId = 'parent___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentId = 'parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalContent = 'parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalDescription = 'parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalMediaType = 'parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalOwner = 'parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalType = 'parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentChildren = 'parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentChildrenChildren = 'parent___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentChildrenId = 'parent___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentId = 'parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalContent = 'parent___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalDescription = 'parent___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalType = 'parent___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentParentChildren = 'parent___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentParentId = 'parent___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeAspectRatio = 'resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeHeight = 'resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeOriginalName = 'resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeSrc = 'resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeTracedSvg = 'resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeWidth = 'resize___width',
}

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>
  fixed?: InputMaybe<ImageSharpFixedFilterInput>
  fluid?: InputMaybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  original?: InputMaybe<ImageSharpOriginalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
  resize?: InputMaybe<ImageSharpResizeFilterInput>
}

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>
}

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed'
  aspectRatio?: Maybe<Scalars['Float']>
  base64?: Maybe<Scalars['String']>
  height: Scalars['Float']
  originalName?: Maybe<Scalars['String']>
  src: Scalars['String']
  srcSet: Scalars['String']
  srcSetWebp?: Maybe<Scalars['String']>
  srcWebp?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  width: Scalars['Float']
}

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>
  base64?: InputMaybe<StringQueryOperatorInput>
  height?: InputMaybe<FloatQueryOperatorInput>
  originalName?: InputMaybe<StringQueryOperatorInput>
  src?: InputMaybe<StringQueryOperatorInput>
  srcSet?: InputMaybe<StringQueryOperatorInput>
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>
  srcWebp?: InputMaybe<StringQueryOperatorInput>
  tracedSVG?: InputMaybe<StringQueryOperatorInput>
  width?: InputMaybe<FloatQueryOperatorInput>
}

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid'
  aspectRatio: Scalars['Float']
  base64?: Maybe<Scalars['String']>
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationHeight: Scalars['Int']
  presentationWidth: Scalars['Int']
  sizes: Scalars['String']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcSetWebp?: Maybe<Scalars['String']>
  srcWebp?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
}

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>
  base64?: InputMaybe<StringQueryOperatorInput>
  originalImg?: InputMaybe<StringQueryOperatorInput>
  originalName?: InputMaybe<StringQueryOperatorInput>
  presentationHeight?: InputMaybe<IntQueryOperatorInput>
  presentationWidth?: InputMaybe<IntQueryOperatorInput>
  sizes?: InputMaybe<StringQueryOperatorInput>
  src?: InputMaybe<StringQueryOperatorInput>
  srcSet?: InputMaybe<StringQueryOperatorInput>
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>
  srcWebp?: InputMaybe<StringQueryOperatorInput>
  tracedSVG?: InputMaybe<StringQueryOperatorInput>
}

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<ImageSharpEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<ImageSharpGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal'
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Float']>
}

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>
  src?: InputMaybe<StringQueryOperatorInput>
  width?: InputMaybe<FloatQueryOperatorInput>
}

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize'
  aspectRatio?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Int']>
  originalName?: Maybe<Scalars['String']>
  src?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
}

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>
  height?: InputMaybe<IntQueryOperatorInput>
  originalName?: InputMaybe<StringQueryOperatorInput>
  src?: InputMaybe<StringQueryOperatorInput>
  tracedSVG?: InputMaybe<StringQueryOperatorInput>
  width?: InputMaybe<IntQueryOperatorInput>
}

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  ne?: InputMaybe<Scalars['Int']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type Internal = {
  __typename?: 'Internal'
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>
  contentDigest?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  fieldOwners?: InputMaybe<StringQueryOperatorInput>
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>
  mediaType?: InputMaybe<StringQueryOperatorInput>
  owner?: InputMaybe<StringQueryOperatorInput>
  type?: InputMaybe<StringQueryOperatorInput>
}

export type JpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']>
  quality?: InputMaybe<Scalars['Int']>
}

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>
  glob?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  ne?: InputMaybe<Scalars['JSON']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  regex?: InputMaybe<Scalars['JSON']>
}

export enum MarkdownExcerptFormats {
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Plain = 'PLAIN',
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading'
  depth?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type MarkdownHeadingFilterInput = {
  depth?: InputMaybe<IntQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  value?: InputMaybe<StringQueryOperatorInput>
}

export type MarkdownHeadingFilterListInput = {
  elemMatch?: InputMaybe<MarkdownHeadingFilterInput>
}

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark'
  children: Array<Node>
  excerpt?: Maybe<Scalars['String']>
  excerptAst?: Maybe<Scalars['JSON']>
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>
  html?: Maybe<Scalars['String']>
  htmlAst?: Maybe<Scalars['JSON']>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
  rawMarkdownBody?: Maybe<Scalars['String']>
  tableOfContents?: Maybe<Scalars['String']>
  timeToRead?: Maybe<Scalars['Int']>
  wordCount?: Maybe<MarkdownWordCount>
}

export type MarkdownRemarkExcerptArgs = {
  format?: InputMaybe<MarkdownExcerptFormats>
  pruneLength?: InputMaybe<Scalars['Int']>
  truncate?: InputMaybe<Scalars['Boolean']>
}

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>
  truncate?: InputMaybe<Scalars['Boolean']>
}

export type MarkdownRemarkHeadingsArgs = {
  depth?: InputMaybe<MarkdownHeadingLevels>
}

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>
  heading?: InputMaybe<Scalars['String']>
  maxDepth?: InputMaybe<Scalars['Int']>
  pathToSlugField?: InputMaybe<Scalars['String']>
}

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection'
  distinct: Array<Scalars['String']>
  edges: Array<MarkdownRemarkEdge>
  group: Array<MarkdownRemarkGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge'
  next?: Maybe<MarkdownRemark>
  node: MarkdownRemark
  previous?: Maybe<MarkdownRemark>
}

export enum MarkdownRemarkFieldsEnum {
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  Children = 'children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildren = 'children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenChildren = 'children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenChildrenId = 'children___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenId = 'children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalType = 'children___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenParentId = 'children___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenId = 'children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalContent = 'children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalDescription = 'children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalMediaType = 'children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalOwner = 'children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalType = 'children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentChildren = 'children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentChildrenId = 'children___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentId = 'children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalContent = 'children___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalType = 'children___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentParentChildren = 'children___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentParentId = 'children___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  Excerpt = 'excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ExcerptAst = 'excerptAst',
  FrontmatterTitle = 'frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  Headings = 'headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadingsDepth = 'headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadingsId = 'headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadingsValue = 'headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  Html = 'html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HtmlAst = 'htmlAst',
  Id = 'id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalContent = 'internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalContentDigest = 'internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalDescription = 'internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalFieldOwners = 'internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalIgnoreType = 'internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalMediaType = 'internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalOwner = 'internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalType = 'internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildren = 'parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenChildren = 'parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenChildrenId = 'parent___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenId = 'parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalContent = 'parent___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalType = 'parent___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenParentChildren = 'parent___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenParentId = 'parent___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentId = 'parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalContent = 'parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalDescription = 'parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalMediaType = 'parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalOwner = 'parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalType = 'parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentChildren = 'parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentChildrenChildren = 'parent___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentChildrenId = 'parent___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentId = 'parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalContent = 'parent___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalDescription = 'parent___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalType = 'parent___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentParentChildren = 'parent___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentParentId = 'parent___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RawMarkdownBody = 'rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TableOfContents = 'tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TimeToRead = 'timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  WordCountParagraphs = 'wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  WordCountSentences = 'wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  WordCountWords = 'wordCount___words',
}

export type MarkdownRemarkFilterInput = {
  children?: InputMaybe<NodeFilterListInput>
  excerpt?: InputMaybe<StringQueryOperatorInput>
  excerptAst?: InputMaybe<JsonQueryOperatorInput>
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFilterInput>
  headings?: InputMaybe<MarkdownHeadingFilterListInput>
  html?: InputMaybe<StringQueryOperatorInput>
  htmlAst?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>
  tableOfContents?: InputMaybe<StringQueryOperatorInput>
  timeToRead?: InputMaybe<IntQueryOperatorInput>
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>
}

export type MarkdownRemarkFilterListInput = {
  elemMatch?: InputMaybe<MarkdownRemarkFilterInput>
}

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter'
  title?: Maybe<Scalars['String']>
}

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>
}

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<MarkdownRemarkEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<MarkdownRemarkGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkGroupConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MarkdownRemarkFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount'
  paragraphs?: Maybe<Scalars['Int']>
  sentences?: Maybe<Scalars['Int']>
  words?: Maybe<Scalars['Int']>
}

export type MarkdownWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>
  sentences?: InputMaybe<IntQueryOperatorInput>
  words?: InputMaybe<IntQueryOperatorInput>
}

/** Node Interface */
export type Node = {
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
}

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>
}

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']>
  quality?: InputMaybe<Scalars['Int']>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  currentPage: Scalars['Int']
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type Potrace = {
  alphaMax?: InputMaybe<Scalars['Float']>
  background?: InputMaybe<Scalars['String']>
  blackOnWhite?: InputMaybe<Scalars['Boolean']>
  color?: InputMaybe<Scalars['String']>
  optCurve?: InputMaybe<Scalars['Boolean']>
  optTolerance?: InputMaybe<Scalars['Float']>
  threshold?: InputMaybe<Scalars['Int']>
  turdSize?: InputMaybe<Scalars['Float']>
  turnPolicy?: InputMaybe<PotraceTurnPolicy>
}

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
}

export type Query = {
  __typename?: 'Query'
  allDirectory: DirectoryConnection
  allFile: FileConnection
  allImageSharp: ImageSharpConnection
  allMarkdownRemark: MarkdownRemarkConnection
  allRecipeCategory: RecipeCategoryConnection
  allRecipePart: RecipePartConnection
  allSite: SiteConnection
  allSiteBuildMetadata: SiteBuildMetadataConnection
  allSiteFunction: SiteFunctionConnection
  allSitePage: SitePageConnection
  allSitePlugin: SitePluginConnection
  allStrapiArticle: Strapi_ArticleConnection
  allStrapiArticleContentTextnode: Strapi_Article_Content_TextnodeConnection
  allStrapiArticleHeadlineTextnode: Strapi_Article_Headline_TextnodeConnection
  allStrapiCategory: Strapi_CategoryConnection
  allStrapiComponentSeoDescription: Strapi__Component_Seo_DescriptionConnection
  allStrapiMedia: Strapi__MediaConnection
  allStrapiRecipe: Strapi_RecipeConnection
  allStrapiRecipeDirectionsTextnode: Strapi_Recipe_Directions_TextnodeConnection
  allStrapiRecipeIngredientsTextnode: Strapi_Recipe_Ingredients_TextnodeConnection
  allStrapiTag: Strapi_TagConnection
  directory?: Maybe<Directory>
  file?: Maybe<File>
  imageSharp?: Maybe<ImageSharp>
  markdownRemark?: Maybe<MarkdownRemark>
  recipeCategory?: Maybe<RecipeCategory>
  recipePart?: Maybe<RecipePart>
  site?: Maybe<Site>
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  siteFunction?: Maybe<SiteFunction>
  sitePage?: Maybe<SitePage>
  sitePlugin?: Maybe<SitePlugin>
  strapiArticle?: Maybe<Strapi_Article>
  strapiArticleContentTextnode?: Maybe<Strapi_Article_Content_Textnode>
  strapiArticleHeadlineTextnode?: Maybe<Strapi_Article_Headline_Textnode>
  strapiCategory?: Maybe<Strapi_Category>
  strapiComponentSeoDescription?: Maybe<Strapi__Component_Seo_Description>
  strapiMedia?: Maybe<Strapi__Media>
  strapiRecipe?: Maybe<Strapi_Recipe>
  strapiRecipeDirectionsTextnode?: Maybe<Strapi_Recipe_Directions_Textnode>
  strapiRecipeIngredientsTextnode?: Maybe<Strapi_Recipe_Ingredients_Textnode>
  strapiTag?: Maybe<Strapi_Tag>
}

export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<DirectorySortInput>
}

export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<FileSortInput>
}

export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<ImageSharpSortInput>
}

export type QueryAllMarkdownRemarkArgs = {
  filter?: InputMaybe<MarkdownRemarkFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<MarkdownRemarkSortInput>
}

export type QueryAllRecipeCategoryArgs = {
  filter?: InputMaybe<RecipeCategoryFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<RecipeCategorySortInput>
}

export type QueryAllRecipePartArgs = {
  filter?: InputMaybe<RecipePartFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<RecipePartSortInput>
}

export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SiteSortInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SiteBuildMetadataSortInput>
}

export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SiteFunctionSortInput>
}

export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SitePageSortInput>
}

export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SitePluginSortInput>
}

export type QueryAllStrapiArticleArgs = {
  filter?: InputMaybe<Strapi_ArticleFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Strapi_ArticleSortInput>
}

export type QueryAllStrapiArticleContentTextnodeArgs = {
  filter?: InputMaybe<Strapi_Article_Content_TextnodeFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Strapi_Article_Content_TextnodeSortInput>
}

export type QueryAllStrapiArticleHeadlineTextnodeArgs = {
  filter?: InputMaybe<Strapi_Article_Headline_TextnodeFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Strapi_Article_Headline_TextnodeSortInput>
}

export type QueryAllStrapiCategoryArgs = {
  filter?: InputMaybe<Strapi_CategoryFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Strapi_CategorySortInput>
}

export type QueryAllStrapiComponentSeoDescriptionArgs = {
  filter?: InputMaybe<Strapi__Component_Seo_DescriptionFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Strapi__Component_Seo_DescriptionSortInput>
}

export type QueryAllStrapiMediaArgs = {
  filter?: InputMaybe<Strapi__MediaFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Strapi__MediaSortInput>
}

export type QueryAllStrapiRecipeArgs = {
  filter?: InputMaybe<Strapi_RecipeFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Strapi_RecipeSortInput>
}

export type QueryAllStrapiRecipeDirectionsTextnodeArgs = {
  filter?: InputMaybe<Strapi_Recipe_Directions_TextnodeFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Strapi_Recipe_Directions_TextnodeSortInput>
}

export type QueryAllStrapiRecipeIngredientsTextnodeArgs = {
  filter?: InputMaybe<Strapi_Recipe_Ingredients_TextnodeFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Strapi_Recipe_Ingredients_TextnodeSortInput>
}

export type QueryAllStrapiTagArgs = {
  filter?: InputMaybe<Strapi_TagFilterInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Strapi_TagSortInput>
}

export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>
  accessTime?: InputMaybe<DateQueryOperatorInput>
  atime?: InputMaybe<DateQueryOperatorInput>
  atimeMs?: InputMaybe<FloatQueryOperatorInput>
  base?: InputMaybe<StringQueryOperatorInput>
  birthTime?: InputMaybe<DateQueryOperatorInput>
  birthtime?: InputMaybe<DateQueryOperatorInput>
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>
  changeTime?: InputMaybe<DateQueryOperatorInput>
  children?: InputMaybe<NodeFilterListInput>
  ctime?: InputMaybe<DateQueryOperatorInput>
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>
  dev?: InputMaybe<IntQueryOperatorInput>
  dir?: InputMaybe<StringQueryOperatorInput>
  ext?: InputMaybe<StringQueryOperatorInput>
  extension?: InputMaybe<StringQueryOperatorInput>
  gid?: InputMaybe<IntQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  ino?: InputMaybe<FloatQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  mode?: InputMaybe<IntQueryOperatorInput>
  modifiedTime?: InputMaybe<DateQueryOperatorInput>
  mtime?: InputMaybe<DateQueryOperatorInput>
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  nlink?: InputMaybe<IntQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  prettySize?: InputMaybe<StringQueryOperatorInput>
  rdev?: InputMaybe<IntQueryOperatorInput>
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>
  relativePath?: InputMaybe<StringQueryOperatorInput>
  root?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>
  uid?: InputMaybe<IntQueryOperatorInput>
}

export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>
  accessTime?: InputMaybe<DateQueryOperatorInput>
  atime?: InputMaybe<DateQueryOperatorInput>
  atimeMs?: InputMaybe<FloatQueryOperatorInput>
  base?: InputMaybe<StringQueryOperatorInput>
  birthTime?: InputMaybe<DateQueryOperatorInput>
  birthtime?: InputMaybe<DateQueryOperatorInput>
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>
  blksize?: InputMaybe<IntQueryOperatorInput>
  blocks?: InputMaybe<IntQueryOperatorInput>
  changeTime?: InputMaybe<DateQueryOperatorInput>
  childImageSharp?: InputMaybe<ImageSharpFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>
  ctime?: InputMaybe<DateQueryOperatorInput>
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>
  dev?: InputMaybe<IntQueryOperatorInput>
  dir?: InputMaybe<StringQueryOperatorInput>
  ext?: InputMaybe<StringQueryOperatorInput>
  extension?: InputMaybe<StringQueryOperatorInput>
  gid?: InputMaybe<IntQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  ino?: InputMaybe<FloatQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  mode?: InputMaybe<IntQueryOperatorInput>
  modifiedTime?: InputMaybe<DateQueryOperatorInput>
  mtime?: InputMaybe<DateQueryOperatorInput>
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  nlink?: InputMaybe<IntQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  prettySize?: InputMaybe<StringQueryOperatorInput>
  rdev?: InputMaybe<IntQueryOperatorInput>
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>
  relativePath?: InputMaybe<StringQueryOperatorInput>
  root?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>
  uid?: InputMaybe<IntQueryOperatorInput>
  url?: InputMaybe<StringQueryOperatorInput>
}

export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>
  fixed?: InputMaybe<ImageSharpFixedFilterInput>
  fluid?: InputMaybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  original?: InputMaybe<ImageSharpOriginalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
  resize?: InputMaybe<ImageSharpResizeFilterInput>
}

export type QueryMarkdownRemarkArgs = {
  children?: InputMaybe<NodeFilterListInput>
  excerpt?: InputMaybe<StringQueryOperatorInput>
  excerptAst?: InputMaybe<JsonQueryOperatorInput>
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFilterInput>
  headings?: InputMaybe<MarkdownHeadingFilterListInput>
  html?: InputMaybe<StringQueryOperatorInput>
  htmlAst?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>
  tableOfContents?: InputMaybe<StringQueryOperatorInput>
  timeToRead?: InputMaybe<IntQueryOperatorInput>
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>
}

export type QueryRecipeCategoryArgs = {
  children?: InputMaybe<NodeFilterListInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  name?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  position?: InputMaybe<IntQueryOperatorInput>
  slug?: InputMaybe<StringQueryOperatorInput>
}

export type QueryRecipePartArgs = {
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
}

export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>
  children?: InputMaybe<NodeFilterListInput>
  host?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  pathPrefix?: InputMaybe<StringQueryOperatorInput>
  polyfill?: InputMaybe<BooleanQueryOperatorInput>
  port?: InputMaybe<IntQueryOperatorInput>
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>
  trailingSlash?: InputMaybe<StringQueryOperatorInput>
}

export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>
  children?: InputMaybe<NodeFilterListInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
}

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>
  children?: InputMaybe<NodeFilterListInput>
  functionRoute?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  matchPath?: InputMaybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  pluginName?: InputMaybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>
}

export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>
  component?: InputMaybe<StringQueryOperatorInput>
  componentChunkName?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  internalComponentName?: InputMaybe<StringQueryOperatorInput>
  matchPath?: InputMaybe<StringQueryOperatorInput>
  pageContext?: InputMaybe<JsonQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  path?: InputMaybe<StringQueryOperatorInput>
  pluginCreator?: InputMaybe<SitePluginFilterInput>
}

export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>
  children?: InputMaybe<NodeFilterListInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  name?: InputMaybe<StringQueryOperatorInput>
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>
  packageJson?: InputMaybe<JsonQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>
  resolve?: InputMaybe<StringQueryOperatorInput>
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>
  version?: InputMaybe<StringQueryOperatorInput>
}

export type QueryStrapiArticleArgs = {
  childStrapiArticleContentTextnode?: InputMaybe<Strapi_Article_Content_TextnodeFilterInput>
  childStrapiArticleHeadlineTextnode?: InputMaybe<Strapi_Article_Headline_TextnodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  childrenStrapiArticleContentTextnode?: InputMaybe<Strapi_Article_Content_TextnodeFilterListInput>
  childrenStrapiArticleHeadlineTextnode?: InputMaybe<Strapi_Article_Headline_TextnodeFilterListInput>
  content?: InputMaybe<Strapi_ArticleContentFilterInput>
  createdAt?: InputMaybe<DateQueryOperatorInput>
  headline?: InputMaybe<Strapi_ArticleHeadlineFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
  publishedAt?: InputMaybe<DateQueryOperatorInput>
  slug?: InputMaybe<StringQueryOperatorInput>
  strapi_id?: InputMaybe<IntQueryOperatorInput>
  title?: InputMaybe<StringQueryOperatorInput>
  updatedAt?: InputMaybe<DateQueryOperatorInput>
}

export type QueryStrapiArticleContentTextnodeArgs = {
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>
  content?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
}

export type QueryStrapiArticleHeadlineTextnodeArgs = {
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>
  headline?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
}

export type QueryStrapiCategoryArgs = {
  children?: InputMaybe<NodeFilterListInput>
  createdAt?: InputMaybe<DateQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  name?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  recipes?: InputMaybe<Strapi_RecipeFilterListInput>
  slug?: InputMaybe<StringQueryOperatorInput>
  strapi_id?: InputMaybe<IntQueryOperatorInput>
  updatedAt?: InputMaybe<DateQueryOperatorInput>
}

export type QueryStrapiComponentSeoDescriptionArgs = {
  children?: InputMaybe<NodeFilterListInput>
  htmlDescription?: InputMaybe<StringQueryOperatorInput>
  htmlTitle?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
  strapi_id?: InputMaybe<IntQueryOperatorInput>
}

export type QueryStrapiMediaArgs = {
  children?: InputMaybe<NodeFilterListInput>
  createdAt?: InputMaybe<DateQueryOperatorInput>
  ext?: InputMaybe<StringQueryOperatorInput>
  formats?: InputMaybe<Strapi__MediaFormatsFilterInput>
  hash?: InputMaybe<StringQueryOperatorInput>
  height?: InputMaybe<IntQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  localFile?: InputMaybe<FileFilterInput>
  mime?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  size?: InputMaybe<FloatQueryOperatorInput>
  strapi_id?: InputMaybe<IntQueryOperatorInput>
  updatedAt?: InputMaybe<DateQueryOperatorInput>
  url?: InputMaybe<StringQueryOperatorInput>
  width?: InputMaybe<IntQueryOperatorInput>
}

export type QueryStrapiRecipeArgs = {
  category?: InputMaybe<Strapi_CategoryFilterInput>
  childStrapiRecipeDirectionsTextnode?: InputMaybe<Strapi_Recipe_Directions_TextnodeFilterInput>
  childStrapiRecipeIngredientsTextnode?: InputMaybe<Strapi_Recipe_Ingredients_TextnodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  childrenStrapiRecipeDirectionsTextnode?: InputMaybe<Strapi_Recipe_Directions_TextnodeFilterListInput>
  childrenStrapiRecipeIngredientsTextnode?: InputMaybe<Strapi_Recipe_Ingredients_TextnodeFilterListInput>
  cover?: InputMaybe<Strapi__MediaFilterInput>
  createdAt?: InputMaybe<DateQueryOperatorInput>
  directions?: InputMaybe<Strapi_RecipeDirectionsFilterInput>
  gallery?: InputMaybe<Strapi__MediaFilterListInput>
  headline?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  ingredients?: InputMaybe<Strapi_RecipeIngredientsFilterInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
  preparationTime?: InputMaybe<IntQueryOperatorInput>
  publishedAt?: InputMaybe<DateQueryOperatorInput>
  seo?: InputMaybe<Strapi__Component_Seo_DescriptionFilterInput>
  slug?: InputMaybe<StringQueryOperatorInput>
  strapi_id?: InputMaybe<IntQueryOperatorInput>
  tags?: InputMaybe<Strapi_TagFilterListInput>
  title?: InputMaybe<StringQueryOperatorInput>
  updatedAt?: InputMaybe<DateQueryOperatorInput>
}

export type QueryStrapiRecipeDirectionsTextnodeArgs = {
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>
  directions?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
}

export type QueryStrapiRecipeIngredientsTextnodeArgs = {
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>
  id?: InputMaybe<StringQueryOperatorInput>
  ingredients?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
}

export type QueryStrapiTagArgs = {
  children?: InputMaybe<NodeFilterListInput>
  createdAt?: InputMaybe<DateQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  name?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  recipes?: InputMaybe<Strapi_RecipeFilterListInput>
  slug?: InputMaybe<StringQueryOperatorInput>
  strapi_id?: InputMaybe<IntQueryOperatorInput>
  updatedAt?: InputMaybe<DateQueryOperatorInput>
}

export type RecipeCategory = Node & {
  __typename?: 'RecipeCategory'
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  name?: Maybe<Scalars['String']>
  parent?: Maybe<Node>
  position?: Maybe<Scalars['Int']>
  slug?: Maybe<Scalars['String']>
}

export type RecipeCategoryConnection = {
  __typename?: 'RecipeCategoryConnection'
  distinct: Array<Scalars['String']>
  edges: Array<RecipeCategoryEdge>
  group: Array<RecipeCategoryGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<RecipeCategory>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type RecipeCategoryConnectionDistinctArgs = {
  field: RecipeCategoryFieldsEnum
}

export type RecipeCategoryConnectionGroupArgs = {
  field: RecipeCategoryFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type RecipeCategoryConnectionMaxArgs = {
  field: RecipeCategoryFieldsEnum
}

export type RecipeCategoryConnectionMinArgs = {
  field: RecipeCategoryFieldsEnum
}

export type RecipeCategoryConnectionSumArgs = {
  field: RecipeCategoryFieldsEnum
}

export type RecipeCategoryEdge = {
  __typename?: 'RecipeCategoryEdge'
  next?: Maybe<RecipeCategory>
  node: RecipeCategory
  previous?: Maybe<RecipeCategory>
}

export enum RecipeCategoryFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Position = 'position',
  Slug = 'slug',
}

export type RecipeCategoryFilterInput = {
  children?: InputMaybe<NodeFilterListInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  name?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  position?: InputMaybe<IntQueryOperatorInput>
  slug?: InputMaybe<StringQueryOperatorInput>
}

export type RecipeCategoryGroupConnection = {
  __typename?: 'RecipeCategoryGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<RecipeCategoryEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<RecipeCategoryGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<RecipeCategory>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type RecipeCategoryGroupConnectionDistinctArgs = {
  field: RecipeCategoryFieldsEnum
}

export type RecipeCategoryGroupConnectionGroupArgs = {
  field: RecipeCategoryFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type RecipeCategoryGroupConnectionMaxArgs = {
  field: RecipeCategoryFieldsEnum
}

export type RecipeCategoryGroupConnectionMinArgs = {
  field: RecipeCategoryFieldsEnum
}

export type RecipeCategoryGroupConnectionSumArgs = {
  field: RecipeCategoryFieldsEnum
}

export type RecipeCategorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<RecipeCategoryFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type RecipePart = Node & {
  __typename?: 'RecipePart'
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>
  children: Array<Node>
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
}

export type RecipePartConnection = {
  __typename?: 'RecipePartConnection'
  distinct: Array<Scalars['String']>
  edges: Array<RecipePartEdge>
  group: Array<RecipePartGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<RecipePart>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type RecipePartConnectionDistinctArgs = {
  field: RecipePartFieldsEnum
}

export type RecipePartConnectionGroupArgs = {
  field: RecipePartFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type RecipePartConnectionMaxArgs = {
  field: RecipePartFieldsEnum
}

export type RecipePartConnectionMinArgs = {
  field: RecipePartFieldsEnum
}

export type RecipePartConnectionSumArgs = {
  field: RecipePartFieldsEnum
}

export type RecipePartEdge = {
  __typename?: 'RecipePartEdge'
  next?: Maybe<RecipePart>
  node: RecipePart
  previous?: Maybe<RecipePart>
}

export enum RecipePartFieldsEnum {
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  Children = 'children',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
}

export type RecipePartFilterInput = {
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
}

export type RecipePartGroupConnection = {
  __typename?: 'RecipePartGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<RecipePartEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<RecipePartGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<RecipePart>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type RecipePartGroupConnectionDistinctArgs = {
  field: RecipePartFieldsEnum
}

export type RecipePartGroupConnectionGroupArgs = {
  field: RecipePartFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type RecipePartGroupConnectionMaxArgs = {
  field: RecipePartFieldsEnum
}

export type RecipePartGroupConnectionMinArgs = {
  field: RecipePartFieldsEnum
}

export type RecipePartGroupConnectionSumArgs = {
  field: RecipePartFieldsEnum
}

export type RecipePartSortInput = {
  fields?: InputMaybe<Array<InputMaybe<RecipePartFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type Strapi_Article = Node & {
  __typename?: 'STRAPI_ARTICLE'
  /** Returns the first child node of type STRAPI_ARTICLE_CONTENT_TEXTNODE or null if there are no children of given type on this node */
  childStrapiArticleContentTextnode?: Maybe<Strapi_Article_Content_Textnode>
  /** Returns the first child node of type STRAPI_ARTICLE_HEADLINE_TEXTNODE or null if there are no children of given type on this node */
  childStrapiArticleHeadlineTextnode?: Maybe<Strapi_Article_Headline_Textnode>
  children: Array<Node>
  /** Returns all children nodes filtered by type STRAPI_ARTICLE_CONTENT_TEXTNODE */
  childrenStrapiArticleContentTextnode?: Maybe<
    Array<Maybe<Strapi_Article_Content_Textnode>>
  >
  /** Returns all children nodes filtered by type STRAPI_ARTICLE_HEADLINE_TEXTNODE */
  childrenStrapiArticleHeadlineTextnode?: Maybe<
    Array<Maybe<Strapi_Article_Headline_Textnode>>
  >
  content?: Maybe<Strapi_ArticleContent>
  createdAt?: Maybe<Scalars['Date']>
  headline?: Maybe<Strapi_ArticleHeadline>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
  parsedContent?: Maybe<RecipePart>
  parsedHeadline?: Maybe<RecipePart>
  publishedAt?: Maybe<Scalars['Date']>
  slug?: Maybe<Scalars['String']>
  strapi_id?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Date']>
}

export type Strapi_ArticleCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type Strapi_ArticlePublishedAtArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type Strapi_ArticleUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type Strapi_ArticleConnection = {
  __typename?: 'STRAPI_ARTICLEConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi_ArticleEdge>
  group: Array<Strapi_ArticleGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi_Article>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi_ArticleConnectionDistinctArgs = {
  field: Strapi_ArticleFieldsEnum
}

export type Strapi_ArticleConnectionGroupArgs = {
  field: Strapi_ArticleFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi_ArticleConnectionMaxArgs = {
  field: Strapi_ArticleFieldsEnum
}

export type Strapi_ArticleConnectionMinArgs = {
  field: Strapi_ArticleFieldsEnum
}

export type Strapi_ArticleConnectionSumArgs = {
  field: Strapi_ArticleFieldsEnum
}

export type Strapi_ArticleContent = {
  __typename?: 'STRAPI_ARTICLEContent'
  data?: Maybe<Strapi_Article_Content_Textnode>
}

export type Strapi_ArticleContentFilterInput = {
  data?: InputMaybe<Strapi_Article_Content_TextnodeFilterInput>
}

export type Strapi_ArticleEdge = {
  __typename?: 'STRAPI_ARTICLEEdge'
  next?: Maybe<Strapi_Article>
  node: Strapi_Article
  previous?: Maybe<Strapi_Article>
}

export enum Strapi_ArticleFieldsEnum {
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkChildren = 'childStrapiArticleContentTextnode___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkChildrenChildren = 'childStrapiArticleContentTextnode___childMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkChildrenId = 'childStrapiArticleContentTextnode___childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkExcerpt = 'childStrapiArticleContentTextnode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkExcerptAst = 'childStrapiArticleContentTextnode___childMarkdownRemark___excerptAst',
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkFrontmatterTitle = 'childStrapiArticleContentTextnode___childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkHeadings = 'childStrapiArticleContentTextnode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkHeadingsDepth = 'childStrapiArticleContentTextnode___childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkHeadingsId = 'childStrapiArticleContentTextnode___childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkHeadingsValue = 'childStrapiArticleContentTextnode___childMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkHtml = 'childStrapiArticleContentTextnode___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkHtmlAst = 'childStrapiArticleContentTextnode___childMarkdownRemark___htmlAst',
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkId = 'childStrapiArticleContentTextnode___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkInternalContent = 'childStrapiArticleContentTextnode___childMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkInternalContentDigest = 'childStrapiArticleContentTextnode___childMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkInternalDescription = 'childStrapiArticleContentTextnode___childMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkInternalFieldOwners = 'childStrapiArticleContentTextnode___childMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkInternalIgnoreType = 'childStrapiArticleContentTextnode___childMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkInternalMediaType = 'childStrapiArticleContentTextnode___childMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkInternalOwner = 'childStrapiArticleContentTextnode___childMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkInternalType = 'childStrapiArticleContentTextnode___childMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkParentChildren = 'childStrapiArticleContentTextnode___childMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkParentId = 'childStrapiArticleContentTextnode___childMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkRawMarkdownBody = 'childStrapiArticleContentTextnode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkTableOfContents = 'childStrapiArticleContentTextnode___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkTimeToRead = 'childStrapiArticleContentTextnode___childMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkWordCountParagraphs = 'childStrapiArticleContentTextnode___childMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkWordCountSentences = 'childStrapiArticleContentTextnode___childMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildMarkdownRemarkWordCountWords = 'childStrapiArticleContentTextnode___childMarkdownRemark___wordCount___words',
  ChildStrapiArticleContentTextnodeChildren = 'childStrapiArticleContentTextnode___children',
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemark = 'childStrapiArticleContentTextnode___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkChildren = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkChildrenChildren = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkChildrenId = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkExcerpt = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkExcerptAst = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___excerptAst',
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkFrontmatterTitle = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkHeadings = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkHeadingsDepth = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkHeadingsId = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkHeadingsValue = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkHtml = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkHtmlAst = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___htmlAst',
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkId = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkInternalContent = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkInternalContentDigest = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkInternalDescription = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkInternalFieldOwners = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkInternalIgnoreType = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkInternalMediaType = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkInternalOwner = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkInternalType = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkParentChildren = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkParentId = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkRawMarkdownBody = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkTableOfContents = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkTimeToRead = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkWordCountParagraphs = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkWordCountSentences = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleContentTextnodeChildrenMarkdownRemarkWordCountWords = 'childStrapiArticleContentTextnode___childrenMarkdownRemark___wordCount___words',
  ChildStrapiArticleContentTextnodeChildrenChildren = 'childStrapiArticleContentTextnode___children___children',
  ChildStrapiArticleContentTextnodeChildrenChildrenChildren = 'childStrapiArticleContentTextnode___children___children___children',
  ChildStrapiArticleContentTextnodeChildrenChildrenId = 'childStrapiArticleContentTextnode___children___children___id',
  ChildStrapiArticleContentTextnodeChildrenId = 'childStrapiArticleContentTextnode___children___id',
  ChildStrapiArticleContentTextnodeChildrenInternalContent = 'childStrapiArticleContentTextnode___children___internal___content',
  ChildStrapiArticleContentTextnodeChildrenInternalContentDigest = 'childStrapiArticleContentTextnode___children___internal___contentDigest',
  ChildStrapiArticleContentTextnodeChildrenInternalDescription = 'childStrapiArticleContentTextnode___children___internal___description',
  ChildStrapiArticleContentTextnodeChildrenInternalFieldOwners = 'childStrapiArticleContentTextnode___children___internal___fieldOwners',
  ChildStrapiArticleContentTextnodeChildrenInternalIgnoreType = 'childStrapiArticleContentTextnode___children___internal___ignoreType',
  ChildStrapiArticleContentTextnodeChildrenInternalMediaType = 'childStrapiArticleContentTextnode___children___internal___mediaType',
  ChildStrapiArticleContentTextnodeChildrenInternalOwner = 'childStrapiArticleContentTextnode___children___internal___owner',
  ChildStrapiArticleContentTextnodeChildrenInternalType = 'childStrapiArticleContentTextnode___children___internal___type',
  ChildStrapiArticleContentTextnodeChildrenParentChildren = 'childStrapiArticleContentTextnode___children___parent___children',
  ChildStrapiArticleContentTextnodeChildrenParentId = 'childStrapiArticleContentTextnode___children___parent___id',
  ChildStrapiArticleContentTextnodeContent = 'childStrapiArticleContentTextnode___content',
  ChildStrapiArticleContentTextnodeId = 'childStrapiArticleContentTextnode___id',
  ChildStrapiArticleContentTextnodeInternalContent = 'childStrapiArticleContentTextnode___internal___content',
  ChildStrapiArticleContentTextnodeInternalContentDigest = 'childStrapiArticleContentTextnode___internal___contentDigest',
  ChildStrapiArticleContentTextnodeInternalDescription = 'childStrapiArticleContentTextnode___internal___description',
  ChildStrapiArticleContentTextnodeInternalFieldOwners = 'childStrapiArticleContentTextnode___internal___fieldOwners',
  ChildStrapiArticleContentTextnodeInternalIgnoreType = 'childStrapiArticleContentTextnode___internal___ignoreType',
  ChildStrapiArticleContentTextnodeInternalMediaType = 'childStrapiArticleContentTextnode___internal___mediaType',
  ChildStrapiArticleContentTextnodeInternalOwner = 'childStrapiArticleContentTextnode___internal___owner',
  ChildStrapiArticleContentTextnodeInternalType = 'childStrapiArticleContentTextnode___internal___type',
  ChildStrapiArticleContentTextnodeParentChildren = 'childStrapiArticleContentTextnode___parent___children',
  ChildStrapiArticleContentTextnodeParentChildrenChildren = 'childStrapiArticleContentTextnode___parent___children___children',
  ChildStrapiArticleContentTextnodeParentChildrenId = 'childStrapiArticleContentTextnode___parent___children___id',
  ChildStrapiArticleContentTextnodeParentId = 'childStrapiArticleContentTextnode___parent___id',
  ChildStrapiArticleContentTextnodeParentInternalContent = 'childStrapiArticleContentTextnode___parent___internal___content',
  ChildStrapiArticleContentTextnodeParentInternalContentDigest = 'childStrapiArticleContentTextnode___parent___internal___contentDigest',
  ChildStrapiArticleContentTextnodeParentInternalDescription = 'childStrapiArticleContentTextnode___parent___internal___description',
  ChildStrapiArticleContentTextnodeParentInternalFieldOwners = 'childStrapiArticleContentTextnode___parent___internal___fieldOwners',
  ChildStrapiArticleContentTextnodeParentInternalIgnoreType = 'childStrapiArticleContentTextnode___parent___internal___ignoreType',
  ChildStrapiArticleContentTextnodeParentInternalMediaType = 'childStrapiArticleContentTextnode___parent___internal___mediaType',
  ChildStrapiArticleContentTextnodeParentInternalOwner = 'childStrapiArticleContentTextnode___parent___internal___owner',
  ChildStrapiArticleContentTextnodeParentInternalType = 'childStrapiArticleContentTextnode___parent___internal___type',
  ChildStrapiArticleContentTextnodeParentParentChildren = 'childStrapiArticleContentTextnode___parent___parent___children',
  ChildStrapiArticleContentTextnodeParentParentId = 'childStrapiArticleContentTextnode___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkChildren = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkChildrenChildren = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkChildrenId = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkExcerpt = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkExcerptAst = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___excerptAst',
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkFrontmatterTitle = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkHeadings = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkHeadingsDepth = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkHeadingsId = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkHeadingsValue = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkHtml = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkHtmlAst = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___htmlAst',
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkId = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkInternalContent = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkInternalContentDigest = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkInternalDescription = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkInternalFieldOwners = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkInternalIgnoreType = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkInternalMediaType = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkInternalOwner = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkInternalType = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkParentChildren = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkParentId = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkRawMarkdownBody = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkTableOfContents = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkTimeToRead = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkWordCountParagraphs = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkWordCountSentences = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildMarkdownRemarkWordCountWords = 'childStrapiArticleHeadlineTextnode___childMarkdownRemark___wordCount___words',
  ChildStrapiArticleHeadlineTextnodeChildren = 'childStrapiArticleHeadlineTextnode___children',
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemark = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkChildren = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkChildrenChildren = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkChildrenId = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkExcerpt = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkExcerptAst = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___excerptAst',
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkFrontmatterTitle = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkHeadings = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkHeadingsDepth = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkHeadingsId = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkHeadingsValue = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkHtml = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkHtmlAst = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___htmlAst',
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkId = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkInternalContent = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkInternalContentDigest = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkInternalDescription = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkInternalFieldOwners = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkInternalIgnoreType = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkInternalMediaType = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkInternalOwner = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkInternalType = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkParentChildren = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkParentId = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkRawMarkdownBody = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkTableOfContents = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkTimeToRead = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkWordCountParagraphs = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkWordCountSentences = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkWordCountWords = 'childStrapiArticleHeadlineTextnode___childrenMarkdownRemark___wordCount___words',
  ChildStrapiArticleHeadlineTextnodeChildrenChildren = 'childStrapiArticleHeadlineTextnode___children___children',
  ChildStrapiArticleHeadlineTextnodeChildrenChildrenChildren = 'childStrapiArticleHeadlineTextnode___children___children___children',
  ChildStrapiArticleHeadlineTextnodeChildrenChildrenId = 'childStrapiArticleHeadlineTextnode___children___children___id',
  ChildStrapiArticleHeadlineTextnodeChildrenId = 'childStrapiArticleHeadlineTextnode___children___id',
  ChildStrapiArticleHeadlineTextnodeChildrenInternalContent = 'childStrapiArticleHeadlineTextnode___children___internal___content',
  ChildStrapiArticleHeadlineTextnodeChildrenInternalContentDigest = 'childStrapiArticleHeadlineTextnode___children___internal___contentDigest',
  ChildStrapiArticleHeadlineTextnodeChildrenInternalDescription = 'childStrapiArticleHeadlineTextnode___children___internal___description',
  ChildStrapiArticleHeadlineTextnodeChildrenInternalFieldOwners = 'childStrapiArticleHeadlineTextnode___children___internal___fieldOwners',
  ChildStrapiArticleHeadlineTextnodeChildrenInternalIgnoreType = 'childStrapiArticleHeadlineTextnode___children___internal___ignoreType',
  ChildStrapiArticleHeadlineTextnodeChildrenInternalMediaType = 'childStrapiArticleHeadlineTextnode___children___internal___mediaType',
  ChildStrapiArticleHeadlineTextnodeChildrenInternalOwner = 'childStrapiArticleHeadlineTextnode___children___internal___owner',
  ChildStrapiArticleHeadlineTextnodeChildrenInternalType = 'childStrapiArticleHeadlineTextnode___children___internal___type',
  ChildStrapiArticleHeadlineTextnodeChildrenParentChildren = 'childStrapiArticleHeadlineTextnode___children___parent___children',
  ChildStrapiArticleHeadlineTextnodeChildrenParentId = 'childStrapiArticleHeadlineTextnode___children___parent___id',
  ChildStrapiArticleHeadlineTextnodeHeadline = 'childStrapiArticleHeadlineTextnode___headline',
  ChildStrapiArticleHeadlineTextnodeId = 'childStrapiArticleHeadlineTextnode___id',
  ChildStrapiArticleHeadlineTextnodeInternalContent = 'childStrapiArticleHeadlineTextnode___internal___content',
  ChildStrapiArticleHeadlineTextnodeInternalContentDigest = 'childStrapiArticleHeadlineTextnode___internal___contentDigest',
  ChildStrapiArticleHeadlineTextnodeInternalDescription = 'childStrapiArticleHeadlineTextnode___internal___description',
  ChildStrapiArticleHeadlineTextnodeInternalFieldOwners = 'childStrapiArticleHeadlineTextnode___internal___fieldOwners',
  ChildStrapiArticleHeadlineTextnodeInternalIgnoreType = 'childStrapiArticleHeadlineTextnode___internal___ignoreType',
  ChildStrapiArticleHeadlineTextnodeInternalMediaType = 'childStrapiArticleHeadlineTextnode___internal___mediaType',
  ChildStrapiArticleHeadlineTextnodeInternalOwner = 'childStrapiArticleHeadlineTextnode___internal___owner',
  ChildStrapiArticleHeadlineTextnodeInternalType = 'childStrapiArticleHeadlineTextnode___internal___type',
  ChildStrapiArticleHeadlineTextnodeParentChildren = 'childStrapiArticleHeadlineTextnode___parent___children',
  ChildStrapiArticleHeadlineTextnodeParentChildrenChildren = 'childStrapiArticleHeadlineTextnode___parent___children___children',
  ChildStrapiArticleHeadlineTextnodeParentChildrenId = 'childStrapiArticleHeadlineTextnode___parent___children___id',
  ChildStrapiArticleHeadlineTextnodeParentId = 'childStrapiArticleHeadlineTextnode___parent___id',
  ChildStrapiArticleHeadlineTextnodeParentInternalContent = 'childStrapiArticleHeadlineTextnode___parent___internal___content',
  ChildStrapiArticleHeadlineTextnodeParentInternalContentDigest = 'childStrapiArticleHeadlineTextnode___parent___internal___contentDigest',
  ChildStrapiArticleHeadlineTextnodeParentInternalDescription = 'childStrapiArticleHeadlineTextnode___parent___internal___description',
  ChildStrapiArticleHeadlineTextnodeParentInternalFieldOwners = 'childStrapiArticleHeadlineTextnode___parent___internal___fieldOwners',
  ChildStrapiArticleHeadlineTextnodeParentInternalIgnoreType = 'childStrapiArticleHeadlineTextnode___parent___internal___ignoreType',
  ChildStrapiArticleHeadlineTextnodeParentInternalMediaType = 'childStrapiArticleHeadlineTextnode___parent___internal___mediaType',
  ChildStrapiArticleHeadlineTextnodeParentInternalOwner = 'childStrapiArticleHeadlineTextnode___parent___internal___owner',
  ChildStrapiArticleHeadlineTextnodeParentInternalType = 'childStrapiArticleHeadlineTextnode___parent___internal___type',
  ChildStrapiArticleHeadlineTextnodeParentParentChildren = 'childStrapiArticleHeadlineTextnode___parent___parent___children',
  ChildStrapiArticleHeadlineTextnodeParentParentId = 'childStrapiArticleHeadlineTextnode___parent___parent___id',
  Children = 'children',
  ChildrenStrapiArticleContentTextnode = 'childrenStrapiArticleContentTextnode',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkChildren = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkChildrenChildren = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkChildrenId = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkExcerpt = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkExcerptAst = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___excerptAst',
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkFrontmatterTitle = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkHeadings = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkHeadingsDepth = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkHeadingsId = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkHeadingsValue = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkHtml = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkHtmlAst = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___htmlAst',
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkId = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkInternalContent = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkInternalContentDigest = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkInternalDescription = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkInternalFieldOwners = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkInternalIgnoreType = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkInternalMediaType = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkInternalOwner = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkInternalType = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkParentChildren = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkParentId = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkRawMarkdownBody = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkTableOfContents = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkTimeToRead = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkWordCountParagraphs = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkWordCountSentences = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildMarkdownRemarkWordCountWords = 'childrenStrapiArticleContentTextnode___childMarkdownRemark___wordCount___words',
  ChildrenStrapiArticleContentTextnodeChildren = 'childrenStrapiArticleContentTextnode___children',
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemark = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkChildren = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkChildrenChildren = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkChildrenId = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkExcerpt = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkExcerptAst = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___excerptAst',
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkFrontmatterTitle = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkHeadings = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkHeadingsDepth = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkHeadingsId = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkHeadingsValue = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkHtml = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkHtmlAst = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___htmlAst',
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkId = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkInternalContent = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkInternalContentDigest = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkInternalDescription = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkInternalFieldOwners = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkInternalIgnoreType = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkInternalMediaType = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkInternalOwner = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkInternalType = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkParentChildren = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkParentId = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkRawMarkdownBody = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkTableOfContents = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkTimeToRead = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkWordCountParagraphs = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkWordCountSentences = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleContentTextnodeChildrenMarkdownRemarkWordCountWords = 'childrenStrapiArticleContentTextnode___childrenMarkdownRemark___wordCount___words',
  ChildrenStrapiArticleContentTextnodeChildrenChildren = 'childrenStrapiArticleContentTextnode___children___children',
  ChildrenStrapiArticleContentTextnodeChildrenChildrenChildren = 'childrenStrapiArticleContentTextnode___children___children___children',
  ChildrenStrapiArticleContentTextnodeChildrenChildrenId = 'childrenStrapiArticleContentTextnode___children___children___id',
  ChildrenStrapiArticleContentTextnodeChildrenId = 'childrenStrapiArticleContentTextnode___children___id',
  ChildrenStrapiArticleContentTextnodeChildrenInternalContent = 'childrenStrapiArticleContentTextnode___children___internal___content',
  ChildrenStrapiArticleContentTextnodeChildrenInternalContentDigest = 'childrenStrapiArticleContentTextnode___children___internal___contentDigest',
  ChildrenStrapiArticleContentTextnodeChildrenInternalDescription = 'childrenStrapiArticleContentTextnode___children___internal___description',
  ChildrenStrapiArticleContentTextnodeChildrenInternalFieldOwners = 'childrenStrapiArticleContentTextnode___children___internal___fieldOwners',
  ChildrenStrapiArticleContentTextnodeChildrenInternalIgnoreType = 'childrenStrapiArticleContentTextnode___children___internal___ignoreType',
  ChildrenStrapiArticleContentTextnodeChildrenInternalMediaType = 'childrenStrapiArticleContentTextnode___children___internal___mediaType',
  ChildrenStrapiArticleContentTextnodeChildrenInternalOwner = 'childrenStrapiArticleContentTextnode___children___internal___owner',
  ChildrenStrapiArticleContentTextnodeChildrenInternalType = 'childrenStrapiArticleContentTextnode___children___internal___type',
  ChildrenStrapiArticleContentTextnodeChildrenParentChildren = 'childrenStrapiArticleContentTextnode___children___parent___children',
  ChildrenStrapiArticleContentTextnodeChildrenParentId = 'childrenStrapiArticleContentTextnode___children___parent___id',
  ChildrenStrapiArticleContentTextnodeContent = 'childrenStrapiArticleContentTextnode___content',
  ChildrenStrapiArticleContentTextnodeId = 'childrenStrapiArticleContentTextnode___id',
  ChildrenStrapiArticleContentTextnodeInternalContent = 'childrenStrapiArticleContentTextnode___internal___content',
  ChildrenStrapiArticleContentTextnodeInternalContentDigest = 'childrenStrapiArticleContentTextnode___internal___contentDigest',
  ChildrenStrapiArticleContentTextnodeInternalDescription = 'childrenStrapiArticleContentTextnode___internal___description',
  ChildrenStrapiArticleContentTextnodeInternalFieldOwners = 'childrenStrapiArticleContentTextnode___internal___fieldOwners',
  ChildrenStrapiArticleContentTextnodeInternalIgnoreType = 'childrenStrapiArticleContentTextnode___internal___ignoreType',
  ChildrenStrapiArticleContentTextnodeInternalMediaType = 'childrenStrapiArticleContentTextnode___internal___mediaType',
  ChildrenStrapiArticleContentTextnodeInternalOwner = 'childrenStrapiArticleContentTextnode___internal___owner',
  ChildrenStrapiArticleContentTextnodeInternalType = 'childrenStrapiArticleContentTextnode___internal___type',
  ChildrenStrapiArticleContentTextnodeParentChildren = 'childrenStrapiArticleContentTextnode___parent___children',
  ChildrenStrapiArticleContentTextnodeParentChildrenChildren = 'childrenStrapiArticleContentTextnode___parent___children___children',
  ChildrenStrapiArticleContentTextnodeParentChildrenId = 'childrenStrapiArticleContentTextnode___parent___children___id',
  ChildrenStrapiArticleContentTextnodeParentId = 'childrenStrapiArticleContentTextnode___parent___id',
  ChildrenStrapiArticleContentTextnodeParentInternalContent = 'childrenStrapiArticleContentTextnode___parent___internal___content',
  ChildrenStrapiArticleContentTextnodeParentInternalContentDigest = 'childrenStrapiArticleContentTextnode___parent___internal___contentDigest',
  ChildrenStrapiArticleContentTextnodeParentInternalDescription = 'childrenStrapiArticleContentTextnode___parent___internal___description',
  ChildrenStrapiArticleContentTextnodeParentInternalFieldOwners = 'childrenStrapiArticleContentTextnode___parent___internal___fieldOwners',
  ChildrenStrapiArticleContentTextnodeParentInternalIgnoreType = 'childrenStrapiArticleContentTextnode___parent___internal___ignoreType',
  ChildrenStrapiArticleContentTextnodeParentInternalMediaType = 'childrenStrapiArticleContentTextnode___parent___internal___mediaType',
  ChildrenStrapiArticleContentTextnodeParentInternalOwner = 'childrenStrapiArticleContentTextnode___parent___internal___owner',
  ChildrenStrapiArticleContentTextnodeParentInternalType = 'childrenStrapiArticleContentTextnode___parent___internal___type',
  ChildrenStrapiArticleContentTextnodeParentParentChildren = 'childrenStrapiArticleContentTextnode___parent___parent___children',
  ChildrenStrapiArticleContentTextnodeParentParentId = 'childrenStrapiArticleContentTextnode___parent___parent___id',
  ChildrenStrapiArticleHeadlineTextnode = 'childrenStrapiArticleHeadlineTextnode',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkChildren = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkChildrenChildren = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkChildrenId = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkExcerpt = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkExcerptAst = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___excerptAst',
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkFrontmatterTitle = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkHeadings = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkHeadingsDepth = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkHeadingsId = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkHeadingsValue = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkHtml = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkHtmlAst = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___htmlAst',
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkId = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkInternalContent = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkInternalContentDigest = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkInternalDescription = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkInternalFieldOwners = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkInternalIgnoreType = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkInternalMediaType = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkInternalOwner = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkInternalType = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkParentChildren = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkParentId = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkRawMarkdownBody = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkTableOfContents = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkTimeToRead = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkWordCountParagraphs = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkWordCountSentences = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildMarkdownRemarkWordCountWords = 'childrenStrapiArticleHeadlineTextnode___childMarkdownRemark___wordCount___words',
  ChildrenStrapiArticleHeadlineTextnodeChildren = 'childrenStrapiArticleHeadlineTextnode___children',
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemark = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkChildren = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkChildrenChildren = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkChildrenId = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkExcerpt = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkExcerptAst = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___excerptAst',
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkFrontmatterTitle = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkHeadings = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkHeadingsDepth = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkHeadingsId = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkHeadingsValue = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkHtml = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkHtmlAst = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___htmlAst',
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkId = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkInternalContent = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkInternalContentDigest = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkInternalDescription = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkInternalFieldOwners = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkInternalIgnoreType = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkInternalMediaType = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkInternalOwner = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkInternalType = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkParentChildren = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkParentId = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkRawMarkdownBody = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkTableOfContents = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkTimeToRead = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkWordCountParagraphs = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkWordCountSentences = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiArticleHeadlineTextnodeChildrenMarkdownRemarkWordCountWords = 'childrenStrapiArticleHeadlineTextnode___childrenMarkdownRemark___wordCount___words',
  ChildrenStrapiArticleHeadlineTextnodeChildrenChildren = 'childrenStrapiArticleHeadlineTextnode___children___children',
  ChildrenStrapiArticleHeadlineTextnodeChildrenChildrenChildren = 'childrenStrapiArticleHeadlineTextnode___children___children___children',
  ChildrenStrapiArticleHeadlineTextnodeChildrenChildrenId = 'childrenStrapiArticleHeadlineTextnode___children___children___id',
  ChildrenStrapiArticleHeadlineTextnodeChildrenId = 'childrenStrapiArticleHeadlineTextnode___children___id',
  ChildrenStrapiArticleHeadlineTextnodeChildrenInternalContent = 'childrenStrapiArticleHeadlineTextnode___children___internal___content',
  ChildrenStrapiArticleHeadlineTextnodeChildrenInternalContentDigest = 'childrenStrapiArticleHeadlineTextnode___children___internal___contentDigest',
  ChildrenStrapiArticleHeadlineTextnodeChildrenInternalDescription = 'childrenStrapiArticleHeadlineTextnode___children___internal___description',
  ChildrenStrapiArticleHeadlineTextnodeChildrenInternalFieldOwners = 'childrenStrapiArticleHeadlineTextnode___children___internal___fieldOwners',
  ChildrenStrapiArticleHeadlineTextnodeChildrenInternalIgnoreType = 'childrenStrapiArticleHeadlineTextnode___children___internal___ignoreType',
  ChildrenStrapiArticleHeadlineTextnodeChildrenInternalMediaType = 'childrenStrapiArticleHeadlineTextnode___children___internal___mediaType',
  ChildrenStrapiArticleHeadlineTextnodeChildrenInternalOwner = 'childrenStrapiArticleHeadlineTextnode___children___internal___owner',
  ChildrenStrapiArticleHeadlineTextnodeChildrenInternalType = 'childrenStrapiArticleHeadlineTextnode___children___internal___type',
  ChildrenStrapiArticleHeadlineTextnodeChildrenParentChildren = 'childrenStrapiArticleHeadlineTextnode___children___parent___children',
  ChildrenStrapiArticleHeadlineTextnodeChildrenParentId = 'childrenStrapiArticleHeadlineTextnode___children___parent___id',
  ChildrenStrapiArticleHeadlineTextnodeHeadline = 'childrenStrapiArticleHeadlineTextnode___headline',
  ChildrenStrapiArticleHeadlineTextnodeId = 'childrenStrapiArticleHeadlineTextnode___id',
  ChildrenStrapiArticleHeadlineTextnodeInternalContent = 'childrenStrapiArticleHeadlineTextnode___internal___content',
  ChildrenStrapiArticleHeadlineTextnodeInternalContentDigest = 'childrenStrapiArticleHeadlineTextnode___internal___contentDigest',
  ChildrenStrapiArticleHeadlineTextnodeInternalDescription = 'childrenStrapiArticleHeadlineTextnode___internal___description',
  ChildrenStrapiArticleHeadlineTextnodeInternalFieldOwners = 'childrenStrapiArticleHeadlineTextnode___internal___fieldOwners',
  ChildrenStrapiArticleHeadlineTextnodeInternalIgnoreType = 'childrenStrapiArticleHeadlineTextnode___internal___ignoreType',
  ChildrenStrapiArticleHeadlineTextnodeInternalMediaType = 'childrenStrapiArticleHeadlineTextnode___internal___mediaType',
  ChildrenStrapiArticleHeadlineTextnodeInternalOwner = 'childrenStrapiArticleHeadlineTextnode___internal___owner',
  ChildrenStrapiArticleHeadlineTextnodeInternalType = 'childrenStrapiArticleHeadlineTextnode___internal___type',
  ChildrenStrapiArticleHeadlineTextnodeParentChildren = 'childrenStrapiArticleHeadlineTextnode___parent___children',
  ChildrenStrapiArticleHeadlineTextnodeParentChildrenChildren = 'childrenStrapiArticleHeadlineTextnode___parent___children___children',
  ChildrenStrapiArticleHeadlineTextnodeParentChildrenId = 'childrenStrapiArticleHeadlineTextnode___parent___children___id',
  ChildrenStrapiArticleHeadlineTextnodeParentId = 'childrenStrapiArticleHeadlineTextnode___parent___id',
  ChildrenStrapiArticleHeadlineTextnodeParentInternalContent = 'childrenStrapiArticleHeadlineTextnode___parent___internal___content',
  ChildrenStrapiArticleHeadlineTextnodeParentInternalContentDigest = 'childrenStrapiArticleHeadlineTextnode___parent___internal___contentDigest',
  ChildrenStrapiArticleHeadlineTextnodeParentInternalDescription = 'childrenStrapiArticleHeadlineTextnode___parent___internal___description',
  ChildrenStrapiArticleHeadlineTextnodeParentInternalFieldOwners = 'childrenStrapiArticleHeadlineTextnode___parent___internal___fieldOwners',
  ChildrenStrapiArticleHeadlineTextnodeParentInternalIgnoreType = 'childrenStrapiArticleHeadlineTextnode___parent___internal___ignoreType',
  ChildrenStrapiArticleHeadlineTextnodeParentInternalMediaType = 'childrenStrapiArticleHeadlineTextnode___parent___internal___mediaType',
  ChildrenStrapiArticleHeadlineTextnodeParentInternalOwner = 'childrenStrapiArticleHeadlineTextnode___parent___internal___owner',
  ChildrenStrapiArticleHeadlineTextnodeParentInternalType = 'childrenStrapiArticleHeadlineTextnode___parent___internal___type',
  ChildrenStrapiArticleHeadlineTextnodeParentParentChildren = 'childrenStrapiArticleHeadlineTextnode___parent___parent___children',
  ChildrenStrapiArticleHeadlineTextnodeParentParentId = 'childrenStrapiArticleHeadlineTextnode___parent___parent___id',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildMarkdownRemarkChildren = 'content___data___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildMarkdownRemarkExcerpt = 'content___data___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildMarkdownRemarkExcerptAst = 'content___data___childMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildMarkdownRemarkHeadings = 'content___data___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildMarkdownRemarkHtml = 'content___data___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildMarkdownRemarkHtmlAst = 'content___data___childMarkdownRemark___htmlAst',
  ContentDataChildMarkdownRemarkId = 'content___data___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildMarkdownRemarkRawMarkdownBody = 'content___data___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildMarkdownRemarkTableOfContents = 'content___data___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildMarkdownRemarkTimeToRead = 'content___data___childMarkdownRemark___timeToRead',
  ContentDataChildren = 'content___data___children',
  ContentDataChildrenMarkdownRemark = 'content___data___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildrenMarkdownRemarkChildren = 'content___data___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildrenMarkdownRemarkExcerpt = 'content___data___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildrenMarkdownRemarkExcerptAst = 'content___data___childrenMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildrenMarkdownRemarkHeadings = 'content___data___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildrenMarkdownRemarkHtml = 'content___data___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildrenMarkdownRemarkHtmlAst = 'content___data___childrenMarkdownRemark___htmlAst',
  ContentDataChildrenMarkdownRemarkId = 'content___data___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildrenMarkdownRemarkRawMarkdownBody = 'content___data___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildrenMarkdownRemarkTableOfContents = 'content___data___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ContentDataChildrenMarkdownRemarkTimeToRead = 'content___data___childrenMarkdownRemark___timeToRead',
  ContentDataChildrenChildren = 'content___data___children___children',
  ContentDataChildrenId = 'content___data___children___id',
  ContentDataContent = 'content___data___content',
  ContentDataId = 'content___data___id',
  ContentDataInternalContent = 'content___data___internal___content',
  ContentDataInternalContentDigest = 'content___data___internal___contentDigest',
  ContentDataInternalDescription = 'content___data___internal___description',
  ContentDataInternalFieldOwners = 'content___data___internal___fieldOwners',
  ContentDataInternalIgnoreType = 'content___data___internal___ignoreType',
  ContentDataInternalMediaType = 'content___data___internal___mediaType',
  ContentDataInternalOwner = 'content___data___internal___owner',
  ContentDataInternalType = 'content___data___internal___type',
  ContentDataParentChildren = 'content___data___parent___children',
  ContentDataParentId = 'content___data___parent___id',
  CreatedAt = 'createdAt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildMarkdownRemarkChildren = 'headline___data___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildMarkdownRemarkExcerpt = 'headline___data___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildMarkdownRemarkExcerptAst = 'headline___data___childMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildMarkdownRemarkHeadings = 'headline___data___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildMarkdownRemarkHtml = 'headline___data___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildMarkdownRemarkHtmlAst = 'headline___data___childMarkdownRemark___htmlAst',
  HeadlineDataChildMarkdownRemarkId = 'headline___data___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildMarkdownRemarkRawMarkdownBody = 'headline___data___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildMarkdownRemarkTableOfContents = 'headline___data___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildMarkdownRemarkTimeToRead = 'headline___data___childMarkdownRemark___timeToRead',
  HeadlineDataChildren = 'headline___data___children',
  HeadlineDataChildrenMarkdownRemark = 'headline___data___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildrenMarkdownRemarkChildren = 'headline___data___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildrenMarkdownRemarkExcerpt = 'headline___data___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildrenMarkdownRemarkExcerptAst = 'headline___data___childrenMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildrenMarkdownRemarkHeadings = 'headline___data___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildrenMarkdownRemarkHtml = 'headline___data___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildrenMarkdownRemarkHtmlAst = 'headline___data___childrenMarkdownRemark___htmlAst',
  HeadlineDataChildrenMarkdownRemarkId = 'headline___data___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildrenMarkdownRemarkRawMarkdownBody = 'headline___data___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildrenMarkdownRemarkTableOfContents = 'headline___data___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadlineDataChildrenMarkdownRemarkTimeToRead = 'headline___data___childrenMarkdownRemark___timeToRead',
  HeadlineDataChildrenChildren = 'headline___data___children___children',
  HeadlineDataChildrenId = 'headline___data___children___id',
  HeadlineDataHeadline = 'headline___data___headline',
  HeadlineDataId = 'headline___data___id',
  HeadlineDataInternalContent = 'headline___data___internal___content',
  HeadlineDataInternalContentDigest = 'headline___data___internal___contentDigest',
  HeadlineDataInternalDescription = 'headline___data___internal___description',
  HeadlineDataInternalFieldOwners = 'headline___data___internal___fieldOwners',
  HeadlineDataInternalIgnoreType = 'headline___data___internal___ignoreType',
  HeadlineDataInternalMediaType = 'headline___data___internal___mediaType',
  HeadlineDataInternalOwner = 'headline___data___internal___owner',
  HeadlineDataInternalType = 'headline___data___internal___type',
  HeadlineDataParentChildren = 'headline___data___parent___children',
  HeadlineDataParentId = 'headline___data___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PublishedAt = 'publishedAt',
  Slug = 'slug',
  StrapiId = 'strapi_id',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type Strapi_ArticleFilterInput = {
  childStrapiArticleContentTextnode?: InputMaybe<Strapi_Article_Content_TextnodeFilterInput>
  childStrapiArticleHeadlineTextnode?: InputMaybe<Strapi_Article_Headline_TextnodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  childrenStrapiArticleContentTextnode?: InputMaybe<Strapi_Article_Content_TextnodeFilterListInput>
  childrenStrapiArticleHeadlineTextnode?: InputMaybe<Strapi_Article_Headline_TextnodeFilterListInput>
  content?: InputMaybe<Strapi_ArticleContentFilterInput>
  createdAt?: InputMaybe<DateQueryOperatorInput>
  headline?: InputMaybe<Strapi_ArticleHeadlineFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
  publishedAt?: InputMaybe<DateQueryOperatorInput>
  slug?: InputMaybe<StringQueryOperatorInput>
  strapi_id?: InputMaybe<IntQueryOperatorInput>
  title?: InputMaybe<StringQueryOperatorInput>
  updatedAt?: InputMaybe<DateQueryOperatorInput>
}

export type Strapi_ArticleGroupConnection = {
  __typename?: 'STRAPI_ARTICLEGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi_ArticleEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<Strapi_ArticleGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi_Article>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi_ArticleGroupConnectionDistinctArgs = {
  field: Strapi_ArticleFieldsEnum
}

export type Strapi_ArticleGroupConnectionGroupArgs = {
  field: Strapi_ArticleFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi_ArticleGroupConnectionMaxArgs = {
  field: Strapi_ArticleFieldsEnum
}

export type Strapi_ArticleGroupConnectionMinArgs = {
  field: Strapi_ArticleFieldsEnum
}

export type Strapi_ArticleGroupConnectionSumArgs = {
  field: Strapi_ArticleFieldsEnum
}

export type Strapi_ArticleHeadline = {
  __typename?: 'STRAPI_ARTICLEHeadline'
  data?: Maybe<Strapi_Article_Headline_Textnode>
}

export type Strapi_ArticleHeadlineFilterInput = {
  data?: InputMaybe<Strapi_Article_Headline_TextnodeFilterInput>
}

export type Strapi_ArticleSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi_ArticleFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type Strapi_Article_Content_Textnode = Node & {
  __typename?: 'STRAPI_ARTICLE_CONTENT_TEXTNODE'
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>
  children: Array<Node>
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>
  content?: Maybe<Scalars['String']>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
}

export type Strapi_Article_Content_TextnodeConnection = {
  __typename?: 'STRAPI_ARTICLE_CONTENT_TEXTNODEConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi_Article_Content_TextnodeEdge>
  group: Array<Strapi_Article_Content_TextnodeGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi_Article_Content_Textnode>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi_Article_Content_TextnodeConnectionDistinctArgs = {
  field: Strapi_Article_Content_TextnodeFieldsEnum
}

export type Strapi_Article_Content_TextnodeConnectionGroupArgs = {
  field: Strapi_Article_Content_TextnodeFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi_Article_Content_TextnodeConnectionMaxArgs = {
  field: Strapi_Article_Content_TextnodeFieldsEnum
}

export type Strapi_Article_Content_TextnodeConnectionMinArgs = {
  field: Strapi_Article_Content_TextnodeFieldsEnum
}

export type Strapi_Article_Content_TextnodeConnectionSumArgs = {
  field: Strapi_Article_Content_TextnodeFieldsEnum
}

export type Strapi_Article_Content_TextnodeEdge = {
  __typename?: 'STRAPI_ARTICLE_CONTENT_TEXTNODEEdge'
  next?: Maybe<Strapi_Article_Content_Textnode>
  node: Strapi_Article_Content_Textnode
  previous?: Maybe<Strapi_Article_Content_Textnode>
}

export enum Strapi_Article_Content_TextnodeFieldsEnum {
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  Children = 'children',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Content = 'content',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
}

export type Strapi_Article_Content_TextnodeFilterInput = {
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>
  content?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
}

export type Strapi_Article_Content_TextnodeFilterListInput = {
  elemMatch?: InputMaybe<Strapi_Article_Content_TextnodeFilterInput>
}

export type Strapi_Article_Content_TextnodeGroupConnection = {
  __typename?: 'STRAPI_ARTICLE_CONTENT_TEXTNODEGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi_Article_Content_TextnodeEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<Strapi_Article_Content_TextnodeGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi_Article_Content_Textnode>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi_Article_Content_TextnodeGroupConnectionDistinctArgs = {
  field: Strapi_Article_Content_TextnodeFieldsEnum
}

export type Strapi_Article_Content_TextnodeGroupConnectionGroupArgs = {
  field: Strapi_Article_Content_TextnodeFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi_Article_Content_TextnodeGroupConnectionMaxArgs = {
  field: Strapi_Article_Content_TextnodeFieldsEnum
}

export type Strapi_Article_Content_TextnodeGroupConnectionMinArgs = {
  field: Strapi_Article_Content_TextnodeFieldsEnum
}

export type Strapi_Article_Content_TextnodeGroupConnectionSumArgs = {
  field: Strapi_Article_Content_TextnodeFieldsEnum
}

export type Strapi_Article_Content_TextnodeSortInput = {
  fields?: InputMaybe<
    Array<InputMaybe<Strapi_Article_Content_TextnodeFieldsEnum>>
  >
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type Strapi_Article_Headline_Textnode = Node & {
  __typename?: 'STRAPI_ARTICLE_HEADLINE_TEXTNODE'
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>
  children: Array<Node>
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>
  headline?: Maybe<Scalars['String']>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
}

export type Strapi_Article_Headline_TextnodeConnection = {
  __typename?: 'STRAPI_ARTICLE_HEADLINE_TEXTNODEConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi_Article_Headline_TextnodeEdge>
  group: Array<Strapi_Article_Headline_TextnodeGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi_Article_Headline_Textnode>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi_Article_Headline_TextnodeConnectionDistinctArgs = {
  field: Strapi_Article_Headline_TextnodeFieldsEnum
}

export type Strapi_Article_Headline_TextnodeConnectionGroupArgs = {
  field: Strapi_Article_Headline_TextnodeFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi_Article_Headline_TextnodeConnectionMaxArgs = {
  field: Strapi_Article_Headline_TextnodeFieldsEnum
}

export type Strapi_Article_Headline_TextnodeConnectionMinArgs = {
  field: Strapi_Article_Headline_TextnodeFieldsEnum
}

export type Strapi_Article_Headline_TextnodeConnectionSumArgs = {
  field: Strapi_Article_Headline_TextnodeFieldsEnum
}

export type Strapi_Article_Headline_TextnodeEdge = {
  __typename?: 'STRAPI_ARTICLE_HEADLINE_TEXTNODEEdge'
  next?: Maybe<Strapi_Article_Headline_Textnode>
  node: Strapi_Article_Headline_Textnode
  previous?: Maybe<Strapi_Article_Headline_Textnode>
}

export enum Strapi_Article_Headline_TextnodeFieldsEnum {
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  Children = 'children',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Headline = 'headline',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
}

export type Strapi_Article_Headline_TextnodeFilterInput = {
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>
  headline?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
}

export type Strapi_Article_Headline_TextnodeFilterListInput = {
  elemMatch?: InputMaybe<Strapi_Article_Headline_TextnodeFilterInput>
}

export type Strapi_Article_Headline_TextnodeGroupConnection = {
  __typename?: 'STRAPI_ARTICLE_HEADLINE_TEXTNODEGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi_Article_Headline_TextnodeEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<Strapi_Article_Headline_TextnodeGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi_Article_Headline_Textnode>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi_Article_Headline_TextnodeGroupConnectionDistinctArgs = {
  field: Strapi_Article_Headline_TextnodeFieldsEnum
}

export type Strapi_Article_Headline_TextnodeGroupConnectionGroupArgs = {
  field: Strapi_Article_Headline_TextnodeFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi_Article_Headline_TextnodeGroupConnectionMaxArgs = {
  field: Strapi_Article_Headline_TextnodeFieldsEnum
}

export type Strapi_Article_Headline_TextnodeGroupConnectionMinArgs = {
  field: Strapi_Article_Headline_TextnodeFieldsEnum
}

export type Strapi_Article_Headline_TextnodeGroupConnectionSumArgs = {
  field: Strapi_Article_Headline_TextnodeFieldsEnum
}

export type Strapi_Article_Headline_TextnodeSortInput = {
  fields?: InputMaybe<
    Array<InputMaybe<Strapi_Article_Headline_TextnodeFieldsEnum>>
  >
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type Strapi_Category = Node & {
  __typename?: 'STRAPI_CATEGORY'
  children: Array<Node>
  createdAt?: Maybe<Scalars['Date']>
  id: Scalars['ID']
  internal: Internal
  name?: Maybe<Scalars['String']>
  parent?: Maybe<Node>
  recipes?: Maybe<Array<Maybe<Strapi_Recipe>>>
  slug?: Maybe<Scalars['String']>
  strapi_id?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['Date']>
}

export type Strapi_CategoryCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type Strapi_CategoryUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type Strapi_CategoryConnection = {
  __typename?: 'STRAPI_CATEGORYConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi_CategoryEdge>
  group: Array<Strapi_CategoryGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi_Category>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi_CategoryConnectionDistinctArgs = {
  field: Strapi_CategoryFieldsEnum
}

export type Strapi_CategoryConnectionGroupArgs = {
  field: Strapi_CategoryFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi_CategoryConnectionMaxArgs = {
  field: Strapi_CategoryFieldsEnum
}

export type Strapi_CategoryConnectionMinArgs = {
  field: Strapi_CategoryFieldsEnum
}

export type Strapi_CategoryConnectionSumArgs = {
  field: Strapi_CategoryFieldsEnum
}

export type Strapi_CategoryEdge = {
  __typename?: 'STRAPI_CATEGORYEdge'
  next?: Maybe<Strapi_Category>
  node: Strapi_Category
  previous?: Maybe<Strapi_Category>
}

export enum Strapi_CategoryFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CreatedAt = 'createdAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Recipes = 'recipes',
  RecipesCategoryChildren = 'recipes___category___children',
  RecipesCategoryChildrenChildren = 'recipes___category___children___children',
  RecipesCategoryChildrenId = 'recipes___category___children___id',
  RecipesCategoryCreatedAt = 'recipes___category___createdAt',
  RecipesCategoryId = 'recipes___category___id',
  RecipesCategoryInternalContent = 'recipes___category___internal___content',
  RecipesCategoryInternalContentDigest = 'recipes___category___internal___contentDigest',
  RecipesCategoryInternalDescription = 'recipes___category___internal___description',
  RecipesCategoryInternalFieldOwners = 'recipes___category___internal___fieldOwners',
  RecipesCategoryInternalIgnoreType = 'recipes___category___internal___ignoreType',
  RecipesCategoryInternalMediaType = 'recipes___category___internal___mediaType',
  RecipesCategoryInternalOwner = 'recipes___category___internal___owner',
  RecipesCategoryInternalType = 'recipes___category___internal___type',
  RecipesCategoryName = 'recipes___category___name',
  RecipesCategoryParentChildren = 'recipes___category___parent___children',
  RecipesCategoryParentId = 'recipes___category___parent___id',
  RecipesCategoryRecipes = 'recipes___category___recipes',
  RecipesCategoryRecipesChildren = 'recipes___category___recipes___children',
  RecipesCategoryRecipesChildrenStrapiRecipeDirectionsTextnode = 'recipes___category___recipes___childrenStrapiRecipeDirectionsTextnode',
  RecipesCategoryRecipesChildrenStrapiRecipeIngredientsTextnode = 'recipes___category___recipes___childrenStrapiRecipeIngredientsTextnode',
  RecipesCategoryRecipesCreatedAt = 'recipes___category___recipes___createdAt',
  RecipesCategoryRecipesGallery = 'recipes___category___recipes___gallery',
  RecipesCategoryRecipesHeadline = 'recipes___category___recipes___headline',
  RecipesCategoryRecipesId = 'recipes___category___recipes___id',
  RecipesCategoryRecipesPreparationTime = 'recipes___category___recipes___preparationTime',
  RecipesCategoryRecipesPublishedAt = 'recipes___category___recipes___publishedAt',
  RecipesCategoryRecipesSlug = 'recipes___category___recipes___slug',
  RecipesCategoryRecipesStrapiId = 'recipes___category___recipes___strapi_id',
  RecipesCategoryRecipesTags = 'recipes___category___recipes___tags',
  RecipesCategoryRecipesTitle = 'recipes___category___recipes___title',
  RecipesCategoryRecipesUpdatedAt = 'recipes___category___recipes___updatedAt',
  RecipesCategorySlug = 'recipes___category___slug',
  RecipesCategoryStrapiId = 'recipes___category___strapi_id',
  RecipesCategoryUpdatedAt = 'recipes___category___updatedAt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkChildren = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkExcerpt = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkExcerptAst = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHeadings = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHtml = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHtmlAst = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___htmlAst',
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkId = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkRawMarkdownBody = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkTableOfContents = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkTimeToRead = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___timeToRead',
  RecipesChildStrapiRecipeDirectionsTextnodeChildren = 'recipes___childStrapiRecipeDirectionsTextnode___children',
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemark = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkChildren = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkExcerpt = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkExcerptAst = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHeadings = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHtml = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHtmlAst = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___htmlAst',
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkId = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkRawMarkdownBody = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkTableOfContents = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkTimeToRead = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___timeToRead',
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenChildren = 'recipes___childStrapiRecipeDirectionsTextnode___children___children',
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenId = 'recipes___childStrapiRecipeDirectionsTextnode___children___id',
  RecipesChildStrapiRecipeDirectionsTextnodeDirections = 'recipes___childStrapiRecipeDirectionsTextnode___directions',
  RecipesChildStrapiRecipeDirectionsTextnodeId = 'recipes___childStrapiRecipeDirectionsTextnode___id',
  RecipesChildStrapiRecipeDirectionsTextnodeInternalContent = 'recipes___childStrapiRecipeDirectionsTextnode___internal___content',
  RecipesChildStrapiRecipeDirectionsTextnodeInternalContentDigest = 'recipes___childStrapiRecipeDirectionsTextnode___internal___contentDigest',
  RecipesChildStrapiRecipeDirectionsTextnodeInternalDescription = 'recipes___childStrapiRecipeDirectionsTextnode___internal___description',
  RecipesChildStrapiRecipeDirectionsTextnodeInternalFieldOwners = 'recipes___childStrapiRecipeDirectionsTextnode___internal___fieldOwners',
  RecipesChildStrapiRecipeDirectionsTextnodeInternalIgnoreType = 'recipes___childStrapiRecipeDirectionsTextnode___internal___ignoreType',
  RecipesChildStrapiRecipeDirectionsTextnodeInternalMediaType = 'recipes___childStrapiRecipeDirectionsTextnode___internal___mediaType',
  RecipesChildStrapiRecipeDirectionsTextnodeInternalOwner = 'recipes___childStrapiRecipeDirectionsTextnode___internal___owner',
  RecipesChildStrapiRecipeDirectionsTextnodeInternalType = 'recipes___childStrapiRecipeDirectionsTextnode___internal___type',
  RecipesChildStrapiRecipeDirectionsTextnodeParentChildren = 'recipes___childStrapiRecipeDirectionsTextnode___parent___children',
  RecipesChildStrapiRecipeDirectionsTextnodeParentId = 'recipes___childStrapiRecipeDirectionsTextnode___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkChildren = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkExcerpt = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkExcerptAst = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHeadings = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHtml = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHtmlAst = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___htmlAst',
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkId = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkRawMarkdownBody = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkTableOfContents = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkTimeToRead = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___timeToRead',
  RecipesChildStrapiRecipeIngredientsTextnodeChildren = 'recipes___childStrapiRecipeIngredientsTextnode___children',
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemark = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkChildren = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkExcerpt = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkExcerptAst = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHeadings = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHtml = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHtmlAst = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___htmlAst',
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkId = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkRawMarkdownBody = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkTableOfContents = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkTimeToRead = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___timeToRead',
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenChildren = 'recipes___childStrapiRecipeIngredientsTextnode___children___children',
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenId = 'recipes___childStrapiRecipeIngredientsTextnode___children___id',
  RecipesChildStrapiRecipeIngredientsTextnodeId = 'recipes___childStrapiRecipeIngredientsTextnode___id',
  RecipesChildStrapiRecipeIngredientsTextnodeIngredients = 'recipes___childStrapiRecipeIngredientsTextnode___ingredients',
  RecipesChildStrapiRecipeIngredientsTextnodeInternalContent = 'recipes___childStrapiRecipeIngredientsTextnode___internal___content',
  RecipesChildStrapiRecipeIngredientsTextnodeInternalContentDigest = 'recipes___childStrapiRecipeIngredientsTextnode___internal___contentDigest',
  RecipesChildStrapiRecipeIngredientsTextnodeInternalDescription = 'recipes___childStrapiRecipeIngredientsTextnode___internal___description',
  RecipesChildStrapiRecipeIngredientsTextnodeInternalFieldOwners = 'recipes___childStrapiRecipeIngredientsTextnode___internal___fieldOwners',
  RecipesChildStrapiRecipeIngredientsTextnodeInternalIgnoreType = 'recipes___childStrapiRecipeIngredientsTextnode___internal___ignoreType',
  RecipesChildStrapiRecipeIngredientsTextnodeInternalMediaType = 'recipes___childStrapiRecipeIngredientsTextnode___internal___mediaType',
  RecipesChildStrapiRecipeIngredientsTextnodeInternalOwner = 'recipes___childStrapiRecipeIngredientsTextnode___internal___owner',
  RecipesChildStrapiRecipeIngredientsTextnodeInternalType = 'recipes___childStrapiRecipeIngredientsTextnode___internal___type',
  RecipesChildStrapiRecipeIngredientsTextnodeParentChildren = 'recipes___childStrapiRecipeIngredientsTextnode___parent___children',
  RecipesChildStrapiRecipeIngredientsTextnodeParentId = 'recipes___childStrapiRecipeIngredientsTextnode___parent___id',
  RecipesChildren = 'recipes___children',
  RecipesChildrenStrapiRecipeDirectionsTextnode = 'recipes___childrenStrapiRecipeDirectionsTextnode',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkChildren = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkExcerpt = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkExcerptAst = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHeadings = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHtml = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHtmlAst = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___htmlAst',
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkId = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkRawMarkdownBody = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkTableOfContents = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkTimeToRead = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___timeToRead',
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildren = 'recipes___childrenStrapiRecipeDirectionsTextnode___children',
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemark = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkChildren = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkExcerpt = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkExcerptAst = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHeadings = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHtml = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHtmlAst = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___htmlAst',
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkId = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkRawMarkdownBody = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkTableOfContents = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkTimeToRead = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___timeToRead',
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenChildren = 'recipes___childrenStrapiRecipeDirectionsTextnode___children___children',
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenId = 'recipes___childrenStrapiRecipeDirectionsTextnode___children___id',
  RecipesChildrenStrapiRecipeDirectionsTextnodeDirections = 'recipes___childrenStrapiRecipeDirectionsTextnode___directions',
  RecipesChildrenStrapiRecipeDirectionsTextnodeId = 'recipes___childrenStrapiRecipeDirectionsTextnode___id',
  RecipesChildrenStrapiRecipeDirectionsTextnodeInternalContent = 'recipes___childrenStrapiRecipeDirectionsTextnode___internal___content',
  RecipesChildrenStrapiRecipeDirectionsTextnodeInternalContentDigest = 'recipes___childrenStrapiRecipeDirectionsTextnode___internal___contentDigest',
  RecipesChildrenStrapiRecipeDirectionsTextnodeInternalDescription = 'recipes___childrenStrapiRecipeDirectionsTextnode___internal___description',
  RecipesChildrenStrapiRecipeDirectionsTextnodeInternalFieldOwners = 'recipes___childrenStrapiRecipeDirectionsTextnode___internal___fieldOwners',
  RecipesChildrenStrapiRecipeDirectionsTextnodeInternalIgnoreType = 'recipes___childrenStrapiRecipeDirectionsTextnode___internal___ignoreType',
  RecipesChildrenStrapiRecipeDirectionsTextnodeInternalMediaType = 'recipes___childrenStrapiRecipeDirectionsTextnode___internal___mediaType',
  RecipesChildrenStrapiRecipeDirectionsTextnodeInternalOwner = 'recipes___childrenStrapiRecipeDirectionsTextnode___internal___owner',
  RecipesChildrenStrapiRecipeDirectionsTextnodeInternalType = 'recipes___childrenStrapiRecipeDirectionsTextnode___internal___type',
  RecipesChildrenStrapiRecipeDirectionsTextnodeParentChildren = 'recipes___childrenStrapiRecipeDirectionsTextnode___parent___children',
  RecipesChildrenStrapiRecipeDirectionsTextnodeParentId = 'recipes___childrenStrapiRecipeDirectionsTextnode___parent___id',
  RecipesChildrenStrapiRecipeIngredientsTextnode = 'recipes___childrenStrapiRecipeIngredientsTextnode',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkChildren = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkExcerpt = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkExcerptAst = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHeadings = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHtml = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHtmlAst = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___htmlAst',
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkId = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkRawMarkdownBody = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkTableOfContents = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkTimeToRead = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___timeToRead',
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildren = 'recipes___childrenStrapiRecipeIngredientsTextnode___children',
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemark = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkChildren = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkExcerpt = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkExcerptAst = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHeadings = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHtml = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHtmlAst = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___htmlAst',
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkId = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkRawMarkdownBody = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkTableOfContents = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkTimeToRead = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___timeToRead',
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenChildren = 'recipes___childrenStrapiRecipeIngredientsTextnode___children___children',
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenId = 'recipes___childrenStrapiRecipeIngredientsTextnode___children___id',
  RecipesChildrenStrapiRecipeIngredientsTextnodeId = 'recipes___childrenStrapiRecipeIngredientsTextnode___id',
  RecipesChildrenStrapiRecipeIngredientsTextnodeIngredients = 'recipes___childrenStrapiRecipeIngredientsTextnode___ingredients',
  RecipesChildrenStrapiRecipeIngredientsTextnodeInternalContent = 'recipes___childrenStrapiRecipeIngredientsTextnode___internal___content',
  RecipesChildrenStrapiRecipeIngredientsTextnodeInternalContentDigest = 'recipes___childrenStrapiRecipeIngredientsTextnode___internal___contentDigest',
  RecipesChildrenStrapiRecipeIngredientsTextnodeInternalDescription = 'recipes___childrenStrapiRecipeIngredientsTextnode___internal___description',
  RecipesChildrenStrapiRecipeIngredientsTextnodeInternalFieldOwners = 'recipes___childrenStrapiRecipeIngredientsTextnode___internal___fieldOwners',
  RecipesChildrenStrapiRecipeIngredientsTextnodeInternalIgnoreType = 'recipes___childrenStrapiRecipeIngredientsTextnode___internal___ignoreType',
  RecipesChildrenStrapiRecipeIngredientsTextnodeInternalMediaType = 'recipes___childrenStrapiRecipeIngredientsTextnode___internal___mediaType',
  RecipesChildrenStrapiRecipeIngredientsTextnodeInternalOwner = 'recipes___childrenStrapiRecipeIngredientsTextnode___internal___owner',
  RecipesChildrenStrapiRecipeIngredientsTextnodeInternalType = 'recipes___childrenStrapiRecipeIngredientsTextnode___internal___type',
  RecipesChildrenStrapiRecipeIngredientsTextnodeParentChildren = 'recipes___childrenStrapiRecipeIngredientsTextnode___parent___children',
  RecipesChildrenStrapiRecipeIngredientsTextnodeParentId = 'recipes___childrenStrapiRecipeIngredientsTextnode___parent___id',
  RecipesChildrenChildren = 'recipes___children___children',
  RecipesChildrenChildrenChildren = 'recipes___children___children___children',
  RecipesChildrenChildrenId = 'recipes___children___children___id',
  RecipesChildrenId = 'recipes___children___id',
  RecipesChildrenInternalContent = 'recipes___children___internal___content',
  RecipesChildrenInternalContentDigest = 'recipes___children___internal___contentDigest',
  RecipesChildrenInternalDescription = 'recipes___children___internal___description',
  RecipesChildrenInternalFieldOwners = 'recipes___children___internal___fieldOwners',
  RecipesChildrenInternalIgnoreType = 'recipes___children___internal___ignoreType',
  RecipesChildrenInternalMediaType = 'recipes___children___internal___mediaType',
  RecipesChildrenInternalOwner = 'recipes___children___internal___owner',
  RecipesChildrenInternalType = 'recipes___children___internal___type',
  RecipesChildrenParentChildren = 'recipes___children___parent___children',
  RecipesChildrenParentId = 'recipes___children___parent___id',
  RecipesCoverChildren = 'recipes___cover___children',
  RecipesCoverChildrenChildren = 'recipes___cover___children___children',
  RecipesCoverChildrenId = 'recipes___cover___children___id',
  RecipesCoverCreatedAt = 'recipes___cover___createdAt',
  RecipesCoverExt = 'recipes___cover___ext',
  RecipesCoverHash = 'recipes___cover___hash',
  RecipesCoverHeight = 'recipes___cover___height',
  RecipesCoverId = 'recipes___cover___id',
  RecipesCoverInternalContent = 'recipes___cover___internal___content',
  RecipesCoverInternalContentDigest = 'recipes___cover___internal___contentDigest',
  RecipesCoverInternalDescription = 'recipes___cover___internal___description',
  RecipesCoverInternalFieldOwners = 'recipes___cover___internal___fieldOwners',
  RecipesCoverInternalIgnoreType = 'recipes___cover___internal___ignoreType',
  RecipesCoverInternalMediaType = 'recipes___cover___internal___mediaType',
  RecipesCoverInternalOwner = 'recipes___cover___internal___owner',
  RecipesCoverInternalType = 'recipes___cover___internal___type',
  RecipesCoverLocalFileAbsolutePath = 'recipes___cover___localFile___absolutePath',
  RecipesCoverLocalFileAccessTime = 'recipes___cover___localFile___accessTime',
  RecipesCoverLocalFileAtime = 'recipes___cover___localFile___atime',
  RecipesCoverLocalFileAtimeMs = 'recipes___cover___localFile___atimeMs',
  RecipesCoverLocalFileBase = 'recipes___cover___localFile___base',
  RecipesCoverLocalFileBirthTime = 'recipes___cover___localFile___birthTime',
  RecipesCoverLocalFileBirthtime = 'recipes___cover___localFile___birthtime',
  RecipesCoverLocalFileBirthtimeMs = 'recipes___cover___localFile___birthtimeMs',
  RecipesCoverLocalFileBlksize = 'recipes___cover___localFile___blksize',
  RecipesCoverLocalFileBlocks = 'recipes___cover___localFile___blocks',
  RecipesCoverLocalFileChangeTime = 'recipes___cover___localFile___changeTime',
  RecipesCoverLocalFileChildren = 'recipes___cover___localFile___children',
  RecipesCoverLocalFileChildrenImageSharp = 'recipes___cover___localFile___childrenImageSharp',
  RecipesCoverLocalFileCtime = 'recipes___cover___localFile___ctime',
  RecipesCoverLocalFileCtimeMs = 'recipes___cover___localFile___ctimeMs',
  RecipesCoverLocalFileDev = 'recipes___cover___localFile___dev',
  RecipesCoverLocalFileDir = 'recipes___cover___localFile___dir',
  RecipesCoverLocalFileExt = 'recipes___cover___localFile___ext',
  RecipesCoverLocalFileExtension = 'recipes___cover___localFile___extension',
  RecipesCoverLocalFileGid = 'recipes___cover___localFile___gid',
  RecipesCoverLocalFileId = 'recipes___cover___localFile___id',
  RecipesCoverLocalFileIno = 'recipes___cover___localFile___ino',
  RecipesCoverLocalFileMode = 'recipes___cover___localFile___mode',
  RecipesCoverLocalFileModifiedTime = 'recipes___cover___localFile___modifiedTime',
  RecipesCoverLocalFileMtime = 'recipes___cover___localFile___mtime',
  RecipesCoverLocalFileMtimeMs = 'recipes___cover___localFile___mtimeMs',
  RecipesCoverLocalFileName = 'recipes___cover___localFile___name',
  RecipesCoverLocalFileNlink = 'recipes___cover___localFile___nlink',
  RecipesCoverLocalFilePrettySize = 'recipes___cover___localFile___prettySize',
  RecipesCoverLocalFileRdev = 'recipes___cover___localFile___rdev',
  RecipesCoverLocalFileRelativeDirectory = 'recipes___cover___localFile___relativeDirectory',
  RecipesCoverLocalFileRelativePath = 'recipes___cover___localFile___relativePath',
  RecipesCoverLocalFileRoot = 'recipes___cover___localFile___root',
  RecipesCoverLocalFileSize = 'recipes___cover___localFile___size',
  RecipesCoverLocalFileSourceInstanceName = 'recipes___cover___localFile___sourceInstanceName',
  RecipesCoverLocalFileUid = 'recipes___cover___localFile___uid',
  RecipesCoverLocalFileUrl = 'recipes___cover___localFile___url',
  RecipesCoverMime = 'recipes___cover___mime',
  RecipesCoverName = 'recipes___cover___name',
  RecipesCoverParentChildren = 'recipes___cover___parent___children',
  RecipesCoverParentId = 'recipes___cover___parent___id',
  RecipesCoverSize = 'recipes___cover___size',
  RecipesCoverStrapiId = 'recipes___cover___strapi_id',
  RecipesCoverUpdatedAt = 'recipes___cover___updatedAt',
  RecipesCoverUrl = 'recipes___cover___url',
  RecipesCoverWidth = 'recipes___cover___width',
  RecipesCreatedAt = 'recipes___createdAt',
  RecipesDirectionsDataChildren = 'recipes___directions___data___children',
  RecipesDirectionsDataChildrenMarkdownRemark = 'recipes___directions___data___childrenMarkdownRemark',
  RecipesDirectionsDataDirections = 'recipes___directions___data___directions',
  RecipesDirectionsDataId = 'recipes___directions___data___id',
  RecipesGallery = 'recipes___gallery',
  RecipesGalleryChildren = 'recipes___gallery___children',
  RecipesGalleryChildrenChildren = 'recipes___gallery___children___children',
  RecipesGalleryChildrenId = 'recipes___gallery___children___id',
  RecipesGalleryCreatedAt = 'recipes___gallery___createdAt',
  RecipesGalleryExt = 'recipes___gallery___ext',
  RecipesGalleryHash = 'recipes___gallery___hash',
  RecipesGalleryHeight = 'recipes___gallery___height',
  RecipesGalleryId = 'recipes___gallery___id',
  RecipesGalleryInternalContent = 'recipes___gallery___internal___content',
  RecipesGalleryInternalContentDigest = 'recipes___gallery___internal___contentDigest',
  RecipesGalleryInternalDescription = 'recipes___gallery___internal___description',
  RecipesGalleryInternalFieldOwners = 'recipes___gallery___internal___fieldOwners',
  RecipesGalleryInternalIgnoreType = 'recipes___gallery___internal___ignoreType',
  RecipesGalleryInternalMediaType = 'recipes___gallery___internal___mediaType',
  RecipesGalleryInternalOwner = 'recipes___gallery___internal___owner',
  RecipesGalleryInternalType = 'recipes___gallery___internal___type',
  RecipesGalleryLocalFileAbsolutePath = 'recipes___gallery___localFile___absolutePath',
  RecipesGalleryLocalFileAccessTime = 'recipes___gallery___localFile___accessTime',
  RecipesGalleryLocalFileAtime = 'recipes___gallery___localFile___atime',
  RecipesGalleryLocalFileAtimeMs = 'recipes___gallery___localFile___atimeMs',
  RecipesGalleryLocalFileBase = 'recipes___gallery___localFile___base',
  RecipesGalleryLocalFileBirthTime = 'recipes___gallery___localFile___birthTime',
  RecipesGalleryLocalFileBirthtime = 'recipes___gallery___localFile___birthtime',
  RecipesGalleryLocalFileBirthtimeMs = 'recipes___gallery___localFile___birthtimeMs',
  RecipesGalleryLocalFileBlksize = 'recipes___gallery___localFile___blksize',
  RecipesGalleryLocalFileBlocks = 'recipes___gallery___localFile___blocks',
  RecipesGalleryLocalFileChangeTime = 'recipes___gallery___localFile___changeTime',
  RecipesGalleryLocalFileChildren = 'recipes___gallery___localFile___children',
  RecipesGalleryLocalFileChildrenImageSharp = 'recipes___gallery___localFile___childrenImageSharp',
  RecipesGalleryLocalFileCtime = 'recipes___gallery___localFile___ctime',
  RecipesGalleryLocalFileCtimeMs = 'recipes___gallery___localFile___ctimeMs',
  RecipesGalleryLocalFileDev = 'recipes___gallery___localFile___dev',
  RecipesGalleryLocalFileDir = 'recipes___gallery___localFile___dir',
  RecipesGalleryLocalFileExt = 'recipes___gallery___localFile___ext',
  RecipesGalleryLocalFileExtension = 'recipes___gallery___localFile___extension',
  RecipesGalleryLocalFileGid = 'recipes___gallery___localFile___gid',
  RecipesGalleryLocalFileId = 'recipes___gallery___localFile___id',
  RecipesGalleryLocalFileIno = 'recipes___gallery___localFile___ino',
  RecipesGalleryLocalFileMode = 'recipes___gallery___localFile___mode',
  RecipesGalleryLocalFileModifiedTime = 'recipes___gallery___localFile___modifiedTime',
  RecipesGalleryLocalFileMtime = 'recipes___gallery___localFile___mtime',
  RecipesGalleryLocalFileMtimeMs = 'recipes___gallery___localFile___mtimeMs',
  RecipesGalleryLocalFileName = 'recipes___gallery___localFile___name',
  RecipesGalleryLocalFileNlink = 'recipes___gallery___localFile___nlink',
  RecipesGalleryLocalFilePrettySize = 'recipes___gallery___localFile___prettySize',
  RecipesGalleryLocalFileRdev = 'recipes___gallery___localFile___rdev',
  RecipesGalleryLocalFileRelativeDirectory = 'recipes___gallery___localFile___relativeDirectory',
  RecipesGalleryLocalFileRelativePath = 'recipes___gallery___localFile___relativePath',
  RecipesGalleryLocalFileRoot = 'recipes___gallery___localFile___root',
  RecipesGalleryLocalFileSize = 'recipes___gallery___localFile___size',
  RecipesGalleryLocalFileSourceInstanceName = 'recipes___gallery___localFile___sourceInstanceName',
  RecipesGalleryLocalFileUid = 'recipes___gallery___localFile___uid',
  RecipesGalleryLocalFileUrl = 'recipes___gallery___localFile___url',
  RecipesGalleryMime = 'recipes___gallery___mime',
  RecipesGalleryName = 'recipes___gallery___name',
  RecipesGalleryParentChildren = 'recipes___gallery___parent___children',
  RecipesGalleryParentId = 'recipes___gallery___parent___id',
  RecipesGallerySize = 'recipes___gallery___size',
  RecipesGalleryStrapiId = 'recipes___gallery___strapi_id',
  RecipesGalleryUpdatedAt = 'recipes___gallery___updatedAt',
  RecipesGalleryUrl = 'recipes___gallery___url',
  RecipesGalleryWidth = 'recipes___gallery___width',
  RecipesHeadline = 'recipes___headline',
  RecipesId = 'recipes___id',
  RecipesIngredientsDataChildren = 'recipes___ingredients___data___children',
  RecipesIngredientsDataChildrenMarkdownRemark = 'recipes___ingredients___data___childrenMarkdownRemark',
  RecipesIngredientsDataId = 'recipes___ingredients___data___id',
  RecipesIngredientsDataIngredients = 'recipes___ingredients___data___ingredients',
  RecipesInternalContent = 'recipes___internal___content',
  RecipesInternalContentDigest = 'recipes___internal___contentDigest',
  RecipesInternalDescription = 'recipes___internal___description',
  RecipesInternalFieldOwners = 'recipes___internal___fieldOwners',
  RecipesInternalIgnoreType = 'recipes___internal___ignoreType',
  RecipesInternalMediaType = 'recipes___internal___mediaType',
  RecipesInternalOwner = 'recipes___internal___owner',
  RecipesInternalType = 'recipes___internal___type',
  RecipesParentChildren = 'recipes___parent___children',
  RecipesParentChildrenChildren = 'recipes___parent___children___children',
  RecipesParentChildrenId = 'recipes___parent___children___id',
  RecipesParentId = 'recipes___parent___id',
  RecipesParentInternalContent = 'recipes___parent___internal___content',
  RecipesParentInternalContentDigest = 'recipes___parent___internal___contentDigest',
  RecipesParentInternalDescription = 'recipes___parent___internal___description',
  RecipesParentInternalFieldOwners = 'recipes___parent___internal___fieldOwners',
  RecipesParentInternalIgnoreType = 'recipes___parent___internal___ignoreType',
  RecipesParentInternalMediaType = 'recipes___parent___internal___mediaType',
  RecipesParentInternalOwner = 'recipes___parent___internal___owner',
  RecipesParentInternalType = 'recipes___parent___internal___type',
  RecipesParentParentChildren = 'recipes___parent___parent___children',
  RecipesParentParentId = 'recipes___parent___parent___id',
  RecipesPreparationTime = 'recipes___preparationTime',
  RecipesPublishedAt = 'recipes___publishedAt',
  RecipesSeoChildren = 'recipes___seo___children',
  RecipesSeoChildrenChildren = 'recipes___seo___children___children',
  RecipesSeoChildrenId = 'recipes___seo___children___id',
  RecipesSeoHtmlDescription = 'recipes___seo___htmlDescription',
  RecipesSeoHtmlTitle = 'recipes___seo___htmlTitle',
  RecipesSeoId = 'recipes___seo___id',
  RecipesSeoInternalContent = 'recipes___seo___internal___content',
  RecipesSeoInternalContentDigest = 'recipes___seo___internal___contentDigest',
  RecipesSeoInternalDescription = 'recipes___seo___internal___description',
  RecipesSeoInternalFieldOwners = 'recipes___seo___internal___fieldOwners',
  RecipesSeoInternalIgnoreType = 'recipes___seo___internal___ignoreType',
  RecipesSeoInternalMediaType = 'recipes___seo___internal___mediaType',
  RecipesSeoInternalOwner = 'recipes___seo___internal___owner',
  RecipesSeoInternalType = 'recipes___seo___internal___type',
  RecipesSeoParentChildren = 'recipes___seo___parent___children',
  RecipesSeoParentId = 'recipes___seo___parent___id',
  RecipesSeoStrapiId = 'recipes___seo___strapi_id',
  RecipesSlug = 'recipes___slug',
  RecipesStrapiId = 'recipes___strapi_id',
  RecipesTags = 'recipes___tags',
  RecipesTagsChildren = 'recipes___tags___children',
  RecipesTagsChildrenChildren = 'recipes___tags___children___children',
  RecipesTagsChildrenId = 'recipes___tags___children___id',
  RecipesTagsCreatedAt = 'recipes___tags___createdAt',
  RecipesTagsId = 'recipes___tags___id',
  RecipesTagsInternalContent = 'recipes___tags___internal___content',
  RecipesTagsInternalContentDigest = 'recipes___tags___internal___contentDigest',
  RecipesTagsInternalDescription = 'recipes___tags___internal___description',
  RecipesTagsInternalFieldOwners = 'recipes___tags___internal___fieldOwners',
  RecipesTagsInternalIgnoreType = 'recipes___tags___internal___ignoreType',
  RecipesTagsInternalMediaType = 'recipes___tags___internal___mediaType',
  RecipesTagsInternalOwner = 'recipes___tags___internal___owner',
  RecipesTagsInternalType = 'recipes___tags___internal___type',
  RecipesTagsName = 'recipes___tags___name',
  RecipesTagsParentChildren = 'recipes___tags___parent___children',
  RecipesTagsParentId = 'recipes___tags___parent___id',
  RecipesTagsRecipes = 'recipes___tags___recipes',
  RecipesTagsRecipesChildren = 'recipes___tags___recipes___children',
  RecipesTagsRecipesChildrenStrapiRecipeDirectionsTextnode = 'recipes___tags___recipes___childrenStrapiRecipeDirectionsTextnode',
  RecipesTagsRecipesChildrenStrapiRecipeIngredientsTextnode = 'recipes___tags___recipes___childrenStrapiRecipeIngredientsTextnode',
  RecipesTagsRecipesCreatedAt = 'recipes___tags___recipes___createdAt',
  RecipesTagsRecipesGallery = 'recipes___tags___recipes___gallery',
  RecipesTagsRecipesHeadline = 'recipes___tags___recipes___headline',
  RecipesTagsRecipesId = 'recipes___tags___recipes___id',
  RecipesTagsRecipesPreparationTime = 'recipes___tags___recipes___preparationTime',
  RecipesTagsRecipesPublishedAt = 'recipes___tags___recipes___publishedAt',
  RecipesTagsRecipesSlug = 'recipes___tags___recipes___slug',
  RecipesTagsRecipesStrapiId = 'recipes___tags___recipes___strapi_id',
  RecipesTagsRecipesTags = 'recipes___tags___recipes___tags',
  RecipesTagsRecipesTitle = 'recipes___tags___recipes___title',
  RecipesTagsRecipesUpdatedAt = 'recipes___tags___recipes___updatedAt',
  RecipesTagsSlug = 'recipes___tags___slug',
  RecipesTagsStrapiId = 'recipes___tags___strapi_id',
  RecipesTagsUpdatedAt = 'recipes___tags___updatedAt',
  RecipesTitle = 'recipes___title',
  RecipesUpdatedAt = 'recipes___updatedAt',
  Slug = 'slug',
  StrapiId = 'strapi_id',
  UpdatedAt = 'updatedAt',
}

export type Strapi_CategoryFilterInput = {
  children?: InputMaybe<NodeFilterListInput>
  createdAt?: InputMaybe<DateQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  name?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  recipes?: InputMaybe<Strapi_RecipeFilterListInput>
  slug?: InputMaybe<StringQueryOperatorInput>
  strapi_id?: InputMaybe<IntQueryOperatorInput>
  updatedAt?: InputMaybe<DateQueryOperatorInput>
}

export type Strapi_CategoryGroupConnection = {
  __typename?: 'STRAPI_CATEGORYGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi_CategoryEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<Strapi_CategoryGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi_Category>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi_CategoryGroupConnectionDistinctArgs = {
  field: Strapi_CategoryFieldsEnum
}

export type Strapi_CategoryGroupConnectionGroupArgs = {
  field: Strapi_CategoryFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi_CategoryGroupConnectionMaxArgs = {
  field: Strapi_CategoryFieldsEnum
}

export type Strapi_CategoryGroupConnectionMinArgs = {
  field: Strapi_CategoryFieldsEnum
}

export type Strapi_CategoryGroupConnectionSumArgs = {
  field: Strapi_CategoryFieldsEnum
}

export type Strapi_CategorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi_CategoryFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type Strapi_Recipe = Node & {
  __typename?: 'STRAPI_RECIPE'
  category?: Maybe<Strapi_Category>
  /** Returns the first child node of type STRAPI_RECIPE_DIRECTIONS_TEXTNODE or null if there are no children of given type on this node */
  childStrapiRecipeDirectionsTextnode?: Maybe<Strapi_Recipe_Directions_Textnode>
  /** Returns the first child node of type STRAPI_RECIPE_INGREDIENTS_TEXTNODE or null if there are no children of given type on this node */
  childStrapiRecipeIngredientsTextnode?: Maybe<Strapi_Recipe_Ingredients_Textnode>
  children: Array<Node>
  /** Returns all children nodes filtered by type STRAPI_RECIPE_DIRECTIONS_TEXTNODE */
  childrenStrapiRecipeDirectionsTextnode?: Maybe<
    Array<Maybe<Strapi_Recipe_Directions_Textnode>>
  >
  /** Returns all children nodes filtered by type STRAPI_RECIPE_INGREDIENTS_TEXTNODE */
  childrenStrapiRecipeIngredientsTextnode?: Maybe<
    Array<Maybe<Strapi_Recipe_Ingredients_Textnode>>
  >
  cover?: Maybe<Strapi__Media>
  createdAt?: Maybe<Scalars['Date']>
  directions?: Maybe<Strapi_RecipeDirections>
  gallery?: Maybe<Array<Maybe<Strapi__Media>>>
  headline?: Maybe<Scalars['String']>
  id: Scalars['ID']
  ingredients?: Maybe<Strapi_RecipeIngredients>
  internal: Internal
  parent?: Maybe<Node>
  parsedDirections?: Maybe<RecipePart>
  parsedHeadline?: Maybe<RecipePart>
  parsedIngredients?: Maybe<RecipePart>
  preparationTime?: Maybe<Scalars['Int']>
  publishedAt?: Maybe<Scalars['Date']>
  seo?: Maybe<Strapi__Component_Seo_Description>
  slug?: Maybe<Scalars['String']>
  strapi_id?: Maybe<Scalars['Int']>
  tags?: Maybe<Array<Maybe<Strapi_Tag>>>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Date']>
}

export type Strapi_RecipeCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type Strapi_RecipePublishedAtArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type Strapi_RecipeUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type Strapi_RecipeConnection = {
  __typename?: 'STRAPI_RECIPEConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi_RecipeEdge>
  group: Array<Strapi_RecipeGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi_Recipe>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi_RecipeConnectionDistinctArgs = {
  field: Strapi_RecipeFieldsEnum
}

export type Strapi_RecipeConnectionGroupArgs = {
  field: Strapi_RecipeFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi_RecipeConnectionMaxArgs = {
  field: Strapi_RecipeFieldsEnum
}

export type Strapi_RecipeConnectionMinArgs = {
  field: Strapi_RecipeFieldsEnum
}

export type Strapi_RecipeConnectionSumArgs = {
  field: Strapi_RecipeFieldsEnum
}

export type Strapi_RecipeDirections = {
  __typename?: 'STRAPI_RECIPEDirections'
  data?: Maybe<Strapi_Recipe_Directions_Textnode>
}

export type Strapi_RecipeDirectionsFilterInput = {
  data?: InputMaybe<Strapi_Recipe_Directions_TextnodeFilterInput>
}

export type Strapi_RecipeEdge = {
  __typename?: 'STRAPI_RECIPEEdge'
  next?: Maybe<Strapi_Recipe>
  node: Strapi_Recipe
  previous?: Maybe<Strapi_Recipe>
}

export enum Strapi_RecipeFieldsEnum {
  CategoryChildren = 'category___children',
  CategoryChildrenChildren = 'category___children___children',
  CategoryChildrenChildrenChildren = 'category___children___children___children',
  CategoryChildrenChildrenId = 'category___children___children___id',
  CategoryChildrenId = 'category___children___id',
  CategoryChildrenInternalContent = 'category___children___internal___content',
  CategoryChildrenInternalContentDigest = 'category___children___internal___contentDigest',
  CategoryChildrenInternalDescription = 'category___children___internal___description',
  CategoryChildrenInternalFieldOwners = 'category___children___internal___fieldOwners',
  CategoryChildrenInternalIgnoreType = 'category___children___internal___ignoreType',
  CategoryChildrenInternalMediaType = 'category___children___internal___mediaType',
  CategoryChildrenInternalOwner = 'category___children___internal___owner',
  CategoryChildrenInternalType = 'category___children___internal___type',
  CategoryChildrenParentChildren = 'category___children___parent___children',
  CategoryChildrenParentId = 'category___children___parent___id',
  CategoryCreatedAt = 'category___createdAt',
  CategoryId = 'category___id',
  CategoryInternalContent = 'category___internal___content',
  CategoryInternalContentDigest = 'category___internal___contentDigest',
  CategoryInternalDescription = 'category___internal___description',
  CategoryInternalFieldOwners = 'category___internal___fieldOwners',
  CategoryInternalIgnoreType = 'category___internal___ignoreType',
  CategoryInternalMediaType = 'category___internal___mediaType',
  CategoryInternalOwner = 'category___internal___owner',
  CategoryInternalType = 'category___internal___type',
  CategoryName = 'category___name',
  CategoryParentChildren = 'category___parent___children',
  CategoryParentChildrenChildren = 'category___parent___children___children',
  CategoryParentChildrenId = 'category___parent___children___id',
  CategoryParentId = 'category___parent___id',
  CategoryParentInternalContent = 'category___parent___internal___content',
  CategoryParentInternalContentDigest = 'category___parent___internal___contentDigest',
  CategoryParentInternalDescription = 'category___parent___internal___description',
  CategoryParentInternalFieldOwners = 'category___parent___internal___fieldOwners',
  CategoryParentInternalIgnoreType = 'category___parent___internal___ignoreType',
  CategoryParentInternalMediaType = 'category___parent___internal___mediaType',
  CategoryParentInternalOwner = 'category___parent___internal___owner',
  CategoryParentInternalType = 'category___parent___internal___type',
  CategoryParentParentChildren = 'category___parent___parent___children',
  CategoryParentParentId = 'category___parent___parent___id',
  CategoryRecipes = 'category___recipes',
  CategoryRecipesCategoryChildren = 'category___recipes___category___children',
  CategoryRecipesCategoryCreatedAt = 'category___recipes___category___createdAt',
  CategoryRecipesCategoryId = 'category___recipes___category___id',
  CategoryRecipesCategoryName = 'category___recipes___category___name',
  CategoryRecipesCategoryRecipes = 'category___recipes___category___recipes',
  CategoryRecipesCategorySlug = 'category___recipes___category___slug',
  CategoryRecipesCategoryStrapiId = 'category___recipes___category___strapi_id',
  CategoryRecipesCategoryUpdatedAt = 'category___recipes___category___updatedAt',
  CategoryRecipesChildStrapiRecipeDirectionsTextnodeChildren = 'category___recipes___childStrapiRecipeDirectionsTextnode___children',
  CategoryRecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemark = 'category___recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark',
  CategoryRecipesChildStrapiRecipeDirectionsTextnodeDirections = 'category___recipes___childStrapiRecipeDirectionsTextnode___directions',
  CategoryRecipesChildStrapiRecipeDirectionsTextnodeId = 'category___recipes___childStrapiRecipeDirectionsTextnode___id',
  CategoryRecipesChildStrapiRecipeIngredientsTextnodeChildren = 'category___recipes___childStrapiRecipeIngredientsTextnode___children',
  CategoryRecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemark = 'category___recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark',
  CategoryRecipesChildStrapiRecipeIngredientsTextnodeId = 'category___recipes___childStrapiRecipeIngredientsTextnode___id',
  CategoryRecipesChildStrapiRecipeIngredientsTextnodeIngredients = 'category___recipes___childStrapiRecipeIngredientsTextnode___ingredients',
  CategoryRecipesChildren = 'category___recipes___children',
  CategoryRecipesChildrenStrapiRecipeDirectionsTextnode = 'category___recipes___childrenStrapiRecipeDirectionsTextnode',
  CategoryRecipesChildrenStrapiRecipeDirectionsTextnodeChildren = 'category___recipes___childrenStrapiRecipeDirectionsTextnode___children',
  CategoryRecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemark = 'category___recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark',
  CategoryRecipesChildrenStrapiRecipeDirectionsTextnodeDirections = 'category___recipes___childrenStrapiRecipeDirectionsTextnode___directions',
  CategoryRecipesChildrenStrapiRecipeDirectionsTextnodeId = 'category___recipes___childrenStrapiRecipeDirectionsTextnode___id',
  CategoryRecipesChildrenStrapiRecipeIngredientsTextnode = 'category___recipes___childrenStrapiRecipeIngredientsTextnode',
  CategoryRecipesChildrenStrapiRecipeIngredientsTextnodeChildren = 'category___recipes___childrenStrapiRecipeIngredientsTextnode___children',
  CategoryRecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemark = 'category___recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark',
  CategoryRecipesChildrenStrapiRecipeIngredientsTextnodeId = 'category___recipes___childrenStrapiRecipeIngredientsTextnode___id',
  CategoryRecipesChildrenStrapiRecipeIngredientsTextnodeIngredients = 'category___recipes___childrenStrapiRecipeIngredientsTextnode___ingredients',
  CategoryRecipesChildrenChildren = 'category___recipes___children___children',
  CategoryRecipesChildrenId = 'category___recipes___children___id',
  CategoryRecipesCoverChildren = 'category___recipes___cover___children',
  CategoryRecipesCoverCreatedAt = 'category___recipes___cover___createdAt',
  CategoryRecipesCoverExt = 'category___recipes___cover___ext',
  CategoryRecipesCoverHash = 'category___recipes___cover___hash',
  CategoryRecipesCoverHeight = 'category___recipes___cover___height',
  CategoryRecipesCoverId = 'category___recipes___cover___id',
  CategoryRecipesCoverMime = 'category___recipes___cover___mime',
  CategoryRecipesCoverName = 'category___recipes___cover___name',
  CategoryRecipesCoverSize = 'category___recipes___cover___size',
  CategoryRecipesCoverStrapiId = 'category___recipes___cover___strapi_id',
  CategoryRecipesCoverUpdatedAt = 'category___recipes___cover___updatedAt',
  CategoryRecipesCoverUrl = 'category___recipes___cover___url',
  CategoryRecipesCoverWidth = 'category___recipes___cover___width',
  CategoryRecipesCreatedAt = 'category___recipes___createdAt',
  CategoryRecipesGallery = 'category___recipes___gallery',
  CategoryRecipesGalleryChildren = 'category___recipes___gallery___children',
  CategoryRecipesGalleryCreatedAt = 'category___recipes___gallery___createdAt',
  CategoryRecipesGalleryExt = 'category___recipes___gallery___ext',
  CategoryRecipesGalleryHash = 'category___recipes___gallery___hash',
  CategoryRecipesGalleryHeight = 'category___recipes___gallery___height',
  CategoryRecipesGalleryId = 'category___recipes___gallery___id',
  CategoryRecipesGalleryMime = 'category___recipes___gallery___mime',
  CategoryRecipesGalleryName = 'category___recipes___gallery___name',
  CategoryRecipesGallerySize = 'category___recipes___gallery___size',
  CategoryRecipesGalleryStrapiId = 'category___recipes___gallery___strapi_id',
  CategoryRecipesGalleryUpdatedAt = 'category___recipes___gallery___updatedAt',
  CategoryRecipesGalleryUrl = 'category___recipes___gallery___url',
  CategoryRecipesGalleryWidth = 'category___recipes___gallery___width',
  CategoryRecipesHeadline = 'category___recipes___headline',
  CategoryRecipesId = 'category___recipes___id',
  CategoryRecipesInternalContent = 'category___recipes___internal___content',
  CategoryRecipesInternalContentDigest = 'category___recipes___internal___contentDigest',
  CategoryRecipesInternalDescription = 'category___recipes___internal___description',
  CategoryRecipesInternalFieldOwners = 'category___recipes___internal___fieldOwners',
  CategoryRecipesInternalIgnoreType = 'category___recipes___internal___ignoreType',
  CategoryRecipesInternalMediaType = 'category___recipes___internal___mediaType',
  CategoryRecipesInternalOwner = 'category___recipes___internal___owner',
  CategoryRecipesInternalType = 'category___recipes___internal___type',
  CategoryRecipesParentChildren = 'category___recipes___parent___children',
  CategoryRecipesParentId = 'category___recipes___parent___id',
  CategoryRecipesPreparationTime = 'category___recipes___preparationTime',
  CategoryRecipesPublishedAt = 'category___recipes___publishedAt',
  CategoryRecipesSeoChildren = 'category___recipes___seo___children',
  CategoryRecipesSeoHtmlDescription = 'category___recipes___seo___htmlDescription',
  CategoryRecipesSeoHtmlTitle = 'category___recipes___seo___htmlTitle',
  CategoryRecipesSeoId = 'category___recipes___seo___id',
  CategoryRecipesSeoStrapiId = 'category___recipes___seo___strapi_id',
  CategoryRecipesSlug = 'category___recipes___slug',
  CategoryRecipesStrapiId = 'category___recipes___strapi_id',
  CategoryRecipesTags = 'category___recipes___tags',
  CategoryRecipesTagsChildren = 'category___recipes___tags___children',
  CategoryRecipesTagsCreatedAt = 'category___recipes___tags___createdAt',
  CategoryRecipesTagsId = 'category___recipes___tags___id',
  CategoryRecipesTagsName = 'category___recipes___tags___name',
  CategoryRecipesTagsRecipes = 'category___recipes___tags___recipes',
  CategoryRecipesTagsSlug = 'category___recipes___tags___slug',
  CategoryRecipesTagsStrapiId = 'category___recipes___tags___strapi_id',
  CategoryRecipesTagsUpdatedAt = 'category___recipes___tags___updatedAt',
  CategoryRecipesTitle = 'category___recipes___title',
  CategoryRecipesUpdatedAt = 'category___recipes___updatedAt',
  CategorySlug = 'category___slug',
  CategoryStrapiId = 'category___strapi_id',
  CategoryUpdatedAt = 'category___updatedAt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkChildren = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkChildrenChildren = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkChildrenId = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkExcerpt = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkExcerptAst = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___excerptAst',
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkFrontmatterTitle = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHeadings = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHeadingsDepth = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHeadingsId = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHeadingsValue = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHtml = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHtmlAst = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___htmlAst',
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkId = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkInternalContent = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkInternalContentDigest = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkInternalDescription = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkInternalFieldOwners = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkInternalIgnoreType = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkInternalMediaType = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkInternalOwner = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkInternalType = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkParentChildren = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkParentId = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkRawMarkdownBody = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkTableOfContents = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkTimeToRead = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkWordCountParagraphs = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkWordCountSentences = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkWordCountWords = 'childStrapiRecipeDirectionsTextnode___childMarkdownRemark___wordCount___words',
  ChildStrapiRecipeDirectionsTextnodeChildren = 'childStrapiRecipeDirectionsTextnode___children',
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemark = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkChildren = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkChildrenChildren = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkChildrenId = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkExcerpt = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkExcerptAst = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___excerptAst',
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkFrontmatterTitle = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHeadings = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHeadingsDepth = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHeadingsId = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHeadingsValue = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHtml = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHtmlAst = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___htmlAst',
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkId = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkInternalContent = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkInternalContentDigest = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkInternalDescription = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkInternalFieldOwners = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkInternalIgnoreType = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkInternalMediaType = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkInternalOwner = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkInternalType = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkParentChildren = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkParentId = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkRawMarkdownBody = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkTableOfContents = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkTimeToRead = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkWordCountParagraphs = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkWordCountSentences = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkWordCountWords = 'childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___wordCount___words',
  ChildStrapiRecipeDirectionsTextnodeChildrenChildren = 'childStrapiRecipeDirectionsTextnode___children___children',
  ChildStrapiRecipeDirectionsTextnodeChildrenChildrenChildren = 'childStrapiRecipeDirectionsTextnode___children___children___children',
  ChildStrapiRecipeDirectionsTextnodeChildrenChildrenId = 'childStrapiRecipeDirectionsTextnode___children___children___id',
  ChildStrapiRecipeDirectionsTextnodeChildrenId = 'childStrapiRecipeDirectionsTextnode___children___id',
  ChildStrapiRecipeDirectionsTextnodeChildrenInternalContent = 'childStrapiRecipeDirectionsTextnode___children___internal___content',
  ChildStrapiRecipeDirectionsTextnodeChildrenInternalContentDigest = 'childStrapiRecipeDirectionsTextnode___children___internal___contentDigest',
  ChildStrapiRecipeDirectionsTextnodeChildrenInternalDescription = 'childStrapiRecipeDirectionsTextnode___children___internal___description',
  ChildStrapiRecipeDirectionsTextnodeChildrenInternalFieldOwners = 'childStrapiRecipeDirectionsTextnode___children___internal___fieldOwners',
  ChildStrapiRecipeDirectionsTextnodeChildrenInternalIgnoreType = 'childStrapiRecipeDirectionsTextnode___children___internal___ignoreType',
  ChildStrapiRecipeDirectionsTextnodeChildrenInternalMediaType = 'childStrapiRecipeDirectionsTextnode___children___internal___mediaType',
  ChildStrapiRecipeDirectionsTextnodeChildrenInternalOwner = 'childStrapiRecipeDirectionsTextnode___children___internal___owner',
  ChildStrapiRecipeDirectionsTextnodeChildrenInternalType = 'childStrapiRecipeDirectionsTextnode___children___internal___type',
  ChildStrapiRecipeDirectionsTextnodeChildrenParentChildren = 'childStrapiRecipeDirectionsTextnode___children___parent___children',
  ChildStrapiRecipeDirectionsTextnodeChildrenParentId = 'childStrapiRecipeDirectionsTextnode___children___parent___id',
  ChildStrapiRecipeDirectionsTextnodeDirections = 'childStrapiRecipeDirectionsTextnode___directions',
  ChildStrapiRecipeDirectionsTextnodeId = 'childStrapiRecipeDirectionsTextnode___id',
  ChildStrapiRecipeDirectionsTextnodeInternalContent = 'childStrapiRecipeDirectionsTextnode___internal___content',
  ChildStrapiRecipeDirectionsTextnodeInternalContentDigest = 'childStrapiRecipeDirectionsTextnode___internal___contentDigest',
  ChildStrapiRecipeDirectionsTextnodeInternalDescription = 'childStrapiRecipeDirectionsTextnode___internal___description',
  ChildStrapiRecipeDirectionsTextnodeInternalFieldOwners = 'childStrapiRecipeDirectionsTextnode___internal___fieldOwners',
  ChildStrapiRecipeDirectionsTextnodeInternalIgnoreType = 'childStrapiRecipeDirectionsTextnode___internal___ignoreType',
  ChildStrapiRecipeDirectionsTextnodeInternalMediaType = 'childStrapiRecipeDirectionsTextnode___internal___mediaType',
  ChildStrapiRecipeDirectionsTextnodeInternalOwner = 'childStrapiRecipeDirectionsTextnode___internal___owner',
  ChildStrapiRecipeDirectionsTextnodeInternalType = 'childStrapiRecipeDirectionsTextnode___internal___type',
  ChildStrapiRecipeDirectionsTextnodeParentChildren = 'childStrapiRecipeDirectionsTextnode___parent___children',
  ChildStrapiRecipeDirectionsTextnodeParentChildrenChildren = 'childStrapiRecipeDirectionsTextnode___parent___children___children',
  ChildStrapiRecipeDirectionsTextnodeParentChildrenId = 'childStrapiRecipeDirectionsTextnode___parent___children___id',
  ChildStrapiRecipeDirectionsTextnodeParentId = 'childStrapiRecipeDirectionsTextnode___parent___id',
  ChildStrapiRecipeDirectionsTextnodeParentInternalContent = 'childStrapiRecipeDirectionsTextnode___parent___internal___content',
  ChildStrapiRecipeDirectionsTextnodeParentInternalContentDigest = 'childStrapiRecipeDirectionsTextnode___parent___internal___contentDigest',
  ChildStrapiRecipeDirectionsTextnodeParentInternalDescription = 'childStrapiRecipeDirectionsTextnode___parent___internal___description',
  ChildStrapiRecipeDirectionsTextnodeParentInternalFieldOwners = 'childStrapiRecipeDirectionsTextnode___parent___internal___fieldOwners',
  ChildStrapiRecipeDirectionsTextnodeParentInternalIgnoreType = 'childStrapiRecipeDirectionsTextnode___parent___internal___ignoreType',
  ChildStrapiRecipeDirectionsTextnodeParentInternalMediaType = 'childStrapiRecipeDirectionsTextnode___parent___internal___mediaType',
  ChildStrapiRecipeDirectionsTextnodeParentInternalOwner = 'childStrapiRecipeDirectionsTextnode___parent___internal___owner',
  ChildStrapiRecipeDirectionsTextnodeParentInternalType = 'childStrapiRecipeDirectionsTextnode___parent___internal___type',
  ChildStrapiRecipeDirectionsTextnodeParentParentChildren = 'childStrapiRecipeDirectionsTextnode___parent___parent___children',
  ChildStrapiRecipeDirectionsTextnodeParentParentId = 'childStrapiRecipeDirectionsTextnode___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkChildren = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkChildrenChildren = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkChildrenId = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkExcerpt = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkExcerptAst = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___excerptAst',
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkFrontmatterTitle = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHeadings = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHeadingsDepth = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHeadingsId = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHeadingsValue = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHtml = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHtmlAst = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___htmlAst',
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkId = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkInternalContent = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkInternalContentDigest = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkInternalDescription = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkInternalFieldOwners = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkInternalIgnoreType = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkInternalMediaType = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkInternalOwner = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkInternalType = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkParentChildren = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkParentId = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkRawMarkdownBody = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkTableOfContents = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkTimeToRead = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkWordCountParagraphs = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkWordCountSentences = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkWordCountWords = 'childStrapiRecipeIngredientsTextnode___childMarkdownRemark___wordCount___words',
  ChildStrapiRecipeIngredientsTextnodeChildren = 'childStrapiRecipeIngredientsTextnode___children',
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemark = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkChildren = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkChildrenChildren = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkChildrenId = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkExcerpt = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkExcerptAst = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___excerptAst',
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkFrontmatterTitle = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHeadings = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHeadingsDepth = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHeadingsId = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHeadingsValue = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHtml = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHtmlAst = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___htmlAst',
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkId = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkInternalContent = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkInternalContentDigest = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkInternalDescription = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkInternalFieldOwners = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkInternalIgnoreType = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkInternalMediaType = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkInternalOwner = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkInternalType = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkParentChildren = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkParentId = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkRawMarkdownBody = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkTableOfContents = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkTimeToRead = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkWordCountParagraphs = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkWordCountSentences = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkWordCountWords = 'childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___wordCount___words',
  ChildStrapiRecipeIngredientsTextnodeChildrenChildren = 'childStrapiRecipeIngredientsTextnode___children___children',
  ChildStrapiRecipeIngredientsTextnodeChildrenChildrenChildren = 'childStrapiRecipeIngredientsTextnode___children___children___children',
  ChildStrapiRecipeIngredientsTextnodeChildrenChildrenId = 'childStrapiRecipeIngredientsTextnode___children___children___id',
  ChildStrapiRecipeIngredientsTextnodeChildrenId = 'childStrapiRecipeIngredientsTextnode___children___id',
  ChildStrapiRecipeIngredientsTextnodeChildrenInternalContent = 'childStrapiRecipeIngredientsTextnode___children___internal___content',
  ChildStrapiRecipeIngredientsTextnodeChildrenInternalContentDigest = 'childStrapiRecipeIngredientsTextnode___children___internal___contentDigest',
  ChildStrapiRecipeIngredientsTextnodeChildrenInternalDescription = 'childStrapiRecipeIngredientsTextnode___children___internal___description',
  ChildStrapiRecipeIngredientsTextnodeChildrenInternalFieldOwners = 'childStrapiRecipeIngredientsTextnode___children___internal___fieldOwners',
  ChildStrapiRecipeIngredientsTextnodeChildrenInternalIgnoreType = 'childStrapiRecipeIngredientsTextnode___children___internal___ignoreType',
  ChildStrapiRecipeIngredientsTextnodeChildrenInternalMediaType = 'childStrapiRecipeIngredientsTextnode___children___internal___mediaType',
  ChildStrapiRecipeIngredientsTextnodeChildrenInternalOwner = 'childStrapiRecipeIngredientsTextnode___children___internal___owner',
  ChildStrapiRecipeIngredientsTextnodeChildrenInternalType = 'childStrapiRecipeIngredientsTextnode___children___internal___type',
  ChildStrapiRecipeIngredientsTextnodeChildrenParentChildren = 'childStrapiRecipeIngredientsTextnode___children___parent___children',
  ChildStrapiRecipeIngredientsTextnodeChildrenParentId = 'childStrapiRecipeIngredientsTextnode___children___parent___id',
  ChildStrapiRecipeIngredientsTextnodeId = 'childStrapiRecipeIngredientsTextnode___id',
  ChildStrapiRecipeIngredientsTextnodeIngredients = 'childStrapiRecipeIngredientsTextnode___ingredients',
  ChildStrapiRecipeIngredientsTextnodeInternalContent = 'childStrapiRecipeIngredientsTextnode___internal___content',
  ChildStrapiRecipeIngredientsTextnodeInternalContentDigest = 'childStrapiRecipeIngredientsTextnode___internal___contentDigest',
  ChildStrapiRecipeIngredientsTextnodeInternalDescription = 'childStrapiRecipeIngredientsTextnode___internal___description',
  ChildStrapiRecipeIngredientsTextnodeInternalFieldOwners = 'childStrapiRecipeIngredientsTextnode___internal___fieldOwners',
  ChildStrapiRecipeIngredientsTextnodeInternalIgnoreType = 'childStrapiRecipeIngredientsTextnode___internal___ignoreType',
  ChildStrapiRecipeIngredientsTextnodeInternalMediaType = 'childStrapiRecipeIngredientsTextnode___internal___mediaType',
  ChildStrapiRecipeIngredientsTextnodeInternalOwner = 'childStrapiRecipeIngredientsTextnode___internal___owner',
  ChildStrapiRecipeIngredientsTextnodeInternalType = 'childStrapiRecipeIngredientsTextnode___internal___type',
  ChildStrapiRecipeIngredientsTextnodeParentChildren = 'childStrapiRecipeIngredientsTextnode___parent___children',
  ChildStrapiRecipeIngredientsTextnodeParentChildrenChildren = 'childStrapiRecipeIngredientsTextnode___parent___children___children',
  ChildStrapiRecipeIngredientsTextnodeParentChildrenId = 'childStrapiRecipeIngredientsTextnode___parent___children___id',
  ChildStrapiRecipeIngredientsTextnodeParentId = 'childStrapiRecipeIngredientsTextnode___parent___id',
  ChildStrapiRecipeIngredientsTextnodeParentInternalContent = 'childStrapiRecipeIngredientsTextnode___parent___internal___content',
  ChildStrapiRecipeIngredientsTextnodeParentInternalContentDigest = 'childStrapiRecipeIngredientsTextnode___parent___internal___contentDigest',
  ChildStrapiRecipeIngredientsTextnodeParentInternalDescription = 'childStrapiRecipeIngredientsTextnode___parent___internal___description',
  ChildStrapiRecipeIngredientsTextnodeParentInternalFieldOwners = 'childStrapiRecipeIngredientsTextnode___parent___internal___fieldOwners',
  ChildStrapiRecipeIngredientsTextnodeParentInternalIgnoreType = 'childStrapiRecipeIngredientsTextnode___parent___internal___ignoreType',
  ChildStrapiRecipeIngredientsTextnodeParentInternalMediaType = 'childStrapiRecipeIngredientsTextnode___parent___internal___mediaType',
  ChildStrapiRecipeIngredientsTextnodeParentInternalOwner = 'childStrapiRecipeIngredientsTextnode___parent___internal___owner',
  ChildStrapiRecipeIngredientsTextnodeParentInternalType = 'childStrapiRecipeIngredientsTextnode___parent___internal___type',
  ChildStrapiRecipeIngredientsTextnodeParentParentChildren = 'childStrapiRecipeIngredientsTextnode___parent___parent___children',
  ChildStrapiRecipeIngredientsTextnodeParentParentId = 'childStrapiRecipeIngredientsTextnode___parent___parent___id',
  Children = 'children',
  ChildrenStrapiRecipeDirectionsTextnode = 'childrenStrapiRecipeDirectionsTextnode',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkChildren = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkChildrenChildren = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkChildrenId = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkExcerpt = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkExcerptAst = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___excerptAst',
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkFrontmatterTitle = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHeadings = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHeadingsDepth = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHeadingsId = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHeadingsValue = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHtml = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHtmlAst = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___htmlAst',
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkId = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkInternalContent = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkInternalContentDigest = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkInternalDescription = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkInternalFieldOwners = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkInternalIgnoreType = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkInternalMediaType = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkInternalOwner = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkInternalType = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkParentChildren = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkParentId = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkRawMarkdownBody = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkTableOfContents = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkTimeToRead = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkWordCountParagraphs = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkWordCountSentences = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkWordCountWords = 'childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___wordCount___words',
  ChildrenStrapiRecipeDirectionsTextnodeChildren = 'childrenStrapiRecipeDirectionsTextnode___children',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemark = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkChildren = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkChildrenChildren = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkChildrenId = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkExcerpt = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkExcerptAst = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___excerptAst',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkFrontmatterTitle = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHeadings = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHeadingsDepth = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHeadingsId = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHeadingsValue = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHtml = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHtmlAst = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___htmlAst',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkId = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkInternalContent = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkInternalContentDigest = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkInternalDescription = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkInternalFieldOwners = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkInternalIgnoreType = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkInternalMediaType = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkInternalOwner = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkInternalType = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkParentChildren = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkParentId = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkRawMarkdownBody = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkTableOfContents = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkTimeToRead = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkWordCountParagraphs = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkWordCountSentences = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkWordCountWords = 'childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___wordCount___words',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenChildren = 'childrenStrapiRecipeDirectionsTextnode___children___children',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenChildrenChildren = 'childrenStrapiRecipeDirectionsTextnode___children___children___children',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenChildrenId = 'childrenStrapiRecipeDirectionsTextnode___children___children___id',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenId = 'childrenStrapiRecipeDirectionsTextnode___children___id',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenInternalContent = 'childrenStrapiRecipeDirectionsTextnode___children___internal___content',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenInternalContentDigest = 'childrenStrapiRecipeDirectionsTextnode___children___internal___contentDigest',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenInternalDescription = 'childrenStrapiRecipeDirectionsTextnode___children___internal___description',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenInternalFieldOwners = 'childrenStrapiRecipeDirectionsTextnode___children___internal___fieldOwners',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenInternalIgnoreType = 'childrenStrapiRecipeDirectionsTextnode___children___internal___ignoreType',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenInternalMediaType = 'childrenStrapiRecipeDirectionsTextnode___children___internal___mediaType',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenInternalOwner = 'childrenStrapiRecipeDirectionsTextnode___children___internal___owner',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenInternalType = 'childrenStrapiRecipeDirectionsTextnode___children___internal___type',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenParentChildren = 'childrenStrapiRecipeDirectionsTextnode___children___parent___children',
  ChildrenStrapiRecipeDirectionsTextnodeChildrenParentId = 'childrenStrapiRecipeDirectionsTextnode___children___parent___id',
  ChildrenStrapiRecipeDirectionsTextnodeDirections = 'childrenStrapiRecipeDirectionsTextnode___directions',
  ChildrenStrapiRecipeDirectionsTextnodeId = 'childrenStrapiRecipeDirectionsTextnode___id',
  ChildrenStrapiRecipeDirectionsTextnodeInternalContent = 'childrenStrapiRecipeDirectionsTextnode___internal___content',
  ChildrenStrapiRecipeDirectionsTextnodeInternalContentDigest = 'childrenStrapiRecipeDirectionsTextnode___internal___contentDigest',
  ChildrenStrapiRecipeDirectionsTextnodeInternalDescription = 'childrenStrapiRecipeDirectionsTextnode___internal___description',
  ChildrenStrapiRecipeDirectionsTextnodeInternalFieldOwners = 'childrenStrapiRecipeDirectionsTextnode___internal___fieldOwners',
  ChildrenStrapiRecipeDirectionsTextnodeInternalIgnoreType = 'childrenStrapiRecipeDirectionsTextnode___internal___ignoreType',
  ChildrenStrapiRecipeDirectionsTextnodeInternalMediaType = 'childrenStrapiRecipeDirectionsTextnode___internal___mediaType',
  ChildrenStrapiRecipeDirectionsTextnodeInternalOwner = 'childrenStrapiRecipeDirectionsTextnode___internal___owner',
  ChildrenStrapiRecipeDirectionsTextnodeInternalType = 'childrenStrapiRecipeDirectionsTextnode___internal___type',
  ChildrenStrapiRecipeDirectionsTextnodeParentChildren = 'childrenStrapiRecipeDirectionsTextnode___parent___children',
  ChildrenStrapiRecipeDirectionsTextnodeParentChildrenChildren = 'childrenStrapiRecipeDirectionsTextnode___parent___children___children',
  ChildrenStrapiRecipeDirectionsTextnodeParentChildrenId = 'childrenStrapiRecipeDirectionsTextnode___parent___children___id',
  ChildrenStrapiRecipeDirectionsTextnodeParentId = 'childrenStrapiRecipeDirectionsTextnode___parent___id',
  ChildrenStrapiRecipeDirectionsTextnodeParentInternalContent = 'childrenStrapiRecipeDirectionsTextnode___parent___internal___content',
  ChildrenStrapiRecipeDirectionsTextnodeParentInternalContentDigest = 'childrenStrapiRecipeDirectionsTextnode___parent___internal___contentDigest',
  ChildrenStrapiRecipeDirectionsTextnodeParentInternalDescription = 'childrenStrapiRecipeDirectionsTextnode___parent___internal___description',
  ChildrenStrapiRecipeDirectionsTextnodeParentInternalFieldOwners = 'childrenStrapiRecipeDirectionsTextnode___parent___internal___fieldOwners',
  ChildrenStrapiRecipeDirectionsTextnodeParentInternalIgnoreType = 'childrenStrapiRecipeDirectionsTextnode___parent___internal___ignoreType',
  ChildrenStrapiRecipeDirectionsTextnodeParentInternalMediaType = 'childrenStrapiRecipeDirectionsTextnode___parent___internal___mediaType',
  ChildrenStrapiRecipeDirectionsTextnodeParentInternalOwner = 'childrenStrapiRecipeDirectionsTextnode___parent___internal___owner',
  ChildrenStrapiRecipeDirectionsTextnodeParentInternalType = 'childrenStrapiRecipeDirectionsTextnode___parent___internal___type',
  ChildrenStrapiRecipeDirectionsTextnodeParentParentChildren = 'childrenStrapiRecipeDirectionsTextnode___parent___parent___children',
  ChildrenStrapiRecipeDirectionsTextnodeParentParentId = 'childrenStrapiRecipeDirectionsTextnode___parent___parent___id',
  ChildrenStrapiRecipeIngredientsTextnode = 'childrenStrapiRecipeIngredientsTextnode',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkChildren = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkChildrenChildren = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkChildrenId = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkExcerpt = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkExcerptAst = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___excerptAst',
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkFrontmatterTitle = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHeadings = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHeadingsDepth = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHeadingsId = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHeadingsValue = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHtml = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHtmlAst = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___htmlAst',
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkId = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkInternalContent = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkInternalContentDigest = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkInternalDescription = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkInternalFieldOwners = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkInternalIgnoreType = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkInternalMediaType = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkInternalOwner = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkInternalType = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkParentChildren = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkParentId = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkRawMarkdownBody = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkTableOfContents = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkTimeToRead = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkWordCountParagraphs = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkWordCountSentences = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkWordCountWords = 'childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___wordCount___words',
  ChildrenStrapiRecipeIngredientsTextnodeChildren = 'childrenStrapiRecipeIngredientsTextnode___children',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemark = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkChildren = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkChildrenChildren = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkChildrenId = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkExcerpt = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkExcerptAst = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___excerptAst',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkFrontmatterTitle = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHeadings = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHeadingsDepth = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHeadingsId = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHeadingsValue = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHtml = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHtmlAst = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___htmlAst',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkId = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkInternalContent = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkInternalContentDigest = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkInternalDescription = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkInternalFieldOwners = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkInternalIgnoreType = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkInternalMediaType = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkInternalOwner = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkInternalType = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkParentChildren = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkParentId = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkRawMarkdownBody = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkTableOfContents = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkTimeToRead = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkWordCountParagraphs = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkWordCountSentences = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkWordCountWords = 'childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___wordCount___words',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenChildren = 'childrenStrapiRecipeIngredientsTextnode___children___children',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenChildrenChildren = 'childrenStrapiRecipeIngredientsTextnode___children___children___children',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenChildrenId = 'childrenStrapiRecipeIngredientsTextnode___children___children___id',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenId = 'childrenStrapiRecipeIngredientsTextnode___children___id',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenInternalContent = 'childrenStrapiRecipeIngredientsTextnode___children___internal___content',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenInternalContentDigest = 'childrenStrapiRecipeIngredientsTextnode___children___internal___contentDigest',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenInternalDescription = 'childrenStrapiRecipeIngredientsTextnode___children___internal___description',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenInternalFieldOwners = 'childrenStrapiRecipeIngredientsTextnode___children___internal___fieldOwners',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenInternalIgnoreType = 'childrenStrapiRecipeIngredientsTextnode___children___internal___ignoreType',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenInternalMediaType = 'childrenStrapiRecipeIngredientsTextnode___children___internal___mediaType',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenInternalOwner = 'childrenStrapiRecipeIngredientsTextnode___children___internal___owner',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenInternalType = 'childrenStrapiRecipeIngredientsTextnode___children___internal___type',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenParentChildren = 'childrenStrapiRecipeIngredientsTextnode___children___parent___children',
  ChildrenStrapiRecipeIngredientsTextnodeChildrenParentId = 'childrenStrapiRecipeIngredientsTextnode___children___parent___id',
  ChildrenStrapiRecipeIngredientsTextnodeId = 'childrenStrapiRecipeIngredientsTextnode___id',
  ChildrenStrapiRecipeIngredientsTextnodeIngredients = 'childrenStrapiRecipeIngredientsTextnode___ingredients',
  ChildrenStrapiRecipeIngredientsTextnodeInternalContent = 'childrenStrapiRecipeIngredientsTextnode___internal___content',
  ChildrenStrapiRecipeIngredientsTextnodeInternalContentDigest = 'childrenStrapiRecipeIngredientsTextnode___internal___contentDigest',
  ChildrenStrapiRecipeIngredientsTextnodeInternalDescription = 'childrenStrapiRecipeIngredientsTextnode___internal___description',
  ChildrenStrapiRecipeIngredientsTextnodeInternalFieldOwners = 'childrenStrapiRecipeIngredientsTextnode___internal___fieldOwners',
  ChildrenStrapiRecipeIngredientsTextnodeInternalIgnoreType = 'childrenStrapiRecipeIngredientsTextnode___internal___ignoreType',
  ChildrenStrapiRecipeIngredientsTextnodeInternalMediaType = 'childrenStrapiRecipeIngredientsTextnode___internal___mediaType',
  ChildrenStrapiRecipeIngredientsTextnodeInternalOwner = 'childrenStrapiRecipeIngredientsTextnode___internal___owner',
  ChildrenStrapiRecipeIngredientsTextnodeInternalType = 'childrenStrapiRecipeIngredientsTextnode___internal___type',
  ChildrenStrapiRecipeIngredientsTextnodeParentChildren = 'childrenStrapiRecipeIngredientsTextnode___parent___children',
  ChildrenStrapiRecipeIngredientsTextnodeParentChildrenChildren = 'childrenStrapiRecipeIngredientsTextnode___parent___children___children',
  ChildrenStrapiRecipeIngredientsTextnodeParentChildrenId = 'childrenStrapiRecipeIngredientsTextnode___parent___children___id',
  ChildrenStrapiRecipeIngredientsTextnodeParentId = 'childrenStrapiRecipeIngredientsTextnode___parent___id',
  ChildrenStrapiRecipeIngredientsTextnodeParentInternalContent = 'childrenStrapiRecipeIngredientsTextnode___parent___internal___content',
  ChildrenStrapiRecipeIngredientsTextnodeParentInternalContentDigest = 'childrenStrapiRecipeIngredientsTextnode___parent___internal___contentDigest',
  ChildrenStrapiRecipeIngredientsTextnodeParentInternalDescription = 'childrenStrapiRecipeIngredientsTextnode___parent___internal___description',
  ChildrenStrapiRecipeIngredientsTextnodeParentInternalFieldOwners = 'childrenStrapiRecipeIngredientsTextnode___parent___internal___fieldOwners',
  ChildrenStrapiRecipeIngredientsTextnodeParentInternalIgnoreType = 'childrenStrapiRecipeIngredientsTextnode___parent___internal___ignoreType',
  ChildrenStrapiRecipeIngredientsTextnodeParentInternalMediaType = 'childrenStrapiRecipeIngredientsTextnode___parent___internal___mediaType',
  ChildrenStrapiRecipeIngredientsTextnodeParentInternalOwner = 'childrenStrapiRecipeIngredientsTextnode___parent___internal___owner',
  ChildrenStrapiRecipeIngredientsTextnodeParentInternalType = 'childrenStrapiRecipeIngredientsTextnode___parent___internal___type',
  ChildrenStrapiRecipeIngredientsTextnodeParentParentChildren = 'childrenStrapiRecipeIngredientsTextnode___parent___parent___children',
  ChildrenStrapiRecipeIngredientsTextnodeParentParentId = 'childrenStrapiRecipeIngredientsTextnode___parent___parent___id',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CoverChildren = 'cover___children',
  CoverChildrenChildren = 'cover___children___children',
  CoverChildrenChildrenChildren = 'cover___children___children___children',
  CoverChildrenChildrenId = 'cover___children___children___id',
  CoverChildrenId = 'cover___children___id',
  CoverChildrenInternalContent = 'cover___children___internal___content',
  CoverChildrenInternalContentDigest = 'cover___children___internal___contentDigest',
  CoverChildrenInternalDescription = 'cover___children___internal___description',
  CoverChildrenInternalFieldOwners = 'cover___children___internal___fieldOwners',
  CoverChildrenInternalIgnoreType = 'cover___children___internal___ignoreType',
  CoverChildrenInternalMediaType = 'cover___children___internal___mediaType',
  CoverChildrenInternalOwner = 'cover___children___internal___owner',
  CoverChildrenInternalType = 'cover___children___internal___type',
  CoverChildrenParentChildren = 'cover___children___parent___children',
  CoverChildrenParentId = 'cover___children___parent___id',
  CoverCreatedAt = 'cover___createdAt',
  CoverExt = 'cover___ext',
  CoverFormatsThumbnailExt = 'cover___formats___thumbnail___ext',
  CoverFormatsThumbnailHash = 'cover___formats___thumbnail___hash',
  CoverFormatsThumbnailHeight = 'cover___formats___thumbnail___height',
  CoverFormatsThumbnailMime = 'cover___formats___thumbnail___mime',
  CoverFormatsThumbnailName = 'cover___formats___thumbnail___name',
  CoverFormatsThumbnailSize = 'cover___formats___thumbnail___size',
  CoverFormatsThumbnailUrl = 'cover___formats___thumbnail___url',
  CoverFormatsThumbnailWidth = 'cover___formats___thumbnail___width',
  CoverHash = 'cover___hash',
  CoverHeight = 'cover___height',
  CoverId = 'cover___id',
  CoverInternalContent = 'cover___internal___content',
  CoverInternalContentDigest = 'cover___internal___contentDigest',
  CoverInternalDescription = 'cover___internal___description',
  CoverInternalFieldOwners = 'cover___internal___fieldOwners',
  CoverInternalIgnoreType = 'cover___internal___ignoreType',
  CoverInternalMediaType = 'cover___internal___mediaType',
  CoverInternalOwner = 'cover___internal___owner',
  CoverInternalType = 'cover___internal___type',
  CoverLocalFileAbsolutePath = 'cover___localFile___absolutePath',
  CoverLocalFileAccessTime = 'cover___localFile___accessTime',
  CoverLocalFileAtime = 'cover___localFile___atime',
  CoverLocalFileAtimeMs = 'cover___localFile___atimeMs',
  CoverLocalFileBase = 'cover___localFile___base',
  CoverLocalFileBirthTime = 'cover___localFile___birthTime',
  CoverLocalFileBirthtime = 'cover___localFile___birthtime',
  CoverLocalFileBirthtimeMs = 'cover___localFile___birthtimeMs',
  CoverLocalFileBlksize = 'cover___localFile___blksize',
  CoverLocalFileBlocks = 'cover___localFile___blocks',
  CoverLocalFileChangeTime = 'cover___localFile___changeTime',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  CoverLocalFileChildImageSharpChildren = 'cover___localFile___childImageSharp___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  CoverLocalFileChildImageSharpGatsbyImageData = 'cover___localFile___childImageSharp___gatsbyImageData',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  CoverLocalFileChildImageSharpId = 'cover___localFile___childImageSharp___id',
  CoverLocalFileChildren = 'cover___localFile___children',
  CoverLocalFileChildrenImageSharp = 'cover___localFile___childrenImageSharp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  CoverLocalFileChildrenImageSharpChildren = 'cover___localFile___childrenImageSharp___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  CoverLocalFileChildrenImageSharpGatsbyImageData = 'cover___localFile___childrenImageSharp___gatsbyImageData',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  CoverLocalFileChildrenImageSharpId = 'cover___localFile___childrenImageSharp___id',
  CoverLocalFileChildrenChildren = 'cover___localFile___children___children',
  CoverLocalFileChildrenId = 'cover___localFile___children___id',
  CoverLocalFileCtime = 'cover___localFile___ctime',
  CoverLocalFileCtimeMs = 'cover___localFile___ctimeMs',
  CoverLocalFileDev = 'cover___localFile___dev',
  CoverLocalFileDir = 'cover___localFile___dir',
  CoverLocalFileExt = 'cover___localFile___ext',
  CoverLocalFileExtension = 'cover___localFile___extension',
  CoverLocalFileGid = 'cover___localFile___gid',
  CoverLocalFileId = 'cover___localFile___id',
  CoverLocalFileIno = 'cover___localFile___ino',
  CoverLocalFileInternalContent = 'cover___localFile___internal___content',
  CoverLocalFileInternalContentDigest = 'cover___localFile___internal___contentDigest',
  CoverLocalFileInternalDescription = 'cover___localFile___internal___description',
  CoverLocalFileInternalFieldOwners = 'cover___localFile___internal___fieldOwners',
  CoverLocalFileInternalIgnoreType = 'cover___localFile___internal___ignoreType',
  CoverLocalFileInternalMediaType = 'cover___localFile___internal___mediaType',
  CoverLocalFileInternalOwner = 'cover___localFile___internal___owner',
  CoverLocalFileInternalType = 'cover___localFile___internal___type',
  CoverLocalFileMode = 'cover___localFile___mode',
  CoverLocalFileModifiedTime = 'cover___localFile___modifiedTime',
  CoverLocalFileMtime = 'cover___localFile___mtime',
  CoverLocalFileMtimeMs = 'cover___localFile___mtimeMs',
  CoverLocalFileName = 'cover___localFile___name',
  CoverLocalFileNlink = 'cover___localFile___nlink',
  CoverLocalFileParentChildren = 'cover___localFile___parent___children',
  CoverLocalFileParentId = 'cover___localFile___parent___id',
  CoverLocalFilePrettySize = 'cover___localFile___prettySize',
  CoverLocalFileRdev = 'cover___localFile___rdev',
  CoverLocalFileRelativeDirectory = 'cover___localFile___relativeDirectory',
  CoverLocalFileRelativePath = 'cover___localFile___relativePath',
  CoverLocalFileRoot = 'cover___localFile___root',
  CoverLocalFileSize = 'cover___localFile___size',
  CoverLocalFileSourceInstanceName = 'cover___localFile___sourceInstanceName',
  CoverLocalFileUid = 'cover___localFile___uid',
  CoverLocalFileUrl = 'cover___localFile___url',
  CoverMime = 'cover___mime',
  CoverName = 'cover___name',
  CoverParentChildren = 'cover___parent___children',
  CoverParentChildrenChildren = 'cover___parent___children___children',
  CoverParentChildrenId = 'cover___parent___children___id',
  CoverParentId = 'cover___parent___id',
  CoverParentInternalContent = 'cover___parent___internal___content',
  CoverParentInternalContentDigest = 'cover___parent___internal___contentDigest',
  CoverParentInternalDescription = 'cover___parent___internal___description',
  CoverParentInternalFieldOwners = 'cover___parent___internal___fieldOwners',
  CoverParentInternalIgnoreType = 'cover___parent___internal___ignoreType',
  CoverParentInternalMediaType = 'cover___parent___internal___mediaType',
  CoverParentInternalOwner = 'cover___parent___internal___owner',
  CoverParentInternalType = 'cover___parent___internal___type',
  CoverParentParentChildren = 'cover___parent___parent___children',
  CoverParentParentId = 'cover___parent___parent___id',
  CoverSize = 'cover___size',
  CoverStrapiId = 'cover___strapi_id',
  CoverUpdatedAt = 'cover___updatedAt',
  CoverUrl = 'cover___url',
  CoverWidth = 'cover___width',
  CreatedAt = 'createdAt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildMarkdownRemarkChildren = 'directions___data___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildMarkdownRemarkExcerpt = 'directions___data___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildMarkdownRemarkExcerptAst = 'directions___data___childMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildMarkdownRemarkHeadings = 'directions___data___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildMarkdownRemarkHtml = 'directions___data___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildMarkdownRemarkHtmlAst = 'directions___data___childMarkdownRemark___htmlAst',
  DirectionsDataChildMarkdownRemarkId = 'directions___data___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildMarkdownRemarkRawMarkdownBody = 'directions___data___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildMarkdownRemarkTableOfContents = 'directions___data___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildMarkdownRemarkTimeToRead = 'directions___data___childMarkdownRemark___timeToRead',
  DirectionsDataChildren = 'directions___data___children',
  DirectionsDataChildrenMarkdownRemark = 'directions___data___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildrenMarkdownRemarkChildren = 'directions___data___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildrenMarkdownRemarkExcerpt = 'directions___data___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildrenMarkdownRemarkExcerptAst = 'directions___data___childrenMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildrenMarkdownRemarkHeadings = 'directions___data___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildrenMarkdownRemarkHtml = 'directions___data___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildrenMarkdownRemarkHtmlAst = 'directions___data___childrenMarkdownRemark___htmlAst',
  DirectionsDataChildrenMarkdownRemarkId = 'directions___data___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildrenMarkdownRemarkRawMarkdownBody = 'directions___data___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildrenMarkdownRemarkTableOfContents = 'directions___data___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DirectionsDataChildrenMarkdownRemarkTimeToRead = 'directions___data___childrenMarkdownRemark___timeToRead',
  DirectionsDataChildrenChildren = 'directions___data___children___children',
  DirectionsDataChildrenId = 'directions___data___children___id',
  DirectionsDataDirections = 'directions___data___directions',
  DirectionsDataId = 'directions___data___id',
  DirectionsDataInternalContent = 'directions___data___internal___content',
  DirectionsDataInternalContentDigest = 'directions___data___internal___contentDigest',
  DirectionsDataInternalDescription = 'directions___data___internal___description',
  DirectionsDataInternalFieldOwners = 'directions___data___internal___fieldOwners',
  DirectionsDataInternalIgnoreType = 'directions___data___internal___ignoreType',
  DirectionsDataInternalMediaType = 'directions___data___internal___mediaType',
  DirectionsDataInternalOwner = 'directions___data___internal___owner',
  DirectionsDataInternalType = 'directions___data___internal___type',
  DirectionsDataParentChildren = 'directions___data___parent___children',
  DirectionsDataParentId = 'directions___data___parent___id',
  Gallery = 'gallery',
  GalleryChildren = 'gallery___children',
  GalleryChildrenChildren = 'gallery___children___children',
  GalleryChildrenChildrenChildren = 'gallery___children___children___children',
  GalleryChildrenChildrenId = 'gallery___children___children___id',
  GalleryChildrenId = 'gallery___children___id',
  GalleryChildrenInternalContent = 'gallery___children___internal___content',
  GalleryChildrenInternalContentDigest = 'gallery___children___internal___contentDigest',
  GalleryChildrenInternalDescription = 'gallery___children___internal___description',
  GalleryChildrenInternalFieldOwners = 'gallery___children___internal___fieldOwners',
  GalleryChildrenInternalIgnoreType = 'gallery___children___internal___ignoreType',
  GalleryChildrenInternalMediaType = 'gallery___children___internal___mediaType',
  GalleryChildrenInternalOwner = 'gallery___children___internal___owner',
  GalleryChildrenInternalType = 'gallery___children___internal___type',
  GalleryChildrenParentChildren = 'gallery___children___parent___children',
  GalleryChildrenParentId = 'gallery___children___parent___id',
  GalleryCreatedAt = 'gallery___createdAt',
  GalleryExt = 'gallery___ext',
  GalleryFormatsThumbnailExt = 'gallery___formats___thumbnail___ext',
  GalleryFormatsThumbnailHash = 'gallery___formats___thumbnail___hash',
  GalleryFormatsThumbnailHeight = 'gallery___formats___thumbnail___height',
  GalleryFormatsThumbnailMime = 'gallery___formats___thumbnail___mime',
  GalleryFormatsThumbnailName = 'gallery___formats___thumbnail___name',
  GalleryFormatsThumbnailSize = 'gallery___formats___thumbnail___size',
  GalleryFormatsThumbnailUrl = 'gallery___formats___thumbnail___url',
  GalleryFormatsThumbnailWidth = 'gallery___formats___thumbnail___width',
  GalleryHash = 'gallery___hash',
  GalleryHeight = 'gallery___height',
  GalleryId = 'gallery___id',
  GalleryInternalContent = 'gallery___internal___content',
  GalleryInternalContentDigest = 'gallery___internal___contentDigest',
  GalleryInternalDescription = 'gallery___internal___description',
  GalleryInternalFieldOwners = 'gallery___internal___fieldOwners',
  GalleryInternalIgnoreType = 'gallery___internal___ignoreType',
  GalleryInternalMediaType = 'gallery___internal___mediaType',
  GalleryInternalOwner = 'gallery___internal___owner',
  GalleryInternalType = 'gallery___internal___type',
  GalleryLocalFileAbsolutePath = 'gallery___localFile___absolutePath',
  GalleryLocalFileAccessTime = 'gallery___localFile___accessTime',
  GalleryLocalFileAtime = 'gallery___localFile___atime',
  GalleryLocalFileAtimeMs = 'gallery___localFile___atimeMs',
  GalleryLocalFileBase = 'gallery___localFile___base',
  GalleryLocalFileBirthTime = 'gallery___localFile___birthTime',
  GalleryLocalFileBirthtime = 'gallery___localFile___birthtime',
  GalleryLocalFileBirthtimeMs = 'gallery___localFile___birthtimeMs',
  GalleryLocalFileBlksize = 'gallery___localFile___blksize',
  GalleryLocalFileBlocks = 'gallery___localFile___blocks',
  GalleryLocalFileChangeTime = 'gallery___localFile___changeTime',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GalleryLocalFileChildImageSharpChildren = 'gallery___localFile___childImageSharp___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GalleryLocalFileChildImageSharpGatsbyImageData = 'gallery___localFile___childImageSharp___gatsbyImageData',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GalleryLocalFileChildImageSharpId = 'gallery___localFile___childImageSharp___id',
  GalleryLocalFileChildren = 'gallery___localFile___children',
  GalleryLocalFileChildrenImageSharp = 'gallery___localFile___childrenImageSharp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GalleryLocalFileChildrenImageSharpChildren = 'gallery___localFile___childrenImageSharp___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GalleryLocalFileChildrenImageSharpGatsbyImageData = 'gallery___localFile___childrenImageSharp___gatsbyImageData',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GalleryLocalFileChildrenImageSharpId = 'gallery___localFile___childrenImageSharp___id',
  GalleryLocalFileChildrenChildren = 'gallery___localFile___children___children',
  GalleryLocalFileChildrenId = 'gallery___localFile___children___id',
  GalleryLocalFileCtime = 'gallery___localFile___ctime',
  GalleryLocalFileCtimeMs = 'gallery___localFile___ctimeMs',
  GalleryLocalFileDev = 'gallery___localFile___dev',
  GalleryLocalFileDir = 'gallery___localFile___dir',
  GalleryLocalFileExt = 'gallery___localFile___ext',
  GalleryLocalFileExtension = 'gallery___localFile___extension',
  GalleryLocalFileGid = 'gallery___localFile___gid',
  GalleryLocalFileId = 'gallery___localFile___id',
  GalleryLocalFileIno = 'gallery___localFile___ino',
  GalleryLocalFileInternalContent = 'gallery___localFile___internal___content',
  GalleryLocalFileInternalContentDigest = 'gallery___localFile___internal___contentDigest',
  GalleryLocalFileInternalDescription = 'gallery___localFile___internal___description',
  GalleryLocalFileInternalFieldOwners = 'gallery___localFile___internal___fieldOwners',
  GalleryLocalFileInternalIgnoreType = 'gallery___localFile___internal___ignoreType',
  GalleryLocalFileInternalMediaType = 'gallery___localFile___internal___mediaType',
  GalleryLocalFileInternalOwner = 'gallery___localFile___internal___owner',
  GalleryLocalFileInternalType = 'gallery___localFile___internal___type',
  GalleryLocalFileMode = 'gallery___localFile___mode',
  GalleryLocalFileModifiedTime = 'gallery___localFile___modifiedTime',
  GalleryLocalFileMtime = 'gallery___localFile___mtime',
  GalleryLocalFileMtimeMs = 'gallery___localFile___mtimeMs',
  GalleryLocalFileName = 'gallery___localFile___name',
  GalleryLocalFileNlink = 'gallery___localFile___nlink',
  GalleryLocalFileParentChildren = 'gallery___localFile___parent___children',
  GalleryLocalFileParentId = 'gallery___localFile___parent___id',
  GalleryLocalFilePrettySize = 'gallery___localFile___prettySize',
  GalleryLocalFileRdev = 'gallery___localFile___rdev',
  GalleryLocalFileRelativeDirectory = 'gallery___localFile___relativeDirectory',
  GalleryLocalFileRelativePath = 'gallery___localFile___relativePath',
  GalleryLocalFileRoot = 'gallery___localFile___root',
  GalleryLocalFileSize = 'gallery___localFile___size',
  GalleryLocalFileSourceInstanceName = 'gallery___localFile___sourceInstanceName',
  GalleryLocalFileUid = 'gallery___localFile___uid',
  GalleryLocalFileUrl = 'gallery___localFile___url',
  GalleryMime = 'gallery___mime',
  GalleryName = 'gallery___name',
  GalleryParentChildren = 'gallery___parent___children',
  GalleryParentChildrenChildren = 'gallery___parent___children___children',
  GalleryParentChildrenId = 'gallery___parent___children___id',
  GalleryParentId = 'gallery___parent___id',
  GalleryParentInternalContent = 'gallery___parent___internal___content',
  GalleryParentInternalContentDigest = 'gallery___parent___internal___contentDigest',
  GalleryParentInternalDescription = 'gallery___parent___internal___description',
  GalleryParentInternalFieldOwners = 'gallery___parent___internal___fieldOwners',
  GalleryParentInternalIgnoreType = 'gallery___parent___internal___ignoreType',
  GalleryParentInternalMediaType = 'gallery___parent___internal___mediaType',
  GalleryParentInternalOwner = 'gallery___parent___internal___owner',
  GalleryParentInternalType = 'gallery___parent___internal___type',
  GalleryParentParentChildren = 'gallery___parent___parent___children',
  GalleryParentParentId = 'gallery___parent___parent___id',
  GallerySize = 'gallery___size',
  GalleryStrapiId = 'gallery___strapi_id',
  GalleryUpdatedAt = 'gallery___updatedAt',
  GalleryUrl = 'gallery___url',
  GalleryWidth = 'gallery___width',
  Headline = 'headline',
  Id = 'id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildMarkdownRemarkChildren = 'ingredients___data___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildMarkdownRemarkExcerpt = 'ingredients___data___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildMarkdownRemarkExcerptAst = 'ingredients___data___childMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildMarkdownRemarkHeadings = 'ingredients___data___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildMarkdownRemarkHtml = 'ingredients___data___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildMarkdownRemarkHtmlAst = 'ingredients___data___childMarkdownRemark___htmlAst',
  IngredientsDataChildMarkdownRemarkId = 'ingredients___data___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildMarkdownRemarkRawMarkdownBody = 'ingredients___data___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildMarkdownRemarkTableOfContents = 'ingredients___data___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildMarkdownRemarkTimeToRead = 'ingredients___data___childMarkdownRemark___timeToRead',
  IngredientsDataChildren = 'ingredients___data___children',
  IngredientsDataChildrenMarkdownRemark = 'ingredients___data___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildrenMarkdownRemarkChildren = 'ingredients___data___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildrenMarkdownRemarkExcerpt = 'ingredients___data___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildrenMarkdownRemarkExcerptAst = 'ingredients___data___childrenMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildrenMarkdownRemarkHeadings = 'ingredients___data___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildrenMarkdownRemarkHtml = 'ingredients___data___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildrenMarkdownRemarkHtmlAst = 'ingredients___data___childrenMarkdownRemark___htmlAst',
  IngredientsDataChildrenMarkdownRemarkId = 'ingredients___data___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildrenMarkdownRemarkRawMarkdownBody = 'ingredients___data___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildrenMarkdownRemarkTableOfContents = 'ingredients___data___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IngredientsDataChildrenMarkdownRemarkTimeToRead = 'ingredients___data___childrenMarkdownRemark___timeToRead',
  IngredientsDataChildrenChildren = 'ingredients___data___children___children',
  IngredientsDataChildrenId = 'ingredients___data___children___id',
  IngredientsDataId = 'ingredients___data___id',
  IngredientsDataIngredients = 'ingredients___data___ingredients',
  IngredientsDataInternalContent = 'ingredients___data___internal___content',
  IngredientsDataInternalContentDigest = 'ingredients___data___internal___contentDigest',
  IngredientsDataInternalDescription = 'ingredients___data___internal___description',
  IngredientsDataInternalFieldOwners = 'ingredients___data___internal___fieldOwners',
  IngredientsDataInternalIgnoreType = 'ingredients___data___internal___ignoreType',
  IngredientsDataInternalMediaType = 'ingredients___data___internal___mediaType',
  IngredientsDataInternalOwner = 'ingredients___data___internal___owner',
  IngredientsDataInternalType = 'ingredients___data___internal___type',
  IngredientsDataParentChildren = 'ingredients___data___parent___children',
  IngredientsDataParentId = 'ingredients___data___parent___id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PreparationTime = 'preparationTime',
  PublishedAt = 'publishedAt',
  SeoChildren = 'seo___children',
  SeoChildrenChildren = 'seo___children___children',
  SeoChildrenChildrenChildren = 'seo___children___children___children',
  SeoChildrenChildrenId = 'seo___children___children___id',
  SeoChildrenId = 'seo___children___id',
  SeoChildrenInternalContent = 'seo___children___internal___content',
  SeoChildrenInternalContentDigest = 'seo___children___internal___contentDigest',
  SeoChildrenInternalDescription = 'seo___children___internal___description',
  SeoChildrenInternalFieldOwners = 'seo___children___internal___fieldOwners',
  SeoChildrenInternalIgnoreType = 'seo___children___internal___ignoreType',
  SeoChildrenInternalMediaType = 'seo___children___internal___mediaType',
  SeoChildrenInternalOwner = 'seo___children___internal___owner',
  SeoChildrenInternalType = 'seo___children___internal___type',
  SeoChildrenParentChildren = 'seo___children___parent___children',
  SeoChildrenParentId = 'seo___children___parent___id',
  SeoHtmlDescription = 'seo___htmlDescription',
  SeoHtmlTitle = 'seo___htmlTitle',
  SeoId = 'seo___id',
  SeoInternalContent = 'seo___internal___content',
  SeoInternalContentDigest = 'seo___internal___contentDigest',
  SeoInternalDescription = 'seo___internal___description',
  SeoInternalFieldOwners = 'seo___internal___fieldOwners',
  SeoInternalIgnoreType = 'seo___internal___ignoreType',
  SeoInternalMediaType = 'seo___internal___mediaType',
  SeoInternalOwner = 'seo___internal___owner',
  SeoInternalType = 'seo___internal___type',
  SeoParentChildren = 'seo___parent___children',
  SeoParentChildrenChildren = 'seo___parent___children___children',
  SeoParentChildrenId = 'seo___parent___children___id',
  SeoParentId = 'seo___parent___id',
  SeoParentInternalContent = 'seo___parent___internal___content',
  SeoParentInternalContentDigest = 'seo___parent___internal___contentDigest',
  SeoParentInternalDescription = 'seo___parent___internal___description',
  SeoParentInternalFieldOwners = 'seo___parent___internal___fieldOwners',
  SeoParentInternalIgnoreType = 'seo___parent___internal___ignoreType',
  SeoParentInternalMediaType = 'seo___parent___internal___mediaType',
  SeoParentInternalOwner = 'seo___parent___internal___owner',
  SeoParentInternalType = 'seo___parent___internal___type',
  SeoParentParentChildren = 'seo___parent___parent___children',
  SeoParentParentId = 'seo___parent___parent___id',
  SeoStrapiId = 'seo___strapi_id',
  Slug = 'slug',
  StrapiId = 'strapi_id',
  Tags = 'tags',
  TagsChildren = 'tags___children',
  TagsChildrenChildren = 'tags___children___children',
  TagsChildrenChildrenChildren = 'tags___children___children___children',
  TagsChildrenChildrenId = 'tags___children___children___id',
  TagsChildrenId = 'tags___children___id',
  TagsChildrenInternalContent = 'tags___children___internal___content',
  TagsChildrenInternalContentDigest = 'tags___children___internal___contentDigest',
  TagsChildrenInternalDescription = 'tags___children___internal___description',
  TagsChildrenInternalFieldOwners = 'tags___children___internal___fieldOwners',
  TagsChildrenInternalIgnoreType = 'tags___children___internal___ignoreType',
  TagsChildrenInternalMediaType = 'tags___children___internal___mediaType',
  TagsChildrenInternalOwner = 'tags___children___internal___owner',
  TagsChildrenInternalType = 'tags___children___internal___type',
  TagsChildrenParentChildren = 'tags___children___parent___children',
  TagsChildrenParentId = 'tags___children___parent___id',
  TagsCreatedAt = 'tags___createdAt',
  TagsId = 'tags___id',
  TagsInternalContent = 'tags___internal___content',
  TagsInternalContentDigest = 'tags___internal___contentDigest',
  TagsInternalDescription = 'tags___internal___description',
  TagsInternalFieldOwners = 'tags___internal___fieldOwners',
  TagsInternalIgnoreType = 'tags___internal___ignoreType',
  TagsInternalMediaType = 'tags___internal___mediaType',
  TagsInternalOwner = 'tags___internal___owner',
  TagsInternalType = 'tags___internal___type',
  TagsName = 'tags___name',
  TagsParentChildren = 'tags___parent___children',
  TagsParentChildrenChildren = 'tags___parent___children___children',
  TagsParentChildrenId = 'tags___parent___children___id',
  TagsParentId = 'tags___parent___id',
  TagsParentInternalContent = 'tags___parent___internal___content',
  TagsParentInternalContentDigest = 'tags___parent___internal___contentDigest',
  TagsParentInternalDescription = 'tags___parent___internal___description',
  TagsParentInternalFieldOwners = 'tags___parent___internal___fieldOwners',
  TagsParentInternalIgnoreType = 'tags___parent___internal___ignoreType',
  TagsParentInternalMediaType = 'tags___parent___internal___mediaType',
  TagsParentInternalOwner = 'tags___parent___internal___owner',
  TagsParentInternalType = 'tags___parent___internal___type',
  TagsParentParentChildren = 'tags___parent___parent___children',
  TagsParentParentId = 'tags___parent___parent___id',
  TagsRecipes = 'tags___recipes',
  TagsRecipesCategoryChildren = 'tags___recipes___category___children',
  TagsRecipesCategoryCreatedAt = 'tags___recipes___category___createdAt',
  TagsRecipesCategoryId = 'tags___recipes___category___id',
  TagsRecipesCategoryName = 'tags___recipes___category___name',
  TagsRecipesCategoryRecipes = 'tags___recipes___category___recipes',
  TagsRecipesCategorySlug = 'tags___recipes___category___slug',
  TagsRecipesCategoryStrapiId = 'tags___recipes___category___strapi_id',
  TagsRecipesCategoryUpdatedAt = 'tags___recipes___category___updatedAt',
  TagsRecipesChildStrapiRecipeDirectionsTextnodeChildren = 'tags___recipes___childStrapiRecipeDirectionsTextnode___children',
  TagsRecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemark = 'tags___recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark',
  TagsRecipesChildStrapiRecipeDirectionsTextnodeDirections = 'tags___recipes___childStrapiRecipeDirectionsTextnode___directions',
  TagsRecipesChildStrapiRecipeDirectionsTextnodeId = 'tags___recipes___childStrapiRecipeDirectionsTextnode___id',
  TagsRecipesChildStrapiRecipeIngredientsTextnodeChildren = 'tags___recipes___childStrapiRecipeIngredientsTextnode___children',
  TagsRecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemark = 'tags___recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark',
  TagsRecipesChildStrapiRecipeIngredientsTextnodeId = 'tags___recipes___childStrapiRecipeIngredientsTextnode___id',
  TagsRecipesChildStrapiRecipeIngredientsTextnodeIngredients = 'tags___recipes___childStrapiRecipeIngredientsTextnode___ingredients',
  TagsRecipesChildren = 'tags___recipes___children',
  TagsRecipesChildrenStrapiRecipeDirectionsTextnode = 'tags___recipes___childrenStrapiRecipeDirectionsTextnode',
  TagsRecipesChildrenStrapiRecipeDirectionsTextnodeChildren = 'tags___recipes___childrenStrapiRecipeDirectionsTextnode___children',
  TagsRecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemark = 'tags___recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark',
  TagsRecipesChildrenStrapiRecipeDirectionsTextnodeDirections = 'tags___recipes___childrenStrapiRecipeDirectionsTextnode___directions',
  TagsRecipesChildrenStrapiRecipeDirectionsTextnodeId = 'tags___recipes___childrenStrapiRecipeDirectionsTextnode___id',
  TagsRecipesChildrenStrapiRecipeIngredientsTextnode = 'tags___recipes___childrenStrapiRecipeIngredientsTextnode',
  TagsRecipesChildrenStrapiRecipeIngredientsTextnodeChildren = 'tags___recipes___childrenStrapiRecipeIngredientsTextnode___children',
  TagsRecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemark = 'tags___recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark',
  TagsRecipesChildrenStrapiRecipeIngredientsTextnodeId = 'tags___recipes___childrenStrapiRecipeIngredientsTextnode___id',
  TagsRecipesChildrenStrapiRecipeIngredientsTextnodeIngredients = 'tags___recipes___childrenStrapiRecipeIngredientsTextnode___ingredients',
  TagsRecipesChildrenChildren = 'tags___recipes___children___children',
  TagsRecipesChildrenId = 'tags___recipes___children___id',
  TagsRecipesCoverChildren = 'tags___recipes___cover___children',
  TagsRecipesCoverCreatedAt = 'tags___recipes___cover___createdAt',
  TagsRecipesCoverExt = 'tags___recipes___cover___ext',
  TagsRecipesCoverHash = 'tags___recipes___cover___hash',
  TagsRecipesCoverHeight = 'tags___recipes___cover___height',
  TagsRecipesCoverId = 'tags___recipes___cover___id',
  TagsRecipesCoverMime = 'tags___recipes___cover___mime',
  TagsRecipesCoverName = 'tags___recipes___cover___name',
  TagsRecipesCoverSize = 'tags___recipes___cover___size',
  TagsRecipesCoverStrapiId = 'tags___recipes___cover___strapi_id',
  TagsRecipesCoverUpdatedAt = 'tags___recipes___cover___updatedAt',
  TagsRecipesCoverUrl = 'tags___recipes___cover___url',
  TagsRecipesCoverWidth = 'tags___recipes___cover___width',
  TagsRecipesCreatedAt = 'tags___recipes___createdAt',
  TagsRecipesGallery = 'tags___recipes___gallery',
  TagsRecipesGalleryChildren = 'tags___recipes___gallery___children',
  TagsRecipesGalleryCreatedAt = 'tags___recipes___gallery___createdAt',
  TagsRecipesGalleryExt = 'tags___recipes___gallery___ext',
  TagsRecipesGalleryHash = 'tags___recipes___gallery___hash',
  TagsRecipesGalleryHeight = 'tags___recipes___gallery___height',
  TagsRecipesGalleryId = 'tags___recipes___gallery___id',
  TagsRecipesGalleryMime = 'tags___recipes___gallery___mime',
  TagsRecipesGalleryName = 'tags___recipes___gallery___name',
  TagsRecipesGallerySize = 'tags___recipes___gallery___size',
  TagsRecipesGalleryStrapiId = 'tags___recipes___gallery___strapi_id',
  TagsRecipesGalleryUpdatedAt = 'tags___recipes___gallery___updatedAt',
  TagsRecipesGalleryUrl = 'tags___recipes___gallery___url',
  TagsRecipesGalleryWidth = 'tags___recipes___gallery___width',
  TagsRecipesHeadline = 'tags___recipes___headline',
  TagsRecipesId = 'tags___recipes___id',
  TagsRecipesInternalContent = 'tags___recipes___internal___content',
  TagsRecipesInternalContentDigest = 'tags___recipes___internal___contentDigest',
  TagsRecipesInternalDescription = 'tags___recipes___internal___description',
  TagsRecipesInternalFieldOwners = 'tags___recipes___internal___fieldOwners',
  TagsRecipesInternalIgnoreType = 'tags___recipes___internal___ignoreType',
  TagsRecipesInternalMediaType = 'tags___recipes___internal___mediaType',
  TagsRecipesInternalOwner = 'tags___recipes___internal___owner',
  TagsRecipesInternalType = 'tags___recipes___internal___type',
  TagsRecipesParentChildren = 'tags___recipes___parent___children',
  TagsRecipesParentId = 'tags___recipes___parent___id',
  TagsRecipesPreparationTime = 'tags___recipes___preparationTime',
  TagsRecipesPublishedAt = 'tags___recipes___publishedAt',
  TagsRecipesSeoChildren = 'tags___recipes___seo___children',
  TagsRecipesSeoHtmlDescription = 'tags___recipes___seo___htmlDescription',
  TagsRecipesSeoHtmlTitle = 'tags___recipes___seo___htmlTitle',
  TagsRecipesSeoId = 'tags___recipes___seo___id',
  TagsRecipesSeoStrapiId = 'tags___recipes___seo___strapi_id',
  TagsRecipesSlug = 'tags___recipes___slug',
  TagsRecipesStrapiId = 'tags___recipes___strapi_id',
  TagsRecipesTags = 'tags___recipes___tags',
  TagsRecipesTagsChildren = 'tags___recipes___tags___children',
  TagsRecipesTagsCreatedAt = 'tags___recipes___tags___createdAt',
  TagsRecipesTagsId = 'tags___recipes___tags___id',
  TagsRecipesTagsName = 'tags___recipes___tags___name',
  TagsRecipesTagsRecipes = 'tags___recipes___tags___recipes',
  TagsRecipesTagsSlug = 'tags___recipes___tags___slug',
  TagsRecipesTagsStrapiId = 'tags___recipes___tags___strapi_id',
  TagsRecipesTagsUpdatedAt = 'tags___recipes___tags___updatedAt',
  TagsRecipesTitle = 'tags___recipes___title',
  TagsRecipesUpdatedAt = 'tags___recipes___updatedAt',
  TagsSlug = 'tags___slug',
  TagsStrapiId = 'tags___strapi_id',
  TagsUpdatedAt = 'tags___updatedAt',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type Strapi_RecipeFilterInput = {
  category?: InputMaybe<Strapi_CategoryFilterInput>
  childStrapiRecipeDirectionsTextnode?: InputMaybe<Strapi_Recipe_Directions_TextnodeFilterInput>
  childStrapiRecipeIngredientsTextnode?: InputMaybe<Strapi_Recipe_Ingredients_TextnodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  childrenStrapiRecipeDirectionsTextnode?: InputMaybe<Strapi_Recipe_Directions_TextnodeFilterListInput>
  childrenStrapiRecipeIngredientsTextnode?: InputMaybe<Strapi_Recipe_Ingredients_TextnodeFilterListInput>
  cover?: InputMaybe<Strapi__MediaFilterInput>
  createdAt?: InputMaybe<DateQueryOperatorInput>
  directions?: InputMaybe<Strapi_RecipeDirectionsFilterInput>
  gallery?: InputMaybe<Strapi__MediaFilterListInput>
  headline?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  ingredients?: InputMaybe<Strapi_RecipeIngredientsFilterInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
  preparationTime?: InputMaybe<IntQueryOperatorInput>
  publishedAt?: InputMaybe<DateQueryOperatorInput>
  seo?: InputMaybe<Strapi__Component_Seo_DescriptionFilterInput>
  slug?: InputMaybe<StringQueryOperatorInput>
  strapi_id?: InputMaybe<IntQueryOperatorInput>
  tags?: InputMaybe<Strapi_TagFilterListInput>
  title?: InputMaybe<StringQueryOperatorInput>
  updatedAt?: InputMaybe<DateQueryOperatorInput>
}

export type Strapi_RecipeFilterListInput = {
  elemMatch?: InputMaybe<Strapi_RecipeFilterInput>
}

export type Strapi_RecipeGroupConnection = {
  __typename?: 'STRAPI_RECIPEGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi_RecipeEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<Strapi_RecipeGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi_Recipe>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi_RecipeGroupConnectionDistinctArgs = {
  field: Strapi_RecipeFieldsEnum
}

export type Strapi_RecipeGroupConnectionGroupArgs = {
  field: Strapi_RecipeFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi_RecipeGroupConnectionMaxArgs = {
  field: Strapi_RecipeFieldsEnum
}

export type Strapi_RecipeGroupConnectionMinArgs = {
  field: Strapi_RecipeFieldsEnum
}

export type Strapi_RecipeGroupConnectionSumArgs = {
  field: Strapi_RecipeFieldsEnum
}

export type Strapi_RecipeIngredients = {
  __typename?: 'STRAPI_RECIPEIngredients'
  data?: Maybe<Strapi_Recipe_Ingredients_Textnode>
}

export type Strapi_RecipeIngredientsFilterInput = {
  data?: InputMaybe<Strapi_Recipe_Ingredients_TextnodeFilterInput>
}

export type Strapi_RecipeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi_RecipeFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type Strapi_Recipe_Directions_Textnode = Node & {
  __typename?: 'STRAPI_RECIPE_DIRECTIONS_TEXTNODE'
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>
  children: Array<Node>
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>
  directions?: Maybe<Scalars['String']>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
}

export type Strapi_Recipe_Directions_TextnodeConnection = {
  __typename?: 'STRAPI_RECIPE_DIRECTIONS_TEXTNODEConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi_Recipe_Directions_TextnodeEdge>
  group: Array<Strapi_Recipe_Directions_TextnodeGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi_Recipe_Directions_Textnode>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi_Recipe_Directions_TextnodeConnectionDistinctArgs = {
  field: Strapi_Recipe_Directions_TextnodeFieldsEnum
}

export type Strapi_Recipe_Directions_TextnodeConnectionGroupArgs = {
  field: Strapi_Recipe_Directions_TextnodeFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi_Recipe_Directions_TextnodeConnectionMaxArgs = {
  field: Strapi_Recipe_Directions_TextnodeFieldsEnum
}

export type Strapi_Recipe_Directions_TextnodeConnectionMinArgs = {
  field: Strapi_Recipe_Directions_TextnodeFieldsEnum
}

export type Strapi_Recipe_Directions_TextnodeConnectionSumArgs = {
  field: Strapi_Recipe_Directions_TextnodeFieldsEnum
}

export type Strapi_Recipe_Directions_TextnodeEdge = {
  __typename?: 'STRAPI_RECIPE_DIRECTIONS_TEXTNODEEdge'
  next?: Maybe<Strapi_Recipe_Directions_Textnode>
  node: Strapi_Recipe_Directions_Textnode
  previous?: Maybe<Strapi_Recipe_Directions_Textnode>
}

export enum Strapi_Recipe_Directions_TextnodeFieldsEnum {
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  Children = 'children',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Directions = 'directions',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
}

export type Strapi_Recipe_Directions_TextnodeFilterInput = {
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>
  directions?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
}

export type Strapi_Recipe_Directions_TextnodeFilterListInput = {
  elemMatch?: InputMaybe<Strapi_Recipe_Directions_TextnodeFilterInput>
}

export type Strapi_Recipe_Directions_TextnodeGroupConnection = {
  __typename?: 'STRAPI_RECIPE_DIRECTIONS_TEXTNODEGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi_Recipe_Directions_TextnodeEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<Strapi_Recipe_Directions_TextnodeGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi_Recipe_Directions_Textnode>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi_Recipe_Directions_TextnodeGroupConnectionDistinctArgs = {
  field: Strapi_Recipe_Directions_TextnodeFieldsEnum
}

export type Strapi_Recipe_Directions_TextnodeGroupConnectionGroupArgs = {
  field: Strapi_Recipe_Directions_TextnodeFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi_Recipe_Directions_TextnodeGroupConnectionMaxArgs = {
  field: Strapi_Recipe_Directions_TextnodeFieldsEnum
}

export type Strapi_Recipe_Directions_TextnodeGroupConnectionMinArgs = {
  field: Strapi_Recipe_Directions_TextnodeFieldsEnum
}

export type Strapi_Recipe_Directions_TextnodeGroupConnectionSumArgs = {
  field: Strapi_Recipe_Directions_TextnodeFieldsEnum
}

export type Strapi_Recipe_Directions_TextnodeSortInput = {
  fields?: InputMaybe<
    Array<InputMaybe<Strapi_Recipe_Directions_TextnodeFieldsEnum>>
  >
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type Strapi_Recipe_Ingredients_Textnode = Node & {
  __typename?: 'STRAPI_RECIPE_INGREDIENTS_TEXTNODE'
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>
  children: Array<Node>
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>
  id: Scalars['ID']
  ingredients?: Maybe<Scalars['String']>
  internal: Internal
  parent?: Maybe<Node>
}

export type Strapi_Recipe_Ingredients_TextnodeConnection = {
  __typename?: 'STRAPI_RECIPE_INGREDIENTS_TEXTNODEConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi_Recipe_Ingredients_TextnodeEdge>
  group: Array<Strapi_Recipe_Ingredients_TextnodeGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi_Recipe_Ingredients_Textnode>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi_Recipe_Ingredients_TextnodeConnectionDistinctArgs = {
  field: Strapi_Recipe_Ingredients_TextnodeFieldsEnum
}

export type Strapi_Recipe_Ingredients_TextnodeConnectionGroupArgs = {
  field: Strapi_Recipe_Ingredients_TextnodeFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi_Recipe_Ingredients_TextnodeConnectionMaxArgs = {
  field: Strapi_Recipe_Ingredients_TextnodeFieldsEnum
}

export type Strapi_Recipe_Ingredients_TextnodeConnectionMinArgs = {
  field: Strapi_Recipe_Ingredients_TextnodeFieldsEnum
}

export type Strapi_Recipe_Ingredients_TextnodeConnectionSumArgs = {
  field: Strapi_Recipe_Ingredients_TextnodeFieldsEnum
}

export type Strapi_Recipe_Ingredients_TextnodeEdge = {
  __typename?: 'STRAPI_RECIPE_INGREDIENTS_TEXTNODEEdge'
  next?: Maybe<Strapi_Recipe_Ingredients_Textnode>
  node: Strapi_Recipe_Ingredients_Textnode
  previous?: Maybe<Strapi_Recipe_Ingredients_Textnode>
}

export enum Strapi_Recipe_Ingredients_TextnodeFieldsEnum {
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  Children = 'children',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  Ingredients = 'ingredients',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
}

export type Strapi_Recipe_Ingredients_TextnodeFilterInput = {
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>
  id?: InputMaybe<StringQueryOperatorInput>
  ingredients?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
}

export type Strapi_Recipe_Ingredients_TextnodeFilterListInput = {
  elemMatch?: InputMaybe<Strapi_Recipe_Ingredients_TextnodeFilterInput>
}

export type Strapi_Recipe_Ingredients_TextnodeGroupConnection = {
  __typename?: 'STRAPI_RECIPE_INGREDIENTS_TEXTNODEGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi_Recipe_Ingredients_TextnodeEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<Strapi_Recipe_Ingredients_TextnodeGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi_Recipe_Ingredients_Textnode>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi_Recipe_Ingredients_TextnodeGroupConnectionDistinctArgs = {
  field: Strapi_Recipe_Ingredients_TextnodeFieldsEnum
}

export type Strapi_Recipe_Ingredients_TextnodeGroupConnectionGroupArgs = {
  field: Strapi_Recipe_Ingredients_TextnodeFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi_Recipe_Ingredients_TextnodeGroupConnectionMaxArgs = {
  field: Strapi_Recipe_Ingredients_TextnodeFieldsEnum
}

export type Strapi_Recipe_Ingredients_TextnodeGroupConnectionMinArgs = {
  field: Strapi_Recipe_Ingredients_TextnodeFieldsEnum
}

export type Strapi_Recipe_Ingredients_TextnodeGroupConnectionSumArgs = {
  field: Strapi_Recipe_Ingredients_TextnodeFieldsEnum
}

export type Strapi_Recipe_Ingredients_TextnodeSortInput = {
  fields?: InputMaybe<
    Array<InputMaybe<Strapi_Recipe_Ingredients_TextnodeFieldsEnum>>
  >
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type Strapi_Tag = Node & {
  __typename?: 'STRAPI_TAG'
  children: Array<Node>
  createdAt?: Maybe<Scalars['Date']>
  id: Scalars['ID']
  internal: Internal
  name?: Maybe<Scalars['String']>
  parent?: Maybe<Node>
  recipes?: Maybe<Array<Maybe<Strapi_Recipe>>>
  slug?: Maybe<Scalars['String']>
  strapi_id?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['Date']>
}

export type Strapi_TagCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type Strapi_TagUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type Strapi_TagConnection = {
  __typename?: 'STRAPI_TAGConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi_TagEdge>
  group: Array<Strapi_TagGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi_Tag>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi_TagConnectionDistinctArgs = {
  field: Strapi_TagFieldsEnum
}

export type Strapi_TagConnectionGroupArgs = {
  field: Strapi_TagFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi_TagConnectionMaxArgs = {
  field: Strapi_TagFieldsEnum
}

export type Strapi_TagConnectionMinArgs = {
  field: Strapi_TagFieldsEnum
}

export type Strapi_TagConnectionSumArgs = {
  field: Strapi_TagFieldsEnum
}

export type Strapi_TagEdge = {
  __typename?: 'STRAPI_TAGEdge'
  next?: Maybe<Strapi_Tag>
  node: Strapi_Tag
  previous?: Maybe<Strapi_Tag>
}

export enum Strapi_TagFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CreatedAt = 'createdAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Recipes = 'recipes',
  RecipesCategoryChildren = 'recipes___category___children',
  RecipesCategoryChildrenChildren = 'recipes___category___children___children',
  RecipesCategoryChildrenId = 'recipes___category___children___id',
  RecipesCategoryCreatedAt = 'recipes___category___createdAt',
  RecipesCategoryId = 'recipes___category___id',
  RecipesCategoryInternalContent = 'recipes___category___internal___content',
  RecipesCategoryInternalContentDigest = 'recipes___category___internal___contentDigest',
  RecipesCategoryInternalDescription = 'recipes___category___internal___description',
  RecipesCategoryInternalFieldOwners = 'recipes___category___internal___fieldOwners',
  RecipesCategoryInternalIgnoreType = 'recipes___category___internal___ignoreType',
  RecipesCategoryInternalMediaType = 'recipes___category___internal___mediaType',
  RecipesCategoryInternalOwner = 'recipes___category___internal___owner',
  RecipesCategoryInternalType = 'recipes___category___internal___type',
  RecipesCategoryName = 'recipes___category___name',
  RecipesCategoryParentChildren = 'recipes___category___parent___children',
  RecipesCategoryParentId = 'recipes___category___parent___id',
  RecipesCategoryRecipes = 'recipes___category___recipes',
  RecipesCategoryRecipesChildren = 'recipes___category___recipes___children',
  RecipesCategoryRecipesChildrenStrapiRecipeDirectionsTextnode = 'recipes___category___recipes___childrenStrapiRecipeDirectionsTextnode',
  RecipesCategoryRecipesChildrenStrapiRecipeIngredientsTextnode = 'recipes___category___recipes___childrenStrapiRecipeIngredientsTextnode',
  RecipesCategoryRecipesCreatedAt = 'recipes___category___recipes___createdAt',
  RecipesCategoryRecipesGallery = 'recipes___category___recipes___gallery',
  RecipesCategoryRecipesHeadline = 'recipes___category___recipes___headline',
  RecipesCategoryRecipesId = 'recipes___category___recipes___id',
  RecipesCategoryRecipesPreparationTime = 'recipes___category___recipes___preparationTime',
  RecipesCategoryRecipesPublishedAt = 'recipes___category___recipes___publishedAt',
  RecipesCategoryRecipesSlug = 'recipes___category___recipes___slug',
  RecipesCategoryRecipesStrapiId = 'recipes___category___recipes___strapi_id',
  RecipesCategoryRecipesTags = 'recipes___category___recipes___tags',
  RecipesCategoryRecipesTitle = 'recipes___category___recipes___title',
  RecipesCategoryRecipesUpdatedAt = 'recipes___category___recipes___updatedAt',
  RecipesCategorySlug = 'recipes___category___slug',
  RecipesCategoryStrapiId = 'recipes___category___strapi_id',
  RecipesCategoryUpdatedAt = 'recipes___category___updatedAt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkChildren = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkExcerpt = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkExcerptAst = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHeadings = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHtml = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHtmlAst = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___htmlAst',
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkId = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkRawMarkdownBody = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkTableOfContents = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildMarkdownRemarkTimeToRead = 'recipes___childStrapiRecipeDirectionsTextnode___childMarkdownRemark___timeToRead',
  RecipesChildStrapiRecipeDirectionsTextnodeChildren = 'recipes___childStrapiRecipeDirectionsTextnode___children',
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemark = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkChildren = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkExcerpt = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkExcerptAst = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHeadings = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHtml = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHtmlAst = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___htmlAst',
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkId = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkRawMarkdownBody = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkTableOfContents = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkTimeToRead = 'recipes___childStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___timeToRead',
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenChildren = 'recipes___childStrapiRecipeDirectionsTextnode___children___children',
  RecipesChildStrapiRecipeDirectionsTextnodeChildrenId = 'recipes___childStrapiRecipeDirectionsTextnode___children___id',
  RecipesChildStrapiRecipeDirectionsTextnodeDirections = 'recipes___childStrapiRecipeDirectionsTextnode___directions',
  RecipesChildStrapiRecipeDirectionsTextnodeId = 'recipes___childStrapiRecipeDirectionsTextnode___id',
  RecipesChildStrapiRecipeDirectionsTextnodeInternalContent = 'recipes___childStrapiRecipeDirectionsTextnode___internal___content',
  RecipesChildStrapiRecipeDirectionsTextnodeInternalContentDigest = 'recipes___childStrapiRecipeDirectionsTextnode___internal___contentDigest',
  RecipesChildStrapiRecipeDirectionsTextnodeInternalDescription = 'recipes___childStrapiRecipeDirectionsTextnode___internal___description',
  RecipesChildStrapiRecipeDirectionsTextnodeInternalFieldOwners = 'recipes___childStrapiRecipeDirectionsTextnode___internal___fieldOwners',
  RecipesChildStrapiRecipeDirectionsTextnodeInternalIgnoreType = 'recipes___childStrapiRecipeDirectionsTextnode___internal___ignoreType',
  RecipesChildStrapiRecipeDirectionsTextnodeInternalMediaType = 'recipes___childStrapiRecipeDirectionsTextnode___internal___mediaType',
  RecipesChildStrapiRecipeDirectionsTextnodeInternalOwner = 'recipes___childStrapiRecipeDirectionsTextnode___internal___owner',
  RecipesChildStrapiRecipeDirectionsTextnodeInternalType = 'recipes___childStrapiRecipeDirectionsTextnode___internal___type',
  RecipesChildStrapiRecipeDirectionsTextnodeParentChildren = 'recipes___childStrapiRecipeDirectionsTextnode___parent___children',
  RecipesChildStrapiRecipeDirectionsTextnodeParentId = 'recipes___childStrapiRecipeDirectionsTextnode___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkChildren = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkExcerpt = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkExcerptAst = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHeadings = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHtml = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHtmlAst = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___htmlAst',
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkId = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkRawMarkdownBody = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkTableOfContents = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildMarkdownRemarkTimeToRead = 'recipes___childStrapiRecipeIngredientsTextnode___childMarkdownRemark___timeToRead',
  RecipesChildStrapiRecipeIngredientsTextnodeChildren = 'recipes___childStrapiRecipeIngredientsTextnode___children',
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemark = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkChildren = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkExcerpt = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkExcerptAst = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHeadings = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHtml = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHtmlAst = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___htmlAst',
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkId = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkRawMarkdownBody = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkTableOfContents = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkTimeToRead = 'recipes___childStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___timeToRead',
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenChildren = 'recipes___childStrapiRecipeIngredientsTextnode___children___children',
  RecipesChildStrapiRecipeIngredientsTextnodeChildrenId = 'recipes___childStrapiRecipeIngredientsTextnode___children___id',
  RecipesChildStrapiRecipeIngredientsTextnodeId = 'recipes___childStrapiRecipeIngredientsTextnode___id',
  RecipesChildStrapiRecipeIngredientsTextnodeIngredients = 'recipes___childStrapiRecipeIngredientsTextnode___ingredients',
  RecipesChildStrapiRecipeIngredientsTextnodeInternalContent = 'recipes___childStrapiRecipeIngredientsTextnode___internal___content',
  RecipesChildStrapiRecipeIngredientsTextnodeInternalContentDigest = 'recipes___childStrapiRecipeIngredientsTextnode___internal___contentDigest',
  RecipesChildStrapiRecipeIngredientsTextnodeInternalDescription = 'recipes___childStrapiRecipeIngredientsTextnode___internal___description',
  RecipesChildStrapiRecipeIngredientsTextnodeInternalFieldOwners = 'recipes___childStrapiRecipeIngredientsTextnode___internal___fieldOwners',
  RecipesChildStrapiRecipeIngredientsTextnodeInternalIgnoreType = 'recipes___childStrapiRecipeIngredientsTextnode___internal___ignoreType',
  RecipesChildStrapiRecipeIngredientsTextnodeInternalMediaType = 'recipes___childStrapiRecipeIngredientsTextnode___internal___mediaType',
  RecipesChildStrapiRecipeIngredientsTextnodeInternalOwner = 'recipes___childStrapiRecipeIngredientsTextnode___internal___owner',
  RecipesChildStrapiRecipeIngredientsTextnodeInternalType = 'recipes___childStrapiRecipeIngredientsTextnode___internal___type',
  RecipesChildStrapiRecipeIngredientsTextnodeParentChildren = 'recipes___childStrapiRecipeIngredientsTextnode___parent___children',
  RecipesChildStrapiRecipeIngredientsTextnodeParentId = 'recipes___childStrapiRecipeIngredientsTextnode___parent___id',
  RecipesChildren = 'recipes___children',
  RecipesChildrenStrapiRecipeDirectionsTextnode = 'recipes___childrenStrapiRecipeDirectionsTextnode',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkChildren = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkExcerpt = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkExcerptAst = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHeadings = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHtml = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkHtmlAst = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___htmlAst',
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkId = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkRawMarkdownBody = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkTableOfContents = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildMarkdownRemarkTimeToRead = 'recipes___childrenStrapiRecipeDirectionsTextnode___childMarkdownRemark___timeToRead',
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildren = 'recipes___childrenStrapiRecipeDirectionsTextnode___children',
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemark = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkChildren = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkExcerpt = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkExcerptAst = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHeadings = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHtml = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkHtmlAst = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___htmlAst',
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkId = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkRawMarkdownBody = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkTableOfContents = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenMarkdownRemarkTimeToRead = 'recipes___childrenStrapiRecipeDirectionsTextnode___childrenMarkdownRemark___timeToRead',
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenChildren = 'recipes___childrenStrapiRecipeDirectionsTextnode___children___children',
  RecipesChildrenStrapiRecipeDirectionsTextnodeChildrenId = 'recipes___childrenStrapiRecipeDirectionsTextnode___children___id',
  RecipesChildrenStrapiRecipeDirectionsTextnodeDirections = 'recipes___childrenStrapiRecipeDirectionsTextnode___directions',
  RecipesChildrenStrapiRecipeDirectionsTextnodeId = 'recipes___childrenStrapiRecipeDirectionsTextnode___id',
  RecipesChildrenStrapiRecipeDirectionsTextnodeInternalContent = 'recipes___childrenStrapiRecipeDirectionsTextnode___internal___content',
  RecipesChildrenStrapiRecipeDirectionsTextnodeInternalContentDigest = 'recipes___childrenStrapiRecipeDirectionsTextnode___internal___contentDigest',
  RecipesChildrenStrapiRecipeDirectionsTextnodeInternalDescription = 'recipes___childrenStrapiRecipeDirectionsTextnode___internal___description',
  RecipesChildrenStrapiRecipeDirectionsTextnodeInternalFieldOwners = 'recipes___childrenStrapiRecipeDirectionsTextnode___internal___fieldOwners',
  RecipesChildrenStrapiRecipeDirectionsTextnodeInternalIgnoreType = 'recipes___childrenStrapiRecipeDirectionsTextnode___internal___ignoreType',
  RecipesChildrenStrapiRecipeDirectionsTextnodeInternalMediaType = 'recipes___childrenStrapiRecipeDirectionsTextnode___internal___mediaType',
  RecipesChildrenStrapiRecipeDirectionsTextnodeInternalOwner = 'recipes___childrenStrapiRecipeDirectionsTextnode___internal___owner',
  RecipesChildrenStrapiRecipeDirectionsTextnodeInternalType = 'recipes___childrenStrapiRecipeDirectionsTextnode___internal___type',
  RecipesChildrenStrapiRecipeDirectionsTextnodeParentChildren = 'recipes___childrenStrapiRecipeDirectionsTextnode___parent___children',
  RecipesChildrenStrapiRecipeDirectionsTextnodeParentId = 'recipes___childrenStrapiRecipeDirectionsTextnode___parent___id',
  RecipesChildrenStrapiRecipeIngredientsTextnode = 'recipes___childrenStrapiRecipeIngredientsTextnode',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkChildren = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkExcerpt = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkExcerptAst = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHeadings = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHtml = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkHtmlAst = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___htmlAst',
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkId = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkRawMarkdownBody = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkTableOfContents = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildMarkdownRemarkTimeToRead = 'recipes___childrenStrapiRecipeIngredientsTextnode___childMarkdownRemark___timeToRead',
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildren = 'recipes___childrenStrapiRecipeIngredientsTextnode___children',
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemark = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkChildren = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkExcerpt = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___excerpt',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkExcerptAst = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___excerptAst',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHeadings = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHtml = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkHtmlAst = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___htmlAst',
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkId = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkRawMarkdownBody = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___rawMarkdownBody',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkTableOfContents = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenMarkdownRemarkTimeToRead = 'recipes___childrenStrapiRecipeIngredientsTextnode___childrenMarkdownRemark___timeToRead',
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenChildren = 'recipes___childrenStrapiRecipeIngredientsTextnode___children___children',
  RecipesChildrenStrapiRecipeIngredientsTextnodeChildrenId = 'recipes___childrenStrapiRecipeIngredientsTextnode___children___id',
  RecipesChildrenStrapiRecipeIngredientsTextnodeId = 'recipes___childrenStrapiRecipeIngredientsTextnode___id',
  RecipesChildrenStrapiRecipeIngredientsTextnodeIngredients = 'recipes___childrenStrapiRecipeIngredientsTextnode___ingredients',
  RecipesChildrenStrapiRecipeIngredientsTextnodeInternalContent = 'recipes___childrenStrapiRecipeIngredientsTextnode___internal___content',
  RecipesChildrenStrapiRecipeIngredientsTextnodeInternalContentDigest = 'recipes___childrenStrapiRecipeIngredientsTextnode___internal___contentDigest',
  RecipesChildrenStrapiRecipeIngredientsTextnodeInternalDescription = 'recipes___childrenStrapiRecipeIngredientsTextnode___internal___description',
  RecipesChildrenStrapiRecipeIngredientsTextnodeInternalFieldOwners = 'recipes___childrenStrapiRecipeIngredientsTextnode___internal___fieldOwners',
  RecipesChildrenStrapiRecipeIngredientsTextnodeInternalIgnoreType = 'recipes___childrenStrapiRecipeIngredientsTextnode___internal___ignoreType',
  RecipesChildrenStrapiRecipeIngredientsTextnodeInternalMediaType = 'recipes___childrenStrapiRecipeIngredientsTextnode___internal___mediaType',
  RecipesChildrenStrapiRecipeIngredientsTextnodeInternalOwner = 'recipes___childrenStrapiRecipeIngredientsTextnode___internal___owner',
  RecipesChildrenStrapiRecipeIngredientsTextnodeInternalType = 'recipes___childrenStrapiRecipeIngredientsTextnode___internal___type',
  RecipesChildrenStrapiRecipeIngredientsTextnodeParentChildren = 'recipes___childrenStrapiRecipeIngredientsTextnode___parent___children',
  RecipesChildrenStrapiRecipeIngredientsTextnodeParentId = 'recipes___childrenStrapiRecipeIngredientsTextnode___parent___id',
  RecipesChildrenChildren = 'recipes___children___children',
  RecipesChildrenChildrenChildren = 'recipes___children___children___children',
  RecipesChildrenChildrenId = 'recipes___children___children___id',
  RecipesChildrenId = 'recipes___children___id',
  RecipesChildrenInternalContent = 'recipes___children___internal___content',
  RecipesChildrenInternalContentDigest = 'recipes___children___internal___contentDigest',
  RecipesChildrenInternalDescription = 'recipes___children___internal___description',
  RecipesChildrenInternalFieldOwners = 'recipes___children___internal___fieldOwners',
  RecipesChildrenInternalIgnoreType = 'recipes___children___internal___ignoreType',
  RecipesChildrenInternalMediaType = 'recipes___children___internal___mediaType',
  RecipesChildrenInternalOwner = 'recipes___children___internal___owner',
  RecipesChildrenInternalType = 'recipes___children___internal___type',
  RecipesChildrenParentChildren = 'recipes___children___parent___children',
  RecipesChildrenParentId = 'recipes___children___parent___id',
  RecipesCoverChildren = 'recipes___cover___children',
  RecipesCoverChildrenChildren = 'recipes___cover___children___children',
  RecipesCoverChildrenId = 'recipes___cover___children___id',
  RecipesCoverCreatedAt = 'recipes___cover___createdAt',
  RecipesCoverExt = 'recipes___cover___ext',
  RecipesCoverHash = 'recipes___cover___hash',
  RecipesCoverHeight = 'recipes___cover___height',
  RecipesCoverId = 'recipes___cover___id',
  RecipesCoverInternalContent = 'recipes___cover___internal___content',
  RecipesCoverInternalContentDigest = 'recipes___cover___internal___contentDigest',
  RecipesCoverInternalDescription = 'recipes___cover___internal___description',
  RecipesCoverInternalFieldOwners = 'recipes___cover___internal___fieldOwners',
  RecipesCoverInternalIgnoreType = 'recipes___cover___internal___ignoreType',
  RecipesCoverInternalMediaType = 'recipes___cover___internal___mediaType',
  RecipesCoverInternalOwner = 'recipes___cover___internal___owner',
  RecipesCoverInternalType = 'recipes___cover___internal___type',
  RecipesCoverLocalFileAbsolutePath = 'recipes___cover___localFile___absolutePath',
  RecipesCoverLocalFileAccessTime = 'recipes___cover___localFile___accessTime',
  RecipesCoverLocalFileAtime = 'recipes___cover___localFile___atime',
  RecipesCoverLocalFileAtimeMs = 'recipes___cover___localFile___atimeMs',
  RecipesCoverLocalFileBase = 'recipes___cover___localFile___base',
  RecipesCoverLocalFileBirthTime = 'recipes___cover___localFile___birthTime',
  RecipesCoverLocalFileBirthtime = 'recipes___cover___localFile___birthtime',
  RecipesCoverLocalFileBirthtimeMs = 'recipes___cover___localFile___birthtimeMs',
  RecipesCoverLocalFileBlksize = 'recipes___cover___localFile___blksize',
  RecipesCoverLocalFileBlocks = 'recipes___cover___localFile___blocks',
  RecipesCoverLocalFileChangeTime = 'recipes___cover___localFile___changeTime',
  RecipesCoverLocalFileChildren = 'recipes___cover___localFile___children',
  RecipesCoverLocalFileChildrenImageSharp = 'recipes___cover___localFile___childrenImageSharp',
  RecipesCoverLocalFileCtime = 'recipes___cover___localFile___ctime',
  RecipesCoverLocalFileCtimeMs = 'recipes___cover___localFile___ctimeMs',
  RecipesCoverLocalFileDev = 'recipes___cover___localFile___dev',
  RecipesCoverLocalFileDir = 'recipes___cover___localFile___dir',
  RecipesCoverLocalFileExt = 'recipes___cover___localFile___ext',
  RecipesCoverLocalFileExtension = 'recipes___cover___localFile___extension',
  RecipesCoverLocalFileGid = 'recipes___cover___localFile___gid',
  RecipesCoverLocalFileId = 'recipes___cover___localFile___id',
  RecipesCoverLocalFileIno = 'recipes___cover___localFile___ino',
  RecipesCoverLocalFileMode = 'recipes___cover___localFile___mode',
  RecipesCoverLocalFileModifiedTime = 'recipes___cover___localFile___modifiedTime',
  RecipesCoverLocalFileMtime = 'recipes___cover___localFile___mtime',
  RecipesCoverLocalFileMtimeMs = 'recipes___cover___localFile___mtimeMs',
  RecipesCoverLocalFileName = 'recipes___cover___localFile___name',
  RecipesCoverLocalFileNlink = 'recipes___cover___localFile___nlink',
  RecipesCoverLocalFilePrettySize = 'recipes___cover___localFile___prettySize',
  RecipesCoverLocalFileRdev = 'recipes___cover___localFile___rdev',
  RecipesCoverLocalFileRelativeDirectory = 'recipes___cover___localFile___relativeDirectory',
  RecipesCoverLocalFileRelativePath = 'recipes___cover___localFile___relativePath',
  RecipesCoverLocalFileRoot = 'recipes___cover___localFile___root',
  RecipesCoverLocalFileSize = 'recipes___cover___localFile___size',
  RecipesCoverLocalFileSourceInstanceName = 'recipes___cover___localFile___sourceInstanceName',
  RecipesCoverLocalFileUid = 'recipes___cover___localFile___uid',
  RecipesCoverLocalFileUrl = 'recipes___cover___localFile___url',
  RecipesCoverMime = 'recipes___cover___mime',
  RecipesCoverName = 'recipes___cover___name',
  RecipesCoverParentChildren = 'recipes___cover___parent___children',
  RecipesCoverParentId = 'recipes___cover___parent___id',
  RecipesCoverSize = 'recipes___cover___size',
  RecipesCoverStrapiId = 'recipes___cover___strapi_id',
  RecipesCoverUpdatedAt = 'recipes___cover___updatedAt',
  RecipesCoverUrl = 'recipes___cover___url',
  RecipesCoverWidth = 'recipes___cover___width',
  RecipesCreatedAt = 'recipes___createdAt',
  RecipesDirectionsDataChildren = 'recipes___directions___data___children',
  RecipesDirectionsDataChildrenMarkdownRemark = 'recipes___directions___data___childrenMarkdownRemark',
  RecipesDirectionsDataDirections = 'recipes___directions___data___directions',
  RecipesDirectionsDataId = 'recipes___directions___data___id',
  RecipesGallery = 'recipes___gallery',
  RecipesGalleryChildren = 'recipes___gallery___children',
  RecipesGalleryChildrenChildren = 'recipes___gallery___children___children',
  RecipesGalleryChildrenId = 'recipes___gallery___children___id',
  RecipesGalleryCreatedAt = 'recipes___gallery___createdAt',
  RecipesGalleryExt = 'recipes___gallery___ext',
  RecipesGalleryHash = 'recipes___gallery___hash',
  RecipesGalleryHeight = 'recipes___gallery___height',
  RecipesGalleryId = 'recipes___gallery___id',
  RecipesGalleryInternalContent = 'recipes___gallery___internal___content',
  RecipesGalleryInternalContentDigest = 'recipes___gallery___internal___contentDigest',
  RecipesGalleryInternalDescription = 'recipes___gallery___internal___description',
  RecipesGalleryInternalFieldOwners = 'recipes___gallery___internal___fieldOwners',
  RecipesGalleryInternalIgnoreType = 'recipes___gallery___internal___ignoreType',
  RecipesGalleryInternalMediaType = 'recipes___gallery___internal___mediaType',
  RecipesGalleryInternalOwner = 'recipes___gallery___internal___owner',
  RecipesGalleryInternalType = 'recipes___gallery___internal___type',
  RecipesGalleryLocalFileAbsolutePath = 'recipes___gallery___localFile___absolutePath',
  RecipesGalleryLocalFileAccessTime = 'recipes___gallery___localFile___accessTime',
  RecipesGalleryLocalFileAtime = 'recipes___gallery___localFile___atime',
  RecipesGalleryLocalFileAtimeMs = 'recipes___gallery___localFile___atimeMs',
  RecipesGalleryLocalFileBase = 'recipes___gallery___localFile___base',
  RecipesGalleryLocalFileBirthTime = 'recipes___gallery___localFile___birthTime',
  RecipesGalleryLocalFileBirthtime = 'recipes___gallery___localFile___birthtime',
  RecipesGalleryLocalFileBirthtimeMs = 'recipes___gallery___localFile___birthtimeMs',
  RecipesGalleryLocalFileBlksize = 'recipes___gallery___localFile___blksize',
  RecipesGalleryLocalFileBlocks = 'recipes___gallery___localFile___blocks',
  RecipesGalleryLocalFileChangeTime = 'recipes___gallery___localFile___changeTime',
  RecipesGalleryLocalFileChildren = 'recipes___gallery___localFile___children',
  RecipesGalleryLocalFileChildrenImageSharp = 'recipes___gallery___localFile___childrenImageSharp',
  RecipesGalleryLocalFileCtime = 'recipes___gallery___localFile___ctime',
  RecipesGalleryLocalFileCtimeMs = 'recipes___gallery___localFile___ctimeMs',
  RecipesGalleryLocalFileDev = 'recipes___gallery___localFile___dev',
  RecipesGalleryLocalFileDir = 'recipes___gallery___localFile___dir',
  RecipesGalleryLocalFileExt = 'recipes___gallery___localFile___ext',
  RecipesGalleryLocalFileExtension = 'recipes___gallery___localFile___extension',
  RecipesGalleryLocalFileGid = 'recipes___gallery___localFile___gid',
  RecipesGalleryLocalFileId = 'recipes___gallery___localFile___id',
  RecipesGalleryLocalFileIno = 'recipes___gallery___localFile___ino',
  RecipesGalleryLocalFileMode = 'recipes___gallery___localFile___mode',
  RecipesGalleryLocalFileModifiedTime = 'recipes___gallery___localFile___modifiedTime',
  RecipesGalleryLocalFileMtime = 'recipes___gallery___localFile___mtime',
  RecipesGalleryLocalFileMtimeMs = 'recipes___gallery___localFile___mtimeMs',
  RecipesGalleryLocalFileName = 'recipes___gallery___localFile___name',
  RecipesGalleryLocalFileNlink = 'recipes___gallery___localFile___nlink',
  RecipesGalleryLocalFilePrettySize = 'recipes___gallery___localFile___prettySize',
  RecipesGalleryLocalFileRdev = 'recipes___gallery___localFile___rdev',
  RecipesGalleryLocalFileRelativeDirectory = 'recipes___gallery___localFile___relativeDirectory',
  RecipesGalleryLocalFileRelativePath = 'recipes___gallery___localFile___relativePath',
  RecipesGalleryLocalFileRoot = 'recipes___gallery___localFile___root',
  RecipesGalleryLocalFileSize = 'recipes___gallery___localFile___size',
  RecipesGalleryLocalFileSourceInstanceName = 'recipes___gallery___localFile___sourceInstanceName',
  RecipesGalleryLocalFileUid = 'recipes___gallery___localFile___uid',
  RecipesGalleryLocalFileUrl = 'recipes___gallery___localFile___url',
  RecipesGalleryMime = 'recipes___gallery___mime',
  RecipesGalleryName = 'recipes___gallery___name',
  RecipesGalleryParentChildren = 'recipes___gallery___parent___children',
  RecipesGalleryParentId = 'recipes___gallery___parent___id',
  RecipesGallerySize = 'recipes___gallery___size',
  RecipesGalleryStrapiId = 'recipes___gallery___strapi_id',
  RecipesGalleryUpdatedAt = 'recipes___gallery___updatedAt',
  RecipesGalleryUrl = 'recipes___gallery___url',
  RecipesGalleryWidth = 'recipes___gallery___width',
  RecipesHeadline = 'recipes___headline',
  RecipesId = 'recipes___id',
  RecipesIngredientsDataChildren = 'recipes___ingredients___data___children',
  RecipesIngredientsDataChildrenMarkdownRemark = 'recipes___ingredients___data___childrenMarkdownRemark',
  RecipesIngredientsDataId = 'recipes___ingredients___data___id',
  RecipesIngredientsDataIngredients = 'recipes___ingredients___data___ingredients',
  RecipesInternalContent = 'recipes___internal___content',
  RecipesInternalContentDigest = 'recipes___internal___contentDigest',
  RecipesInternalDescription = 'recipes___internal___description',
  RecipesInternalFieldOwners = 'recipes___internal___fieldOwners',
  RecipesInternalIgnoreType = 'recipes___internal___ignoreType',
  RecipesInternalMediaType = 'recipes___internal___mediaType',
  RecipesInternalOwner = 'recipes___internal___owner',
  RecipesInternalType = 'recipes___internal___type',
  RecipesParentChildren = 'recipes___parent___children',
  RecipesParentChildrenChildren = 'recipes___parent___children___children',
  RecipesParentChildrenId = 'recipes___parent___children___id',
  RecipesParentId = 'recipes___parent___id',
  RecipesParentInternalContent = 'recipes___parent___internal___content',
  RecipesParentInternalContentDigest = 'recipes___parent___internal___contentDigest',
  RecipesParentInternalDescription = 'recipes___parent___internal___description',
  RecipesParentInternalFieldOwners = 'recipes___parent___internal___fieldOwners',
  RecipesParentInternalIgnoreType = 'recipes___parent___internal___ignoreType',
  RecipesParentInternalMediaType = 'recipes___parent___internal___mediaType',
  RecipesParentInternalOwner = 'recipes___parent___internal___owner',
  RecipesParentInternalType = 'recipes___parent___internal___type',
  RecipesParentParentChildren = 'recipes___parent___parent___children',
  RecipesParentParentId = 'recipes___parent___parent___id',
  RecipesPreparationTime = 'recipes___preparationTime',
  RecipesPublishedAt = 'recipes___publishedAt',
  RecipesSeoChildren = 'recipes___seo___children',
  RecipesSeoChildrenChildren = 'recipes___seo___children___children',
  RecipesSeoChildrenId = 'recipes___seo___children___id',
  RecipesSeoHtmlDescription = 'recipes___seo___htmlDescription',
  RecipesSeoHtmlTitle = 'recipes___seo___htmlTitle',
  RecipesSeoId = 'recipes___seo___id',
  RecipesSeoInternalContent = 'recipes___seo___internal___content',
  RecipesSeoInternalContentDigest = 'recipes___seo___internal___contentDigest',
  RecipesSeoInternalDescription = 'recipes___seo___internal___description',
  RecipesSeoInternalFieldOwners = 'recipes___seo___internal___fieldOwners',
  RecipesSeoInternalIgnoreType = 'recipes___seo___internal___ignoreType',
  RecipesSeoInternalMediaType = 'recipes___seo___internal___mediaType',
  RecipesSeoInternalOwner = 'recipes___seo___internal___owner',
  RecipesSeoInternalType = 'recipes___seo___internal___type',
  RecipesSeoParentChildren = 'recipes___seo___parent___children',
  RecipesSeoParentId = 'recipes___seo___parent___id',
  RecipesSeoStrapiId = 'recipes___seo___strapi_id',
  RecipesSlug = 'recipes___slug',
  RecipesStrapiId = 'recipes___strapi_id',
  RecipesTags = 'recipes___tags',
  RecipesTagsChildren = 'recipes___tags___children',
  RecipesTagsChildrenChildren = 'recipes___tags___children___children',
  RecipesTagsChildrenId = 'recipes___tags___children___id',
  RecipesTagsCreatedAt = 'recipes___tags___createdAt',
  RecipesTagsId = 'recipes___tags___id',
  RecipesTagsInternalContent = 'recipes___tags___internal___content',
  RecipesTagsInternalContentDigest = 'recipes___tags___internal___contentDigest',
  RecipesTagsInternalDescription = 'recipes___tags___internal___description',
  RecipesTagsInternalFieldOwners = 'recipes___tags___internal___fieldOwners',
  RecipesTagsInternalIgnoreType = 'recipes___tags___internal___ignoreType',
  RecipesTagsInternalMediaType = 'recipes___tags___internal___mediaType',
  RecipesTagsInternalOwner = 'recipes___tags___internal___owner',
  RecipesTagsInternalType = 'recipes___tags___internal___type',
  RecipesTagsName = 'recipes___tags___name',
  RecipesTagsParentChildren = 'recipes___tags___parent___children',
  RecipesTagsParentId = 'recipes___tags___parent___id',
  RecipesTagsRecipes = 'recipes___tags___recipes',
  RecipesTagsRecipesChildren = 'recipes___tags___recipes___children',
  RecipesTagsRecipesChildrenStrapiRecipeDirectionsTextnode = 'recipes___tags___recipes___childrenStrapiRecipeDirectionsTextnode',
  RecipesTagsRecipesChildrenStrapiRecipeIngredientsTextnode = 'recipes___tags___recipes___childrenStrapiRecipeIngredientsTextnode',
  RecipesTagsRecipesCreatedAt = 'recipes___tags___recipes___createdAt',
  RecipesTagsRecipesGallery = 'recipes___tags___recipes___gallery',
  RecipesTagsRecipesHeadline = 'recipes___tags___recipes___headline',
  RecipesTagsRecipesId = 'recipes___tags___recipes___id',
  RecipesTagsRecipesPreparationTime = 'recipes___tags___recipes___preparationTime',
  RecipesTagsRecipesPublishedAt = 'recipes___tags___recipes___publishedAt',
  RecipesTagsRecipesSlug = 'recipes___tags___recipes___slug',
  RecipesTagsRecipesStrapiId = 'recipes___tags___recipes___strapi_id',
  RecipesTagsRecipesTags = 'recipes___tags___recipes___tags',
  RecipesTagsRecipesTitle = 'recipes___tags___recipes___title',
  RecipesTagsRecipesUpdatedAt = 'recipes___tags___recipes___updatedAt',
  RecipesTagsSlug = 'recipes___tags___slug',
  RecipesTagsStrapiId = 'recipes___tags___strapi_id',
  RecipesTagsUpdatedAt = 'recipes___tags___updatedAt',
  RecipesTitle = 'recipes___title',
  RecipesUpdatedAt = 'recipes___updatedAt',
  Slug = 'slug',
  StrapiId = 'strapi_id',
  UpdatedAt = 'updatedAt',
}

export type Strapi_TagFilterInput = {
  children?: InputMaybe<NodeFilterListInput>
  createdAt?: InputMaybe<DateQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  name?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  recipes?: InputMaybe<Strapi_RecipeFilterListInput>
  slug?: InputMaybe<StringQueryOperatorInput>
  strapi_id?: InputMaybe<IntQueryOperatorInput>
  updatedAt?: InputMaybe<DateQueryOperatorInput>
}

export type Strapi_TagFilterListInput = {
  elemMatch?: InputMaybe<Strapi_TagFilterInput>
}

export type Strapi_TagGroupConnection = {
  __typename?: 'STRAPI_TAGGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi_TagEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<Strapi_TagGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi_Tag>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi_TagGroupConnectionDistinctArgs = {
  field: Strapi_TagFieldsEnum
}

export type Strapi_TagGroupConnectionGroupArgs = {
  field: Strapi_TagFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi_TagGroupConnectionMaxArgs = {
  field: Strapi_TagFieldsEnum
}

export type Strapi_TagGroupConnectionMinArgs = {
  field: Strapi_TagFieldsEnum
}

export type Strapi_TagGroupConnectionSumArgs = {
  field: Strapi_TagFieldsEnum
}

export type Strapi_TagSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi_TagFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type Strapi__Component_Seo_Description = Node & {
  __typename?: 'STRAPI__COMPONENT_SEO_DESCRIPTION'
  children: Array<Node>
  htmlDescription?: Maybe<Scalars['String']>
  htmlTitle?: Maybe<Scalars['String']>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
  strapi_id?: Maybe<Scalars['Int']>
}

export type Strapi__Component_Seo_DescriptionConnection = {
  __typename?: 'STRAPI__COMPONENT_SEO_DESCRIPTIONConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi__Component_Seo_DescriptionEdge>
  group: Array<Strapi__Component_Seo_DescriptionGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi__Component_Seo_Description>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi__Component_Seo_DescriptionConnectionDistinctArgs = {
  field: Strapi__Component_Seo_DescriptionFieldsEnum
}

export type Strapi__Component_Seo_DescriptionConnectionGroupArgs = {
  field: Strapi__Component_Seo_DescriptionFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi__Component_Seo_DescriptionConnectionMaxArgs = {
  field: Strapi__Component_Seo_DescriptionFieldsEnum
}

export type Strapi__Component_Seo_DescriptionConnectionMinArgs = {
  field: Strapi__Component_Seo_DescriptionFieldsEnum
}

export type Strapi__Component_Seo_DescriptionConnectionSumArgs = {
  field: Strapi__Component_Seo_DescriptionFieldsEnum
}

export type Strapi__Component_Seo_DescriptionEdge = {
  __typename?: 'STRAPI__COMPONENT_SEO_DESCRIPTIONEdge'
  next?: Maybe<Strapi__Component_Seo_Description>
  node: Strapi__Component_Seo_Description
  previous?: Maybe<Strapi__Component_Seo_Description>
}

export enum Strapi__Component_Seo_DescriptionFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  HtmlDescription = 'htmlDescription',
  HtmlTitle = 'htmlTitle',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  StrapiId = 'strapi_id',
}

export type Strapi__Component_Seo_DescriptionFilterInput = {
  children?: InputMaybe<NodeFilterListInput>
  htmlDescription?: InputMaybe<StringQueryOperatorInput>
  htmlTitle?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
  strapi_id?: InputMaybe<IntQueryOperatorInput>
}

export type Strapi__Component_Seo_DescriptionGroupConnection = {
  __typename?: 'STRAPI__COMPONENT_SEO_DESCRIPTIONGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi__Component_Seo_DescriptionEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<Strapi__Component_Seo_DescriptionGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi__Component_Seo_Description>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi__Component_Seo_DescriptionGroupConnectionDistinctArgs = {
  field: Strapi__Component_Seo_DescriptionFieldsEnum
}

export type Strapi__Component_Seo_DescriptionGroupConnectionGroupArgs = {
  field: Strapi__Component_Seo_DescriptionFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi__Component_Seo_DescriptionGroupConnectionMaxArgs = {
  field: Strapi__Component_Seo_DescriptionFieldsEnum
}

export type Strapi__Component_Seo_DescriptionGroupConnectionMinArgs = {
  field: Strapi__Component_Seo_DescriptionFieldsEnum
}

export type Strapi__Component_Seo_DescriptionGroupConnectionSumArgs = {
  field: Strapi__Component_Seo_DescriptionFieldsEnum
}

export type Strapi__Component_Seo_DescriptionSortInput = {
  fields?: InputMaybe<
    Array<InputMaybe<Strapi__Component_Seo_DescriptionFieldsEnum>>
  >
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type Strapi__Media = Node & {
  __typename?: 'STRAPI__MEDIA'
  children: Array<Node>
  createdAt?: Maybe<Scalars['Date']>
  ext?: Maybe<Scalars['String']>
  formats?: Maybe<Strapi__MediaFormats>
  hash?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  image?: Maybe<File>
  internal: Internal
  localFile?: Maybe<File>
  mime?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  parent?: Maybe<Node>
  size?: Maybe<Scalars['Float']>
  strapi_id?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['Date']>
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
}

export type Strapi__MediaCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type Strapi__MediaUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type Strapi__MediaConnection = {
  __typename?: 'STRAPI__MEDIAConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi__MediaEdge>
  group: Array<Strapi__MediaGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi__Media>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi__MediaConnectionDistinctArgs = {
  field: Strapi__MediaFieldsEnum
}

export type Strapi__MediaConnectionGroupArgs = {
  field: Strapi__MediaFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi__MediaConnectionMaxArgs = {
  field: Strapi__MediaFieldsEnum
}

export type Strapi__MediaConnectionMinArgs = {
  field: Strapi__MediaFieldsEnum
}

export type Strapi__MediaConnectionSumArgs = {
  field: Strapi__MediaFieldsEnum
}

export type Strapi__MediaEdge = {
  __typename?: 'STRAPI__MEDIAEdge'
  next?: Maybe<Strapi__Media>
  node: Strapi__Media
  previous?: Maybe<Strapi__Media>
}

export enum Strapi__MediaFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CreatedAt = 'createdAt',
  Ext = 'ext',
  FormatsThumbnailExt = 'formats___thumbnail___ext',
  FormatsThumbnailHash = 'formats___thumbnail___hash',
  FormatsThumbnailHeight = 'formats___thumbnail___height',
  FormatsThumbnailMime = 'formats___thumbnail___mime',
  FormatsThumbnailName = 'formats___thumbnail___name',
  FormatsThumbnailSize = 'formats___thumbnail___size',
  FormatsThumbnailUrl = 'formats___thumbnail___url',
  FormatsThumbnailWidth = 'formats___thumbnail___width',
  Hash = 'hash',
  Height = 'height',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  LocalFileAbsolutePath = 'localFile___absolutePath',
  LocalFileAccessTime = 'localFile___accessTime',
  LocalFileAtime = 'localFile___atime',
  LocalFileAtimeMs = 'localFile___atimeMs',
  LocalFileBase = 'localFile___base',
  LocalFileBirthTime = 'localFile___birthTime',
  LocalFileBirthtime = 'localFile___birthtime',
  LocalFileBirthtimeMs = 'localFile___birthtimeMs',
  LocalFileBlksize = 'localFile___blksize',
  LocalFileBlocks = 'localFile___blocks',
  LocalFileChangeTime = 'localFile___changeTime',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpChildren = 'localFile___childImageSharp___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpChildrenChildren = 'localFile___childImageSharp___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpChildrenId = 'localFile___childImageSharp___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFixedAspectRatio = 'localFile___childImageSharp___fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFixedBase64 = 'localFile___childImageSharp___fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFixedHeight = 'localFile___childImageSharp___fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFixedOriginalName = 'localFile___childImageSharp___fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFixedSrc = 'localFile___childImageSharp___fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFixedSrcSet = 'localFile___childImageSharp___fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFixedSrcSetWebp = 'localFile___childImageSharp___fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFixedSrcWebp = 'localFile___childImageSharp___fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFixedTracedSvg = 'localFile___childImageSharp___fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFixedWidth = 'localFile___childImageSharp___fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFluidAspectRatio = 'localFile___childImageSharp___fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFluidBase64 = 'localFile___childImageSharp___fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFluidOriginalImg = 'localFile___childImageSharp___fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFluidOriginalName = 'localFile___childImageSharp___fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFluidPresentationHeight = 'localFile___childImageSharp___fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFluidPresentationWidth = 'localFile___childImageSharp___fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFluidSizes = 'localFile___childImageSharp___fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFluidSrc = 'localFile___childImageSharp___fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFluidSrcSet = 'localFile___childImageSharp___fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFluidSrcSetWebp = 'localFile___childImageSharp___fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFluidSrcWebp = 'localFile___childImageSharp___fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpFluidTracedSvg = 'localFile___childImageSharp___fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpGatsbyImageData = 'localFile___childImageSharp___gatsbyImageData',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpId = 'localFile___childImageSharp___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpInternalContent = 'localFile___childImageSharp___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpInternalContentDigest = 'localFile___childImageSharp___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpInternalDescription = 'localFile___childImageSharp___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpInternalFieldOwners = 'localFile___childImageSharp___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpInternalIgnoreType = 'localFile___childImageSharp___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpInternalMediaType = 'localFile___childImageSharp___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpInternalOwner = 'localFile___childImageSharp___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpInternalType = 'localFile___childImageSharp___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpOriginalHeight = 'localFile___childImageSharp___original___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpOriginalSrc = 'localFile___childImageSharp___original___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpOriginalWidth = 'localFile___childImageSharp___original___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpParentChildren = 'localFile___childImageSharp___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpParentId = 'localFile___childImageSharp___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpResizeAspectRatio = 'localFile___childImageSharp___resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpResizeHeight = 'localFile___childImageSharp___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpResizeOriginalName = 'localFile___childImageSharp___resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpResizeSrc = 'localFile___childImageSharp___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpResizeTracedSvg = 'localFile___childImageSharp___resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildImageSharpResizeWidth = 'localFile___childImageSharp___resize___width',
  LocalFileChildren = 'localFile___children',
  LocalFileChildrenImageSharp = 'localFile___childrenImageSharp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpChildren = 'localFile___childrenImageSharp___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpChildrenChildren = 'localFile___childrenImageSharp___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpChildrenId = 'localFile___childrenImageSharp___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFixedAspectRatio = 'localFile___childrenImageSharp___fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFixedBase64 = 'localFile___childrenImageSharp___fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFixedHeight = 'localFile___childrenImageSharp___fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFixedOriginalName = 'localFile___childrenImageSharp___fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFixedSrc = 'localFile___childrenImageSharp___fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFixedSrcSet = 'localFile___childrenImageSharp___fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFixedSrcSetWebp = 'localFile___childrenImageSharp___fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFixedSrcWebp = 'localFile___childrenImageSharp___fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFixedTracedSvg = 'localFile___childrenImageSharp___fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFixedWidth = 'localFile___childrenImageSharp___fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFluidAspectRatio = 'localFile___childrenImageSharp___fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFluidBase64 = 'localFile___childrenImageSharp___fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFluidOriginalImg = 'localFile___childrenImageSharp___fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFluidOriginalName = 'localFile___childrenImageSharp___fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFluidPresentationHeight = 'localFile___childrenImageSharp___fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFluidPresentationWidth = 'localFile___childrenImageSharp___fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFluidSizes = 'localFile___childrenImageSharp___fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFluidSrc = 'localFile___childrenImageSharp___fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFluidSrcSet = 'localFile___childrenImageSharp___fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFluidSrcSetWebp = 'localFile___childrenImageSharp___fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFluidSrcWebp = 'localFile___childrenImageSharp___fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpFluidTracedSvg = 'localFile___childrenImageSharp___fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpGatsbyImageData = 'localFile___childrenImageSharp___gatsbyImageData',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpId = 'localFile___childrenImageSharp___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpInternalContent = 'localFile___childrenImageSharp___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpInternalContentDigest = 'localFile___childrenImageSharp___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpInternalDescription = 'localFile___childrenImageSharp___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpInternalFieldOwners = 'localFile___childrenImageSharp___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpInternalIgnoreType = 'localFile___childrenImageSharp___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpInternalMediaType = 'localFile___childrenImageSharp___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpInternalOwner = 'localFile___childrenImageSharp___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpInternalType = 'localFile___childrenImageSharp___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpOriginalHeight = 'localFile___childrenImageSharp___original___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpOriginalSrc = 'localFile___childrenImageSharp___original___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpOriginalWidth = 'localFile___childrenImageSharp___original___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpParentChildren = 'localFile___childrenImageSharp___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpParentId = 'localFile___childrenImageSharp___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpResizeAspectRatio = 'localFile___childrenImageSharp___resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpResizeHeight = 'localFile___childrenImageSharp___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpResizeOriginalName = 'localFile___childrenImageSharp___resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpResizeSrc = 'localFile___childrenImageSharp___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpResizeTracedSvg = 'localFile___childrenImageSharp___resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LocalFileChildrenImageSharpResizeWidth = 'localFile___childrenImageSharp___resize___width',
  LocalFileChildrenChildren = 'localFile___children___children',
  LocalFileChildrenChildrenChildren = 'localFile___children___children___children',
  LocalFileChildrenChildrenId = 'localFile___children___children___id',
  LocalFileChildrenId = 'localFile___children___id',
  LocalFileChildrenInternalContent = 'localFile___children___internal___content',
  LocalFileChildrenInternalContentDigest = 'localFile___children___internal___contentDigest',
  LocalFileChildrenInternalDescription = 'localFile___children___internal___description',
  LocalFileChildrenInternalFieldOwners = 'localFile___children___internal___fieldOwners',
  LocalFileChildrenInternalIgnoreType = 'localFile___children___internal___ignoreType',
  LocalFileChildrenInternalMediaType = 'localFile___children___internal___mediaType',
  LocalFileChildrenInternalOwner = 'localFile___children___internal___owner',
  LocalFileChildrenInternalType = 'localFile___children___internal___type',
  LocalFileChildrenParentChildren = 'localFile___children___parent___children',
  LocalFileChildrenParentId = 'localFile___children___parent___id',
  LocalFileCtime = 'localFile___ctime',
  LocalFileCtimeMs = 'localFile___ctimeMs',
  LocalFileDev = 'localFile___dev',
  LocalFileDir = 'localFile___dir',
  LocalFileExt = 'localFile___ext',
  LocalFileExtension = 'localFile___extension',
  LocalFileGid = 'localFile___gid',
  LocalFileId = 'localFile___id',
  LocalFileIno = 'localFile___ino',
  LocalFileInternalContent = 'localFile___internal___content',
  LocalFileInternalContentDigest = 'localFile___internal___contentDigest',
  LocalFileInternalDescription = 'localFile___internal___description',
  LocalFileInternalFieldOwners = 'localFile___internal___fieldOwners',
  LocalFileInternalIgnoreType = 'localFile___internal___ignoreType',
  LocalFileInternalMediaType = 'localFile___internal___mediaType',
  LocalFileInternalOwner = 'localFile___internal___owner',
  LocalFileInternalType = 'localFile___internal___type',
  LocalFileMode = 'localFile___mode',
  LocalFileModifiedTime = 'localFile___modifiedTime',
  LocalFileMtime = 'localFile___mtime',
  LocalFileMtimeMs = 'localFile___mtimeMs',
  LocalFileName = 'localFile___name',
  LocalFileNlink = 'localFile___nlink',
  LocalFileParentChildren = 'localFile___parent___children',
  LocalFileParentChildrenChildren = 'localFile___parent___children___children',
  LocalFileParentChildrenId = 'localFile___parent___children___id',
  LocalFileParentId = 'localFile___parent___id',
  LocalFileParentInternalContent = 'localFile___parent___internal___content',
  LocalFileParentInternalContentDigest = 'localFile___parent___internal___contentDigest',
  LocalFileParentInternalDescription = 'localFile___parent___internal___description',
  LocalFileParentInternalFieldOwners = 'localFile___parent___internal___fieldOwners',
  LocalFileParentInternalIgnoreType = 'localFile___parent___internal___ignoreType',
  LocalFileParentInternalMediaType = 'localFile___parent___internal___mediaType',
  LocalFileParentInternalOwner = 'localFile___parent___internal___owner',
  LocalFileParentInternalType = 'localFile___parent___internal___type',
  LocalFileParentParentChildren = 'localFile___parent___parent___children',
  LocalFileParentParentId = 'localFile___parent___parent___id',
  LocalFilePrettySize = 'localFile___prettySize',
  LocalFileRdev = 'localFile___rdev',
  LocalFileRelativeDirectory = 'localFile___relativeDirectory',
  LocalFileRelativePath = 'localFile___relativePath',
  LocalFileRoot = 'localFile___root',
  LocalFileSize = 'localFile___size',
  LocalFileSourceInstanceName = 'localFile___sourceInstanceName',
  LocalFileUid = 'localFile___uid',
  LocalFileUrl = 'localFile___url',
  Mime = 'mime',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Size = 'size',
  StrapiId = 'strapi_id',
  UpdatedAt = 'updatedAt',
  Url = 'url',
  Width = 'width',
}

export type Strapi__MediaFilterInput = {
  children?: InputMaybe<NodeFilterListInput>
  createdAt?: InputMaybe<DateQueryOperatorInput>
  ext?: InputMaybe<StringQueryOperatorInput>
  formats?: InputMaybe<Strapi__MediaFormatsFilterInput>
  hash?: InputMaybe<StringQueryOperatorInput>
  height?: InputMaybe<IntQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  localFile?: InputMaybe<FileFilterInput>
  mime?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  size?: InputMaybe<FloatQueryOperatorInput>
  strapi_id?: InputMaybe<IntQueryOperatorInput>
  updatedAt?: InputMaybe<DateQueryOperatorInput>
  url?: InputMaybe<StringQueryOperatorInput>
  width?: InputMaybe<IntQueryOperatorInput>
}

export type Strapi__MediaFilterListInput = {
  elemMatch?: InputMaybe<Strapi__MediaFilterInput>
}

export type Strapi__MediaFormats = {
  __typename?: 'STRAPI__MEDIAFormats'
  thumbnail?: Maybe<Strapi__MediaFormatsThumbnail>
}

export type Strapi__MediaFormatsFilterInput = {
  thumbnail?: InputMaybe<Strapi__MediaFormatsThumbnailFilterInput>
}

export type Strapi__MediaFormatsThumbnail = {
  __typename?: 'STRAPI__MEDIAFormatsThumbnail'
  ext?: Maybe<Scalars['String']>
  hash?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Int']>
  mime?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
}

export type Strapi__MediaFormatsThumbnailFilterInput = {
  ext?: InputMaybe<StringQueryOperatorInput>
  hash?: InputMaybe<StringQueryOperatorInput>
  height?: InputMaybe<IntQueryOperatorInput>
  mime?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<FloatQueryOperatorInput>
  url?: InputMaybe<StringQueryOperatorInput>
  width?: InputMaybe<IntQueryOperatorInput>
}

export type Strapi__MediaGroupConnection = {
  __typename?: 'STRAPI__MEDIAGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<Strapi__MediaEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<Strapi__MediaGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Strapi__Media>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type Strapi__MediaGroupConnectionDistinctArgs = {
  field: Strapi__MediaFieldsEnum
}

export type Strapi__MediaGroupConnectionGroupArgs = {
  field: Strapi__MediaFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type Strapi__MediaGroupConnectionMaxArgs = {
  field: Strapi__MediaFieldsEnum
}

export type Strapi__MediaGroupConnectionMinArgs = {
  field: Strapi__MediaFieldsEnum
}

export type Strapi__MediaGroupConnectionSumArgs = {
  field: Strapi__MediaFieldsEnum
}

export type Strapi__MediaSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi__MediaFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type Site = Node & {
  __typename?: 'Site'
  buildTime?: Maybe<Scalars['Date']>
  children: Array<Node>
  host?: Maybe<Scalars['String']>
  id: Scalars['ID']
  internal: Internal
  jsxRuntime?: Maybe<Scalars['String']>
  parent?: Maybe<Node>
  pathPrefix?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  port?: Maybe<Scalars['Int']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  trailingSlash?: Maybe<Scalars['String']>
}

export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata'
  buildTime?: Maybe<Scalars['Date']>
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
}

export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteBuildMetadataEdge>
  group: Array<SiteBuildMetadataGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge'
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>
  children?: InputMaybe<NodeFilterListInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  parent?: InputMaybe<NodeFilterInput>
}

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteBuildMetadataEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<SiteBuildMetadataGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteConnection = {
  __typename?: 'SiteConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteEdge>
  group: Array<SiteGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Site>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SiteEdge = {
  __typename?: 'SiteEdge'
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Host = 'host',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  JsxRuntime = 'jsxRuntime',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  Port = 'port',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataTitle = 'siteMetadata___title',
  TrailingSlash = 'trailingSlash',
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>
  children?: InputMaybe<NodeFilterListInput>
  host?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  pathPrefix?: InputMaybe<StringQueryOperatorInput>
  polyfill?: InputMaybe<BooleanQueryOperatorInput>
  port?: InputMaybe<IntQueryOperatorInput>
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>
  trailingSlash?: InputMaybe<StringQueryOperatorInput>
}

export type SiteFunction = Node & {
  __typename?: 'SiteFunction'
  absoluteCompiledFilePath: Scalars['String']
  children: Array<Node>
  functionRoute: Scalars['String']
  id: Scalars['ID']
  internal: Internal
  matchPath?: Maybe<Scalars['String']>
  originalAbsoluteFilePath: Scalars['String']
  originalRelativeFilePath: Scalars['String']
  parent?: Maybe<Node>
  pluginName: Scalars['String']
  relativeCompiledFilePath: Scalars['String']
}

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteFunctionEdge>
  group: Array<SiteFunctionGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge'
  next?: Maybe<SiteFunction>
  node: SiteFunction
  previous?: Maybe<SiteFunction>
}

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FunctionRoute = 'functionRoute',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginName = 'pluginName',
  RelativeCompiledFilePath = 'relativeCompiledFilePath',
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>
  children?: InputMaybe<NodeFilterListInput>
  functionRoute?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  matchPath?: InputMaybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  pluginName?: InputMaybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>
}

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteFunctionEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<SiteFunctionGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<SiteGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Site>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SitePage = Node & {
  __typename?: 'SitePage'
  children: Array<Node>
  component: Scalars['String']
  componentChunkName: Scalars['String']
  id: Scalars['ID']
  internal: Internal
  internalComponentName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  pageContext?: Maybe<Scalars['JSON']>
  parent?: Maybe<Node>
  path: Scalars['String']
  pluginCreator?: Maybe<SitePlugin>
}

export type SitePageConnection = {
  __typename?: 'SitePageConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SitePageEdge>
  group: Array<SitePageGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageEdge = {
  __typename?: 'SitePageEdge'
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  Id = 'id',
  InternalComponentName = 'internalComponentName',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  PageContext = 'pageContext',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorPackageJson = 'pluginCreator___packageJson',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptions = 'pluginCreator___pluginOptions',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorVersion = 'pluginCreator___version',
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>
  component?: InputMaybe<StringQueryOperatorInput>
  componentChunkName?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  internalComponentName?: InputMaybe<StringQueryOperatorInput>
  matchPath?: InputMaybe<StringQueryOperatorInput>
  pageContext?: InputMaybe<JsonQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  path?: InputMaybe<StringQueryOperatorInput>
  pluginCreator?: InputMaybe<SitePluginFilterInput>
}

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SitePageEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<SitePageGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  __typename?: 'SitePlugin'
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  name?: Maybe<Scalars['String']>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  packageJson?: Maybe<Scalars['JSON']>
  parent?: Maybe<Node>
  pluginFilepath?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<Scalars['JSON']>
  resolve?: Maybe<Scalars['String']>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  version?: Maybe<Scalars['String']>
}

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SitePluginEdge>
  group: Array<SitePluginGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge'
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  BrowserApIs = 'browserAPIs',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeApIs = 'nodeAPIs',
  PackageJson = 'packageJson',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginFilepath = 'pluginFilepath',
  PluginOptions = 'pluginOptions',
  Resolve = 'resolve',
  SsrApIs = 'ssrAPIs',
  Version = 'version',
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>
  children?: InputMaybe<NodeFilterListInput>
  id?: InputMaybe<StringQueryOperatorInput>
  internal?: InputMaybe<InternalFilterInput>
  name?: InputMaybe<StringQueryOperatorInput>
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>
  packageJson?: InputMaybe<JsonQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>
  resolve?: InputMaybe<StringQueryOperatorInput>
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>
  version?: InputMaybe<StringQueryOperatorInput>
}

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SitePluginEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<SitePluginGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata'
  author?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  siteUrl?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
  author?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  siteUrl?: InputMaybe<StringQueryOperatorInput>
  title?: InputMaybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>
  glob?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  ne?: InputMaybe<Scalars['String']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  regex?: InputMaybe<Scalars['String']>
}

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>
  duotone?: InputMaybe<DuotoneGradient>
  fit?: InputMaybe<ImageFit>
  grayscale?: InputMaybe<Scalars['Boolean']>
  rotate?: InputMaybe<Scalars['Int']>
  trim?: InputMaybe<Scalars['Float']>
}

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>
}

export function createAvifOptionsMock(
  props: Partial<AvifOptions> = {},
): AvifOptions {
  return {
    lossless: null,
    quality: null,
    speed: null,
    ...props,
  }
}

export function createBlurredOptionsMock(
  props: Partial<BlurredOptions> = {},
): BlurredOptions {
  return {
    toFormat: null,
    width: null,
    ...props,
  }
}

export function createBooleanQueryOperatorInputMock(
  props: Partial<BooleanQueryOperatorInput> = {},
): BooleanQueryOperatorInput {
  return {
    eq: null,
    in: null,
    ne: null,
    nin: null,
    ...props,
  }
}

export function createDateQueryOperatorInputMock(
  props: Partial<DateQueryOperatorInput> = {},
): DateQueryOperatorInput {
  return {
    eq: null,
    gt: null,
    gte: null,
    in: null,
    lt: null,
    lte: null,
    ne: null,
    nin: null,
    ...props,
  }
}

export function createDirectoryMock(props: Partial<Directory> = {}): Directory {
  return {
    __typename: 'Directory',
    absolutePath: '',
    accessTime: createDateMock({}),
    atime: createDateMock({}),
    atimeMs: 0,
    base: '',
    birthTime: createDateMock({}),
    birthtime: null,
    birthtimeMs: null,
    changeTime: createDateMock({}),
    children: [],
    ctime: createDateMock({}),
    ctimeMs: 0,
    dev: 0,
    dir: '',
    ext: '',
    extension: '',
    gid: 0,
    id: '',
    ino: 0,
    internal: createInternalMock({}),
    mode: 0,
    modifiedTime: createDateMock({}),
    mtime: createDateMock({}),
    mtimeMs: 0,
    name: '',
    nlink: 0,
    parent: null,
    prettySize: '',
    rdev: 0,
    relativeDirectory: '',
    relativePath: '',
    root: '',
    size: 0,
    sourceInstanceName: '',
    uid: 0,
    ...props,
  }
}

export function createDirectoryConnectionMock(
  props: Partial<DirectoryConnection> = {},
): DirectoryConnection {
  return {
    __typename: 'DirectoryConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createDirectoryEdgeMock(
  props: Partial<DirectoryEdge> = {},
): DirectoryEdge {
  return {
    __typename: 'DirectoryEdge',
    next: null,
    node: createDirectoryMock({}),
    previous: null,
    ...props,
  }
}

export function createDirectoryFilterInputMock(
  props: Partial<DirectoryFilterInput> = {},
): DirectoryFilterInput {
  return {
    absolutePath: null,
    accessTime: null,
    atime: null,
    atimeMs: null,
    base: null,
    birthTime: null,
    birthtime: null,
    birthtimeMs: null,
    changeTime: null,
    children: null,
    ctime: null,
    ctimeMs: null,
    dev: null,
    dir: null,
    ext: null,
    extension: null,
    gid: null,
    id: null,
    ino: null,
    internal: null,
    mode: null,
    modifiedTime: null,
    mtime: null,
    mtimeMs: null,
    name: null,
    nlink: null,
    parent: null,
    prettySize: null,
    rdev: null,
    relativeDirectory: null,
    relativePath: null,
    root: null,
    size: null,
    sourceInstanceName: null,
    uid: null,
    ...props,
  }
}

export function createDirectoryGroupConnectionMock(
  props: Partial<DirectoryGroupConnection> = {},
): DirectoryGroupConnection {
  return {
    __typename: 'DirectoryGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createDirectorySortInputMock(
  props: Partial<DirectorySortInput> = {},
): DirectorySortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createDuotoneGradientMock(
  props: Partial<DuotoneGradient> = {},
): DuotoneGradient {
  return {
    highlight: '',
    opacity: null,
    shadow: '',
    ...props,
  }
}

export function createFileMock(props: Partial<File> = {}): File {
  return {
    __typename: 'File',
    absolutePath: '',
    accessTime: createDateMock({}),
    atime: createDateMock({}),
    atimeMs: 0,
    base: '',
    birthTime: createDateMock({}),
    birthtime: null,
    birthtimeMs: null,
    blksize: null,
    blocks: null,
    changeTime: createDateMock({}),
    childImageSharp: null,
    children: [],
    childrenImageSharp: null,
    ctime: createDateMock({}),
    ctimeMs: 0,
    dev: 0,
    dir: '',
    ext: '',
    extension: '',
    gid: 0,
    id: '',
    ino: 0,
    internal: createInternalMock({}),
    mode: 0,
    modifiedTime: createDateMock({}),
    mtime: createDateMock({}),
    mtimeMs: 0,
    name: '',
    nlink: 0,
    parent: null,
    prettySize: '',
    rdev: 0,
    relativeDirectory: '',
    relativePath: '',
    root: '',
    size: 0,
    sourceInstanceName: '',
    uid: 0,
    url: null,
    ...props,
  }
}

export function createFileConnectionMock(
  props: Partial<FileConnection> = {},
): FileConnection {
  return {
    __typename: 'FileConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createFileEdgeMock(props: Partial<FileEdge> = {}): FileEdge {
  return {
    __typename: 'FileEdge',
    next: null,
    node: createFileMock({}),
    previous: null,
    ...props,
  }
}

export function createFileFilterInputMock(
  props: Partial<FileFilterInput> = {},
): FileFilterInput {
  return {
    absolutePath: null,
    accessTime: null,
    atime: null,
    atimeMs: null,
    base: null,
    birthTime: null,
    birthtime: null,
    birthtimeMs: null,
    blksize: null,
    blocks: null,
    changeTime: null,
    childImageSharp: null,
    children: null,
    childrenImageSharp: null,
    ctime: null,
    ctimeMs: null,
    dev: null,
    dir: null,
    ext: null,
    extension: null,
    gid: null,
    id: null,
    ino: null,
    internal: null,
    mode: null,
    modifiedTime: null,
    mtime: null,
    mtimeMs: null,
    name: null,
    nlink: null,
    parent: null,
    prettySize: null,
    rdev: null,
    relativeDirectory: null,
    relativePath: null,
    root: null,
    size: null,
    sourceInstanceName: null,
    uid: null,
    url: null,
    ...props,
  }
}

export function createFileGroupConnectionMock(
  props: Partial<FileGroupConnection> = {},
): FileGroupConnection {
  return {
    __typename: 'FileGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createFileSortInputMock(
  props: Partial<FileSortInput> = {},
): FileSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createFloatQueryOperatorInputMock(
  props: Partial<FloatQueryOperatorInput> = {},
): FloatQueryOperatorInput {
  return {
    eq: null,
    gt: null,
    gte: null,
    in: null,
    lt: null,
    lte: null,
    ne: null,
    nin: null,
    ...props,
  }
}

export function createImageSharpMock(
  props: Partial<ImageSharp> = {},
): ImageSharp {
  return {
    __typename: 'ImageSharp',
    children: [],
    fixed: null,
    fluid: null,
    gatsbyImageData: createJsonMock({}),
    id: '',
    internal: createInternalMock({}),
    original: null,
    parent: null,
    resize: null,
    ...props,
  }
}

export function createImageSharpConnectionMock(
  props: Partial<ImageSharpConnection> = {},
): ImageSharpConnection {
  return {
    __typename: 'ImageSharpConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createImageSharpEdgeMock(
  props: Partial<ImageSharpEdge> = {},
): ImageSharpEdge {
  return {
    __typename: 'ImageSharpEdge',
    next: null,
    node: createImageSharpMock({}),
    previous: null,
    ...props,
  }
}

export function createImageSharpFilterInputMock(
  props: Partial<ImageSharpFilterInput> = {},
): ImageSharpFilterInput {
  return {
    children: null,
    fixed: null,
    fluid: null,
    gatsbyImageData: null,
    id: null,
    internal: null,
    original: null,
    parent: null,
    resize: null,
    ...props,
  }
}

export function createImageSharpFilterListInputMock(
  props: Partial<ImageSharpFilterListInput> = {},
): ImageSharpFilterListInput {
  return {
    elemMatch: null,
    ...props,
  }
}

export function createImageSharpFixedMock(
  props: Partial<ImageSharpFixed> = {},
): ImageSharpFixed {
  return {
    __typename: 'ImageSharpFixed',
    aspectRatio: null,
    base64: null,
    height: 0,
    originalName: null,
    src: '',
    srcSet: '',
    srcSetWebp: null,
    srcWebp: null,
    tracedSVG: null,
    width: 0,
    ...props,
  }
}

export function createImageSharpFixedFilterInputMock(
  props: Partial<ImageSharpFixedFilterInput> = {},
): ImageSharpFixedFilterInput {
  return {
    aspectRatio: null,
    base64: null,
    height: null,
    originalName: null,
    src: null,
    srcSet: null,
    srcSetWebp: null,
    srcWebp: null,
    tracedSVG: null,
    width: null,
    ...props,
  }
}

export function createImageSharpFluidMock(
  props: Partial<ImageSharpFluid> = {},
): ImageSharpFluid {
  return {
    __typename: 'ImageSharpFluid',
    aspectRatio: 0,
    base64: null,
    originalImg: null,
    originalName: null,
    presentationHeight: 0,
    presentationWidth: 0,
    sizes: '',
    src: '',
    srcSet: '',
    srcSetWebp: null,
    srcWebp: null,
    tracedSVG: null,
    ...props,
  }
}

export function createImageSharpFluidFilterInputMock(
  props: Partial<ImageSharpFluidFilterInput> = {},
): ImageSharpFluidFilterInput {
  return {
    aspectRatio: null,
    base64: null,
    originalImg: null,
    originalName: null,
    presentationHeight: null,
    presentationWidth: null,
    sizes: null,
    src: null,
    srcSet: null,
    srcSetWebp: null,
    srcWebp: null,
    tracedSVG: null,
    ...props,
  }
}

export function createImageSharpGroupConnectionMock(
  props: Partial<ImageSharpGroupConnection> = {},
): ImageSharpGroupConnection {
  return {
    __typename: 'ImageSharpGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createImageSharpOriginalMock(
  props: Partial<ImageSharpOriginal> = {},
): ImageSharpOriginal {
  return {
    __typename: 'ImageSharpOriginal',
    height: null,
    src: null,
    width: null,
    ...props,
  }
}

export function createImageSharpOriginalFilterInputMock(
  props: Partial<ImageSharpOriginalFilterInput> = {},
): ImageSharpOriginalFilterInput {
  return {
    height: null,
    src: null,
    width: null,
    ...props,
  }
}

export function createImageSharpResizeMock(
  props: Partial<ImageSharpResize> = {},
): ImageSharpResize {
  return {
    __typename: 'ImageSharpResize',
    aspectRatio: null,
    height: null,
    originalName: null,
    src: null,
    tracedSVG: null,
    width: null,
    ...props,
  }
}

export function createImageSharpResizeFilterInputMock(
  props: Partial<ImageSharpResizeFilterInput> = {},
): ImageSharpResizeFilterInput {
  return {
    aspectRatio: null,
    height: null,
    originalName: null,
    src: null,
    tracedSVG: null,
    width: null,
    ...props,
  }
}

export function createImageSharpSortInputMock(
  props: Partial<ImageSharpSortInput> = {},
): ImageSharpSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createIntQueryOperatorInputMock(
  props: Partial<IntQueryOperatorInput> = {},
): IntQueryOperatorInput {
  return {
    eq: null,
    gt: null,
    gte: null,
    in: null,
    lt: null,
    lte: null,
    ne: null,
    nin: null,
    ...props,
  }
}

export function createInternalMock(props: Partial<Internal> = {}): Internal {
  return {
    __typename: 'Internal',
    content: null,
    contentDigest: '',
    description: null,
    fieldOwners: null,
    ignoreType: null,
    mediaType: null,
    owner: '',
    type: '',
    ...props,
  }
}

export function createInternalFilterInputMock(
  props: Partial<InternalFilterInput> = {},
): InternalFilterInput {
  return {
    content: null,
    contentDigest: null,
    description: null,
    fieldOwners: null,
    ignoreType: null,
    mediaType: null,
    owner: null,
    type: null,
    ...props,
  }
}

export function createJpgOptionsMock(
  props: Partial<JpgOptions> = {},
): JpgOptions {
  return {
    progressive: null,
    quality: null,
    ...props,
  }
}

export function createJsonQueryOperatorInputMock(
  props: Partial<JsonQueryOperatorInput> = {},
): JsonQueryOperatorInput {
  return {
    eq: null,
    glob: null,
    in: null,
    ne: null,
    nin: null,
    regex: null,
    ...props,
  }
}

export function createMarkdownHeadingMock(
  props: Partial<MarkdownHeading> = {},
): MarkdownHeading {
  return {
    __typename: 'MarkdownHeading',
    depth: null,
    id: null,
    value: null,
    ...props,
  }
}

export function createMarkdownHeadingFilterInputMock(
  props: Partial<MarkdownHeadingFilterInput> = {},
): MarkdownHeadingFilterInput {
  return {
    depth: null,
    id: null,
    value: null,
    ...props,
  }
}

export function createMarkdownHeadingFilterListInputMock(
  props: Partial<MarkdownHeadingFilterListInput> = {},
): MarkdownHeadingFilterListInput {
  return {
    elemMatch: null,
    ...props,
  }
}

export function createMarkdownRemarkMock(
  props: Partial<MarkdownRemark> = {},
): MarkdownRemark {
  return {
    __typename: 'MarkdownRemark',
    children: [],
    excerpt: null,
    excerptAst: null,
    frontmatter: null,
    headings: null,
    html: null,
    htmlAst: null,
    id: '',
    internal: createInternalMock({}),
    parent: null,
    rawMarkdownBody: null,
    tableOfContents: null,
    timeToRead: null,
    wordCount: null,
    ...props,
  }
}

export function createMarkdownRemarkConnectionMock(
  props: Partial<MarkdownRemarkConnection> = {},
): MarkdownRemarkConnection {
  return {
    __typename: 'MarkdownRemarkConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createMarkdownRemarkEdgeMock(
  props: Partial<MarkdownRemarkEdge> = {},
): MarkdownRemarkEdge {
  return {
    __typename: 'MarkdownRemarkEdge',
    next: null,
    node: createMarkdownRemarkMock({}),
    previous: null,
    ...props,
  }
}

export function createMarkdownRemarkFilterInputMock(
  props: Partial<MarkdownRemarkFilterInput> = {},
): MarkdownRemarkFilterInput {
  return {
    children: null,
    excerpt: null,
    excerptAst: null,
    frontmatter: null,
    headings: null,
    html: null,
    htmlAst: null,
    id: null,
    internal: null,
    parent: null,
    rawMarkdownBody: null,
    tableOfContents: null,
    timeToRead: null,
    wordCount: null,
    ...props,
  }
}

export function createMarkdownRemarkFilterListInputMock(
  props: Partial<MarkdownRemarkFilterListInput> = {},
): MarkdownRemarkFilterListInput {
  return {
    elemMatch: null,
    ...props,
  }
}

export function createMarkdownRemarkFrontmatterMock(
  props: Partial<MarkdownRemarkFrontmatter> = {},
): MarkdownRemarkFrontmatter {
  return {
    __typename: 'MarkdownRemarkFrontmatter',
    title: null,
    ...props,
  }
}

export function createMarkdownRemarkFrontmatterFilterInputMock(
  props: Partial<MarkdownRemarkFrontmatterFilterInput> = {},
): MarkdownRemarkFrontmatterFilterInput {
  return {
    title: null,
    ...props,
  }
}

export function createMarkdownRemarkGroupConnectionMock(
  props: Partial<MarkdownRemarkGroupConnection> = {},
): MarkdownRemarkGroupConnection {
  return {
    __typename: 'MarkdownRemarkGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createMarkdownRemarkSortInputMock(
  props: Partial<MarkdownRemarkSortInput> = {},
): MarkdownRemarkSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createMarkdownWordCountMock(
  props: Partial<MarkdownWordCount> = {},
): MarkdownWordCount {
  return {
    __typename: 'MarkdownWordCount',
    paragraphs: null,
    sentences: null,
    words: null,
    ...props,
  }
}

export function createMarkdownWordCountFilterInputMock(
  props: Partial<MarkdownWordCountFilterInput> = {},
): MarkdownWordCountFilterInput {
  return {
    paragraphs: null,
    sentences: null,
    words: null,
    ...props,
  }
}

export function createNodeFilterInputMock(
  props: Partial<NodeFilterInput> = {},
): NodeFilterInput {
  return {
    children: null,
    id: null,
    internal: null,
    parent: null,
    ...props,
  }
}

export function createNodeFilterListInputMock(
  props: Partial<NodeFilterListInput> = {},
): NodeFilterListInput {
  return {
    elemMatch: null,
    ...props,
  }
}

export function createPngOptionsMock(
  props: Partial<PngOptions> = {},
): PngOptions {
  return {
    compressionSpeed: null,
    quality: null,
    ...props,
  }
}

export function createPageInfoMock(props: Partial<PageInfo> = {}): PageInfo {
  return {
    __typename: 'PageInfo',
    currentPage: 0,
    hasNextPage: false,
    hasPreviousPage: false,
    itemCount: 0,
    pageCount: 0,
    perPage: null,
    totalCount: 0,
    ...props,
  }
}

export function createPotraceMock(props: Partial<Potrace> = {}): Potrace {
  return {
    alphaMax: null,
    background: null,
    blackOnWhite: null,
    color: null,
    optCurve: null,
    optTolerance: null,
    threshold: null,
    turdSize: null,
    turnPolicy: null,
    ...props,
  }
}

export function createQueryMock(props: Partial<Query> = {}): Query {
  return {
    __typename: 'Query',
    allDirectory: createDirectoryConnectionMock({}),
    allFile: createFileConnectionMock({}),
    allImageSharp: createImageSharpConnectionMock({}),
    allMarkdownRemark: createMarkdownRemarkConnectionMock({}),
    allRecipeCategory: createRecipeCategoryConnectionMock({}),
    allRecipePart: createRecipePartConnectionMock({}),
    allSite: createSiteConnectionMock({}),
    allSiteBuildMetadata: createSiteBuildMetadataConnectionMock({}),
    allSiteFunction: createSiteFunctionConnectionMock({}),
    allSitePage: createSitePageConnectionMock({}),
    allSitePlugin: createSitePluginConnectionMock({}),
    allStrapiArticle: createStrapi_ArticleConnectionMock({}),
    allStrapiArticleContentTextnode:
      createStrapi_Article_Content_TextnodeConnectionMock({}),
    allStrapiArticleHeadlineTextnode:
      createStrapi_Article_Headline_TextnodeConnectionMock({}),
    allStrapiCategory: createStrapi_CategoryConnectionMock({}),
    allStrapiComponentSeoDescription:
      createStrapi__Component_Seo_DescriptionConnectionMock({}),
    allStrapiMedia: createStrapi__MediaConnectionMock({}),
    allStrapiRecipe: createStrapi_RecipeConnectionMock({}),
    allStrapiRecipeDirectionsTextnode:
      createStrapi_Recipe_Directions_TextnodeConnectionMock({}),
    allStrapiRecipeIngredientsTextnode:
      createStrapi_Recipe_Ingredients_TextnodeConnectionMock({}),
    allStrapiTag: createStrapi_TagConnectionMock({}),
    directory: null,
    file: null,
    imageSharp: null,
    markdownRemark: null,
    recipeCategory: null,
    recipePart: null,
    site: null,
    siteBuildMetadata: null,
    siteFunction: null,
    sitePage: null,
    sitePlugin: null,
    strapiArticle: null,
    strapiArticleContentTextnode: null,
    strapiArticleHeadlineTextnode: null,
    strapiCategory: null,
    strapiComponentSeoDescription: null,
    strapiMedia: null,
    strapiRecipe: null,
    strapiRecipeDirectionsTextnode: null,
    strapiRecipeIngredientsTextnode: null,
    strapiTag: null,
    ...props,
  }
}

export function createRecipeCategoryMock(
  props: Partial<RecipeCategory> = {},
): RecipeCategory {
  return {
    __typename: 'RecipeCategory',
    children: [],
    id: '',
    internal: createInternalMock({}),
    name: null,
    parent: null,
    position: null,
    slug: null,
    ...props,
  }
}

export function createRecipeCategoryConnectionMock(
  props: Partial<RecipeCategoryConnection> = {},
): RecipeCategoryConnection {
  return {
    __typename: 'RecipeCategoryConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createRecipeCategoryEdgeMock(
  props: Partial<RecipeCategoryEdge> = {},
): RecipeCategoryEdge {
  return {
    __typename: 'RecipeCategoryEdge',
    next: null,
    node: createRecipeCategoryMock({}),
    previous: null,
    ...props,
  }
}

export function createRecipeCategoryFilterInputMock(
  props: Partial<RecipeCategoryFilterInput> = {},
): RecipeCategoryFilterInput {
  return {
    children: null,
    id: null,
    internal: null,
    name: null,
    parent: null,
    position: null,
    slug: null,
    ...props,
  }
}

export function createRecipeCategoryGroupConnectionMock(
  props: Partial<RecipeCategoryGroupConnection> = {},
): RecipeCategoryGroupConnection {
  return {
    __typename: 'RecipeCategoryGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createRecipeCategorySortInputMock(
  props: Partial<RecipeCategorySortInput> = {},
): RecipeCategorySortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createRecipePartMock(
  props: Partial<RecipePart> = {},
): RecipePart {
  return {
    __typename: 'RecipePart',
    childMarkdownRemark: null,
    children: [],
    childrenMarkdownRemark: null,
    id: '',
    internal: createInternalMock({}),
    parent: null,
    ...props,
  }
}

export function createRecipePartConnectionMock(
  props: Partial<RecipePartConnection> = {},
): RecipePartConnection {
  return {
    __typename: 'RecipePartConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createRecipePartEdgeMock(
  props: Partial<RecipePartEdge> = {},
): RecipePartEdge {
  return {
    __typename: 'RecipePartEdge',
    next: null,
    node: createRecipePartMock({}),
    previous: null,
    ...props,
  }
}

export function createRecipePartFilterInputMock(
  props: Partial<RecipePartFilterInput> = {},
): RecipePartFilterInput {
  return {
    childMarkdownRemark: null,
    children: null,
    childrenMarkdownRemark: null,
    id: null,
    internal: null,
    parent: null,
    ...props,
  }
}

export function createRecipePartGroupConnectionMock(
  props: Partial<RecipePartGroupConnection> = {},
): RecipePartGroupConnection {
  return {
    __typename: 'RecipePartGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createRecipePartSortInputMock(
  props: Partial<RecipePartSortInput> = {},
): RecipePartSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createStrapi_ArticleMock(
  props: Partial<Strapi_Article> = {},
): Strapi_Article {
  return {
    __typename: 'STRAPI_ARTICLE',
    childStrapiArticleContentTextnode: null,
    childStrapiArticleHeadlineTextnode: null,
    children: [],
    childrenStrapiArticleContentTextnode: null,
    childrenStrapiArticleHeadlineTextnode: null,
    content: null,
    createdAt: null,
    headline: null,
    id: '',
    internal: createInternalMock({}),
    parent: null,
    parsedContent: null,
    parsedHeadline: null,
    publishedAt: null,
    slug: null,
    strapi_id: null,
    title: null,
    updatedAt: null,
    ...props,
  }
}

export function createStrapi_ArticleConnectionMock(
  props: Partial<Strapi_ArticleConnection> = {},
): Strapi_ArticleConnection {
  return {
    __typename: 'STRAPI_ARTICLEConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi_ArticleContentMock(
  props: Partial<Strapi_ArticleContent> = {},
): Strapi_ArticleContent {
  return {
    __typename: 'STRAPI_ARTICLEContent',
    data: null,
    ...props,
  }
}

export function createStrapi_ArticleContentFilterInputMock(
  props: Partial<Strapi_ArticleContentFilterInput> = {},
): Strapi_ArticleContentFilterInput {
  return {
    data: null,
    ...props,
  }
}

export function createStrapi_ArticleEdgeMock(
  props: Partial<Strapi_ArticleEdge> = {},
): Strapi_ArticleEdge {
  return {
    __typename: 'STRAPI_ARTICLEEdge',
    next: null,
    node: createStrapi_ArticleMock({}),
    previous: null,
    ...props,
  }
}

export function createStrapi_ArticleFilterInputMock(
  props: Partial<Strapi_ArticleFilterInput> = {},
): Strapi_ArticleFilterInput {
  return {
    childStrapiArticleContentTextnode: null,
    childStrapiArticleHeadlineTextnode: null,
    children: null,
    childrenStrapiArticleContentTextnode: null,
    childrenStrapiArticleHeadlineTextnode: null,
    content: null,
    createdAt: null,
    headline: null,
    id: null,
    internal: null,
    parent: null,
    publishedAt: null,
    slug: null,
    strapi_id: null,
    title: null,
    updatedAt: null,
    ...props,
  }
}

export function createStrapi_ArticleGroupConnectionMock(
  props: Partial<Strapi_ArticleGroupConnection> = {},
): Strapi_ArticleGroupConnection {
  return {
    __typename: 'STRAPI_ARTICLEGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi_ArticleHeadlineMock(
  props: Partial<Strapi_ArticleHeadline> = {},
): Strapi_ArticleHeadline {
  return {
    __typename: 'STRAPI_ARTICLEHeadline',
    data: null,
    ...props,
  }
}

export function createStrapi_ArticleHeadlineFilterInputMock(
  props: Partial<Strapi_ArticleHeadlineFilterInput> = {},
): Strapi_ArticleHeadlineFilterInput {
  return {
    data: null,
    ...props,
  }
}

export function createStrapi_ArticleSortInputMock(
  props: Partial<Strapi_ArticleSortInput> = {},
): Strapi_ArticleSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createStrapi_Article_Content_TextnodeMock(
  props: Partial<Strapi_Article_Content_Textnode> = {},
): Strapi_Article_Content_Textnode {
  return {
    __typename: 'STRAPI_ARTICLE_CONTENT_TEXTNODE',
    childMarkdownRemark: null,
    children: [],
    childrenMarkdownRemark: null,
    content: null,
    id: '',
    internal: createInternalMock({}),
    parent: null,
    ...props,
  }
}

export function createStrapi_Article_Content_TextnodeConnectionMock(
  props: Partial<Strapi_Article_Content_TextnodeConnection> = {},
): Strapi_Article_Content_TextnodeConnection {
  return {
    __typename: 'STRAPI_ARTICLE_CONTENT_TEXTNODEConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi_Article_Content_TextnodeEdgeMock(
  props: Partial<Strapi_Article_Content_TextnodeEdge> = {},
): Strapi_Article_Content_TextnodeEdge {
  return {
    __typename: 'STRAPI_ARTICLE_CONTENT_TEXTNODEEdge',
    next: null,
    node: createStrapi_Article_Content_TextnodeMock({}),
    previous: null,
    ...props,
  }
}

export function createStrapi_Article_Content_TextnodeFilterInputMock(
  props: Partial<Strapi_Article_Content_TextnodeFilterInput> = {},
): Strapi_Article_Content_TextnodeFilterInput {
  return {
    childMarkdownRemark: null,
    children: null,
    childrenMarkdownRemark: null,
    content: null,
    id: null,
    internal: null,
    parent: null,
    ...props,
  }
}

export function createStrapi_Article_Content_TextnodeFilterListInputMock(
  props: Partial<Strapi_Article_Content_TextnodeFilterListInput> = {},
): Strapi_Article_Content_TextnodeFilterListInput {
  return {
    elemMatch: null,
    ...props,
  }
}

export function createStrapi_Article_Content_TextnodeGroupConnectionMock(
  props: Partial<Strapi_Article_Content_TextnodeGroupConnection> = {},
): Strapi_Article_Content_TextnodeGroupConnection {
  return {
    __typename: 'STRAPI_ARTICLE_CONTENT_TEXTNODEGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi_Article_Content_TextnodeSortInputMock(
  props: Partial<Strapi_Article_Content_TextnodeSortInput> = {},
): Strapi_Article_Content_TextnodeSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createStrapi_Article_Headline_TextnodeMock(
  props: Partial<Strapi_Article_Headline_Textnode> = {},
): Strapi_Article_Headline_Textnode {
  return {
    __typename: 'STRAPI_ARTICLE_HEADLINE_TEXTNODE',
    childMarkdownRemark: null,
    children: [],
    childrenMarkdownRemark: null,
    headline: null,
    id: '',
    internal: createInternalMock({}),
    parent: null,
    ...props,
  }
}

export function createStrapi_Article_Headline_TextnodeConnectionMock(
  props: Partial<Strapi_Article_Headline_TextnodeConnection> = {},
): Strapi_Article_Headline_TextnodeConnection {
  return {
    __typename: 'STRAPI_ARTICLE_HEADLINE_TEXTNODEConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi_Article_Headline_TextnodeEdgeMock(
  props: Partial<Strapi_Article_Headline_TextnodeEdge> = {},
): Strapi_Article_Headline_TextnodeEdge {
  return {
    __typename: 'STRAPI_ARTICLE_HEADLINE_TEXTNODEEdge',
    next: null,
    node: createStrapi_Article_Headline_TextnodeMock({}),
    previous: null,
    ...props,
  }
}

export function createStrapi_Article_Headline_TextnodeFilterInputMock(
  props: Partial<Strapi_Article_Headline_TextnodeFilterInput> = {},
): Strapi_Article_Headline_TextnodeFilterInput {
  return {
    childMarkdownRemark: null,
    children: null,
    childrenMarkdownRemark: null,
    headline: null,
    id: null,
    internal: null,
    parent: null,
    ...props,
  }
}

export function createStrapi_Article_Headline_TextnodeFilterListInputMock(
  props: Partial<Strapi_Article_Headline_TextnodeFilterListInput> = {},
): Strapi_Article_Headline_TextnodeFilterListInput {
  return {
    elemMatch: null,
    ...props,
  }
}

export function createStrapi_Article_Headline_TextnodeGroupConnectionMock(
  props: Partial<Strapi_Article_Headline_TextnodeGroupConnection> = {},
): Strapi_Article_Headline_TextnodeGroupConnection {
  return {
    __typename: 'STRAPI_ARTICLE_HEADLINE_TEXTNODEGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi_Article_Headline_TextnodeSortInputMock(
  props: Partial<Strapi_Article_Headline_TextnodeSortInput> = {},
): Strapi_Article_Headline_TextnodeSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createStrapi_CategoryMock(
  props: Partial<Strapi_Category> = {},
): Strapi_Category {
  return {
    __typename: 'STRAPI_CATEGORY',
    children: [],
    createdAt: null,
    id: '',
    internal: createInternalMock({}),
    name: null,
    parent: null,
    recipes: null,
    slug: null,
    strapi_id: null,
    updatedAt: null,
    ...props,
  }
}

export function createStrapi_CategoryConnectionMock(
  props: Partial<Strapi_CategoryConnection> = {},
): Strapi_CategoryConnection {
  return {
    __typename: 'STRAPI_CATEGORYConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi_CategoryEdgeMock(
  props: Partial<Strapi_CategoryEdge> = {},
): Strapi_CategoryEdge {
  return {
    __typename: 'STRAPI_CATEGORYEdge',
    next: null,
    node: createStrapi_CategoryMock({}),
    previous: null,
    ...props,
  }
}

export function createStrapi_CategoryFilterInputMock(
  props: Partial<Strapi_CategoryFilterInput> = {},
): Strapi_CategoryFilterInput {
  return {
    children: null,
    createdAt: null,
    id: null,
    internal: null,
    name: null,
    parent: null,
    recipes: null,
    slug: null,
    strapi_id: null,
    updatedAt: null,
    ...props,
  }
}

export function createStrapi_CategoryGroupConnectionMock(
  props: Partial<Strapi_CategoryGroupConnection> = {},
): Strapi_CategoryGroupConnection {
  return {
    __typename: 'STRAPI_CATEGORYGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi_CategorySortInputMock(
  props: Partial<Strapi_CategorySortInput> = {},
): Strapi_CategorySortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createStrapi_RecipeMock(
  props: Partial<Strapi_Recipe> = {},
): Strapi_Recipe {
  return {
    __typename: 'STRAPI_RECIPE',
    category: null,
    childStrapiRecipeDirectionsTextnode: null,
    childStrapiRecipeIngredientsTextnode: null,
    children: [],
    childrenStrapiRecipeDirectionsTextnode: null,
    childrenStrapiRecipeIngredientsTextnode: null,
    cover: null,
    createdAt: null,
    directions: null,
    gallery: null,
    headline: null,
    id: '',
    ingredients: null,
    internal: createInternalMock({}),
    parent: null,
    parsedDirections: null,
    parsedHeadline: null,
    parsedIngredients: null,
    preparationTime: null,
    publishedAt: null,
    seo: null,
    slug: null,
    strapi_id: null,
    tags: null,
    title: null,
    updatedAt: null,
    ...props,
  }
}

export function createStrapi_RecipeConnectionMock(
  props: Partial<Strapi_RecipeConnection> = {},
): Strapi_RecipeConnection {
  return {
    __typename: 'STRAPI_RECIPEConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi_RecipeDirectionsMock(
  props: Partial<Strapi_RecipeDirections> = {},
): Strapi_RecipeDirections {
  return {
    __typename: 'STRAPI_RECIPEDirections',
    data: null,
    ...props,
  }
}

export function createStrapi_RecipeDirectionsFilterInputMock(
  props: Partial<Strapi_RecipeDirectionsFilterInput> = {},
): Strapi_RecipeDirectionsFilterInput {
  return {
    data: null,
    ...props,
  }
}

export function createStrapi_RecipeEdgeMock(
  props: Partial<Strapi_RecipeEdge> = {},
): Strapi_RecipeEdge {
  return {
    __typename: 'STRAPI_RECIPEEdge',
    next: null,
    node: createStrapi_RecipeMock({}),
    previous: null,
    ...props,
  }
}

export function createStrapi_RecipeFilterInputMock(
  props: Partial<Strapi_RecipeFilterInput> = {},
): Strapi_RecipeFilterInput {
  return {
    category: null,
    childStrapiRecipeDirectionsTextnode: null,
    childStrapiRecipeIngredientsTextnode: null,
    children: null,
    childrenStrapiRecipeDirectionsTextnode: null,
    childrenStrapiRecipeIngredientsTextnode: null,
    cover: null,
    createdAt: null,
    directions: null,
    gallery: null,
    headline: null,
    id: null,
    ingredients: null,
    internal: null,
    parent: null,
    preparationTime: null,
    publishedAt: null,
    seo: null,
    slug: null,
    strapi_id: null,
    tags: null,
    title: null,
    updatedAt: null,
    ...props,
  }
}

export function createStrapi_RecipeFilterListInputMock(
  props: Partial<Strapi_RecipeFilterListInput> = {},
): Strapi_RecipeFilterListInput {
  return {
    elemMatch: null,
    ...props,
  }
}

export function createStrapi_RecipeGroupConnectionMock(
  props: Partial<Strapi_RecipeGroupConnection> = {},
): Strapi_RecipeGroupConnection {
  return {
    __typename: 'STRAPI_RECIPEGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi_RecipeIngredientsMock(
  props: Partial<Strapi_RecipeIngredients> = {},
): Strapi_RecipeIngredients {
  return {
    __typename: 'STRAPI_RECIPEIngredients',
    data: null,
    ...props,
  }
}

export function createStrapi_RecipeIngredientsFilterInputMock(
  props: Partial<Strapi_RecipeIngredientsFilterInput> = {},
): Strapi_RecipeIngredientsFilterInput {
  return {
    data: null,
    ...props,
  }
}

export function createStrapi_RecipeSortInputMock(
  props: Partial<Strapi_RecipeSortInput> = {},
): Strapi_RecipeSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createStrapi_Recipe_Directions_TextnodeMock(
  props: Partial<Strapi_Recipe_Directions_Textnode> = {},
): Strapi_Recipe_Directions_Textnode {
  return {
    __typename: 'STRAPI_RECIPE_DIRECTIONS_TEXTNODE',
    childMarkdownRemark: null,
    children: [],
    childrenMarkdownRemark: null,
    directions: null,
    id: '',
    internal: createInternalMock({}),
    parent: null,
    ...props,
  }
}

export function createStrapi_Recipe_Directions_TextnodeConnectionMock(
  props: Partial<Strapi_Recipe_Directions_TextnodeConnection> = {},
): Strapi_Recipe_Directions_TextnodeConnection {
  return {
    __typename: 'STRAPI_RECIPE_DIRECTIONS_TEXTNODEConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi_Recipe_Directions_TextnodeEdgeMock(
  props: Partial<Strapi_Recipe_Directions_TextnodeEdge> = {},
): Strapi_Recipe_Directions_TextnodeEdge {
  return {
    __typename: 'STRAPI_RECIPE_DIRECTIONS_TEXTNODEEdge',
    next: null,
    node: createStrapi_Recipe_Directions_TextnodeMock({}),
    previous: null,
    ...props,
  }
}

export function createStrapi_Recipe_Directions_TextnodeFilterInputMock(
  props: Partial<Strapi_Recipe_Directions_TextnodeFilterInput> = {},
): Strapi_Recipe_Directions_TextnodeFilterInput {
  return {
    childMarkdownRemark: null,
    children: null,
    childrenMarkdownRemark: null,
    directions: null,
    id: null,
    internal: null,
    parent: null,
    ...props,
  }
}

export function createStrapi_Recipe_Directions_TextnodeFilterListInputMock(
  props: Partial<Strapi_Recipe_Directions_TextnodeFilterListInput> = {},
): Strapi_Recipe_Directions_TextnodeFilterListInput {
  return {
    elemMatch: null,
    ...props,
  }
}

export function createStrapi_Recipe_Directions_TextnodeGroupConnectionMock(
  props: Partial<Strapi_Recipe_Directions_TextnodeGroupConnection> = {},
): Strapi_Recipe_Directions_TextnodeGroupConnection {
  return {
    __typename: 'STRAPI_RECIPE_DIRECTIONS_TEXTNODEGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi_Recipe_Directions_TextnodeSortInputMock(
  props: Partial<Strapi_Recipe_Directions_TextnodeSortInput> = {},
): Strapi_Recipe_Directions_TextnodeSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createStrapi_Recipe_Ingredients_TextnodeMock(
  props: Partial<Strapi_Recipe_Ingredients_Textnode> = {},
): Strapi_Recipe_Ingredients_Textnode {
  return {
    __typename: 'STRAPI_RECIPE_INGREDIENTS_TEXTNODE',
    childMarkdownRemark: null,
    children: [],
    childrenMarkdownRemark: null,
    id: '',
    ingredients: null,
    internal: createInternalMock({}),
    parent: null,
    ...props,
  }
}

export function createStrapi_Recipe_Ingredients_TextnodeConnectionMock(
  props: Partial<Strapi_Recipe_Ingredients_TextnodeConnection> = {},
): Strapi_Recipe_Ingredients_TextnodeConnection {
  return {
    __typename: 'STRAPI_RECIPE_INGREDIENTS_TEXTNODEConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi_Recipe_Ingredients_TextnodeEdgeMock(
  props: Partial<Strapi_Recipe_Ingredients_TextnodeEdge> = {},
): Strapi_Recipe_Ingredients_TextnodeEdge {
  return {
    __typename: 'STRAPI_RECIPE_INGREDIENTS_TEXTNODEEdge',
    next: null,
    node: createStrapi_Recipe_Ingredients_TextnodeMock({}),
    previous: null,
    ...props,
  }
}

export function createStrapi_Recipe_Ingredients_TextnodeFilterInputMock(
  props: Partial<Strapi_Recipe_Ingredients_TextnodeFilterInput> = {},
): Strapi_Recipe_Ingredients_TextnodeFilterInput {
  return {
    childMarkdownRemark: null,
    children: null,
    childrenMarkdownRemark: null,
    id: null,
    ingredients: null,
    internal: null,
    parent: null,
    ...props,
  }
}

export function createStrapi_Recipe_Ingredients_TextnodeFilterListInputMock(
  props: Partial<Strapi_Recipe_Ingredients_TextnodeFilterListInput> = {},
): Strapi_Recipe_Ingredients_TextnodeFilterListInput {
  return {
    elemMatch: null,
    ...props,
  }
}

export function createStrapi_Recipe_Ingredients_TextnodeGroupConnectionMock(
  props: Partial<Strapi_Recipe_Ingredients_TextnodeGroupConnection> = {},
): Strapi_Recipe_Ingredients_TextnodeGroupConnection {
  return {
    __typename: 'STRAPI_RECIPE_INGREDIENTS_TEXTNODEGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi_Recipe_Ingredients_TextnodeSortInputMock(
  props: Partial<Strapi_Recipe_Ingredients_TextnodeSortInput> = {},
): Strapi_Recipe_Ingredients_TextnodeSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createStrapi_TagMock(
  props: Partial<Strapi_Tag> = {},
): Strapi_Tag {
  return {
    __typename: 'STRAPI_TAG',
    children: [],
    createdAt: null,
    id: '',
    internal: createInternalMock({}),
    name: null,
    parent: null,
    recipes: null,
    slug: null,
    strapi_id: null,
    updatedAt: null,
    ...props,
  }
}

export function createStrapi_TagConnectionMock(
  props: Partial<Strapi_TagConnection> = {},
): Strapi_TagConnection {
  return {
    __typename: 'STRAPI_TAGConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi_TagEdgeMock(
  props: Partial<Strapi_TagEdge> = {},
): Strapi_TagEdge {
  return {
    __typename: 'STRAPI_TAGEdge',
    next: null,
    node: createStrapi_TagMock({}),
    previous: null,
    ...props,
  }
}

export function createStrapi_TagFilterInputMock(
  props: Partial<Strapi_TagFilterInput> = {},
): Strapi_TagFilterInput {
  return {
    children: null,
    createdAt: null,
    id: null,
    internal: null,
    name: null,
    parent: null,
    recipes: null,
    slug: null,
    strapi_id: null,
    updatedAt: null,
    ...props,
  }
}

export function createStrapi_TagFilterListInputMock(
  props: Partial<Strapi_TagFilterListInput> = {},
): Strapi_TagFilterListInput {
  return {
    elemMatch: null,
    ...props,
  }
}

export function createStrapi_TagGroupConnectionMock(
  props: Partial<Strapi_TagGroupConnection> = {},
): Strapi_TagGroupConnection {
  return {
    __typename: 'STRAPI_TAGGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi_TagSortInputMock(
  props: Partial<Strapi_TagSortInput> = {},
): Strapi_TagSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createStrapi__Component_Seo_DescriptionMock(
  props: Partial<Strapi__Component_Seo_Description> = {},
): Strapi__Component_Seo_Description {
  return {
    __typename: 'STRAPI__COMPONENT_SEO_DESCRIPTION',
    children: [],
    htmlDescription: null,
    htmlTitle: null,
    id: '',
    internal: createInternalMock({}),
    parent: null,
    strapi_id: null,
    ...props,
  }
}

export function createStrapi__Component_Seo_DescriptionConnectionMock(
  props: Partial<Strapi__Component_Seo_DescriptionConnection> = {},
): Strapi__Component_Seo_DescriptionConnection {
  return {
    __typename: 'STRAPI__COMPONENT_SEO_DESCRIPTIONConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi__Component_Seo_DescriptionEdgeMock(
  props: Partial<Strapi__Component_Seo_DescriptionEdge> = {},
): Strapi__Component_Seo_DescriptionEdge {
  return {
    __typename: 'STRAPI__COMPONENT_SEO_DESCRIPTIONEdge',
    next: null,
    node: createStrapi__Component_Seo_DescriptionMock({}),
    previous: null,
    ...props,
  }
}

export function createStrapi__Component_Seo_DescriptionFilterInputMock(
  props: Partial<Strapi__Component_Seo_DescriptionFilterInput> = {},
): Strapi__Component_Seo_DescriptionFilterInput {
  return {
    children: null,
    htmlDescription: null,
    htmlTitle: null,
    id: null,
    internal: null,
    parent: null,
    strapi_id: null,
    ...props,
  }
}

export function createStrapi__Component_Seo_DescriptionGroupConnectionMock(
  props: Partial<Strapi__Component_Seo_DescriptionGroupConnection> = {},
): Strapi__Component_Seo_DescriptionGroupConnection {
  return {
    __typename: 'STRAPI__COMPONENT_SEO_DESCRIPTIONGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi__Component_Seo_DescriptionSortInputMock(
  props: Partial<Strapi__Component_Seo_DescriptionSortInput> = {},
): Strapi__Component_Seo_DescriptionSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createStrapi__MediaMock(
  props: Partial<Strapi__Media> = {},
): Strapi__Media {
  return {
    __typename: 'STRAPI__MEDIA',
    children: [],
    createdAt: null,
    ext: null,
    formats: null,
    hash: null,
    height: null,
    id: '',
    image: null,
    internal: createInternalMock({}),
    localFile: null,
    mime: null,
    name: null,
    parent: null,
    size: null,
    strapi_id: null,
    updatedAt: null,
    url: null,
    width: null,
    ...props,
  }
}

export function createStrapi__MediaConnectionMock(
  props: Partial<Strapi__MediaConnection> = {},
): Strapi__MediaConnection {
  return {
    __typename: 'STRAPI__MEDIAConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi__MediaEdgeMock(
  props: Partial<Strapi__MediaEdge> = {},
): Strapi__MediaEdge {
  return {
    __typename: 'STRAPI__MEDIAEdge',
    next: null,
    node: createStrapi__MediaMock({}),
    previous: null,
    ...props,
  }
}

export function createStrapi__MediaFilterInputMock(
  props: Partial<Strapi__MediaFilterInput> = {},
): Strapi__MediaFilterInput {
  return {
    children: null,
    createdAt: null,
    ext: null,
    formats: null,
    hash: null,
    height: null,
    id: null,
    internal: null,
    localFile: null,
    mime: null,
    name: null,
    parent: null,
    size: null,
    strapi_id: null,
    updatedAt: null,
    url: null,
    width: null,
    ...props,
  }
}

export function createStrapi__MediaFilterListInputMock(
  props: Partial<Strapi__MediaFilterListInput> = {},
): Strapi__MediaFilterListInput {
  return {
    elemMatch: null,
    ...props,
  }
}

export function createStrapi__MediaFormatsMock(
  props: Partial<Strapi__MediaFormats> = {},
): Strapi__MediaFormats {
  return {
    __typename: 'STRAPI__MEDIAFormats',
    thumbnail: null,
    ...props,
  }
}

export function createStrapi__MediaFormatsFilterInputMock(
  props: Partial<Strapi__MediaFormatsFilterInput> = {},
): Strapi__MediaFormatsFilterInput {
  return {
    thumbnail: null,
    ...props,
  }
}

export function createStrapi__MediaFormatsThumbnailMock(
  props: Partial<Strapi__MediaFormatsThumbnail> = {},
): Strapi__MediaFormatsThumbnail {
  return {
    __typename: 'STRAPI__MEDIAFormatsThumbnail',
    ext: null,
    hash: null,
    height: null,
    mime: null,
    name: null,
    size: null,
    url: null,
    width: null,
    ...props,
  }
}

export function createStrapi__MediaFormatsThumbnailFilterInputMock(
  props: Partial<Strapi__MediaFormatsThumbnailFilterInput> = {},
): Strapi__MediaFormatsThumbnailFilterInput {
  return {
    ext: null,
    hash: null,
    height: null,
    mime: null,
    name: null,
    size: null,
    url: null,
    width: null,
    ...props,
  }
}

export function createStrapi__MediaGroupConnectionMock(
  props: Partial<Strapi__MediaGroupConnection> = {},
): Strapi__MediaGroupConnection {
  return {
    __typename: 'STRAPI__MEDIAGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createStrapi__MediaSortInputMock(
  props: Partial<Strapi__MediaSortInput> = {},
): Strapi__MediaSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createSiteMock(props: Partial<Site> = {}): Site {
  return {
    __typename: 'Site',
    buildTime: null,
    children: [],
    host: null,
    id: '',
    internal: createInternalMock({}),
    jsxRuntime: null,
    parent: null,
    pathPrefix: null,
    polyfill: null,
    port: null,
    siteMetadata: null,
    trailingSlash: null,
    ...props,
  }
}

export function createSiteBuildMetadataMock(
  props: Partial<SiteBuildMetadata> = {},
): SiteBuildMetadata {
  return {
    __typename: 'SiteBuildMetadata',
    buildTime: null,
    children: [],
    id: '',
    internal: createInternalMock({}),
    parent: null,
    ...props,
  }
}

export function createSiteBuildMetadataConnectionMock(
  props: Partial<SiteBuildMetadataConnection> = {},
): SiteBuildMetadataConnection {
  return {
    __typename: 'SiteBuildMetadataConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createSiteBuildMetadataEdgeMock(
  props: Partial<SiteBuildMetadataEdge> = {},
): SiteBuildMetadataEdge {
  return {
    __typename: 'SiteBuildMetadataEdge',
    next: null,
    node: createSiteBuildMetadataMock({}),
    previous: null,
    ...props,
  }
}

export function createSiteBuildMetadataFilterInputMock(
  props: Partial<SiteBuildMetadataFilterInput> = {},
): SiteBuildMetadataFilterInput {
  return {
    buildTime: null,
    children: null,
    id: null,
    internal: null,
    parent: null,
    ...props,
  }
}

export function createSiteBuildMetadataGroupConnectionMock(
  props: Partial<SiteBuildMetadataGroupConnection> = {},
): SiteBuildMetadataGroupConnection {
  return {
    __typename: 'SiteBuildMetadataGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createSiteBuildMetadataSortInputMock(
  props: Partial<SiteBuildMetadataSortInput> = {},
): SiteBuildMetadataSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createSiteConnectionMock(
  props: Partial<SiteConnection> = {},
): SiteConnection {
  return {
    __typename: 'SiteConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createSiteEdgeMock(props: Partial<SiteEdge> = {}): SiteEdge {
  return {
    __typename: 'SiteEdge',
    next: null,
    node: createSiteMock({}),
    previous: null,
    ...props,
  }
}

export function createSiteFilterInputMock(
  props: Partial<SiteFilterInput> = {},
): SiteFilterInput {
  return {
    buildTime: null,
    children: null,
    host: null,
    id: null,
    internal: null,
    jsxRuntime: null,
    parent: null,
    pathPrefix: null,
    polyfill: null,
    port: null,
    siteMetadata: null,
    trailingSlash: null,
    ...props,
  }
}

export function createSiteFunctionMock(
  props: Partial<SiteFunction> = {},
): SiteFunction {
  return {
    __typename: 'SiteFunction',
    absoluteCompiledFilePath: '',
    children: [],
    functionRoute: '',
    id: '',
    internal: createInternalMock({}),
    matchPath: null,
    originalAbsoluteFilePath: '',
    originalRelativeFilePath: '',
    parent: null,
    pluginName: '',
    relativeCompiledFilePath: '',
    ...props,
  }
}

export function createSiteFunctionConnectionMock(
  props: Partial<SiteFunctionConnection> = {},
): SiteFunctionConnection {
  return {
    __typename: 'SiteFunctionConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createSiteFunctionEdgeMock(
  props: Partial<SiteFunctionEdge> = {},
): SiteFunctionEdge {
  return {
    __typename: 'SiteFunctionEdge',
    next: null,
    node: createSiteFunctionMock({}),
    previous: null,
    ...props,
  }
}

export function createSiteFunctionFilterInputMock(
  props: Partial<SiteFunctionFilterInput> = {},
): SiteFunctionFilterInput {
  return {
    absoluteCompiledFilePath: null,
    children: null,
    functionRoute: null,
    id: null,
    internal: null,
    matchPath: null,
    originalAbsoluteFilePath: null,
    originalRelativeFilePath: null,
    parent: null,
    pluginName: null,
    relativeCompiledFilePath: null,
    ...props,
  }
}

export function createSiteFunctionGroupConnectionMock(
  props: Partial<SiteFunctionGroupConnection> = {},
): SiteFunctionGroupConnection {
  return {
    __typename: 'SiteFunctionGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createSiteFunctionSortInputMock(
  props: Partial<SiteFunctionSortInput> = {},
): SiteFunctionSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createSiteGroupConnectionMock(
  props: Partial<SiteGroupConnection> = {},
): SiteGroupConnection {
  return {
    __typename: 'SiteGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createSitePageMock(props: Partial<SitePage> = {}): SitePage {
  return {
    __typename: 'SitePage',
    children: [],
    component: '',
    componentChunkName: '',
    id: '',
    internal: createInternalMock({}),
    internalComponentName: '',
    matchPath: null,
    pageContext: null,
    parent: null,
    path: '',
    pluginCreator: null,
    ...props,
  }
}

export function createSitePageConnectionMock(
  props: Partial<SitePageConnection> = {},
): SitePageConnection {
  return {
    __typename: 'SitePageConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createSitePageEdgeMock(
  props: Partial<SitePageEdge> = {},
): SitePageEdge {
  return {
    __typename: 'SitePageEdge',
    next: null,
    node: createSitePageMock({}),
    previous: null,
    ...props,
  }
}

export function createSitePageFilterInputMock(
  props: Partial<SitePageFilterInput> = {},
): SitePageFilterInput {
  return {
    children: null,
    component: null,
    componentChunkName: null,
    id: null,
    internal: null,
    internalComponentName: null,
    matchPath: null,
    pageContext: null,
    parent: null,
    path: null,
    pluginCreator: null,
    ...props,
  }
}

export function createSitePageGroupConnectionMock(
  props: Partial<SitePageGroupConnection> = {},
): SitePageGroupConnection {
  return {
    __typename: 'SitePageGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createSitePageSortInputMock(
  props: Partial<SitePageSortInput> = {},
): SitePageSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createSitePluginMock(
  props: Partial<SitePlugin> = {},
): SitePlugin {
  return {
    __typename: 'SitePlugin',
    browserAPIs: null,
    children: [],
    id: '',
    internal: createInternalMock({}),
    name: null,
    nodeAPIs: null,
    packageJson: null,
    parent: null,
    pluginFilepath: null,
    pluginOptions: null,
    resolve: null,
    ssrAPIs: null,
    version: null,
    ...props,
  }
}

export function createSitePluginConnectionMock(
  props: Partial<SitePluginConnection> = {},
): SitePluginConnection {
  return {
    __typename: 'SitePluginConnection',
    distinct: [],
    edges: [],
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createSitePluginEdgeMock(
  props: Partial<SitePluginEdge> = {},
): SitePluginEdge {
  return {
    __typename: 'SitePluginEdge',
    next: null,
    node: createSitePluginMock({}),
    previous: null,
    ...props,
  }
}

export function createSitePluginFilterInputMock(
  props: Partial<SitePluginFilterInput> = {},
): SitePluginFilterInput {
  return {
    browserAPIs: null,
    children: null,
    id: null,
    internal: null,
    name: null,
    nodeAPIs: null,
    packageJson: null,
    parent: null,
    pluginFilepath: null,
    pluginOptions: null,
    resolve: null,
    ssrAPIs: null,
    version: null,
    ...props,
  }
}

export function createSitePluginGroupConnectionMock(
  props: Partial<SitePluginGroupConnection> = {},
): SitePluginGroupConnection {
  return {
    __typename: 'SitePluginGroupConnection',
    distinct: [],
    edges: [],
    field: '',
    fieldValue: null,
    group: [],
    max: null,
    min: null,
    nodes: [],
    pageInfo: createPageInfoMock({}),
    sum: null,
    totalCount: 0,
    ...props,
  }
}

export function createSitePluginSortInputMock(
  props: Partial<SitePluginSortInput> = {},
): SitePluginSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createSiteSiteMetadataMock(
  props: Partial<SiteSiteMetadata> = {},
): SiteSiteMetadata {
  return {
    __typename: 'SiteSiteMetadata',
    author: null,
    description: null,
    siteUrl: null,
    title: null,
    ...props,
  }
}

export function createSiteSiteMetadataFilterInputMock(
  props: Partial<SiteSiteMetadataFilterInput> = {},
): SiteSiteMetadataFilterInput {
  return {
    author: null,
    description: null,
    siteUrl: null,
    title: null,
    ...props,
  }
}

export function createSiteSortInputMock(
  props: Partial<SiteSortInput> = {},
): SiteSortInput {
  return {
    fields: null,
    order: null,
    ...props,
  }
}

export function createStringQueryOperatorInputMock(
  props: Partial<StringQueryOperatorInput> = {},
): StringQueryOperatorInput {
  return {
    eq: null,
    glob: null,
    in: null,
    ne: null,
    nin: null,
    regex: null,
    ...props,
  }
}

export function createTransformOptionsMock(
  props: Partial<TransformOptions> = {},
): TransformOptions {
  return {
    cropFocus: null,
    duotone: null,
    fit: null,
    grayscale: null,
    rotate: null,
    trim: null,
    ...props,
  }
}

export function createWebPOptionsMock(
  props: Partial<WebPOptions> = {},
): WebPOptions {
  return {
    quality: null,
    ...props,
  }
}
