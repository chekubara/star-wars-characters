"use client";

import useFavoritesStore from "@/hooks/useFavoritesStore";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const FavoritesLabel = () => {
  const { favorites } = useFavoritesStore();
  const controls = useAnimation();
  const count = favorites.length;

  useEffect(() => {
    controls.start({
      y: -10,
      transition: { duration: 0.1 },
    });

    setTimeout(() => {
      controls.start({
        y: 0,
        transition: { duration: 0.2 },
      });
    }, 100);
  }, [count, controls]);

  return (
    <>
      My Favorites
      <motion.span
        className="rounded-full text-xs min-w-[25px] text-center p-1 bg-background-secondary text-primary ml-2 max-sm:hidden"
        animate={controls}
      >
        {count}
      </motion.span>
    </>
  );
};
export default FavoritesLabel;
