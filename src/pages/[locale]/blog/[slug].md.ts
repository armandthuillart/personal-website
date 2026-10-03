import { localizedPaths } from '@lib/i18n';
import type { APIRoute } from 'astro';

export const getStaticPaths = () => localizedPaths('blog');

export const GET: APIRoute = ({ props }) =>
  new Response(props.entry.body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
