import { PlaylistResponse } from '@centrual/geyt_api_client';

export interface PlaylistProps {
  playlist: PlaylistResponse;
  opened?: boolean;
}
