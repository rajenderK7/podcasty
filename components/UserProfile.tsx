import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs/app-beta";
import React from "react";
import LoginButton from "./LoginButton";

const UserProfile = () => {
  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <LoginButton />
      </SignedOut>
    </div>
  );
};

export default UserProfile;
