// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Community } from "./Community";
import type { CommunityActions } from "./CommunityActions";
import type { ImageDetails } from "./ImageDetails";
import type { InstanceActions } from "./InstanceActions";
import type { Person } from "./Person";
import type { PersonActions } from "./PersonActions";
import type { PersonPostMention } from "./PersonPostMention";
import type { Post } from "./Post";
import type { PostActions } from "./PostActions";

/**
 * A person post mention view.
 */
export type PersonPostMentionView = {
  person_post_mention: PersonPostMention;
  recipient: Person;
  post: Post;
  creator: Person;
  community: Community;
  image_details?: ImageDetails;
  community_actions?: CommunityActions;
  person_actions?: PersonActions;
  post_actions?: PostActions;
  instance_actions?: InstanceActions;
  creator_community_actions?: CommunityActions;
  creator_is_admin: boolean;
  can_mod: boolean;
};
