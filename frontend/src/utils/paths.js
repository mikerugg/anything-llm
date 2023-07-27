import { API_BASE } from "./constants";

export default {
  home: () => {
    return "/";
  },
  github: () => {
    return "http://HITBOX.ai";
  },
  discord: () => {
    return "http://HITBOX.ai";
  },
  docs: () => {
    return "http://HITBOX.ai";
  },
  mailToMintplex: () => {
    return "mailto:mike@HITBOX.ai";
  },
  hosting: () => {
    return "http://HITBOX.ai";
  },
  workspace: {
    chat: (slug) => {
      return `/workspace/${slug}`;
    },
  },
  exports: () => {
    return `${API_BASE.replace("/api", "")}/system/data-exports`;
  },
  admin: {
    system: () => {
      return `/admin/system-preferences`;
    },
    users: () => {
      return `/admin/users`;
    },
    invites: () => {
      return `/admin/invites`;
    },
    workspaces: () => {
      return `/admin/workspaces`;
    },
    chats: () => {
      return "/admin/workspace-chats";
    },
  },
};
