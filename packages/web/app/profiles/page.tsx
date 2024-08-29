'use client';

import ProfilePage from "app/pages/ProfilePage";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileContent />
      </Suspense>
    </main>
  );
}

function ProfileContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return <ProfilePage route={{ params: { name: name } }} />;
}
