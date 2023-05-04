import { cache } from 'react';

export const getBaseUrl = cache(() => 'https://app-dir.vercel.app');
