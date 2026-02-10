"use client";

import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./emptyFavorite";
import { EmptySearch } from "./emptySearch";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; // TODO: Change to API call

  if (!data?.length && query.search) {
    // User Search the data but data doesn't exist
    return (
      <div>
        <EmptySearch />
      </div>
    );
  }

  if (!data?.length && query.favorites) {
    return <div><EmptyFavorites/></div>;
  }

  if (!data?.length) {
    return <div><EmptyBoards/></div>;
  }

  return <div>{JSON.stringify(query)}</div>;
};
