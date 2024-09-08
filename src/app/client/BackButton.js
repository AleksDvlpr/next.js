'use client';

import { useRouter } from 'next/navigation';
import { StyledButton } from '@/app/client/styles';

export default function BackButton() {
  const router = useRouter();
  return <StyledButton onClick={() => router.back()}>Back</StyledButton>;
}
