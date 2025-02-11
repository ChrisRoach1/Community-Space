/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SpacesImport } from './routes/spaces'
import { Route as SpaceAddImport } from './routes/space-add'
import { Route as SignUpImport } from './routes/signUp'
import { Route as SignInImport } from './routes/signIn'
import { Route as PostsImport } from './routes/posts'
import { Route as IndexImport } from './routes/index'
import { Route as SpacesIndexImport } from './routes/spaces.index'
import { Route as PostsIndexImport } from './routes/posts.index'
import { Route as PostsPostIdImport } from './routes/posts.$postId'
import { Route as PostsPostIdDeepImport } from './routes/posts_.$postId.deep'

// Create/Update Routes

const SpacesRoute = SpacesImport.update({
  id: '/spaces',
  path: '/spaces',
  getParentRoute: () => rootRoute,
} as any)

const SpaceAddRoute = SpaceAddImport.update({
  id: '/space-add',
  path: '/space-add',
  getParentRoute: () => rootRoute,
} as any)

const SignUpRoute = SignUpImport.update({
  id: '/signUp',
  path: '/signUp',
  getParentRoute: () => rootRoute,
} as any)

const SignInRoute = SignInImport.update({
  id: '/signIn',
  path: '/signIn',
  getParentRoute: () => rootRoute,
} as any)

const PostsRoute = PostsImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SpacesIndexRoute = SpacesIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => SpacesRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => PostsRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => PostsRoute,
} as any)

const PostsPostIdDeepRoute = PostsPostIdDeepImport.update({
  id: '/posts_/$postId/deep',
  path: '/posts/$postId/deep',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsImport
      parentRoute: typeof rootRoute
    }
    '/signIn': {
      id: '/signIn'
      path: '/signIn'
      fullPath: '/signIn'
      preLoaderRoute: typeof SignInImport
      parentRoute: typeof rootRoute
    }
    '/signUp': {
      id: '/signUp'
      path: '/signUp'
      fullPath: '/signUp'
      preLoaderRoute: typeof SignUpImport
      parentRoute: typeof rootRoute
    }
    '/space-add': {
      id: '/space-add'
      path: '/space-add'
      fullPath: '/space-add'
      preLoaderRoute: typeof SpaceAddImport
      parentRoute: typeof rootRoute
    }
    '/spaces': {
      id: '/spaces'
      path: '/spaces'
      fullPath: '/spaces'
      preLoaderRoute: typeof SpacesImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof PostsImport
    }
    '/posts/': {
      id: '/posts/'
      path: '/'
      fullPath: '/posts/'
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof PostsImport
    }
    '/spaces/': {
      id: '/spaces/'
      path: '/'
      fullPath: '/spaces/'
      preLoaderRoute: typeof SpacesIndexImport
      parentRoute: typeof SpacesImport
    }
    '/posts_/$postId/deep': {
      id: '/posts_/$postId/deep'
      path: '/posts/$postId/deep'
      fullPath: '/posts/$postId/deep'
      preLoaderRoute: typeof PostsPostIdDeepImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface PostsRouteChildren {
  PostsPostIdRoute: typeof PostsPostIdRoute
  PostsIndexRoute: typeof PostsIndexRoute
}

const PostsRouteChildren: PostsRouteChildren = {
  PostsPostIdRoute: PostsPostIdRoute,
  PostsIndexRoute: PostsIndexRoute,
}

const PostsRouteWithChildren = PostsRoute._addFileChildren(PostsRouteChildren)

interface SpacesRouteChildren {
  SpacesIndexRoute: typeof SpacesIndexRoute
}

const SpacesRouteChildren: SpacesRouteChildren = {
  SpacesIndexRoute: SpacesIndexRoute,
}

const SpacesRouteWithChildren =
  SpacesRoute._addFileChildren(SpacesRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/posts': typeof PostsRouteWithChildren
  '/signIn': typeof SignInRoute
  '/signUp': typeof SignUpRoute
  '/space-add': typeof SpaceAddRoute
  '/spaces': typeof SpacesRouteWithChildren
  '/posts/$postId': typeof PostsPostIdRoute
  '/posts/': typeof PostsIndexRoute
  '/spaces/': typeof SpacesIndexRoute
  '/posts/$postId/deep': typeof PostsPostIdDeepRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/signIn': typeof SignInRoute
  '/signUp': typeof SignUpRoute
  '/space-add': typeof SpaceAddRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/posts': typeof PostsIndexRoute
  '/spaces': typeof SpacesIndexRoute
  '/posts/$postId/deep': typeof PostsPostIdDeepRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/posts': typeof PostsRouteWithChildren
  '/signIn': typeof SignInRoute
  '/signUp': typeof SignUpRoute
  '/space-add': typeof SpaceAddRoute
  '/spaces': typeof SpacesRouteWithChildren
  '/posts/$postId': typeof PostsPostIdRoute
  '/posts/': typeof PostsIndexRoute
  '/spaces/': typeof SpacesIndexRoute
  '/posts_/$postId/deep': typeof PostsPostIdDeepRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/posts'
    | '/signIn'
    | '/signUp'
    | '/space-add'
    | '/spaces'
    | '/posts/$postId'
    | '/posts/'
    | '/spaces/'
    | '/posts/$postId/deep'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/signIn'
    | '/signUp'
    | '/space-add'
    | '/posts/$postId'
    | '/posts'
    | '/spaces'
    | '/posts/$postId/deep'
  id:
    | '__root__'
    | '/'
    | '/posts'
    | '/signIn'
    | '/signUp'
    | '/space-add'
    | '/spaces'
    | '/posts/$postId'
    | '/posts/'
    | '/spaces/'
    | '/posts_/$postId/deep'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PostsRoute: typeof PostsRouteWithChildren
  SignInRoute: typeof SignInRoute
  SignUpRoute: typeof SignUpRoute
  SpaceAddRoute: typeof SpaceAddRoute
  SpacesRoute: typeof SpacesRouteWithChildren
  PostsPostIdDeepRoute: typeof PostsPostIdDeepRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PostsRoute: PostsRouteWithChildren,
  SignInRoute: SignInRoute,
  SignUpRoute: SignUpRoute,
  SpaceAddRoute: SpaceAddRoute,
  SpacesRoute: SpacesRouteWithChildren,
  PostsPostIdDeepRoute: PostsPostIdDeepRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/posts",
        "/signIn",
        "/signUp",
        "/space-add",
        "/spaces",
        "/posts_/$postId/deep"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/posts": {
      "filePath": "posts.tsx",
      "children": [
        "/posts/$postId",
        "/posts/"
      ]
    },
    "/signIn": {
      "filePath": "signIn.tsx"
    },
    "/signUp": {
      "filePath": "signUp.tsx"
    },
    "/space-add": {
      "filePath": "space-add.tsx"
    },
    "/spaces": {
      "filePath": "spaces.tsx",
      "children": [
        "/spaces/"
      ]
    },
    "/posts/$postId": {
      "filePath": "posts.$postId.tsx",
      "parent": "/posts"
    },
    "/posts/": {
      "filePath": "posts.index.tsx",
      "parent": "/posts"
    },
    "/spaces/": {
      "filePath": "spaces.index.tsx",
      "parent": "/spaces"
    },
    "/posts_/$postId/deep": {
      "filePath": "posts_.$postId.deep.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
