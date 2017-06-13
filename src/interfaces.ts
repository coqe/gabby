export interface IRouteNode {
  name: string;
  to?: string;
  when: string;
  handler: Function;
  children: IRouteNode[];
}

export type IRoutes = IRouteNode;

export interface IIntent {
  name: string;
  phrases: string[];
  description?: string;
}

export type IIntents = IIntent[];

export interface IEntityValue {
  name: string;
  synonyms: string[];
};

export interface IEntity {
  name: string;
  values: IEntityValue[];
  fuzzy?: boolean;
  description?: string;
}

export type IEntities = IEntity[];

export interface IWatsonCredentials {
  username: string;
  password: string;
  workspaceId: string;
}

export interface IWatsonProps {
  routes: IRoutes;
  intents: IIntents;
  entities: IEntities;
  credentials: IWatsonCredentials;
}

export type IHandlers = Map<string, Function>;