import { Tables } from "./database.types";
import type { Except } from "type-fest";


export type GroupsIdsType = Except<Tables<"group_members">, 'user_id'>