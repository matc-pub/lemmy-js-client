// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { InboxCombinedView } from "./InboxCombinedView";
import type { PaginationCursor } from "./PaginationCursor";

/**
 * Get your inbox (replies, comment mentions, post mentions, and messages)
 */
export type ListInboxResponse = {
  inbox: Array<InboxCombinedView>;
  /**
   * the pagination cursor to use to fetch the next page
   */
  next_page?: PaginationCursor;
};
