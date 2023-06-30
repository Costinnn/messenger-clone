"use client";

import clsx from "clsx";

import useConversation from "../hooks/useConversation";
import EmptyState from "../components/EmptyState";

import React from "react";

const Conversations = () => {
  const { isOpen } = useConversation();
  return (
    <div
      className={clsx(
        "lg:pl-80 h-screen lg:block",
        isOpen ? "block" : "hidden"
      )}
    >
      <EmptyState />
    </div>
  );
};

export default Conversations;
