'use client';
import { useRouter } from 'next/navigation';
import { StyledButton } from '@/app/client/styles';

export default function BackButton({ back }) {
  const router = useRouter();
  return <StyledButton onClick={() => router.back()}>{back}</StyledButton>;
}
