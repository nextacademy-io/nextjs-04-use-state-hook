'use client';

import { ProfilePicture } from '@/components/profile-picture';

export default function Home() {
  function profilePictureClicked(profileUrl: string) {
    console.log(profileUrl);
  }

  return (
    <main className="p-24 flex flex-col gap-8">
      <h1 className="text-3xl font-bold underline">Hello, Workshop</h1>
      <div className="flex gap-4">
        <ProfilePicture onClick={profilePictureClicked} />
        <ProfilePicture
          diameter={150}
          profileUrl="https://randomuser.me/api/portraits/women/6.jpg"
          onClick={profilePictureClicked}
        />
        <ProfilePicture
          diameter={120}
          profileUrl="https://randomuser.me/api/portraits/women/3.jpg"
          onClick={profilePictureClicked}
        />
      </div>
    </main>
  );
}
