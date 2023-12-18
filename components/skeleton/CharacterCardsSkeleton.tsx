import React from "react";
import { List, ListItem } from "@/components/common/List";
import CharacterCardSkeleton from "./CharacterCardSkeleton";
import { range } from "@/service/range";

const CharacterCardsSkeleton = () => {
  return (
    <List>
      {range(10).map((i) => (
        <ListItem key={i}>
          <CharacterCardSkeleton />
        </ListItem>
      ))}
    </List>
  );
};

export default CharacterCardsSkeleton;
